console.log("Saludos amiguitos, esta tarea fue diseñada pa correrse con el html, los amo <3 bai")
function reloader(){
window.location="index.html";
}

function menu(){
    var a = prompt("Ingrese su opcion del menu");
    switch(a){
        case "1":
            palindromo();
            break;
        case "2":
            ordenarArreglo();
            break;
        case "3":
            callFibo();
            break;
        case "4":
            binario();
            break;
        case "5":
            circunferencia();
            break;
        case "6":
            absolut();
            break;
        case "7":
            bisiesto();
            break;
    }
}

function palindromo() {
    var a=prompt("ingrese texto a evaluar");
    var aux = a.split("").reverse().join("");
    console.log(a);
    console.log(aux);
    if(aux==a){
        document.open();
        document.write("<h1>Funcion de palindromo</h1>")
        document.write(a + "es una palabra palindroma");
        document.writeln('<input type="button" value="Refresh Page" onClick="reloader()">')
        document.close();
    }
    else{
        document.open();
        document.write("<h1>Funcion de palindromo</h1>")
        document.write(a + " no es una palabra palindroma ");
        document.writeln('<br><input type="button" value="Refresh Page" onClick="reloader()">')
        document.close();
    }
    
}


function ordenarArreglo(){
    var a=prompt("Ingrese su arreglo separando cada elemento por un espacio");
    var arreglo=a.split(" ");
    console.log(arreglo);
    document.open();
    document.write("<h1>Funcion de arreglar un arreglo </h1>");
    document.write("<h2>Arreglo sin ordenar</h2>");
    for (let i=0; i<arreglo.length;i++){
        document.write(arreglo[i]+", ");
    }
    for (var i = 0; i < arreglo.length; i++) {
        let value = arreglo[i]
        for (var j = i - 1; j > -1 && arreglo[j] > value; j--) {
          arreglo[j + 1] = arreglo[j]
        }
        arreglo[j + 1] = value
      }    




    document.write("<h2>Arreglo  ordenado</h2>");
    for (let i=0; i<arreglo.length;i++){
        document.write(arreglo[i]+" ");
    }
    document.writeln('<input type="button" value="Refresh Page" onClick="reloader()">')
        document.close();
}


function fibonacci_serie(n) {
    if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_serie(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};


function callFibo(){
    var a=prompt("Ingrese un valor para evaluar fibonacci ");
    var aux= parseInt(a,10);
    var fibonacci = fibonacci_serie(a);
    document.open();
    document.write("<h1>Secuencia de fibonnaci</h1>")
    for (let i=0; i<fibonacci.length;i++){
        document.write(fibonacci[i]+", ");
    }
    document.writeln('<input type="button" value="Refresh Page" onClick="reloader()">')
        document.close();
}


function binario(){
    var a=prompt("ingrese numero entero para pasar a binario");
    var aux = parseInt(a,10).toString(2);
    document.open();
    document.write(aux);
    document.writeln('<input type="button" value="Refresh Page" onClick="reloader()">')
    document.close();
}


function absolut(){
    var a=prompt("ingrese valor para sacar su valor absoluto");
    var aux= Math.abs(parseFloat(a,10));
    document.open();
    document.writeln(aux);
    document.writeln('<input type="button" value="Refresh Page" onClick="reloader()">')
    document.close();
}


function bisiesto(){
    var a= prompt("Ingrese año a evaluar");
    var aux = parseInt(a,10);
    document.open();

    if((aux % 4 == 0 && aux % 100 != 0) || aux % 400 == 0){
        document.write(a + " es un anio bisiesto");
    }else{
        document.write(a + " no es un anio bisiesto");
    }
    document.writeln('<input type="button" value="Refresh Page" onClick="reloader()">')
    
    document.close();
}


function circunferencia(){
    var a=prompt("Ingrese el radio de su circunferencia");
    var r= parseFloat(a);
    document.open();
    if(a<=0){
        document.write("<h1>NO SE EVALUAR</h1>");
    }
    else{
        var aux = Math.PI*((r)**2);
        document.write("El Radio es: "+ aux);
    }
    document.writeln('<input type="button" value="Refresh Page" onClick="reloader()">')
    
    document.close();
}
