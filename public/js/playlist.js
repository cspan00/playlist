$(document).ready(function(){
  api = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    datayType: 'json'

  })

  api.done(function(data){
    console.log(data);




    for (var i = 0; i < data['results'].length; i++) {
      var images = "../images/"+ data['results'][i]['cover_art']
      var id =  data['results'][i]['id']
      $("#album_scroll").append('<div class = album_cover id="'+ id+ '"><img src ="'+ images +'"/></div>');
      // console.log(id);
      // console.log(images);
    };

// <div class = album_ id="blah"><img src =""/></div>


});











});
