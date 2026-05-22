# 247HealthCenter

247HealthCenter is a next-generation digital health platform built to connect patients, doctors, and specialists through secure online care. The platform enables remote consultations, emergency response registration, and home service bookings to reduce wait times, improve access to care, and provide a seamless patient experience from home.

## Vision

247HealthCenter is designed to make quality healthcare accessible from the comfort of your home. Patients can book consultations online, connect with doctors and specialists through video, and receive care guidance without waiting in crowded clinics. When cases require urgent or in-person attention, the system supports fast escalation and coordinated physical visits.

## Core Capabilities

- Remote telehealth consultations via secure video calls
- Specialist access and evaluation from anywhere
- In-person escalation for serious or urgent cases
- Hospital and clinic registration for emergency coverage
- Home service booking when hospital bed space is unavailable
- Patient-centric navigation to know when to visit a doctor

## Feature Overview

### Remote Consultation

Patients can request and book remote consultations with qualified doctors and specialists. The platform supports:

- Live video appointments for clinical evaluation
- Secure exchange of symptoms, history, and documents
- Doctor access to patient information for faster triage
- Follow-up recommendations and care plans

### Specialist Access

When a patient needs more advanced care, doctors can bring specialists into the consultation workflow. This enables:

- Multi-disciplinary review of complex cases
- Remote specialist evaluation before recommending in-person care
- Faster decision-making for treatment and referral

### In-Person Escalation

If a remote consultation reveals a serious condition or urgent need, the platform can escalate care to physical visit mode. This ensures:

- Patients receive the right level of care at the right time
- Critical cases are not delayed by unnecessary waiting
- Seamless transition from virtual assessment to hospital or clinic care

### Emergency Coverage

A dedicated emergency section allows users to register with a hospital or clinic and pay emergency service fees in advance. Benefits include:

- Priority response from emergency teams
- Faster dispatch when urgent care is needed
- Peace of mind knowing help is ready if an emergency arises

### Home Service Booking

When hospital bed capacity is limited or a patient prefers care at home, the platform offers home service booking. This includes:

- Scheduling clinical visits at home
- Coordinating nursing, diagnostics, or specialist visits
- Supporting patients who require treatment outside the hospital

## Why 247HealthCenter

This project is built to solve common healthcare challenges:

- Remove hectic queues and long waiting room times
- Help patients decide when to seek in-person care
- Give patients access to care while staying home
- Provide a reliable emergency support pathway
- Enable home-based treatment when hospital beds are unavailable

## Technical Scope

The README serves as the foundation for building both backend and frontend systems. Key technical areas include:

- Patient onboarding and authentication
- Appointment scheduling and calendar management
- Video call integration and telehealth workflows
- Emergency subscription and dispatch logic
- Home service booking and provider coordination
- Role-based access for patients, doctors, specialists, and administrators

## Getting Started

These instructions outline how to prepare the project for development.

### Prerequisites

- Modern web browser
- Node.js and npm (for frontend/backend tooling)
- A code editor such as VS Code

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dinalegw/247HealthCenter.git
   ```
2. Change into the project directory:
   ```bash
   cd 247HealthCenter
   ```
3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
4. Build the React frontend for production:
   ```bash
   npm run build
   ```
5. Build or run the Go backend:
   ```bash
   cd ..
   go mod tidy
   go run ./server
   ```

### Local Development

Run the backend server and the Vite frontend separately during development:

```bash
# Start the backend
cd 247HealthCenter
go run ./server

# In another terminal, start the frontend dev server
cd 247HealthCenter/frontend
npm run dev
```

Open `http://localhost:5173` for frontend development, or `http://localhost:8080` after a production build.

## Project Structure

- `README.md` – Project vision, features, and documentation
- `server/` – Go backend service, API endpoints, and business logic
- `frontend/` – React + Tailwind frontend app source and build files
- `frontend/src/` – React application source files
- `go.mod` – Go module definition for the backend
- `shortcode.go` – sample Go greeting utility

## Contribution

Contributions are encouraged from team members and collaborators:

1. Fork the repository
2. Create a new feature branch: `git checkout -b feature/<name>`
3. Commit with a clear message
4. Push to your branch and submit a pull request

## License

Add a `LICENSE` file to define the project license when ready.

## Contact

For project discussions, feature proposals, or development coordination, use the repository issue tracker or contact the project maintainer directly.
