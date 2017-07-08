var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    novaLinha();
    $("#botao-reiniciar").click(reiniciarJogo);
});


function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");

    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    campo.on("input", function () {
        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro() {
    $("#botao-reiniciar").attr("disabled",true);
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function () {

        var cronometroID = setInterval(function () {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometroID);
                finalizaJogo();
            }
        }, 1000);
    });
}

function inicializaMarcadores(){
var frase = $(".frase").text();
campo.on("input",function(){
    var digitado = campo.val();
    var comparavel = frase.substr(0,digitado.length);

    if (digitado == comparavel) {
        campo.removeClass("campo-errado");
        campo.addClass("campo-correto");
    }else{
        campo.removeClass("campo-correto");
        campo.addClass("campo-errado");
    }

    if (digitado.length == 0) {
        campo.removeClass("campo-errado");
        campo.removeClass("campo-correto");
    }
});
}



function finalizaJogo(){
    campo.attr("disabled", true);
    $("#botao-reiniciar").attr("disabled",false);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}


function reiniciarJogo() {
    campo.attr("disabled",false);
    campo.val("");
    $("#contador-caracteres").text("0");
    $("#contador-palavras").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("campo-errado");
    campo.removeClass("campo-correto");
}



