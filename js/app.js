function buscar() {
  document.getElementById("contenido").innerHTML = ''
  valor = document.getElementById("pokemon").value
  cadena = ""
  //conexion a la api o ruta
  url = "https://rickandmortyapi.com/api/character/" + valor
  fetch(url)
    .then(response => response.json())
    .then(data => visualizar(data))
    .catch(error => console.log(error))
  const visualizar = (data => {
    console.log(data)
    cadena = `<strong>id:</strong> ${data.id} `
    cadena += `<strong>Nombre:</strong> ${data.name} `
    cadena += `<img src=${data.image} width="300" height="300"></img>`
    document.getElementById("contenido").innerHTML = cadena

  })
}
