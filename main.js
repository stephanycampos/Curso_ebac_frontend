document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    let campoA = parseFloat(document.getElementById("campoA").value);
    let campoB = parseFloat(document.getElementById("campoB").value);
    let message = document.getElementById("message");

    if (campoB > campoA) {
        message.textContent = "Parabéns! O segundo número é maior que o primeiro. Tudo certo!";
        message.className = "message success";
    } else {
        message.textContent = "Erro! O segundo número precisa ser maior que o primeiro.";
        message.className = "message error";
    }
});
