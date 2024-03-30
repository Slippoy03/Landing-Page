const products = [
  {
    category: "smartphone",
    name: "Red Not 9",
    price: "Rp 2.000.000",
    image: "lp1.jpg",
  },
  {
    category: "smartphone",
    name: "Product 2",
    price: "Rp 1.500.000",
    image: "product2.jpg",
  },
  {
    category: "smartphone",
    name: "Product 3",
    price: "Rp 3.000.000",
    image: "product3.jpg",
  },
  {
    category: "laptop",
    name: "Product 4",
    price: "Rp 2.000.000",
    image: "product4.jpg",
  },
  {
    category: "laptop",
    name: "Product 5",
    price: "Rp 2.500.000",
    image: "product5.jpg",
  },
  {
    category: "laptop",
    name: "Product 6",
    price: "Rp 3.000.000",
    image: "product6.jpg",
  },
  {
    category: "headset",
    name: "Product 7",
    price: "Rp 50.000",
    image: "product7.jpg",
  },
  {
    category: "headset",
    name: "Product 8",
    price: "Rp 75.000",
    image: "product8.jpg",
  },
  {
    category: "headset",
    name: "Product 9",
    price: "Rp 100.000",
    image: "product9.jpg",
  },
  {
    category: "casing",
    name: "Product 10",
    price: "Rp 20.000",
    image: "product10.jpg",
  },
  {
    category: "casing",
    name: "Product 11",
    price: "Rp 25.000",
    image: "product11.jpg",
  },
  {
    category: "casing",
    name: "Product 12",
    price: "Rp 30.000",
    image: "product12.jpg",
  },
];

// Function to generate product list
function generateProductList(category, containerId) {
  const productList = products.filter(
    (product) => product.category === category
  );
  const container = document.getElementById(containerId);
  productList.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = product.price;

    const detailButton = document.createElement("button");
    detailButton.textContent = "Detail";
    detailButton.classList.add("detail-button");
    detailButton.addEventListener("click", () => {

      window.location.href = `detail.html?product=${product.name}`;
    });

    productItem.appendChild(image);
    productItem.appendChild(name);
    productItem.appendChild(price);
    productItem.appendChild(detailButton);

    container.appendChild(productItem);
  });
}

generateProductList("smartphone", "smartphone-list");
generateProductList("laptop", "laptop-list");
generateProductList("headset", "headset-list");
generateProductList("casing", "casing-list");
