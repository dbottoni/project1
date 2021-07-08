
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
var inputValue = document.getElementById('searchBox');
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



  function weatherAPI(latitude, longitude, i) {
    var apiKey = "d7c30de99a3b40fb84ca75fd821b8b25";
    var urlWeatherApi = "https://api.weatherbit.io/v2.0/forecast/daily?&key=";
    
     var lat = latitude;
     var lon = longitude;
     var index = i;

    var daysDisplay = [1]; //max # of days to display
    var units = "I";

    // var url = urlWeatherApi + apiKey + "&lat=" + lat + "&lon=" + lon + 
    // "&days=" + daysDisplay + "&postal_code=" + zipCode + "&units=" + units;
     var url = urlWeatherApi + apiKey + "&lat=" + lat + "&lon=" + lon + 
     "&days=" + daysDisplay + "&units=" + units;
    //var url =  urlWeatherApi + apiKey + "&units=" + units + "&days=" + daysDisplay +
    //"&city=" + cityIn;

    fetch (url)
        .then(function(response) { //=> response.json())
                //console.log(response);
            if (response.statusText !== "No Content") {    
                response.json().then(function(cityIn) {
                //console.log(data);
                    var allData = cityIn;
                    dataForContainers(allData, index);
                    console.log(allData)
                });
            }
            else {
                //messageBox(false);
            }
    })
}

function deleteContainers() {

  var parent = document.querySelector('#main-results-container');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

}

function dataForContainers(data, i) {
     console.log(data)
     var index = 0;
     var eIndex = i;
     console.log(eIndex)
     var dataArray = data.data;

     var resultsBox = document.getElementById("results"+eIndex);
     var innerBox = document.createElement("div");
     $(innerBox).attr({"id": "results-weather"+eIndex, "class": "container"});
     resultsBox.appendChild(innerBox);

         var weatherCity = data.city_name;
         var weatherState = data.state_code;
 
      //main api variables by index
      var weatherIndexed = dataArray[index];
      var weathertemp = weatherIndexed.temp;
      var tempIcon = weatherIndexed.weather.icon;
      var icon = "https://www.weatherbit.io/static/img/icons/" + tempIcon + ".png"
      var altImg = weatherIndexed.weather.description;
      var humidity = weatherIndexed.rh;
      var uvIndex = weatherIndexed.uv;
      var windSpeed = weatherIndexed.wind_spd

      //creates a container for each result
      //looks for div with id results-main-w to append childs
      
          var getContainerW = document.getElementById("results-weather"+eIndex);

          //creates <h3> to show text for current location and appends days from API

          var hContainer = document.createElement("h2");
          getContainerW.appendChild(hContainer);
          hContainer.innerHTML = "Today: " + `${weatherIndexed.datetime}` + "</br>";
      
          //creates <p> with id to append the results from the API
          var pW = document.createElement("p");
          //$(pW).attr({"id": "event-results-w" + index});
          getContainerW.appendChild(pW);
          var nameTxt = "Temp "  + ": "+ weathertemp + " F" + " " + "</br>" + "City: " + `${weatherCity}` + 
          ", " + `${weatherState}` + "</br>" + "Humidity: " + humidity + "%" + "</br>" +
          "</br>" + "Wind Speed: " + windSpeed;
          pW.innerHTML = nameTxt; 

          //uvIndexCheck(uvIndex);

          var pW2 = document.createElement("p");
          //$(pW2).attr({"id": "color"+index, "class":color});
          $(pW2).attr({"id": "color"+index});
          getContainerW.appendChild(pW2);
          var nameTxt2 = "UV Index: " + uvIndex;
          pW2.innerHTML = nameTxt2;

          var imgContainer = document.createElement("img");
          $(imgContainer).attr({"src":icon, "class":"icon", "alt":altImg});
          getContainerW.appendChild(imgContainer);
          //console.log(index)
          //console.log(icon)
        
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


  var dropDownEl = document.getElementById('searchBarParam');
  console.log(dropDownEl.value);
  if (dropDownEl.value === "city") {
    var api =  "https://app.ticketmaster.com/discovery/v2/events.json?&city=" + inputElement.value + "&apikey=X9wkE7SABLcE6COZMZEWPLuGebirGPFt"
    fetch (api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      // console.log(data._embedded.attractions);
      eventInformation(data)

    })
  }  else if (dropDownEl.value === "artist") {
    var api =  "https://app.ticketmaster.com/discovery/v2/events.json?&keyword=" + inputElement.value + "&apikey=X9wkE7SABLcE6COZMZEWPLuGebirGPFt"
    fetch (api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      eventInformation(data)

    })
  } else {
    var api =  "https://app.ticketmaster.com/discovery/v2/events.json?&keyword=" + inputElement.value + "&apikey=X9wkE7SABLcE6COZMZEWPLuGebirGPFt"
    fetch (api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      eventInformation(data)
    })
  }

}

function eventInformation(data) {

  var maxEvents = 3;
  var attractionsList = data._embedded.events;
  var venues = data._embedded.events;

  deleteContainers();


  for(var i = 0; i < maxEvents; i++) {
    // console.log(attractionsList[i]);
    // console.log(attractionsList[i].name);
    // console.log(attractionsList[i].url);
    // console.log(attractionsList[i].images[0].url);
    // console.log(attractionsList[i]._embedded.venues[0].location.latitude);
    // console.log(attractionsList[i]._embedded.venues[0].location.longitude);
    var latitude = attractionsList[i]._embedded.venues[0].location.latitude;
    var longitude = attractionsList[i]._embedded.venues[0].location.longitude;

    var resultsBox = document.getElementById("main-results-container");
    var innerBox = document.createElement("div");
    $(innerBox).attr({"id": "results-div", "class": "container"});
    var eventContainer = document.createElement("div");
    $(eventContainer).attr({"id": "results"+i, "class": "container"});
    var titleEl = document.createElement("h2");
    var ticketLink = document.createElement("a");
    var imageEl = document.createElement("img");
    titleEl.innerText = attractionsList[i].name;
    ticketLink.innerText = "Click here for your tickets!";
    ticketLink.href = attractionsList[i].url;
    imageEl.src = attractionsList[i].images[0].url;
    eventContainer.appendChild(titleEl);
    eventContainer.appendChild( ticketLink);
    eventContainer.appendChild(imageEl);
    innerBox.appendChild(eventContainer);
    resultsBox.appendChild(innerBox);
    weatherAPI(latitude, longitude, i)

  }
}




//   var api =  "https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&keyword=" + inputElement.value + "&apikey=X9wkE7SABLcE6COZMZEWPLuGebirGPFt"
//   fetch (api)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
// }