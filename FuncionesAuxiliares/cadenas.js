
export function cadenas(estado, cadena, apuntadorInicial, apuntadorBusqueda){
    let res = {};
    let token = {}
    while(true){
        if(estado == 7){
            if(cadena.charAt(apuntadorBusqueda) == '"'){
                estado = 8;
                apuntadorBusqueda = apuntadorBusqueda+1;
            } else {
                apuntadorBusqueda = apuntadorBusqueda+1
                if(cadena.length <= apuntadorBusqueda){
                    token = {error: "ERROR STRING (FALTA \" DE CIERRE)"}
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
        if(estado == 8){
            token = {type: "STRING", value: cadena.slice(apuntadorInicial, apuntadorBusqueda)};
                res = {
                    estado: 0,
                    apuntadorInicial: apuntadorInicial,
                    apuntadorBusqueda: apuntadorBusqueda-1,
                    token: token
                }
                break
        }
    }
    return res
}

