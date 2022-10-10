export default cadenas

function cadenas(estado, cadena, apuntadorInicial, apuntadorBusqueda){
    let res = {};
    while(true){
        if(estado == 7){
            if(cadena.charAt(apuntadorBusqueda) == '"'){
                estado = 8;
                apuntadorBusqueda = apuntadorBusqueda+1;
            } else {
                apuntadorBusqueda = apuntadorBusqueda+1
                if(cadena.length <= apuntadorBusqueda){
                    console.log("ERROR STRING (FALTA \" DE CIERRE)")
                    break
                }
            }
        }
        if(estado == 8){
            const token = {type: "STRING", value: cadena.slice(apuntadorInicial, apuntadorBusqueda)};
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

