// from data.js
var mytable = d3.select("table")
var tbody = d3.select("tbody");
var userinputDate = d3.select("#datetime").node().value;
var userinputState = d3.select('#state-select').node().value
var userinputCity = d3.select('#city-select').node().value
var userinputCountry = d3.select('#country-dropdown').node().value
var userinputShape = d3.select('#shape-select').node().value
var button = d3.select("#filter-btn");


function buildTable(inputData){
    inputData.forEach((object) => {
        var row = tbody.append("tr")
        Object.values(object).forEach(d => row.append('td').text(d))
    })
}

button.on("click",function(){
    userinputDate = d3.select("#datetime").node().value
    userinputState = d3.select('#state-select').node().value
    userinputCountry = d3.select('#country-dropdown').node().value
    userinputShape = d3.select('#shape-select').node().value
    userinputCity = d3.select('#city-select').node().value

    tbody.html('')
    var tableData = data
    if (userinputDate != ''){
        tableData = tableData.filter(row => row.datetime == userinputDate); 
    }
    if (userinputCity != ''){
        tableData = tableData.filter(row => row.city == userinputCity); 
    }
    if (userinputCountry != ''){
        tableData = tableData.filter(row => row.country == userinputCountry); 
    }
    if (userinputShape != ''){
        tableData = tableData.filter(row => row.shape == userinputShape); 
    }
    if (userinputState != ''){
        tableData = tableData.filter(row => row.state == userinputState); 
    }



    buildTable(tableData)
 

    
});

buildTable(data)


