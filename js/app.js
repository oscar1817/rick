function buscar() {
  document.getElementById("contenido").innerHTML = ''
  valor = document.getElementById("pokemon").value
  cadena = ""
  //conexion a la api o ruta
  url = "https://rickandmortyapi.com/api/character/?name=" + valor
  fetch(url)
    .then(response => response.json())
    .then(data => visualizar(data))
    .catch(error => console.log(error))
  const visualizar = (data => {
    console.log(data)
    for (let i = 0; i < data.results.length; i++) {
      //cadena = `<strong>id:</strong> ${data.id} `
      cadena += `<div>`
      cadena += `<strong>Nombre:</strong> ${data.results[i].name} <br>`
      cadena += `<strong>Estado:</strong> ${data.results[i].status} <br>`
      cadena += `<strong>Especies:</strong> ${data.results[i].species} <br>`
      cadena += `<strong>Genero:</strong> ${data.results[i].gender} <br>`
      cadena += `<img src=${data.results[i].image} width="300" height="300"></img> <br>`
      cadena += `</div>`
    }
    document.getElementById("contenido").innerHTML = cadena
  })
}
