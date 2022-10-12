import comentarios from './FuncionesAuxiliares/comentarios.mjs'
import identificadores from './FuncionesAuxiliares/identificadores.mjs'
import numeros from './FuncionesAuxiliares/numeros.mjs';
import cadenas from './FuncionesAuxiliares/cadenas.mjs';
import caracteres from './FuncionesAuxiliares/caracters.mjs';
import opmath from './FuncionesAuxiliares/opmath.mjs';
import oprel from './FuncionesAuxiliares/oprel.mjs';

const tokens = []
function analizadorLexico(estado, cadena, apuntadorInicial, apuntadorBusqueda){
    if(estado == 0) {
        if(cadena.charAt(apuntadorInicial) == "#"){
            estado = 1;
            const res = comentarios(estado, cadena, apuntadorInicial, apuntadorBusqueda+1);
            reRun(res, cadena)
            
        }
        else if (isValidIDChar(cadena.charAt(apuntadorInicial))){
            estado = 3;
            const res = identificadores(estado, cadena, apuntadorInicial, apuntadorBusqueda+1);
            reRun(res, cadena)

        }
        else if(isNumber(cadena.charAt(apuntadorInicial))){
            estado = 4;
            const res = numeros(estado, cadena, apuntadorInicial, apuntadorBusqueda+1);
            reRun(res, cadena);
        }
        else if(cadena.charAt(apuntadorInicial) == "\""){
            estado = 7;
            const res = cadenas(estado, cadena, apuntadorInicial, apuntadorBusqueda+1);
            reRun(res, cadena);
        }
        else if(cadena.charAt(apuntadorInicial) == "\'"){
            estado = 9;
            const res = caracteres(estado, cadena, apuntadorInicial, apuntadorBusqueda+1);
            reRun(res, cadena);
        }
        else if(cadena.charAt(apuntadorInicial) == "*"){
            estado = 12;
            const res = opmath(estado, cadena, apuntadorInicial, apuntadorBusqueda+1);
            reRun(res, cadena);
        }
        else if(cadena.charAt(apuntadorInicial) == "<"){
            estado = 14;
            const res = oprel(estado, cadena, apuntadorInicial, apuntadorBusqueda+1);
            reRun(res, cadena);
        }
        else if(cadena.charAt(apuntadorInicial) == ">"){
            estado = 15;
            const res = oprel(estado, cadena, apuntadorInicial, apuntadorBusqueda+1);
            reRun(res, cadena);
        }
        else if(cadena.charAt(apuntadorInicial) == "="){
            estado = 16;
            const res = oprel(estado, cadena, apuntadorInicial, apuntadorBusqueda+1);
            reRun(res, cadena);
        }
        else if (cadena.charAt(apuntadorInicial) == " " || cadena.charAt(apuntadorInicial) == "\n" || cadena.charAt(apuntadorInicial) == ""){
            if(apuntadorBusqueda < cadena.length-1){
                analizadorLexico(estado, cadena, apuntadorInicial+1, apuntadorBusqueda+1)
            }
        } 
        else {
            const res = singleOperator(cadena.charAt(apuntadorInicial));
            res.apuntadorInicial = res.apuntadorBusqueda = apuntadorInicial;
            reRun(res, cadena);
        }
    }    
}


let codigo = 
`
lista@ = ["listaEpica"];
num = 0.
text = "";
equipo = "chivas";
switch(equipo) {
  case "xolos":
    text = "Los xolos son malos";
    break;
  case "pachuca":
    text = "Equipo bueno";
    break;
}
`


codigo = codigo.replaceAll("\t","")
console.log("TOKENS")
analizadorLexico(0, codigo, 0,0)


function reRun(res, cadena){
    if(Object.keys(res).length > 3) {
        console.log(res.token)
    }
    if( res.apuntadorBusqueda < cadena.length-1){
        analizadorLexico(res.estado, cadena, res.apuntadorBusqueda+1, res.apuntadorBusqueda+1)
    }
}
function isValidIDChar(char){
    if(char == '$' | char == '_'){
        return true 
    } else if (char.match(/[a-zA-Z]/)){
        return true
    }
    return false
}

function isNumber(char) {
    return /\d/.test(char);
  }


function singleOperator(char){
    let res = {};
    const validOptions = {
        "+":"OP_SUMA",
        "-":"OP_RESTA",
        "/":"OP_DIVISIÓN",
        "%":"OP_MODULO",
        "[":"CORCHETE_ABRIR",
        "]":"CORCHETE_CERRAR",
        "{":"LLAVE_ABRIR",
        "}":"LLAVE_CERRAR",
        "(":"PARÉNTESIS_ABRIR",
        ")":"PARÉNTESIS_CERRAR",
        ";":"TERMINADOR",
        ":":"DOS_PUNTOS",
        ",":"COMA",
    };
    const type = Object.keys(validOptions).includes(char) ? validOptions[char] : 0;
    if(type){
        const token = {type: type, value: char};
        res = {
            estado: 0,
            apuntadorInicial: 0,
            apuntadorBusqueda: 0,
            token: token
        }
    } else {
        console.log("ERROR: CARACTER INVÁLIDO", char)
        res = {
            estado: 0,
            apuntadorInicial: 0,
            apuntadorBusqueda: 0,
        }
    }
    return res               
}