# 🛍️ Products Microservice - LinkTic Technical Test

Este repositorio contiene el microservicio de **Productos**, una pieza fundamental del ecosistema de la prueba técnica de LinkTic.

Desarrollado en **NestJS 11**, este servicio es responsable de gestionar el catálogo de productos y el inventario. Está diseñado para operar de forma independiente y se comunica con el mundo exterior exclusivamente a través del API Gateway, asegurando un control de acceso estricto para las operaciones de mutación de datos.

## 🏗️ Arquitectura y Rol

Dentro del patrón de microservicios, este componente opera en el puerto `:3003` (por defecto) y maneja su propio dominio de datos.

- **Lecturas (Públicas):** Permite a cualquier cliente consultar el catálogo y los detalles de los productos.
- **Escrituras (Protegidas):** La creación y actualización de inventario están blindadas. El servicio delega la validación de identidad validando el JWT emitido por el _Auth Service_.

## 🛡️ Características Principales

1. **CRUD Optimizado:** Operaciones eficientes para la consulta, creación y actualización de productos.
2. **Seguridad por JWT:** Integración nativa con `@nestjs/passport` y `AuthGuard('jwt')` para proteger los endpoints de administración.
3. **Validación de Datos:** Uso de DTOs (`CreateProductDto`, `UpdateProductDto`) y `ParseUUIDPipe` para garantizar la integridad de la información entrante.
4. **Documentación Swagger:** Decoradores de `@nestjs/swagger` implementados para autogenerar la especificación de la API.

## ⚙️ Configuración del Entorno (.env)

Crea un archivo `.env` en la raíz de este microservicio. Las variables mínimas recomendadas son:

```env
PORT=3003
JWT_SECRET=secret-key
DB_HOST=postgres://usuario:password@localhost:5432/products_db (Ejemplo)
DB_PORT=5432
DB_USERNAME=neondb_owner
DB_PASSWORD=npg_D9qgUOu7Ndai
DB_NAME=neondb
```

## 🚀 Despliegue y Ejecución

Opción A: Ejecución Local (Desarrollo)
* Prerrequisitos
* Node.js (v18+)
* PostgreSQL

Pasos para ejecutar localmente
1. Clonar el repositorio e instalar dependencias:
```bash
# 1. Clonar repositorio
git clone [https://github.com/nicolassanchez1/product-service.git](https://github.com/nicolassanchez1/product-service.git)

# 2. Instalar dependencias
npm install

# 3. Levantar el servicio en modo desarrollo
npm run start:dev
```

2. Explorar la Documentación de la API (Swagger):
- Una vez en ejecución, puedes explorar e interactuar con los endpoints usando la integración nativa de Swagger en la siguiente ruta:
* Products API Swagger: http://localhost:3003/api

Opción B: Usando Docker (Producción)

```bash
# 1. Construir la imagen
docker build -t products-service .

# 2. Correr el contenedor
docker run -p 3003:3003 --env-file .env products-service
```

## 🛣️ Enrutamiento y Endpoints
A continuación, se detallan las rutas expuestas por el controlador interno. (Nota: Si consultas a través del API Gateway, la ruta base es `http://localhost:8080/products).`

| Métodos | Endpoint | Descripción | Seguridad |
| :--- | :--- | :--- | :--- |
| `GET` | `/products` | ➔ **Obtiene el catálogo completo de productos.** | Pública |
| `GET` | `/products/:id` | ➔ **Obtiene los detalles de un producto específico.**| Pública |
| `POST` | `/products` | ➔ **Crea un nuevo producto en el catálogo.** | 🔒 Requiere JWT |
| `PATCH` | `/products/:id` | ➔ **Actualiza los datos o el stock de un producto.** | 🔒 Requiere JWT |
