var searchEvent = document.querySelector('#tickets').value;

var eventLocation = searchEvent;

// var typeOfEvent = searchEvent;

// var findBand = searchEvent;


function getTickets () {
     fetch(
        'https://app.ticketmaster.com/discovery/v2/events.json?size=1&city=' + eventLocation +
        'apikey=X9wkE7SABLcE6COZMZEWPLuGebi'
    )
        .then(function(response) {
            return response.json();
        })
        .then(function(response){
            console.log(response);

        })
}

// function getTickets() {
//     $.ajax({
//     type:"GET",
//     url:"https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=X9wkE7SABLcE6COZMZEWPLuGebirGPFt",
//     async:true,
//     dataType: "json",
//     success: function(json) {
//                 console.log(json);
//                 // Parse the response.
//                 // Do other things.
               
//              },
//     error: function(xhr, status, err) {
//                 // This time, we do not end up here!
//              }
//   });
// }
