# Proyecto Express: Autenticación y Roles

Este proyecto es una aplicación web construida con Node.js y Express, que utiliza EJS como motor de plantillas y una base de datos SQLite para gestionar usuarios y roles. Incluye autenticación, autorización por roles (admin/user), y manejo de sesiones mediante cookies.

## Estructura de Archivos

- `index.js`: Archivo principal del servidor Express.
- `database.sqlite`: Base de datos SQLite con la tabla `USERS`.
- `views/`: Carpeta con las vistas EJS (`home.ejs`, `login.ejs`, `admin.ejs`).
- `package.json`: Dependencias y scripts del proyecto.

## Dependencias

- `express`: Framework para crear el servidor web.
- `cookie-parser`: Middleware para manejar cookies.
- `better-sqlite3`: Acceso y gestión de la base de datos SQLite.
- `bcrypt`: Para comparar contraseñas hasheadas.
- `ejs`: Motor de plantillas para las vistas.

## Funcionalidades

### 1. Autenticación
- El usuario inicia sesión en `/login`.
- Se consulta la base de datos para obtener el usuario por nombre.
- Se compara la contraseña ingresada con la almacenada (hasheada) usando `bcrypt.compareSync`.
- Si la autenticación es exitosa, se crea una cookie `user` y una cookie `role`.

### 2. Autorización por Roles
- **isAdmin**: Middleware que permite acceso solo a usuarios con rol `admin`.
- **isUser**: Middleware que permite acceso solo a usuarios con rol `user`.
- **isAuth**: Middleware que permite acceso a cualquier usuario autenticado.

### 3. Rutas Principales
- `/home`: Página principal para usuarios con rol `user`.
- `/admin`: Página principal para usuarios con rol `admin`.
- `/login` o `/`: Página de inicio de sesión.
- `/logout`: Elimina la cookie de usuario y redirige al login.

### 4. Vistas
- Las vistas se renderizan usando EJS y se encuentran en la carpeta `views`.

## Ejemplo de Flujo de Login
1. El usuario accede a `/login` y envía su nombre y contraseña.
2. El servidor busca el usuario en la base de datos.
3. Si el usuario existe y la contraseña es correcta:
    - Si el rol es `admin`, se redirige a `/admin`.
    - Si el rol es `user`, se redirige a `/home`.
4. Si la autenticación falla, se redirige nuevamente a `/` (login).

## Seguridad
- Las contraseñas se almacenan hasheadas en la base de datos.
- Se utiliza `bcrypt` para comparar la contraseña ingresada con el hash almacenado.
- Las cookies se usan para mantener la sesión y el rol del usuario.

## Notas
- Asegúrate de tener usuarios creados en la base de datos con contraseñas hasheadas usando bcrypt.
- Puedes modificar las vistas EJS para personalizar la interfaz.

---

**Autor:** Benjy
