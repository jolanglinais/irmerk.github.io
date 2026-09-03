const button = document.getElementById("lightOrDarkButton");
const sigDark = document.getElementById("sigDark");
const osPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

/* data-theme is the override; absent it, the OS decides. */
const isDark = () => {
    const override = document.documentElement.dataset.theme;
    return override ? override === "dark" : osPrefersDark.matches;
};

/* Colors follow the tokens on their own; these two don't. */
const render = () => {
    const dark = isDark();
    button.textContent = dark ? "☀️" : "🌙";
    button.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    /* Take the media query out of <picture>'s hands once overridden. */
    sigDark.media = dark ? "all" : "not all";
};

button.addEventListener("click", () => {
    document.documentElement.dataset.theme = isDark() ? "light" : "dark";
    render();
});

/* Only reaches render() while no override is set. */
osPrefersDark.addEventListener("change", render);

render();
