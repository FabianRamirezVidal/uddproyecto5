# Proyecto UDD - eCommerce

## Descripción del Proyecto

Este proyecto es una aplicación de eCommerce desarrollada como parte de un proyecto universitario en la Universidad del Desarrollo (UDD). La aplicación tiene como objetivo proporcionar a los usuarios una plataforma para comprar y vender productos en línea.

## Tecnologías Utilizadas

El proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- Frontend: ReactJS con Context API para el manejo de estados.
- Backend: Node.js con ExpressJS.
- Base de Datos: MongoDB.

## Funcionalidades

La aplicación cuenta con las siguientes funcionalidades:

- Catálogo de productos: Los usuarios pueden ver la lista de productos disponibles para la compra.
- Carrito de compras: Los usuarios pueden agregar productos al carrito, eliminar productos y actualizar las cantidades.
- Pasarela de pago: Integración de la pasarela de pago con MercadoPago para procesar las transacciones.
- Autenticación: Registro e inicio de sesión de usuarios utilizando JWT para la autenticación.
- Autorización: Zona privada donde los usuarios pueden ver su perfil.

## Instalación

1. Clona el repositorio desde GitHub:

```bash
git clone https://github.com/FabianRamirezVidal/uddproyecto5.git
```

2. Accede al directorio del frontend:

```bash
cd uddproyecto5/frontend
```

3. Instala las dependencias del frontend:

```bash
npm install
```

4. Accede al directorio del backend:

```bash
cd ../backend
```

5. Instala las dependencias del backend:

```bash
npm install
```

## Configuración

Antes de ejecutar la aplicación, es necesario configurar la conexión a la base de datos MongoDB y la integración con la pasarela de pago Paypal

1. Base de Datos:

En el archivo `backend/config/config.js`, asegúrate de proporcionar la URL de conexión correcta para MongoDB.

2. Pasarela de Pago:

En el archivo `frontend/src/components/Checkout.js`, asegúrate de configurar el SDK de MercadoPago con tus credenciales de prueba.

## Ejecución

1. Ejecuta el backend:

```bash
cd ../backend
npm start
```

2. Ejecuta el frontend:

```bash
cd ../frontend
npm start
```

La aplicación estará disponible en `http://localhost:3000/`.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes ver el archivo `LICENSE` para más detalles.
