async function renderProducts() {
  const productos = await getProducts();
  const contenedor = document.getElementById("lista-productos");

  contenedor.innerHTML = "";

  productos.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
      <img src="${p.imagen}">
      <h3>${p.nombre}</h3>
      <p>$${p.precio}</p>
      <p>${p.material}</p>
      <a href="https://wa.me/573246452821?text=Hola,%20quiero%20información%20sobre%20${encodeURIComponent(p.nombre)}" class="btn">
        Comprar
      </a>
    `;

    contenedor.appendChild(div);
  });
}

renderProducts();