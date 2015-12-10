$(document).ready(function(){
  api = $.ajax({
    url:"https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "json"
  })

api.done(function(data){
  console.log(data)


$(document).ready(function(){
  var i = Math.floor(Math.random() * data['results'].length)
  var j = Math.floor(Math.random() * data['results'].length)
  var k = Math.floor(Math.random() * data['results'].length)
  var image1 = "images/"+ data['results'][i]['cover_art'];
  var image2 = "images/"+ data['results'][j]['cover_art'];
  var image3 = "images/"+ data['results'][k]['cover_art'];
 $('#album_covers').append('<img id="album_art" src = \''+ image1 + '\'/>')
 $('#album_covers').append('<img id="album_art" src = \''+ image2 + '\'/>')
 $('#album_covers').append('<img id="album_art" src = \''+ image3 + '\'/>')
});
  return data;
});
});
