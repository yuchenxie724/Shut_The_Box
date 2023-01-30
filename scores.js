function redirect_to_welcome() {
  window.location.assign('https://www.pic.ucla.edu/~yuchen724/final/welcome.php');
}


let timeoutID = null;
print();

function print() {
  $.ajax({

    method: 'GET',
    url: 'scores.txt',
    cache: false,
    success: function(data) {
      $('#text').html(data.split('\n').join('<br>'));
    }

  });

  timeoutID = setTimeout(print, 10000);
  
}

function stop_printing() {
  clearTimeout(timeoutID);
}

function force_print() {
  stop_printing();
  print();
}