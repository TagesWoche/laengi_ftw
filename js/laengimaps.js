function initMap() {
var isDraggable = $(document).width() > 480 ? true : false; // If document (your website) is wider than 480px, isDraggable = true, else isDraggable = false

    
    
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    scrollwheel:false,
    draggable: isDraggable,
    center: {lat: 47.531061, lng: 7.706800},
    mapTypeId: google.maps.MapTypeId.TERRAIN,
      
      styles:[{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff7700"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#1d1d1d"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"color":"#008148"},{"weight":"1.00"},{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#008148"},{"weight":"3.00"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":"5.00"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#2d2d2d"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":"5.00"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"saturation":"64"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#fafafa"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d5d5d5"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"},{"color":"#008148"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#008148"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#ffffff"},{"weight":"1.00"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#008148"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"},{"color":"#008148"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#008148"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d9d9d9"},{"visibility":"on"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"visibility":"simplified"},{"lightness":"4"},{"saturation":"-100"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#e1e1e1"},{"visibility":"on"}]}]
                

  });

        
          
  

         // Define the LatLng coordinates for the polygon's path.
  var laengi = [
  new google.maps.LatLng(47.53097,7.7098), new google.maps.LatLng(47.53306,7.70828), new google.maps.LatLng(47.53276,7.7073), new google.maps.LatLng(47.53392,7.70716), new google.maps.LatLng(47.53517,7.71433), new google.maps.LatLng(47.5344,7.71385), new google.maps.LatLng(47.53394,7.71567), new google.maps.LatLng(47.53284,7.71642), new google.maps.LatLng(47.53198,7.71598), new google.maps.LatLng(47.53102,7.71534), new google.maps.LatLng(47.53031,7.71499), new google.maps.LatLng(47.53008,7.70957), new google.maps.LatLng(47.53059,7.70897), 
    
    
  ];

  // Construct the polygon.
  var area_laengi = new google.maps.Polygon({
    paths: laengi,
    strokeColor: '#101010',
    strokeOpacity: 0.6,
    strokeWeight: 1,
    fillColor: '#14a900',
    fillOpacity: 0.4
  });
  area_laengi.setMap(map);


/*

 // Define the LatLng coordinates for the polygon's path.
  var rankacker = [
new google.maps.LatLng(47.52404,7.70305), new google.maps.LatLng(47.52239,7.70277), new google.maps.LatLng(47.51975,7.70299), new google.maps.LatLng(47.52005,7.70435), new google.maps.LatLng(47.51942,7.7049), new google.maps.LatLng(47.51989,7.70585), new google.maps.LatLng(47.52073,7.70852), new google.maps.LatLng(47.52125,7.70821), new google.maps.LatLng(47.52151,7.71019), new google.maps.LatLng(47.52317,7.71189), new google.maps.LatLng(47.52358,7.70577), 
    
    
  ];

  // Construct the polygon.
  var area_rankacker = new google.maps.Polygon({
    paths: rankacker,
    strokeColor: '#101010',
    strokeOpacity: 0.6,
    strokeWeight: 1,
    fillColor: '#0018fc',
    fillOpacity: 0.4
  });
  area_rankacker.setMap(map);


 // Define the LatLng coordinates for the polygon's path.
  var aegelmatt = [
new google.maps.LatLng(47.52146,7.67931), new google.maps.LatLng(47.52044,7.67963), new google.maps.LatLng(47.52017,7.67965), new google.maps.LatLng(47.52048,7.67825), new google.maps.LatLng(47.52008,7.67807), new google.maps.LatLng(47.51964,7.67931), new google.maps.LatLng(47.51858,7.67873), new google.maps.LatLng(47.51779,7.67975), new google.maps.LatLng(47.51726,7.68215), new google.maps.LatLng(47.51684,7.68423), new google.maps.LatLng(47.51614,7.68508), new google.maps.LatLng(47.51619,7.68563), new google.maps.LatLng(47.52136,7.68618), new google.maps.LatLng(47.52144,7.68307), 
    
  ];

  // Construct the polygon.
  var area_aegelmatt = new google.maps.Polygon({
    paths: aegelmatt,
    strokeColor: '#101010',
    strokeOpacity: 0.6,
    strokeWeight: 1,
    fillColor: '#cc00f8',
    fillOpacity: 0.4
  });
  area_aegelmatt.setMap(map);

    
    */
      }
      