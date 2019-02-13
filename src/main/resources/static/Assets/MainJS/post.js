window.onload = function() {
  console.log("linked2?");
  document.getElementById("saveFlight").addEventListener("click", createFlight);
  document.getElementById("getAllFlights").addEventListener("click", getAllInfo);
  document.getElementById("getAVGPrice").addEventListener("click", getAVGInfo);
  document.getElementById("getMinPrice").addEventListener("click", getMinInfo);
  document.getElementById("getMaxPrice").addEventListener("click", getMaxInfo);
  document.getElementById("getMedian").addEventListener("click", getMedianInfo);
  document.getElementById("deleteFlight").addEventListener("click", deleteFlight);
  document.getElementById("updateFlight").addEventListener("click", updateFlight);
  // document.getElementById("getAllCustomer").addEventListener("click", getCustInfo);
  customerData();
};




var URL = "http://localhost:9595/flight";

// //Delete Flight Function // //
function deleteFlight(){
  let deleteCustomer = {
    "id": parseInt(document.getElementById("deleteID").value),
    "firstName": "string",
    "lastName": "string",
    };
    console.log(deleteCustomer);
    let deleteFlight = {
      "flightNumber": parseInt(document.getElementById("deleteFNum").value),
      "destination": "string",
      "departsFrom": "string",
      "ticketPrice": 0,
      "customer": deleteCustomer,
    };
  sendAjaxDelete(URL, console.log("herro"), deleteFlight)
}

// //Update Flight Functiomn// //

function updateFlight(){
  let updateCustomer = {
    "customer": {
        "firstName": "Kelby",
        "id": 2,
        "lastName": "Behounek"
      },
    "id": parseInt(document.getElementById("updateID").value),
    "firstName": document.getElementById("updateFName").value,
    "lastName": document.getElementById("updateLName").value,
};
console.log(updateCustomer)
let updateFlight = {
    "flightNumber": parseInt(document.getElementById("updateFNum").value),
    "destination": document.getElementById("updateArrival").value,
    "departsFrom": document.getElementById("updateDepart").value,
    "ticketPrice": parseInt(document.getElementById("updateTPrice").value),
    "customer": updateCustomer,
  };
console.log(updateFlight);
  sendAjaxPut(URL, console.log(updateFlight), updateFlight)
}

// // Create Flight Function // // 
function createFlight() {
    let newCustomer = {
        "customer": {
            "firstName": "Kelby",
            "id": 2,
            "lastName": "Behounek"
          },
        "id": parseInt(document.getElementById("inputID").value),
        "firstName": document.getElementById("inputFName").value,
        "lastName": document.getElementById("inputLName").value,
    };
    console.log(newCustomer)
    let newFlight = {
        "flightNumber": parseInt(document.getElementById("inputFNum").value),
        "destination": document.getElementById("inputArrival").value,
        "departsFrom": document.getElementById("inputDepart").value,
        "ticketPrice": parseInt(document.getElementById("inputTPrice").value),
        "customer": newCustomer,
      };
    console.log(newFlight);
  makeAjaxPost(URL, printFlightResponse, newFlight);
}

// // Post Function // // 

function makeAjaxPost(url, callback, newFlightObject) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.onreadystatechange = function() {
    if (xhr.readystate===4&&xhr.status===201) {
      callback(this);
    }else {
      //console.log(xhr.response);
    }
  }
  xhr.setRequestHeader("Content-Type", "application/json");
  let flightCreated = JSON.stringify(newFlightObject);
  console.log(JSON.stringify(newFlightObject));
  xhr.send(flightCreated);
}

function printFlightResponse(xhrOBJ) {
  console.log(xhrOBJ.response);
}

// // Put/update Function // // 
function sendAjaxPut(url, callback, data){
  let xhr = new XMLHttpRequest();
  xhr.open("PUT", url);

  xhr.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200){
          callback(this);
      }else {
        console.log(xhr.response);
      }
  }
  xhr.setRequestHeader("content-type", "application/json");
  let jsonData = JSON.stringify(data);

  xhr.send(jsonData);
}

// // Delete Function// // 

function sendAjaxDelete(url, callback, data){
  let xhr = new XMLHttpRequest();
  xhr.open("DELETE", url);

  xhr.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200){
          callback(this);
      }else {
        console.log(xhr.response);
      }
  }
  xhr.setRequestHeader("content-type", "application/json");
  let jsonData = JSON.stringify(data);

  xhr.send(jsonData);
}

function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'block')
     e.style.display = 'none';
  else
     e.style.display = 'block';
}