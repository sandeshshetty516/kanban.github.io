$(function() {
    $( ".sortable" ).sortable({
      connectWith: ".connectedSortable",
      receive: function( event, ui ) {
        $(this).css({"background-color":"white"});
      }
    }).disableSelection();
    $('.add-button').click(function() {
        var txtNewItem = $('#new_text').val();
        $(".link-div").closest('div.todo').find('ul').append('<div class="item"><li class="card">'+txtNewItem+'</li><button class="remove"><i class= "far fa-trash-alt"></i></button></div>');
    });
    $(".sortable").sortable({
      connectWith: ".connectedSortable"
    }).on("click",".remove", function(e){
      e.preventDefault();
      $(this).parent('div').remove();
    })   
  });