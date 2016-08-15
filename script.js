$(document).ready(function () {

  var $members = $('#members');

  $.ajax({
    type: "GET",
    headers: {
      'Access-Control-Allow-Origin': '*'
                 },
    url: "https://enigmatic-gorge-78214.herokuapp.com/users",

    dataType: "json",
    success: function(data){
    $.each(data, function(i, data){
      $members.append("<li><strong>name:</strong> " + data.name + " " + data.email+ "</li>");
    });
  },

    error: function(){
      alert("Error");
    }

  });


});
