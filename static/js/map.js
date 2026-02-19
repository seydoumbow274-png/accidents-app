// Initialise la carte
var map = L.map('map').setView([0, 0], 13); // coordonnées par défaut, seront remplacées

// Ajouter OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Demander la position actuelle de l’utilisateur
map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    // Marqueur pour la position de l'utilisateur
    L.marker(e.latlng).addTo(map)
        .bindPopup("Vous êtes ici !").openPopup();

    // Cercle autour de la position
    L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
    alert("Impossible de récupérer votre position : " + e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

// Quand on clique sur la carte pour signaler un accident
map.on('click', function(e) {
    var lat = e.latlng.lat;
    var lon = e.latlng.lng;

    L.marker([lat, lon]).addTo(map)
        .bindPopup("Accident signalé ici !")
        .openPopup();
});
// Création de la carte
var map = L.map('map').setView([0, 0], 13);

// Ajouter OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Vérifier si la géolocalisation est disponible
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        // Centrer la carte sur la position actuelle
        map.setView([lat, lon], 15);

        // Ajouter un marqueur sur la position actuelle
        L.marker([lat, lon]).addTo(map)
            .bindPopup("Vous êtes ici !")
            .openPopup();
    }, function(error) {
        alert("Impossible d'obtenir la position : " + error.message);
    });
} else {
    alert("La géolocalisation n'est pas supportée par ce navigateur.");
}

// Quand on clique sur la carte pour signaler un accident
map.on('click', function(e) {
    var lat = e.latlng.lat;
    var lon = e.latlng.lng;

    L.marker([lat, lon]).addTo(map)
        .bindPopup("Accident signalé ici !")
        .openPopup();
});
// Carte centrée par défaut (0,0)
var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
// Initialise la carte
var map = L.map('map').setView([0, 0], 13);

// Ajouter OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Demander la position actuelle de l’utilisateur
map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    // Marqueur pour la position de l'utilisateur
    L.marker(e.latlng).addTo(map)
        .bindPopup("Vous êtes ici !").openPopup();

    // Cercle autour de la position
    L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
    alert("Impossible de récupérer votre position : " + e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

// Quand on clique sur la carte pour signaler un accident
map.on('click', function(e) {
    var lat = e.latlng.lat;
    var lon = e.latlng.lng;

    L.marker([lat, lon]).addTo(map)
        .bindPopup("Accident signalé ici !")
        .openPopup();
});
