let Xval = -1, Yval = 0, Rval = 1;
const Xarray = Array.from(document.getElementsByClassName("X"));
const Rarray = Array.from(document.getElementsByClassName("R"));

function clickX(elem) {
    let element = elem;
    Xval = elem.value;
    Xarray.forEach(el => el.classList.remove("active"));
    element.classList.add("active");
}

function clickR(elem) {
    let element = elem;
    Rval = elem.value;
    Rarray.forEach(el => el.checked = false);
    element.checked = true;
}

function validate() {
    let y = document.getElementById("Y");
    if (y.value === "" || +y.value !== +y.value || y.value > 3 || y.value < -5) {
        y.style.borderColor = "crimson";
        // document.getElementById("text").innerHTML = "Y must be a number in [-5; 3]";
    } else {
        y.style.borderColor = "darkgrey";
        // document.getElementById("text").innerHTML = "All right!";
        $.get("./script.php", {X: Xval, Y: Yval, R: Rval}, function (html) {
            document.getElementById("result").innerHTML = html;
        })
    }
    return false;
}