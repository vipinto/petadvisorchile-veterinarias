// -------------------------
// BASE DE DATOS LOCAL
// -------------------------
const servicios = [
    { id: 1, placeId: "ChIJbbHvg-_PYpYRqqmTkeShLcM", nombre: "BigMama Senior Dog Hotel", lat: -33.6064831, lng: -70.7425392, telefono: "+56 9 2080 6899", tipo: "hoteles", },
    { id: 2, placeId: "ChIJk8a4LEPbYpYRmO_ZiRFHYhg", nombre: "Break Can", lat: -33.497746, lng: -70.6479466, telefono: "+56 9 8887 7616", tipo: "hoteles", },
    { id: 3, placeId: "ChIJWcXzmSghY5YR0wcHtUEs3Co", nombre: "Cachorrosfinos.cl", lat: -33.7205253, lng: -70.727844, telefono: "+56 9 8727 8041", tipo: "hoteles", },
    { id: 4, placeId: "ChIJTyxcgKu9YpYRYclmTpsEdJs", nombre: "Casa Cuore Hotel de Mascotas", lat: -33.2234441, lng: -70.7318737, telefono: "+56 9 6142 2003", tipo: "hoteles", },
    { id: 5, placeId: "ChIJJ4el_Gm5YpYRy6-tGF-TTh8", nombre: "Clínica Veterinaria y Hotel The Place's", lat: -33.2520189, lng: -70.695017, telefono: "+56 9 7277 3329", tipo: "hoteles", },
    { id: 6, placeId: "ChIJfVwP6q3FYpYRCkaakcQ9-nU", nombre: "Daymascotas", lat: -33.4523394, lng: -70.6502129, telefono: "+56 2 2672 4456", tipo: "hoteles", },
    { id: 7, placeId: "ChIJMRgija25YpYRRDRZChWnKD0", nombre: "Dog Talent", lat: -33.2692317, lng: -70.7007176, telefono: "+56 9 8288 5700", tipo: "hoteles", },
    { id: 8, placeId: "ChIJBSSVqcbPYpYRUIkgiG5xQfA", nombre: "Doggy House Vitacura", lat: -33.393292, lng: -70.5695957, telefono: "+56 9 9593 2936", tipo: "hoteles", },
    { id: 9, placeId: "ChIJ48nzKUq5YpYRUjjK2LT4O-Y", nombre: "El Patio Guarderia", lat: -33.2590363, lng: -70.7106849, telefono: "+56 9 6788 3766", tipo: "hoteles", },
    { id: 10, placeId: "ChIJy_ramF7XYpYRLMqVVBLMElA", nombre: "Guarderia Canina Bigotitos Perros", lat: -33.5718786, lng: -70.5400107, telefono: "56 9 7545 6564", tipo: "hoteles", },
    { id: 11, placeId: "ChIJ0cLomaK5YpYRw_Kkypy0vsI", nombre: "Guarderia Canina Patitas Peludas", lat: -33.3499198, lng: -70.8416458, telefono: "+56 9 3064 4165", tipo: "hoteles", },
    
    // Aquí puedes agregar más servicios si quieres:
    // {
    //   id: 2,
    //   placeId: "otro-lugar-001",
    //   nombre: "Otro Lugar",
    //   lat: -33.45,
    //   lng: -70.66,
    //   telefono: "+56 9 2222 3333",
    //   tipo: "tiendas",
    // },
  ];
  
  // -------------------------
  // INICIALIZAR MAPA
  // -------------------------
  
  // Si hay servicios, centra el mapa en el primero.
  // Si no, usa un centro por defecto (Santiago).
  const centroLat = servicios.length ? servicios[0].lat : -33.45;
  const centroLng = servicios.length ? servicios[0].lng : -70.66;
  
  const map = L.map("map").setView([centroLat, centroLng], 13);
  
  // Fondo de mapa (OpenStreetMap)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);
  
  // -------------------------
  // PINTAR MARCADORES
  // -------------------------
  
  servicios.forEach((servicio) => {
    if (typeof servicio.lat !== "number" || typeof servicio.lng !== "number") {
      return; // Si falta lat/lng, saltamos este servicio
    }
  
    const marker = L.marker([servicio.lat, servicio.lng]).addTo(map);
  
    // Contenido del popup
    const popupHtml = `
      <div style="font-size:14px;">
        <strong>${servicio.nombre}</strong><br/>
        <span><b>Teléfono:</b> ${servicio.telefono || "No registrado"}</span><br/>
        <span><b>Tipo:</b> ${servicio.tipo || "Sin tipo"}</span><br/>
        <span style="font-size:11px; color:#666;">
          PlaceID: ${servicio.placeId || "N/A"}
        </span>
      </div>
    `;
  
    marker.bindPopup(popupHtml);
  });
  
