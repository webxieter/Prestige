jQuery(document).ready(function(e){function t(e,t){var i=document.getElementById("zoom-in"),o=document.getElementById("zoom-out");e.appendChild(i),e.appendChild(o),google.maps.event.addDomListener(i,"click",function(){t.setZoom(t.getZoom()+1)}),google.maps.event.addDomListener(o,"click",function(){t.setZoom(t.getZoom()-1)})}var i=59.924576,o=30.340942,l=17,s=new google.maps.LatLng(59.924576,30.345727),n="../img/icon-location.png",a="#ffffff",r=-1,y=1,p=[{elementType:"labels",stylers:[{saturation:r}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:a},{visibility:"on"},{lightness:y},{saturation:r}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{hue:a},{visibility:"on"},{lightness:y},{saturation:r}]},{featureType:"poi.government",elementType:"geometry.fill",stylers:[{hue:a},{visibility:"on"},{lightness:y},{saturation:r}]},{featureType:"poi.sport_complex",elementType:"geometry.fill",stylers:[{hue:a},{visibility:"on"},{lightness:y},{saturation:r}]},{featureType:"poi.attraction",elementType:"geometry.fill",stylers:[{hue:a},{visibility:"on"},{lightness:y},{saturation:r}]},{featureType:"poi.business",elementType:"geometry.fill",stylers:[{hue:a},{visibility:"on"},{lightness:y},{saturation:r}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:a},{visibility:"on"},{lightness:y},{saturation:r}]},{featureType:"transit.station",elementType:"geometry.fill",stylers:[{hue:a},{visibility:"on"},{lightness:y},{saturation:r}]},{featureType:"landscape",stylers:[{hue:a},{visibility:"on"},{lightness:y},{saturation:r}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:a},{visibility:"on"},{lightness:y},{saturation:r}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{hue:a},{visibility:"on"},{lightness:y},{saturation:r}]},{featureType:"water",elementType:"geometry",stylers:[{hue:a},{visibility:"on"},{lightness:y},{saturation:r}]}],m={center:s,zoom:l,panControl:!1,zoomControl:!1,mapTypeControl:!1,streetViewControl:!1,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,styles:p},u=new google.maps.Map(document.getElementById("google-container"),m),g=(new google.maps.Marker({position:new google.maps.LatLng(i,o),map:u,visible:!0,icon:n}),document.createElement("div"));new t(g,u);u.controls[google.maps.ControlPosition.LEFT_TOP].push(g)});
//# sourceMappingURL=map.js.map
