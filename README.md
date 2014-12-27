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

### HELLo world !

> si luego de hacer el package.json y correr _npm install_ se crea app.js del ejemplo y va correr, pero si uno lo visualiza en el navegador aparece un error: **Failed to lookup view "index" in views directory "/home/practicalnode/ch2/hello-world/views"**  esto es normal ya que hay que definir las vistas aun (paso 7)

# CH3

### test-example
> Aqui se corta el hilo del libro, el tdd y bdd rompieron el flujo... por ahora me lo salto... quizas más adelante vea su importancia :v

#CH4

### ejemplos de jade
##### Pasar valores de _variables locales_ (del back al front)
>```
h1= title
p= body
```
output:
```
<h1>Express.js Guide</h1>
<p>The cohomprensive book</p>
```

#####  Pasar variable local como atributo 
>```
a(href=url, data-active=isActive)
label
  input(type="checkbox", checked=isChecked)
  | yes / no
```
output:
```
<a href="/logout" data-active="data-active"></a>
<label>
  <input type="checkbox"/>yes / no
</label>
```

##### Id y clases pueden prescindir del tag div 
>```
div#content
  p.lead.center
    | webapplog: whre code lives
    #side-bar.pull-right
    span.contact.span4
      a(href="/contact") contact us
```

##### scrip en el front (html)
>```
script.
  console.log('Hello Jade')
  setTimeout(function(){
    window.location.href='http://rpjs.co'
  },200)
  console.log('Godd bye!')
```

##### script antes de compilar el jade se usa -,= o !=
>```
- var arr = ['<a>','<b>','<c>']
ul
  - for (var i = 0; i< arr.length; i++)
    li
      span= i
      span!="unescaped: " + arr[i] + " vs. "
      span= "escaped: " + arr[i]
```
output:
```
<ul>
  <li><span>0</span><span>unescaped: <a> vs. </span><span>escaped: &lt;a&agt;</span></li>
  <li><span>1</span><span>unescaped: <b> vs. </span><span>escaped: &lt;b&agt;</span></li>
  <li><span>2</span><span>unescaped: <c> vs. </span><span>escaped: &lt;c&agt;</span></li>
</ul>
```

##### comentarios:
>```
// aparecen en el html asi <!-- comentario -->
//- aparecen solo antes de compilar, no en el html
```

##### if
>```
- var user = {}
- user.admin 0 Math.random()>0.5
if user.admin
  buttons(class="launch") Laun Spacecraft
else
  button(class="login") Log in
```

##### each para arreglos
>```
- var languages = ['php', 'node', 'ruby']
div
  each value, index in languages
    p= index + ". " + value
```

##### each para objetos
>```
- var languages = {'php': -1, 'node': 2, 'ruby':1}
div
  each value, key in languages
    p= key + ": " + value
```
output:
```
<div>
  <p>php: -1</p>
  <p>node: 2</p>
  <p>ruby: 1</p>
</div>

##### filtros, permiten escribir un trozo del código en otro lenguaje de programación, el siguiente es el ejemplo de la pagina de jade, no del libro. Esto se debe hacer sólo en el back y hay que instalar el lenguaje en node_modules para que lo reconozca
>```
script
  :coffee
    console.log 'This is coffee script'
```

##### interpolación. permite escribir una variable del back en un trozo de html (no javascript) para que se renderice en el front
>```
- var title = "Express.js guide"
p Read the #{title} in PDF, MOBI and EPUB
```

##### Case
>```
- var coins = Math.round(Math.random()*10)
case coins
  when 0
    p You have no money
  when 1
    p You have a coin
  default
    p You have #{coins} coins!
```

##### Mixin, produce html en relacion a algunos parametros
>```
mixin row(items)
  tr
    each item, index in items
      td= item
mixin table(tableData)
  table
    each row, index in tableData
      +row(row)
- var node = [{name: "express"}, {name: "hapi"}, {name: "derby"}]
+table(node)
- var js = [{name: "backbone"}, {name: "angular"}, {name: "ember"}]
+table(js)
```
output:
```
<table>
  <tr>
    <td>express</td>
  <tr>
  <tr>
    <td>hapi</td>
  <tr>
  <tr>
    <td>derby</td>
  <tr>
</table>
<table>
  <tr>
    <td>backbone</td>
  <tr>
  <tr>
    <td>angular</td>
  <tr>
  <tr>
    <td>ember</td>
  <tr>
</table>
```

##### Include, tome otro archivo y lo incluye... compila el archivo y luego lo agrega. top-to-bottom aproach
>```
include ./includes/header
include ../includes/footer
```

##### Extend. bottom-to-top aproach
>En archivo A:
```
block header
  p some default text
block content
  p Loading ...
block footer
  p copyright
```
En archivo B:
```
extend file_a
block header
  p very specific text
block content
  .main-content
```
