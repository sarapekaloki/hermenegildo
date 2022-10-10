export default comentarios;
function comentarios(estado, cadena, apuntadorInicial, apuntadorBusqueda) { 
    let res = {}
    while(true){
        if(estado == 1){
            if(cadena.charAt(apuntadorBusqueda) == '#'){
                estado = 2;
                apuntadorBusqueda = apuntadorBusqueda+1
            } else {
                apuntadorBusqueda = apuntadorBusqueda+1
                if(cadena.length <= apuntadorBusqueda){
                    console.log("ERROR COMENTARIO (FALTA # DE CIERRE)")
                    break
                } 
            }
        }  else if (estado == 2) {
            const token = {type: "COMENTARIO", value: cadena.slice(apuntadorInicial, apuntadorBusqueda)};
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

