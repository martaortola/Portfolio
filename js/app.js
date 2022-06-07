$(document).ready(function(){
  let content = "Carles";
  let contentNew = ["Marta Ortolá", "front-end developer", "diseñadora gráfica"];
  let contentArray = [];
  printLetter(contentNew, contentArray, 0);
  setInterval(function() {
          $("#parpadeo").fadeToggle();
  }, 400);

  let indice = $('.li.rojo').index($(this))
  $('.main__a.rojo').eq(indice).addClass('activado')
});

$(window).scroll(function(){

  let pixel = $(window).scrollTop()
  let lastPixelBox = $('.header').height()

  if( pixel >= lastPixelBox ){
      $('.header').addClass('activado')
  }
  else{
    $('.header').removeClass('activado')
  }
  
}) 

function printLetter(content, contentArray, index){
let printLetter = setInterval(function() {
   if(contentArray.length === 0){
     if($( "#content" ).text() !== ""){
             clearInterval(printLetter);
        setTimeout(function() {
          this.deleteLetters(content,index);
        }, 2000);
     }
     else{
         if(index < content.length){
          contentArray=stringToArray(content[index]);
      }
      else{
          index = 0;
          contentArray=stringToArray(content[index]);
      }
     
     }       
   }
   else{
       $( "#content" ).append(contentArray[0]);
    contentArray.shift();
   }
}, 100);
}

function stringToArray(text){
return text.split("");
}
function deleteLetters(content, index){
let deleteLetters = setInterval(function() {
          if($( "#content" ).text() === ""){
        clearInterval(deleteLetters);
      index++;
      this.printLetter(content, [], index);
    }
    else{
        $( "#content" ).text($( "#content" ).text().slice(0, -1));
    }    		
}, 50);	
}



$('.main__li').click(function(){
  let lastClass = $($(this)).attr('class').split(' ').pop();
  let indice = $($(this)).index($(this))
  $('.main__a').removeClass('activado')
  $(`.main__a.${lastClass}`).eq(indice).addClass('activado')
  $('.main__img').addClass('activado')
  if(lastClass != 'rojo'){
    $(`.main__img.${lastClass}`).removeClass('activado')
  }
  else{
    $('.main__img').removeClass('activado')
  }
})