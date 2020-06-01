// from data.js
var tableData = data;

// Use D3 to select the table body (tbody) tag and assign to a variable
var tbody = d3.select("tbody");

//Iterate trhough the data for each row and column
tableData.forEach(function(tableRecord) {
    // console.log("Table Record");
    // console.log(tableRecord);       //Print results to console for debugging
    var row = tbody.append("tr");   //Append rows to HTML table

    Object.entries(tableRecord).forEach(function([key, value]) {
        // console.log("Row Values");
        // console.log(key, value);        //Print results to console for debugging
        var cell = row.append("td");    //Append columns to HTML table
        cell.text(value);               //Write the values in the table
    });
});

// Use D3 to select the filter button id (#filter-btn) and assign to a variable
var button = d3.select("#filter-btn");

// Use D3 to select the form tag (form) and assign to a variable
var form = d3.select("form");function runEnter() {                 //Run table display function
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Clear the existing output
    tbody.html("");

    //Use D3 to select the inputted date
    var inputValue = d3.select("#datetime").property("value");
    console.log("Entered Date");
    console.log(inputValue);        //Print results to console for debugging
    
    //Filter the data based on the entered date value and assign it to a variable
    var filteredData = tableData.filter(record => record.datetime === inputValue);
    console.log("Filtered Data");
    console.log(filteredData);      //Print results to console for debugging

    filteredData.forEach(function(filteredRecord) {
        // Append one table row `tr` for each UFO Sighting object
        var row = tbody.append("tr");

        Object.entries(filteredRecord).forEach(function([key, value]) {
            console.log("Row Values");
            console.log(key, value);        //Print results to console for debugging
            var cell = row.append("td");    //Append columns to HTML table
            cell.text(value);               //Write the values in the table
        });
    });
}

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);





button.on("submit", function() {                 //Check for submit events
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Clear the existing output
    tbody.html("");

    //Use D3 to select the inputted date
    var inputValue = d3.select("#datetime").property("value");
    console.log("Entered Date");
    console.log(inputValue);        //Print results to console for debugging
    
    //Filter the data based on the entered date value and assign it to a variable
    var filteredData = tableData.filter(record => record.datetime === inputValue);
    console.log("Filtered Data");
    console.log(filteredData);      //Print results to console for debugging

    filteredData.forEach(function(filteredRecord) {
        // Append one table row `tr` for each UFO Sighting object
        var row = tbody.append("tr");

        Object.entries(filteredRecord).forEach(function([key, value]) {
            console.log("Row Values");
            console.log(key, value);        //Print results to console for debugging
            var cell = row.append("td");    //Append columns to HTML table
            cell.text(value);               //Write the values in the table
        });
    });
});