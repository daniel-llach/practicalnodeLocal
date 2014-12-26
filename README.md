practicalnodeLocal 
==================

ejercicios libro practical node escrito por _Azat Mardan_, probando en vps _digital oceans_

### resumen pasos:
1.- install node.js (en la vps sólo me resulto hacerlo desde github)
```
git clone git://github.com/joyent/node.git
cd node
./configure --prefix=~/local
make install
cd ..
```
2.- install npm (desde github)
```
git clone git://github.con/isaacs/npm.git
cd npm
make install
make link
```
3.- install node-inspector
```
npm install -g node-inspector
```
4.- install express.js generator
```
npm install -g express-generator@4.0.0
```
5.- instalar modulo de instalación del express.js
> en la carpeta donde se desea instalar hay que crear un json de configuración que detalle las dependencias, en este caso sólo express versión 4.1.2.
```
{
  "name": "express-cli",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "BSD",
  "dependencies": {
    "express": "~4.1.2"
  }
}
```
> correr comando de instalación
```
npm install
```

6.- scaffolding (instalar más cosas desde express)
> instalar less
```
express -c less expres-less
cd expres-less && npm install
```
> PARA DEBUGUEAR LA APP
```
DEBUG=my-application ./bin/www
```



# CH1

### VPS - en ejercicio hola-debug
> una consola correr: 
```
node-inspector 
````
y en otra:   
```
node --debug hola-debug.js  
```
> para ver el **node inspector** en el chrome hay que **cambiar la ip** que entrega la consola http://127.0.0.1:8080/debug?port=5858 por la ip del vps, en mi caso http://178.62.215.128:8080/debug?port=5858

# CH2

### Express.js Installation
> hay que ver la disponibilidad de express consultando su version (con V mayúscula, al contrario de node y npm que son con v minúscula)
> hay que instalar el generator de manera global y el modulo local de express !
```
express -v
```
> una vez instalado el package.json se puede ver las opciones de scaffolding de express con:
```
express -h
```
las opciones que da son:
 1. -e | engine support, por defecto jade - http://jade-lang.com/tutorial/
 2. -H | hogan.js
 3. -c | css engine, less, stylus o compass, por defecto css plano
 4. -f | fuerza app generation en una carpeta no vacía
