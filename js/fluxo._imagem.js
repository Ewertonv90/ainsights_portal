window.onload = function() {
    const image = document.getElementById('sequencia');

    let currentIndex = 0;
    const totalImages = 26;

    function showNextImage() {
        // Atualiza o src da imagem para a próxima imagem
        image.src = 'img/sequencia/' + currentIndex + '.drawio.png';

        // Atualiza o índice atual para a próxima imagem
        currentIndex++;

        // Se atingir o último índice, volta ao primeiro
        if (currentIndex >= totalImages) {
            currentIndex = 0;
        }
    }
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        // Executa a função showNextImage() apenas se estiver na página index
        setInterval(showNextImage, 600);
    }
    
};
