<?php

    $errors = array();
    $response = array();

    if (empty($_POST['name']))
    $errors['name'] = 'Name is required.';
    if (empty($_POST['email']))
    $errors['email'] = 'Email is required.';
    if (empty($_POST['message']))
    $errors['message'] = 'Message is required.';

    if (!empty($errors)) {

        $response['success'] = false;
        $response['message'] = 'Please fill out form completely';
        $response['errors'] = $errors;

    } else {

        $mailTo = 'mxmrcl89@gmail.com';
        $subject = 'mxmrcl email from ' . $email;
        $body  = 'From: ' . $_POST['name'] . "\n\n" . $_POST['message'] . "\n";

        $headers = 'From: '.$email_from."rn".'Reply-To: '.$email_from."rn".'X-Mailer: PHP/' . phpversion();

        $success = mail($mailTo, $subject, $body, $headers);

        if ($success) {
            $response['success'] = true;
            $response['message'] = 'Thanks for filling out the form';
        } else {
            $response['success'] = false;
            $response['message'] = 'Something went wrong'
        }
    }

    echo json_encode( $response );
?>