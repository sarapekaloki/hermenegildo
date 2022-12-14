
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