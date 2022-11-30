
export function oprel(estado, cadena, apuntadorInicial, apuntadorBusqueda){
    let token = {};
    while(true){
        if(estado == 14){
            if(cadena.charAt(apuntadorBusqueda) == "="){
                token = {type: "MENOR_IGUAL_QUE", value: cadena.slice(apuntadorInicial, apuntadorBusqueda+1)};
            } else {
                apuntadorBusqueda = apuntadorBusqueda-1
                token = {type: "MENOR_QUE", value: cadena.slice(apuntadorInicial, apuntadorBusqueda+1)};
            }
            break
        }
        else if(estado == 15){
            if(cadena.charAt(apuntadorBusqueda) == "="){
                token = {type: "MAYOR_IGUAL_QUE", value: cadena.slice(apuntadorInicial, apuntadorBusqueda+1)};
            } else {
                apuntadorBusqueda = apuntadorBusqueda-1
                token = {type: "MAYOR_QUE", value: cadena.slice(apuntadorInicial, apuntadorBusqueda+1)};
            }
            break
        }
        else if(estado == 16){
            if(cadena.charAt(apuntadorBusqueda) == "="){
                token = {type: "IGUAL_A", value: cadena.slice(apuntadorInicial, apuntadorBusqueda+1)};
            } else {
                apuntadorBusqueda = apuntadorBusqueda-1
                token = {type: "ASIGNACIÓN", value: cadena.slice(apuntadorInicial, apuntadorBusqueda+1)};
            }
            break
        }
    }
    const res = {
        estado: 0,
        apuntadorInicial: apuntadorInicial,
        apuntadorBusqueda: apuntadorBusqueda,
        token: token
    }

    return res
}
