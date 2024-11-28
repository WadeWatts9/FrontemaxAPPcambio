# FrontemaxAPPcambio
# El nombre de ejecución de la app es "fortemax"

# Dirigirse con el comando cd a la carpeta del proyecto. 
# Generar la imagen de Docker
docker build -t fortemax

# Verificar que la imagen se creó
docker images

# Ejecutar un contenedor con la imagen
docker run -d -p 8080:80 frontemax-casa-cambio

# Utilizar la aplicación en local
http://localhost:8080
