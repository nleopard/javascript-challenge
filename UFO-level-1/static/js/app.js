// from data.js
var tableData = data;


// assign variables
var tbody = d3.select("tbody")
var button = d3.select("#filter-btn");
var input1 = d3.select("#datetime")
var input2 = d3.select("#city")
var input3 = d3.select("#state")
var input4 = d3.select("#country")
var input5 = d3.select("#shape")
var resetButton = d3.select("#reset-btn")
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// YOUR CODE HERE!
var populate = (x) => {

    x.forEach(y => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(y[column]))
    });
}


populate(data);


// Create event handlers 
button.on("click", () => {

    d3.event.preventDefault();
    var inputDate = input1.property("value").trim();
    var inputCity = input2.property("value").toLowerCase().trim();
    var inputState = input3.property("value").toLowerCase().trim();
    var inputCountry = input4.property("value").toLowerCase().trim();
    var inputShape = input5.property("value").toLowerCase().trim();
    //filter data
    var filterDate = data.filter(data => data.datetime === inputDate);
    console.log(filterDate)
    var filterCity = data.filter(data => data.city === inputCity);
    console.log(filterCity)
    var filterState = data.filter(data => data.state === inputState);
    console.log(filterState)
    var filterCountry = data.filter(data => data.country === inputCountry);
    console.log(filterCountry)
    var filterShape = data.filter(data => data.shape === inputShape);
    console.log(filterShape)
    var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity && data.state === inputState &&
        data.country === inputCountry && data.shape === inputShape);
    console.log(filterData)

    //clear table data
    tbody.html("");

    let response = {
        filterData,
        filterCity,
        filterState,
        filterCountry,
        filterShape,
        filterDate
    }

    if (response.filterData.length !== 0) {
        populate(filterData);
    } else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0 || response.filterState.length !== 0 || response.filterCountry.length !== 0 || response.filterShape.length !== 0))) {
        populate(filterCity) || populate(filterDate) || populate(filterState) || populate(filterCountry) || populate(filterShape);

    } else {
        tbody.append("tr").append("td").text("No results.");
    }
})

resetButton.on("click", () => {

    tbody.html("");
    populate(data)
    console.log("Table reset")

})