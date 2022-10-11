export default numeros

function numeros(estado, cadena, apuntadorInicial, apuntadorBusqueda){
   let res = {}
    while(true){ 
        if (estado == 4){
            if(isNumber(cadena.charAt(apuntadorBusqueda))){
                apuntadorBusqueda = apuntadorBusqueda+1;
            } else if (cadena.charAt(apuntadorBusqueda) == '.'){
                estado = 5;
                apuntadorBusqueda = apuntadorBusqueda+1;
            } else {
                const token = {type: "ENTERO", value: cadena.slice(apuntadorInicial, apuntadorBusqueda)};
                res = {
                    estado: 0,
                    apuntadorInicial: apuntadorInicial,
                    apuntadorBusqueda: apuntadorBusqueda-1,
                    token: token
                }
                break
            }
        } else if(estado == 5){
            if(isNumber(cadena.charAt(apuntadorBusqueda))){
                estado = 6;

                apuntadorBusqueda = apuntadorBusqueda+1;
            } else {
                console.log("ERROR: NO HAY UN NÚMERO DESPUÉS DEL PUNTO FLOTANTE -> ", cadena.slice(apuntadorInicial, apuntadorBusqueda))
                res = {
                    estado: 0,
                    apuntadorInicial: apuntadorInicial,
                    apuntadorBusqueda: apuntadorBusqueda-1
                }
                break
            }

        } else if(estado == 6){
            if(isNumber(cadena.charAt(apuntadorBusqueda))){
                apuntadorBusqueda = apuntadorBusqueda+1;
            } else{

                const token = {type: "DECIMAL", value: cadena.slice(apuntadorInicial, apuntadorBusqueda)};
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


function isNumber(char) {
    return /\d/.test(char);
  }