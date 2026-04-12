async function getProducts() {
  const res = await fetch('data/products.json');
  return await res.json();
}