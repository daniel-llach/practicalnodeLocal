# PASOS PARA CONSTRUIR UNA APP WEB CON NODE.JS y MONGODB

Este documento es una enumeración de pasos necesraios para construir una app web alojada en un _VPS_ (virtual private server) que corre con _UBUNTU_ y tiene instalado _GITHUB_ 

### 1.- Instalar node.js
(en la vps sólo me resulto hacerlo con la opción desde github de node.js)
>```
git clone git://github.com/joyent/node.git
cd node
./configure --prefix=~/local
make install
cd ..
```

### 2.- Instalar npm
(también desde github)
>```
git clone git://github.con/isaacs/npm.git
cd npm
make install
make link
```

### 3.- Instalar express.js generator
>```
npm install -g express-generator@4.0.0
```

### 4.- Crear carpetas del proyecto
>```
mkdir {public,public/css,public/img,public/js,db,views,views/includes,routes}
```

### 5.- Crear package.json 
Archivo con datos del proyecto y las dependencias necesarias para su funcionamiento. A continuación archivo de referencia:
>```
{
  "name": "hello-world",
  "version": "0.0.1",
  "private": true,
  "author": "Daniel Llach <daniel.llach@gmail.com>",
  "contributors": [{
    "name": "Juan",
    "email": "juan@juanito.cl"
  }],
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "4.1.2",
    "jade": "1.3.1",
    "mongoskin": "1.4.1",
    "stylus": "0.44.0"
  }
}
```

### 6.- Luego correr el instalador:
>```
npm install
```
