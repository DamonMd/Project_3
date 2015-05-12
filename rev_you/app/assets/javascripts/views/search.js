// $(document).ready(function(){
//   var button = $("#search")
//   button.on('click', function(evt){
//     evt.preventDefault()
//     var city = $("#city").val()
//     var venue = $("#venue").val()
//     // console.log(venue)
//     $.post('/search', { term: venue })
//   })
//
//   })

 //  var button = document.querySelector("#search")
 //  document.querySelector("#search").addEventListener('click', function(evt){
 //    evt.preventDefault()
 //  var auth = {
 //   //
 //   // Update with your auth tokens.
 //   //
 //   consumerKey: 'w9mS7t6b83s8dSpFvGIMjQ',
 //   consumerSecret: "oi9u4PpzpsYguKSTE3oRcSgxQqw",
 //   accessToken: "ctyZSyNtBfl7mP-n6bMcKy1l6gGMtlBW",
 //   // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
 //   // You wouldn't actually want to expose your access token secret like this in a real application.
 //   accessTokenSecret: "WOZkAVnZ-cvCidli-xlcWi4UtVA",
 //   serviceProvider: {
 //     signatureMethod: "HMAC-SHA1"
 //   }
 // }
 //
 // var terms = 'food'
 // var near = 'San+Francisco'
 //
 // // var near=prompt("Please enter the city","San+Francisco");
 //
 // var accessor = {
 //   consumerSecret: auth.consumerSecret,
 //   tokenSecret: auth.accessTokenSecret
 // }
 //
 // parameters = []
 // parameters.push(['term', terms])
 // parameters.push(['location', near])
 // parameters.push(['callback', 'cb'])
 // parameters.push(['oauth_consumer_key', auth.consumerKey])
 // parameters.push(['oauth_consumer_secret', auth.consumerSecret])
 // parameters.push(['oauth_token', auth.accessToken])
 // parameters.push(['oauth_signature_method', 'HMAC-SHA1'])
 //
 // var message = {
 //   'action': 'http://api.yelp.com/v2/search',
 //   'method': 'GET',
 //   'parameters': parameters
 // }
 //
 // OAuth.setTimestampAndNonce(message)
 // OAuth.SignatureMethod.sign(message, accessor)
 //
 // var parameterMap = OAuth.getParameterMap(message.parameters);
 // parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)
 // console.log(parameterMap)
 //
 // // var bestRestaurant = "Some random restaurant"
 //
 // $.ajax({
 //   'url': message.action,
 //   'data': parameterMap,
 //   'cache': true,
 //   'dataType': 'jsonp',
 //   'jsonpCallback': 'cb',
 //   'success': function(data, textStats, XMLHttpRequest) {
 //     console.log(data)
 //     var output = prettyPrint(data)
 //   }
 // }).done(function(response){
 //   console.log(response)
 // })
 // })
//
// function cats(city, activity){}
