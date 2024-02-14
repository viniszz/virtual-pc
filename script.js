var resultado = document.getElementById("resultado");
var calculo = "";

function inserirNumero(numero) {
    if (resultado.innerHTML == 0) {
        resultado.innerHTML = numero;
    } else if (resultado.innerHTML.length < 13) {
        resultado.innerHTML += numero;
    } else {
        alert("Número muito grande.")
        resultado.innerHTML = 0;
    }
}

function insert1() {
    inserirNumero("1");
}

function insert2() {
    inserirNumero("2");
}

function insert3() {
    inserirNumero("3");
}

function insert4() {
    inserirNumero("4");
}

function insert5() {
    inserirNumero("5");
}

function insert6() {
    inserirNumero("6");
}

function insert7() {
    inserirNumero("7");
}

function insert8() {
    inserirNumero("8");
}

function insert9() {
    inserirNumero("9");
}

function insert0() {
    inserirNumero("0");
}

function insertMais() {
    inserirNumero("+");
}

function insertMenos() {
    inserirNumero("-");
}

function limpar() {
    resultado.innerHTML = 0;
}

function calcular() {
    // Obtém o valor atualmente exibido no visor
    var valorAtual = resultado.innerHTML;

    // Verifica se o último caractere no visor é um sinal de mais (+)
    if (valorAtual.charAt(valorAtual.length - 1) === "+") {
        // Se sim, remove o sinal de mais
        valorAtual = valorAtual.slice(0, -1);
    } else if (valorAtual.charAt(valorAtual.length - 1) === "-") {
        valorAtual = valorAtual.slice(0, -1);
    }

    // Realiza a avaliação da expressão matemática presente no visor e atualiza o resultado
    try {
        // Usa a função eval para avaliar a expressão e obter o resultado
        var resultadoCalculo = eval(valorAtual);

        // Atualiza o visor com o resultado do cálculo
        resultado.innerHTML = resultadoCalculo;
    } catch (error) {
        // Se ocorrer um erro durante a avaliação da expressão, exibe uma mensagem de erro
        alert("Erro ao calcular.");
        resultado.innerHTML = 0;
    }
}

function openConfig() {
    window.location.href = "config.html"
}

function openCalculator() {
    window.location.href = "calculator.html"
}

function closeConfig() {
    window.location.href = "index.html"
}

// Funções para definir o wallpaper selecionado
function setWallpaper1() {
    document.getElementById("desktop").style.backgroundImage = "url('images/wallpaper1.png')";
    localStorage.setItem('selectedWallpaper', 'images/wallpaper1.png'); // Armazenar no localStorage
    document.body.classList.add('loading'); // Adiciona a classe 'loading' ao body
    document.getElementById("desktop").onload = function() {
        document.body.classList.remove('loading'); // Remove a classe 'loading' após o carregamento completo da imagem
    };
}

function setWallpaper2() {
    document.getElementById("desktop").style.backgroundImage = "url('images/wallpaper2.png')";
    localStorage.setItem('selectedWallpaper', 'images/wallpaper2.png'); // Armazenar no localStorage
    document.body.classList.add('loading'); // Adiciona a classe 'loading' ao body
    document.getElementById("desktop").onload = function() {
        document.body.classList.remove('loading'); // Remove a classe 'loading' após o carregamento completo da imagem
    };
}

function setWallpaper3() {
    document.getElementById("desktop").style.backgroundImage = "url('images/wallpaper3.png')";
    localStorage.setItem('selectedWallpaper', 'images/wallpaper3.png'); // Armazenar no localStorage
    document.body.classList.add('loading'); // Adiciona a classe 'loading' ao body
    document.getElementById("desktop").onload = function() {
        document.body.classList.remove('loading'); // Remove a classe 'loading' após o carregamento completo da imagem
    };
}

// Função para carregar o wallpaper selecionado ao abrir a página
function loadSelectedWallpaper() {
    const selectedWallpaper = localStorage.getItem('selectedWallpaper');
    if (selectedWallpaper) {
        document.getElementById("desktop").style.backgroundImage = "url('" + selectedWallpaper + "')";
    }
}

// Carregar o wallpaper selecionado ao abrir a página
loadSelectedWallpaper();

function startDino() {
    alert('Em desenvolvimento...');
}