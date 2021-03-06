// var marker;
// var markersArray = []
// var infoArray = []
var map
var infowindow
// storing all my ruby code above because i'm a dummy and didn't
// know you could pass an instance variable to JS
var latitudes = document.querySelectorAll("#latitude")
var longitudes = document.querySelectorAll("#longitude")
var names = document.querySelectorAll("#name")
var images = document.querySelectorAll("#js-image")
var ratings = document.querySelectorAll("#result-rating")
var urls = document.querySelectorAll("#url")
var stars = document.querySelectorAll("#stars")
var first_lat = latitudes[0].innerHTML
var first_long = longitudes[0].innerHTML

// var Favorite = function(id, url, name){
//   this.user_id = id;
//   this.url = description;
//   this.completed = completed;
// }

function initialize() {
  var first = new google.maps.LatLng(first_lat, first_long)
  var mapOptions = {
    zoom: 13,
    center: first,
    //this hides map controls from user
    streetViewControl: false,
    panControl: false
  }

  map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions)

  infowindow = new google.maps.InfoWindow()

  //loop through my arrays to crate new markers and the info for the pop-up window
  for(var i = 0; i < latitude.length; i++){
    var locale = new google.maps.LatLng(latitudes[i].innerHTML, longitudes[i].innerHTML)
    var locale_name = names[i].innerHTML
    var contentString = '<a class="box" href='+urls[i].innerHTML+'><h3>' + names[i].innerHTML + '</h3></a>' +
    '<p><img src='+ stars[i].innerHTML +'></p>'+
    '<img src='+ images[i].innerHTML +'>'
    createMarker(locale, locale_name, contentString)
    }

  function createMarker(locale, locale_name, content){
    var r = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: locale,
      title: locale_name
      })

      google.maps.event.addListener(r, 'click', function() {
        infowindow.setContent(content)
        infowindow.open(map, this)
        })
        return r
    }
}

function toggleBounce() {
  if (marker.getAnimation() != null) {
    marker.setAnimation(null)
  }else{
    marker.setAnimation(google.maps.Animation.BOUNCE)
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
