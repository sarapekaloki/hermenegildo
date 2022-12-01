import {analizadorLexico} from "./analizadorLexico.js";

var code = document.getElementById('code');
var result = document.getElementById('result')

document.getElementById('run').onclick = function() {run()};
document.getElementById('clear').onclick = function() {clearOutput()};

function run(){

    const codigo = code.value.replaceAll(/\n|\r/g," ")
    console.log(codigo)
    let tokens = analizadorLexico(0,codigo, 0, 0, [])

    var resultado = 'TOKENS:'.fontcolor("green").fontsize(4)+"<br />"+"------------------------------------------------------------------------------------".fontcolor("grey")+"<br />";
    
    tokens.forEach(token => { 
        if(token.hasOwnProperty("error")){
            resultado += token.error.fontcolor("red") + "<br />"
        } else {
            resultado += "Type: ".fontcolor("#ba22e0")+token.type + " Value: ".fontcolor("#ff00a2")+ token.value+"<br />";
        }
        
    })
    result.innerHTML = resultado

}

function clearOutput(){
    result.innerHTML = ""
}