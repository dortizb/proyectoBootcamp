function validarCampo() {
    let campos = [["name", "nameLbl"], ["correo", "correoLbl"], ["mensaje", "mensajeLbl"]];
    var vacios = []

    for (var i=0; i < campos.length; i++){

        let campo = document.forms["contacto"][campos[i][0]].value;
        let etiqueta = document.getElementById(campos[i][1]);

        
        if (campo == "") {
            vacios.push(etiqueta.innerHTML)
            console.log(vacios.length);
        }
    };

    if (vacios.length > 0){
        alert("Debe llenar los siguientes campos:\n " + vacios.join(", "));
    }
    
    return false;
    
}