# Project Sequence Diagrams

This document outlines the key interaction flows within the TechTide project using Mermaid sequence diagrams.

## 1. Authentication Flow

This diagram illustrates the process when a user signs in using email/password or Google.

```mermaid
sequenceDiagram
    participant User
    participant SignInPage
    participant AuthContext
    participant authAPI
    participant Firebase_Auth
    participant Firebase_RTDB

    User->>SignInPage: Enter Credentials / Click Google Sign-In
    SignInPage->>authAPI: login(credentials) / loginWithGoogle()
    authAPI->>Firebase_Auth: signInWithEmailAndPassword / signInWithPopup
    Firebase_Auth-->>authAPI: UserCredential

    authAPI->>Firebase_RTDB: get(child(ref, 'users/uid'))
    alt User exists
        Firebase_RTDB-->>authAPI: User Profile
    else User doesn't exist
        authAPI->>Firebase_RTDB: set(ref, 'users/uid', initialData)
    end

    authAPI-->>SignInPage: Auth Result & Role

    Note over AuthContext, Firebase_Auth: onAuthStateChanged listener
    Firebase_Auth->>AuthContext: onAuthStateChanged(user)
    AuthContext->>authAPI: getProfile()
    authAPI->>Firebase_RTDB: Fetch role/details
    Firebase_RTDB-->>authAPI: Profile Data
    authAPI-->>AuthContext: User Object
    AuthContext-->>SignInPage: Update UI State
```

## 2. Contact Form Submission

This flow describes how a visitor submits a contact inquiry.

```mermaid
sequenceDiagram
    participant User
    participant ContactPage
    participant contactAPI
    participant Firebase_RTDB
    participant emailService
    participant EmailJS

    User->>ContactPage: Fill Form & Submit
    ContactPage->>contactAPI: create(formData)
    contactAPI->>Firebase_RTDB: push(ref, 'messages', messageData)
    Firebase_RTDB-->>contactAPI: Success
    contactAPI-->>ContactPage: Response

    ContactPage->>emailService: sendEmailNotification(formData, "contact")
    emailService->>EmailJS: send(service, admin_template, params)
    emailService->>EmailJS: send(service, user_template, params)
    EmailJS-->>emailService: Confirmation
    emailService-->>ContactPage: Success Result

    ContactPage->>User: Show Success Toast
```

## 3. Appointment Booking

This flow details the appointment scheduling process, including availability check.

```mermaid
sequenceDiagram
    participant User
    participant BookAppointment
    participant Firebase_RTDB
    participant appointmentEmailService
    participant EmailJS

    User->>BookAppointment: Select Date & Time
    BookAppointment->>Firebase_RTDB: get(ref, 'appointments')
    Firebase_RTDB-->>BookAppointment: Existing Appointments
    Note over BookAppointment: checkAvailability(date, time)

    User->>BookAppointment: Submit Booking Form
    BookAppointment->>Firebase_RTDB: push(ref, 'appointments', appointmentData)
    Firebase_RTDB-->>BookAppointment: Success

    BookAppointment->>appointmentEmailService: sendAppointmentEmail("admin", emailData)
    appointmentEmailService->>EmailJS: send(service, admin_template, params)
    EmailJS-->>appointmentEmailService: Sent

    BookAppointment->>User: Show Success State
```
