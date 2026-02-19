
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from "firebase/storage";
import { 
  ref as dbRef, 
  set, 
  get, 
  child, 
  update, 
  push,
  remove,
  query,
  orderByChild,
  equalTo
} from "firebase/database";
import app, { auth, storage, database } from "@/firebase/config";
import { User, TeamMember, BlogPost, Service, JobPosition, JobApplication, ContactMessage, PartnerRequest } from '@/types';
export * from "@/types";

// Helper to upload files
const uploadFile = async (file: File, path: string): Promise<string> => {
  const storageRef = ref(storage, `${path}/${Date.now()}_${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  return getDownloadURL(snapshot.ref);
};

// Helper to convert file to base64 (Data URL)
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

export const authAPI = {
  login: async (credentials: any) => {
    const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
    const user = userCredential.user;
    
    let role = user.email === "techtidecorporate@gmail.com" ? "admin" : "user";
    
    try {
      // Fetch user profile from Realtime Database to get role
      const rtdbRef = dbRef(database);
      const snapshot = await get(child(rtdbRef, `users/${user.uid}`));
      
      if (snapshot.exists()) {
        const userData = snapshot.val();
        role = userData.role || role;
      } else {
        // If user doesn't exist in database, create profile
        await set(dbRef(database, 'users/' + user.uid), {
          username: user.displayName || user.email?.split('@')[0] || 'User',
          email: user.email,
          role: role,
          createdAt: new Date().toISOString()
        });
      }
    } catch (dbError) {
      console.error("Database error during login, falling back to email-based role:", dbError);
      // We still return success because authentication was successful
    }
    
    return { 
      data: {
        ...user,
        role: role
      }
    };
  },
  loginWithGoogle: async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    let role = user.email === "techtidecorporate@gmail.com" ? "admin" : "user";

    try {
      // Check if user exists in Realtime Database
      const rtdbRef = dbRef(database);
      const snapshot = await get(child(rtdbRef, `users/${user.uid}`));

      if (!snapshot.exists()) {
        // Create new user in Realtime Database
        await set(dbRef(database, 'users/' + user.uid), {
          username: user.displayName,
          email: user.email,
          role: role,
          createdAt: new Date().toISOString(),
          photoURL: user.photoURL
        });
      } else {
         const userData = snapshot.val();
         role = userData.role || role;
         // Optional: Ensure admin role is enforced if it's the admin email
         if (user.email === "techtidecorporate@gmail.com" && userData.role !== "admin") {
           await update(dbRef(database, 'users/' + user.uid), { role: "admin" });
           role = "admin";
         }
      }
    } catch (dbError) {
      console.error("Database error during Google login:", dbError);
    }
    
    return { 
      data: {
        ...user,
        role: role
      }
    };
  },
  register: async (userData: any) => {
    const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    // Create user profile in Realtime Database
    const role = userData.email === "techtidecorporate@gmail.com" ? "admin" : "user";
    try {
      await set(dbRef(database, 'users/' + userCredential.user.uid), {
        username: userData.username,
        email: userData.email,
        role: role,
        createdAt: new Date().toISOString()
      });
    } catch (dbError) {
      console.error("Database error during registration:", dbError);
    }
    return { data: userCredential.user };
  },
  logout: async () => {
    await signOut(auth);
  },
  getProfile: async () => {
    const user = auth.currentUser;
    if (!user) return { data: null };
    
    let role = user.email === "techtidecorporate@gmail.com" ? "admin" : "user";
    let userData: any = null;

    try {
      // Fetch user profile from Realtime Database
      const rtdbRef = dbRef(database);
      const snapshot = await get(child(rtdbRef, `users/${user.uid}`));
      if (snapshot.exists()) {
        userData = snapshot.val();
        role = userData?.role || role;
      }
    } catch (dbError) {
      console.error("Database error during getProfile:", dbError);
      // Fallback to role based on email if DB read fails
    }

    return { 
      data: { 
        id: user.uid, 
        name: userData?.username || user.displayName || (user.email ? user.email.split('@')[0] : 'User'),
        email: user.email || '',
        role: role as 'admin' | 'user'
      } as User 
    };
  },
  // Admin function - Users from Realtime Database
  getUsers: async () => {
    const rtdbRef = dbRef(database);
    const snapshot = await get(child(rtdbRef, `users`));
    
    let users: User[] = [];
    if (snapshot.exists()) {
      const usersData = snapshot.val();
      users = Object.keys(usersData).map(key => ({
        id: key,
        ...usersData[key]
      }));
    }
    return { data: users };
  },
  createUser: async (userData: any) => {
    // For manual creation by admin - using push() would generate an ID, or we can use the pattern like below
    const newRef = push(dbRef(database, 'users')); 
    await set(newRef, userData);
    return { data: { id: newRef.key, ...userData } };
  },
  deleteUser: async (id: string) => {
    await remove(dbRef(database, 'users/' + id));
  }
};

export const teamAPI = {
  getAll: async () => {
    const snapshot = await get(dbRef(database, "teams"));
    let data: TeamMember[] = [];
    if (snapshot.exists()) {
      const val = snapshot.val();
      data = Object.keys(val).map(key => ({ id: key, ...val[key] }));
    }
    return { data };
  },
  create: async (data: FormData | Partial<TeamMember>) => {
    let teamData: any = data;
    if (data instanceof FormData) {
      const image = data.get('image') as File;
      let imageUrl = '';
      if (image) {
        imageUrl = await uploadFile(image, 'teams');
      }
      teamData = Object.fromEntries(data.entries());
      teamData.image = imageUrl;
    }
    const newRef = push(dbRef(database, "teams"));
    await set(newRef, teamData);
    return { data: { id: newRef.key, ...teamData } };
  },
  update: async (id: string, data: FormData | Partial<TeamMember>) => {
    let teamData: any = data;
    if (data instanceof FormData) {
      const image = data.get('image') as File;
      if (image && image.size > 0) {
        const imageUrl = await uploadFile(image, 'teams');
        data.set('image', imageUrl); // Update FormData
      }
      teamData = Object.fromEntries(data.entries());
    }
    await update(dbRef(database, `teams/${id}`), teamData);
    return { data: { id, ...teamData } };
  },
  delete: async (id: string) => {
    await remove(dbRef(database, `teams/${id}`));
  }
};

export const blogAPI = {
  getAll: async () => {
    const snapshot = await get(dbRef(database, "blogs"));
    let data: BlogPost[] = [];
    if (snapshot.exists()) {
      const val = snapshot.val();
      data = Object.keys(val).map(key => ({ id: key, ...val[key] }));
    }
    return { data };
  },
  create: async (data: FormData | Partial<BlogPost>) => {
    let blogData: any = data;
    if (data instanceof FormData) {
      blogData = Object.fromEntries(data.entries());
      const imageFile = data.get('image');
      if (imageFile instanceof File && imageFile.size > 0) {
        blogData.image = await uploadFile(imageFile, 'blogs');
      }
    }

    // Ensure tags and keywords are arrays
    if (typeof blogData.tags === 'string') {
      blogData.tags = blogData.tags.split(',').map((t: string) => t.trim()).filter(Boolean);
    }
    if (typeof blogData.seoKeywords === 'string') {
      blogData.seoKeywords = blogData.seoKeywords.split(',').map((k: string) => k.trim()).filter(Boolean);
    }

    const blogWithTimestamps = {
      ...blogData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const newRef = push(dbRef(database, "blogs"));
    await set(newRef, blogWithTimestamps);
    return { data: { id: newRef.key, ...blogWithTimestamps } };
  },
  update: async (id: string, data: FormData | Partial<BlogPost>) => {
    let blogData: any = data;
    if (data instanceof FormData) {
      const image = data.get('image') as File;
      if (image && image.size > 0) {
        const imageUrl = await uploadFile(image, 'blogs');
        data.set('image', imageUrl);
      }
      blogData = Object.fromEntries(data.entries());
    }
    const updatedData = {
      ...blogData,
      updatedAt: new Date().toISOString(),
    };
    await update(dbRef(database, `blogs/${id}`), updatedData);
    return { data: { id, ...updatedData } };
  },
  delete: async (id: string) => {
    await remove(dbRef(database, `blogs/${id}`));
  }
};

export const serviceAPI = {
  getAll: async () => {
    const snapshot = await get(dbRef(database, "services"));
    let data: Service[] = [];
    if (snapshot.exists()) {
      const val = snapshot.val();
      data = Object.keys(val).map(key => ({ id: key, ...val[key] }));
    }
    return { data };
  },
  getBySlug: async (slug: string) => {
    const q = query(dbRef(database, "services"), orderByChild("slug"), equalTo(slug));
    const snapshot = await get(q);
    if (!snapshot.exists()) return { data: null };
    
    // Since query returns a map of matches (usually 1), we need the first one
    const val = snapshot.val();
    const key = Object.keys(val)[0];
    return { data: { id: key, ...val[key] } as Service };
  },
  create: async (data: FormData | Partial<Service>) => {
     let serviceData: any = data;
     if (data instanceof FormData) {
       serviceData = Object.fromEntries(data.entries());
     }
    const newRef = push(dbRef(database, "services"));
    await set(newRef, serviceData);
    return { data: { id: newRef.key, ...serviceData } };
  },
  update: async (id: string, data: FormData | Partial<Service>) => {
    let serviceData: any = data;
     if (data instanceof FormData) {
       serviceData = Object.fromEntries(data.entries());
     }
    await update(dbRef(database, `services/${id}`), serviceData);
    return { data: { id, ...serviceData } };
  },
  delete: async (id: string) => {
    await remove(dbRef(database, `services/${id}`));
  }
};

export const jobPositionAPI = {
  getActive: async () => {
    const q = query(dbRef(database, "job-positions"), orderByChild("status"), equalTo("active"));
    const snapshot = await get(q);
    
    let data: JobPosition[] = [];
    if (snapshot.exists()) {
      const val = snapshot.val();
      data = Object.keys(val).map(key => ({ id: key, ...val[key] }));
    }
    return { data };
  },
  getAll: async () => {
    const snapshot = await get(dbRef(database, "job-positions"));
    let data: JobPosition[] = [];
    if (snapshot.exists()) {
      const val = snapshot.val();
      data = Object.keys(val).map(key => ({ id: key, ...val[key] }));
    }
    return { data };
  },
  create: async (data: Partial<JobPosition>) => {
    const newRef = push(dbRef(database, "job-positions"));
    await set(newRef, data);
    return { data: { id: newRef.key, ...data } };
  },
  update: async (id: string, data: Partial<JobPosition>) => {
    await update(dbRef(database, `job-positions/${id}`), data);
    return { data: { id, ...data } };
  },
  delete: async (id: string) => {
    await remove(dbRef(database, `job-positions/${id}`));
  }
};

export const jobAPI = {
  getAll: async () => {
    const snapshot = await get(dbRef(database, "jobs"));
    let data: JobApplication[] = [];
    if (snapshot.exists()) {
      const val = snapshot.val();
      data = Object.keys(val).map(key => ({ id: key, ...val[key] }));
    }
    return { data };
  },
  create: async (data: FormData) => {
    const resumeFile = (data.get('resume') || data.get('cv')) as File;
    let cvLink = '';
    if (resumeFile && resumeFile instanceof File) {
        // As per user request: "get storage may store ni karna cv be realtie dataabse may link bana kr stor eho"
        // Using base64 Data URL to store in RTDB
        cvLink = await fileToBase64(resumeFile);
    }
    const jobData = Object.fromEntries(data.entries());
    jobData.resume = cvLink; 
    jobData.createdAt = new Date().toISOString();
    jobData.status = 'pending';
    
    const newRef = push(dbRef(database, "jobs"));
    await set(newRef, jobData);
    return { data: { id: newRef.key, ...jobData } };
  },
  updateStatus: async (id: string, status: string) => {
    await update(dbRef(database, `jobs/${id}`), { status });
    return { data: { id, status } };
  },
  delete: async (id: string) => {
    await remove(dbRef(database, `jobs/${id}`));
  }
};

export const talentPoolAPI = {
  getAll: async () => {
    const snapshot = await get(dbRef(database, "talent-pool"));
    let data: any[] = [];
    if (snapshot.exists()) {
      const val = snapshot.val();
      data = Object.keys(val).map(key => ({ id: key, ...val[key] }));
    }
    return { data };
  },
  create: async (data: any) => {
    // Process file if it's in the data
    if (data.resume && data.resume instanceof File) {
      data.resumeLink = await fileToBase64(data.resume);
      delete data.resume; // Remove the File object before storing
    }

    const newRef = push(dbRef(database, "talent-pool"));
    const submissionData = {
      ...data,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    await set(newRef, submissionData);
    return { data: { id: newRef.key, ...submissionData } };
  },
  updateStatus: async (id: string, status: string) => {
    await update(dbRef(database, `talent-pool/${id}`), { status });
    return { data: { id, status } };
  },
  delete: async (id: string) => {
    await remove(dbRef(database, `talent-pool/${id}`));
  }
};

export const contactAPI = {
  getAll: async () => {
    const snapshot = await get(dbRef(database, "contacts"));
    let data: ContactMessage[] = [];
    if (snapshot.exists()) {
      const val = snapshot.val();
      data = Object.keys(val).map(key => ({ id: key, ...val[key] }));
    }
    return { data };
  },
  create: async (data: any) => {
    const newRef = push(dbRef(database, "contacts"));
    await set(newRef, data);
    return { data: { id: newRef.key, ...data } };
  },
  updateStatus: async (id: string, status: string) => {
    await update(dbRef(database, `contacts/${id}`), { status });
    return { data: { id, status } };
  },
  delete: async (id: string) => {
    await remove(dbRef(database, `contacts/${id}`));
  }
};

export const partnerAPI = {
  getAll: async () => {
    const snapshot = await get(dbRef(database, "partners"));
    let data: PartnerRequest[] = [];
    if (snapshot.exists()) {
      const val = snapshot.val();
      data = Object.keys(val).map(key => ({ id: key, ...val[key] }));
    }
    return { data };
  },
  create: async (data: any) => {
    const newRef = push(dbRef(database, "partners"));
    await set(newRef, data);
    return { data: { id: newRef.key, ...data } };
  }
};

// Export app/auth/storage/database for direct usage if needed
export { app, auth, storage, database };
export default app;
