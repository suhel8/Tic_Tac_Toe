var move = 1 ;    //for switching players after each move
var play = true;   

$("#board tr td").click(function(){
   //clicking on empty box => add the mark
   if( $(this).text().trim()=== "" && play === true){
      // X's move
     if ( (move%2) === 1 ){
          $(this).append("X");
     }
      // O's move
      else if ( (move%2) === 0){
            $(this).append("O");
       }
       move++;
      //winner found
       if ( findwinner()!=-1){
         play=false;
         $('body').append("Congrats ... The winner is "+ findwinner());
         console.log("hello");
       }
      //tie match
       else if(move==10){
         $('body').append("   Oops.. Its a tie");
       }
   }
   
   //clicking on already filled box
   else{
     window.alert("Enter correct input");
   }
});

function findwinner(){
  var v1=$('tr:nth-child(1) td:nth-child(1)').text().trim();
  var v2=$('tr:nth-child(1) td:nth-child(2)').text().trim();
  var v3=$('tr:nth-child(1) td:nth-child(3)').text().trim();
  var v4=$('tr:nth-child(2) td:nth-child(1)').text().trim();
  var v5=$('tr:nth-child(2) td:nth-child(2)').text().trim();
  var v6=$('tr:nth-child(2) td:nth-child(3)').text().trim();
  var v7=$('tr:nth-child(3) td:nth-child(1)').text().trim();
  var v8=$('tr:nth-child(3) td:nth-child(2)').text().trim();
  var v9=$('tr:nth-child(3) td:nth-child(3)').text().trim();
   
   //checking win conditions one by one
   
   //first row
  if(v1===v2 && v2===v3){
    if(v1!="") return v1;
  }
  //second row
  if(v4===v5 && v5===v6){
      if(v4!="") return v4;
  }
   //third row
  if(v7===v8 && v8===v9){
      if(v7!="") return v7;
  }

  //  \ diagonal
  if(v1===v5 && v5===v9){
    if(v1==="X") return v1;
    if(v1==="O") return v1;
  }
   
  //  / diagonal 
  if(v3===v5 && v5===v7){
    if(v7==="O") return v7;
    if(v7==="X") return v7;
  }

  //columns

     // first column
  if(v1===v4 && v4===v7){
    if(v4!="") return v4;
  }
   
   //second column
  if(v2===v5 && v5===v8){
    if(v2!="") return v2;
  }
   
   //third column
  if(v3===v6 && v6===v9){
    if(v6!="") return v6;
  }
  return -1;
}
