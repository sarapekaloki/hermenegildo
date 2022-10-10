export default opmath

function opmath(estado, cadena, apuntadorInicial, apuntadorBusqueda){
    let res = {}
    while(true){
        if(estado == 12){
            if(cadena.charAt(apuntadorBusqueda) == "*"){
                estado = 13
                apuntadorBusqueda = apuntadorBusqueda+1
            } else {
                const token = {type: "OP_MULTIPLICACIÓN", value: cadena.slice(apuntadorInicial, apuntadorBusqueda)};
                res = {
                    estado: 0,
                    apuntadorInicial: apuntadorInicial,
                    apuntadorBusqueda: apuntadorBusqueda-1,
                    token: token
                }
                break
            }
        }
        else if(estado == 13){
            const token = {type: "OP_EXPONENTE", value: cadena.slice(apuntadorInicial, apuntadorBusqueda)};
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
