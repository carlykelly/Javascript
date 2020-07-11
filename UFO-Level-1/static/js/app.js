// from data.js
var mytable = d3.select("table")
var tbody = d3.select("tbody");
var userinputDate = d3.select("#datetime").node().value;
var button = d3.select("#filter-btn");


function buildTable(inputData){
    inputData.forEach((object) => {
        var row = tbody.append("tr")
        Object.values(object).forEach(d => row.append('td').text(d))
    })
}

button.on("click",function(){
    userinputDate = d3.select("#datetime").node().value

    tbody.html('')
    var tableData = data
    if (userinputDate != ''){
        tableData = tableData.filter(row => row.datetime == userinputDate); 
    }


    buildTable(tableData)
 

});

buildTable(data)


