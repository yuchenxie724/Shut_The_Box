#!/usr/local/bin/php
<?php
  
  session_save_path(__DIR__ . '/sessions/');
  session_name('shutTheBox');
  session_start();

  $welcome = isset($_SESSION['loggedin']) && $_SESSION['loggedin'];
  if (!$welcome){
    header('Location: login.php');
    exit;
  }

?>


<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Shut The Box</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" defer=""></script>
    <script src="scores.js" defer></script>
  </head>


  <body>
    <header>
      <h1>Shut The Box</h1>
    </header>

    <main>
      <section>
        <h2>Scores</h2>
        <p>Well done! Here are the scores so far... </p>

        <p id="text"></p>

        <fieldset>
          <input type="button" value="PLAY AGAIN!!!" onclick="redirect_to_welcome();">
        </fieldset>

        <fieldset>
          <input type="button" value="Force update / start updating" onclick="force_print();">
          <input type="button" value="Stop updating" onclick="stop_printing();">
        </fieldset>
      </section>

    </main>

    <footer>
      <hr>
      <small>
        &copy; Yuchen Xie, 2021
      </small>
    </footer>
  </body>

</html>