# Usa una imagen base de Nginx como servidor web
FROM nginx:alpine

# Copia el contenido de la aplicación al directorio predeterminado de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80 para el servidor
EXPOSE 80
