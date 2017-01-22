function next(num) {
  let id = 'page-' + num, hideId = 'page-' + (num - 1);
  document.getElementById(hideId).style.display = 'none';
  document.getElementById(id).style.display = 'inline-block';
}

function prev(num) {
  let id = 'page-' + num, hideId = 'page-' + (num + 1);
  document.getElementById(hideId).style.display = 'none';
  document.getElementById(id).style.display = 'inline-block';
}
