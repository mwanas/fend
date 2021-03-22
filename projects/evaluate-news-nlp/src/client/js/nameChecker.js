function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    return isValidURL(inputText);
}

//Validating URL using regex
function isValidURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
      '(\\#[-a-z\\d_]*)?$','i'); 
    return !!pattern.test(str);
}

export { checkForName, isValidURL }
