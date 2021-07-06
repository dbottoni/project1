
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
    var api =  "https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&city=" + inputElement.value + "&apikey=X9wkE7SABLcE6COZMZEWPLuGebirGPFt"
    fetch (api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      // console.log(data._embedded.attractions);
      var attractionsList = data._embedded.attractions;
      for(var i = 0; i < attractionsList.length; i++) {
        console.log(attractionsList[i]);
        console.log(attractionsList[i].name);
        console.log(attractionsList[i].url);
        console.log(attractionsList[i].images[0].url);
        var resultsBox = document.getElementById("searchResult");
        var innerBox = document.createElement("div");
        var titleEl = document.createElement("h2");
        var ticketLink = document.createElement("a");
        var imageEl = document.createElement("img");
        titleEl.innerText = attractionsList[i].name;
        ticketLink.innerText = "Click here for your tickets!";
        ticketLink.href = attractionsList[i].url;
        imageEl.src = attractionsList[i].images[0].url;
        innerBox.appendChild(titleEl);
        innerBox.appendChild( ticketLink);
        innerBox.appendChild(imageEl);
        resultsBox.appendChild(innerBox);
      }
    })
  }  else if (dropDownEl.value === "artist") {
    var api =  "https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&keyword=" + inputElement.value + "&apikey=X9wkE7SABLcE6COZMZEWPLuGebirGPFt"
    fetch (api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      var resultsBox = document.getElementById("searchResult");
      var innerBox = document.createElement("div");
      var titleEl = document.createElement("h2");
      var ticketLink = document.createElement("a");
      var imageEl = document.createElement("img");
      titleEl.innerText = data._embedded.attractions[0].name;
      ticketLink.innerText = "Click here for upcoming events!";
      ticketLink.href = data._embedded.attractions[0].url;
      imageEl.src = data._embedded.attractions[0].images[0].url;
      innerBox.appendChild(titleEl);
      innerBox.appendChild(ticketLink);
      innerBox.appendChild(imageEl);
      resultsBox.appendChild(innerBox);
    })
  } else {
    var api =  "https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&sizse=1&genre=" + inputElement.value + "&apikey=X9wkE7SABLcE6COZMZEWPLuGebirGPFt"
    fetch (api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
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