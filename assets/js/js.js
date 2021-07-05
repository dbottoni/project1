
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




















































































































var searchButtonEl = document.getElementById('searchBtn');
searchButtonEl.addEventListener('click', getTickets);

function getTickets () {
  var inputElement = document.getElementById('tickets');
  
 

//   var api =  "https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&keyword=" + inputElement.value + "&apikey=X9wkE7SABLcE6COZMZEWPLuGebirGPFt"
//   fetch (api)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
// }


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
    })
  }  else if (dropDownEl.value === "artist") {
    var api =  "https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&keyword=" + inputElement.value + "&apikey=X9wkE7SABLcE6COZMZEWPLuGebirGPFt"
    fetch (api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
  } else {
    var api =  "https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&keyword=" + inputElement.value + "&apikey=X9wkE7SABLcE6COZMZEWPLuGebirGPFt"
    fetch (api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
  }

}
