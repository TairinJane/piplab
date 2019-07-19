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
        text = "All right!";
        valid = true;
    }
    document.getElementById("text").innerHTML = text;
    //alert(text);

    if (valid) {
        $.get("./script.php", {X: x, Y: y, R: R}, function (html) {
            //alert(html);
            document.getElementById("result").innerHTML = html;
        } )
    }

    return false;
}