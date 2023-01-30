let box_score = 45; // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
let dice_roll = null;

// Declare other useful DOM elements.
const result = document.getElementsByTagName('span')[0];
const roll_dice_button = document.getElementById('roll_dice_button');
const submit_box_selection_button = document.getElementById('submit_box_selection_button');
const inputs = document.getElementsByTagName('input');
const checkbox_numbers = document.getElementsByTagName('td');

const enable_disable_checkboxes = [];

window.onload = function() {
  // Handle submit button appropriately.
  // Add appropriate event listeners.
  submit_box_selection_button.disabled = true;

  for (let i = 0; i < 9; ++i) {
    const checkbox_number = checkbox_numbers[i];
    const checkbox = inputs[i + 1];

    enable_disable_checkboxes.push(function() {
      checkbox.checked = !checkbox.checked;
    });

    checkbox_number.addEventListener('click', enable_disable_checkboxes[i]);
  }
};


function roll_dice() {
  // Roll dice, inject text, disable / enable buttons.
  let x = Math.floor(1 + 6 * Math.random());
  let y = Math.floor(1 + 6 * Math.random());
  dice_roll = x + y;
  result.innerHTML = `${x} + ${y} = ${x + y}`;
  roll_dice_button.disabled = true;
  submit_box_selection_button.disabled = false;
}


function sum_checked_values() {
  let x = 0;
  for (let i = 0; i < 9; ++i) {
    const checkbox = inputs[i + 1];
    if (checkbox.checked) {
      x += Number(checkbox.value);
    }
  }

  return x;
}


function check_submission() {
  // Deal with invalid submission.

  // Deal with valid submission...
  // Delete text, disable / enable buttons and checkboxes.
  // Change to rolling one die if appropriate.
  let sum_checked_value = sum_checked_values();
  if (sum_checked_value !== dice_roll) {
    alert("The total of the boxes you selected does not match the dice roll. Please make another selection and try again.");
    return;
  }

  for (let i = 0; i < 9; ++i) {
    const checkbox = inputs[i + 1];
    if (checkbox.checked) {
      const checkbox_number = checkbox_numbers[i];
      checkbox.checked = false;
      checkbox.disabled = true;
      // removeEventListener here
      checkbox_number.style.backgroundColor = 'lightblue';
      checkbox_number.removeEventListener('click', enable_disable_checkboxes[i]);
    }
  }
  box_score -= sum_checked_value;
  result.innerHTML = '';
  roll_dice_button.disabled = false;
  submit_box_selection_button.disabled = true;

  if (box_score <= 6) {
    inputs[0].onclick = roll_die;
  }
}


function roll_die() {
  // Roll single die, inject text, disable / enable buttons.
  let x = Math.floor(1 + 6 * Math.random());
  dice_roll = x;
  result.innerHTML = `${x}`;
  roll_dice_button.disabled = true;
  submit_box_selection_button.disabled = false;
}


function finish() {
  alert(`Your score is ${box_score}`);

  const request = new XMLHttpRequest();
  const username = get_username();
  const message = `username=${username}&gamescore=${box_score}`;

  request.onload = function() {
    if (this.status === 200) {
      window.location.assign('https://www.pic.ucla.edu/~yuchen724/final/scores.php');
    }
  };

  request.open('POST', 'score.php');
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send(message);

}