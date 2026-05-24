# 247HealthCenter

**Next-Generation Digital Healthcare Platform**

247HealthCenter is a revolutionary healthcare platform designed to connect patients, doctors, specialists, and emergency support systems through secure online care. Our mission is to make quality healthcare accessible from the comfort of your home, eliminating long waiting room times and improving access to medical services.

## 🌟 Overview

247HealthCenter provides comprehensive digital healthcare services including remote consultations, specialist access, emergency coverage registration, and home-based medical services. Built with modern technology and available 24/7, our platform ensures patients receive timely medical attention regardless of their location.

## ✨ Core Features

### 🏥 Remote Consultation
- Secure video appointments with trusted doctors from anywhere
- Real-time symptom exchange and medical history sharing
- Follow-up recommendations and care plans
- No waiting room delays

### 👨‍⚕️ Specialist Access
- Multi-disciplinary review of complex cases
- Remote specialist evaluation before recommending in-person care
- Faster decision-making for treatment and referral
- Access to 500+ qualified doctors across 50+ specialties

### 🏥 In-Person Escalation
- Seamless transition from virtual to physical hospital care
- Critical cases receive immediate attention
- Coordinated care between virtual and physical teams

### 🚨 Emergency Coverage
- Pre-registration for emergency support
- Priority response from emergency teams
- Pre-paid emergency service fees for faster dispatch
- 24/7 coverage and peace of mind

### 🏠 Home Service Booking
- Doctor visits at home
- Nursing care at home
- Diagnostics at home (lab tests, imaging)
- Physiotherapy at home
- Specialist home visits

## 📊 Platform Statistics

| Metric | Value |
|--------|-------|
| Happy Patients | 10,000+ |
| Qualified Doctors | 500+ |
| Specialties | 50+ |
| Support Availability | 24/7 |
| Patient Satisfaction | 99% |
| Remote Sessions Completed | 50,000+ |

## 🤖 AI Assistant

The 247HealthCenter AI Assistant is available 24/7 to help you:
- Answer questions about our services and platform
- Guide you through booking consultations
- Explain emergency coverage options
- Assist with home service bookings
- Provide healthcare navigation support

## 💻 Technical Architecture

### Frontend
- **Framework**: React with Vite
- **Styling**: Tailwind CSS
- **Deployment**: Static build deployable to any hosting service

### Backend
- **Language**: Go (Golang)
- **Architecture**: RESTful API with JSON responses
- **Structure**: Modular API handlers for health, users, and appointments

### Project Structure
```
247HealthCenter/
├── README.md                 # Project documentation
├── LICENSE                   # MIT License
├── go.mod                    # Go module definition
├── shortcode.go              # Utility functions
├── server/
│   ├── main.go              # Server entry point
│   └── api.go               # API handlers
├── frontend/
│   ├── index.html           # HTML entry point
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── src/
│       ├── main.jsx         # React entry point
│       ├── index.css        # Global styles
│       ├── App.jsx          # Main application wrapper
│       ├── pages/
│       │   └── HealthCenterApp.jsx  # Main landing page
│       └── components/
│           └── AIAssistantProvider.jsx  # 24/7 AI Assistant
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+) and npm (for frontend)
- Go (v1.21+) (for backend)
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dinalegw/247HealthCenter.git
   cd 247HealthCenter
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Build the frontend for production**
   ```bash
   npm run build
   ```

4. **Run the Go backend**
   ```bash
   cd ..
   go mod tidy
   go run ./server
   ```

### Development

Run both frontend and backend concurrently:

```bash
# Terminal 1 - Start the backend
cd 247HealthCenter
go run ./server

# Terminal 2 - Start the frontend dev server
cd 247HealthCenter/frontend
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:8080

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check status |
| `/api/users` | GET | List of users |
| `/api/appointments` | GET | List of appointments |

## 🎯 Why 247HealthCenter?

This platform solves critical healthcare challenges:

- **Eliminate Waiting Rooms**: No more long waits in crowded clinics
- **Informed Decision Making**: Know when in-person care is necessary
- **Home Access**: Receive care without leaving your home
- **Emergency Preparedness**: Rapid response when urgent care is needed
- **Capacity Relief**: Home treatment when hospital beds are limited

## 🤝 Contributing

We welcome contributions from developers, healthcare professionals, and designers!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## 📞 Contact

- **Email**: support@247healthcenter.com
- **Phone**: +234 800 000 0000
- **Support**: 24/7 Healthcare Assistance

## 🔒 Security & Privacy

- HIPAA-compliant data handling
- End-to-end encryption for video consultations
- Secure patient data storage
- Role-based access control

---

© 2026 247HealthCenter. All rights reserved. | Available 24/7 | Worldwide Access