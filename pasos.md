# PASOS PARA CONSTRUIR UNA APP WEB NODE.JS CON EXPRESS.JS y MONGODB

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

### 4.- Crear carpetas del proyecto (en la _raiz_)
>```
mkdir {public,public/css,public/img,public/js,db,views,views/includes,routes}
```

### 5.- Crear package.json (en la _raiz_)
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

### 6.- Luego correr el instalador
Baja archivos de todos los recursos necesarios
>```
npm install
```

### 7.- Crear app.js (en la _raiz_)
Archivo que declara rutas y middlewares. a continuación un ejemplo:
>```
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.all('*', function(req, res) {
  res.render('index', {msg: 'Welcome to the Practical Node.js!'})
})
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
```

### 8.- Crear vistas (en carpeta _views_)
En este caso con jade. A continuación ejemplo de layout.index
>```
doctype html
html
  head
    title= appTitle
    script(type="text/javascript", src="/js/jquery-2.0.3.min.js")
    link(rel='stylesheet', href='/css/bootstrap-3.0.2/css/bootstrap.min.css')
    link(rel='stylesheet', href='/css/bootstrap-3.0.2/css/bootstrap-theme.min.css')
    link(rel='stylesheet', href='/css/style.css')
    script(type="text/javascript", src="/css/bootstrap-3.0.2/js/bootstrap.min.js")
    script(type="text/javascript", src="/js/blog.js")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
  body
    #wrap
      .container
        h1.page-header= appTitle
        p.lead Welcome to example from Express.js Experience by&nbsp;
          a(href='http://twitter.com/azat_co') @azat_co
          |. Please enjoy.
        block page
        block header
          div
            include includes/menu
        block alert
          div.alert.alert-warning.hidden
        .content
          block content
    block footer
      footer
        .container
          p
            | Copyright &copy; 2014 | Issues? Submit to
            a(href="https://github.com/azat-co/blog-express/issues") GitHub
            | .
```
Y ejemplo de index.jade (en carpeta _views_)
En este ejemplo se usa el layout.jade como template del contenido del index.jade que vendría siendo el home de la app web
```
extends layout
block page 
  - var menu = 'index'
block content
  if (articles.length === 0)
    | There's no published content yet. 
    a(href="/login") Log in
    |  to post and publish.
  else 
    each article, index in articles
      div
        h2
          a(href="/articles/#{article.slug}")= article.title
```

### 9.- Colocar assets del front (declarados en layout.jade)
Estos se colocan en _/public/css/_ y _/public/js/_ respectivamente

### 10.- Visualizar avance 
se ejecuta la app y luego se puede visualizar en el navegador respetando el puerto de salida. Ej: Express server listening on port 3000, seria localmente http://localhost:3000 y en el vps con la ip de este, ej: http://http://178.62.215.128:3000
>```
node app.js
```

### 11.- Instalar MongoDB
Seguir instrucciones de _http://docs.mongodb.org/manual/installation_ Si no se sabe la arquitectura de la máquina se puede saber de la siguiente manera:
>```
uname -p
```
instala en _/usr/bin/mongod_, por lo que hay que correr mongo de la siguiente manera:
```
/usr/bin/mongod
```
si da error: _BadValue Invalid or no user locale set. Please ensure LANG and/or LC * environment variables are set correctly_. Hay que ejecutar lo siguiente:
```
export LC_ALL=C
```
si da este otro error: _ERROR: dbpath (/data/db) does not exist._ entonces hay que crear la carpeta indicada con:
```
sudo mkdir -p /data/db/
```
esta correcto cuando aparece el mensaje _**waiting for connections on port 27017**_
