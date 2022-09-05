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

    const markerYrWyddfa = new google.maps.Marker({
        position: yrWyddfa,
        map: map,
        title: "Yr Wyddfa (Snowdon), Wales, Intermediate, 6 hours",
        label: "A",
        onclick: href="https://www.visitsnowdonia.info/snowdon-walking-routes"
    });

    const markerCheddarGorge = new google.maps.Marker({
        position: cheddarGorge,
        map: map,
        title: "Cheddar Gorge, England, Novice, 2 hours",
        label: "B"
    });

    const markerPaveyArk = new google.maps.Marker({
        position: paveyArk,
        map: map,
        title: "Pavey Ark (or Jack's Rake), England, Expert, 8 hours",
        label: "C"
    });

    const markerQuiraing = new google.maps.Marker({
        position: quiraing,
        map: map,
        title: "The Quiraing, Scotland, Intermediate, 5 hours",
        label: "D"
    });

    const markerGiantsCauseway = new google.maps.Marker({
        position: giantsCauseway,
        map: map,
        title: "The Causeway Coast Path, Northern Ireland, Novice, 2 hours",
        label: "E"
    });

    const markerSouthDownsWay = new google.maps.Marker({
        position: southDownsWay,
        map: map,
        title: "The South Downs Way, England, Novice, 2 hours",
        label: "F"
    });

    const markerCarrauntoohil = new google.maps.Marker({
        position: carrauntoohil,
        map: map,
        title: "Carrauntoohil Hike, Republic of Ireland, Expert, 7 hours",
        label: "G"
    });

    const markerPenYFan = new google.maps.Marker({
        position: penYFan,
        map: map,
        title: "Pen Y Fan, Wales, Novice, 3 hours",
        label: "H"
    });

    const markerBenNevis = new google.maps.Marker({
        position: benNevis,
        map: map,
        title: "Ben Nevis, Scotland, Expert, 8 hours",
        label: "I"
    });

    const markerLudsChurch = new google.maps.Marker({
        position: ludsChurch,
        map: map,
        title: "Lud's Chruch, England, Novice, 1 hour",
        label: "J"
    });
 }
        