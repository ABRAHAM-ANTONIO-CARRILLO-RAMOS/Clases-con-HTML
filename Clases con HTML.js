class Rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura;
    }
}
class Triangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura/2;
    }
}
 
class Cuadrado{
    constructor(base){
        this.base=base;
    }
    area(){
        return this.base*this.base;
    }
}
 
 
//Aqui conectaremos con nuestro HTML
const btn=document.getElementById("btnRectangulo");
//Esto hace referencia el boton, ahora debemos asociarle el comportamiento click
 
    btn.addEventListener('click',()=>{
    //recuperamos el texto de las cajas de texto a través del ID
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;
 
    //Esta información a este punto esta como texto, ej "3" debemos convertirla a 3 es decir el número 3
    base=parseInt(base);
    altura=parseInt(altura);
    //pudimos haberlo hecho en una sola línea
    altura=parseInt(document.getElementById("altura").value);
    //ahora crearemos nuestro rectangulo
    let rect1=new Rectangulo (base,altura);
    //en lugar de imprimir el area en la consola, lo vamos a mandar junto con la información
    //del rectangulo al HTML, para eso vamos a localizar nuestro DIV resultados
    let divRes=document.getElementById("resultados");
    //Crearemos una etiqueta HTML <p> para poner la información
    //PAra el HTML del DIV debemos trabajar con la propiedad innerHTML
    divRes.innerHTML="<p>Triangulo con base " + rect1.base + " y altura " + rect1.altura + "</p>";
    //podemos usar mas de una linea, pero usaremos el += para que concatene
    divRes.innerHTML+="<p>con un area de " + rect1.area() + "</p>";
});

//Aqui conectaremos con nuestro HTML
const btnt=document.getElementById("btntriangulo");
//Esto hace referencia el boton, ahora debemos asociarle el comportamiento click
 
    btnt.addEventListener('click',()=>{
    //recuperamos el texto de las cajas de texto a través del ID
    let base=document.getElementById("baset").value;
    let altura=document.getElementById("alturat").value;
 
    //Esta información a este punto esta como texto, ej "3" debemos convertirla a 3 es decir el número 3
    base=parseInt(base);
    altura=parseInt(altura);
    //pudimos haberlo hecho en una sola línea
    altura=parseInt(document.getElementById("alturat").value);
    //ahora crearemos nuestro rectangulo
    let triangulo=new Triangulo (base,altura);
    //en lugar de imprimir el area en la consola, lo vamos a mandar junto con la información
    //del rectangulo al HTML, para eso vamos a localizar nuestro DIV resultados
    let divRes=document.getElementById("resultadost");
    //Crearemos una etiqueta HTML <p> para poner la información
    //PAra el HTML del DIV debemos trabajar con la propiedad innerHTML
    divRes.innerHTML="<p>Triangulo con base " + triangulo.base + " y altura " + triangulo.altura + "</p>";
    //podemos usar mas de una linea, pero usaremos el += para que concatene
    divRes.innerHTML+="<p>con un area de " + triangulo.area() + "</p>";
});

//Aqui conectaremos con nuestro HTML
const btnc=document.getElementById("cuadrado");
//Esto hace referencia el boton, ahora debemos asociarle el comportamiento click
 
    btnc.addEventListener('click',()=>{
    //recuperamos el texto de las cajas de texto a través del ID
    let base=document.getElementById("basec").value;
    //Esta información a este punto esta como texto, ej "3" debemos convertirla a 3 es decir el número 3
    base=parseInt(base);
    //ahora crearemos nuestro rectangulo
    let cuadrado=new Cuadrado (base);
    //en lugar de imprimir el area en la consola, lo vamos a mandar junto con la información
    //del rectangulo al HTML, para eso vamos a localizar nuestro DIV resultados
    let divRes=document.getElementById("resultadosc");
    //Crearemos una etiqueta HTML <p> para poner la información
    //PAra el HTML del DIV debemos trabajar con la propiedad innerHTML
    divRes.innerHTML="<p>Cuadrado con base " + cuadrado.base + "</p>";
    //podemos usar mas de una linea, pero usaremos el += para que concatene
    divRes.innerHTML+="<p>con un area de " + cuadrado.area() + "</p>";
});
