window.onload = function() {
  document.getElementById('next')
          .addEventListener('click', function() {
            document.getElementById('page-1').style.display = 'none';
            document.getElementById('page-2').style.display = 'inline-block';
          });

  document.getElementById('prev')
          .addEventListener('click', function() {
            document.getElementById('page-2').style.display = 'none';
            document.getElementById('page-1').style.display = 'inline-block';
          });
}()
