$(function(){
    let bar = document.getElementById("progressBar");
    let plus1 = 1;
    let plus3 = 3;
    let plus7 = 7;
    let width = 0;
    $('#1proc').click(function(){
        width += plus1;
        bar.style.width = width + '%';
        $("#progressBar").attr("width");
    });
    $('#3proc').click(function(){
        width += plus3;
        bar.style.width = width + '%';
        $("#progressBar").attr("width");
    });
    $('#7proc').click(function(){
        width += plus7;
        bar.style.width = width + '%';
        $("#progressBar").attr("width");
    });
    $('#resBtn').click(function(){
        width = 0;
        bar.style.width = width;
       $("progressBar").attr("width"); 
    });



});
