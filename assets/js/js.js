
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



<<<<<<< HEAD
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
    var deleteContainer = document.getElementById("results-w-event");
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
          var mainContainerEvents = document.getElementById("results-main");
          var subContainerCreate = document.createElement("div");
          subContainerCreate.setAttribute("id", "results");
          mainContainerEvents.appendChild(subContainerCreate);

          
          embedded.events.forEach((value, index, array) => {
            console.log("event index: " + index);
            var eventIndexed = embedded.events[index];
            var eventName = eventIndexed.name;

           //creates a container for each result
            var containerEvents = document.getElementById("results");
            var resultContainerCreate = document.createElement("p");
            resultContainerCreate.setAttribute("id", "event-results" + index);
            containerEvents.appendChild(resultContainerCreate);
            var nameTxt = "Event: " + (index + 1) + " "+ eventName + "</br>" + "URL: " + `${eventIndexed.url}`;
            resultContainerCreate.innerHTML = nameTxt; 

            var lat = eventIndexed[["_embedded"]].venues[0].location.latitude;
            var lon = eventIndexed[["_embedded"]].venues[0].location.longitude;
            //eventIndexed._embedded.venues[0].location.latitute
            debugger;
            var eventIndex = index;
            weatherAPI(lat,lon,eventIndex);
          })

        })
  };

  searchBtnW.addEventListener('click', getLocation); //Made the fetch into its own fn

  function weatherAPI(latitude, longitude, eventIndex) {
    var apiKey = "d7c30de99a3b40fb84ca75fd821b8b25";
    var urlWeatherApi = "https://api.weatherbit.io/v2.0/forecast/daily?&key=";
    var zipCode = "";//$(inputValueW).val(); //zipcode has to be a number... no "" needed

    var lat = latitude;
    var lon = longitude;
    var eventIndexW = eventIndex;
    console.log("event index in weather: " + eventIndexW)
    //var city = ""

    var daysDisplay = [3]; //max # of days to display
    var units = "I";

    var url = urlWeatherApi + apiKey + "&lat=" + lat + "&lon=" + lon + 
    "&days=" + daysDisplay + "&postal_code=" + zipCode + "&units=" + units;

    var mainContainerW = document.getElementById("results-main-w");
    var eventContainer = document.createElement("div");
    $(eventContainer).attr({"id": "results-w-event" + eventIndexW, "class": "temp-div-box"});
    mainContainerW.appendChild(eventContainer);

      fetch (url)
        .then(response => response.json())

        .then(data => {
         console.log(data.city_name)
          var dataArray = data['data'];
          var weatherCity = data.city_name;
          
          dataArray.forEach((value, index, array) => {
            //main api variables by index
             var weatherIndexed = dataArray[index];
             var weathertemp = weatherIndexed.temp;
             var tempIcon = weatherIndexed.weather.icon;
             var icon = "https://www.weatherbit.io/static/img/icons/" + tempIcon + ".png"
             var altImg = weatherIndexed.weather.description;
            console.log("weather index " + index)
            console.log("city weather " + data.city_name)
            //creates a container for each result
            //looks for div with id results-main-w to append childs

              var mainContainerW = document.getElementById("results-w-event" + eventIndexW);
              console.log("weather event index " + eventIndexW)
               //creates div for each day (currently set at 3) adds attribute id and appends
               var subContainerCreateW = document.createElement("div");
               $(subContainerCreateW).attr({"id": "results-w-day" + index, "class": "temp-div-box"});
               mainContainerW.appendChild(subContainerCreateW);
               
               //creates <h3> to show text for current location and appends days from API
               //var containerW = document.getElementById("results-w" + eventIndexW);
               var hContainer = document.createElement("h3");
               subContainerCreateW.appendChild(hContainer);
               hContainer.innerHTML = "Weather for current location Day " + (index + 1) + ": " + `${weatherIndexed.datetime}` + "</br>";
               
               //creates <p> with id to append the results from the API
               var pW = document.createElement("p");
               //$(pW).attr({"id": "event-results-w" + index});
               subContainerCreateW.appendChild(pW);
               var nameTxt = "Temp "  + ": "+ weathertemp + " F" + " " + "</br>" + "City: " + `${weatherCity}` + 
               " ";
               pW.innerHTML = nameTxt; 
  
               //creates div for each image/day (currently set at 3) adds attribute id and appends
               //var imgContainerW = document.getElementById("results2-w" + index);
              //  var imgCreateW = document.createElement("div");
              //  $(imgCreateW).attr({"id": "img-w" + index, "class": "div-icon"});
              //  subContainerCreateW.appendChild(imgCreateW);
              
               //creates <img> to show current weather icon
              //  var imgW = document.getElementById("img-w" + eventIndexW);
               var imgContainer = document.createElement("img");
               $(imgContainer).attr({"src":icon, "class":"icon", "alt":altImg});
               subContainerCreateW.appendChild(imgContainer);
               console.log(index)
               console.log(icon)
              

          })
        })
  };

  function getLocation () {
    navigator.geolocation.getCurrentPosition((position) => {
      weatherAPI(position.coords.latitude, position.coords.longitude);
    });

  }




=======
>>>>>>> 29305f33b3290d5c4190a3ab336d0d77b10aae3c





























































































































































































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


var nameInput = document.querySelector('#contactName');
var emailInput = document.querySelector('#email');
var messageInpt = document.querySelector('#message');
var userNameSpan = document.querySelector('#user-name');
var msgDiv = document.querySelector("#msg");



function renderUserInfo(){

  var name = localStorage.getItem('name');
  var email = localStorage.getItem('email');
  var message = localStorage.getItem('message');

  if (name === null || email === null || message === null){
    return;
  }



}

renderUserInfo();

function displayErrorMessage (type, message){
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

var submitModalBtn = document.querySelector('#modalSubmit')

submitModalBtn.addEventListener('click', function(event) { 
  event.preventDefault();

  var name = document.querySelector('#contactName').value;
  var email = document.querySelector('#email').value;
  var message = document.querySelector('#message').value;
  

  if (name === ''){
    displayErrorMessage('error', 'Name cannot be blank');
  } else if (email === ''){
    displayErrorMessage('error', 'Email cannot be blank');
  } else if (message === ''){
    displayErrorMessage('error', "Please enter a message");
  } else {
    displayErrorMessage('success', 'Thank you, your message has been received. A customer support team member will contact you within 48 hours');

      // localStorage.setItem('name', name);
      // localStorage.setItem('email', email);

      renderUserInfo();
  }
 });






















































































































var searchButtonEl = document.getElementById('searchBtn');
searchButtonEl.addEventListener('click', getTickets);

function getTickets () {
  var inputElement = document.getElementById('tickets');
  // console.log(inputElement.value);

  var api =  "https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&keyword=" + inputElement.value + "&apikey=X9wkE7SABLcE6COZMZEWPLuGebirGPFt"
  fetch (api)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
}


var dropDownEl = document.getElementById('searchBarParam');
dropDownEl.addEventListener('change', workingDropDown);

function workingDropDown () {
  if (dropDownEl.value === "city") {
    console.log("city chosen");
  } else if (dropDownEl.value === "artist") {
    console.log("artist chosen");
  } else {
    console.log("upcoming chosen");
  }
}



