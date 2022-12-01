import {analizadorLexico} from "./analizadorLexico.js";
import {tabla, validarCadena,validarCadena2} from "./analizadorSintactico.js";

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
    var resultado = 'TOKENS:'.fontcolor("green").fontsize(4)+"<br />"+"<br>"+"<hr>".fontcolor("grey")+"<br />";

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
            if(production.length > 1){
                console.log(production,"1")
                resultado += production[0].fontcolor("cyan")+":".fontcolor("cyan") + production[1]+"<br/>";
                console.log(production,"2")
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