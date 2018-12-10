<?php
$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_message = $_POST['message'];
$mail_to = 'droooopp@gmail.com';
$subject = $field_name.'様より、サイトからお問い合わせがありました。 ';
$body_message = 'NAME: '.$field_name."\n";
$body_message .= 'EMAIL: '.$field_email."\n";
$body_message .= 'MESSAGE: '.$field_message;
$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";
if (is_null($field_email)) { ?>
	<script language="javascript" type="text/javascript">
		window.location = 'contact/failed/';
	</script>
<?php
}
else {
	$mail_status = mail($mail_to, $subject, $body_message, $headers);

	if ($mail_status) { ?>
		<script language="javascript" type="text/javascript">
			window.location = 'contact/success/';
		</script>
	<?php
	}
	else { ?>
		<script language="javascript" type="text/javascript">
			window.location = 'contact/failed/';
		</script>
	<?php
	}
}
?>
