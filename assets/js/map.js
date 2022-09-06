function initMap() {

    const yrWyddfa = { lat: 53.069, lng: -4.076 };
    const cheddarGorge = { lat: 51.286, lng: -2.760 };
    const paveyArk = { lat: 54.461, lng: -3.105 };
    const quiraing = { lat: 57.640, lng: -6.274 };
    const giantsCauseway = { lat: 55.231, lng: -6.529 };
    const southDownsWay = { lat: 50.903, lng: -0.514 };
    const carrauntoohil = { lat: 52.0439, lng: -9.685};
    const penYFan = { lat: 51.883, lng: -3.436 };
    const benNevis = { lat: 56.796, lng: -5.003};
    const ludsChurch = { lat: 53.187, lng: -2.020 };
    

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: paveyArk,
    });
    
// Yr Wyddfa map information
    const markerYrWyddfa = new google.maps.Marker({
        position: yrWyddfa,
        map: map,
        title: "Yr Wyddfa (Snowdon), Wales, Intermediate, 6 hours",
        label: "A",
    });

    var infoYrWyddfa = new google.maps.InfoWindow({
        content: "<div style='float:left'><img style='height:100px' src='assets/images/snowden.jpg'></div><div style='float:right; padding: 10px;'><b>Yr Wyddfa (Snowden)</b><br>Wales<br>Intermediate<br>6 hours</div>"
    });

    google.maps.event.addListener(markerYrWyddfa, 'click', function() {
        infoYrWyddfa.open(map, markerYrWyddfa)
    });   
// Cheddar Gorge map information
    const markerCheddarGorge = new google.maps.Marker({
        position: cheddarGorge,
        map: map,
        title: "Cheddar Gorge, England, Novice, 2 hours",
        label: "B"
    });

    var infoCheddar = new google.maps.InfoWindow({
        content: "<div style='float:left'><img style='height:100px' src='assets/images/cheddar.jpg'></div><div style='float:right; padding: 10px;'><b>Cheddar Gorge</b><br>England<br>Novice<br>2 hours</div>"
    });

    google.maps.event.addListener(markerCheddarGorge, 'click', function() {
        infoCheddar.open(map, markerCheddarGorge)
    });

// Pavey Ark map information
    const markerPaveyArk = new google.maps.Marker({
        position: paveyArk,
        map: map,
        title: "Pavey Ark (or Jack's Rake), England, Expert, 8 hours",
        label: "C"
    });

    var infoPavey = new google.maps.InfoWindow({
        content: "<div style='float:left'><img style='height:100px' src='assets/images/pavey.jpg'></div><div style='float:right; padding: 10px;'><b>Pavey Ark (or Jack's Rake)</b><br>England<br>Expert<br>8 hours</div>"
    });

    google.maps.event.addListener(markerPaveyArk, 'click', function() {
        infoPavey.open(map, markerPaveyArk)
    });  

// Quiraing map information
    const markerQuiraing = new google.maps.Marker({
        position: quiraing,
        map: map,
        title: "The Quiraing, Scotland, Intermediate, 5 hours",
        label: "D"
    });

    var infoQuiraing = new google.maps.InfoWindow({
        content: "<div style='float:left'><img style='height:100px' src='assets/images/quiraing.jpg'></div><div style='float:right; padding: 10px;'><b>Quiraing</b><br>Scotland<br>Intermediate<br>5 hours</div>"
    });

    google.maps.event.addListener(markerQuiraing, 'click', function() {
        infoQuiraing.open(map, markerQuiraing)
    }); 

// Giants Causeway map information
    const markerGiantsCauseway = new google.maps.Marker({
        position: giantsCauseway,
        map: map,
        title: "The Giant's Causeway Coast Path, Northern Ireland, Novice, 2 hours",
        label: "E"
    });

    var infoGiants = new google.maps.InfoWindow({
        content: "<div style='float:left'><img style='height:100px' src='assets/images/giants.jpg'></div><div style='float:right; padding: 10px;'><b>The Giant's Causeway Coast Path</b><br>Northern Ireland<br>Novice<br>2 hours</div>"
    });

    google.maps.event.addListener(markerGiantsCauseway, 'click', function() {
        infoGiants.open(map, markerGiantsCauseway)
    });

// South Downs Way map information
    const markerSouthDownsWay = new google.maps.Marker({
        position: southDownsWay,
        map: map,
        title: "The South Downs Way, England, Novice, 2 hours",
        label: "F"
    });
    
    var infoSouth = new google.maps.InfoWindow({
        content: "<div style='float:left'><img style='height:100px' src='assets/images/south.jpg'></div><div style='float:right; padding: 10px;'><b>The South Downs Way</b><br>England<br>Novice<br>2 hours</div>"
    });

    google.maps.event.addListener(markerSouthDownsWay, 'click', function() {
        infoSouth.open(map, markerSouthDownsWay)
    });

// Caurauntoohil map information
    const markerCarrauntoohil = new google.maps.Marker({
        position: carrauntoohil,
        map: map,
        title: "Carrauntoohil Hike, Republic of Ireland, Expert, 7 hours",
        label: "G"
    });

    var infoCarr = new google.maps.InfoWindow({
        content: "<div style='float:left'><img style='height:100px' src='assets/images/carr.jpg'></div><div style='float:right; padding: 10px;'><b>Carrauntoohil Hike</b><br>Republic of Ireland<br>Expert<br>7 hours</div>"
    });

    google.maps.event.addListener(markerCarrauntoohil, 'click', function() {
        infoCarr.open(map, markerCarrauntoohil)
    });

// Pen Y Fan map information
    const markerPenYFan = new google.maps.Marker({
        position: penYFan,
        map: map,
        title: "Pen Y Fan, Wales, Novice, 3 hours",
        label: "H"
    });

    var infoPen = new google.maps.InfoWindow({
        content: "<div style='float:left'><img style='height:100px' src='assets/images/pen.jpg'></div><div style='float:right; padding: 10px;'><b>Pen Y Fan</b><br>Wales<br>Novice<br>3 hours</div>"
    });

    google.maps.event.addListener(markerPenYFan, 'click', function() {
        infoPen.open(map, markerPenYFan)
    }); 

// Ben Nevis map information
    const markerBenNevis = new google.maps.Marker({
        position: benNevis,
        map: map,
        title: "Ben Nevis, Scotland, Expert, 8 hours",
        label: "I"
    });

    var infoBen = new google.maps.InfoWindow({
        content: "<div style='float:left'><img style='height:100px' src='assets/images/ben.jpg'></div><div style='float:right; padding: 10px;'><b>Ben Nevis</b><br>Scotland<br>Expert<br>8 hours</div>"
    });

    google.maps.event.addListener(markerBenNevis, 'click', function() {
        infoBen.open(map, markerBenNevis)
    }); 

// Luds Church map information
    const markerLudsChurch = new google.maps.Marker({
        position: ludsChurch,
        map: map,
        title: "Lud's Chruch, England, Novice, 1 hour",
        label: "J"
    });

    var infoLud = new google.maps.InfoWindow({
        content: "<div style='float:left'><img style='height:100px' src='assets/images/luds.jpg'></div><div style='float:right; padding: 10px;'><b>Lud's Church</b><br>England<br>Novice<br>1 hour</div>"
    });

    google.maps.event.addListener(markerLudsChurch, 'click', function() {
        infoLud.open(map, markerLudsChurch)
    });   
 }
        