
async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const center = { lat: -18.3873297, lng: 30.5088342 };
    const map = new Map(document.getElementById("map"), {
        zoom: 6.4,
        center,
        mapId: "4504f8b37365c3d0",
    });

    for (const property of properties) {
        const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
            map,
            content: buildContent(property),
            position: property.position,
            title: property.location,
        });

        AdvancedMarkerElement.addListener("click", () => {
            toggleHighlight(AdvancedMarkerElement, property);
        });
    }
}

function toggleHighlight(markerView, property) {
    if (markerView.content.classList.contains("highlight")) {
        markerView.content.classList.remove("highlight");
        markerView.zIndex = null;
    } else {
        markerView.content.classList.add("highlight");
        markerView.zIndex = 1;
    }
}

function buildContent(property) {
    const content = document.createElement("div");

    content.classList.add("property");
    content.innerHTML = `
    <div class="icon">
        <i aria-hidden="true" class="fa fa-icon fa-sm fa-${property.type}" title="${property.type}"></i>
        <span class="fa-sr-only">${property.type}</span>
    </div>
    <div class="details">
        <div class="price">${property.price}</div>
        <div class="address">${property.address}  </div>
       
       
       
      
    </div>
    `;
    return content;
}

 const properties = [
     
  
   {
         address: "Pump Maintenance",
         price: "$12 456",
         type: "building",
         temperature: 5,
         himudity: 4.5,
         position: {
             lat:   -20.1713563,
             lng:28.5754645,
         },
     },
   
    {
         address: "Plant Maintenance",
         price: "$9 456",
         type: "building",
         temperature: 5,
         himudity: 4.5,
         position: {
             lat:   -17.8308899,
             lng:31.0520076,
         },
     },
     
      {
         address: "Borehole Maintenance",
         price: "$7 456",
         type: "home",
         temperature: 5,
         himudity: 4.5,
         position: {
             lat:   -17.8063621,
             lng: 31.0712177,
         },
     },
     
     {
         address: "Vehicle Maintenance",
         price: "$4 456",
         type: "home",
         temperature: 5,
         himudity: 4.5,
         position: {
             lat:  -18.3873297,
             lng: 30.5088342,
         },
     },
     {
         address: "Plant Maintenance",
         price: "$ 3,050,000",
         type: "building",
         temperature: 5,
         himudity: 4.5,
         position: {
             lat:  -18.5873297,
             lng: 30.6088342,
         },
     }

 ];


//markers
