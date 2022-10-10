export default identificadores

const palabrasReservadas = {
    None: "NULO",
    True: "BOOLEANO_1",
    False: "BOOLEANO_0",
    and: "OPERADOR_AND",
    or: "OPERADOR_OR",
    not: "OPERADOR_NOT",
    xor: "OPERADOR_XOR",
    in: "OPERADOR_IN",
    if: "CONDICIONAL_IF",
    else: "CONDICIONAL_ELSE",
    switch: "CONDICIONAL_SWITCH",
    case: "CONDICIONAL_CASE",
    for: "CICLO_FOR",
    while: "CICLO_WHILE",
    print: "FUNCION_PRINT",
    len: "FUNCION_LEN",
    type: "FUNCION_TYPE",
    break: "BREAK"

}

function identificadores(estado, cadena, apuntadorInicial, apuntadorBusqueda){
    let res = {}
    while(true){
        if (estado == 3){
            if (cadena.charAt(apuntadorBusqueda) == ' ' || cadena.length == apuntadorBusqueda){
                const value = cadena.slice(apuntadorInicial, apuntadorBusqueda+1).trim()
                const type = Object.keys(palabrasReservadas).includes(value) ? palabrasReservadas[value] : "ID"
                const token = {type: type, value: value};
                res = {
                    estado: 0,
                    apuntadorInicial: apuntadorInicial,
                    apuntadorBusqueda: apuntadorBusqueda-1,
                    token: token
                }
                break
            }
            else if(isValidChar(cadena.charAt(apuntadorBusqueda))){
                apuntadorBusqueda = apuntadorBusqueda+1      
            }else{
                const value = cadena.slice(apuntadorInicial, apuntadorBusqueda).trim()
                const type = Object.keys(palabrasReservadas).includes(value) ? palabrasReservadas[value] : "ID"
                const token = {type: type, value: value};
                res = {
                    estado: 0,
                    apuntadorInicial: apuntadorInicial,
                    apuntadorBusqueda: apuntadorBusqueda-1,
                    token: token
                }
                break
            }

        }
    }
    return res
}

function isValidChar(char) {
    if(char == ' ' || char == null){
        return false
    }else if(!isNaN(char)){
        return true
    } else if(char == '$' | char == '_'){
        return true 
    } else if (char.match(/[a-zA-Z]/)){
        return true
    } else{
        return false
    }
}

