package main

import (
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()
	mux.Handle("/", http.FileServer(http.Dir("./frontend")))
	mux.HandleFunc("/api/health", healthHandler)
	mux.HandleFunc("/api/appointments", appointmentsHandler)
	mux.HandleFunc("/api/users", usersHandler)

	addr := ":8080"
	log.Printf("Starting 247HealthCenter server on http://localhost%s", addr)
	if err := http.ListenAndServe(addr, mux); err != nil {
		log.Fatal(err)
	}
}
