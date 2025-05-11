<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $link = mysqli_connect('localhost', 'root', '', 'formguard');

    if (!$link) {
        die('Connection error: ' . mysqli_connect_error());
    }

    $query = "INSERT INTO form (name, mobile, email, message) VALUES ('$name', '$mobile', '$email', '$message')";
    $result = mysqli_query($link, $query);

    if ($result) {
        echo "<script>alert('Form submitted successfully!'); window.location.href='FormGuard.html';</script>";
        exit;
        header('Location: FormGuard.html');
        exit();
    } else {
        echo 'Error while inserting record: ' . mysqli_error($link);
    }

    mysqli_close($link);
} else {
    echo "You are accessing via wrong request";
}
?>
