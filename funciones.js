function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Registro de Actvidades Gob BArcg');
}

function obtenerDatosHTML(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}