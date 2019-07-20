# react_node
App React + NodeJS + Express

Una vez descargado el repositorio realizar los siguientes pasos en la terminal o linea de comandos

1. Ingresar a la carpeta frontend
2. Ejecutar npm install (instala las dependencias usadas por el frontend) 
3. Ingresar a la carpeta backend
4. Ejecutar npm install (instala las dependencias usadas por el backend) 
5. Ejecutar npm install -g concurrently
6. Ejecutar npm start

* yarn es requerido, en caso de no tenerlo antes de ejecutar el paso 6 instalarlo con npm install yarn - es agregado en las dependencias para evitar problemas

* Las dos carpetas deben estar en la misma carpeta para que funcione correctamente
    carpeta_raiz
    |_backend
    |_frontend

# Descripcion
Backend 
Aplicación desarrollada en NodeJS usando express.
Realiza comunicacion directa con la API https://reqres.in/ para obtener informacion

Frontend
Aplicacion desarrollada con REACT
Muestra una lista con los usuarios propocionados por el backend. En la lista se muestra una imagen con el avatar del usuario, el nombre y el apellido
Cuando se hace click en el nombre se muestran detalles del usuario.