$(document).ready(function(){
  api = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    datayType: 'json'

  })

  api.done(function(data){

    for (var i = 0; i < data['results'].length; i++) {
      var images = "../images/"+ data['results'][i]['cover_art']
      var id =  data['results'][i]['id']
      $("#album_scroll").append('<div class = clickable  id="'+ id+ '"><img src ="'+ images +'"/></div>');

    };



$(document).on("click", ".clickable", function(){
        album_id = $(this).attr('id');
    for(var j=0; j<data['results'].length; j++){

      if(data['results'][j]['id'] == album_id){
        var artist_album = data['results'][j]['artist'] + data['results'][j]['title']
        $("#output").append(artist_album+'<br>');

    }
}
  });




});




});
