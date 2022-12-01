import {analizadorLexico} from "./analizadorLexico.js";
import {tabla, validarCadena} from "./analizadorSintactico.js";

var code = document.getElementById('code');
var result = document.getElementById('result');

let hasError = false;

document.getElementById('run').onclick = function() {run()};
document.getElementById('clear').onclick = function() {clearOutput()};

function run(){

    const codigo = code.value.replaceAll("\t","")
    let tokens = analizadorLexico(0,codigo, 0, 0, [])


    var resultado = 'TOKENS:'.fontcolor("green").fontsize(4)+"<br />"+"------------------------------------------------------------------------------------".fontcolor("grey")+"<br />";
    console.log(tokens)
    tokens.forEach(token => { 
        if(token.hasOwnProperty("error")){
            resultado += token.error.fontcolor("red") + "<br />"
            hasError = true
        } else {
            resultado += "Type: ".fontcolor("#ba22e0")+token.type + " Value: ".fontcolor("#ff00a2")+ token.value+"<br />";
        }
    })
    result.innerHTML = resultado

    let pila = ["$", "S0"];
    validarCadena()

}

function clearOutput(){
    result.innerHTML = ""
}