  $(function() {
  
    $("#modal_content").hide();
    $("#overlay").hide();
  
    $("#modal_link").on("click", function(){
      $("#overlay").show();
      $("#modal_content").show();
      });
  
    $("#close_modal, #overlay").on("click", function(){ // made it so that clicking on "close" or background closes picture
      $("#overlay").hide();
      $("#modal_content").hide();
    });
});