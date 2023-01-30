#!/usr/local/bin/php
<?php

  $file = @fopen('scores.txt', 'a');
  $name = $_POST['username'];
  $score = $_POST['gamescore'];
  fwrite($file, "$name $score\n");
  fclose($file);

?>