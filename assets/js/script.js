$(function(){
  var minNumber = 1; // le minimum
  var maxNumber = 100; // le maximum
  var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // nombre aléatoire
  alert(randomnumber);
  var compteur = 0;
  $('#button').click(function(){
    compteur += 1;
    if($('#nb').val() > randomnumber){
      $('#text').html('moins');
    }
    else if($('#nb').val() < randomnumber){
      $('#text').html('plus');
    }
    else {
      $('#text').html('correct<br>nb de clic : ' + compteur);
    }
  })
});
