const loader = document.querySelector(".container-loader")

function loaderActive(){
    loader.classList.add("loader-active");
}

function loaderActiveTime(){
    setInterval(loaderActive, 2000);
}

window.onload = loaderActiveTime();

const whatsappButton = document.getElementById('whatsapp-button');
const whatsappPopup = document.getElementById('whatsapp-popup');

whatsappButton.addEventListener('click', () => {
  whatsappPopup.style.display = 'block';
});

  