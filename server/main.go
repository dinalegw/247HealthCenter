package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

func spaHandler(distDir string) http.Handler {
	fs := http.FileServer(http.Dir(distDir))

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if strings.HasPrefix(r.URL.Path, "/api/") {
			http.NotFound(w, r)
			return
		}

		diskPath := filepath.Join(distDir, filepath.Clean(r.URL.Path))
		if r.URL.Path != "/" {
			if _, err := os.Stat(diskPath); os.IsNotExist(err) {
				http.ServeFile(w, r, filepath.Join(distDir, "index.html"))
				return
			}
		}

		fs.ServeHTTP(w, r)
	})
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/health", healthHandler)
	mux.HandleFunc("/api/appointments", appointmentsHandler)
	mux.HandleFunc("/api/users", usersHandler)
	mux.HandleFunc("/api/ai-assistant", aiAssistantHandler)
	mux.Handle("/", spaHandler("./frontend/dist"))

	addr := ":8080"
	log.Printf("Starting 247HealthCenter server on http://localhost%s", addr)
	if err := http.ListenAndServe(addr, mux); err != nil {
		log.Fatal(err)
	}
}
