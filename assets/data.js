
window.productsInfo = [];

const divideProducts = (number) => {
  let productsArray = [];
  for (let i = 0; i < window.productsInfo.length; i += number)
    productsArray.push(window.productsInfo.slice(i, i + number));
  return productsArray;
};

window.state = {
  products: divideProducts(3),
  index: 0,
  limit: divideProducts(3).length,
  activeFilter: null,
};

// cargar datos desde el json

const loadProductsData = async () => {
  try {
    const response = await fetch('products.json');
    const data = await response.json();
    window.productsInfo = data; 
  } catch (error) {
    console.error('Error loading product data:', error);
  }
};

loadProductsData();

