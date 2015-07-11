    // function showLang() {
    //   document.getElementById('langs').style.display = "inline-block";
    // }
    //
    // function hideLang() {
    //   document.getElementById('langs').style.display = "none";
    // }
    //
    // function showFrame() {
    //
    //   var frame = document.getElementById('frameBerries');
    //
    //   frame.style.display = "inline-block";
    //
    // }
    //
    // function hideFrame() {
    //   document.getElementById('frameBerries').style.display = "none";
    // }

  //   function fadeOut(id,val){
  //     if(isNaN(val)){ val = 9;}
  //     document.getElementById(id).style.opacity='0.'+val;
  //     //For IE
  //     document.getElementById(id).style.filter='alpha(opacity='+val+'0)';
  //     if(val>0){
  //       val–;
  //       setTimeout('fadeOut("'+id+'",'+val+')',90);
  //     }else{return;}
  //  }
   //
  //  function fadeIn(id,val){
  //  // ID of the element to fade, Fade value[min value is 0]
  //    if(isNaN(val)){ val = 0;}
  //    document.getElementById(id).style.opacity='0.'+val;
  //    //For IE
  //    document.getElementById(id).style.filter='alpha(opacity='+val+'0)';
  //    if(val<9){
  //      val++;
  //      setTimeout('fadeIn("'+id+'",'+val+')',90);
  //    }else{return;}
  //  }

$(document).ready(function(){
  // $(".langs").mouseover(function(){
  //   $("#langs").fadeIn(1000);
  // });
  //
  // $(".langs").mouseleave(function(){
  //   $("#langs").fadeOut(100);
  // });

  // $(".frameBerries").mouseover(function(){
  //   $('#frameBerries').fadeIn(1000);
  // });
  //
  // $(".frameBerries").mouseleave(function(){
  //   $('#frameBerries').fadeOut(100);
  // })

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('#frameBerries').fadeIn(1000);
    } else {
      $('#frameBerries').fadeOut(100);
    }

    if (y > 400) {
      $('#langs').fadeIn(1000);
    } else {
      $('#langs').fadeOut(100);
    }

    if (y > 100) {
      $('.scroller').fadeOut(100);
    }
  });
})
