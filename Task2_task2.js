function images(){
    var a = document.getElementById('myTable').getElementsByTagName('td').length;
    var b = document.getElementById('myTable').getElementsByTagName('th').length;
    var c = a + b;
    document.getElementById('result').innerHTML = 'Количество изображений - ' + c;
}

function time() {
    var day = new Date().toLocaleString();
    document.getElementById('hours').innerHTML = 'Текущая дата и время - ' + day;
}



