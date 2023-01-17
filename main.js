var move = 1 ;
var play = true;

$("#board tr td").click(function(){
   if( $(this).text().trim()=== "" && play === true){
     if ( (move%2) === 1 ){
          $(this).append("X");
     }
      else if ( (move%2) === 0){
            $(this).append("O");
       }
       move++;
       if ( findwinner()!=-1 && findwinner()!=""){
         play=false;
         document.getElementById("board").value=document.getElementById("board").defaultValue;
         $('body').append("Congrats ... The winner is "+ findwinner());
         console.log("hello");
       }
       else if(move==10){
         $('body').append("   Oops.. Its a tie");
       }
   }
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
  if(v1===v2 && v2===v3){
    if(v1!="") return v1;
  }
  if(v4===v5 && v5===v6){
      if(v4!="") return v4;
  }
  if(v7===v8 && v8===v9){
      if(v7!="") return v7;
  }

  //diag
  if(v1===v5 && v5===v9){
    if(v1==="X") return v1;
    if(v1==="O") return v1;
  }
  if(v3===v5 && v5===v7){
    if(v7==="O") return v7;
    if(v7==="X") return v7;
  }

  //columns

  if(v1===v4 && v4===v7){
    if(v4!="") return v4;
  }
  if(v2===v5 && v5===v8){
    if(v2!="") return v2;
  }
  if(v3===v6 && v6===v9){
    if(v6!="") return v6;
  }
  return -1;
}
