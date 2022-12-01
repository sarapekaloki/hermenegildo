import {analizadorLexico} from "./analizadorLexico.js";
import {tabla, validarCadena} from "./analizadorSintactico.js";

var code = document.getElementById('code');
var result = document.getElementById('result');
let hasError = false;

document.getElementById('run').onclick = function() {run()};
document.getElementById('clear').onclick = function() {clearOutput()};

function run(){

    const codigo = code.value.replaceAll(/\n|\r/g," ")
    console.log(codigo)
    let tokens = analizadorLexico(0,codigo, 0, 0, [])
    let entrada = [];
    var resultado = 'TOKENS:'.fontcolor("green").fontsize(4)+"<br />"+"<hr>".fontcolor("grey")+"<br />";

    console.log(tokens)
    tokens.forEach(token => { 
        if(token.hasOwnProperty("error")){
            resultado += token.error.fontcolor("red") + "<br />"
            hasError = true
        } else {
            resultado += "Type: ".fontcolor("#ba22e0")+token.type + " Value: ".fontcolor("#ff00a2")+ token.value+"<br />";
            entrada.push(token.type)
        }
    })
    entrada.push("$")
    resultado += "<br/>" + 'ANÁLISIS SINTÁCTICO:'.fontcolor("green").fontsize(4) + "<br>" + "<hr>";


    console.log("entradita",entrada);
    if(!hasError){
        let pila = ["$", "S0"];
        let syntax = validarCadena(tabla,pila,entrada)
        syntax.forEach(production =>{
            if(production.length === 3){
                resultado += production[0].fontcolor("#ff66a8")+": ".fontcolor("#ff66a8")+production[1]+" &#8594 ".fontcolor("#ff66a8")+ production[2]+"<br>";
            }
            else if(production.length === 2){
                if(production[0] === "Entrada_antes" || production[0] === "Pila_antes"){
                    resultado += production[0].fontcolor("#a866ff")+": ".fontcolor("#a866ff") + production[1]+"<br/>";
                }
                else if (production[0] === "Match"){
                    resultado += production[0].fontcolor("orange")+": ".fontcolor("orange") + production[1]+"<br/>";
                }
                else{
                    resultado += production[0].fontcolor("navy")+": ".fontcolor("navy") + production[1]+"<br/>";
                }
            }
            else{
                if(production[0] === "BR"){
                    resultado += "<hr>";
                }
                else if(production[0] === 1){
                    resultado += "SINTAXIS CORRECTA".fontcolor("green");
                }
                else if(production[0] === 0){
                    resultado += "ERROR DE SINTAXIS".fontcolor("red");
                }
            }
        })
        console.log(syntax)
    }
    result.innerHTML = resultado
}

function clearOutput(){
    result.innerHTML = ""
}