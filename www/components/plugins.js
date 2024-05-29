$(document).ready(function() {
    $(document).on("click", "#alerta", function(){
        alert("Minha mensagem de alerta");
    });

    $(document).on("click", "#confirm", function(){
        function confirma(buttonIndex) {
            if(buttonIndex == 1) {
                alert("Escolheu a opção A");
            } else {
                alert("Escolheu a opção B");
            }
        }
        var resposta = confirm("Escolha A ou B");
        if (resposta) {
            confirma(1);
        } else {
            confirma(2);
        }
    });
    document.getElementById("beep").addEventListener("click", function() {
  var audio = document.getElementById("audio-beep");
  audio.play();
});
    document.getElementById("vibration").addEventListener("click", function() {
        if ("vibrate" in navigator) {
            navigator.vibrate(1000); // Faz o dispositivo vibrar por 1000 milissegundos
        } else {
            console.log("Vibração não é suportada neste dispositivo.");
        }
    });
  });