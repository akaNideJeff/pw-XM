/*
NOM :MAI
Prénom :jingye

NOM :xie
Prénom :xiaoyao

*/

function alea(min, max)
{ 
  return Math.floor((Math.random()*(max-min))+min)
}
$(document).ready(function(){
  for(var i = 0;i < 16;i++){
    var $li1 = $('<div id="bloc'+i+'" class="bloc" style="background-image: url(img/0'+i+'.jpg);">'+i+"</div>");
    $("#puzzlearea").append($li1);
  }


  $("#bloc15").removeClass("bloc");
  $("#bloc15").addClass("noimg");
  $("#bloc15").css("background-image","url()");
return;

});

$(document).ready(function(){
  $("#shuffle").click(function(){
   var grp = $('.tuile').children();
   var temp,x;
   for(var i = 0 ;i < 15;i++){
     temp=grp[i];
     x = alea(0,15);
     grp[i]=grp[x];
     grp[x]=temp;

   }

   $(grp).remove();
   $(".tuile").append($(grp));
   $(document).ready(function(){
      $('.bloc').click(function(){
        $("#shuffle").attr("disabled",true);


        var tmp =false;
        var click_num = $(this).index();
        var noimg_num = $(".noimg").index();
      
        var click_x = click_num % 4;
        var click_y = Math.floor(click_num/4);

        var noimg_x = noimg_num % 4;
        var noimg_y = Math.floor(noimg_num/4);
    
        if(click_x == noimg_x){//x
          if(click_y == noimg_y+1||click_y == noimg_y-1){
          tmp = true;
          }
        }else if(click_y == noimg_y){//y
          if(click_x == noimg_x+1||click_x == noimg_x-1){
            tmp = true;
          }
        }

        if(tmp){
        var t = $(this).clone();
        $('.noimg').before(t);
        $(this).before($('.noimg'));
        t.before($(this));
        t.remove();
        }
       
      if($("#bloc0").index()==0&&
      $("#bloc1").index()==1&&
      $("#bloc2").index()==2&&
      $("#bloc3").index()==3&&
      $("#bloc4").index()==4&&
      $("#bloc5").index()==5&&
      $("#bloc6").index()==6&&
      $("#bloc7").index()==7&&
      $("#bloc8").index()==8&&
      $("#bloc9").index()==9&&
      $("#bloc10").index()==10&&
      $("#bloc11").index()==11&&
      $("#bloc12").index()==12&&
      $("#bloc13").index()==13&&
      $("#bloc14").index()==14&&
      $("#bloc15").index()==15
      
      ){
        $('#output').append("puzzle est resoluCliquez sur moi ou 'rafraîchir' pour recommencer");
        $('#shuffle').text("rafraîchir");
        $(".bloc").unbind();
        $("#shuffle").attr("disabled",false);
       
        $("#shuffle").click(function(){
          location.reload(true);
        })
        $("#output").click(function(){
          location.reload(true);
        })
      }
  

      });
    });
  });
});

