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
//var searchButtonW = document.getElementById('searchBtn-weather');
var inputValue = document.getElementById('input-box');
//var inputValueW = document.getElementById('input-box-weather');
//var temp = document.getElementById('tempToday');


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
    var optionSelected = $('#search-option').find(":selected").val();
    console.log(optionSelected)
    var zipCode = "";
    var keyword ="";
    var city = "";
    var fetchOption = "";
    var link = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=';
    var apiKey = "4vUK4qgP7tGkzcyXknJjhZqBFIsmRG4D";
    var maxResults = "3";

    if (optionSelected == "zipcode") {
      zipCode = $(inputValue).val();
      keyword = "";     
      city = "";
      fetchOption =  link + apiKey + "&size=" + maxResults + "&postalCode=" + zipCode + "&city=" + city +
      "&keyword=" + keyword;
    }
    else if (optionSelected == "keyword") {
      zipCode = "";
      keyword = "'" + $(inputValue).val() + "'";     
      city = "";
      fetchOption = link + apiKey + "&size=" + maxResults + "&postalCode=" + zipCode + "&city=" + city +
      "&keyword=" + keyword;
    } 
    else if (optionSelected == "city") {
      zipCode = "";
      keyword = "";     
      city = $(inputValue).val();
      fetchOption = link + apiKey + "&size=" + maxResults + "&postalCode=" + zipCode + "&city=" + city +
      "&keyword=" + keyword;
    }
   
    var deleteContainer = document.getElementById("results");
        deleteContainer.remove(); // removes the container with the previous results id=results

    console.log($(inputValue).val()); //gets input value from input text box added the script in html for jquery
    console.log(optionSelected)
    console.log(fetchOption)
      fetch (fetchOption)
        //console.log('https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + apiKey + "&size=" + maxResults + "&postalCode=" + zipCode + "&city=" + city +
        //"&keyword=" + keyword)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          var embedded = data['_embedded'];
          console.log(embedded)
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

        })
  };

  searchBtnW.addEventListener('click', getLocation); //Made the fetch into its own fn

  function weatherAPI(lat, lon) {
    var apiKey = "d7c30de99a3b40fb84ca75fd821b8b25";
    var urlWeatherApi = "https://api.weatherbit.io/v2.0/forecast/daily?&key=";
    var zipCode = "";//$(inputValueW).val(); //zipcode has to be a number... no "" needed

    //var city = ""
    var lat;
    var lon;
    var daysDisplay = [3];
    var units = "I";

    url = urlWeatherApi + apiKey + "&lat=" + lat + "&lon=" + lon + 
    "&days=" + daysDisplay + "&postal_code=" + zipCode + "&units=" + units;
    console.log(url)
    //var maxResults = "3";
    
    var deleteContainer = document.getElementById("results-w");
        deleteContainer.remove(); // removes the container with the previous results id=results

    //console.log($(inputValueW).val()); //gets input value from input text box added the script in html for jquery

      fetch (url)
         
        .then(response => response.json())

        .then(data => {
         console.log(data)
          var dataArray = data['data'];
          var weatherCity = data.city_name;

          dataArray.forEach((value, index, array) => {
             console.log(index);
             var weatherIndexed = dataArray[index];
             var weathertemp = weatherIndexed.temp;
             var tempIcon = weatherIndexed.weather.icon;
             var icon = "https://www.weatherbit.io/static/img/icons/" + tempIcon+ ".png"
            console.log(icon)
            //creates a container for each result
             var mainContainerW = document.getElementById("results-main-w");
             var subContainerCreateW = document.createElement("div");
             subContainerCreateW.setAttribute("id", "results-w" + index);
             mainContainerW.appendChild(subContainerCreateW);
             var containerW = document.getElementById("results-w" + index);
             var hContainer = document.createElement("h3");
             containerW.appendChild(hContainer);
             hContainer.innerHTML = "Weather for current location Day " + (index + 1) + ": " + `${weatherIndexed.datetime}` + "</br>";
             var resultContainerCreateW = document.createElement("p");
             resultContainerCreateW.setAttribute("id", "event-results-w" + index);
             containerW.appendChild(resultContainerCreateW);
             var nameTxt = "Temp "  + ": "+ weathertemp + " F" + " " + "</br>" + "City: " + `${weatherCity}` + 
             " ";
             resultContainerCreateW.innerHTML = nameTxt; 
          })

        })
  };

  function getLocation () {
    navigator.geolocation.getCurrentPosition((position) => {
      weatherAPI(position.coords.latitude, position.coords.longitude);
    });

  }

































































































































































































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
