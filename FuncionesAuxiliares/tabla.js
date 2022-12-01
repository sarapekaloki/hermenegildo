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


export const tablaOG = {
    "S":{
        "Id":["A","$"],
    },
    "S0":{
        "$":[""],
        "type":["type","(","Tipo",")",";","S0"],
        "print":["print","(","P",")",";","S0"],
        "len":["len","(","LenOpt",")",";","S0"],
        "if":["If"],
        "}":[""],
        "switch":["Switch"],
        "for":["For"],
        "id":["A"],
        "while":["While"],
        "case":[""],
        "break":[""],
        "":[""]
    },
    "If":{
        "if":["if","(","E",")","{","S0","}","Else","S0"]
    },
    "Switch":{
        "switch":["switch","(","E",")","{","Case","}","S0"]
    },
    "For":{
        "for":["for","(","id","in","Coleccion",")","{","S0","}","S0"]
    },
    "While":{
        "while":["while","(","E",")","{","S0","}","S0"]
    },
    "Case":{
        "case":["case","E",":","S0","B"]
    },
    "B":{
        "}":[""],
        "case":[""],
        "break":["break",";"]
    },
    "Case'":{
        "case":["Case","Case'"]
    },
    "Else":{
        "$":[""],
        "type":[""],
        "print":[""],
        "len":[""],
        "if":[""],
        "}":[""],
        "switch":[""],
        "for":[""],
        "id":[""],
        "while":[""],
        "case":[""],
        "break":[""],
        "else":["else","{","S0","}"]
    },
    "Coleccion":{
        "id":["id"],
        "list":["list"]
    },
    "A":{
        "id":["id","=","E",";","S0"]
    },
    "E":{
        "id":["T", "E'"],
        "(":["T", "E'"],
        "string":["T", "E'"],
        "bool":["T", "E'"],
        "int":["T", "E'"],
        "float":["T", "E'"],
        "list":["T", "E'"],
        "tuple":["T", "E'"]
    },
    "E'":{
        ";":[""],
        ")":[""],
        ":":[""],
        "+":["+", "T" , "E'"],
        "-":["-", "T" , "E'"],
        "/":["/", "T" , "E'"],
        "*":["*", "T" , "E'"],
        "**":["**", "T" , "E'"],
        "%":["%", "T" , "E'"],
        "<":["<", "T" , "E'"],
        ">":[">", "T" , "E'"],
        "<=":["<=", "T" , "E'"],
        ">=":[">=", "T" , "E'"],
        "==":["==", "T" , "E'"],
        "!=":["!=", "T" , "E'"],
        "in":["in", "T" , "E'"],
        "not":["not","IN", "T" , "E'"],
        "and":["and", "T" , "E'"],
        "or":["xor", "T" , "E'"],
        "xor":["xor", "T" , "E'"],
    },
    "IN":{
        "(":[""],
        "id":[""],
        "in":["in"],
        "string":[""],
        "bool":[""],
        "int":[""],
        "float":[""],
        "list":[""],
        "tuple":[""]
    },
    "T":{
        "(":["F"],
        "id":["F"],
        "string":["F"],
        "bool":["F"],
        "int":["F"],
        "float":["F"],
        "list":["F"],
        "tuple":["F"]
    },
    "F":{
        "(":["(","E",")"],
        "id":["id"],
        "string":["string"],
        "bool":["bool"],
        "int":["int"],
        "float":["float"],
        "list":["list"],
        "tuple":["tuple"]
    },
    "Tipo":{
        "id":["id"],
        "string":["string"],
        "bool":["bool"],
        "int":["int"],
        "float":["float"],
        "list":["list"],
        "tuple":["tuple"]
    },
    "LenOpt":{
        "id":["id"],
        "string":["string"],
        "list":["list"],
        "tuple":["tuple"]
    },
    "P":{
        "(":["Z","Y"],
        "id":["Z","Y"],
        "string":["Z","Y"],
        "bool":["Z","Y"],
        "int":["Z","Y"],
        "float":["Z","Y"],
        "list":["Z","Y"],
        "tuple":["Z","Y"]
    },
    "Y":{
        ")":[""],
        ",":[",","Z","Y"]
    },
    "Z":{
        "(":["F"],
        "id":["F"],
        "string":["F"],
        "bool":["F"],
        "int":["F"],
        "float":["F"],
        "list":["F"],
        "tuple":["F"]
    }
}