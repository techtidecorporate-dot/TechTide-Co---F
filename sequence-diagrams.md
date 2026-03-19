# TechTide Corporate LLP - Sequence Diagrams

These diagrams map out the core interactions and data flow within the application. They are written using [Mermaid syntax](https://mermaid.js.org/).

## 1. Authentication & Role Assignment Flow
How users and admins authenticate and receive their respective roles from Firebase.

```mermaid
sequenceDiagram
    actor User
    participant Frontend as React Frontend (authAPI)
    participant Auth as Firebase Authentication
    participant RTDB as Firebase Realtime Database
    
    User->>Frontend: Clicks "Sign In" (Email/Google)
    Frontend->>Auth: Request Authentication
    Auth-->>Frontend: Return UserCredential (uid, email)
    
    Frontend->>RTDB: Check if user exists (users/{uid})
    
    alt User Exists
        RTDB-->>Frontend: Return User Profile (including role)
    else User is New
        Frontend->>Frontend: Check if email == techtidecorporate@gmail.com
        alt Is Admin Email
            Frontend->>RTDB: Create User with role: "admin"
        else Is Regular Email
            Frontend->>RTDB: Create User with role: "user"
        end
        RTDB-->>Frontend: Success
    end
    
    Frontend-->>User: Redirect to App (or /admin Dashboard)
```

## 2. Client Submission Flow (e.g., Booking an Appointment)
How a visitor submits data (like booking an appointment) and how the system processes it without a backend server.

```mermaid
sequenceDiagram
    actor Client
    participant UI as BookAppointment.tsx
    participant RTDB as Firebase Realtime DB (appointments)
    participant Email as EmailJS (via sendAppointmentEmail)
    participant Admin UI as Admin Dashboard
    
    Client->>UI: Fills form (Name, Date, Time) & Clicks "Book"
    UI->>UI: set loading state = true
    
    UI->>RTDB: Check Availability (get appointments)
    RTDB-->>UI: Return current schedules
    UI->>UI: Verify date/time is free
    
    alt Time is Unavailable
        UI-->>Client: Show Error Toast
    else Time is Available
        UI->>RTDB: Push new appointment (Status: 'pending')
        RTDB-->>UI: Success (new ID)
        
        UI->>Email: Trigger 'sendAppointmentEmail' to Admin
        Email-->>UI: Email Sent Successfully
        
        UI->>UI: set booked state = true
        UI-->>Client: Show Success Screen ("Appointment Submitted")
    end
    
    %% Later when Admin logs in
    Admin UI->>RTDB: Fetch Appointments
    RTDB-->>Admin UI: Returns 'pending' appointment list
```

## 3. Admin Content Management Flow (Creating a Blog/Team Member)
How an admin creates content and how images/files are handled prior to saving records to the database.

```mermaid
sequenceDiagram
    actor Admin
    participant UI as Admin Dashboard (Blogs.tsx)
    participant API as blogAPI (api/index.ts)
    participant Storage as Firebase Storage
    participant RTDB as Firebase Realtime DB
    
    Admin->>UI: Fills Blog Data & Attaches Image
    Admin->>UI: Clicks "Save/Create"
    
    UI->>API: create(FormData)
    
    API->>Storage: uploadFile(blogImage, 'blogs')
    Storage-->>API: Return Image Download URL
    
    API->>API: Replace File object with Image URL
    API->>API: Parse tags/keywords into arrays 
    API->>API: Attach createdAt / updatedAt timestamps
    
    API->>RTDB: push() new blog entry
    RTDB-->>API: Success (Returns new record ID)
    
    API-->>UI: Return created Blog object
    UI-->>Admin: Show Success Toast & Update List
```

## 4. Admin Action Flow (Updating Job / Partner Statuses)
How an admin reviews submissions and updates statuses (e.g. moving a job application from `pending` to `approved`).

```mermaid
sequenceDiagram
    actor Admin
    participant UI as Admin Layout Layer
    participant API as jobAPI / talentPoolAPI
    participant RTDB as Firebase Realtime DB
    
    Admin->>UI: Views pending applications
    Admin->>UI: Changes status dropdown (e.g. "approved")
    
    UI->>API: updateStatus(id, "approved")
    API->>RTDB: update({ status: "approved" })
    RTDB-->>API: Success
    
    API-->>UI: Confirm status change
    UI-->>Admin: Show Success Toast & Refresh UI State
```
