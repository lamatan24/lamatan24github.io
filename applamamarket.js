// app.js - Script principal du site web pour gérer l'interaction avec l'utilisateur

const products = [
  {
    name: "Samsung Galaxy S24 Ultra",
    price: 950000,
    image: "https://urls.fr/21mRN6",
    description: "6,8'' AMOLED, 512Go, 5G, Caméra 200MP"
  },
  {
    name: "Samsung Galaxy S23",
    price: 650000,
    image: "https://urls.fr/eu1cLc",
    description: "6,1'' AMOLED, 256Go, 5G, Caméra 50MP"
  },
  {
    name: "Samsung Galaxy A54",
    price: 320000,
    image: "https://urls.fr/4MAB2C",
    description: "6,4'' AMOLED, 128Go, 5G, Caméra 50MP"
  },
  {
    name: "Samsung Galaxy M34",
    price: 210000,
    image: "https://urls.fr/oK6jeU",
    description: "6,5'' AMOLED, 128Go, 5G, Batterie 6000mAh"
  },
  {
    name: "Samsung Galaxy Z Flip5",
    price: 800000,
    image: "https://urls.fr/G4x2Jw",
    description: "6,7'' AMOLED, 256Go, Pliable, 5G"
  },
  {
    name: "Casque Bluetooth JBL Tune 510BT",
    price: 25000,
    image: "",
    description: "Bluetooth, 40h autonomie, Micro intégré"
  },
  {
    name: "Apple AirPods Max",
    price: 350000,
    image: "https://th.bing.com/th/id/OIP.3v6wQwQwQwQwQwQwQwQwQwHaHa?pid=ImgDet&rs=1",
    description: "Audio spatial, ANC, Bluetooth"
  },
  {
    name: "LG OLED C3 55''",
    price: 1200000,
    image: "https://th.bing.com/th/id/OIP.2v6wQwQwQwQwQwQwQwQwQwHaHa?pid=ImgDet&rs=1",
    description: "4K OLED, HDR10, webOS Smart TV"
  },https://th.bing.com/th/id/OIP.4v6wQwQwQwQwQwQwQwQwQwHaHa?pid=ImgDet&rs=1
  {
    name: "Ordinateur Portable HP 15",
    price: 260000,
    image: "https://th.bing.com/th/id/OIP.1v6wQwQwQwQwQwQwQwQwQwHaHa?pid=ImgDet&rs=1",
    description: "Intel i5, 8 Go RAM, 512 Go SSD, Windows 11"
  },
  {
    name: "Apple MacBook Air M2",
    price: 1100000,
    image: "https://th.bing.com/th/id/OIP.0v6wQwQwQwQwQwQwQwQwQwHaHa?pid=ImgDet&rs=1",
    description: "13,6'', M2, 8Go RAM, 256Go SSD"
  }
  // Ajoute d'autres produits ici avec des liens Bing direct (th.bing.com/th/id/...)
];

function renderProducts() {
  const container = document.getElementById('products');
  container.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <strong>${product.price} CFA</strong>
      <br>
      <a class="whatsapp-btn" href="https://wa.me/22870759113?text=Bonjour,%20je%20veux%20acheter%20le%20produit%20${encodeURIComponent(product.name)}" target="_blank">
        Acheter sur WhatsApp
      </a>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    // Code pour gérer les événements de clic et les mises à jour dynamiques du contenu
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            alert(`Produit sélectionné: ${card.querySelector('h3').textContent}`);
        });
    });
});