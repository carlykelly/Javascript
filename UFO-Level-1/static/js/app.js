// from data.js
var mytable = d3.select("table")
var tbody = d3.select("tbody");
var userinput = d3.select("#datetime").node().value;
var button = d3.select("#filter-btn");

 function pickDate(dataTable){
     return dataTable.datetime == userinput;
 }



data.forEach((object) => {
    var row = tbody.append("tr")
    row.append('td').text(object['datetime'])
    row.append('td').text(object['city'])
    row.append('td').text(object['state'])
    row.append('td').text(object['country'])
    row.append('td').text(object['shape'])
    row.append('td').text(object['durationMinutes'])
    row.append('td').text(object['comments'])
})

button.on("click",function(){
    userinput = d3.select("#datetime").node().value
    console.log(userinput);
    console.log("You clicked the button")
    tbody.remove()
    tbody = mytable.append("tbody")
    
    var tableData = data.filter(pickDate)

    tableData.forEach((object) => {
        var row = tbody.append("tr")
        row.append('td').text(object['datetime'])
        row.append('td').text(object['city'])
        row.append('td').text(object['state'])
        row.append('td').text(object['country'])
        row.append('td').text(object['shape'])
        row.append('td').text(object['durationMinutes'])
        row.append('td').text(object['comments'])
    })
    
});




