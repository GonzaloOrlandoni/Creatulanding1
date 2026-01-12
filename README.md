# CreatuLanding - GOWS Indumentaria

## 📝 Descripción

Este proyecto es la **Entrega Final** del curso de React en Coderhouse. Se trata de una **Single Page Application (SPA)** de e-commerce enfocada en el rubro de indumentaria (remeras, pantalones y más). La aplicación permite una navegación fluida entre categorías, gestión de un carrito de compras global y la generación de órdenes de compra con persistencia de datos en tiempo real mediante Firebase.

## 🚀 Tecnologías Utilizadas

- **React JS (Vite)**: Framework principal para la construcción de la interfaz.
- **Firebase / Firestore**: Base de datos NoSQL para el catálogo de productos y almacenamiento de órdenes.
- **React Router Dom**: Gestión de rutas dinámicas y navegación sin recarga de página (modelo SPA).
- **Context API**: Administración del estado global del carrito de compras mediante un `CartProvider` personalizado.
- **Bootstrap**: Estilado de la interfaz para garantizar responsividad y una experiencia de usuario profesional.

## ✨ Funcionalidades

- **Catálogo Dinámico**: El listado de productos se genera a partir de consultas a Firestore (`getDocs`), permitiendo filtrar por categorías (`remeras`, `pantalones`) utilizando `query` y `where` según los parámetros de la URL (`useParams`).
- **Vista de Detalle**: Carga asincrónica de información específica de cada producto mediante `getDoc`.
- **Carrito de Compras**: Manejo global de productos, cantidades y totales. El componente `CartWidget` muestra de forma consistente el total de unidades cargadas.
- **Checkout & Órdenes**: Formulario que captura datos del usuario y utiliza `addDoc` para generar un registro de compra en Firestore, proporcionando un **ID de orden** único al finalizar.
- **UX Optimizado**: Implementación de loaders durante las peticiones asincrónicas y renderizado condicional para el manejo de stock y carritos vacíos.

## 📂 Estructura de Carpetas

El proyecto aplica el **Container Pattern** para separar responsabilidades de lógica y presentación:

- `src/components`: Componentes contenedores (`ItemListContainer`, `ItemDetailContainer`) y de presentación (`ItemList`, `Item`, `ItemCount`).
- `src/context`: Implementación del estado global del carrito (`CartContext.jsx`).
- `src/firebase`: Configuración del SDK y exportación de la base de datos Firestore (`config.js`).

## 🛠️ Instalación y Ejecución

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Iniciar el servidor de desarrollo con `npm run dev`.
4. Abrir `http://localhost:5173` en el navegador.
