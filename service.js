const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://hepsiburadacase1.netlify.app"],
  }),
);
app.use(express.json());

const products = [
  {
    id: 41,
    name: "Harika Bir Ayakkabı",
    brand: "Nike",
    color: "Siyah",
    price: 1500.0,
    originalPrice: 2000.0,
    discount: 25,
    imageUrl: "https://placehold.co/200x300?text=Product+41",
    createdAt: "2026-03-17T10:00:00Z",
  },
  {
    id: 42,
    name: "Koşu Tişörtü",
    brand: "Adidas",
    color: "Beyaz",
    price: 400.0,
    originalPrice: null,
    discount: null,
    imageUrl: "https://placehold.co/200x300?text=Product+42",
    createdAt: "2026-03-16T11:00:00Z",
  },
  {
    id: 43,
    name: "Spor Şort",
    brand: "Puma",
    color: "Lacivert",
    price: 320.0,
    originalPrice: 450.0,
    discount: 29,
    imageUrl: "https://placehold.co/200x300?text=Product+43",
    createdAt: "2026-03-15T09:00:00Z",
  },
  {
    id: 44,
    name: "Basic Hoodie",
    brand: "H&M",
    color: "Gri",
    price: 700.0,
    originalPrice: 850.0,
    discount: 18,
    imageUrl: "https://placehold.co/200x300?text=Product+44",
    createdAt: "2026-03-14T08:30:00Z",
  },
  {
    id: 45,
    name: "Slim Fit Jean",
    brand: "Mavi",
    color: "Mavi",
    price: 950.0,
    originalPrice: 1200.0,
    discount: 21,
    imageUrl: "https://placehold.co/200x300?text=Product+45",
    createdAt: "2026-03-13T14:00:00Z",
  },
  {
    id: 46,
    name: "Klasik Gömlek",
    brand: "LC Waikiki",
    color: "Beyaz",
    price: 500.0,
    originalPrice: null,
    discount: null,
    imageUrl: "https://placehold.co/200x300?text=Product+46",
    createdAt: "2026-03-12T12:00:00Z",
  },
  ...Array.from({ length: 34 }, (_, i) => ({
    id: i + 47,
    name: `${["Nike", "Adidas", "Puma", "Zara", "Mango", "Defacto"][i % 6]} Model ${i + 100}`,
    brand: ["Nike", "Adidas", "Puma", "Zara", "Mango", "Defacto"][i % 6],
    color: ["Siyah", "Beyaz", "Sarı", "Kırmızı", "Lacivert", "Gri"][i % 6],
    price: Math.floor(Math.random() * 2000) + 200,
    originalPrice: Math.floor(Math.random() * 2500) + 500,
    discount: Math.floor(Math.random() * 30) + 5,
    imageUrl: `https://placehold.co/200x300?text=Product+${i + 47}`,
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000),
    ).toISOString(),
  })),
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Ürün bulunamadı" });
  }
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
