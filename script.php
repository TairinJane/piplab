<?php
$time = $_SERVER['REQUEST_TIME'];

$x = $_GET['X'];
$y = $_GET['Y'];
$R = $_GET['R'];

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

$PAGE = $HEADER . "<td>$x</td>" . "<td>$y</td>" . "<td>$R</td>";
if ($x <= 0 && $y >= 0 && ($x ** 2 + $y ** 2 <= $R ** 2) || $x <= 0 && $y <= 0 && ($y >= (-$x - $R))
    || $x >= 0 && $y <= 0 && $x <= $R && $y >= (-$R / 2)) {
    $PAGE .= "<td>Yes</td>";
} else $PAGE .= "<td>No</td>";

$PAGE .= "<td>" . (date('d.m.Y, H:i:s e')) . "</td>" . "<td>" . (time() - $time) . "</td>" . $FOOTER;

echo $PAGE;