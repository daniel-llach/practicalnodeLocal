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
5-A.- instalar modulo de instalación del express.js (BASICO, ver 5-B para algo más robusto)
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
> o ejemplo personal con less y mustache
```
{
  "name": "hello-world",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "4.1.2",
    "jade": "1.3.1",
    "mongoskin": "1.4.1",
    "less": "2.1.2",
    "mustache": "1.0.0"
  }
}
```
> correr comando de instalación
```
npm install
```

6-A.- scaffolding (instalar más elementos desde express)
> instalar less
```
express -c less expres-less
cd expres-less && npm install
```
> PARA DEBUGUEAR LA APP
```
DEBUG=my-application ./bin/www
```

5-B.- más ROBUSTO y sin scaffolding (instalación manual de los elementos)
SETEAR carpetas del proyecto:
```
mkdir {public,public/css,public/img,public/js,db,views,views/includes,routes}
```
6-B hacer package.json con dependencias necesarias, como este ejemplo:
```
{
  "name": "hello-world",
  "version": "0.0.1",
  "private": true,
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
> luego correr el instalador:
```
npm install
```

7.- jade !
> crear un la carpeta views un archivo index.jade con lo siguiente:
```
h1 Hola
p= msg
```
luego visualizar (en la carpeta principal, donde esta el archivo) con:
```
node app.js
````

(TESTING - OPTIONAL)
8.- mocha (TDD & BDD - test-driven development & behavior-driven development)
> installar mocha (global)
```
sudo npm install -g mocha@1.16.2
````

> para correr un test hay que hacer por ejemplo un archivo llamado test.js con lo siguiente:
```
var assert = require('assert');
var expected, current;
before(function(){
  expected = ['a', 'b', 'c'];
})
describe('String#split', function(){
  beforeEach(function(){
    current = 'a,b,c'.split(',');
  })
  it('should return an array', function(){
    assert(Array.isArray(current));
  });
  it('Should return the same array', function(){
    assert.equal(expected.length, current.length, 'arrays have equal length');
    for (var i=0; i<expected.length; i++) {
      assert.equal(expected[i], current[i], i + 'element is equal');
    }
  })
})
```

(AUN TESTING - OPTIONAL)
9.- install chai (TDD aun, para qa nuevamente)
> la verdad me da lata hacer esto.. quizas más adelante lo incluya en mis notas

(AUN TESTING - OPTIONAL)
10.- install expect.js
> me lo salto también






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
 
### express.js command-line interface
 
> al instalar less, por ejemplo crea una carpeta llamada _express-less_ con un archivo de configuracion llamado _app.js_ 
 
> dentro de _app.js_ tiene el siguiente código:
```
app.use('/', routes);
app.use('/users', users);
```
el primero dirige hacia http://localhost:3000 y el segundo hacia http://localhost:3000/users. no es permitido rutas como www.webapp.com/?id=10233 o www.eabapp.com/about/?author=10239. para esto hay que setearlo asi en el _app.js_
```
app.use(function (req,res,next) {
  if (req.query.id) {
    // process the id, then call next() when done
    else if (req.query.author) {
      // same approach as with id
      } else if (req.query.id && req.query.ref) {
      // process when id and ref present
      } else {
        next();
      }
  }
});
app.get('/about', function (req, res, next){
  // this code is executed after the query string middleware
});
```

### HELLo wordl !

> si luego de hacer el package.json y correr _npm install_ se crea app.js del ejemplo y va correr, pero si uno lo visualiza en el navegador aparece un error: **Failed to lookup view "index" in views directory "/home/practicalnode/ch2/hello-world/views"**  esto es normal ya que hay que definir las vistas aun (paso 7)

# CH3

### test-example
> Aqui se corta el hilo del libro, el tdd y bdd rompieron el flujo... por ahora me lo salto... quizas más adelante vea su importancia :v

#CH4








