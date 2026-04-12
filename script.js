const productos = [
  {
    nombre: "Anillo Apolo",
    precio: "250000",
  },
  {
    nombre: "Cadena Oro",
    precio: "400000",
  }
];

const contenedor = document.getElementById("lista-productos");

productos.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("producto");

  div.innerHTML = `
    <h3>${p.nombre}</h3>
    <p>$${p.precio}</p>
    <a href="https://wa.me/57TU_NUMERO?text=Hola quiero ${p.nombre}">
      Comprar
    </a>
  `;

  contenedor.appendChild(div);
});