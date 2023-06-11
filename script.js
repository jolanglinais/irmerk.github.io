const switchLightOrDark = () => {
    let theme = document.getElementById("theme");
    let el = document.getElementById("lightOrDarkButton");
    let sigImg = document.getElementById("sig");
    if (theme.getAttribute("href") == "styles/main.light.css") {
        theme.href = "styles/main.dark.css";
        el.firstChild.data = "☀️";
        sigImg.src = "assets/signatureLight.webp";
        sigImg.style.width = "400px";
        sigImg.style.maxWidth = "70%";
    } else {
        theme.href = "styles/main.light.css";
        el.firstChild.data = "🌙";
        sigImg.src = "assets/signatureDark.webp";
        sigImg.style.width = "400px";
        sigImg.style.maxWidth = "70%";
    };
};

document.getElementById("lightOrDarkButton").addEventListener("click", switchLightOrDark);
