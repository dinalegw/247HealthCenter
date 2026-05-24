package main

import (
	"encoding/json"
	"net/http"
)

type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	Role string `json:"role"`
}

type Appointment struct {
	ID        int    `json:"id"`
	Patient   string `json:"patient"`
	Clinician string `json:"clinician"`
	Status    string `json:"status"`
	Scheduled string `json:"scheduled"`
}

type AIAssistantRequest struct {
	Message string `json:"message"`
}

type AIAssistantResponse struct {
	Response string `json:"response"`
}

var sampleUsers = []User{
	{ID: 1, Name: "Ada Nurse", Role: "Doctor"},
	{ID: 2, Name: "Ben Specialist", Role: "Specialist"},
	{ID: 3, Name: "Claire Patient", Role: "Patient"},
}

var sampleAppointments = []Appointment{
	{ID: 1, Patient: "Claire Patient", Clinician: "Ada Nurse", Status: "Confirmed", Scheduled: "2026-05-22 14:00"},
	{ID: 2, Patient: "Claire Patient", Clinician: "Ben Specialist", Status: "Pending", Scheduled: "2026-05-23 10:30"},
}

func writeJSON(w http.ResponseWriter, status int, payload any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(payload)
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, http.StatusOK, map[string]string{
		"status":  "ok",
		"service": "247HealthCenter",
	})
}

func appointmentsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		writeJSON(w, http.StatusMethodNotAllowed, map[string]string{"error": "method not allowed"})
		return
	}
	writeJSON(w, http.StatusOK, sampleAppointments)
}

func usersHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		writeJSON(w, http.StatusMethodNotAllowed, map[string]string{"error": "method not allowed"})
		return
	}
	writeJSON(w, http.StatusOK, sampleUsers)
}

func aiAssistantHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		writeJSON(w, http.StatusMethodNotAllowed, map[string]string{"error": "method not allowed"})
		return
	}

	var req AIAssistantRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid request"})
		return
	}

	response := generateAIResponse(req.Message)
	writeJSON(w, http.StatusOK, AIAssistantResponse{Response: response})
}

func generateAIResponse(message string) string {
	msg := message
	lowerMsg := ""
	for _, c := range msg {
		if c >= 'A' && c <= 'Z' {
			lowerMsg += string(c + 32)
		} else {
			lowerMsg += string(c)
		}
	}

	knowledgeBase := map[string]string{
		"emergency": "For emergencies, register for our Emergency Coverage service. This provides priority response and 24/7 coverage. Call +234 800 000 0000 for immediate assistance.",
		"book": "Book a consultation by clicking 'Book Consultation' on the homepage. This schedules a secure video appointment with our qualified doctors.",
		"home service": "We offer home services: Doctor Visit at Home, Nursing Care, Diagnostics at Home, Physiotherapy at Home, and Specialist Visit.",
		"doctor": "We have 500+ qualified doctors across 50+ specialties. Use 'Find Doctors' to locate the right specialist for your needs.",
		"24/7": "247HealthCenter is available 24 hours a day, 7 days a week. Our AI Assistant and medical professionals provide round-the-clock support.",
		"who": "247HealthCenter is a next-generation digital health platform connecting patients, doctors, and specialists through secure online care.",
		"stats": "Our platform serves 10,000+ happy patients with 500+ qualified doctors across 50+ specialties, maintaining 99% patient satisfaction.",
	}

	for keyword, response := range knowledgeBase {
		if len(lowerMsg) >= len(keyword) && lowerMsg[:len(keyword)] == keyword ||
			len(lowerMsg) >= len(keyword) && lowerMsg[len(lowerMsg)-len(keyword):] == keyword ||
			containsString(lowerMsg, keyword) {
			return response
		}
	}

	return "Hello! I'm your 247HealthCenter AI Assistant, available 24/7. I can help with questions about Remote Consultation, Specialist Access, Emergency Coverage, or Home Services. How can I assist you?"
}

func containsString(s, substr string) bool {
	for i := 0; i <= len(s)-len(substr); i++ {
		if s[i:i+len(substr)] == substr {
			return true
		}
	}
	return false
}
