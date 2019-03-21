let nextDestination = ""
console.log("hi")

$("#journey").click(function () {
   console.log(1)
   // onclick="doThisFunction();thenDoTheOtherFunction();"
   fetch('https://api.foursquare.com/v2/venues/explore?QR2DHCKWFADGCEVTE12AHCNWSP4Q2UI330HPJ2VB14X05ZC0&client_secret=W0VM2ZNYLWDACZN3QIJDQLGVO2GDBRRFHZDLCMEWE13QI2L5&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee')
   .then(function(response) {
       // Code for handling API response
       console.log(response)
   })
   .catch(function(error) {
       console.log(error)
       // Code for handling errors
   });
   const destination = $("#name").val()
   // $.ajax({
   //     // url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/autocomplete?number=10&query=${hungry}`,
   //     headers: {
   //     //     "X-Mashape-Key": "vkFQthDatEmsh8AsjpHKpCzfMZHBp1TRyXJjsn4PB9CNFJUpBj",

   //     //     "Content-Type": "application/x-www-form-urlencoded"
   //     // },
   //     success: function (data) {
   //         console.log(data)
   //         $("#destination").html(data[1].title);$("#getRecipe")
   //         console.log(data[1].id)
   //         firstFood = data[1].id;
   //         // const pic = data.
   //         // $("#pic").attr("src", pic)
   //         getRecipe();
   //     },
   //     error: function (request, error) {
   //         console.log(error)
   //     }
   // })
})

function getVenue() {
   console.log('hi');
   console.log(firstVenue)
           const venues = $("#listOfVenues").val()
           // $.ajax({
           //     url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${firstFood}/summary`,
           //     headers: {
           //         "X-Mashape-Key": "vkFQthDatEmsh8AsjpHKpCzfMZHBp1TRyXJjsn4PB9CNFJUpBj",

           //         "Content-Type": "application/json"
           //     },
           //     success: function (data) {
           //         console.log(data)
           //         $("#venues").html(data.summary)
           //         // const pic = data.
           //         // $("#pic").attr("src", pic)
           //     },
           //     error: function (request, error) {
           //         console.log(error)
           //     }
           // })
           // on.(click)="hungry();getFood();"

}


