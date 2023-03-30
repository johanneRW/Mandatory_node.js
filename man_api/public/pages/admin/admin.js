const form = document.querySelector("#loginform")
form.addEventListener("submit", (event) => {
    // remove default functionality 
    event.preventDefault()

    // get values of username and password fields
    const username = document.querySelector("#username", form).value
    const password = document.querySelector("#password", form).value

    // check username and password
    if ((username === "manda") && (password === "tory")) {
        // redirect to protected page
        window.location.replace("/edit")
    } else {
        // show error message
        const error = document.querySelector("#loginerror")
        error.classList.remove("d-none")
    }
})