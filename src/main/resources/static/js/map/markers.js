// Rendering markers

loader = L.DomUtil.get('loader');
layerGroup = L.layerGroup();
layerGroup.addTo(map);
L.layerJSON({
    //caching: true,				//enable requests caching
    minShift: 300,				//min shift for update data(in meters)
    updateOutBounds: false,		//request new data only if current bounds higher than last bounds
    layerTarget:layerGroup,
    url: '/station/get/all',
    propertyItems: '',
    propertyTitle: 'name',
    propertyLoc: ['latitude','longitude'],
    buildIcon: function(data, title) {
        console.log(data);
        console.log(data.status);
        console.log(data.name);

        let url="";

        if (data.status==="OPEN"){
            url='images/active_circle.svg';
        }else if(data.status==="CLOSED"){
            url='images/inactive_circle.svg';
        }else{
            url='images/standby_circle.svg';
        }


        return new L.Icon({
            iconUrl:url,
            iconSize: new L.Point(30, 30),
            iconAnchor: new L.Point(18, 41),
            popupAnchor: new L.Point(0, -41)
        });
    },
    buildPopup: function(data, marker) {
        return ` <h4> Station : ` + data.name + `</h4>Catchment Area : <b>` + data.catchmentArea + ' </b><br/> Service Centre :<b> ' + data.serviceCentre + `</b><hr style=" margin: .4rem;"/>Status:` + data.status + `
<br/>
<table class="table table-bordered">
    <tr >
       <td rowspan="1"><b>Hours Lost</b></td>
      
    </tr>
  <tr >
    <td>Today</td>
    <td>${data.hoursLostToday} </td>
  </tr>
   <tr>
    <td>Prev</td>
    <td>${data.hoursLostPrev} </td>
  </tr>
</table>

<h6 style="color: #0a0c0d!important;"> Equipment(s) : ${data.equipments.substring(3)} </h6>
` +''|| null;
    }
})
    .on('dataloading',function(e) {
        loader.style.display = 'block';
    })
    .on('dataloaded',function(e) {
        loader.style.display = 'none';
    })
    .addTo(map);
