const inputString = document.getElementById("input-string");
const btnInvert = document.getElementById("btn-invert");
const result = document.getElementById("result");

function invertString(str) {
    let inverted = "";
    for (let i = str.length - 1; i >= 0; i--) {
        inverted += str[i];
    }
    return inverted;
}

btnInvert.addEventListener("click", () => {
    const str = inputString.value;
    const inverted = invertString(str);
    result.textContent = inverted;
    result.classList.add("text-primary", "font-weight-bold");
});
