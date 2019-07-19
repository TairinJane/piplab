function validate() {
    let x, y, R, text, valid;

    x = document.getElementById("X");
    y = document.getElementById("Y");
    R = document.getElementById("R");
    valid = true;
    text = "Invalid input";
    //alert(x.value + " " + y.value + " " + R.value + "\n" + (+x.value) + " " + (+y.value) + " " + (+R.value));
    //alert(isNaN(x.value));

    if (x.value === "" || +x.value !== +x.value) {
        x.style.borderColor = "red";
        //text = "Invalid X";
        valid = false;
    } else x.style.borderColor = "darkgrey";

    if (y.value === "" || +y.value !== +y.value) {
        y.style.borderColor = "red";
        //text = "Invalid Y";
        valid = false;
    } else y.style.borderColor = "darkgrey";

    if (R.value === "" || +R.value !== +R.value || R.value <= 0) {
        R.style.borderColor = "red";
        //text = "Invalid R";
        valid = false;
    } else R.style.borderColor = "darkgrey";

    if (valid) {
        text = "All right!";
    }
    document.getElementById("text").innerHTML = text;
    //alert(text);

    if (valid) {
        $.get("./script.php", {X: x.value, Y: y.value, R: R.value}, function (html) {
            //alert(html);
            document.getElementById("result").innerHTML = html;
        })
    }

    return false;
}