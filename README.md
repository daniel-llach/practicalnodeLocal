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
