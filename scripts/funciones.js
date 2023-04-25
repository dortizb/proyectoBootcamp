function validarCampo() {
    let campos = [["name", "nameLbl"], ["correo", "correoLbl"], ["mensaje", "mensajeLbl"]];
    
    for (var i=0; i < campos.length; i++){

        let campo = document.forms["contacto"][campos[i][0]].value;
        let etiqueta = document.getElementById(campos[i][1]);

        if (campo == "") {
            alert("Debe llenar el campo " + etiqueta.innerHTML);

            return false;
        }
    };
    
}