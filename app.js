// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];


function agregarAmigo(nombre) {
  let input = document.getElementById("amigo");
    let amigo = input.value.trim();

    if (amigo === "") {
      alert("Debes ingresar un nombre");
      return;
    } 
      listaAmigos.push(amigo);
      input.value = "";
      actualizarLista();
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  listaAmigos.forEach((amigo, index) => {
    let li = document.createElement("li");
    li.textContent = amigo;

    lista.appendChild(li);
  });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
      alert("Debes agregar al menos un amigo");
      return;
    }

  let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
  let resultado = document.getElementById("resultado");
  resultado.textContent =  `🎉 ¡Tu amigo secreto es: ${amigoSorteado} 🎉!`;
}
