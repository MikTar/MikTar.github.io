$name =  $_POST['name'];
$contact = $_POST['contact'];
$comment = $_POST['comment'];
$my-email = "mikael.tar@outlook.com"
$backurl = "../index.html";

mail($my-email, $name, $contact, $comment )

