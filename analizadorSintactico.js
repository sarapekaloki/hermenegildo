export const tabla = {
    "S":{
        "Id":["A","$"],
    },
    "S0":{
        "$":[""],
        "FUNCION_TYPE":["FUNCION_TYPE","PARÉNTESIS_ABRIR","Tipo","PARÉNTESIS_CERRAR","TERMINADOR","S0"],
        "FUNCION_PRINT":["FUNCION_PRINT","PARÉNTESIS_ABRIR","P","PARÉNTESIS_CERRAR","TERMINADOR","S0"],
        "FUNCION_LEN":["FUNCION_LEN","PARÉNTESIS_ABRIR","LenOpt","PARÉNTESIS_CERRAR","TERMINADOR","S0"],
        "CONDICIONAL_IF":["If"],
        "LLAVE_CERRAR":[""],
        "CONDICIONAL_SWITCH":["Switch"],
        "CICLO_FOR":["For"],
        "ID":["A"],
        "CICLO_WHILE":["While"],
        "CONDICIONAL_CASE":[""],
        "BREAK":[""],
        "":[""]
    },
    "If":{
        "CONDICIONAL_IF":["CONDICIONAL_IF","PARÉNTESIS_ABRIR","E","PARÉNTESIS_CERRAR","LLAVE_ABRIR","S0","LLAVE_CERRAR","Else","S0"]
    },
    "Switch":{
        "CONDICIONAL_SWITCH":["CONDICIONAL_SWITCH","PARÉNTESIS_ABRIR","E","PARÉNTESIS_CERRAR","LLAVE_ABRIR","Case","LLAVE_CERRAR","S0"]
    },
    "For":{
        "CICLO_FOR":["CICLO_FOR","PARÉNTESIS_ABRIR","ID","OPERADOR_IN","Coleccion","PARÉNTESIS_CERRAR","LLAVE_ABRIR","S0","LLAVE_CERRAR","S0"]
    },
    "While":{
        "CICLO_WHILE":["CICLO_WHILE","PARÉNTESIS_ABRIR","E","PARÉNTESIS_CERRAR","LLAVE_ABRIR","S0","LLAVE_CERRAR","S0"]
    },
    "Case":{
        "CONDICIONAL_CASE":["CONDICIONAL_CASE","E","DOS_PUNTOS","S0","B"]
    },
    "B":{
        "LLAVE_CERRAR":[""],
        "CONDICIONAL_CASE":[""],
        "BREAK":["BREAK","TERMINADOR"]
    },
    "Case'":{
        "CONDICIONAL_CASE":["Case","Case'"]
    },
    "Else":{
        "$":[""],
        "FUNCION_TYPE":[""],
        "FUNCION_PRINT":[""],
        "FUNCION_LEN":[""],
        "CONDICIONAL_IF":[""],
        "LLAVE_CERRAR":[""],
        "CONDICIONAL_SWITCH":[""],
        "CICLO_FOR":[""],
        "ID":[""],
        "CICLO_WHILE":[""],
        "CONDICIONAL_CASE":[""],
        "BREAK":[""],
        "CONDICIONAL_ELSE":["CONDICIONAL_ELSE","LLAVE_ABRIR","S0","LLAVE_CERRAR"]
    },
    "Coleccion":{
        "ID":["ID"],
        "[":["List"],
        "(":["Tuple"],

    },
    "A":{
        "ID":["ID","ASIGNACIÓN","E","TERMINADOR","S0"]
    },
    "E":{
        "ID":["T", "E'"],
        "PARÉNTESIS_ABRIR":["T", "E'"],
        "STRING":["T", "E'"],
        "BOOLEANO":["T", "E'"],
        "ENTERO":["T", "E'"],
        "DECIMAL":["T", "E'"],
        "CARACTER":["T", "E'"],
        "[":["T", "E'"],
        "(":["T","E'"],
    },
    "E'":{
        "TERMINADOR":[""],
        "PARÉNTESIS_CERRAR":[""],
        "DOS_PUNTOS":[""],
        "OP_SUMA":["OP_SUMA", "T" , "E'"],
        "OP_RESTA":["OP_RESTA", "T" , "E'"],
        "OP_DIVISIÓN":["OP_DIVISIÓN", "T" , "E'"],
        "OP_MULTIPLICACIÓN":["OP_MULTIPLICACIÓN", "T" , "E'"],
        "OP_EXPONENTE":["OP_EXPONENTE", "T" , "E'"],
        "OP_MODULO":["OP_MODULO", "T" , "E'"],
        "MENOR_QUE":["MENOR_QUE", "T" , "E'"],
        "MAYOR_QUE":["MAYOR_QUE", "T" , "E'"],
        "MENOR_IGUAL_QUE":["MENOR_IGUAL_QUE", "T" , "E'"],
        "MAYOR_IGUAL_QUE":["MAYOR_IGUAL_QUE", "T" , "E'"],
        "IGUAL_A":["IGUAL_A", "T" , "E'"],
        "!=":["!=", "T" , "E'"],
        "OPERADOR_IN":["OPERADOR_IN", "T" , "E'"],
        "OPERADOR_NOT":["OPERADOR_NOT","IN", "T" , "E'"],
        "OPERADOR_AND":["OPERADOR_AND", "T" , "E'"],
        "OPERADOR_OR":["OPERADOR_OR", "T" , "E'"],
        "OPERADOR_XOR":["OPERADOR_XOR", "T" , "E'"],
        ")":[""],
    },
    "IN":{
        "PARÉNTESIS_ABRIR":[""],
        "ID":[""],
        "OPERADOR_IN":["OPERADOR_IN"],
        "STRING":[""],
        "BOOLEANO":[""],
        "ENTERO":[""],
        "DECIMAL":[""],
        "CARACTER":[""],
        "[":[""],
        "(":[""],
    },
    "T":{
        "PARÉNTESIS_ABRIR":["F"],
        "ID":["F"],
        "STRING":["F"],
        "BOOLEANO":["F"],
        "ENTERO":["F"],
        "DECIMAL":["F"],
        "CARACTER":["F"],
        "[":["List"],
        "(":["F"],
    },
    "F":{
        "PARÉNTESIS_ABRIR":["PARÉNTESIS_ABRIR","E","PARÉNTESIS_CERRAR"],
        "ID":["ID"],
        "STRING":["STRING"],
        "BOOLEANO":["BOOLEANO"],
        "ENTERO":["ENTERO"],
        "DECIMAL":["DECIMAL"],
        "CARACTER":["CARACTER"],
        "[":["List"],
        "(":["(","E",")"],
    },
    "Tipo":{
        "ID":["ID"],
        "STRING":["STRING"],
        "BOOLEANO":["BOOLEANO"],
        "ENTERO":["ENTERO"],
        "DECIMAL":["DECIMAL"],
        "CARACTER":["CARACTER"],
        "[":["List"],
        "(":["Tuple"],
    },
    "List":{
        "[":["[","L","]"],
    },
    "L":{
        "(":["P"],
        ")":[""],
        "ID":["P"],
        "STRING":["P"],
        "BOOLEANO":["P"],
        "ENTERO":["P"],
        "DECIMAL":["P"],
        "CARACTER":["P"],
        "[":["P"],
        "]":[""],
    },
    "Tuple":{
        "(":["(","L",")"],
    },
    "LenOpt":{
        "ID":["ID"],
        "STRING":["STRING"],
        "[":["List"],
        "(":["Tuple"],
    },
    "P":{
        "PARÉNTESIS_ABRIR":["Z","Y"],
        "ID":["Z","Y"],
        "STRING":["Z","Y"],
        "BOOLEANO":["Z","Y"],
        "ENTERO":["Z","Y"],
        "DECIMAL":["Z","Y"],
        "CARACTER":["Z","Y"],
        "[":["Z","Y"],
        "(":["Z","Y"],
    },
    "Y":{
        "PARÉNTESIS_CERRAR":[""],
        "COMA":["COMA","Z","Y"],
        "]":[""],
        ")":[""],
    },
    "Z":{
        "PARÉNTESIS_ABRIR":["F"],
        "ID":["F"],
        "STRING":["F"],
        "BOOLEANO":["F"],
        "ENTERO":["F"],
        "DECIMAL":["F"],
        "CARACTER":["F"],
        "[":["F"],
        "(":["F"],
    }
}

export let pila = ["$", "S0"];

export function validarCadena(tabla,pila,entrada){
    let producciones = [];
    while (true){
        try{
            let cosita = [];
            cosita.push("Entrada --> ", entrada)
            cosita.push("Pila --> ", pila)
            let valorPila = pila.pop()
            if (valorPila === '' || valorPila === ""){
                valorPila = pila.pop()
            }
            let valorEntrada = entrada[0]

            if(valorEntrada===valorPila){
                if(valorEntrada==='$'){
                    producciones.push(`--- CADENA VALIDA ---`)
                    return producciones
                }
                cosita.push(`Match Pila -> ${valorPila} Entrada -> ${valorEntrada}`)
                entrada=entrada.slice(1);
            }
            else{
                const resultado = tabla[valorPila][valorEntrada]
                // console.log("tabla[",valorPila,"][",valorEntrada,"]")
                cosita.push("Sustitución = ",tabla[valorPila][valorEntrada])
                resultado.slice().reverse().forEach(valor => pila.push(valor) );
            }
            cosita.push("Valorentrada --> ",valorEntrada)
            cosita.push("ValorPila --> ",valorPila)
            cosita.push("Entrada --> ", entrada)
            cosita.push("Pila --> ", pila)
            producciones.push(cosita)
        }
        catch (e){
            producciones.push(`--- CADENA NO VALIDA ---`)
            return producciones
        }
    }
}


export function validarCadena2(tabla,pila,entrada){
    while (true){
        try{
            console.log("Entrada --> ", entrada)
            console.log("Pila --> ", pila)
            let valorPila = pila.pop()
            if (valorPila === '' || valorPila === ""){
                valorPila = pila.pop()
            }
            let valorEntrada = entrada[0]

            if(valorEntrada===valorPila){
                if(valorEntrada==='$'){
                    console.log(`--- CADENA VALIDA ---`)
                    break
                }
                console.log(`Match Pila -> ${valorPila} Entrada -> ${valorEntrada}`)
                entrada=entrada.slice(1);
            }
            else{
                const resultado = tabla[valorPila][valorEntrada]
                console.log("tabla[",valorPila,"][",valorEntrada,"]")
                console.log("res = ",tabla[valorPila][valorEntrada])
                resultado.slice().reverse().forEach(valor => pila.push(valor) );
            }
            console.log("Valorentrada --> ",valorEntrada)
            console.log("ValorPila --> ",valorPila)
            console.log("Entrada --> ", entrada)
            console.log("Pila --> ", pila)
            console.log("\n")
        }
        catch (e){
            console.log(`--- CADENA NO VALIDA ---`)
            break
        }
    }
}