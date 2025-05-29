const buttons = document.querySelectorAll(".tab-button");
const videoFrame = document.getElementById("main-video");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Atualiza vídeo principal
    const videoURL = button.getAttribute("data-video");
    videoFrame.src = videoURL;

    // Atualiza botão ativo
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
