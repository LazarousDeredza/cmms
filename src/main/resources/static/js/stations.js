function getAllStations() {
    console.log("Getting all stations");

    $.ajax({
        url: "/station/get/all",
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var tableBody = $("#allDataTable"); // Get the table body element

            for (var i = 0; i < data.length; i++) {
                var station = data[i];

                // Create a new row
                var row = $("<tr>");

                // Append the data to the row
                row.append($("<td>").text(station.id));
                row.append($("<td>").text(station.name));
                row.append($("<td>").text(station.latitude));
                row.append($("<td>").text(station.longitude));
                row.append($("<td>").text(station.serviceCentre));
                row.append($("<td>").text(station.catchmentArea));
                row.append($("<td>").text(station.status));
                row.append($("<td>").text(station.hoursLostToday));
                row.append($("<td>").text(station.hoursLostPrev));

                // Create an action column with a button
                // Create an action column
                var actionColumn = $("<td>").html(`
      <button class="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="text-muted sr-only">Action</span>
      </button>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">Edit</a>
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">Delete</a>
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">View More Details</a>
      </div>
    `);

                row.append(actionColumn);
                // Append the row to the table body
                tableBody.append(row);
            }


            var openStationTable = $("#openDataTable"); // Get the table body element

            for (var i = 0; i < data.length; i++) {
                var station = data[i];

                if (station.status === "OPEN") {

                    // Create a new row
                    var row = $("<tr>");

                    // Append the data to the row
                    row.append($("<td>").text(station.id));
                    row.append($("<td>").text(station.name));
                    row.append($("<td>").text(station.latitude));
                    row.append($("<td>").text(station.longitude));
                    row.append($("<td>").text(station.serviceCentre));
                    row.append($("<td>").text(station.catchmentArea));
                    row.append($("<td>").text(station.status));
                    row.append($("<td>").text(station.hoursLostToday));
                    row.append($("<td>").text(station.hoursLostPrev));

                    // Create an action column with a button
                    // Create an action column
                    var actionColumn = $("<td>").html(`
      <button class="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="text-muted sr-only">Action</span>
      </button>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">Edit</a>
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">Delete</a>
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">View More Details</a>
      </div>
    `);

                    row.append(actionColumn);
                    // Append the row to the table body
                    openStationTable.append(row);
                }


            }


            var closedDataTable = $("#closedDataTable"); // Get the table body element

            for (var i = 0; i < data.length; i++) {
                var station = data[i];

                if (station.status === "CLOSED") {

                    // Create a new row
                    var row = $("<tr>");

                    // Append the data to the row
                    row.append($("<td>").text(station.id));
                    row.append($("<td>").text(station.name));
                    row.append($("<td>").text(station.latitude));
                    row.append($("<td>").text(station.longitude));
                    row.append($("<td>").text(station.serviceCentre));
                    row.append($("<td>").text(station.catchmentArea));
                    row.append($("<td>").text(station.status));
                    row.append($("<td>").text(station.hoursLostToday));
                    row.append($("<td>").text(station.hoursLostPrev));

                    // Create an action column with a button
                    // Create an action column
                    var actionColumn = $("<td>").html(`
      <button class="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="text-muted sr-only">Action</span>
      </button>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">Edit</a>
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">Delete</a>
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">View More Details</a>
      </div>
    `);

                    row.append(actionColumn);
                    // Append the row to the table body
                    closedDataTable.append(row);
                }


            }


        },
        error: function (e) {
            console.log("Error");
            console.log(e);
        }
    });
}

// $("#example").DataTable({
//     data: data,
//     columns: [
//         {"data": "id"},
//         {
//             "data": function (row) {
//                 return row.name ;
//             }
//         },
//         {
//             "data": function (row) {
//                 return row.latitude;
//             }
//         },
//         {
//             "data": function (row) {
//                 return row.longitude;
//             }
//         },
//
//         {
//             "data":  function (data) {
//                 return data.serviceCentre;
//             }
//         },
//
//         {
//             "data": function (data) {
//                 return data.catchmentArea;
//             }
//         },
//         {
//             "data": "status",
//             render: function (data) {
//                 if (data === "OPEN") {
//                     return "<span class='badge badge-pill badge-success' style='background-color: green!important;'> " + data + "</span>";
//                 } else if (data === "CLOSED") {
//                     return "<span class='badge badge-pill badge-warning' style='background-color: red!important;'> " + data + "</span>";
//                 } else {
//                     return "<span class=' badge-pill badge-danger'> .... </span>";
//
//                 }
//             }
//         },
//         {
//             "data": function (data) {
//                 return data.hoursLostToday;
//             }
//         },
//         {
//             "data": function (data) {
//                 return data.hoursLostPrev;
//             }
//         },
//         {
//             "data": "id",
//             "sortable": false,
//             "searchable": false,
//             render: function (data) {
//                 return '<button class="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > <span class="text-muted sr-only">Action</span></button>' + `
//                             <div class="dropdown-menu dropdown-menu-right">
//                             <a class="dropdown-item" href="#" onclick="setLocal('` + data + `')">Edit</a>
//                             <a class="dropdown-item"   onclick="setLocal('` + data + `')" href="#">Delete</a>
//                             <a class="dropdown-item" href="#" onclick="setLocal('` + data + `')">View More Details</a>
//                         </div>`
//
//             }
//         }
//     ],
//     autoWidth: true,
//     "lengthMenu": [
//         [10, 25, 50, 100, -1],
//         [10, 25, 50, 100, "All"]
//     ]
// });


function SaveStation() {

// Get form field values
    var name = document.getElementById("name").value;
    var latitude = document.getElementById("latitude").value;
    var longitude = document.getElementById("longitude").value;
    var catchmentArea = document.getElementById("catchmentArea").value;
    // var status = document.getElementById("status").value;
    var serviceCentre = document.getElementById("serviceCentre").value;

    // Perform form validation
    if (name === '' || latitude === '' || longitude === '' || catchmentArea === '' || serviceCentre === '') {
        alert("Please fill in all fields.");
        return;
    }

    // Create JSON object
    var data = {
        name: name,
        latitude: latitude,
        longitude: longitude,
        catchmentArea: catchmentArea,

        serviceCentre: serviceCentre,
        hoursLostToday: 0,
        hoursLostPrev: 0
    };

    console.log(data);

    // Send JSON object via AJAX
    $.ajax({
        url: "/station/save",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
            alert("Station added successfully.");
            // Handle successful response
        },
        error: function (xhr, status, error) {
            alert("Failed to add station. Please try again.");
            // Handle error response
        }
    });

}

function getAllJobCards() {
    console.log("Getting all jobcards");

    $.ajax({
        url: "/jobcard/get/all",
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var tableBody = $("#alljobcards"); // Get the table body element

            for (var i = 0; i < data.length; i++) {
                var jobCard = data[i];

                // Check if the jobCard status is "OPEN"
                // Create a new row
                var row = $("<tr>");

                // Append the data to the row
                row.append($("<td>").text(jobCard.id));
                row.append($("<td>").text(jobCard.jobCardAssignedTo));
                row.append($("<td>").text(jobCard.jobCardAssignedBy));
                row.append($("<td>").text(jobCard.jobCardType));
                row.append($("<td>").text(jobCard.jobCardDescription));
                row.append($("<td>").text(jobCard.station.name));
                row.append($("<td>").text(jobCard.jobCardPriority));
                row.append($("<td>").text(jobCard.jobCardDate));
                row.append($("<td>").text(jobCard.jobCardStatus));

                // Create an action column
                var actionColumn = $("<td>").html(`
        <button class="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="text-muted sr-only">Action</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#" onclick="setLocal('` + jobCard.id + `')">Edit</a>
          <a class="dropdown-item" href="#" onclick="setLocal('` + jobCard.id + `')">Delete</a>
          <a class="dropdown-item" href="#" onclick="setLocal('` + jobCard.id + `')">View More Details</a>
        </div>
      `);

                row.append(actionColumn);

                // Append the row to the table body
                tableBody.append(row);
            }


            var openStationTable = $("#openDataTable"); // Get the table body element

            for (var i = 0; i < data.length; i++) {
                var station = data[i];

                if (station.status === "OPEN") {

                    // Create a new row
                    var row = $("<tr>");

                    // Append the data to the row
                    row.append($("<td>").text(station.id));
                    row.append($("<td>").text(station.name));
                    row.append($("<td>").text(station.latitude));
                    row.append($("<td>").text(station.longitude));
                    row.append($("<td>").text(station.serviceCentre));
                    row.append($("<td>").text(station.catchmentArea));
                    row.append($("<td>").text(station.status));
                    row.append($("<td>").text(station.hoursLostToday));
                    row.append($("<td>").text(station.hoursLostPrev));

                    // Create an action column with a button
                    // Create an action column
                    var actionColumn = $("<td>").html(`
      <button class="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="text-muted sr-only">Action</span>
      </button>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">Edit</a>
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">Delete</a>
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">View More Details</a>
      </div>
    `);

                    row.append(actionColumn);
                    // Append the row to the table body
                    openStationTable.append(row);
                }


            }


            var closedDataTable = $("#closedDataTable"); // Get the table body element

            for (var i = 0; i < data.length; i++) {
                var station = data[i];

                if (station.status === "CLOSED") {

                    // Create a new row
                    var row = $("<tr>");

                    // Append the data to the row
                    row.append($("<td>").text(station.id));
                    row.append($("<td>").text(station.name));
                    row.append($("<td>").text(station.latitude));
                    row.append($("<td>").text(station.longitude));
                    row.append($("<td>").text(station.serviceCentre));
                    row.append($("<td>").text(station.catchmentArea));
                    row.append($("<td>").text(station.status));
                    row.append($("<td>").text(station.hoursLostToday));
                    row.append($("<td>").text(station.hoursLostPrev));

                    // Create an action column with a button
                    // Create an action column
                    var actionColumn = $("<td>").html(`
      <button class="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="text-muted sr-only">Action</span>
      </button>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">Edit</a>
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">Delete</a>
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">View More Details</a>
      </div>
    `);

                    row.append(actionColumn);
                    // Append the row to the table body
                    closedDataTable.append(row);
                }


            }

            var pendingTable = $("#pendingTable"); // Get the table body element

            for (var i = 0; i < data.length; i++) {
                var station = data[i];

                if (station.status === "CLOSED") {

                    // Create a new row
                    var row = $("<tr>");

                    // Append the data to the row
                    row.append($("<td>").text(station.id));
                    row.append($("<td>").text(station.name));
                    row.append($("<td>").text(station.latitude));
                    row.append($("<td>").text(station.longitude));
                    row.append($("<td>").text(station.serviceCentre));
                    row.append($("<td>").text(station.catchmentArea));
                    row.append($("<td>").text(station.status));
                    row.append($("<td>").text(station.hoursLostToday));
                    row.append($("<td>").text(station.hoursLostPrev));

                    // Create an action column with a button
                    // Create an action column
                    var actionColumn = $("<td>").html(`
      <button class="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="text-muted sr-only">Action</span>
      </button>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">Edit</a>
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">Delete</a>
        <a class="dropdown-item" href="#" onclick="setLocal('` + station.id + `')">View More Details</a>
      </div>
    `);

                    row.append(actionColumn);
                    // Append the row to the table body
                    pendingTable.append(row);
                }


            }


        },
        error: function (e) {
            console.log("Error");
            console.log(e);
        }
    });
}


function getAllEquipments() {
    console.log("Getting all equipments");

    $.ajax({
        url: "/equipment/get/all",
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var tableBody = $("#allEqpTable"); // Get the table body element

            for (var i = 0; i < data.length; i++) {
                var equip = data[i];

                console.log("Station Name = " + data[i].station.name);

                // Check if the jobCard status is "OPEN"
                // Create a new row
                var row = $("<tr>");

                // Append the data to the row
                row.append($("<td>").text(equip.id));
                row.append($("<td>").text(equip.equipmentName));
                row.append($("<td>").text(equip.equipmentDescription));
                row.append($("<td>").text(equip.equipmentNumber));
                row.append($("<td>").text(equip.station.name));
                row.append($("<td>").text(equip.criticalLevel));


                // Create an action column
                var actionColumn = $("<td>").html(`
        <button class="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="text-muted sr-only">Action</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#" onclick="setLocal('` + equip.id + `')">Edit</a>
          <a class="dropdown-item" href="#" onclick="setLocal('` + equip.id + `')">Delete</a>
          <a class="dropdown-item" href="#" onclick="setLocal('` + equip.id + `')">View More Details</a>
        </div>
      `);

                row.append(actionColumn);

                // Append the row to the table body
                tableBody.append(row);
            }


        },
        error: function (e) {
            console.log("Error");
            console.log(e);
        }
    });
}


function getStationsForEquip() {
    $.ajax({
        url: "/station/get/all", // Update the URL to match your controller mapping
        type: "GET",
        success: function (stations) {
            // Iterate over the stations and append options to the select element
            console.log(stations);
            $.each(stations, function (index, station) {
                $("#station").append($("<option>").val(station.id).text(station.name));
            });
        },
        error: function () {
            console.log("Failed to fetch stations.");
        }
    });
}

function SaveEquipment() {

    console.log("Saving equipment");
    // Retrieve the input values
    var equipmentName = $("#equipmentName").val();
    var equipmentDescription = $("#equipmentDescription").val();
    var equipmentNumber = $("#equipmentNumber").val();
    var station = $("#station").val();
    var criticalLevel = $("#criticalLevel").val();

    // Check for null values
    if (!equipmentName || !equipmentDescription || !equipmentNumber || !station || !criticalLevel) {
        console.error("Please fill in all the fields.");
        alert("Please fill in all the fields.");
        return;
    }

    // Create the equipment object
    var equipment = {
        equipmentName: equipmentName,
        equipmentDescription: equipmentDescription,
        equipmentNumber: equipmentNumber,
        criticalLevel: criticalLevel
    };

    // Send an AJAX request to save the equipment
    $.ajax({
        url: "/equipment/save/" + station, // Replace with the actual URL to save the equipment
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(equipment),
        success: function (response) {
            // Handle the success response
            alert("Equipment saved successfully.");
            console.log("Equipment saved successfully:", response);
        },
        error: function (xhr, status, error) {
            // Handle the error response
            console.error("Failed to save equipment:", error);
            alert("Failed to save Equipment : Duplicate Equipment Number");
        }
    });
}


function getStationsForJobCard() {

    $.ajax({
        url: "/station/get/all", // Update the URL to match your controller mapping
        type: "GET",
        success: function (stations) {
            // Iterate over the stations and append options to the select element
            console.log(stations);
            $("#station").append($("<option>").val("").text("Select Station"));

            $.each(stations, function (index, station) {
                $("#station").append($("<option>").val(station.id).text(station.name));
            });
        },
        error: function () {
            console.log("Failed to fetch stations.");
        }
    });

}


function triggerEquipLoad() {

    var selectElement = document.getElementById("station");
    var selectedValue = selectElement.value;

    console.log("Selected value = " + selectedValue);
    if (selectedValue === "") {
        var container = document.getElementById("eqpCheckBoxes");
        container.innerHTML = "";
    } else {
        getEquipsOnStationForJobCard(selectedValue);
    }


}

function getEquipsOnStationForJobCard(stationId) {

    $.ajax({
        url: "/equipment/get/all/" + stationId, // Update the URL to match your controller mapping
        type: "GET",
        success: function (equipments) {
            // Iterate over the stations and append options to the select element
            console.log(equipments);

            var container = document.getElementById("eqpCheckBoxes");
            container.innerHTML = "";

            // Create checkboxes dynamically
            equipments.forEach(function (obj) {

                var label = document.createElement("label");
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "equipment";
                checkbox.value = obj.id;
                label.appendChild(checkbox);
                label.appendChild(document.createTextNode(" " + obj.equipmentName));
                container.appendChild(label);
                container.appendChild(document.createElement("br"));
            });

        },
        error: function (e) {
            console.log("Failed to fetch stations.");
            console.log(e)
        }
    });

}

function saveJobCard() {


    // Get the values from the form fields using jQuery
    var description = $("#jobCardDescription").val();
    var priority = $("#jobCardPriority").val();
    var type = $("#jobCardType").val();
    var station = $("#station").val();

    console.log("Station = " + station);

    var assignedTo = $("#jobCardAssignedTo").val();
    // var startDate = $("#jobCardStartDateTime").val();

    console.log("description : " + description);
    console.log("Priority : " + priority);
    console.log("type : " + type);
    console.log("station : " + station);
    console.log("assignedTo : " + assignedTo);
    // console.log("startDate : " + startDate);


    // Check for null or empty values
    if (!description || !priority || !type || !station || !assignedTo) {
        alert("Please fill in all required fields.");
        console.log("Please fill in all required fields.");
        return;
    }

    const checkboxContainer = document.getElementById('eqpCheckBoxes');
    const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]:checked');

    if (checkboxes.length === 0) {
        alert('Please select at least one Equipment.');
        return;
    }

    const values = Array.from(checkboxes).map(checkbox => checkbox.value);
    const commaSeparatedList = values.join(', ');
    console.log(commaSeparatedList);

    // Create an object to store the form data
    var jobCard = {
        jobCardDescription: description,
        jobCardPriority: priority,
        jobCardType: type,
        stationID: station,
        jobCardAssignedTo: assignedTo,
        eq: commaSeparatedList

    };


    console.log(jobCard);

    $.ajax({
        url: "jobcard/save/" + station,
        type: "POST",
        data: JSON.stringify(jobCard),
        contentType: "application/json",
        success: function (response) {
            alert("Job Card saved successfully");
            console.log("Job Card saved successfully");
        },
        error: function (xhr, status, error) {
            console.error("Error saving form data:", error);
        }
    });


}