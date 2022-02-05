function clickNasa() {
    var data = document.getElementById("data").value 
    $.ajax({url: `https://api.nasa.gov/planetary/apod?api_key=pHsnT7tQ99igunba5HszJ0X9ThO7eQmZMYUcA1T8&date=${data}` ,
    success: function( param){
    $("#image").attr('src' ,param.url)
    $('#title').text( param.title)
    $('#description').text( param.explanation)
    },
    error: function(erro){
        console.log(`${erro.result + erro.status} Deu ruim `);
    },
});
};
clickNasa()
