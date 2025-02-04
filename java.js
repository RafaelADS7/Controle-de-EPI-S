document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botao1').addEventListener('click', function() {
        document.getElementById('conteudo-direita1').style.display = 'block';
        document.getElementById('conteudo-direita2').style.display = 'none';
    });

    document.getElementById('botao2').addEventListener('click', function() {
        document.getElementById('conteudo-direita1').style.display = 'none';
        document.getElementById('conteudo-direita2').style.display = 'block';
    });
});
