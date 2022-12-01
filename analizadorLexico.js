
import {comentarios} from './FuncionesAuxiliares/comentarios.js'
import {identificadores} from './FuncionesAuxiliares/identificadores.js'
import {numeros} from './FuncionesAuxiliares/numeros.js';
import {cadenas} from './FuncionesAuxiliares/cadenas.js';
import {caracteres} from './FuncionesAuxiliares/caracters.js';
import {opmath} from './FuncionesAuxiliares/opmath.js';
import {oprel} from './FuncionesAuxiliares/oprel.js';
var tokensOG;
export function analizadorLexico(estado, cadena, apuntadorInicial, apuntadorBusqueda, tokens){
    tokensOG = tokens

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
                analizadorLexico(estado, cadena, apuntadorInicial+1, apuntadorBusqueda+1, tokensOG)
            }
        } 
        else {
            const res = singleOperator(cadena.charAt(apuntadorInicial));
            res.apuntadorInicial = res.apuntadorBusqueda = apuntadorInicial;
            reRun(res, cadena);
        }
    }
    return tokens    
}


// let codigo = 
// `
// lista = ["hola", True]
// `


// codigo = codigo.replaceAll("\t","")
// console.log("TOKENS")
// analizadorLexico(0, codigo, 0,0)


function reRun(res, cadena){
    if(Object.keys(res).length > 3) {
        tokensOG.push(res.token);
    } 
    if( res.apuntadorBusqueda < cadena.length-1){
        analizadorLexico(res.estado, cadena, res.apuntadorBusqueda+1, res.apuntadorBusqueda+1, tokensOG)
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
    let token = {};
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
        token = {type: type, value: char};
        res = {
            estado: 0,
            apuntadorInicial: 0,
            apuntadorBusqueda: 0,
            token: token
        }
    } else {
        token = {error: "ERROR: CARACTER INVÁLIDO " + char}
        res = {
            estado: 0,
            apuntadorInicial: 0,
            apuntadorBusqueda: 0,
            token: token
        }
    }
    return res
}