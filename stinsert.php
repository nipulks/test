<?php
include 'stcon.php';

$studentNo = $_POST["stindex"];
$stdentName =$_POST["stname"];
$couers =$_POST["course"];
$appliedDate=$_POST["applieddate"];
$status=$_POST["status"];

$sql = "INSERT INTO student_data
(studentNo, stdentName, course, date ,status) 
VALUES ('$studentNo', '$stdentName', '$couers','$appliedDate','$status')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
?>