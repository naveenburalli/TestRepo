const firstMatch = document.querySelectorAll(".second");
firstMatch.forEach(element => {
    element.innerHTML="<h1>This is modified</h1>"
    console.log(element.innerText)
});
