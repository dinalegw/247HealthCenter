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
