package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os/exec"
	"strings"

	"github.com/gorilla/mux"
)

// codigo de type Casino struct
type Recomendacion struct {
	Top        int    `json:"top"`
	Id_Usuario string `json:"id_usuario"`
}

// funcion para llamar la ruta /alumno/{id}
func recomendacion(res http.ResponseWriter, req *http.Request) {
	vars := mux.Vars(req)
	idUsuario := vars["id"]

	fmt.Println(req.Method, idUsuario) // imprimimos el método que se mando llamar

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

	s := string(stdoutStderr)
	//result := []byte(s[313:])
	//fmt.Println(s[313:])

	//fmt.Println(strings.IndexByte(s, '"'))
	list := make([]Recomendacion, 0)

	idxI := strings.IndexByte(s, '"')
	for i := 0; i < 3; i++ {
		idxF := idxI + strings.IndexByte(s[idxI+1:], '"') + 1
		//fmt.Println("indices primer: ", idxI, idxF)
		//fmt.Println("sub string:" + s[idxI+1:idxF])
		rec := Recomendacion{i, s[idxI+1 : idxF]}
		list = append(list, rec)
		//list = append(list, s[idxI+1:idxF])
		idxI = idxF + strings.IndexByte(s[idxF+1:], '"') + 1

	}

	rec_enc, err := json.Marshal(list)

	return rec_enc, nil // Mandamos el JSON
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
