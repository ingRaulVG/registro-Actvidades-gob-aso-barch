function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Registro de Actvidades Gob BArcg');
}

function obtenerDatosHTML(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerRegActividades(){
    let hoja = SpreadsheetApp.openById('1QqwnHeV1tSnsCgQtiE4qH255UAqcSlbZLM5yFTQXjzI');
    let bdHoja = hoja.getSheetByName("Inventario-Actvidades");
    let datos = bdHoja.getDataRange().getDisplayValues();
    return datos;
}