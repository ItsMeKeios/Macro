document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector('.button-random-move');
    var areaWidth = 600; // Ancho del área permitida
    var areaHeight = 300; // Alto del área permitida
  
    function moveButton() {
      var maxX = areaWidth - button.offsetWidth;
      var maxY = areaHeight - button.offsetHeight;
  
      var randomX = Math.floor(Math.random() * maxX);
      var randomY = Math.floor(Math.random() * maxY);
  
      button.style.transition = "transform 0s"; // Hacer que la transición sea instantánea
      button.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';
    }
  
    function showAlert() {
      alert("FAKIU, COMO POR QUE LE PICAS A QUE NO QUIERES????>:((");
    }
  
    button.addEventListener('mouseover', moveButton);
    button.addEventListener('click', showAlert);
  });
  
