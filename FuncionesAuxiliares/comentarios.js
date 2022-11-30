export function comentarios(estado, cadena, apuntadorInicial, apuntadorBusqueda) { 
    let res = {}
    let token = {}
    while(true){
        if(estado == 1){
            if(cadena.charAt(apuntadorBusqueda) == '#'){
                estado = 2;
                apuntadorBusqueda = apuntadorBusqueda+1
            } else {
                apuntadorBusqueda = apuntadorBusqueda+1
                if(cadena.length <= apuntadorBusqueda){
                    token =  {error: "ERROR LÉXICO DE COMENTARIO (FALTA # DE CIERRE)"}
                    res = {
                        estado: 0,
                        apuntadorInicial: apuntadorInicial,
                        apuntadorBusqueda: apuntadorBusqueda-1,
                        token: token
                    }
                    break
                } 
            }
        }  else if (estado == 2) {
            token = {type: "COMENTARIO", value: cadena.slice(apuntadorInicial, apuntadorBusqueda)};
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

