export default caracteres;

function caracteres(estado, cadena, apuntadorInicial, apuntadorBusqueda){
   let res = {}
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
                console.log("ERROR: EL TIPO DE DATO \'CARACTER\' NO PUEDE TENER MÁS DE DOS CARACTERES O NO TIENE \' DE CIERRE");
                res = {
                    estado: 0,
                    apuntadorInicial: apuntadorInicial,
                    apuntadorBusqueda: apuntadorBusqueda+1
                }
                break
            }

        } else if(estado == 11){
            const token = {type: "CARACTER", value: cadena.slice(apuntadorInicial, apuntadorBusqueda)};
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
