const button = document.getElementById("lightOrDarkButton");

const switchLightOrDark = () => {
    const root = document.documentElement;
    const sigImg = document.getElementById("sig");

    if (root.dataset.theme === "dark") {
        delete root.dataset.theme;
        button.textContent = "🌙";
        sigImg.src = "assets/signatureDark.webp";
    } else {
        root.dataset.theme = "dark";
        button.textContent = "☀️";
        sigImg.src = "assets/signatureLight.webp";
    }
};

button.addEventListener("click", switchLightOrDark);
