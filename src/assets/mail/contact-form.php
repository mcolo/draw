<?php

    if (empty($_POST["name"]) || empty($_POST["email"]) || empty($_POST["message"])) {

        $response = array( 'success' => false, 'message' => 'Please fill out form completely' );

    } else {

        $mailTo = 'mxmrcl89@gmail.com';
        $subject = 'mxmrcl email from ' . $email;
        $body  = 'From: ' . $_POST['name'] . "\n\n" . $_POST['message'] . "\n";

        $success = mail( $mailTo, $subject, $body );

        if ($success) {
            $response = array( 'success' => true, 'message' => 'Thanks for filling out the form' );
        }
    }

    echo json_encode( $response );
?>