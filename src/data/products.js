// src/data/products.js

// 1. Base de datos de productos (Mock)
const products = [
  {
    id: "1",
    name: "Procesador Intel Core i9",
    price: 450,
    category: "procesadores",
    img: "https://placehold.co/300x300.png?text=Procesador+i9",
    stock: 25,
    description: "El procesador más potente para gaming y productividad.",
  },
  {
    id: "2",
    name: "Procesador AMD Ryzen 7",
    price: 380,
    category: "procesadores",
    img: "https://placehold.co/300x300.png?text=Procesador+Ryzen+7",
    stock: 30,
    description: "Excelente rendimiento multitarea y eficiencia energética.",
  },
  {
    id: "3",
    name: "Placa de Video NVIDIA RTX 4080",
    price: 1200,
    category: "placas-video",
    img: "https://placehold.co/300x300.png?text=Placa+RTX+4080",
    stock: 10,
    description: "Experimentá el ray tracing de nueva generación.",
  },
  {
    id: "4",
    name: "Placa de Video AMD RX 7900 XTX",
    price: 1000,
    category: "placas-video",
    img: "https://placehold.co/300x300.png?text=Placa+RX+7900",
    stock: 12,
    description: "Potencia pura para resoluciones 4K.",
  },
  {
    id: "5",
    name: 'Monitor Gamer 27" 144Hz',
    price: 350,
    category: "monitores",
    img: "https://placehold.co/300x300.png?text=Monitor+Gamer+27",
    stock: 20,
    description: "Fluidez total en tus juegos competitivos.",
  },
  {
    id: "6",
    name: 'Monitor Ultrawide 34"',
    price: 550,
    category: "monitores",
    img: "https://placehold.co/300x300.png?text=Monitor+Ultrawide+34",
    stock: 15,
    description: "Inmersión y productividad en un formato panorámico.",
  },
];

// --- Funciones de petición de datos (Promises) ---

/**
 * 2. getProducts: Devuelve todos los productos.
 */
export const getProducts = () => {
  return new Promise((resolve) => {
    // Simulamos un delay de 1 segundo
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

/**
 * 3. getProductsByCategory: Devuelve productos filtrados por categoría.
 */
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    // Simulamos un delay de 1 segundo
    setTimeout(() => {
      const filteredProducts = products.filter((prod) => prod.category === categoryId);
      resolve(filteredProducts);
    }, 1000);
  });
};

/**
 * 4. getProductById: Devuelve un solo producto por su ID.
 */
export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    // Simulamos un delay de 1 segundo
    setTimeout(() => {
      const product = products.find((prod) => prod.id === productId);
      if (product) {
        resolve(product);
      } else {
        reject(new Error("Producto no encontrado"));
      }
    }, 1000);
  });
};
