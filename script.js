$(document).ready(function () {

var $image1 = $('#image1');
var $image2 = $('#image2');
var $image3 = $('#image3');
var $image4 = $('#image4');
var $image5 = $('#image5');

var $name1 = $('#name1');
var $name2 = $('#name2');
var $name3 = $('#name3');
var $name4 = $('#name4');
var $name5 = $('#name5');

var $age1 = $('#age1');
var $age2 = $('#age2');
var $age3 = $('#age3');
var $age4 = $('#age4');
var $age5 = $('#age5');

var $email1 = $('#email1');
var $email2 = $('#email2');
var $email3 = $('#email3');
var $email4 = $('#email4');
var $email5 = $('#email5');

var $quote1 = $('#quote1');
var $quote2 = $('#quote2');
var $quote3 = $('#quote3');
var $quote4 = $('#quote4');
var $quote5 = $('#quote5');

var $imageArr = [$image1, $image2, $image3, $image4, $image5];
var $nameArr = [$name1, $name2, $name3, $name4, $name5];
var $ageArr = [$age1, $age2, $age3, $age4, $age5];
var $emailArr = [$email1, $email2, $email3, $email4, $email5];
var $quoteArr = [$quote1, $quote2, $quote3, $quote4, $quote5];


var $image = $(".image");

  $.ajax({
    type: "GET",
    headers: {
      'Access-Control-Allow-Origin': '*'
        },
    url: "https://enigmatic-gorge-78214.herokuapp.com/users",
    dataType: "json",
    success: function(data){
      for(var i = 0; i < $imageArr.length; i++ ){
        console.log(data[i].name);
        $imageArr[i].html("<img src=" + data[i].image + ">");
        $nameArr[i].html("<strong>Name</strong>: " + data[i].name);
        $ageArr[i].html("<strong>My Age</strong>: " + data[i].age);
        $emailArr[i].html("<strong>Email</strong>: " + data[i].email);
        $quoteArr[i].html("<strong>Quote</strong>: " + "'" + data[i].quote + "'");
      }
  }
  }).fail(function(request, textStatus, errorThrown){
  $spoke.html(request.status + " " + textStatus + " " + errorThrown); //If fail to show error msg

 });

});
