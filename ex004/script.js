// Lógica do botão "sim"
document.getElementById("yesBtn").addEventListener("click", function() {
    window.location.href = "sim.html";
});

// Lógica do botão "não"
document.getElementById("noBtn").addEventListener("mouseover", function() {
    let btn = this;
    
    // Gera novas posições aleatórias
    let x = Math.random() * (window.innerWidth - btn.offsetWidth);
    let y = Math.random() * (window.innerHeight - btn.offsetHeight);

    // Garante que o botão permaneça visível na tela
    x = Math.max(10, Math.min(x, window.innerWidth - btn.offsetWidth - 10));
    y = Math.max(10, Math.min(y, window.innerHeight - btn.offsetHeight - 10));

    btn.style.position = "absolute";
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
});
