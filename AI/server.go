package main

import (
	"fmt"
	"net/http"
	"os/exec"

	"github.com/gorilla/mux"
)

// codigo de type Casino struct
type Recomendacion struct {
	Id     string `json:"id"`
	Nombre string `json:"nombre"`
	Tipo   string `json:"tipo"`
}

// funcion para llamar la ruta /alumno/{id}
func recomendacion(res http.ResponseWriter, req *http.Request) {
	vars := mux.Vars(req)
	idUsuario := vars["id"]

	fmt.Println(req.Method) // imprimimos el método que se mando llamar

	res_json, err := pyAlgorythm(idUsuario)
	if err != nil { // si hubo un problema al obtener la recomendacion
		// retornamos un error al cliente
		http.Error(res, err.Error(), http.StatusInternalServerError)
	}
	// si no hubo problema al obtener la info del algoritmo
	// armamos el header de la respuesta el cliente que será un JSON
	res.Header().Set(
		"Content-Type",
		"application/json",
	)
	res.Write(res_json) // retornamos el JSON respuesta al cliente
}

func pyAlgorythm(id string) ([]byte, error) {
	jsonData := []byte(`{}`) // Creamos la respuesta

	cmd := exec.Command("python", "KNN.py", id)
	stdoutStderr, err := cmd.CombinedOutput()

	if err != nil {
		return jsonData, err //Error al obtener resultado del script
	}

	//Si nos obtiene la info la convertimos en un json
	//jsonData, err2 := json.MarshalIndent(stdoutStderr, "", "    ")
	//if err2 != nil {
	//	return jsonData, err2 // Error al convertir JSON
	//}

	return stdoutStderr, nil // Mandamos el JSON
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/recomendacion/{id}", recomendacion).Methods("GET") // creamos el endpoint /recomendacion/
	fmt.Println("Corriendo RESTful API...")                                // mensaje para empezar a probar
	err := http.ListenAndServe(":8000", router)                            // arrancamos el servidor en el puerto :9000
	if err != nil {
		fmt.Println(err)
	}
}
