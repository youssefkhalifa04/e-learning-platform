<?php 

    $servername = "localhost";
    $username = "admin";
    $password = "admin";
    $dbname = "9arrini";

    // Create connection
    try{
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e){
        echo "Connection failed: " . $e->getMessage();
    }
