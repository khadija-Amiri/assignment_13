
(function() {
  
  let percentage=document.getElementById('different');
  let screen = document.querySelector('.calculator-screen');
  let buttons= document.querySelectorAll('.btn');
  let equal= document. querySelector('.btn-equals');
  let dlt=document.querySelector('.btn-delete');
  let DeleteOne=document.querySelector('.btn-clear');

 
 buttons.forEach(function (button){
  button.addEventListener('click', function(e){
      let value = e.target.dataset.num;
      screen.value+=value;
      
  })
});
percentage.addEventListener('click', function(e){
   screen.value=screen.value/100;
});

 
  equal.addEventListener('click', function(e) {
   if ( screen.value === '') {
     screen.value = "";
   }else{
    let answer = eval(screen.value);
    screen.value=answer;

   }});
   dlt.addEventListener('click', function(e) {
     
     screen.value="";
    
   });
    DeleteOne.addEventListener('click',function(e){
        screen.value=screen.value.slice(0,-1);
   });
  
}) ();


