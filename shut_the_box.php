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

  if (!isset($_COOKIE['username'])) {
    header('Location: welcome.php');
    exit;
  }

?>


<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Shut The Box</title>
    <script src="username.js" defer></script>
    <script src="shut_the_box.js" defer></script>
  </head>


  <body>
    <header>
      <h1>Shut The Box</h1>
    </header>

    <main>
      <section>
        <h2>The Rules</h2>
        <ol type="i">
          <li>Each turn, you role the dice (or die) and select 1 or more boxes which sum to the value of your roll.</li>
          <li>You will not be allowed to pick the boxes which you choose on subsequent turns.</li>
          <li>When the sum of the boxes which are left is less than or equal to 6, you will only roll a single die.</li>
          <li>When you cannot make a move or you give up, the sum of the boxes which are left gives your score.</li>
          <li>Lower scores are better and a score of 0 is called "shutting the box".</li>
        </ol>
      </section>

      <section>
        <h2>Dice roll</h2>
        <fieldset>
          <input type="button" id="roll_dice_button" value="Roll dice" onclick="roll_dice();"> Result:
          <span id="result_not_move"></span>
        </fieldset>

      </section>


      <section>
        <h2>Box selection</h2>
        <table>
          <thead>
            <tr>
              <td>1<br></td>
              <td>2<br></td>
              <td>3<br></td>
              <td>4<br></td>
              <td>5<br></td>
              <td>6<br></td>
              <td>7<br></td>
              <td>8<br></td>
              <td>9<br></td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input type="checkbox" id="number1" name="number1" value="1"><br>
              </td>
              <td>
                <input type="checkbox" id="number2" name="number2" value="2"><br>
              </td>
              <td>
                <input type="checkbox" id="number3" name="number3" value="3"><br>
              </td>
              <td>
                <input type="checkbox" id="number4" name="number4" value="4"><br>
              </td>
              <td>
                <input type="checkbox" id="number5" name="number5" value="5"><br>
              </td>
              <td>
                <input type="checkbox" id="number6" name="number6" value="6"><br>
              </td>
              <td>
                <input type="checkbox" id="number7" name="number7" value="7"><br>
              </td>
              <td>
                <input type="checkbox" id="number8" name="number8" value="8"><br>
              </td>
              <td>
                <input type="checkbox" id="number9" name="number9" value="9"><br>
              </td>
            </tr>
          </tbody>
        </table>
        <fieldset>
          <input type="button" id="submit_box_selection_button" value="Submit box selection" onclick="check_submission();">
          <input type="button" value="I give up / I can't make a valid move." onclick="finish();">
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