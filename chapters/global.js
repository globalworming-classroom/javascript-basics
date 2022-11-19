const runCatching = (f) => {
    try {
        f()
    } catch (e) {
        document.getElementsByClassName("jserror")[0].textContent = e.message + "\n\n" + e.stack
    }
}

const showNext = () => {
    document.getElementById("next").hidden = false
}