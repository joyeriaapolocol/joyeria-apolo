function formatPrice(price) {
  return new Intl.NumberFormat('es-CO').format(price);
}

async function getProducts() {
  const files = await fetch('/data/productos/');
  const text = await files.text();

  // solución simple temporal
  const parser = new DOMParser();
  const html = parser.parseFromString(text, 'text/html');

  const links = [...html.querySelectorAll('a')]
    .map(a => a.getAttribute('href'))
    .filter(href => href.endsWith('.json'));

  const productos = await Promise.all(
    links.map(link => fetch('/data/productos/' + link).then(r => r.json()))
  );

  return productos;
}

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
      <p>$${formatPrice(p.precio)}</p>
      <p>${p.material}</p>
      <a href="https://wa.me/57TU_NUMERO?text=Hola,%20me%20interesa%20${encodeURIComponent(p.nombre)}" class="btn">
        Consultar
      </a>
    `;

    contenedor.appendChild(div);
  });
}

renderProducts();