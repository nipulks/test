<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "nibm";

$conn = mysqli_connect($host, $username, $password, $database);

if(!$conn){
    die("Connection faild :" .mysql_connect_error());
}
echo "Connection Succesfully";
?>