<?php
	$result_string = $_POST['postresult_string'];
	file_put_contents("potato_results_" . substr($result_string, 0, strpos($result_string, ",")) . ".csv", $result_string, FILE_APPEND);
?>