// Initialize all div with carousel class
var carousels = bulmaCarousel.attach('.carousel');

// Loop on each carousel initialized
for(var i = 0; i < carousels.length; i++) {
	// Add listener to  event
	carousels[i].on('before:show', state => {
		console.log(state);
	});
}

// Access to bulmaCarousel instance of an element
var element = document.querySelector('#my-element');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
	element.bulmaCarousel.on('before-show', function(state) {
		console.log(state);
	});
}


var searchButton = document.getElementById('searchBtn');
var searchButtonW = document.getElementById('searchBtn-weather');
var inputValue = document.getElementById('input-box');
var inputValueW = document.getElementById('input-box-weather');
var temp = document.getElementById('tempToday');


//Weather Bit API

//var api = "https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=379c8609b48d4cddafc2ced675a19390";
//var city = 


// searchBtn.addEventListener('click',function(){

//   fetch (
//     'https://api.weatherbit.io/v2.0/forecast/daily?city='+inputValue.value+'&key=379c8609b48d4cddafc2ced675a19390'
//     )
//     .then(response => response.json())
//     .then(data => {
//       var nameValue = data['name'];
//       console.log(data);

//       //var tempValue = Math.round(((parseFloat(data['data']['max_temp'])-273.15)*1.8)+32) + '&deg';
//       var tempValue = Math.round((parseFloat(data['data']['1']['temp']*1.8)+32)) + '&deg';

//       temp.innerHTML = tempValue;
    
//         })
// });



// Ticket Master API
// https://app.ticketmaster.com/discovery/v2/events.json?apikey=X9wkE7SABLcE6COZMZEWPLuGebirGPFt


searchBtn.addEventListener('click', eventAPI); //Made the fetch into its own fn

  function eventAPI() {

    var apiKey = "X9wkE7SABLcE6COZMZEWPLuGebirGPFt";
    var zipCode = "";
    var keyword = $(inputValue).val();
    var start = "";
    var city = "";
    var maxResults = "3";
    
    var deleteContainer = document.getElementById("results");
        deleteContainer.remove(); // removes the container with the previous results id=results

    console.log($(inputValue).val()); //gets input value from input text box added the script in html for jquery

      fetch (
        'https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + apiKey + 
        "&keyword=" + "'" + keyword+ "'" + "&postalCode=" + zipCode + "&startDateTime=" + start + "&city=" + city +
        "&size=" + maxResults)

        .then(response => response.json())

        .then(data => {
          var embedded = data['_embedded'];

          embedded.events.forEach((value, index, array) => {
            console.log(index);
            var eventIndexed = embedded.events[index];
            var eventName = eventIndexed.name;

           //creates a container for each result
            var mainContainerEvents = document.getElementById("results-main");
            var subContainerCreate = document.createElement("div");
            subContainerCreate.setAttribute("id", "results");
            mainContainerEvents.appendChild(subContainerCreate);
            var containerEvents = document.getElementById("results");
            var resultContainerCreate = document.createElement("p");
            resultContainerCreate.setAttribute("id", "event-results" + index);
            containerEvents.appendChild(resultContainerCreate);
            var nameTxt = "Event: " + (index + 1) + " "+ eventName + "</br>" + "URL: " + `${eventIndexed.url}`;
            resultContainerCreate.innerHTML = nameTxt; 

          })

         // var newEvent = data['_embedded']['events'][1]['dates']['start']['localDate'];
        //   console.log(newEvent);


        })
  };

  searchBtnW.addEventListener('click', weatherAPI); //Made the fetch into its own fn


  function weatherAPI() {

    var apiKey = "d7c30de99a3b40fb84ca75fd821b8b25";
    var zipCode = $(inputValueW).val(); //zipcode has to be a number... no "" needed
    var city = ""
    var maxResults = "3";
    
    var deleteContainer = document.getElementById("results-w");
        deleteContainer.remove(); // removes the container with the previous results id=results

    console.log($(inputValueW).val()); //gets input value from input text box added the script in html for jquery

      fetch (
        "https://api.weatherbit.io/v2.0/forecast/daily?&key=" + apiKey + 
        "&postal_code=" + zipCode + "&city=" + city)

        .then(response => response.json())

        .then(data => {
         console.log(data)
          var dataArray = data['data'];

          dataArray.forEach((value, index, array) => {
             console.log(index);
             var weatherIndexed = dataArray[index];
             var weathertemp = weatherIndexed.temp;

            //creates a container for each result
             var mainContainerW = document.getElementById("results-main-w");
             var subContainerCreateW = document.createElement("div");
             subContainerCreateW.setAttribute("id", "results-w");
             mainContainerW.appendChild(subContainerCreateW);
             var containerW = document.getElementById("results-w");
             var resultContainerCreateW = document.createElement("p");
             resultContainerCreateW.setAttribute("id", "event-results-w" + index);
             containerW.appendChild(resultContainerCreateW);
             var nameTxt = "Day " + (index + 1) + ": " + `${weatherIndexed.datetime}` + "</br>" + "Temp "  + ": "+ weathertemp + " C";
             resultContainerCreateW.innerHTML = nameTxt; 

          })

        })
  };


































































































































































































// Get the modal, get button to open modal, and get span element variables
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}
  }
// // Initialize all div with carousel class
// var carousels = bulmaCarousel.attach('.carousel', options);

// // Loop on each carousel initialized
// for(var i = 0; i < carousels.length; i++) {
// 	// Add listener to  event
// 	carousels[i].on('before:show', state => {
// 		console.log(state);
// 	});
// }

// // Access to bulmaCarousel instance of an element
// var element = document.querySelector('#my-element');
// if (element && element.bulmaCarousel) {
// 	// bulmaCarousel instance is available as element.bulmaCarousel
// 	element.bulmaCarousel.on('before-show', function(state) {
// 		console.log(state);
// 	});
// }
// }
