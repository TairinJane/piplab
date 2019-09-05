let Xval = -1, Yval = 0, Rval = 1;
const Xarray = Array.from(document.getElementsByClassName("X"));
const Rarray = Array.from(document.getElementsByClassName("R"));

function clickX(elem) {
    Xval = elem.value;
    Xarray.forEach(el => el.classList.remove("active"));
    elem.classList.add("active");
}

function clickR(elem) {
    Rval = elem.value;
    Rarray.forEach(el => el.checked = false);
    elem.checked = true;
}

function validate() {
    let y = document.getElementById("Y");
    if (y.value === "" || +y.value !== +y.value || y.value > 3 || y.value < -5) {
        y.style.borderColor = "crimson";
    } else {
        y.style.borderColor = "darkgrey";
        $.get("./script.php", {X: Xval, Y: parseFloat(y.value), R: Rval}, function (html) {
            document.getElementById("result").innerHTML = html;
        })
    }
    return false;
}