
var geoLibMsg = document.getElementById('geolib');
if (geolib){
    geoLibMsg.innerHTML = "geolib is ready!";
}
else{
    geoLibMsg.innerHTML = "geolib is NOT ready!";
}

// utility functions
var print = function(msg, id){
  id = id || "results";
    var results = document.getElementById(id);
    results.innerHTML = msg;
};

var clickButton = function(id, func){
    document.getElementById(id).addEventListener('click', func)
}

//utility functions end

// write your geolib code here
findCentre.addEventListener('click',function(){
    var findit = geolib.getCenter(areas);
    //console.log(findit);
    print(findit.latitude + ',' + findit.longitude);
});


var areas =[  {
      "id": 1,
      "description": "15 AG Visser Street",
      "latitude": "-33.8944396",
      "longitude": "18.589829899999998"
  },
  {
      "id": 2,
      "description": "UCT Gsb",
      "latitude": "-33.9095955",
      "longitude": "18.4181334"
  },
  {
      "id": 3,
      "description": "codeX",
      "latitude": "-33.9069389",
      "longitude": "18.4189952"
  },
  {
      "id": 4,
      "description": "Cape Town Comedy Club",
      "latitude": "-33.9071812433221",
      "longitude": "18.418371068948744"
  },
  {
      "id": 5,
      "description": "Steers V&A",
      "latitude": "-33.9053469",
      "longitude": "18.4198553"
  },
  {
      "id": 6,
      "description": "KFC V&A",
      "latitude": "-33.9051871",
      "longitude": "18.4200329"
  },
  {
      "id": 17,
      "description": "Philippi Village",
      "latitude": "-34.0011087",
      "longitude": "18.5585684"
  },
  {
      "id": 18,
      "description": "Athlone Library",
      "latitude": "-33.960746",
      "longitude": "18.502602"
  },
  {
      "id": 19,
      "description": "Khayelitsha Hospital",
      "latitude": "-34.0505559",
      "longitude": "18.6725241"
  },
  {
      "id": 20,
      "description": "Guga S'thebe",
      "latitude": "-33.9441175",
      "longitude": "18.5222143"
  },
  {
      "id": 22,
      "description": "london",
      "latitude": "-33.9069058",
      "longitude": "18.4183923"
  },
  {
      "id": 23,
      "description": "Manchester England",
      "latitude": "53.4723679",
      "longitude": "-2.363676"
  },
  {
      "id": 24,
      "description": "Iquitos, Peru - Amazon Rainforest",
      "latitude": "-3.75",
      "longitude": "-73.28"
  },
  {
      "id": 26,
      "description": "Zanzibar Harbour",
      "latitude": "-6.1545341",
      "longitude": "39.1904211"
  },
  {
      "id": 28,
      "description": "paris",
      "latitude": "48.886911",
      "longitude": "2.348383"
  },
  {
      "id": 29,
      "description": "Swaziland",
      "latitude": "-26.797996",
      "longitude": "31.028060"
  },
  {
      "id": 31,
      "description": "Washington D.C.",
      "latitude": "-77.1549966",
      "longitude": "38.8995319"
  },
  {
      "id": 32,
      "description": "Mexico City",
      "latitude": "-99.131992",
      "longitude": "19.433585"
  },
  {
      "id": 33,
      "description": "Rio de Janeiro",
      "latitude": "-22.9103552",
      "longitude": "-43.7285314"
  },
  {
      "id": 34,
      "description": "durban",
      "latitude": "-29.816994",
      "longitude": "30.903916"
  },
  {
      "id": 35,
      "description": "Egypt Pyramids Tours ",
      "latitude": "-33.9069526",
      "longitude": "18.4189372"
  },
  {
      "id": 39,
      "description": "Philippi ,Cape Town",
      "latitude": "-34.008427",
      "longitude": "18.599282"
  }];

  var Distance = document.getElementById("dist");

  Distance.addEventListener('click',function(){
    var getit = geolib.orderByDistance({"latitude": -34.008427, "longitude": 18.599282}, areas);
    print(getit.latitude + ',' + getit.longitude);
    for (var i = 0; i < getit.length; i++) {
      alert(getit[i].latitude + " ," + getit[i].longitude);
       print(getit[i].latitude + " ," + getit[i].longitude);
    }
  });
print("<strong>let's get going!</strong>");
clickButton("clickMe", function(){
    print("You clicked me!");
});

//geolib.getDistance()
