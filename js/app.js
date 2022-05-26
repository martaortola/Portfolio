$(document).ready(function(){
    let content = "Carles";
let contentNew = ["Marta Ortolá", "front-end developer", "diseñadora gráfica"];
let contentArray = [];
printLetter(contentNew, contentArray, 0);
setInterval(function() {
        $("#parpadeo").fadeToggle();
}, 400);
});
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





 