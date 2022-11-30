
export function caracteres(estado, cadena, apuntadorInicial, apuntadorBusqueda){
   let res = {}
   let token = {}
    while(true){
        if(estado == 9){
            if(cadena.charAt(apuntadorBusqueda)!= '\''){
                estado = 10;
                apuntadorBusqueda = apuntadorBusqueda+1;
            } else {
                estado = 11;
                apuntadorBusqueda = apuntadorBusqueda+1;
            }
        } else if (estado == 10){
            if(cadena.charAt(apuntadorBusqueda) == '\''){
                estado = 11;
                apuntadorBusqueda = apuntadorBusqueda+1;
            } else{
                token = {error: "ERROR LÉXICO: EL TIPO DE DATO \'CARACTER\' NO PUEDE TENER MÁS DE 1 CARACTER O NO TIENE \' DE CIERRE" }
                res = {
                    estado: 0,
                    apuntadorInicial: apuntadorInicial,
                    apuntadorBusqueda: apuntadorBusqueda,
                    token: token
                }
                break
            }

        } else if(estado == 11){
            token = {type: "CARACTER", value: cadena.slice(apuntadorInicial, apuntadorBusqueda)};
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
