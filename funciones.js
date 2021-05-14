/* 
var sumar =function (a,b,c=3) {
    return a+b+c;
}
var resultado = sumar(3,2,4);
var resultado1 = sumar(3,2);
console.log(resultado);
console.log(resultado1);
*/
//FUNCIONES RECURSIVAS
 /*var factorial= function (n) {
     if ((n==0) || (n==1)) {
         return 1;
     }else{
         return (n*factorial(n-1));
     }
     
 }

 console.log(factorial(4));
 */

 //ARREGLOS
 /*
 
 console.log(nombres[2]);
 console.log(vegetales[1]);

 nombres[0]='jose';
 vegetales[2]='nabo';
 console.log(nombres[0]);
 console.log(vegetales[2]);

 */
 var nombres=['Va','ne','ssa'];
 var vegetales= new Array('0','1','2');
 /*console.log(nombres.length);
 for (var i = 0; i <= nombres.length -1; i++) {
     console.log(nombres[i]);
     
 }

 vegetales.forEach(function (elemento, indice) {
     console.log(elemento, indice);
 });

 */
console.log(nombres);
nombres.push('paa');
console.log(nombres);

nombres.unshift('inicio');
console.log(nombres);

nombres.pop();
console.log(nombres);

nombres.shift('');
console.log(nombres);

var pos=nombres.indexOf('Va');
console.log(pos);

nombres.splice(1,1);
console.log(nombres);