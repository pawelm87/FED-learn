function correctMethodName() {
    return "output message";
}

try {
    var result = correctMethodName(3);
    document.writeln(result);
}
catch(error){
    document.writeln('error');
}