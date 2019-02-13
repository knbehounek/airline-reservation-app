

var baseURL = "http://localhost:9595/"

function getAllInfo(){
	getInfo(baseURL+"flight/all", printFlights);
}

function getAVGInfo(){
	getInfo(baseURL+"flight/avg", printGet);
}

function getMinInfo(){
	getInfo(baseURL+"flight/min", printGet);
}

function getMaxInfo(){
	getInfo(baseURL+"flight/max", printGet);
}

function getMedianInfo(){
	getInfo(baseURL+"flight/median", printGet);
}

function getCustInfo(){
	getInfo(baseURL+"customer/all", customerData);
}




function getInfo(url, callback){
	let xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	
	xhr.onreadystatechange =function(){
        if(xhr.readyState===4 && xhr.status === 200){
            callback(this);
        }else {
            // console.log(xhr.response);
          }
    }
    xhr.send();
}

function printFlights(objectInfo){
    let JSONResponse = objectInfo.response;
    let object = JSON.parse(JSONResponse);
    console.log(object);
    var dataString = "";
    for(i=0; i<object.length; i++){
       dataString  += `<h5>Flight ${i+1}</h5><strong>Flight Number:</strong> ${object[i].flightNumber} <br> <strong>Destination:</strong> ${object[i].destination} <br> <strong>Departs From:</strong> ${object[i].departsFrom} <br> <strong>Ticket Price:</strong> ${object[i].ticketPrice} <br>`;
        
    }document.getElementById("card").innerHTML = dataString;
}

function printGet(objectInfo){
    let JSONResponse=  objectInfo.response;
    let object = JSON.parse(JSONResponse);
    document.getElementById("card").innerHTML = object.toFixed(2);
}


function customerJson(objectInfo){
    let JSONResponse=  objectInfo.response;
    let object = JSON.parse(JSONResponse);
    // console.log(object[0]);

    for(customer of object){
        addRow(customer.id, customer.firstName, customer.lastName)
    }
    
    function addRow(custID, custFN, custLN){

        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        let cell3 = document.createElement("td");
    
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        

        cell1.innerHTML=custID;
        cell2.innerHTML=custFN;
        cell3.innerHTML=custLN;
    
        document.getElementById("customerTable").appendChild(row);
    
    }
}


function customerData(){
    getInfo(baseURL+"customer/all", customerJson)  
}

	

