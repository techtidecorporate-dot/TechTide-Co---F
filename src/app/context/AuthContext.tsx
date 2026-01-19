import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, authAPI } from "@/api";
import { User } from "@/types";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  loginWithGoogle: () => Promise<any>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Fetch additional profile data if needed, or just construct user object
          // For now, we'll try to get the profile from Firestore via our API
          const { data } = await authAPI.getProfile();
          setUser(data as User);
        } catch (error) {
          console.error("Failed to fetch user profile", error);
          // Fallback to basic firebase user data if API fails (though API is just wrapping firestore)
          setUser({
            id: firebaseUser.uid,
            name: firebaseUser.displayName || "User",
            email: firebaseUser.email || "",
            role: "user", // Default or need to fetch from claims/db
          } as User);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    const { data } = await authAPI.login({ email, password });
    // onAuthStateChanged will handle setting the user
    return data;
  };

  const loginWithGoogle = async () => {
    const { data } = await authAPI.loginWithGoogle();
    return data;
  };

  const logout = async () => {
    await authAPI.logout();
    // onAuthStateChanged will set user to null
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, loginWithGoogle, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
