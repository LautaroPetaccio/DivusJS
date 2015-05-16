<?php
// Request handler for the webcamp photo

$rawData = $_POST['imgBase64'];
$filteredData = explode(',', $rawData);
$unencoded = base64_decode($filteredData[1]);
$fp = fopen('imgs/dcphoto.png', 'w');
fwrite($fp, $unencoded);
fclose($fp);

echo "http://divulga.exp.dc.uba.ar/~divus/imgs/dcphoto.png"

?>