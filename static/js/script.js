if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        document.getElementById("position").innerHTML = 
            "Votre position : " + lat.toFixed(5) + ", " + lon.toFixed(5);

        // Si tu veux ajouter un marqueur sur la carte Folium
        // il faudra le faire côté Python avec lat/lon, ou reconstruire la carte en JS
    });
} else {
    document.getElementById("position").innerHTML = "Géolocalisation non supportée";
}
