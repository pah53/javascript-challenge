// from data.js
var tableData = data;

// getting a reference to the tbody tag
var tbody = d3.select("tbody");

//Looping through data.js and printing to console
tableData.forEach(function(alienReports) {
    console.log(alienReports);
});

//Adding a new row for each datapoint
tableData.forEach(function(alienReports) {
    console.log(alienReports);
    var row = tbody.append("tr");
});

// // Using `Object.entries` to console.log each alien sighting
tableData.forEach(function(alienReports) {
    console.log(alienReports);
    var row = tbody.append("tr");  
    Object.entries(alienReports).forEach(function([key, value]) {
      console.log(key, value);
    });
});

// // Using d3 to append 1 cell per alien sighting data entry
tableData.forEach(function(alienReports) {
    console.log(alienReports);
    var row = tbody.append("tr");
    Object.entries(alienReports).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
});

// Adding filtering to search box

// Getting a reference to the input element 
var inputField = d3.select(".form-control");

// Printing entered text to console
inputField.on("change", function() {
    var text = d3.event.target.value;
    console.log(text);
});

// Storing button selection to variable button
var button = d3.select(".btn-default");

button.on("click", function() {

    // Get the value property of the input field
    var inputValue = inputField.property("value");

    console.log(inputValue);
    console.log(tableData);

    data.forEach((dataRow) => {
        // Append a row to the table body
        var row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
          var cell = row.append("td");
            cell.text(datetime);
            cell.text(city);
            cell.text(state);
            cell.text(country);
            cell.text(shape);
            cell.text(durationMinutes);
            cell.text(comments);
          }
        );
      });
});
