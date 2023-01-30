function welcome_username() {

  const textbox = document.getElementById('username');
  let username = textbox.value;

  // 3(a)
  let message = "";

  if (username.length < 5) {
    message += "Username must be 5 characters or longer.\n";
  }
  if (username.length > 40) {
    message += "Username cannot be longer than 40 characters.\n";
  }


  let flag1 = true;
  let flag2 = true;
  let flag3 = true;
  for (let i = 0; i < username.length; ++i) {

    if (username[i] === " " && flag1) {
      message += "Username cannot contain spaces.\n";
      flag1 = false;
    }


    if (username[i] === "," && flag2) {
      message += "Username cannot contain commas.\n";
      flag2 = false;
    }


    if (username[i] === ";" && flag3) {
      message += "Username cannot contain semicolons.\n";
      flag3 = false;
    }
  }

  if (message !== "") {
    alert(message);
    return;
  }


  let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}:'|`~<.>/?";

  for (let char of username) {
    let globalRegex = new RegExp(char);
    if (globalRegex.test(string) === false) {
      alert("Username can only use chracters from the following string: " + string);
      return;
    }
  }



  // 3(b)
  let hour_in_future = new Date();
  hour_in_future.setHours(hour_in_future.getHours() + 1);
  document.cookie = `username=${textbox.value}; expires=${hour_in_future.toUTCString()}`;


  // 3(c)
  window.location.assign('https://www.pic.ucla.edu/~yuchen724/final/shut_the_box.php');

}

window.onload = function() {
  document.getElementById('username').value = get_username();
};