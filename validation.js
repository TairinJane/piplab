function validate() {
    let x, y, R, text, valid;

    x = document.getElementById("X").value;
    y = document.getElementById("Y").value;
    R = document.getElementById("R").value;
    valid = false;
    //alert(x+" "+y+" "+R);

    if (isNaN(x)) {
        text = "Invalid X";
    } else if (isNaN(y)) {
        text = "Invalid Y";
    } else if (isNaN(R) || R<=0) {
        text = "Invalid R";
    } else {
        text = "";
        valid = true;
    }
    document.getElementById("text").innerHTML = text;
    //alert(text);
    return valid;
}