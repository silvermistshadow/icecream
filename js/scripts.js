$(document).ready(function(){
  var favFlavors = ["Vanilla", "Strawberry", "Rainbow Sherbert", "Cookies and Cream"]

  favFlavors.forEach(function(favFlavor){
    $("#favIceCream").append(favFlavor + "<br>")

  });

});
