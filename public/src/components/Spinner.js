const spinner = document.querySelector("#spinner")

const hidenSpinner = () => {
    let hidenSpinner = spinner.style.display = "none";
    return hidenSpinner;
}

const showSpinner = () => {
    let showSpinner = spinner.style.display = "block";
    return showSpinner
}

export { showSpinner, hidenSpinner };