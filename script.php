<?php
$time = $_SERVER['REQUEST_TIME_FLOAT'];

$x = $_GET['X'];
$y = $_GET['Y'];
$R = $_GET['R'];

$xArr = [-5, -4, -3, -2, -1, 0, 1, 2, 3];
$rArr = [1, 1.5, 2, 2.5, 3];

$HEADER = '
<tr>
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>Result</th>
        <th>Time</th>
        <th>Script work time</th>
    </tr>
    <tr>';

$FOOTER = '    </tr>';

if ((is_numeric($x) && is_numeric($y) && is_numeric($R))
    && (in_array((float) $x, $xArr) && in_array((float) $R, $rArr) && (-5 <= $y && $y <= 3))) {
    $PAGE = $HEADER . "<td>$x</td>" . "<td>$y</td>" . "<td>$R</td>";

    if ($x <= 0 && $y >= 0 && ($x ** 2 + $y ** 2 <= $R ** 2) || $x <= 0 && $y <= 0 && ($y >= (-$x - $R))
        || $x >= 0 && $y <= 0 && $x <= $R && $y >= (-$R / 2)) {
        $PAGE .= "<td>Yes</td>";

    } else $PAGE .= "<td>No</td>";

    $PAGE .= "<td>" . (date('d.m.Y, H:i:s e')) . "</td>" . "<td>" . number_format(microtime(true) - $time, 5, '.', '') . " msec </td>" . $FOOTER;

} else {
    $PAGE = "X = $x, Y = $y, R = $R is not valid";
}

echo $PAGE;