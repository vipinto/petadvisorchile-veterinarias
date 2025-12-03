// ------------------
// MAPA BÁSICO
// ------------------
const map = L.map("map").setView([-33.45, -70.66], 11);

// Fondo estable de OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Parámetro ?tipo= de la URL (veterinarias, rescates, etc.)
const params = new URLSearchParams(window.location.search);
const tipoFiltro = params.get("tipo"); // ej: ?tipo=veterinarias

// ------------------
// BASE DE DATOS LOCAL
// ------------------
const servicios = [
  {
    id: 1,
    placeId: "vet-colina-001",
    nombre: "Veterinaria Colina",
    lat: -33.3305,
    lng: -70.6783,
    telefono: "+56 9 1234 5678",
    tipo: "veterinarias",
  },
  {
    id: 2,
    placeId: "tienda-centro-001",
    nombre: "Tienda Pet Center",
    lat: -33.4375,
    lng: -70.65,
    telefono: "+56 2 2345 6789",
    tipo: "tiendas",
  },
  {
    id: 3,
    placeId: "parque-bicentenario-001",
    nombre: "Parque para Perros Bicentenario",
    lat: -33.399,
    lng: -70.604,
    telefono: "",
    tipo: "parques",
  },
];

// Para ajustar el mapa a todos los puntos visibles
const markers = [];

// ------------------
// PINTAR LOS SERVICIOS EN EL MAPA
// ------------------
servicios.forEach((s) => {
  if (tipoFiltro && s.tipo !== tipoFiltro) return;
  if (!s.lat || !s.lng) return;

  const marker = L.marker([s.lat, s.lng]).addTo(map);

  // Limpiar teléfono
  const cleanTel = s.telefono ? s.telefono.replace(/\s+/g, "") : "";

  // Popup con teléfono clickeable + botón "Cómo llegar"
  const popupHtml = `
    <div>
      <strong>${s.nombre}</strong><br>

      ${
        s.telefono
          ? `
            <small>
              Tel: <a href="tel:${cleanTel}" style="color:#007bff; text-decoration:underline;">
                ${s.telefono}
              </a>
            </small><br>
          `
          : ""
      }

      <a href="https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}"
         target="_blank"
         style="color:#ff5722; text-decoration:underline; font-weight:bold;">
        📍 Cómo llegar
      </a><br>

      <small>Place ID: ${s.placeId}</small>
    </div>
  `;

  marker.bindPopup(popupHtml);
  markers.push(marker);
});

// Ajustar el mapa para que se vean todos los marcadores del tipo actual
if (markers.length > 0) {
  const group = L.featureGroup(markers);
  map.fitBounds(group.getBounds().pad(0.2));
}
