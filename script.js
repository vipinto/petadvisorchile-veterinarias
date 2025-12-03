// Datos del mapa
const map = L.map("map").setView([-33.45, -70.66], 11);

// Fondo del mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// BASE DE DATOS LOCAL CON PLACE ID
const serviciosPetChile = [
  {
    id: 1,
    placeId: "ChIJRRecDV7FYpYRxxA8Ynyw-K0",
    nombre: "Centro de Rescate Canino de Ñuñoa",
    lat: -33.464864,
    lng: -70.626883,
    descripcion: "Rescates"
  },
  {
    id: 2,
    placeId: "ChIJN0-9rN3PYpYRQy43L7wlUk4",
    nombre: "Fundacion Animal Chile",
    lat: -33.439546,
    lng: -70.608396,
    descripcion: "Rescates"
  },
  {
    id: 3,
    placeId: "ChIJD9mJU53FYpYRVyVl-WUTQrY",
    nombre: "Fundacion Esperanza Animal",
    lat: -33.439909,
    lng: -70.645463,
    descripcion: "Rescates"
  },
  {
    id: 4,
    placeId: "ChIJLbVtYx3FYpYRncf512hBlVE",
    nombre: "Fundacion Garras y Patas",
    lat: -33.437611,
    lng: -70.654820,
    descripcion: "Rescates"
  },
  {
    id: 5,
    placeId: "ChIJex-bCrQyLi4RrEe2Xo3OcME",
    nombre: "Huellas de Esperanza Chile",
    lat: -33.472788,
    lng: -70.629831,
    descripcion: "Rescates"
  },
  {
    id: 6,
    placeId: "ChIJX7DFOnrFYpYRbZc4QxFyAIs",
    nombre: "Union de Amigos de los Animales",
    lat: -33.454774,
    lng: -70.601630,
    descripcion: "Rescates"
  },
  {
    id: 7,
    placeId: "ChIJbbHvg-_PYpYRqqmTkeShLcM",
    nombre: "BigMama Senior Dog Hotel",
    lat: -33.606483,
    lng: -70.742539,
    descripcion: "Hoteles"
  },
  {
    id: 8,
    placeId: "ChIJk8a4LEPbYpYRmO_ZiRFHYhg",
    nombre: "Break Can",
    lat: -33.497746,
    lng: -70.647947,
    descripcion: "Hoteles"
  },
  {
    id: 9,
    placeId: "ChIJWcXzmSghY5YR0wcHtUEs3Co",
    nombre: "Cachorrosfinos.cl",
    lat: -33.720525,
    lng: -70.727844,
    descripcion: "Hoteles"
  },
  {
    id: 10,
    placeId: "ChIJTyxcgKu9YpYRYclmTpsEdJs",
    nombre: "Casa Cuore Hotel de Mascotas",
    lat: -33.223444,
    lng: -70.731874,
    descripcion: "Hoteles"
  },
  {
    id: 11,
    placeId: "ChIJJ4el_Gm5YpYRy6-tGF-TTh8",
    nombre: "Clínica Veterinaria y Hotel The Place's",
    lat: -33.252019,
    lng: -70.695017,
    descripcion: "Hoteles"
  },
  {
    id: 12,
    placeId: "ChIJfVwP6q3FYpYRCkaakcQ9-nU",
    nombre: "Daymascotas",
    lat: -33.452339,
    lng: -70.650213,
    descripcion: "Hoteles"
  },
  {
    id: 13,
    placeId: "ChIJMRgija25YpYRRDRZChWnKD0",
    nombre: "Dog Talent",
    lat: -33.269232,
    lng: -70.700718,
    descripcion: "Hoteles"
  },
  {
    id: 14,
    placeId: "ChIJBSSVqcbPYpYRUIkgiG5xQfA",
    nombre: "Doggy House Vitacura",
    lat: -33.393292,
    lng: -70.569596,
    descripcion: "Hoteles"
  },
  {
    id: 15,
    placeId: "ChIJ48nzKUq5YpYRUjjK2LT4O-Y",
    nombre: "El Patio Guarderia",
    lat: -33.259036,
    lng: -70.710685,
    descripcion: "Hoteles"
  },
  {
    id: 16,
    placeId: "ChIJy_ramF7XYpYRLMqVVBLMElA",
    nombre: "Guarderia Canina Bigotitos Perros",
    lat: -33.571879,
    lng: -70.540011,
    descripcion: "Hoteles"
  },
  {
    id: 17,
    placeId: "ChIJ0cLomaK5YpYRw_Kkypy0vsI",
    nombre: "Guarderia Canina Patitas Peludas",
    lat: -33.349920,
    lng: -70.841646,
    descripcion: "Hoteles"
  },
  {
    id: 18,
    placeId: "ChIJ710iNITPYpYRgb9eISrv4_0",
    nombre: "GuauHaus",
    lat: -33.443583,
    lng: -70.583242,
    descripcion: "Hoteles"
  },
  {
    id: 19,
    placeId: "ChIJ_9DkinbjYpYRWVcRGNa0C9I",
    nombre: "Hotel Campestre para Perros",
    lat: -33.628404,
    lng: -70.918407,
    descripcion: "Hoteles"
  },
  {
    id: 20,
    placeId: "ChIJ2QOl5Gc6iJYRKePoxHcP4wk",
    nombre: "Hotel Canino La Manada",
    lat: -32.794681,
    lng: -70.979272,
    descripcion: "Hoteles"
  },
  {
    id: 21,
    placeId: "ChIJX9Uxnom5YpYRKLvJbXzK_AY",
    nombre: "Hotel Canino Mascota Lodge",
    lat: -33.288525,
    lng: -70.664611,
    descripcion: "Hoteles"
  },
  {
    id: 22,
    placeId: "ChIJ23pMUwDnYpYR7RcuEOMSFcw",
    nombre: "Hotel Canino Mi Otra Casa",
    lat: -33.555228,
    lng: -70.842491,
    descripcion: "Hoteles"
  },
  {
    id: 23,
    placeId: "ChIJkSX3bTPFiZYRQcotLToUE3I",
    nombre: "Hotel Canino PetHouse",
    lat: -32.859009,
    lng: -71.477197,
    descripcion: "Hoteles"
  },
  {
    id: 24,
    placeId: "ChIJ52zgTzjzYpYRWYjJebPl6Kc",
    nombre: "Hotel Canino PlazaPet",
    lat: -33.415846,
    lng: -71.052080,
    descripcion: "Hoteles"
  },
  {
    id: 25,
    placeId: "ChIJ7_YBxvvhYpYRX9Aw1QvuKc8",
    nombre: "Hotel Canino Von Dichtung",
    lat: -33.690936,
    lng: -70.893317,
    descripcion: "Hoteles"
  },
  {
    id: 26,
    placeId: "ChIJ4cttLMu7YpYRu-nMZ2v7sdY",
    nombre: "Hotel Canino y Petshop Mantra",
    lat: -33.211456,
    lng: -70.661948,
    descripcion: "Hoteles"
  },
  {
    id: 27,
    placeId: "ChIJgX18lvK5YpYRtB3NUw3c_ZM",
    nombre: "Hotel Espacio Mascotas",
    lat: -33.293339,
    lng: -70.697748,
    descripcion: "Hoteles"
  },
  {
    id: 28,
    placeId: "ChIJx9MpDkO5YpYRfGeU6xpKaSg",
    nombre: "Hotel Jardin Animal",
    lat: -33.250171,
    lng: -70.697500,
    descripcion: "Hoteles"
  },
  {
    id: 29,
    placeId: "ChIJawMy_cjOYpYRHlKIu21IHik",
    nombre: "Hotel Pet Resort Santiago",
    lat: -33.826838,
    lng: -70.759990,
    descripcion: "Hoteles"
  },
  {
    id: 30,
    placeId: "ChIJRYig_xPnYpYRxWmWYq8LbNg",
    nombre: "Huellas Resort",
    lat: -33.578958,
    lng: -70.841528,
    descripcion: "Hoteles"
  },
  {
    id: 31,
    placeId: "ChIJNzHLLABpY5YR1ym6l8ce68g",
    nombre: "In the House",
    lat: -34.138062,
    lng: -70.844437,
    descripcion: "Hoteles"
  },
  {
    id: 32,
    placeId: "ChIJJ54Xa1-5YpYRcAbkT7mCnS0",
    nombre: "Jardín Animal",
    lat: -33.250441,
    lng: -70.697461,
    descripcion: "Hoteles"
  },
  {
    id: 33,
    placeId: "ChIJ2009a45U0AMRyAW-1XKMS7E",
    nombre: "Juan&Lau Dog Sitters - Cuidadores de Perros",
    lat: -33.455852,
    lng: -70.601767,
    descripcion: "Hoteles"
  },
  {
    id: 34,
    placeId: "ChIJBTkFDADPYpYRDE-eRqMaWpA",
    nombre: "La Casa de Louise",
    lat: -33.415645,
    lng: -70.549867,
    descripcion: "Hoteles"
  },
  {
    id: 35,
    placeId: "ChIJyzzR9NXRYpYRoBwchZrTt48",
    nombre: "La Guarderia de Bruno",
    lat: -33.530375,
    lng: -70.570198,
    descripcion: "Hoteles"
  },
  {
    id: 36,
    placeId: "ChIJp3ZWc9LOYpYRtffqpCnN_6A",
    nombre: "Lavacan",
    lat: -33.392369,
    lng: -70.562402,
    descripcion: "Hoteles"
  },
  {
    id: 37,
    placeId: "ChIJP9bJGJbPYpYRP_4V4EnvsGM",
    nombre: "MascoShop SPA",
    lat: -33.421381,
    lng: -70.607235,
    descripcion: "Hoteles"
  },
  {
    id: 38,
    placeId: "ChIJwYtieYrLYpYRJLp54Bgly5Y",
    nombre: "Nasus Zone",
    lat: -33.364967,
    lng: -70.497837,
    descripcion: "Hoteles"
  },
  {
    id: 39,
    placeId: "ChIJ6zldhuvFYpYRdw31Cz89TsM",
    nombre: "Peluditos",
    lat: -33.472027,
    lng: -70.645872,
    descripcion: "Hoteles"
  },
  {
    id: 40,
    placeId: "ChIJ_38LFXPPYpYRZWRDx_q3MvI",
    nombre: "Peluditos Cony",
    lat: -33.403064,
    lng: -70.568999,
    descripcion: "Hoteles"
  },
  {
    id: 41,
    placeId: "ChIJ10bsAKPRYpYRMGN4l1-WeLI",
    nombre: "Perris Guarderia Canina",
    lat: -33.527658,
    lng: -70.554076,
    descripcion: "Hoteles"
  },
  {
    id: 42,
    placeId: "ChIJzXIH4NW5YpYR7PCGqg53teA",
    nombre: "Perryland Chile",
    lat: -33.269143,
    lng: -70.699606,
    descripcion: "Hoteles"
  },
  {
    id: 43,
    placeId: "ChIJXbXQeXgnY5YRUNoyNDrRXRA",
    nombre: "PerryLodge",
    lat: -33.669940,
    lng: -70.621574,
    descripcion: "Hoteles"
  },
  {
    id: 44,
    placeId: "ChIJV9CROkjPYpYRljppMOVpYV0",
    nombre: "Pet Spot Scl",
    lat: -33.396384,
    lng: -70.554035,
    descripcion: "Hoteles"
  },
  {
    id: 45,
    placeId: "ChIJnyd5WRfPYpYR12k4wi736HA",
    nombre: "Pet Vamos",
    lat: -33.451016,
    lng: -70.620297,
    descripcion: "Hoteles"
  },
  {
    id: 46,
    placeId: "ChIJZUgDLNPRYpYRTqIrAIPri90",
    nombre: "PsiquisCan",
    lat: -33.180268,
    lng: -70.657972,
    descripcion: "Hoteles"
  },
  {
    id: 47,
    placeId: "ChIJLboWVQC7YpYRt5EclD4GPXs",
    nombre: "Silver Dog's Hotel y Guarderia Canina",
    lat: -33.190375,
    lng: -70.651144,
    descripcion: "Hoteles"
  },
  {
    id: 48,
    placeId: "ChIJA4mNPADjYpYRldvIy1A4K34",
    nombre: "\"El negro\" alimentos de mascotas",
    lat: -33.680584,
    lng: -70.980893,
    descripcion: "Tiendas"
  },
  {
    id: 49,
    placeId: "ChIJX01AAYLRYpYRZd6QLTeVUuY",
    nombre: "+Kotitas Tienda de Mascotas/ Consulta veterinaria y peluquería canina",
    lat: -33.483187,
    lng: -70.609924,
    descripcion: "Tiendas"
  },
  {
    id: 50,
    placeId: "ChIJAzPoW5PDYpYRpuVrD4Qf59Q",
    nombre: "Alimento para Mascotas en Maipú | Bodega Santa Teresa",
    lat: -33.496460,
    lng: -70.759870,
    descripcion: "Tiendas"
  },
  {
    id: 51,
    placeId: "ChIJXZclPdHcYpYRTygMCq8eAbw",
    nombre: "A&C Distribuidores",
    lat: -33.513533,
    lng: -70.757107,
    descripcion: "Tiendas"
  },
  {
    id: 52,
    placeId: "ChIJx-BY4TzDYpYRElt_VEIGAVE",
    nombre: "accesorios de mascotas",
    lat: -33.431688,
    lng: -70.737540,
    descripcion: "Tiendas"
  },
  {
    id: 53,
    placeId: "ChIJIaijFFHRYpYRTRk5P5VLSZ8",
    nombre: "Acuarios Acuarifel",
    lat: -33.551821,
    lng: -70.614067,
    descripcion: "Tiendas"
  },
  {
    id: 54,
    placeId: "ChIJm5Eqgm_RYpYR6johZEZY6Xk",
    nombre: "Acuarios Vicepez",
    lat: -33.535085,
    lng: -70.620355,
    descripcion: "Tiendas"
  },
  {
    id: 55,
    placeId: "ChIJPw0Q7VLPYpYRiHQ1Bc_GLOo",
    nombre: "Agus Pet Store",
    lat: -33.449081,
    lng: -70.595380,
    descripcion: "Tiendas"
  },
  {
    id: 56,
    placeId: "ChIJe4Fv22vQYpYRk3oGdXZm3HY",
    nombre: "Ahorro Punto Pet",
    lat: -33.507529,
    lng: -70.601913,
    descripcion: "Tiendas"
  },
  {
    id: 57,
    placeId: "ChIJAQNjTgzRYpYRlP_ncFRHcHM",
    nombre: "Ahorro Punto Pet",
    lat: -33.485632,
    lng: -70.559425,
    descripcion: "Tiendas"
  },
  {
    id: 58,
    placeId: "ChIJkfbMDPjXYpYR8EBnE1Dt6qU",
    nombre: "Ahorropet Puente Alto",
    lat: -33.593587,
    lng: -70.566717,
    descripcion: "Tiendas"
  },
  {
    id: 59,
    placeId: "ChIJuX9yEdnRYpYR9t5XAceHkYI",
    nombre: "Aiko Mascotas",
    lat: -33.506486,
    lng: -70.591253,
    descripcion: "Tiendas"
  },
  {
    id: 60,
    placeId: "ChIJwYeEL5faYpYRwxVEBE_4WT0",
    nombre: "Aiwin Pet Shop",
    lat: -33.512861,
    lng: -70.635991,
    descripcion: "Tiendas"
  },
  {
    id: 61,
    placeId: "ChIJrVlWVvXDYpYRZIqX5olKkCs",
    nombre: "Alannys Boutique",
    lat: -33.453384,
    lng: -70.763368,
    descripcion: "Tiendas"
  },
  {
    id: 62,
    placeId: "ChIJRYDy7pvFYpYRgtNvaFPwdlU",
    nombre: "Alaska premium",
    lat: -33.537623,
    lng: -70.688387,
    descripcion: "Tiendas"
  },
  {
    id: 63,
    placeId: "ChIJ4_cvGbYfY5YRJqpwSqyValU",
    nombre: "ALASKAT PET SHOP",
    lat: -33.750881,
    lng: -70.863276,
    descripcion: "Tiendas"
  },
  {
    id: 64,
    placeId: "ChIJG3TzHBbFYpYRkNcHPFQN_8U",
    nombre: "Alefab Pets & Love",
    lat: -33.432657,
    lng: -70.689001,
    descripcion: "Tiendas"
  },
  {
    id: 65,
    placeId: "ChIJfUb7O9baYpYRPaKYvrBud_0",
    nombre: "Alfa",
    lat: -33.499130,
    lng: -70.668269,
    descripcion: "Tiendas"
  },
  {
    id: 66,
    placeId: "ChIJR-em62jXYpYRrYdKh8XIchw",
    nombre: "Alfa Premium Pets",
    lat: -33.602827,
    lng: -70.593287,
    descripcion: "Tiendas"
  },
  {
    id: 67,
    placeId: "ChIJqfCr7b3DYpYRLA0d-a56NyI",
    nombre: "Alimento cerro navia",
    lat: -33.429722,
    lng: -70.734230,
    descripcion: "Tiendas"
  },
  {
    id: 68,
    placeId: "ChIJMQUBMmq3Y5YR0ok5E_Xvmak",
    nombre: "alimento de mascotas",
    lat: -33.918922,
    lng: -71.487445,
    descripcion: "Tiendas"
  },
  {
    id: 69,
    placeId: "ChIJDfG4UV3BYpYRM0euL1IId-w",
    nombre: "Alimento de mascotas \"JACK\"",
    lat: -33.406651,
    lng: -70.740027,
    descripcion: "Tiendas"
  },
  {
    id: 70,
    placeId: "ChIJe8DrMhApY5YRKO0-zLEJkWk",
    nombre: "Alimento de mascotas el Pipa",
    lat: -33.688267,
    lng: -70.616561,
    descripcion: "Tiendas"
  },
  {
    id: 71,
    placeId: "ChIJxRA3pNXdYpYRRu3E2Hcs4gg",
    nombre: "Alimento de mascotas Escar",
    lat: -33.573970,
    lng: -70.803040,
    descripcion: "Tiendas"
  },
  {
    id: 72,
    placeId: "ChIJw4StFgDXYpYRH4mgThycz88",
    nombre: "Alimento de Mascotas Koxoxo",
    lat: -33.609956,
    lng: -70.590842,
    descripcion: "Tiendas"
  },
  {
    id: 73,
    placeId: "ChIJ4R65qz3DYpYR4HZUlgaZ8bU",
    nombre: "Alimento de mascotas Sandokan",
    lat: -33.428405,
    lng: -70.740926,
    descripcion: "Tiendas"
  },
  {
    id: 74,
    placeId: "ChIJTxC04u7DYpYRnnpGzc0UUFs",
    nombre: "Alimento De Mascotas Y Semillas Chelsi",
    lat: -33.429480,
    lng: -70.732490,
    descripcion: "Tiendas"
  },
  {
    id: 75,
    placeId: "ChIJaYYs3IvdYpYRZQUpbO9HRZg",
    nombre: "Alimento De Mascotas Y Utiles De Aseo Viviana",
    lat: -33.574187,
    lng: -70.807689,
    descripcion: "Tiendas"
  },
  {
    id: 76,
    placeId: "ChIJAVEfbkiUYpYRJhWlJ2G9Gmc",
    nombre: "Alimento Mascotas",
    lat: -33.288470,
    lng: -70.870743,
    descripcion: "Tiendas"
  },
  {
    id: 77,
    placeId: "ChIJ-wPaHsI8Y5YRO6aeKTvybwU",
    nombre: "Alimento para mascotas",
    lat: -33.869266,
    lng: -70.746984,
    descripcion: "Tiendas"
  },
  {
    id: 78,
    placeId: "ChIJaWMMma_bYpYRbAluwkvTFDA",
    nombre: "Alimento para mascotas \"EL King\"",
    lat: -33.518433,
    lng: -70.697258,
    descripcion: "Tiendas"
  },
  {
    id: 79,
    placeId: "ChIJi5YIgDjdYpYRdtzAWHPE4xo",
    nombre: "Alimento Para Mascotas \"Lunita\"",
    lat: -33.524642,
    lng: -70.788160,
    descripcion: "Tiendas"
  },
  {
    id: 80,
    placeId: "ChIJW19WgOnDYpYR0ZnpJcKHs8k",
    nombre: "Alimento para mascotas \"Mi Angelito\"",
    lat: -33.432823,
    lng: -70.737880,
    descripcion: "Tiendas"
  },
  {
    id: 81,
    placeId: "ChIJldyrzGLDYpYRNjLFkzAhLSg",
    nombre: "Alimento para mascotas en lo prado PET FOODS DOMYFER",
    lat: -33.441891,
    lng: -70.723238,
    descripcion: "Tiendas"
  },
  {
    id: 82,
    placeId: "ChIJ-wPaHsI8Y5YRO6aeKTvybwU",
    nombre: "Alimento Para Mascotas Hachiko",
    lat: -33.869266,
    lng: -70.746984,
    descripcion: "Tiendas"
  },
  {
    id: 83,
    placeId: "ChIJzdyTsTHbYpYRzTxV2bUqTB8",
    nombre: "Alimento para mascotas Luchín",
    lat: -33.549042,
    lng: -70.687320,
    descripcion: "Tiendas"
  },
  {
    id: 84,
    placeId: "ChIJrZ56nuzbYpYR1OSj8aSXeN4",
    nombre: "Alimento Para Mascotas Luirol",
    lat: -33.534042,
    lng: -70.636001,
    descripcion: "Tiendas"
  },
  {
    id: 85,
    placeId: "ChIJ9Wbv_qXRYpYR05pgMHJVnIg",
    nombre: "Alimento para mascotas Tatanes",
    lat: -33.560608,
    lng: -70.564925,
    descripcion: "Tiendas"
  },
  {
    id: 86,
    placeId: "ChIJI-U3qlgrfZYRdka-ghN44UY",
    nombre: "Alimento para mascotas Tatanes",
    lat: -33.583886,
    lng: -70.398105,
    descripcion: "Tiendas"
  },
  {
    id: 87,
    placeId: "ChIJD-7ViK7bYpYRIfICBIbP1So",
    nombre: "Alimento para mascotas Zaza pets food",
    lat: -33.558247,
    lng: -70.644581,
    descripcion: "Tiendas"
  },
  {
    id: 88,
    placeId: "ChIJmQqb2_TfYpYRh0cn5C4NQt0",
    nombre: "alimento y accesorios Luna",
    lat: -33.626976,
    lng: -70.773665,
    descripcion: "Tiendas"
  },
  {
    id: 89,
    placeId: "ChIJJ3gqGADRYpYRaHlIDhScRK8",
    nombre: "Alimento y accesorios para mascota \"donde gala \"",
    lat: -33.481260,
    lng: -70.565520,
    descripcion: "Tiendas"
  },
  {
    id: 90,
    placeId: "ChIJw_ySNiXjYpYRBX2QKU8zF0U",
    nombre: "Alimento y Accesorios Para Mascotas \"DOG\"♡",
    lat: -33.663254,
    lng: -70.928998,
    descripcion: "Tiendas"
  },
  {
    id: 91,
    placeId: "ChIJmyWyrrnbYpYRmNnL335Lm-U",
    nombre: "Alimento y accesorios para mascotas Brankito",
    lat: -33.535859,
    lng: -70.691940,
    descripcion: "Tiendas"
  },
  {
    id: 92,
    placeId: "ChIJja6AjajDYpYRXJxM3doI8Jw",
    nombre: "alimentopremiummascotas",
    lat: -33.450232,
    lng: -70.722218,
    descripcion: "Tiendas"
  },
  {
    id: 93,
    placeId: "ChIJORbzxEPdYpYRyLmNbE4Tz7E",
    nombre: "Alimentos Boby",
    lat: -33.563013,
    lng: -70.793576,
    descripcion: "Tiendas"
  },
  {
    id: 94,
    placeId: "ChIJZ_-rQwAfY5YRTvB48rsaGG0",
    nombre: "Alimentos de Lux",
    lat: -33.744709,
    lng: -70.898913,
    descripcion: "Tiendas"
  },
  {
    id: 95,
    placeId: "ChIJC5mqLHDBYpYRvtmsywCOIRI",
    nombre: "Alimentos de mascotas",
    lat: -33.414305,
    lng: -70.731925,
    descripcion: "Tiendas"
  },
  {
    id: 96,
    placeId: "ChIJz_hHFwDZYpYRLPFVudBm4so",
    nombre: "Alimentos de mascotas “El Oli”",
    lat: -33.594681,
    lng: -70.625304,
    descripcion: "Tiendas"
  },
  {
    id: 97,
    placeId: "ChIJH8PDDADjYpYR8rHt9Zv7-aA",
    nombre: "Alimentos de mascotas 2",
    lat: -33.680220,
    lng: -70.980071,
    descripcion: "Tiendas"
  },
  {
    id: 98,
    placeId: "ChIJH9DjNq_DYpYR8l4FBw-6RFQ",
    nombre: "Alimentos de mascotas CatDog Pudahuel",
    lat: -33.436399,
    lng: -70.758907,
    descripcion: "Tiendas"
  },
  {
    id: 99,
    placeId: "ChIJJyPBUQDXYpYRGvkS0pEtvLs",
    nombre: "Alimentos de mascotas Don Gastón",
    lat: -33.593352,
    lng: -70.610177,
    descripcion: "Tiendas"
  },
  {
    id: 100,
    placeId: "ChIJDdvSV2nBYpYRSkEC6Ld-Ckw",
    nombre: "Alimentos De Mascotas Isidora",
    lat: -33.401888,
    lng: -70.746039,
    descripcion: "Tiendas"
  },
  {
    id: 101,
    placeId: "ChIJL55AKQDbYpYRnKJfb9uUMsw",
    nombre: "Alimentos de mascotas odett",
    lat: -33.501970,
    lng: -70.684261,
    descripcion: "Tiendas"
  },
  {
    id: 102,
    placeId: "ChIJr3fdgqwhY5YRkpTj-KWrbz4",
    nombre: "Alimentos de Mascotas, Mabelita",
    lat: -33.725819,
    lng: -70.770522,
    descripcion: "Tiendas"
  },
  {
    id: 103,
    placeId: "ChIJnafsx8rbYpYRXBJJHOaTIuU",
    nombre: "ALIMENTOS PARA MASCOTAS",
    lat: -33.558241,
    lng: -70.670115,
    descripcion: "Tiendas"
  },
  {
    id: 104,
    placeId: "ChIJnafsx8rbYpYRXBJJHOaTIuU",
    nombre: "Alimentos para mascotas",
    lat: -33.558241,
    lng: -70.670115,
    descripcion: "Tiendas"
  },
  {
    id: 105,
    placeId: "ChIJH9DjNq_DYpYR8l4FBw-6RFQ",
    nombre: "Alimentos Para Mascotas",
    lat: -33.436399,
    lng: -70.758907,
    descripcion: "Tiendas"
  },
  {
    id: 106,
    placeId: "ChIJeUz08vdVYpYR-Bqqddm7yw4",
    nombre: "Alimentos Para Mascotas",
    lat: -33.692950,
    lng: -71.214630,
    descripcion: "Tiendas"
  },
  {
    id: 107,
    placeId: "ChIJi4WGvyHbYpYRAglgMjab9B0",
    nombre: "Alimentos para Mascotas (Petlandia_store)",
    lat: -33.546985,
    lng: -70.686770,
    descripcion: "Tiendas"
  },
  {
    id: 108,
    placeId: "ChIJIf_BWPfRYpYRa9ob79KfddA",
    nombre: "Alimentos Para Mascotas Bazar Y Paquetería M.A",
    lat: -33.480565,
    lng: -70.531477,
    descripcion: "Tiendas"
  },
  {
    id: 109,
    placeId: "ChIJo9-OgnBZYpYR0EOAvA226rE",
    nombre: "Alimentos para mascotas en el 9",
    lat: -33.518217,
    lng: -71.236596,
    descripcion: "Tiendas"
  },
  {
    id: 110,
    placeId: "ChIJl28bQYXBYpYRtdQMe68ZBAM",
    nombre: "Alimentos para mascotas Felices",
    lat: -33.418010,
    lng: -70.765013,
    descripcion: "Tiendas"
  },
  {
    id: 111,
    placeId: "ChIJqVCX5YjRYpYR7H-RhRwWXog",
    nombre: "Alimentos para Mascotas Graneros del Sur",
    lat: -33.492636,
    lng: -70.599978,
    descripcion: "Tiendas"
  },
  {
    id: 112,
    placeId: "ChIJF6TS8JvDYpYRSnOjsVqvmFI",
    nombre: "Alimentos Para Mascotas Katita",
    lat: -33.453466,
    lng: -70.733796,
    descripcion: "Tiendas"
  },
  {
    id: 113,
    placeId: "ChIJ53kXriJVYpYR1nxgh6wIZsA",
    nombre: "Alimentos Para Mascotas SAN FRANCISCO Melipilla",
    lat: -33.690997,
    lng: -71.215660,
    descripcion: "Tiendas"
  },
  {
    id: 114,
    placeId: "ChIJsTFw3Vq_YpYRrrb0nVt53qI",
    nombre: "alimentos para mascotas sasu",
    lat: -33.328095,
    lng: -70.763610,
    descripcion: "Tiendas"
  },
  {
    id: 115,
    placeId: "ChIJXaHMSgBVYpYRRnUNKoRYDAg",
    nombre: "alimentos para mascotas servet",
    lat: -33.680266,
    lng: -71.222163,
    descripcion: "Tiendas"
  },
  {
    id: 116,
    placeId: "ChIJYbSdrIrdYpYRiWaHNeWoPIA",
    nombre: "Alimentos Para Mascotas y Peluquería Canina \"Nataly\"",
    lat: -33.580092,
    lng: -70.811057,
    descripcion: "Tiendas"
  },
  {
    id: 117,
    placeId: "ChIJ1Q-JBtCxY5YRlPcjkvN3mWE",
    nombre: "alimentos san pedro",
    lat: -33.924239,
    lng: -71.463493,
    descripcion: "Tiendas"
  },
  {
    id: 118,
    placeId: "ChIJiaI1jbr9YpYRebIKbZkcTPw",
    nombre: "Alimentos y accesorios Happy Pets",
    lat: -33.683637,
    lng: -71.003915,
    descripcion: "Tiendas"
  },
  {
    id: 119,
    placeId: "ChIJvZwZrAvDYpYRzCPabLac2Xk",
    nombre: "Alimentos Y Accesorios Para Mascota \"LUKAS\"",
    lat: -33.463908,
    lng: -70.744090,
    descripcion: "Tiendas"
  },
  {
    id: 120,
    placeId: "ChIJqa136UjXYpYR0osbZv-DaLs",
    nombre: "Alimentos y Accesorios Para Mascotas Tomy",
    lat: -33.523702,
    lng: -70.629044,
    descripcion: "Tiendas"
  },
  {
    id: 121,
    placeId: "ChIJPzROZZDRYpYRkIW-OOtGeN0",
    nombre: "Alimentos y accesorios para mascotas y peluquería canina",
    lat: -33.523362,
    lng: -70.617951,
    descripcion: "Tiendas"
  },
  {
    id: 122,
    placeId: "ChIJ_dxXGgvEYpYRLO8riw4-1ic",
    nombre: "Alimentos y accesorios para mascotas Yessy",
    lat: -33.432750,
    lng: -70.712561,
    descripcion: "Tiendas"
  },
  {
    id: 123,
    placeId: "ChIJ_bevCRHHYpYRPx9ERw9EYM8",
    nombre: "alimentos y peluqueria de mascotas khloty 's",
    lat: -33.384305,
    lng: -70.663443,
    descripcion: "Tiendas"
  },
  {
    id: 124,
    placeId: "ChIJb6es8CjdYpYRIj16rj8YL3Q",
    nombre: "Alimentos Zeus",
    lat: -33.582364,
    lng: -70.811686,
    descripcion: "Tiendas"
  },
  {
    id: 125,
    placeId: "ChIJmW1VP4bZYpYRUMptspxXlmM",
    nombre: "All Market SPA",
    lat: -33.618165,
    lng: -70.639307,
    descripcion: "Tiendas"
  },
  {
    id: 126,
    placeId: "ChIJVXm3EBnHYpYRO9uWBcyTqxI",
    nombre: "Almacen Alinin (Pet Shop Alinin)",
    lat: -33.358743,
    lng: -70.689174,
    descripcion: "Tiendas"
  },
  {
    id: 127,
    placeId: "ChIJWQL_C5LXYpYRUZuQLRZ8f4Y",
    nombre: "Almendra Pet Shop - Punto Blue Express",
    lat: -33.629703,
    lng: -70.556729,
    descripcion: "Tiendas"
  },
  {
    id: 128,
    placeId: "ChIJwXNlTMyVYpYR-xrLJki7j3Y",
    nombre: "Almendra pets",
    lat: -33.294535,
    lng: -70.882926,
    descripcion: "Tiendas"
  },
  {
    id: 129,
    placeId: "ChIJY2V2TEDbYpYRNvOQNKA__zw",
    nombre: "Amascotas",
    lat: -33.531973,
    lng: -70.648617,
    descripcion: "Tiendas"
  },
  {
    id: 130,
    placeId: "ChIJG2zkgTLPYpYRBxewcHlw-Ts",
    nombre: "Amazing Pets",
    lat: -33.409998,
    lng: -70.567144,
    descripcion: "Tiendas"
  },
  {
    id: 131,
    placeId: "ChIJGRWIqgHPYpYR93MsX0mory0",
    nombre: "American Pet&Outlet",
    lat: -33.431080,
    lng: -70.577017,
    descripcion: "Tiendas"
  },
  {
    id: 132,
    placeId: "ChIJhe52JccnY5YRjPUZohqn8oI",
    nombre: "Amigales.cl - Bodega Buin",
    lat: -33.692944,
    lng: -70.707009,
    descripcion: "Tiendas"
  },
  {
    id: 133,
    placeId: "ChIJSyAP5TzFYpYRhLacQi3n7q0",
    nombre: "Amigales.cl - Tienda de Mascotas",
    lat: -33.438944,
    lng: -70.654526,
    descripcion: "Tiendas"
  },
  {
    id: 134,
    placeId: "ChIJN0_yyS4hY5YR4f70xhGOk0g",
    nombre: "Amor de mascota Pet shop",
    lat: -33.742347,
    lng: -70.746267,
    descripcion: "Tiendas"
  },
  {
    id: 135,
    placeId: "ChIJFRPd0i_HYpYRDr_ukShdNJE",
    nombre: "Amores Perrunos",
    lat: -33.379755,
    lng: -70.662798,
    descripcion: "Tiendas"
  },
  {
    id: 136,
    placeId: "ChIJQ1nGcwDdYpYRqt3pOPwcs1U",
    nombre: "Andy Pets",
    lat: -33.530086,
    lng: -70.776196,
    descripcion: "Tiendas"
  },
  {
    id: 137,
    placeId: "ChIJd6X_iB7FYpYROmg1hGlMsxU",
    nombre: "ANGELPET",
    lat: -33.464076,
    lng: -70.713120,
    descripcion: "Tiendas"
  },
  {
    id: 138,
    placeId: "ChIJRSy6hyPbYpYR8-_p9bCcgPo",
    nombre: "Ani-mall",
    lat: -33.500708,
    lng: -70.622788,
    descripcion: "Tiendas"
  },
  {
    id: 139,
    placeId: "ChIJPz_aUqzmYpYRBv_tp5SeN3g",
    nombre: "Animal",
    lat: -33.611923,
    lng: -70.898279,
    descripcion: "Tiendas"
  },
  {
    id: 140,
    placeId: "ChIJiaDdEAnQYpYRXM5TmRqFaJs",
    nombre: "Animal Care Centro de Distribución",
    lat: -33.497770,
    lng: -70.617633,
    descripcion: "Tiendas"
  },
  {
    id: 141,
    placeId: "ChIJLRztP8XZYpYR75m8CqmD5bU",
    nombre: "Animal Factor",
    lat: -33.610361,
    lng: -70.697192,
    descripcion: "Tiendas"
  },
  {
    id: 142,
    placeId: "ChIJF2OuwlXFYpYRO7OcXaMGLxA",
    nombre: "Animal Gluck",
    lat: -33.453164,
    lng: -70.624052,
    descripcion: "Tiendas"
  },
  {
    id: 143,
    placeId: "ChIJ7XQkr3HbYpYRduBUDhFdSD8",
    nombre: "Animal Kingdom Pet Shop",
    lat: -33.496378,
    lng: -70.653298,
    descripcion: "Tiendas"
  },
  {
    id: 144,
    placeId: "ChIJ_5OVQoLFYpYRWctNmAZ1Ew8",
    nombre: "Animal Lovers",
    lat: -33.490767,
    lng: -70.667375,
    descripcion: "Tiendas"
  },
  {
    id: 145,
    placeId: "ChIJK4waI5vXYpYRLDB5d602-WI",
    nombre: "Animal Lovers - El Peñon",
    lat: -33.579464,
    lng: -70.557440,
    descripcion: "Tiendas"
  },
  {
    id: 146,
    placeId: "ChIJyVf7g8vPYpYRnoKFvRwEYIE",
    nombre: "ANIMAL MARKET SPA",
    lat: -33.467651,
    lng: -70.549687,
    descripcion: "Tiendas"
  },
  {
    id: 147,
    placeId: "ChIJZz8xGz3PYpYRhG_jUH_Bn6I",
    nombre: "Animal Republic",
    lat: -33.372412,
    lng: -70.766282,
    descripcion: "Tiendas"
  },
  {
    id: 148,
    placeId: "ChIJ4_9nEtzAYpYR9VwCIiS9Uck",
    nombre: "Animal S Center",
    lat: -33.366537,
    lng: -70.735374,
    descripcion: "Tiendas"
  },
  {
    id: 149,
    placeId: "ChIJ9UmNLyLFYpYRLTOL10GIWTg",
    nombre: "Animal tech spa",
    lat: -33.408694,
    lng: -70.671817,
    descripcion: "Tiendas"
  },
  {
    id: 150,
    placeId: "ChIJr5Jw3WnFYpYRK1p0ZqgBH9g",
    nombre: "Animal Time - Punto Blue Express, Chilexpress, Starken y Mercado Libre.",
    lat: -33.454181,
    lng: -70.656503,
    descripcion: "Tiendas"
  },
  {
    id: 151,
    placeId: "ChIJ2Wxy4rrFYpYRFuf9SNspoe4",
    nombre: "Animaladas Pet Shop y Peluquería Canina",
    lat: -33.454007,
    lng: -70.652790,
    descripcion: "Tiendas"
  },
  {
    id: 152,
    placeId: "ChIJfzU2Z6K5YpYRLvAsIXIPLx0",
    nombre: "Animalarium Pet Shop",
    lat: -33.301674,
    lng: -70.689975,
    descripcion: "Tiendas"
  },
  {
    id: 153,
    placeId: "ChIJsWdmC2ZZYpYR52cH4OtHHFA",
    nombre: "Animales del Valle Distribuidora",
    lat: -33.569548,
    lng: -71.206307,
    descripcion: "Tiendas"
  },
  {
    id: 154,
    placeId: "ChIJKbflDqbhYpYRuYkO357u98M",
    nombre: "Animales del Valle PetShop",
    lat: -33.633780,
    lng: -70.875003,
    descripcion: "Tiendas"
  },
  {
    id: 155,
    placeId: "ChIJGdljkFbFYpYRKh-iTceaKrY",
    nombre: "Animall Store",
    lat: -33.457472,
    lng: -70.691000,
    descripcion: "Tiendas"
  },
  {
    id: 156,
    placeId: "ChIJD8G8ePfLaZYRpKTmmXrBMNU",
    nombre: "AnimalPet Del Valle",
    lat: -36.839056,
    lng: -73.119268,
    descripcion: "Tiendas"
  },
  {
    id: 157,
    placeId: "ChIJ9_9X_C6jYpYRDle2H0LNoCg",
    nombre: "Animalpet tiltil",
    lat: -33.142177,
    lng: -70.794796,
    descripcion: "Tiendas"
  },
  {
    id: 158,
    placeId: "ChIJ2189BwDFYpYRouRQSpVzaUY",
    nombre: "Animapets los fabres",
    lat: -33.491256,
    lng: -70.684081,
    descripcion: "Tiendas"
  },
  {
    id: 159,
    placeId: "ChIJZXVlrHNvY5YRFBt-1g9X1Y0",
    nombre: "Anita Food Pets",
    lat: -34.226221,
    lng: -70.963265,
    descripcion: "Tiendas"
  },
  {
    id: 160,
    placeId: "ChIJ6zyw2cLbYpYRedtnUTPewbw",
    nombre: "Anyerpets",
    lat: -33.549354,
    lng: -70.651554,
    descripcion: "Tiendas"
  },
  {
    id: 161,
    placeId: "ChIJhfWFUpnFYpYRM_01j1mQmYQ",
    nombre: "Apelynpet Alimentos para Mascotas",
    lat: -33.423984,
    lng: -70.702292,
    descripcion: "Tiendas"
  },
  {
    id: 162,
    placeId: "ChIJ5_w8DEPPYpYRn8kVGRlCHCE",
    nombre: "Aplicación y Tienda Online de Mascotas | Laika Mascotas | CL",
    lat: -33.428883,
    lng: -70.618955,
    descripcion: "Tiendas"
  },
  {
    id: 163,
    placeId: "ChIJaX_7-x_FYpYR_7EDFDjxAGk",
    nombre: "Aqua Pet Santiago Spa",
    lat: -33.440323,
    lng: -70.620541,
    descripcion: "Tiendas"
  },
  {
    id: 164,
    placeId: "ChIJDValhXLnYpYRa2s3pbGXD6g",
    nombre: "aqui mascotas, alimentos para mascotas y accesorios",
    lat: -33.605520,
    lng: -70.852615,
    descripcion: "Tiendas"
  },
  {
    id: 165,
    placeId: "ChIJLVSiNQDbYpYRkNR3MuxGSoc",
    nombre: "Arazun alimentos de mascotas y huevos",
    lat: -33.522814,
    lng: -70.623857,
    descripcion: "Tiendas"
  },
  {
    id: 166,
    placeId: "ChIJH_jngIPbYpYRNDlJ4b62KDI",
    nombre: "Arena para gatos por mayor",
    lat: -33.536395,
    lng: -70.692552,
    descripcion: "Tiendas"
  },
  {
    id: 167,
    placeId: "ChIJCxnRHB7FYpYRYJVxnpHjOmg",
    nombre: "Arena para Mascotas",
    lat: -33.474716,
    lng: -70.682257,
    descripcion: "Tiendas"
  },
  {
    id: 168,
    placeId: "ChIJtYGtu0PjYpYRtO6wupHBkM0",
    nombre: "Arenitas Miau Talagante",
    lat: -33.672345,
    lng: -70.942130,
    descripcion: "Tiendas"
  },
  {
    id: 169,
    placeId: "ChIJhRU46SDFYpYRYpn-TUUx4vY",
    nombre: "Armijo Pet",
    lat: -33.482396,
    lng: -70.685866,
    descripcion: "Tiendas"
  },
  {
    id: 170,
    placeId: "ChIJ_WADuAvDYpYR6tjMReCLYQM",
    nombre: "Articulos Fabian",
    lat: -33.424683,
    lng: -70.745098,
    descripcion: "Tiendas"
  },
  {
    id: 171,
    placeId: "ChIJCQUeTRLdYpYRBU5fgeroq3c",
    nombre: "AstroPet",
    lat: -33.549802,
    lng: -70.791810,
    descripcion: "Tiendas"
  },
  {
    id: 172,
    placeId: "ChIJ1W8a_0_1YpYRIHqeypIVV5E",
    nombre: "ATOM SHOP SPA",
    lat: -33.468647,
    lng: -71.103753,
    descripcion: "Tiendas"
  },
  {
    id: 173,
    placeId: "ChIJtfcEHADjYpYRbQNB5lCzORk",
    nombre: "Autolavado de Mascotas Guaupisimo",
    lat: -33.667449,
    lng: -70.925023,
    descripcion: "Tiendas"
  },
  {
    id: 174,
    placeId: "ChIJl5rFKwDjYpYRWBB8516O3GU",
    nombre: "Autolavado de Mascotas Talagante",
    lat: -33.667449,
    lng: -70.925023,
    descripcion: "Tiendas"
  },
  {
    id: 175,
    placeId: "ChIJtdLxEQ7DYpYRicbm2CUiyro",
    nombre: "AviarioPicaflor SpA",
    lat: -33.475328,
    lng: -70.742007,
    descripcion: "Tiendas"
  },
  {
    id: 176,
    placeId: "ChIJF5pkGQDfYpYR-9RQ6ypNYLg",
    nombre: "Avícola Garcés C🐓",
    lat: -33.605167,
    lng: -70.789294,
    descripcion: "Tiendas"
  },
  {
    id: 177,
    placeId: "ChIJnfDclQIhY5YRfJxY8xJnfwk",
    nombre: "Ba Guau - Alimento de Mascotas",
    lat: -33.748922,
    lng: -70.746903,
    descripcion: "Tiendas"
  },
  {
    id: 178,
    placeId: "ChIJH_zjIw_XYpYRxOy3EgGdGos",
    nombre: "BabyPet Tienda de mascotas",
    lat: -33.608383,
    lng: -70.568347,
    descripcion: "Tiendas"
  },
  {
    id: 179,
    placeId: "ChIJvyl7_KHRYpYRBmbHePkBfsc",
    nombre: "Baloo Pet's Shop",
    lat: -33.483803,
    lng: -70.584929,
    descripcion: "Tiendas"
  },
  {
    id: 180,
    placeId: "ChIJS-wmy3rpYpYRs8ePOOfpQEw",
    nombre: "Baltazar Mascotas",
    lat: -33.449570,
    lng: -70.838183,
    descripcion: "Tiendas"
  },
  {
    id: 181,
    placeId: "ChIJLxTdP-bbYpYRcuYPhYCFx8I",
    nombre: "Baly Pet",
    lat: -33.508933,
    lng: -70.659460,
    descripcion: "Tiendas"
  },
  {
    id: 182,
    placeId: "ChIJuSPL0RC7YpYRyhw9Dwe-hNE",
    nombre: "Bandido Pet SpA",
    lat: -33.197961,
    lng: -70.651417,
    descripcion: "Tiendas"
  },
  {
    id: 183,
    placeId: "ChIJk0Spb-vbYpYR9dw_gkZbqKw",
    nombre: "Barf Chile",
    lat: -33.495246,
    lng: -70.637747,
    descripcion: "Tiendas"
  },
  {
    id: 184,
    placeId: "ChIJoQ0wk2zPYpYRDOeb0la7uQ0",
    nombre: "Barfood Alimento para Mascotas",
    lat: -33.374203,
    lng: -70.647773,
    descripcion: "Tiendas"
  },
  {
    id: 185,
    placeId: "ChIJQ__N2unPYpYRmbtNdpcWu-k",
    nombre: "Barrio Mascotas",
    lat: -33.459396,
    lng: -70.619435,
    descripcion: "Tiendas"
  },
  {
    id: 186,
    placeId: "ChIJgzbhCSXFYpYRQX25W5k0qC8",
    nombre: "Bassa Pet",
    lat: -33.478063,
    lng: -70.660348,
    descripcion: "Tiendas"
  },
  {
    id: 187,
    placeId: "ChIJJT3efQIhY5YREvx1kb1au64",
    nombre: "Bassa Pet",
    lat: -33.734312,
    lng: -70.722269,
    descripcion: "Tiendas"
  },
  {
    id: 188,
    placeId: "ChIJQ9F8yGqXYpYRGNrFfC3XimM",
    nombre: "Batupets",
    lat: -33.231393,
    lng: -70.812564,
    descripcion: "Tiendas"
  },
  {
    id: 189,
    placeId: "ChIJgfv4J-v_YpYROhPY5btGNcc",
    nombre: "Bazar alimento y accesorios para mascotas Fortuna",
    lat: -33.674782,
    lng: -71.172937,
    descripcion: "Tiendas"
  },
  {
    id: 190,
    placeId: "ChIJO43S5V7LYpYRC-azqrlms2g",
    nombre: "BAZAR ANIMAL",
    lat: -33.355565,
    lng: -70.511216,
    descripcion: "Tiendas"
  },
  {
    id: 191,
    placeId: "ChIJg5zHKX7bYpYR0QkTBpdGS58",
    nombre: "Bazar y alimento de mascotas jacqueline",
    lat: -33.552245,
    lng: -70.689377,
    descripcion: "Tiendas"
  },
  {
    id: 192,
    placeId: "ChIJs0ozasjBYpYRRkL6KlXmnDI",
    nombre: "Bazar y Alimento para Mascotas \" HAPPY \"",
    lat: -33.360378,
    lng: -70.759407,
    descripcion: "Tiendas"
  },
  {
    id: 193,
    placeId: "ChIJzykhbSPRYpYRmOA_sep4pa0",
    nombre: "Beautytech Oasis spa",
    lat: -33.508003,
    lng: -70.579598,
    descripcion: "Tiendas"
  },
  {
    id: 194,
    placeId: "ChIJfV6A7NDFYpYRUjTbzBiGySw",
    nombre: "Befoods Mayorista / Venta por Mayor",
    lat: -33.442240,
    lng: -70.708753,
    descripcion: "Tiendas"
  },
  {
    id: 195,
    placeId: "ChIJ4z7Ud8zaYpYRShoJVEW84Ps",
    nombre: "BerlinHappy.cl | Tienda de mascotas | Veterinaria y Peluquería",
    lat: -33.492823,
    lng: -70.651346,
    descripcion: "Tiendas"
  },
  {
    id: 196,
    placeId: "ChIJ4z7Ud8zaYpYRShoJVEW84Ps",
    nombre: "BerlinHappy.cl | Tienda de mascotas | Veterinaria y Peluquería",
    lat: -33.492823,
    lng: -70.651346,
    descripcion: "Tiendas"
  },
  {
    id: 197,
    placeId: "ChIJ4z7Ud8zaYpYRShoJVEW84Ps",
    nombre: "BerlinHappy.cl | Tienda de mascotas | Veterinaria y Peluquería",
    lat: -33.492823,
    lng: -70.651346,
    descripcion: "Tiendas"
  },
  {
    id: 198,
    placeId: "ChIJn7YWQcDOYpYRkaQcvR4vMu8",
    nombre: "Best for Pets",
    lat: -33.389078,
    lng: -70.548967,
    descripcion: "Tiendas"
  },
  {
    id: 199,
    placeId: "ChIJeWi7PasSSWYRCVwJqubWrXE",
    nombre: "Bienestar Animal By Flores de Paz",
    lat: -33.401345,
    lng: -70.580981,
    descripcion: "Tiendas"
  },
  {
    id: 200,
    placeId: "ChIJPQQEX2bRYpYRa42CKX8Kgs4",
    nombre: "Biestetic - centro de Bienestar Animal en Peñalolén",
    lat: -33.483759,
    lng: -70.557430,
    descripcion: "Tiendas"
  },
  {
    id: 201,
    placeId: "ChIJ9TT40NzHYpYRHX2SY-9-dQo",
    nombre: "BigoPet",
    lat: -33.388630,
    lng: -70.684302,
    descripcion: "Tiendas"
  },
  {
    id: 202,
    placeId: "ChIJiZi_0ObbYpYRzMhraiGO1Rc",
    nombre: "Bigotes Pet Shop",
    lat: -33.534590,
    lng: -70.670240,
    descripcion: "Tiendas"
  },
  {
    id: 203,
    placeId: "ChIJm0kiMQAhY5YRHjlIASDNFk8",
    nombre: "Bigotes Pet Shop",
    lat: -33.747613,
    lng: -70.735223,
    descripcion: "Tiendas"
  },
  {
    id: 204,
    placeId: "ChIJWwyNdFTPYpYREIaOlikQU7w",
    nombre: "Bigotesblancos tienda online y criadero",
    lat: -33.579556,
    lng: -70.825054,
    descripcion: "Tiendas"
  },
  {
    id: 205,
    placeId: "ChIJucARX1XJYpYRoa78m845y2Q",
    nombre: "Bobi Petshop",
    lat: -33.383960,
    lng: -70.615045,
    descripcion: "Tiendas"
  },
  {
    id: 206,
    placeId: "ChIJzaCWQinjYpYRXO7q_gDReys",
    nombre: "Bodega El Cruce",
    lat: -33.659642,
    lng: -70.918503,
    descripcion: "Tiendas"
  },
  {
    id: 207,
    placeId: "ChIJB2MRyS4LY5YReRirf98EKoM",
    nombre: "BODEGA ISRAEL",
    lat: -34.031644,
    lng: -71.098683,
    descripcion: "Tiendas"
  },
  {
    id: 208,
    placeId: "ChIJN71z073jYpYRjbP4eSvkvj8",
    nombre: "Bodega San Jose",
    lat: -33.681288,
    lng: -70.981509,
    descripcion: "Tiendas"
  },
  {
    id: 209,
    placeId: "ChIJudxTkRfQYpYRiPAfmBK3F-g",
    nombre: "Bodegón de Don Julio",
    lat: -33.492647,
    lng: -70.600021,
    descripcion: "Tiendas"
  },
  {
    id: 210,
    placeId: "ChIJZzrSEAAhY5YRobQnOjTjE9Q",
    nombre: "Bodopet alimentos y accesorios de mascotas",
    lat: -33.712184,
    lng: -70.744500,
    descripcion: "Tiendas"
  },
  {
    id: 211,
    placeId: "ChIJtYdtA7DBYpYRZKc_ppMOhRM",
    nombre: "Bonappetit",
    lat: -33.353603,
    lng: -70.724341,
    descripcion: "Tiendas"
  },
  {
    id: 212,
    placeId: "ChIJ62rCh7bbYpYRsu0tse329Zk",
    nombre: "Boomerang Pet Shop",
    lat: -33.514945,
    lng: -70.673767,
    descripcion: "Tiendas"
  },
  {
    id: 213,
    placeId: "ChIJEzuJO1PnYpYRHntLrPNygmU",
    nombre: "Borderio Pet&Clean",
    lat: -33.562571,
    lng: -70.823046,
    descripcion: "Tiendas"
  },
  {
    id: 214,
    placeId: "ChIJQ_TYCRbPYpYR_LSm18zNYhk",
    nombre: "Botiquín Mascotas Las Condes",
    lat: -33.411012,
    lng: -70.562764,
    descripcion: "Tiendas"
  },
  {
    id: 215,
    placeId: "ChIJxz-dHULPYpYR8LR3jDdVXp0",
    nombre: "Braloy Mascotas",
    lat: -33.452931,
    lng: -70.566423,
    descripcion: "Tiendas"
  },
  {
    id: 216,
    placeId: "ChIJPfDGjv7OYpYRb0QJLV14b9Y",
    nombre: "Braloy Mascotas",
    lat: -33.428280,
    lng: -70.571005,
    descripcion: "Tiendas"
  },
  {
    id: 217,
    placeId: "ChIJsx6pVnrFYpYRid9aMiFNla0",
    nombre: "Braloy Mascotas",
    lat: -33.450491,
    lng: -70.630990,
    descripcion: "Tiendas"
  },
  {
    id: 218,
    placeId: "ChIJ47zsZo7PYpYRm-CwC_GqbP4",
    nombre: "Braloy Mascotas",
    lat: -33.434161,
    lng: -70.587123,
    descripcion: "Tiendas"
  },
  {
    id: 219,
    placeId: "ChIJY2yeNjnPYpYRgAxEtALSZbM",
    nombre: "Braloy Mascotas",
    lat: -33.388999,
    lng: -70.564267,
    descripcion: "Tiendas"
  },
  {
    id: 220,
    placeId: "ChIJ-Wb8OMMhY5YRyaPT72jSmtw",
    nombre: "Buin Pet",
    lat: -33.732128,
    lng: -70.747913,
    descripcion: "Tiendas"
  },
  {
    id: 221,
    placeId: "ChIJ_YJwhNjdYpYRfkxBb6_8XMo",
    nombre: "C H I C H I Alimento Para Mascotas",
    lat: -33.561349,
    lng: -70.797896,
    descripcion: "Tiendas"
  },
  {
    id: 222,
    placeId: "ChIJT4Lc2_6fYpYRMz_BvxJyulY",
    nombre: "C y D Alimentos para Mascotas y más",
    lat: -33.008913,
    lng: -70.890679,
    descripcion: "Tiendas"
  },
  {
    id: 223,
    placeId: "ChIJxXdM3_xVYpYR0U-ujG8CWeg",
    nombre: "CABURGUAU",
    lat: -33.683199,
    lng: -71.232107,
    descripcion: "Tiendas"
  },
  {
    id: 224,
    placeId: "ChIJVVH2qDfPYpYRv1S71aPhLqA",
    nombre: "CAKP PETS SHOP",
    lat: -33.453306,
    lng: -70.620466,
    descripcion: "Tiendas"
  },
  {
    id: 225,
    placeId: "ChIJhTieHt4jY5YR1mnotpGDLLQ",
    nombre: "Calcetin",
    lat: -33.812193,
    lng: -70.731410,
    descripcion: "Tiendas"
  },
  {
    id: 226,
    placeId: "ChIJZ_RlHM_bYpYRyTE4mMOEARo",
    nombre: "Camargo pet shop",
    lat: -33.578672,
    lng: -70.684849,
    descripcion: "Tiendas"
  },
  {
    id: 227,
    placeId: "ChIJLd6-xcXzYpYR-4d-TktAqtY",
    nombre: "Canarot Pet",
    lat: -33.427969,
    lng: -71.025310,
    descripcion: "Tiendas"
  },
  {
    id: 228,
    placeId: "ChIJ_ZtoNt7FYpYRz0V0y4tkARg",
    nombre: "candix",
    lat: -33.450078,
    lng: -70.713061,
    descripcion: "Tiendas"
  },
  {
    id: 229,
    placeId: "ChIJA69E-GX_YpYRgFo5q88YIqQ",
    nombre: "Caneela.pets",
    lat: -33.676837,
    lng: -71.134911,
    descripcion: "Tiendas"
  },
  {
    id: 230,
    placeId: "ChIJB24tQVnGYpYR5tr7zoy25q0",
    nombre: "Caniles certificados - pet shop Marta y Ale",
    lat: -33.376928,
    lng: -70.664574,
    descripcion: "Tiendas"
  },
  {
    id: 231,
    placeId: "ChIJObOrC4_DYpYRIDL92C1scE8",
    nombre: "Capitán Simón Pets",
    lat: -33.438100,
    lng: -70.720174,
    descripcion: "Tiendas"
  },
  {
    id: 232,
    placeId: "ChIJ-8wYVzHYYpYRIozU6HUM-Ew",
    nombre: "Carbón La Loma & Alimentos Gaucho Mascotas",
    lat: -33.622364,
    lng: -70.637462,
    descripcion: "Tiendas"
  },
  {
    id: 233,
    placeId: "ChIJidFiCxnBYpYR6wy0RyrkAAQ",
    nombre: "Cariño Peludo Comida Premium",
    lat: -33.358521,
    lng: -70.737399,
    descripcion: "Tiendas"
  },
  {
    id: 234,
    placeId: "ChIJt-wd3xmrY5YRp4KPdj4G-8g",
    nombre: "Casa de Mascotas 980",
    lat: -33.771735,
    lng: -71.260456,
    descripcion: "Tiendas"
  },
  {
    id: 235,
    placeId: "ChIJKR4xn_HnYpYRZKdoqdoMT-4",
    nombre: "Casa Guau",
    lat: -33.573148,
    lng: -70.828134,
    descripcion: "Tiendas"
  },
  {
    id: 236,
    placeId: "ChIJi9M5DBXhYpYRPQ3ifWX7tfY",
    nombre: "Casa Guau Peñaflor",
    lat: -33.610331,
    lng: -70.865121,
    descripcion: "Tiendas"
  },
  {
    id: 237,
    placeId: "ChIJYQTkxLfDYpYRPG8OIF5xaqI",
    nombre: "Casa Huella Pets Shop",
    lat: -33.480214,
    lng: -70.733682,
    descripcion: "Tiendas"
  },
  {
    id: 238,
    placeId: "ChIJZ8GIEeDZYpYRkANAZxIIVy4",
    nombre: "CasMau Pet Shop, tienda de mascota y peluquería canina",
    lat: -33.609622,
    lng: -70.679953,
    descripcion: "Tiendas"
  },
  {
    id: 239,
    placeId: "ChIJrwacWADDYpYRbTCVLAc0d-w",
    nombre: "Castillo Pets",
    lat: -33.455205,
    lng: -70.739103,
    descripcion: "Tiendas"
  },
  {
    id: 240,
    placeId: "ChIJO2uDfgDFYpYRNkZjuBeE6Sc",
    nombre: "Cat Republic Pet Shop",
    lat: -33.446111,
    lng: -70.626268,
    descripcion: "Tiendas"
  },
  {
    id: 241,
    placeId: "ChIJb25ZmfTDYpYRBxUdpFeczPA",
    nombre: "Cat.pillo",
    lat: -33.488932,
    lng: -70.721044,
    descripcion: "Tiendas"
  },
  {
    id: 242,
    placeId: "ChIJy6Ra5i_PYpYRk6NfEBjBBMw",
    nombre: "Catdogshop Ñuñoa",
    lat: -33.451636,
    lng: -70.617752,
    descripcion: "Tiendas"
  },
  {
    id: 243,
    placeId: "ChIJwWN5ptrHYpYRELipFbKTULM",
    nombre: "CBS Mascotas",
    lat: -33.364696,
    lng: -70.670238,
    descripcion: "Tiendas"
  },
  {
    id: 244,
    placeId: "ChIJhUUxbwDLYpYRhkM31aDWfF8",
    nombre: "Centro de la Mascota",
    lat: -33.358446,
    lng: -70.506545,
    descripcion: "Tiendas"
  },
  {
    id: 245,
    placeId: "ChIJPz_aUqzmYpYRBv_tp5SeN3g",
    nombre: "Centro Veterinario de Pequeños Animales",
    lat: -33.611923,
    lng: -70.898279,
    descripcion: "Tiendas"
  },
  {
    id: 246,
    placeId: "ChIJuUVMq_7nYpYRngdphEMx3ek",
    nombre: "Centro Veterinario Los Aromos",
    lat: -33.572923,
    lng: -70.828469,
    descripcion: "Tiendas"
  },
  {
    id: 247,
    placeId: "ChIJ4QXnvBXHYpYRzXjkmQGvnIM",
    nombre: "CENTRO VETERINARIO MASCOTAS RENCA",
    lat: -33.403424,
    lng: -70.707670,
    descripcion: "Tiendas"
  },
  {
    id: 248,
    placeId: "ChIJUbzR3RDJYpYRhaQiWW6XTpU",
    nombre: "CentroPet - Alimentos y Accesorios para Mascotas",
    lat: -33.388323,
    lng: -70.618464,
    descripcion: "Tiendas"
  },
  {
    id: 249,
    placeId: "ChIJo8vX18uXYpYRfVarxnYBVxk",
    nombre: "CHACABUCO PETS",
    lat: -33.229058,
    lng: -70.813830,
    descripcion: "Tiendas"
  },
  {
    id: 250,
    placeId: "ChIJNS71u7jRYpYRVnQZ0gff7mA",
    nombre: "Chamin Petshop Tienda para Mascotas 🐾",
    lat: -33.513085,
    lng: -70.606811,
    descripcion: "Tiendas"
  },
  {
    id: 251,
    placeId: "ChIJQ3uycebEYpYRZ8zzY6ZX5go",
    nombre: "Champion S A",
    lat: -33.467433,
    lng: -70.679300,
    descripcion: "Tiendas"
  },
  {
    id: 252,
    placeId: "ChIJjTmFCCXHYpYRI55pPM4OToQ",
    nombre: "Charlie's Pets",
    lat: -33.392805,
    lng: -70.682512,
    descripcion: "Tiendas"
  },
  {
    id: 253,
    placeId: "ChIJjTmFCCXHYpYRI55pPM4OToQ",
    nombre: "Charlie's Pets",
    lat: -33.392805,
    lng: -70.682512,
    descripcion: "Tiendas"
  },
  {
    id: 254,
    placeId: "ChIJgUKNqznDYpYRpQ0ZQbVo1qg",
    nombre: "Chimuelo.cl Productos y accesorios para Mascotas",
    lat: -33.490953,
    lng: -70.743897,
    descripcion: "Tiendas"
  },
  {
    id: 255,
    placeId: "ChIJX0DNagDDYpYRf6xDS10Wd7k",
    nombre: "Cholito Petshop",
    lat: -33.432724,
    lng: -70.727312,
    descripcion: "Tiendas"
  },
  {
    id: 256,
    placeId: "ChIJt6MGrvnFYpYRHxhRFf_IZKY",
    nombre: "Clan de las Mascotas",
    lat: -33.454697,
    lng: -70.705556,
    descripcion: "Tiendas"
  },
  {
    id: 257,
    placeId: "ChIJOTn2oybRYpYRahLtuPiS0Lo",
    nombre: "Clinica Veterinaria & PetShop Paws Peñalolen",
    lat: -33.508967,
    lng: -70.544933,
    descripcion: "Tiendas"
  },
  {
    id: 258,
    placeId: "ChIJZXs1KpRVYpYRicguXob8p7E",
    nombre: "CLINICA VETERINARIA DIAGNOPET MELIPILLA",
    lat: -33.691586,
    lng: -71.212824,
    descripcion: "Tiendas"
  },
  {
    id: 259,
    placeId: "ChIJl6Q2HBv9YpYRGnx25x-F7Pk",
    nombre: "Clínica Veterinaria El Amanecer",
    lat: -33.688179,
    lng: -71.039487,
    descripcion: "Tiendas"
  },
  {
    id: 260,
    placeId: "ChIJ_w65ct3iYpYR8y174oC409c",
    nombre: "Clínica Veterinaria Hotel Y Guardería El Labrador",
    lat: -33.680784,
    lng: -70.981151,
    descripcion: "Tiendas"
  },
  {
    id: 261,
    placeId: "ChIJmQo5zPrLYpYR6tUPEzyfqgE",
    nombre: "Clinica Veterinaria Los Andes Sucursal La Dehesa",
    lat: -33.345215,
    lng: -70.522115,
    descripcion: "Tiendas"
  },
  {
    id: 262,
    placeId: "ChIJmxT83UbeYpYRo05Zyt5Dtbo",
    nombre: "Clínica Veterinaria Montvet",
    lat: -33.625177,
    lng: -70.784559,
    descripcion: "Tiendas"
  },
  {
    id: 263,
    placeId: "ChIJ8Y5PV6P1YpYR9n0rQN0bb7I",
    nombre: "Clínica Veterinaria Pulmavet",
    lat: -33.468827,
    lng: -71.103463,
    descripcion: "Tiendas"
  },
  {
    id: 264,
    placeId: "ChIJry8dMNtVYpYR_r-2lAh6V9Y",
    nombre: "Clinica Veterinaria Salud Mascotas",
    lat: -33.681499,
    lng: -71.198819,
    descripcion: "Tiendas"
  },
  {
    id: 265,
    placeId: "ChIJ8WjSVovHYpYRT_AJLhjrPq4",
    nombre: "Clínica veterinaria SocialVet",
    lat: -33.364362,
    lng: -70.678074,
    descripcion: "Tiendas"
  },
  {
    id: 266,
    placeId: "ChIJgSJ5s1EjY5YR9asSZEKnaok",
    nombre: "Clínica veterinaria The Kiltros Pet",
    lat: -33.734101,
    lng: -70.732424,
    descripcion: "Tiendas"
  },
  {
    id: 267,
    placeId: "ChIJF7SaxoHFYpYR4BjxPyKT_T8",
    nombre: "Clínica Veterinaria Vet Friendly Quinta Normal",
    lat: -33.432417,
    lng: -70.689988,
    descripcion: "Tiendas"
  },
  {
    id: 268,
    placeId: "ChIJF9oVm8bWYpYRAeSTgHKbUy8",
    nombre: "Clínica Veterinaria VetCollie (ex PH GABRIELA)",
    lat: -33.574030,
    lng: -70.555842,
    descripcion: "Tiendas"
  },
  {
    id: 269,
    placeId: "ChIJIwV2k9wLY5YR5umkeivY0Tk",
    nombre: "Clínica y farmacia Veterinaria Mezcovet",
    lat: -34.031331,
    lng: -71.102002,
    descripcion: "Tiendas"
  },
  {
    id: 270,
    placeId: "ChIJISic6AfFYpYRlk1PnE8ZHbk",
    nombre: "Clinimascotas",
    lat: -33.481672,
    lng: -70.698653,
    descripcion: "Tiendas"
  },
  {
    id: 271,
    placeId: "ChIJA5Qxm8TRYpYRedGlKvxCqDA",
    nombre: "Club Animal",
    lat: -33.486448,
    lng: -70.556942,
    descripcion: "Tiendas"
  },
  {
    id: 272,
    placeId: "ChIJO8DKFUbPYpYRItrwaPswtGQ",
    nombre: "Club de Perros y Gatos",
    lat: -33.423679,
    lng: -70.581198,
    descripcion: "Tiendas"
  },
  {
    id: 273,
    placeId: "ChIJDwSpGVjPYpYRMhwtMybeDU0",
    nombre: "Club de Perros y Gatos Av. Providencia 2109",
    lat: -33.422628,
    lng: -70.610836,
    descripcion: "Tiendas"
  },
  {
    id: 274,
    placeId: "ChIJtUvVVVnPYpYREy6HwrSlHeg",
    nombre: "Club de Perros y Gatos Avenida Ossa",
    lat: -33.441135,
    lng: -70.573169,
    descripcion: "Tiendas"
  },
  {
    id: 275,
    placeId: "ChIJ-a21KGbbYpYRbEqyFeS11WQ",
    nombre: "Club de Perros y Gatos Gran Avenida 5108",
    lat: -33.500593,
    lng: -70.653870,
    descripcion: "Tiendas"
  },
  {
    id: 276,
    placeId: "ChIJ_aA29XPPYpYRti4Q97KCSjo",
    nombre: "Club de Perros y Gatos La Reina",
    lat: -33.439906,
    lng: -70.556211,
    descripcion: "Tiendas"
  },
  {
    id: 277,
    placeId: "ChIJO8DKFUbPYpYRItrwaPswtGQ",
    nombre: "Club de Perros y Gatos Las Condes",
    lat: -33.423679,
    lng: -70.581198,
    descripcion: "Tiendas"
  },
  {
    id: 278,
    placeId: "ChIJOdIhWmnPYpYR1BH0PP6ABnc",
    nombre: "Club de Perros y Gatos Los Leones",
    lat: -33.421723,
    lng: -70.604891,
    descripcion: "Tiendas"
  },
  {
    id: 279,
    placeId: "ChIJPxa3parFYpYRwQ3m-DuvvSA",
    nombre: "Club de Perros y Gatos Mac Iver",
    lat: -33.437301,
    lng: -70.647250,
    descripcion: "Tiendas"
  },
  {
    id: 280,
    placeId: "ChIJO-2K1L_PYpYRhFd_KknUSUA",
    nombre: "Club de Perros y Gatos Rotonda Grecia",
    lat: -33.468997,
    lng: -70.575617,
    descripcion: "Tiendas"
  },
  {
    id: 281,
    placeId: "ChIJq8NKWNnPYpYRu_s3ivGBCRc",
    nombre: "Club de Perros y Gatos Tienda Irarrazaval",
    lat: -33.453234,
    lng: -70.616379,
    descripcion: "Tiendas"
  },
  {
    id: 282,
    placeId: "ChIJFa0T5pXRYpYRnbZFYZIiR5I",
    nombre: "Club de Roly",
    lat: -33.550135,
    lng: -70.618368,
    descripcion: "Tiendas"
  },
  {
    id: 283,
    placeId: "ChIJJcG915TJYpYRrczApNcMotI",
    nombre: "Club Patitas",
    lat: -33.387785,
    lng: -70.566879,
    descripcion: "Tiendas"
  },
  {
    id: 284,
    placeId: "ChIJUXKJ9PRXYpYRkZduhms49bY",
    nombre: "Comercial Del Campo",
    lat: -33.580049,
    lng: -71.215006,
    descripcion: "Tiendas"
  },
  {
    id: 285,
    placeId: "ChIJ7WUlsWILY5YRT7fKk_S21MU",
    nombre: "Comercial LA PIRCA spa venta alimentos mascotas",
    lat: -34.022087,
    lng: -71.114026,
    descripcion: "Tiendas"
  },
  {
    id: 286,
    placeId: "ChIJ97JEqbIhY5YReBh0v_S3EG4",
    nombre: "Comercial Molly's",
    lat: -33.737165,
    lng: -70.757924,
    descripcion: "Tiendas"
  },
  {
    id: 287,
    placeId: "ChIJmfl7sgXHYpYRiAoe0QIWtdw",
    nombre: "Comercial R&E SpA",
    lat: -33.355520,
    lng: -70.677419,
    descripcion: "Tiendas"
  },
  {
    id: 288,
    placeId: "ChIJgxv6DQDjYpYRR2tvOK1nmPE",
    nombre: "Comercial s ltda",
    lat: -33.657788,
    lng: -70.913914,
    descripcion: "Tiendas"
  },
  {
    id: 289,
    placeId: "ChIJvdtSttdVYpYRv0RCWrFo7b0",
    nombre: "Comercial San Alonso",
    lat: -33.692002,
    lng: -71.217192,
    descripcion: "Tiendas"
  },
  {
    id: 290,
    placeId: "ChIJVXM9SvZVYpYRDyvsITZ1vtE",
    nombre: "Comercial San Pablo",
    lat: -33.696838,
    lng: -71.219040,
    descripcion: "Tiendas"
  },
  {
    id: 291,
    placeId: "ChIJVWSrZDWxY5YRGxahKcGrGr4",
    nombre: "Comercial seguel",
    lat: -33.893822,
    lng: -71.456901,
    descripcion: "Tiendas"
  },
  {
    id: 292,
    placeId: "ChIJd5__m_PFYpYRq0a0vH5HACw",
    nombre: "Comercializadora de alimentos para mascotas R&R",
    lat: -33.486070,
    lng: -70.664935,
    descripcion: "Tiendas"
  },
  {
    id: 293,
    placeId: "ChIJ-Rbu34TbYpYRP5WdoIAguxI",
    nombre: "Comercializadora Pets a Bordo SpA",
    lat: -33.521046,
    lng: -70.706948,
    descripcion: "Tiendas"
  },
  {
    id: 294,
    placeId: "ChIJP-GpNigjY5YRauQOqI2noBw",
    nombre: "Comercializadora Reyes",
    lat: -33.807889,
    lng: -70.733774,
    descripcion: "Tiendas"
  },
  {
    id: 295,
    placeId: "ChIJP-GpNigjY5YRauQOqI2noBw",
    nombre: "Comercializadora Reyes",
    lat: -33.807889,
    lng: -70.733774,
    descripcion: "Tiendas"
  },
  {
    id: 296,
    placeId: "ChIJP-GpNigjY5YRauQOqI2noBw",
    nombre: "Comercializadora Reyes",
    lat: -33.807889,
    lng: -70.733774,
    descripcion: "Tiendas"
  },
  {
    id: 297,
    placeId: "ChIJxZSGj-LnYpYRvVGuzhUPWWc",
    nombre: "Comercializadora y Distribuidora Pet Rayenco",
    lat: -33.607759,
    lng: -70.878041,
    descripcion: "Tiendas"
  },
  {
    id: 298,
    placeId: "ChIJwccBW6bHYpYRLqJPbB1VAQY",
    nombre: "Comida de mascotas",
    lat: -33.371120,
    lng: -70.637265,
    descripcion: "Tiendas"
  },
  {
    id: 299,
    placeId: "ChIJizfpy6LDYpYRMq1mMoG0FqA",
    nombre: "Comida de mascotas",
    lat: -33.446081,
    lng: -70.725349,
    descripcion: "Tiendas"
  },
  {
    id: 300,
    placeId: "ChIJwY6j3azbYpYRMmrkKdV1QI0",
    nombre: "Comida de mascotas",
    lat: -33.545431,
    lng: -70.641924,
    descripcion: "Tiendas"
  },
  {
    id: 301,
    placeId: "ChIJsUtOOgDbYpYRhfZ2x4pqVUA",
    nombre: "Comida de mascotas daniela",
    lat: -33.526835,
    lng: -70.700879,
    descripcion: "Tiendas"
  },
  {
    id: 302,
    placeId: "ChIJ3-Er0X7nYpYR_5IBiHLUDLE",
    nombre: "Comida de mascotas Jakypet",
    lat: -33.573081,
    lng: -70.834278,
    descripcion: "Tiendas"
  },
  {
    id: 303,
    placeId: "ChIJ3dVqJMznYpYRgNWd52r6Wts",
    nombre: "Comida de Perros - Comida de Gatos - Alimento para Mascotas - Accesorios -Delivery Ohmypetstore",
    lat: -33.606650,
    lng: -70.904322,
    descripcion: "Tiendas"
  },
  {
    id: 304,
    placeId: "ChIJxffQgtLjYpYRiQi3uVI8iPo",
    nombre: "Comida para perros Talagante",
    lat: -33.659383,
    lng: -70.918917,
    descripcion: "Tiendas"
  },
  {
    id: 305,
    placeId: "ChIJS9zuh6zDYpYRxp6WU1h0Zl0",
    nombre: "Comotu Pets",
    lat: -33.434361,
    lng: -70.774795,
    descripcion: "Tiendas"
  },
  {
    id: 306,
    placeId: "ChIJP09B9AaVYpYRrNfwnZoECKI",
    nombre: "Cookie Pet Shop",
    lat: -33.286038,
    lng: -70.879702,
    descripcion: "Tiendas"
  },
  {
    id: 307,
    placeId: "ChIJ12Q062TPYpYRYe4XTrTrIRM",
    nombre: "COOLPET",
    lat: -33.392870,
    lng: -70.557815,
    descripcion: "Tiendas"
  },
  {
    id: 308,
    placeId: "ChIJhRTM2pwhY5YRDetnzXHhDTQ",
    nombre: "Coolpetshop Buin",
    lat: -33.736050,
    lng: -70.736872,
    descripcion: "Tiendas"
  },
  {
    id: 309,
    placeId: "ChIJt3TrvSXVfJYRf7dcQ8T9xyQ",
    nombre: "Crazy Pets San Jose de Maipo",
    lat: -33.643132,
    lng: -70.352924,
    descripcion: "Tiendas"
  },
  {
    id: 310,
    placeId: "ChIJfwTRRtwlY5YRsOwvaY08G8A",
    nombre: "Criadero Hanami",
    lat: -33.801689,
    lng: -70.693575,
    descripcion: "Tiendas"
  },
  {
    id: 311,
    placeId: "ChIJjXwOMOb2YpYRM7nmp3Zi0jU",
    nombre: "Criadero Long Island",
    lat: -33.511419,
    lng: -71.124763,
    descripcion: "Tiendas"
  },
  {
    id: 312,
    placeId: "ChIJs9pCVgDxYpYRKEon8LQS2g4",
    nombre: "Criadero San Ignacio",
    lat: -33.494537,
    lng: -71.076460,
    descripcion: "Tiendas"
  },
  {
    id: 313,
    placeId: "ChIJ88Z6sV31YpYRX_9_LYeApZA",
    nombre: "CroKanimal",
    lat: -33.397540,
    lng: -71.125134,
    descripcion: "Tiendas"
  },
  {
    id: 314,
    placeId: "ChIJQ49I0rjFYpYRBESs5w7maIU",
    nombre: "CVSE - Centro Veterinario & Spa Enredados",
    lat: -33.451403,
    lng: -70.706960,
    descripcion: "Tiendas"
  },
  {
    id: 315,
    placeId: "ChIJ7YcgfHnJYpYRPRCRXDKN31I",
    nombre: "Dannas Pet Peluqueria y Tienda De Mascotas",
    lat: -33.383949,
    lng: -70.550600,
    descripcion: "Tiendas"
  },
  {
    id: 316,
    placeId: "ChIJ9dRNM_LRYpYR7pANdHStQ58",
    nombre: "Dark’s Pet House",
    lat: -33.486049,
    lng: -70.620088,
    descripcion: "Tiendas"
  },
  {
    id: 317,
    placeId: "ChIJmz3SdsrmYpYRQrn8oozXTJA",
    nombre: "Decocat",
    lat: -33.608872,
    lng: -70.882997,
    descripcion: "Tiendas"
  },
  {
    id: 318,
    placeId: "ChIJwX0Hof_RYpYRFKq7ggIR2h4",
    nombre: "Deep Blue Importadora peces Ornamentales",
    lat: -33.554837,
    lng: -70.620604,
    descripcion: "Tiendas"
  },
  {
    id: 319,
    placeId: "ChIJY9KMwYSVYpYRBQJ5UMhcxOY",
    nombre: "DeliPet Mascotas",
    lat: -33.295466,
    lng: -70.872431,
    descripcion: "Tiendas"
  },
  {
    id: 320,
    placeId: "ChIJr5qDHV_RYpYRDmEGg-M85Bo",
    nombre: "DEMASKOTAS SPA",
    lat: -33.539697,
    lng: -70.596509,
    descripcion: "Tiendas"
  },
  {
    id: 321,
    placeId: "ChIJM0SWA49VYpYRhNKO_lqBkh4",
    nombre: "Dhul Pet Centro Integral de Mascotas",
    lat: -33.680597,
    lng: -71.215007,
    descripcion: "Tiendas"
  },
  {
    id: 322,
    placeId: "ChIJcQQVc1HEYpYRKJiP4NWLtDc",
    nombre: "Dispet’s",
    lat: -33.442482,
    lng: -70.676562,
    descripcion: "Tiendas"
  },
  {
    id: 323,
    placeId: "ChIJG7SQ77rXYpYRpWO9k1XKK-Q",
    nombre: "DistribuiDog Alimento De Mascotas",
    lat: -33.615267,
    lng: -70.575798,
    descripcion: "Tiendas"
  },
  {
    id: 324,
    placeId: "ChIJeUz08vdVYpYR-Bqqddm7yw4",
    nombre: "Distribuidora Alimentos Mascotas Melipilla COMERCIAL NORTE ESTACION",
    lat: -33.692950,
    lng: -71.214630,
    descripcion: "Tiendas"
  },
  {
    id: 325,
    placeId: "ChIJf8QHVkXbYpYR5BS78xheLK4",
    nombre: "Distribuidora Allendes Hnos | Casa Matriz",
    lat: -33.508175,
    lng: -70.704091,
    descripcion: "Tiendas"
  },
  {
    id: 326,
    placeId: "ChIJd6hFGDvDYpYR9NNrGgih4wE",
    nombre: "DISTRIBUIDORA CIUDAD ANIMAL",
    lat: -33.430547,
    lng: -70.737046,
    descripcion: "Tiendas"
  },
  {
    id: 327,
    placeId: "ChIJd6hFGDvDYpYR9NNrGgih4wE",
    nombre: "DISTRIBUIDORA CIUDAD ANIMAL",
    lat: -33.430547,
    lng: -70.737046,
    descripcion: "Tiendas"
  },
  {
    id: 328,
    placeId: "ChIJFWwxuGLaYpYR-Flrvo652yI",
    nombre: "Distribuidora Combarbalá Ltda.",
    lat: -33.530525,
    lng: -70.633968,
    descripcion: "Tiendas"
  },
  {
    id: 329,
    placeId: "ChIJU3q3ztXVYpYRT0qaID_AxRw",
    nombre: "DISTRIBUIDORA DE ALIMENTO PARA MASCOTAS LAS VIZCACHAS",
    lat: -33.597505,
    lng: -70.506123,
    descripcion: "Tiendas"
  },
  {
    id: 330,
    placeId: "ChIJnafsx8rbYpYRXBJJHOaTIuU",
    nombre: "DISTRIBUIDORA DE ALIMENTOS PARA MASCOTAS POLO",
    lat: -33.558241,
    lng: -70.670115,
    descripcion: "Tiendas"
  },
  {
    id: 331,
    placeId: "ChIJ_5DVZ2baYpYRFZ2-cJSPOeY",
    nombre: "Distribuidora Don Mario Frutos del pais y alimento para mascotas",
    lat: -33.539380,
    lng: -70.640944,
    descripcion: "Tiendas"
  },
  {
    id: 332,
    placeId: "ChIJDwFnNNndYpYR5WWtV9HBOJU",
    nombre: "Distribuidora El Tito ltda.",
    lat: -33.593111,
    lng: -70.782046,
    descripcion: "Tiendas"
  },
  {
    id: 333,
    placeId: "ChIJd78CGQDZYpYRohkzR-1je2c",
    nombre: "Distribuidora grum spa",
    lat: -33.595274,
    lng: -70.700791,
    descripcion: "Tiendas"
  },
  {
    id: 334,
    placeId: "ChIJaTLcxLj3YpYRezTNYWyNYJ4",
    nombre: "Distribuidora la granja",
    lat: -33.570045,
    lng: -71.205479,
    descripcion: "Tiendas"
  },
  {
    id: 335,
    placeId: "ChIJaTLcxLj3YpYRezTNYWyNYJ4",
    nombre: "Distribuidora la granja",
    lat: -33.517178,
    lng: -71.123011,
    descripcion: "Tiendas"
  },
  {
    id: 336,
    placeId: "ChIJaTLcxLj3YpYRezTNYWyNYJ4",
    nombre: "Distribuidora La Granja",
    lat: -33.517178,
    lng: -71.123011,
    descripcion: "Tiendas"
  },
  {
    id: 337,
    placeId: "ChIJC18wsvjaYpYRpS856iAZyws",
    nombre: "Distribuidora Las Brisas",
    lat: -33.533251,
    lng: -70.662816,
    descripcion: "Tiendas"
  },
  {
    id: 338,
    placeId: "ChIJx9RaLl3GYpYRAsjb7QHnwUU",
    nombre: "Distribuidora las Mascotas",
    lat: -33.380098,
    lng: -70.657948,
    descripcion: "Tiendas"
  },
  {
    id: 339,
    placeId: "ChIJ60yZPGnRYpYRws09-fCNNkk",
    nombre: "Distribuidora Marquez",
    lat: -33.552189,
    lng: -70.563966,
    descripcion: "Tiendas"
  },
  {
    id: 340,
    placeId: "ChIJSSWx5Q7fYpYRuDqg5-3tuS0",
    nombre: "Distribuidora Montvet",
    lat: -33.613084,
    lng: -70.793945,
    descripcion: "Tiendas"
  },
  {
    id: 341,
    placeId: "ChIJ042aW57bYpYRLqYo2uQTal8",
    nombre: "Distribuidora NyZ",
    lat: -33.538013,
    lng: -70.642402,
    descripcion: "Tiendas"
  },
  {
    id: 342,
    placeId: "ChIJ_RUfyoHbYpYRFGkNHL7Ybe0",
    nombre: "DISTRIBUIDORA PET WORLD CHILE",
    lat: -33.496892,
    lng: -70.633645,
    descripcion: "Tiendas"
  },
  {
    id: 343,
    placeId: "ChIJsRNfI1m9YpYRiJW19dV9dD0",
    nombre: "Distrito Animal",
    lat: -33.243034,
    lng: -70.765986,
    descripcion: "Tiendas"
  },
  {
    id: 344,
    placeId: "ChIJ8WSEtzvdYpYRX7ufb-fZsqw",
    nombre: "Distrito Animal Chile Ltda",
    lat: -33.503529,
    lng: -70.720699,
    descripcion: "Tiendas"
  },
  {
    id: 345,
    placeId: "ChIJM_DaVCLRYpYRJoJzXu3P3YY",
    nombre: "don bobby alimentos y accesorios para mascotas",
    lat: -33.555165,
    lng: -70.617025,
    descripcion: "Tiendas"
  },
  {
    id: 346,
    placeId: "ChIJaVCyt9vZYpYRVgBg1LGZhD4",
    nombre: "DON CAN PETS alimentos y accesorios para mascotas",
    lat: -33.612463,
    lng: -70.679851,
    descripcion: "Tiendas"
  },
  {
    id: 347,
    placeId: "ChIJWYR5TXsdNEsRxGd1u11nVRA",
    nombre: "Don Dog",
    lat: -33.400937,
    lng: -70.593503,
    descripcion: "Tiendas"
  },
  {
    id: 348,
    placeId: "ChIJX88kFxTbYpYR43e60vVd8h4",
    nombre: "Don Polo",
    lat: -33.537610,
    lng: -70.688364,
    descripcion: "Tiendas"
  },
  {
    id: 349,
    placeId: "ChIJ47yRju_bYpYRGRXNrkJ_5Jg",
    nombre: "Don Tito Alimentos Para Mascotas",
    lat: -33.504184,
    lng: -70.687862,
    descripcion: "Tiendas"
  },
  {
    id: 350,
    placeId: "ChIJQfa8YQDpYpYRSkB5YUfcOBM",
    nombre: "DonaPet",
    lat: -33.448984,
    lng: -70.840311,
    descripcion: "Tiendas"
  },
  {
    id: 351,
    placeId: "ChIJA5jBKv09Y5YR7j6t_s4XGBY",
    nombre: "Donde el Nico",
    lat: -33.857648,
    lng: -70.741728,
    descripcion: "Tiendas"
  },
  {
    id: 352,
    placeId: "ChIJKRre_8_DYpYRsCWo14Wfzco",
    nombre: "Donde el oscar Pet Shop",
    lat: -33.442720,
    lng: -70.736292,
    descripcion: "Tiendas"
  },
  {
    id: 353,
    placeId: "ChIJF49GZe7hYpYRo1Bor-n5YdY",
    nombre: "DONDE EL SAMY tienda de accesorios y alimentos de mascotas .",
    lat: -33.618422,
    lng: -70.874558,
    descripcion: "Tiendas"
  },
  {
    id: 354,
    placeId: "ChIJFRT9yFbHYpYRv98u5Pot_Ik",
    nombre: "Donde jorgito",
    lat: -33.373068,
    lng: -70.677233,
    descripcion: "Tiendas"
  },
  {
    id: 355,
    placeId: "ChIJ7YZxyyvpYpYR7siteaoK7O4",
    nombre: "Donde Patán",
    lat: -33.463358,
    lng: -70.858093,
    descripcion: "Tiendas"
  },
  {
    id: 356,
    placeId: "ChIJkzVGUTfRYpYRrYv8a-O-f4E",
    nombre: "Dondo Pet",
    lat: -33.452540,
    lng: -70.560494,
    descripcion: "Tiendas"
  },
  {
    id: 357,
    placeId: "ChIJZf9vkw_9YpYRIf5c58QUA_U",
    nombre: "Dopets",
    lat: -33.687551,
    lng: -71.030706,
    descripcion: "Tiendas"
  },
  {
    id: 358,
    placeId: "ChIJxU-QdQDRYpYRVGMF_Hh5us4",
    nombre: "Dr.Pet - Quilin",
    lat: -33.499186,
    lng: -70.552632,
    descripcion: "Tiendas"
  },
  {
    id: 359,
    placeId: "ChIJWU2An9nAYpYR9nKAICViKsA",
    nombre: "Dr.Pet Clínica Veterinaria - Quilicura",
    lat: -33.355485,
    lng: -70.728201,
    descripcion: "Tiendas"
  },
  {
    id: 360,
    placeId: "ChIJXTnetY3bYpYR3KNAXS2VD24",
    nombre: "Dulce dormir mascotas",
    lat: -33.511714,
    lng: -70.623178,
    descripcion: "Tiendas"
  },
  {
    id: 361,
    placeId: "ChIJIcnDHJUjY5YRsuGrtp8L6FI",
    nombre: "Dunkler Pet Shop",
    lat: -33.821260,
    lng: -70.739866,
    descripcion: "Tiendas"
  },
  {
    id: 362,
    placeId: "ChIJsyeTxSrHYpYRz24Bs_qDEdQ",
    nombre: "DYF alimento y accesorios de mascotas y articulos de aseo",
    lat: -33.390023,
    lng: -70.679967,
    descripcion: "Tiendas"
  },
  {
    id: 363,
    placeId: "ChIJdXt9MLfHYpYR9W2LasCpbCY",
    nombre: "Eben-Ezer Mascotas",
    lat: -33.381397,
    lng: -70.667999,
    descripcion: "Tiendas"
  },
  {
    id: 364,
    placeId: "ChIJg-LtqYHbYpYRoAvcOsVs4mA",
    nombre: "ECO UP MASCOTAS",
    lat: -33.500605,
    lng: -70.635633,
    descripcion: "Tiendas"
  },
  {
    id: 365,
    placeId: "ChIJ02DVt_zJYpYRfF7WusTYK3k",
    nombre: "EcológicoPet",
    lat: -33.386288,
    lng: -70.566589,
    descripcion: "Tiendas"
  },
  {
    id: 366,
    placeId: "ChIJ8egJ-KrRYpYR76Bk12dJwwM",
    nombre: "Econopets",
    lat: -33.508987,
    lng: -70.599503,
    descripcion: "Tiendas"
  },
  {
    id: 367,
    placeId: "ChIJLZRb6F5VYpYRnX1JCLoblrc",
    nombre: "EL ARCA",
    lat: -33.694330,
    lng: -71.218419,
    descripcion: "Tiendas"
  },
  {
    id: 368,
    placeId: "ChIJDXvkqrrFYpYR1-G0HaUPlxU",
    nombre: "El Arca Pets",
    lat: -33.436047,
    lng: -70.657252,
    descripcion: "Tiendas"
  },
  {
    id: 369,
    placeId: "ChIJt29QagBVYpYRWPrKbU88Xhw",
    nombre: "El Arriero alimento de mascotas",
    lat: -33.681046,
    lng: -71.209585,
    descripcion: "Tiendas"
  },
  {
    id: 370,
    placeId: "ChIJyW9ZTADbYpYR65xWNIyIRAM",
    nombre: "EL BAJON DE TU MASCOTA",
    lat: -33.570470,
    lng: -70.657486,
    descripcion: "Tiendas"
  },
  {
    id: 371,
    placeId: "ChIJnXjCi27aYpYROzbaxStCQEE",
    nombre: "El Bajon Mascotero y Caja Vecina",
    lat: -33.545023,
    lng: -70.636920,
    descripcion: "Tiendas"
  },
  {
    id: 372,
    placeId: "ChIJBfzsJp7FYpYRFvaxtF__uz0",
    nombre: "EL BAZAR DE LA MASCOTA",
    lat: -33.437317,
    lng: -70.668871,
    descripcion: "Tiendas"
  },
  {
    id: 373,
    placeId: "ChIJsYWejGTdYpYRa_smjpNnVxk",
    nombre: "El Brunito - Alimentos y Accesorios para Mascotas",
    lat: -33.583080,
    lng: -70.806784,
    descripcion: "Tiendas"
  },
  {
    id: 374,
    placeId: "ChIJt2PymFXnYpYRifTbGPN3O2g",
    nombre: "El Cachorrito",
    lat: -33.566400,
    lng: -70.812132,
    descripcion: "Tiendas"
  },
  {
    id: 375,
    placeId: "ChIJ51TJJY3GYpYRNnKCleJt3Lw",
    nombre: "El Club de las Mascotas",
    lat: -33.386402,
    lng: -70.678517,
    descripcion: "Tiendas"
  },
  {
    id: 376,
    placeId: "ChIJ0WPF1_bbYpYRwzYGKd2a5Ss",
    nombre: "El Club Mascota",
    lat: -33.582217,
    lng: -70.697635,
    descripcion: "Tiendas"
  },
  {
    id: 377,
    placeId: "ChIJe31z-nnbYpYRn7t0438I3_E",
    nombre: "El Erizo Pinchudo",
    lat: -33.567198,
    lng: -70.666919,
    descripcion: "Tiendas"
  },
  {
    id: 378,
    placeId: "ChIJLYWOT3HnYpYR3LQopC4AD-Q",
    nombre: "EL GRANERO",
    lat: -33.550429,
    lng: -70.859542,
    descripcion: "Tiendas"
  },
  {
    id: 379,
    placeId: "ChIJ61utEqLBYpYRKeaQkYy215Y",
    nombre: "El hogar de las Mascotas",
    lat: -33.352010,
    lng: -70.748430,
    descripcion: "Tiendas"
  },
  {
    id: 380,
    placeId: "ChIJgRFujo_dYpYRy0Q_cJR1zy8",
    nombre: "El Kike",
    lat: -33.567575,
    lng: -70.801917,
    descripcion: "Tiendas"
  },
  {
    id: 381,
    placeId: "ChIJBa3wzhrRYpYRvdS5TQjQWEc",
    nombre: "EL LOBITO",
    lat: -33.490435,
    lng: -70.602244,
    descripcion: "Tiendas"
  },
  {
    id: 382,
    placeId: "ChIJPQOkaADBYpYRiAXVL2Jk4UE",
    nombre: "El Mundo de Tobby",
    lat: -33.357162,
    lng: -70.732072,
    descripcion: "Tiendas"
  },
  {
    id: 383,
    placeId: "ChIJ-3btKQDDYpYRdUkZ9BKvCsI",
    nombre: "EL PAISA",
    lat: -33.433423,
    lng: -70.766790,
    descripcion: "Tiendas"
  },
  {
    id: 384,
    placeId: "ChIJTfTeWunQYpYRC3TTJOAsgLU",
    nombre: "El Paraíso de las Mascotas",
    lat: -33.539867,
    lng: -70.590607,
    descripcion: "Tiendas"
  },
  {
    id: 385,
    placeId: "ChIJ48nzKUq5YpYRUjjK2LT4O-Y",
    nombre: "El Patio Guarderia",
    lat: -33.259036,
    lng: -70.710685,
    descripcion: "Tiendas"
  },
  {
    id: 386,
    placeId: "ChIJBZw5-TSrY5YR_OlyRDjXPtc",
    nombre: "El Rincón Animal Del Profe",
    lat: -33.583775,
    lng: -71.238478,
    descripcion: "Tiendas"
  },
  {
    id: 387,
    placeId: "ChIJ7-DwgWDjYpYRuxdM8nQKrfE",
    nombre: "El Rincon de las Mascotas",
    lat: -33.683842,
    lng: -70.952820,
    descripcion: "Tiendas"
  },
  {
    id: 388,
    placeId: "ChIJb6YtWD3XYpYR0JvYGrIszW8",
    nombre: "El Rincón de las Mascotas",
    lat: -33.585407,
    lng: -70.568566,
    descripcion: "Tiendas"
  },
  {
    id: 389,
    placeId: "ChIJ7-DwgWDjYpYRuxdM8nQKrfE",
    nombre: "El Rincón de las Mascotas",
    lat: -33.683842,
    lng: -70.952820,
    descripcion: "Tiendas"
  },
  {
    id: 390,
    placeId: "ChIJ_b6QLSrHYpYR5uSOv8EYfi8",
    nombre: "El rincon de las patitas",
    lat: -33.402965,
    lng: -70.711053,
    descripcion: "Tiendas"
  },
  {
    id: 391,
    placeId: "ChIJ7eh6MibbYpYRXQ7nAaAsS3w",
    nombre: "El Rincón de tu Mascota",
    lat: -33.552751,
    lng: -70.674209,
    descripcion: "Tiendas"
  },
  {
    id: 392,
    placeId: "ChIJO76OsOUfY5YRRmHZVNyjywE",
    nombre: "El Señor de las Mascotas",
    lat: -33.754310,
    lng: -70.902526,
    descripcion: "Tiendas"
  },
  {
    id: 393,
    placeId: "ChIJD8JMH0HaYpYR5WFCHF0W4pk",
    nombre: "EL SUEÑO DE MOISÉS",
    lat: -33.550490,
    lng: -70.649741,
    descripcion: "Tiendas"
  },
  {
    id: 394,
    placeId: "ChIJcWYkKILFYpYRiOYFGFOH75A",
    nombre: "Electropet - Petshop",
    lat: -33.463380,
    lng: -70.644237,
    descripcion: "Tiendas"
  },
  {
    id: 395,
    placeId: "ChIJJ68rQ7xpY5YR1MjSrnc37Do",
    nombre: "Eluney Pet’s",
    lat: -34.200360,
    lng: -70.874936,
    descripcion: "Tiendas"
  },
  {
    id: 396,
    placeId: "ChIJ1xyhXwDbYpYRoKRob-Iwv08",
    nombre: "Emilia venta de huevos al por mayor y por unidad, alimentos para mascotas y accesorios",
    lat: -33.556595,
    lng: -70.661638,
    descripcion: "Tiendas"
  },
  {
    id: 397,
    placeId: "ChIJQ9wwUMvbYpYRsRg4SpybD8E",
    nombre: "Emporio Como el Perro y el Gato",
    lat: -33.488258,
    lng: -70.648091,
    descripcion: "Tiendas"
  },
  {
    id: 398,
    placeId: "ChIJu08_t37PYpYRlHB4ijiDTwg",
    nombre: "Emporio de Mascotas",
    lat: -33.431095,
    lng: -70.615763,
    descripcion: "Tiendas"
  },
  {
    id: 399,
    placeId: "ChIJm79WPkQhY5YRg0TUywTMSpg",
    nombre: "Emporio Pets Maipo",
    lat: -33.733658,
    lng: -70.782846,
    descripcion: "Tiendas"
  },
  {
    id: 400,
    placeId: "ChIJv-_MHABVYpYRVPGb04AgGEA",
    nombre: "Entre perros y gatos alimentos para mascotas",
    lat: -33.682930,
    lng: -71.214965,
    descripcion: "Tiendas"
  },
  {
    id: 401,
    placeId: "ChIJx5tWgGTDYpYRJEkKsWCp4z8",
    nombre: "Entre Perros y Gatos Pudahuel",
    lat: -33.432175,
    lng: -70.771818,
    descripcion: "Tiendas"
  },
  {
    id: 402,
    placeId: "ChIJlYSm9lq7YpYRUs95Ocx0W-o",
    nombre: "Entre PerrosyGatos Petshop",
    lat: -33.201464,
    lng: -70.675308,
    descripcion: "Tiendas"
  },
  {
    id: 403,
    placeId: "ChIJ6Tz8_UvPYpYR0oHj2ok2UZw",
    nombre: "EntreHuellas Petshop",
    lat: -33.453181,
    lng: -70.612044,
    descripcion: "Tiendas"
  },
  {
    id: 404,
    placeId: "ChIJzxiqw6_jYpYRPge44k6JT6I",
    nombre: "EquinoPharma",
    lat: -33.670653,
    lng: -70.992782,
    descripcion: "Tiendas"
  },
  {
    id: 405,
    placeId: "ChIJkySUBCbPYpYRVjlIVddeVvY",
    nombre: "Estilo Pets Design",
    lat: -33.402401,
    lng: -70.579403,
    descripcion: "Tiendas"
  },
  {
    id: 406,
    placeId: "ChIJVyZU7RAhY5YRcOvpLqPT8pk",
    nombre: "familia peluda",
    lat: -33.732304,
    lng: -70.748794,
    descripcion: "Tiendas"
  },
  {
    id: 407,
    placeId: "ChIJSzKPW9LDYpYRib6O5Kko9JI",
    nombre: "Fans Dog SpA",
    lat: -33.474352,
    lng: -70.722793,
    descripcion: "Tiendas"
  },
  {
    id: 408,
    placeId: "ChIJfdt0DgDnYpYRZ985Z6j0b6A",
    nombre: "Fantastic Pet Sucursal Alacalde Luis Araya Cereceda",
    lat: -33.607900,
    lng: -70.900416,
    descripcion: "Tiendas"
  },
  {
    id: 409,
    placeId: "ChIJFbK5D6jnYpYR2N6PqqZlOIE",
    nombre: "Fantastic Pets",
    lat: -33.608762,
    lng: -70.899599,
    descripcion: "Tiendas"
  },
  {
    id: 410,
    placeId: "ChIJDU2go6_FYpYRbGpgDU-hb6U",
    nombre: "Fashion Pets",
    lat: -33.418928,
    lng: -70.640977,
    descripcion: "Tiendas"
  },
  {
    id: 411,
    placeId: "ChIJQXiqR2DPYpYRslG7Ul0ifBw",
    nombre: "Fauna Salud SPA",
    lat: -33.412157,
    lng: -70.659060,
    descripcion: "Tiendas"
  },
  {
    id: 412,
    placeId: "ChIJfQf9RhzFYpYRq2LycyiVx8E",
    nombre: "Faunalandia",
    lat: -33.465126,
    lng: -70.624883,
    descripcion: "Tiendas"
  },
  {
    id: 413,
    placeId: "ChIJsa8Afn8LY5YRjF6H2j_q6qk",
    nombre: "Ferretería Los Peumos",
    lat: -34.034630,
    lng: -71.100651,
    descripcion: "Tiendas"
  },
  {
    id: 414,
    placeId: "ChIJqwYGLLnbYpYRirp_4CVj1K4",
    nombre: "Filippa Pet Store",
    lat: -33.508641,
    lng: -70.649141,
    descripcion: "Tiendas"
  },
  {
    id: 415,
    placeId: "ChIJLwTGqIXDYpYRWca47uYv03w",
    nombre: "FJ Mascotas",
    lat: -33.429739,
    lng: -70.734144,
    descripcion: "Tiendas"
  },
  {
    id: 416,
    placeId: "ChIJfVhwNh7RYpYRrFrgs_BHXbk",
    nombre: "Floridapet - La Florida",
    lat: -33.536300,
    lng: -70.572755,
    descripcion: "Tiendas"
  },
  {
    id: 417,
    placeId: "ChIJOfPm8RzPYpYR8ZLVjwiZIYI",
    nombre: "Floridapet - Las Condes",
    lat: -33.411120,
    lng: -70.545978,
    descripcion: "Tiendas"
  },
  {
    id: 418,
    placeId: "ChIJSW1Ppfv_xiAR0wbs4aIIkXU",
    nombre: "Flufi",
    lat: -33.514541,
    lng: -70.673948,
    descripcion: "Tiendas"
  },
  {
    id: 419,
    placeId: "ChIJoTQmmU3RYpYRdSnh90Wuji4",
    nombre: "Food Caninos",
    lat: -33.506319,
    lng: -70.587752,
    descripcion: "Tiendas"
  },
  {
    id: 420,
    placeId: "ChIJq26fyhjXYpYRdRso5UzZ1ww",
    nombre: "Food Pets - Alimento y Accesorios Para Mascotas",
    lat: -33.581942,
    lng: -70.586798,
    descripcion: "Tiendas"
  },
  {
    id: 421,
    placeId: "ChIJ3W9w5eu7YpYRjqdAZg2XtPA",
    nombre: "For My Pet",
    lat: -33.193676,
    lng: -70.679194,
    descripcion: "Tiendas"
  },
  {
    id: 422,
    placeId: "ChIJUQcsDSLdYpYRM6mbKOLtYuU",
    nombre: "Funky Pets",
    lat: -33.552328,
    lng: -70.799536,
    descripcion: "Tiendas"
  },
  {
    id: 423,
    placeId: "ChIJbcaVMgDbYpYR0HWUQAxEzl0",
    nombre: "FunnyPet Alimentos y accesorios para mascotas",
    lat: -33.500799,
    lng: -70.700861,
    descripcion: "Tiendas"
  },
  {
    id: 424,
    placeId: "ChIJ2f18-ZXPYpYR9eN_MpF_tTA",
    nombre: "FUNPETS (Tienda de Mascotas)",
    lat: -33.461932,
    lng: -70.575307,
    descripcion: "Tiendas"
  },
  {
    id: 425,
    placeId: "ChIJdzPF4RUhY5YRZRwRyhlOnI4",
    nombre: "FYMPETS",
    lat: -33.728139,
    lng: -70.737535,
    descripcion: "Tiendas"
  },
  {
    id: 426,
    placeId: "ChIJH7p8KrPPYpYRiRsRSS0El8U",
    nombre: "G-Pet Tienda Veterinaria",
    lat: -33.428832,
    lng: -70.598183,
    descripcion: "Tiendas"
  },
  {
    id: 427,
    placeId: "ChIJcaE8IxkhY5YRPsxSH7Upb1w",
    nombre: "G&R Pets Shop",
    lat: -33.727522,
    lng: -70.743194,
    descripcion: "Tiendas"
  },
  {
    id: 428,
    placeId: "ChIJQztDzSMpY5YRhwz7GD0o9bs",
    nombre: "Galaxy pet",
    lat: -33.690596,
    lng: -70.573978,
    descripcion: "Tiendas"
  },
  {
    id: 429,
    placeId: "ChIJ5ag9UTnXYpYRCZ0p6Q7ZHXI",
    nombre: "GAME OF PETS",
    lat: -33.592802,
    lng: -70.561755,
    descripcion: "Tiendas"
  },
  {
    id: 430,
    placeId: "ChIJuwbFgmHFYpYRFTcXmvyu5bw",
    nombre: "Garritas",
    lat: -33.466552,
    lng: -70.710110,
    descripcion: "Tiendas"
  },
  {
    id: 431,
    placeId: "ChIJcTtGzPXbYpYRy_SAOUxyPSs",
    nombre: "Gatusa Petshop",
    lat: -33.499779,
    lng: -70.690992,
    descripcion: "Tiendas"
  },
  {
    id: 432,
    placeId: "ChIJw0zFbwDRYpYRq_bKs6WK4kY",
    nombre: "GlamDog Petshop y Peluquería Canina",
    lat: -33.561869,
    lng: -70.581536,
    descripcion: "Tiendas"
  },
  {
    id: 433,
    placeId: "ChIJ6wW-PdHcYpYRbbdJfrounM8",
    nombre: "Global Pet",
    lat: -33.513387,
    lng: -70.757061,
    descripcion: "Tiendas"
  },
  {
    id: 434,
    placeId: "ChIJJ-JrqWvbYpYRheKgLv-4Wiw",
    nombre: "Gohan Pet Shop",
    lat: -33.511646,
    lng: -70.707148,
    descripcion: "Tiendas"
  },
  {
    id: 435,
    placeId: "ChIJr7qi_yPRYpYR_NvWR9w7XVI",
    nombre: "Good Love Pet Center",
    lat: -33.481408,
    lng: -70.551192,
    descripcion: "Tiendas"
  },
  {
    id: 436,
    placeId: "ChIJa8bMp2LPYpYRpuVeBijHqe4",
    nombre: "GoodBoy",
    lat: -33.416786,
    lng: -70.531181,
    descripcion: "Tiendas"
  },
  {
    id: 437,
    placeId: "ChIJIS_UmOnDYpYRm3YEnbykW4A",
    nombre: "GoPet Pudahuel",
    lat: -33.452751,
    lng: -70.763542,
    descripcion: "Tiendas"
  },
  {
    id: 438,
    placeId: "ChIJd8BdUADfYpYR1Sv6wzlp8u0",
    nombre: "Granjita Doña Isidora CDT",
    lat: -33.600867,
    lng: -70.786110,
    descripcion: "Tiendas"
  },
  {
    id: 439,
    placeId: "ChIJlfYP-O7jYpYRNwKoUdPB58c",
    nombre: "Greenpet Greensi",
    lat: -33.683235,
    lng: -70.919033,
    descripcion: "Tiendas"
  },
  {
    id: 440,
    placeId: "ChIJXzrTidrbYpYRiQubLl4CXfc",
    nombre: "Groomingchile",
    lat: -33.569549,
    lng: -70.686156,
    descripcion: "Tiendas"
  },
  {
    id: 441,
    placeId: "ChIJEUehnBS5YpYRy6xaoBP33pk",
    nombre: "Guatita Pet | Alimentos y Accesorios para Mascotas",
    lat: -33.304010,
    lng: -70.713693,
    descripcion: "Tiendas"
  },
  {
    id: 442,
    placeId: "ChIJUf7XHxcdY5YRQ0M8zJalDpA",
    nombre: "Guaus",
    lat: -33.761491,
    lng: -70.910736,
    descripcion: "Tiendas"
  },
  {
    id: 443,
    placeId: "ChIJ97SLnBPFYpYR0d0145wCs9E",
    nombre: "Guaw & Miau",
    lat: -33.449333,
    lng: -70.709104,
    descripcion: "Tiendas"
  },
  {
    id: 444,
    placeId: "ChIJy6ZBAAD1YpYRI_q6ZdBAdDQ",
    nombre: "Hakuna Matata Pet Shop",
    lat: -33.400029,
    lng: -71.129935,
    descripcion: "Tiendas"
  },
  {
    id: 445,
    placeId: "ChIJ2UkAMhL1YpYRZS0YU1xepn0",
    nombre: "Happy Animals Curacaví",
    lat: -33.393468,
    lng: -71.125355,
    descripcion: "Tiendas"
  },
  {
    id: 446,
    placeId: "ChIJYTPYYETZYpYRRPrAUSA0O_Y",
    nombre: "Happy Animals Pet Shop",
    lat: -33.596982,
    lng: -70.700335,
    descripcion: "Tiendas"
  },
  {
    id: 447,
    placeId: "ChIJHyw4yuyxY5YRqB6bdKtZpzA",
    nombre: "HAPPY PET SHOP-ALIMENTOS Y ACCESORIOS PARA MASCOTAS",
    lat: -33.889854,
    lng: -71.453829,
    descripcion: "Tiendas"
  },
  {
    id: 448,
    placeId: "ChIJKa71B5TFYpYRjfnWVW9cCQE",
    nombre: "Happy Pet’s wash",
    lat: -33.427562,
    lng: -70.643806,
    descripcion: "Tiendas"
  },
  {
    id: 449,
    placeId: "ChIJCSPB83XBYpYRsN2W-sS_-A8",
    nombre: "Happy Pets",
    lat: -33.404270,
    lng: -70.723150,
    descripcion: "Tiendas"
  },
  {
    id: 450,
    placeId: "ChIJyYpyNMaVYpYR4vmygUi06M4",
    nombre: "Happy pets alimentos",
    lat: -33.376020,
    lng: -70.748616,
    descripcion: "Tiendas"
  },
  {
    id: 451,
    placeId: "ChIJxVScivLFYpYRJGf2IBNRT-s",
    nombre: "Happy Puppy´s Shop",
    lat: -33.420324,
    lng: -70.705317,
    descripcion: "Tiendas"
  },
  {
    id: 452,
    placeId: "ChIJ9a3touPbYpYRoYDKO5E-OBw",
    nombre: "happymascota",
    lat: -33.450976,
    lng: -70.663527,
    descripcion: "Tiendas"
  },
  {
    id: 453,
    placeId: "ChIJk5PlKdfRYpYRtoP142n3VoM",
    nombre: "Haruhana Store",
    lat: -33.558293,
    lng: -70.620418,
    descripcion: "Tiendas"
  },
  {
    id: 454,
    placeId: "ChIJfy9BSNs9Y5YR54N6uhgjVuQ",
    nombre: "Hey Pets",
    lat: -33.856071,
    lng: -70.760841,
    descripcion: "Tiendas"
  },
  {
    id: 455,
    placeId: "ChIJ1epA-5DaYpYRF4FD_xnJu24",
    nombre: "Hierba gatera Chile",
    lat: -33.515706,
    lng: -70.636092,
    descripcion: "Tiendas"
  },
  {
    id: 456,
    placeId: "ChIJucFQUKnmYpYRaeiRseA7_cg",
    nombre: "hiper ZOO",
    lat: -33.609674,
    lng: -70.901776,
    descripcion: "Tiendas"
  },
  {
    id: 457,
    placeId: "ChIJr-fmPZvFYpYRSFdKIUQ567g",
    nombre: "Hms mascotas",
    lat: -33.424005,
    lng: -70.688925,
    descripcion: "Tiendas"
  },
  {
    id: 458,
    placeId: "ChIJWQdMQwLBYpYRo_OMvaiXAyw",
    nombre: "Home y pets",
    lat: -33.398230,
    lng: -70.754440,
    descripcion: "Tiendas"
  },
  {
    id: 459,
    placeId: "ChIJP0YbbmvjYpYRDRXsnKhJU0Q",
    nombre: "Hospital Clínico Veterinario PetSalud",
    lat: -33.661593,
    lng: -70.926288,
    descripcion: "Tiendas"
  },
  {
    id: 460,
    placeId: "ChIJPxrs8c3hYpYRlGwMeQhcQQw",
    nombre: "Hotel Boutique Canino Donde La Cucha",
    lat: -33.615037,
    lng: -70.814892,
    descripcion: "Tiendas"
  },
  {
    id: 461,
    placeId: "ChIJ4cttLMu7YpYRu-nMZ2v7sdY",
    nombre: "Hotel canino y petshop MANTRA",
    lat: -33.211456,
    lng: -70.661948,
    descripcion: "Tiendas"
  },
  {
    id: 462,
    placeId: "ChIJA16EK5HFYpYRxVJUsbWG4Eo",
    nombre: "Huella Pet",
    lat: -33.437729,
    lng: -70.703495,
    descripcion: "Tiendas"
  },
  {
    id: 463,
    placeId: "ChIJ7dZdluzDYpYRzZmAuZVsyec",
    nombre: "Huellas & Spa Pet Shop",
    lat: -33.503373,
    lng: -70.793085,
    descripcion: "Tiendas"
  },
  {
    id: 464,
    placeId: "ChIJ91tJdI_WYpYR8OQ8VCM79B8",
    nombre: "huellitas",
    lat: -33.592656,
    lng: -70.539731,
    descripcion: "Tiendas"
  },
  {
    id: 465,
    placeId: "ChIJOd7UVRHbYpYRQMVtORmV0BU",
    nombre: "Huellitas de Amor",
    lat: -33.520503,
    lng: -70.636109,
    descripcion: "Tiendas"
  },
  {
    id: 466,
    placeId: "ChIJ5Yk6XLi7YpYRI3wNDHSJk7w",
    nombre: "Huellitas Esmeralda",
    lat: -33.180147,
    lng: -70.653773,
    descripcion: "Tiendas"
  },
  {
    id: 467,
    placeId: "ChIJq7M1j_3bYpYROcGYEhCqdaA",
    nombre: "HUELLITAS M&K",
    lat: -33.568136,
    lng: -70.655908,
    descripcion: "Tiendas"
  },
  {
    id: 468,
    placeId: "ChIJORuJWWjFYpYRqokQJKp_nIc",
    nombre: "Huellitas.pet.store",
    lat: -33.491921,
    lng: -70.686708,
    descripcion: "Tiendas"
  },
  {
    id: 469,
    placeId: "ChIJtZwW8EnJYpYRsFQEL41pAHo",
    nombre: "Hundshop",
    lat: -33.356452,
    lng: -70.539462,
    descripcion: "Tiendas"
  },
  {
    id: 470,
    placeId: "ChIJGYuDu7f9YpYR46LRvTXdyrE",
    nombre: "Huppetts mascotas",
    lat: -33.684123,
    lng: -71.002790,
    descripcion: "Tiendas"
  },
  {
    id: 471,
    placeId: "ChIJx6dIXRnFYpYRoYJHixieHCc",
    nombre: "IMP EXP MERKASIA BUEN AMIGO",
    lat: -33.456109,
    lng: -70.672296,
    descripcion: "Tiendas"
  },
  {
    id: 472,
    placeId: "ChIJx6dIXRnFYpYRoYJHixieHCc",
    nombre: "IMP EXP MERKASIA BUEN AMIGO",
    lat: -33.456109,
    lng: -70.672296,
    descripcion: "Tiendas"
  },
  {
    id: 473,
    placeId: "ChIJ9xJM3MTbYpYR_41ZaaS7iBY",
    nombre: "Imp. y Exp. La Vitalidad LTDA",
    lat: -33.518654,
    lng: -70.706276,
    descripcion: "Tiendas"
  },
  {
    id: 474,
    placeId: "ChIJy-GCwafbYpYRS_gQQ_H5K0g",
    nombre: "Imperio Animal",
    lat: -33.492458,
    lng: -70.668530,
    descripcion: "Tiendas"
  },
  {
    id: 475,
    placeId: "ChIJSa33RKXFYpYRdxDxsX9JlOU",
    nombre: "Importadora y Distribuidora de articulos de mascotas \"Dandipet\"",
    lat: -33.452859,
    lng: -70.677309,
    descripcion: "Tiendas"
  },
  {
    id: 476,
    placeId: "ChIJZ5OKQ4XDYpYRTqe5LhVRISE",
    nombre: "Intelligent Pet",
    lat: -33.455339,
    lng: -70.769338,
    descripcion: "Tiendas"
  },
  {
    id: 477,
    placeId: "ChIJJbhHg9nnYpYR6ZtaEP8bsZQ",
    nombre: "Inti Pet",
    lat: -33.576178,
    lng: -70.824480,
    descripcion: "Tiendas"
  },
  {
    id: 478,
    placeId: "ChIJKdYVzKfGYpYRzQWn24zheos",
    nombre: "Inv y Con Santa Bernardita",
    lat: -33.411307,
    lng: -70.700126,
    descripcion: "Tiendas"
  },
  {
    id: 479,
    placeId: "ChIJT78btmjFYpYRZH7CXtrCgiw",
    nombre: "iPet Tienda De Mascotas Y Peluquería Canina",
    lat: -33.414843,
    lng: -70.677838,
    descripcion: "Tiendas"
  },
  {
    id: 480,
    placeId: "ChIJW_jloG_RYpYRqfH3BzQpuY4",
    nombre: "Isi pet tobalaba",
    lat: -33.503152,
    lng: -70.561493,
    descripcion: "Tiendas"
  },
  {
    id: 481,
    placeId: "ChIJ_4BI0K3nYpYRu7Z0BMD3wFo",
    nombre: "ISIMAR PETSHOP",
    lat: -33.599481,
    lng: -70.883727,
    descripcion: "Tiendas"
  },
  {
    id: 482,
    placeId: "ChIJ9yZEaiXPYpYRC1U4i4D2r-o",
    nombre: "Jacko Pet Shop | Veterinaria | Peluquería de perros y gatos",
    lat: -33.472121,
    lng: -70.605628,
    descripcion: "Tiendas"
  },
  {
    id: 483,
    placeId: "ChIJAZdK5bjPYpYRbhZZxiII_Io",
    nombre: "Jardín Zoo",
    lat: -33.455556,
    lng: -70.589884,
    descripcion: "Tiendas"
  },
  {
    id: 484,
    placeId: "ChIJqdW9Jm_OYpYRg5mr4G2gC_8",
    nombre: "JardínZoo",
    lat: -33.441656,
    lng: -70.543635,
    descripcion: "Tiendas"
  },
  {
    id: 485,
    placeId: "ChIJAYCIQKq7YpYRcZFiFn1hupY",
    nombre: "Joyita Alimentos Para Mascotas ...Accesorios..Ferreteria",
    lat: -33.191157,
    lng: -70.664747,
    descripcion: "Tiendas"
  },
  {
    id: 486,
    placeId: "ChIJGxJBLQAfY5YRNLiJPw_HlV0",
    nombre: "JP MASCOTAS",
    lat: -33.744173,
    lng: -70.864474,
    descripcion: "Tiendas"
  },
  {
    id: 487,
    placeId: "ChIJWa5omGrhYpYRhuFMAm6FLGA",
    nombre: "JPet alimento de mascotas y accesorios",
    lat: -33.615968,
    lng: -70.878994,
    descripcion: "Tiendas"
  },
  {
    id: 488,
    placeId: "ChIJY2v8W4XEYpYRW3J7v8okq-c",
    nombre: "JUNGLE PET SHOP",
    lat: -33.464507,
    lng: -70.705343,
    descripcion: "Tiendas"
  },
  {
    id: 489,
    placeId: "ChIJ3bQg2WPPYpYRJyE6M5ADnzM",
    nombre: "K&N Mascotas",
    lat: -33.475915,
    lng: -70.601643,
    descripcion: "Tiendas"
  },
  {
    id: 490,
    placeId: "ChIJy_krXK1DY5YRIYYALp7_jwE",
    nombre: "KAHUI Pets Store",
    lat: -34.177133,
    lng: -70.695668,
    descripcion: "Tiendas"
  },
  {
    id: 491,
    placeId: "ChIJdRJXX-_FYpYRjVRATXAW1_U",
    nombre: "Kahui Pets Store Cugat Buin",
    lat: -33.734661,
    lng: -70.748479,
    descripcion: "Tiendas"
  },
  {
    id: 492,
    placeId: "ChIJUfjoswrFYpYRxmHVwQ6vWYo",
    nombre: "Kame Pet House S.p.a.",
    lat: -33.404402,
    lng: -70.632188,
    descripcion: "Tiendas"
  },
  {
    id: 493,
    placeId: "ChIJ7X7AHQDbYpYRhLLW42-mdrQ",
    nombre: "Kayucoca Pet Groomer",
    lat: -33.519632,
    lng: -70.639316,
    descripcion: "Tiendas"
  },
  {
    id: 494,
    placeId: "ChIJV-9AU_s9Y5YRg1Dg9FMhNuE",
    nombre: "Kennedy Pets",
    lat: -33.857284,
    lng: -70.741984,
    descripcion: "Tiendas"
  },
  {
    id: 495,
    placeId: "ChIJX8CRuRopY5YRzojCvx4m-X4",
    nombre: "Kennel claro de luna",
    lat: -33.701462,
    lng: -70.564183,
    descripcion: "Tiendas"
  },
  {
    id: 496,
    placeId: "ChIJS6rjmLPFYpYRIVt9Jg-KhuY",
    nombre: "King Terry Pets",
    lat: -33.413834,
    lng: -70.707844,
    descripcion: "Tiendas"
  },
  {
    id: 497,
    placeId: "ChIJ9ym3_Y3bYpYRER0D06Ss38g",
    nombre: "Kitty Pet Shop, peluquería canina, consulta veterinaria.",
    lat: -33.507797,
    lng: -70.678908,
    descripcion: "Tiendas"
  },
  {
    id: 498,
    placeId: "ChIJO1vEwqTHYpYRXpV-gHbVZ7Y",
    nombre: "Kitty-Kan Mascotas",
    lat: -33.400717,
    lng: -70.716325,
    descripcion: "Tiendas"
  },
  {
    id: 499,
    placeId: "ChIJOZv2zK7LYpYRjnA_fXVt3Vw",
    nombre: "Kovi Mascotas",
    lat: -33.358953,
    lng: -70.505963,
    descripcion: "Tiendas"
  },
  {
    id: 500,
    placeId: "ChIJl326dYnnYpYRrRY8zzWOBiM",
    nombre: "Kubu – Tienda de Mascotas Peñaflor",
    lat: -33.599022,
    lng: -70.886360,
    descripcion: "Tiendas"
  },
  {
    id: 501,
    placeId: "ChIJgTVu8vDDYpYRwUCudt7TVbY",
    nombre: "kuky pets",
    lat: -33.500688,
    lng: -70.784859,
    descripcion: "Tiendas"
  },
  {
    id: 502,
    placeId: "ChIJ_bW8LUHDYpYR05tCm6L7S7Y",
    nombre: "Kulliñ Pet Shop",
    lat: -33.480374,
    lng: -70.748895,
    descripcion: "Tiendas"
  },
  {
    id: 503,
    placeId: "ChIJnQXKo2XnYpYRgLnpY2vvoyI",
    nombre: "Kyra Store PetShop",
    lat: -33.600702,
    lng: -70.875525,
    descripcion: "Tiendas"
  },
  {
    id: 504,
    placeId: "ChIJo-FbsbjbYpYRA170krR--lk",
    nombre: "L&H PET SHOP LAS INDUSTRIAS",
    lat: -33.501976,
    lng: -70.627512,
    descripcion: "Tiendas"
  },
  {
    id: 505,
    placeId: "ChIJk5n8yt_bYpYRCVeXXuspNRM",
    nombre: "L&H PET SHOP SANTA ROSA",
    lat: -33.503783,
    lng: -70.638610,
    descripcion: "Tiendas"
  },
  {
    id: 506,
    placeId: "ChIJi7jn5YTnYpYRPh11QtU0gUU",
    nombre: "L1 BOOSTER",
    lat: -33.602351,
    lng: -70.872892,
    descripcion: "Tiendas"
  },
  {
    id: 507,
    placeId: "ChIJz336AY0pY5YRMmCZRM7czqA",
    nombre: "la bodega del ale",
    lat: -33.727580,
    lng: -70.554350,
    descripcion: "Tiendas"
  },
  {
    id: 508,
    placeId: "ChIJk_RT0VbZYpYRbDVjdMHnvSQ",
    nombre: "La Bodeguita",
    lat: -33.589605,
    lng: -70.708183,
    descripcion: "Tiendas"
  },
  {
    id: 509,
    placeId: "ChIJTR0D0rjmYpYR-U6YCuIjc78",
    nombre: "La Bodeguita de Ignacio",
    lat: -33.597230,
    lng: -70.885760,
    descripcion: "Tiendas"
  },
  {
    id: 510,
    placeId: "ChIJabr95qTRYpYRQxSyYPoMk0I",
    nombre: "La caja de Pandora",
    lat: -33.521109,
    lng: -70.619054,
    descripcion: "Tiendas"
  },
  {
    id: 511,
    placeId: "ChIJ8RdKWTzjYpYR2hdTelNJcq4",
    nombre: "La casa acuática 🐠🌿",
    lat: -33.663244,
    lng: -70.929131,
    descripcion: "Tiendas"
  },
  {
    id: 512,
    placeId: "ChIJyZ73U6a7YpYR9IIowJW5FqE",
    nombre: "LA CASA DE LOS PELUDITOS",
    lat: -33.218327,
    lng: -70.685814,
    descripcion: "Tiendas"
  },
  {
    id: 513,
    placeId: "ChIJD8aXuNohY5YRK4w3yFjTxa4",
    nombre: "La casa del perrito",
    lat: -33.731436,
    lng: -70.737062,
    descripcion: "Tiendas"
  },
  {
    id: 514,
    placeId: "ChIJbwWqPW3BYpYRHPYgIvZXcTE",
    nombre: "La Casa Naranja (Bazar, Almacén, Tienda De Alimentos Y Accesorios Para Mascotas)",
    lat: -33.398339,
    lng: -70.750466,
    descripcion: "Tiendas"
  },
  {
    id: 515,
    placeId: "ChIJKZ7398_0YpYR7iihnAcm7xg",
    nombre: "La cazadora Pet",
    lat: -33.403542,
    lng: -71.131363,
    descripcion: "Tiendas"
  },
  {
    id: 516,
    placeId: "ChIJleUOlubRYpYR-78MBaWx_Jo",
    nombre: "La Granja Pet",
    lat: -33.478777,
    lng: -70.545599,
    descripcion: "Tiendas"
  },
  {
    id: 517,
    placeId: "ChIJXc95VQDRYpYRLl7smUWOSGM",
    nombre: "La Guarida Pet - Tienda Mascotas",
    lat: -33.528205,
    lng: -70.575599,
    descripcion: "Tiendas"
  },
  {
    id: 518,
    placeId: "ChIJ-1_MfQDbYpYR78UXyyGXxOs",
    nombre: "La Junglita Pets",
    lat: -33.516157,
    lng: -70.658183,
    descripcion: "Tiendas"
  },
  {
    id: 519,
    placeId: "ChIJay72e7_FYpYR1kaC_pIZvSQ",
    nombre: "La manada - Pet Shop",
    lat: -33.440932,
    lng: -70.664461,
    descripcion: "Tiendas"
  },
  {
    id: 520,
    placeId: "ChIJDaZJPm7bYpYRPMcWpKb-aD0",
    nombre: "La manada - Pet Shop",
    lat: -33.505993,
    lng: -70.658134,
    descripcion: "Tiendas"
  },
  {
    id: 521,
    placeId: "ChIJkY3J54DjYpYRXiBsHUlnwVA",
    nombre: "LA MANADA PEQUEÑA",
    lat: -33.652714,
    lng: -70.927313,
    descripcion: "Tiendas"
  },
  {
    id: 522,
    placeId: "ChIJpz5-icTWYpYR_ooQhFkrM0I",
    nombre: "La Mascota - Punto de Retiro de Compras Online",
    lat: -33.575692,
    lng: -70.559390,
    descripcion: "Tiendas"
  },
  {
    id: 523,
    placeId: "ChIJ3ywqLhyWYpYRgOq5jrZSKKg",
    nombre: "La Mascoteria Batuco",
    lat: -33.240850,
    lng: -70.815472,
    descripcion: "Tiendas"
  },
  {
    id: 524,
    placeId: "ChIJqeqBCODHYpYRnXukida58Uc",
    nombre: "La nube Petshop",
    lat: -33.368005,
    lng: -70.629185,
    descripcion: "Tiendas"
  },
  {
    id: 525,
    placeId: "ChIJ_XnKX5DbYpYRgRvXeZ56-5M",
    nombre: "La nueva jerusalen (don pedro)",
    lat: -33.579631,
    lng: -70.694249,
    descripcion: "Tiendas"
  },
  {
    id: 526,
    placeId: "ChIJeVUiw9vzYpYROiEH5r-R_fg",
    nombre: "La Palmera Punto Blue Express",
    lat: -33.462358,
    lng: -71.085500,
    descripcion: "Tiendas"
  },
  {
    id: 527,
    placeId: "ChIJiZIFw3vPYpYRJH4s-f4oFMk",
    nombre: "La Pandillita Petshop-Peluquería Canina-Consulta",
    lat: -33.302444,
    lng: -70.690954,
    descripcion: "Tiendas"
  },
  {
    id: 528,
    placeId: "ChIJh1EkmX0jY5YRSMHFXPhr_GU",
    nombre: "La pica de cholito",
    lat: -33.814070,
    lng: -70.742246,
    descripcion: "Tiendas"
  },
  {
    id: 529,
    placeId: "ChIJh1EkmX0jY5YRSMHFXPhr_GU",
    nombre: "La pica de cholito",
    lat: -33.814070,
    lng: -70.742246,
    descripcion: "Tiendas"
  },
  {
    id: 530,
    placeId: "ChIJsT6Wrj_bYpYRCDAiqwb8JUc",
    nombre: "La Pica' De Mi Mascota",
    lat: -33.503082,
    lng: -70.626722,
    descripcion: "Tiendas"
  },
  {
    id: 531,
    placeId: "ChIJ82ckHbfIYpYR3EBg2WUVnQE",
    nombre: "La Pirámide",
    lat: -33.386583,
    lng: -70.601667,
    descripcion: "Tiendas"
  },
  {
    id: 532,
    placeId: "ChIJ4XAt02jRYpYRC7OZpgDJnbs",
    nombre: "La Tiendita Cat-Dog",
    lat: -33.529639,
    lng: -70.611645,
    descripcion: "Tiendas"
  },
  {
    id: 533,
    placeId: "ChIJewQYH4fbYpYRr37XQL869KM",
    nombre: "La TIENDITA DE OBES",
    lat: -33.455372,
    lng: -70.592998,
    descripcion: "Tiendas"
  },
  {
    id: 534,
    placeId: "ChIJjQknCSPJYpYREE9xmtKqI0A",
    nombre: "lacroquette.cl",
    lat: -33.323557,
    lng: -70.537564,
    descripcion: "Tiendas"
  },
  {
    id: 535,
    placeId: "ChIJJQ4Z2urbYpYRCtU25q5jv4s",
    nombre: "Laika Lo espejo",
    lat: -33.520811,
    lng: -70.694244,
    descripcion: "Tiendas"
  },
  {
    id: 536,
    placeId: "ChIJN0MOcy7GYpYRu00u3KDshP0",
    nombre: "Las Mascotas",
    lat: -33.389354,
    lng: -70.642112,
    descripcion: "Tiendas"
  },
  {
    id: 537,
    placeId: "ChIJVTTYo8HHYpYRa8XHKT82myU",
    nombre: "Lazy Dogs",
    lat: -33.340416,
    lng: -70.673254,
    descripcion: "Tiendas"
  },
  {
    id: 538,
    placeId: "ChIJVVIWMQDDYpYRKg-zUX-3HAI",
    nombre: "Lion Pet Shop",
    lat: -33.484941,
    lng: -70.748197,
    descripcion: "Tiendas"
  },
  {
    id: 539,
    placeId: "ChIJJT-dLYbXYpYRiTdTzdAnlzY",
    nombre: "Little pet",
    lat: -33.565548,
    lng: -70.563563,
    descripcion: "Tiendas"
  },
  {
    id: 540,
    placeId: "ChIJEVlSgC7DYpYRdy7xHbHg0Hc",
    nombre: "Lobita’s Tienda de Mascotas",
    lat: -33.504458,
    lng: -70.752791,
    descripcion: "Tiendas"
  },
  {
    id: 541,
    placeId: "ChIJRx6AeQDHYpYRmVrMl2QJAkY",
    nombre: "Local Denisse",
    lat: -33.386209,
    lng: -70.663125,
    descripcion: "Tiendas"
  },
  {
    id: 542,
    placeId: "ChIJsY1WZvjdYpYRZDgEd9qLI6w",
    nombre: "Locura Animal",
    lat: -33.513757,
    lng: -70.771010,
    descripcion: "Tiendas"
  },
  {
    id: 543,
    placeId: "ChIJ4yB6KRi3Y5YRtvYhRrWgiy8",
    nombre: "LoicaPet",
    lat: -33.965709,
    lng: -71.496254,
    descripcion: "Tiendas"
  },
  {
    id: 544,
    placeId: "ChIJmcTUQQnbYpYRVMgZ_F4V7KU",
    nombre: "Lopets, alimentos para mascotas",
    lat: -33.508230,
    lng: -70.676428,
    descripcion: "Tiendas"
  },
  {
    id: 545,
    placeId: "ChIJlT4AhY3FYpYROK6TmuKmmQo",
    nombre: "Los cariñositos",
    lat: -33.411643,
    lng: -70.659261,
    descripcion: "Tiendas"
  },
  {
    id: 546,
    placeId: "ChIJywB6_fn1YpYRLCMi-90kPZ0",
    nombre: "Los Peluditos Pet shop",
    lat: -33.396199,
    lng: -71.127043,
    descripcion: "Tiendas"
  },
  {
    id: 547,
    placeId: "ChIJuZaJzT3JYpYR8_3-Y74nFwE",
    nombre: "Love Chaco Chile",
    lat: -33.359235,
    lng: -70.530428,
    descripcion: "Tiendas"
  },
  {
    id: 548,
    placeId: "ChIJ0dnvIVSVYpYRytfdAVVZFQE",
    nombre: "Luana",
    lat: -33.276427,
    lng: -70.883897,
    descripcion: "Tiendas"
  },
  {
    id: 549,
    placeId: "ChIJkw5rEWPHYpYR19WlO5j3A0w",
    nombre: "Lucky Animals",
    lat: -33.402496,
    lng: -70.674699,
    descripcion: "Tiendas"
  },
  {
    id: 550,
    placeId: "ChIJgavnPgDZYpYRWRZG6YFdT5s",
    nombre: "Lucy Pets Barf",
    lat: -33.576048,
    lng: -70.645241,
    descripcion: "Tiendas"
  },
  {
    id: 551,
    placeId: "ChIJ5znxNSjXYpYR06miqJnc_Qs",
    nombre: "LujosPet",
    lat: -33.587062,
    lng: -70.563422,
    descripcion: "Tiendas"
  },
  {
    id: 552,
    placeId: "ChIJv5FE8cfDYpYRtEJizZkxPmw",
    nombre: "Luna Pet Shop",
    lat: -33.486541,
    lng: -70.768833,
    descripcion: "Tiendas"
  },
  {
    id: 553,
    placeId: "ChIJ114pYQbnYpYR0KdRCGLRK48",
    nombre: "Lupet",
    lat: -33.610868,
    lng: -70.877326,
    descripcion: "Tiendas"
  },
  {
    id: 554,
    placeId: "ChIJ114pYQbnYpYR0KdRCGLRK48",
    nombre: "Lupet alimento para mascotas",
    lat: -33.610868,
    lng: -70.877326,
    descripcion: "Tiendas"
  },
  {
    id: 555,
    placeId: "ChIJmZJ-VcjZYpYRX0qNFrjdX58",
    nombre: "M&S Pet Shop",
    lat: -33.608114,
    lng: -70.682892,
    descripcion: "Tiendas"
  },
  {
    id: 556,
    placeId: "ChIJwR1VPu0hY5YRTQf9gacI5nk",
    nombre: "Mac Pets",
    lat: -33.741144,
    lng: -70.744407,
    descripcion: "Tiendas"
  },
  {
    id: 557,
    placeId: "ChIJ-5BNrva6YpYR-XvG_jxwLGY",
    nombre: "Madagascar Alimento Para Mascotas",
    lat: -33.181986,
    lng: -70.652017,
    descripcion: "Tiendas"
  },
  {
    id: 558,
    placeId: "ChIJPc_aDy7PYpYR0xQp2dMwq0E",
    nombre: "Madagascar Pet Shop",
    lat: -33.432728,
    lng: -70.601735,
    descripcion: "Tiendas"
  },
  {
    id: 559,
    placeId: "ChIJkROly-TZYpYRVS7Y2xF_tM4",
    nombre: "MAKOPETS",
    lat: -33.594558,
    lng: -70.704803,
    descripcion: "Tiendas"
  },
  {
    id: 560,
    placeId: "ChIJIbRqsVrZYpYRXcNq6Jr0e_k",
    nombre: "Malepets",
    lat: -33.577196,
    lng: -70.657907,
    descripcion: "Tiendas"
  },
  {
    id: 561,
    placeId: "ChIJ9XI2je3BYpYRADaC0vRd5H0",
    nombre: "Manchados",
    lat: -33.360528,
    lng: -70.721993,
    descripcion: "Tiendas"
  },
  {
    id: 562,
    placeId: "ChIJNTsUJ-7bYpYRhmL_HZi1ouk",
    nombre: "Mandy Pets",
    lat: -33.563138,
    lng: -70.649536,
    descripcion: "Tiendas"
  },
  {
    id: 563,
    placeId: "ChIJZUHKvFjjYpYRTJHCz_Mk2iA",
    nombre: "Mappets",
    lat: -33.629435,
    lng: -70.910062,
    descripcion: "Tiendas"
  },
  {
    id: 564,
    placeId: "ChIJ7VDJVFLZYpYR4TGL8LBAo0I",
    nombre: "Maranatha petshop",
    lat: -33.609352,
    lng: -70.707432,
    descripcion: "Tiendas"
  },
  {
    id: 565,
    placeId: "ChIJ7ZS5ZW7bYpYRapOr2wGRRw4",
    nombre: "Marcelo Alimentos & Accesorios Para Mascotas",
    lat: -33.527188,
    lng: -70.700008,
    descripcion: "Tiendas"
  },
  {
    id: 566,
    placeId: "ChIJew53WDDbYpYR-IZYK-wGBb8",
    nombre: "MartyPets",
    lat: -33.564067,
    lng: -70.667560,
    descripcion: "Tiendas"
  },
  {
    id: 567,
    placeId: "ChIJ6SrVOh_QYpYRKpKw3MlUY2Y",
    nombre: "Mas Mascotas",
    lat: -33.485191,
    lng: -70.600563,
    descripcion: "Tiendas"
  },
  {
    id: 568,
    placeId: "ChIJ86itMEzFYpYRDBB1DEwNyBE",
    nombre: "Más Patitas Tienda para Mascotas",
    lat: -33.418953,
    lng: -70.660508,
    descripcion: "Tiendas"
  },
  {
    id: 569,
    placeId: "ChIJbSZIFbPHYpYRBM6AsdEuncY",
    nombre: "MasCan",
    lat: -33.347612,
    lng: -70.695122,
    descripcion: "Tiendas"
  },
  {
    id: 570,
    placeId: "ChIJI0fw61nLYpYRMWxFtkutx50",
    nombre: "Masconia",
    lat: -33.351045,
    lng: -70.509805,
    descripcion: "Tiendas"
  },
  {
    id: 571,
    placeId: "ChIJAYVcd2nBYpYRVJbk4Q5YrFo",
    nombre: "MASCOPELOS",
    lat: -33.365914,
    lng: -70.724841,
    descripcion: "Tiendas"
  },
  {
    id: 572,
    placeId: "ChIJJ95c6WKxY5YRHtWE4Q3EU1A",
    nombre: "Mascoplanet",
    lat: -33.897715,
    lng: -71.453708,
    descripcion: "Tiendas"
  },
  {
    id: 573,
    placeId: "ChIJYYsKqIDPYpYRnAY5RYTYI70",
    nombre: "MascoShop Las Condes",
    lat: -33.417130,
    lng: -70.542288,
    descripcion: "Tiendas"
  },
  {
    id: 574,
    placeId: "ChIJ14G-QojRYpYRlhYmTgNNx90",
    nombre: "Mascota con estilo",
    lat: -33.523538,
    lng: -70.619729,
    descripcion: "Tiendas"
  },
  {
    id: 575,
    placeId: "ChIJ6yrHL63BYpYRtvoexBywK3Y",
    nombre: "Mascota Feliz",
    lat: -33.416792,
    lng: -70.750175,
    descripcion: "Tiendas"
  },
  {
    id: 576,
    placeId: "ChIJ6yrHL63BYpYRtvoexBywK3Y",
    nombre: "Mascota Feliz Feria",
    lat: -33.416792,
    lng: -70.750175,
    descripcion: "Tiendas"
  },
  {
    id: 577,
    placeId: "ChIJ6yrHL63BYpYRtvoexBywK3Y",
    nombre: "Mascota Feliz Feria",
    lat: -33.416792,
    lng: -70.750175,
    descripcion: "Tiendas"
  },
  {
    id: 578,
    placeId: "ChIJ6yrHL63BYpYRtvoexBywK3Y",
    nombre: "Mascota Feliz Feria",
    lat: -33.416792,
    lng: -70.750175,
    descripcion: "Tiendas"
  },
  {
    id: 579,
    placeId: "ChIJaTLcxLj3YpYRezTNYWyNYJ4",
    nombre: "Mascota Market",
    lat: -33.517178,
    lng: -71.123011,
    descripcion: "Tiendas"
  },
  {
    id: 580,
    placeId: "ChIJYYZAXPzPYpYRsMMWXurYIUo",
    nombre: "Mascota Urbana",
    lat: -33.455564,
    lng: -70.591377,
    descripcion: "Tiendas"
  },
  {
    id: 581,
    placeId: "ChIJk_RT0VbZYpYRbDVjdMHnvSQ",
    nombre: "Mascotas",
    lat: -33.589605,
    lng: -70.708183,
    descripcion: "Tiendas"
  },
  {
    id: 582,
    placeId: "ChIJYTtLGdjaYpYRVEqp8j3GN4E",
    nombre: "Mascotas a la Moda",
    lat: -33.510274,
    lng: -70.671670,
    descripcion: "Tiendas"
  },
  {
    id: 583,
    placeId: "ChIJxZeaJ3XXYpYRf58l661vIuE",
    nombre: "Mascotas Claudia",
    lat: -33.589911,
    lng: -70.612682,
    descripcion: "Tiendas"
  },
  {
    id: 584,
    placeId: "ChIJGVCNCdbbYpYRzR8bniK7pHI",
    nombre: "Mascotas del Bosque",
    lat: -33.578483,
    lng: -70.675328,
    descripcion: "Tiendas"
  },
  {
    id: 585,
    placeId: "ChIJcZRnYee_YpYRHtSMUcoL88M",
    nombre: "Mascotas del valle",
    lat: -33.315731,
    lng: -70.765897,
    descripcion: "Tiendas"
  },
  {
    id: 586,
    placeId: "ChIJY3QNTKXDYpYRmni2mCHv6y4",
    nombre: "Mascotas felices",
    lat: -33.501342,
    lng: -70.729784,
    descripcion: "Tiendas"
  },
  {
    id: 587,
    placeId: "ChIJs0ybVADDYpYRmiUNCcgIWE4",
    nombre: "MASCOTAS FELICES #6932",
    lat: -33.417610,
    lng: -70.730578,
    descripcion: "Tiendas"
  },
  {
    id: 588,
    placeId: "ChIJGbjDEVDZYpYRDafYnaDSvo0",
    nombre: "Mascotas Food Express",
    lat: -33.615988,
    lng: -70.721905,
    descripcion: "Tiendas"
  },
  {
    id: 589,
    placeId: "ChIJlaSvQj_HYpYRRlqKxYX9i0o",
    nombre: "Mascotas Kings Pets",
    lat: -33.352783,
    lng: -70.673339,
    descripcion: "Tiendas"
  },
  {
    id: 590,
    placeId: "ChIJf6TjvmjPYpYRE9W5_F95rvs",
    nombre: "Mascotas Providencia",
    lat: -33.421524,
    lng: -70.608664,
    descripcion: "Tiendas"
  },
  {
    id: 591,
    placeId: "ChIJQyBX0mPFYpYRnELXA_nCtbE",
    nombre: "Mascotas santiago",
    lat: -33.415063,
    lng: -70.664657,
    descripcion: "Tiendas"
  },
  {
    id: 592,
    placeId: "ChIJQyBX0mPFYpYRnELXA_nCtbE",
    nombre: "Mascotas santiago",
    lat: -33.415063,
    lng: -70.664657,
    descripcion: "Tiendas"
  },
  {
    id: 593,
    placeId: "ChIJ7ySJMcHRYpYRXV51ZHK5lZ8",
    nombre: "Mascotas somma",
    lat: -33.480012,
    lng: -70.590216,
    descripcion: "Tiendas"
  },
  {
    id: 594,
    placeId: "ChIJK37AFQDjYpYRd5ulOza-Mcs",
    nombre: "Mascotas Talagante",
    lat: -33.665072,
    lng: -70.927860,
    descripcion: "Tiendas"
  },
  {
    id: 595,
    placeId: "ChIJt_m0oonHYpYRvMF4oW2PEk4",
    nombre: "MASCOTAS Y BRASAS - (Carbón de Espino y Alimento para Mascotas)",
    lat: -33.390449,
    lng: -70.670672,
    descripcion: "Tiendas"
  },
  {
    id: 596,
    placeId: "ChIJFWLLWX25YpYR0StrVzmqj4A",
    nombre: "mascotasDor",
    lat: -33.272685,
    lng: -70.658419,
    descripcion: "Tiendas"
  },
  {
    id: 597,
    placeId: "ChIJi0VA7BOVYpYRfQE1pBLrk4c",
    nombre: "MascotasPro",
    lat: -33.323738,
    lng: -70.750009,
    descripcion: "Tiendas"
  },
  {
    id: 598,
    placeId: "ChIJvx9m8cTDYpYRlmQi98tUptE",
    nombre: "Mascoteria MatPau",
    lat: -33.431088,
    lng: -70.748799,
    descripcion: "Tiendas"
  },
  {
    id: 599,
    placeId: "ChIJj_nQdovRYpYRv0Ua5uqeaDY",
    nombre: "Mascoteria SAM",
    lat: -33.560201,
    lng: -70.612508,
    descripcion: "Tiendas"
  },
  {
    id: 600,
    placeId: "ChIJeW6U44jnYpYRp2F-w0XkmW8",
    nombre: "Mascotienda",
    lat: -33.603318,
    lng: -70.880176,
    descripcion: "Tiendas"
  },
  {
    id: 601,
    placeId: "ChIJddJDq27QYpYRet0i8fq4y3o",
    nombre: "MASCOTIENDA KUKY",
    lat: -33.508630,
    lng: -70.603899,
    descripcion: "Tiendas"
  },
  {
    id: 602,
    placeId: "ChIJgxBy-qnbYpYRNxoH0Xw9o_c",
    nombre: "Mascotin",
    lat: -33.524677,
    lng: -70.636410,
    descripcion: "Tiendas"
  },
  {
    id: 603,
    placeId: "ChIJI2_8Fj_PYpYRck594OAwJiA",
    nombre: "Mascotitas",
    lat: -33.456044,
    lng: -70.571134,
    descripcion: "Tiendas"
  },
  {
    id: 604,
    placeId: "ChIJkYDJNf_BYpYRC291B0sfv8E",
    nombre: "Mascotopia PetShop",
    lat: -33.353504,
    lng: -70.726895,
    descripcion: "Tiendas"
  },
  {
    id: 605,
    placeId: "ChIJo3wg2MTHYpYRf7D3SgV3kOo",
    nombre: "Maske Mascotas Conchalí",
    lat: -33.388796,
    lng: -70.661184,
    descripcion: "Tiendas"
  },
  {
    id: 606,
    placeId: "ChIJB6ZuvWjPYpYRAOXrMPBTA2o",
    nombre: "Maskot Boutique - Punto Bluexpress",
    lat: -33.421524,
    lng: -70.608664,
    descripcion: "Tiendas"
  },
  {
    id: 607,
    placeId: "ChIJiRvlCArbYpYRDA4R16ERvwc",
    nombre: "Maskoticas",
    lat: -33.510976,
    lng: -70.660323,
    descripcion: "Tiendas"
  },
  {
    id: 608,
    placeId: "ChIJ4xkWjR3bYpYRrt3fiHTL-ec",
    nombre: "Maskoticas - Peluquería y Petshop",
    lat: -33.509343,
    lng: -70.664224,
    descripcion: "Tiendas"
  },
  {
    id: 609,
    placeId: "ChIJcW_Ll1HHYpYRQe5dwGvvIGo",
    nombre: "Maskotin Pet Shop",
    lat: -33.456404,
    lng: -70.556245,
    descripcion: "Tiendas"
  },
  {
    id: 610,
    placeId: "ChIJdRP7DQDFYpYRuAp-PbmAq_c",
    nombre: "Maskotips",
    lat: -33.447499,
    lng: -70.708259,
    descripcion: "Tiendas"
  },
  {
    id: 611,
    placeId: "ChIJIZHDrDrBYpYRSXn3GCIo5I4",
    nombre: "MasKotitas",
    lat: -33.383165,
    lng: -70.729184,
    descripcion: "Tiendas"
  },
  {
    id: 612,
    placeId: "ChIJIZHDrDrBYpYRSXn3GCIo5I4",
    nombre: "Maskotitas Petshop, tienda de mascotas.",
    lat: -33.383165,
    lng: -70.729184,
    descripcion: "Tiendas"
  },
  {
    id: 613,
    placeId: "ChIJASlvYiDEYpYRQZr2isxCxdE",
    nombre: "Máspet Safari",
    lat: -33.409994,
    lng: -70.690151,
    descripcion: "Tiendas"
  },
  {
    id: 614,
    placeId: "ChIJoa2hWw_FYpYRzm4gX06hMC4",
    nombre: "Máspet Safari Independencia",
    lat: -33.415244,
    lng: -70.677503,
    descripcion: "Tiendas"
  },
  {
    id: 615,
    placeId: "ChIJpyGjmaHdYpYRMtKAKyZdzeg",
    nombre: "Masticando",
    lat: -33.566131,
    lng: -70.776758,
    descripcion: "Tiendas"
  },
  {
    id: 616,
    placeId: "ChIJRV7297vHYpYRPoPm4DZjVio",
    nombre: "Masticanes",
    lat: -33.379902,
    lng: -70.683548,
    descripcion: "Tiendas"
  },
  {
    id: 617,
    placeId: "ChIJy9bnJBjdYpYR4hOYh2vJGN4",
    nombre: "Mausa Alimento Mascotas",
    lat: -33.532812,
    lng: -70.775700,
    descripcion: "Tiendas"
  },
  {
    id: 618,
    placeId: "ChIJo7Qp44XbYpYRCi7lz-HrMWY",
    nombre: "MAX HUELLITAS",
    lat: -33.577368,
    lng: -70.666469,
    descripcion: "Tiendas"
  },
  {
    id: 619,
    placeId: "ChIJ0azoPUbbYpYRvo9IrjEVVNU",
    nombre: "Maxcota Alimento y Accesorio",
    lat: -33.519047,
    lng: -70.670054,
    descripcion: "Tiendas"
  },
  {
    id: 620,
    placeId: "ChIJT568hO7RYpYRqM-bLLoPIeI",
    nombre: "Maxi Pet Shop",
    lat: -33.473723,
    lng: -70.601125,
    descripcion: "Tiendas"
  },
  {
    id: 621,
    placeId: "ChIJrV61OZ_nYpYRJz2r_iAed68",
    nombre: "Máximo pet",
    lat: -33.609252,
    lng: -70.884638,
    descripcion: "Tiendas"
  },
  {
    id: 622,
    placeId: "ChIJpWcmWEbdYpYRPsNfKD2iot8",
    nombre: "Maxipet",
    lat: -33.525215,
    lng: -70.792136,
    descripcion: "Tiendas"
  },
  {
    id: 623,
    placeId: "ChIJCwu2eGXZYpYRYSHUte2b8Kk",
    nombre: "Mayfe pets",
    lat: -33.612194,
    lng: -70.688137,
    descripcion: "Tiendas"
  },
  {
    id: 624,
    placeId: "ChIJC02ZdBTXYpYRAVcuAD-lf7k",
    nombre: "Megamascotas Chile",
    lat: -33.579188,
    lng: -70.583035,
    descripcion: "Tiendas"
  },
  {
    id: 625,
    placeId: "ChIJMVH1eOfRYpYRp6dd4OTO4OQ",
    nombre: "MercadoPet Store",
    lat: -33.529882,
    lng: -70.554050,
    descripcion: "Tiendas"
  },
  {
    id: 626,
    placeId: "ChIJ_fXxmHBFZKAReLeGLvefHGg",
    nombre: "MercadoPet Store CDLV",
    lat: -33.448327,
    lng: -70.843810,
    descripcion: "Tiendas"
  },
  {
    id: 627,
    placeId: "ChIJk6CkheXnYpYREl8U0fc7yRM",
    nombre: "MercadoPet Store Peñaflor",
    lat: -33.600635,
    lng: -70.862779,
    descripcion: "Tiendas"
  },
  {
    id: 628,
    placeId: "ChIJ_VO9VAnRYpYRWHf26O0tLuw",
    nombre: "MercadoPet Store W.M",
    lat: -33.521902,
    lng: -70.558730,
    descripcion: "Tiendas"
  },
  {
    id: 629,
    placeId: "ChIJb32TnhVVYpYRcz0QVCY7rU8",
    nombre: "MESTIZO, pet shop y peluquería canina",
    lat: -33.688739,
    lng: -71.214170,
    descripcion: "Tiendas"
  },
  {
    id: 630,
    placeId: "ChIJpyxB3-_PYpYRWsHb7h9itvY",
    nombre: "Mi Amigo Fiel pet shop",
    lat: -33.464123,
    lng: -70.536660,
    descripcion: "Tiendas"
  },
  {
    id: 631,
    placeId: "ChIJkbbfYyHXYpYREUv_B-_4-Q4",
    nombre: "Mi Conjunto De Mascotas",
    lat: -33.613921,
    lng: -70.576746,
    descripcion: "Tiendas"
  },
  {
    id: 632,
    placeId: "ChIJ5RATOWn1YpYR5CIcpTU9WLQ",
    nombre: "mi fauna chile",
    lat: -33.402973,
    lng: -71.129240,
    descripcion: "Tiendas"
  },
  {
    id: 633,
    placeId: "ChIJq6OYf5bbYpYR33UwkWgShoo",
    nombre: "Mi Mascota Chile Spa",
    lat: -33.512575,
    lng: -70.658364,
    descripcion: "Tiendas"
  },
  {
    id: 634,
    placeId: "ChIJnZ4hjfjEYpYR0LCpolbrjIU",
    nombre: "Mi mascota detalle",
    lat: -33.450217,
    lng: -70.674824,
    descripcion: "Tiendas"
  },
  {
    id: 635,
    placeId: "ChIJOVVLvPz1YpYRCJG0n0kZTvk",
    nombre: "Mi mascota feliz Curacaví",
    lat: -33.397907,
    lng: -71.122002,
    descripcion: "Tiendas"
  },
  {
    id: 636,
    placeId: "ChIJF5PsVvvFYpYRypHKcDz9sME",
    nombre: "Mi Regalon",
    lat: -33.405620,
    lng: -70.633033,
    descripcion: "Tiendas"
  },
  {
    id: 637,
    placeId: "ChIJxyg_iDvbYpYRfG512qWWvhE",
    nombre: "miamigoconpatitas",
    lat: -33.574066,
    lng: -70.704100,
    descripcion: "Tiendas"
  },
  {
    id: 638,
    placeId: "ChIJj4K8wpDDYpYRmi5ORVAVur4",
    nombre: "Michi y guau",
    lat: -33.450232,
    lng: -70.722218,
    descripcion: "Tiendas"
  },
  {
    id: 639,
    placeId: "ChIJEe8cdgD_YpYRv8QS-DhBDxY",
    nombre: "Michican",
    lat: -33.681071,
    lng: -71.179114,
    descripcion: "Tiendas"
  },
  {
    id: 640,
    placeId: "ChIJx-3pmZbDYpYRL8Sbm7YjEhg",
    nombre: "Mil Kositas Pet’s",
    lat: -33.444051,
    lng: -70.736609,
    descripcion: "Tiendas"
  },
  {
    id: 641,
    placeId: "ChIJUSG7aB27YpYRRXe8Y5XwUQc",
    nombre: "Mil Paticas Pet Shop",
    lat: -33.190722,
    lng: -70.673209,
    descripcion: "Tiendas"
  },
  {
    id: 642,
    placeId: "ChIJNfcZ9kXFYpYR_YQucH-L0Xk",
    nombre: "Mila pet shop",
    lat: -33.423768,
    lng: -70.656610,
    descripcion: "Tiendas"
  },
  {
    id: 643,
    placeId: "ChIJnRgtSADFYpYRPlAv5kPk_eM",
    nombre: "Mila petshop",
    lat: -33.423764,
    lng: -70.656644,
    descripcion: "Tiendas"
  },
  {
    id: 644,
    placeId: "ChIJi5DQFX_dYpYRm_tEP01UtUI",
    nombre: "Milipet Petshop",
    lat: -33.510312,
    lng: -70.758134,
    descripcion: "Tiendas"
  },
  {
    id: 645,
    placeId: "ChIJeZhtmOXbYpYR1_u9Bye78P8",
    nombre: "MillaPets - Tienda de Mascotas",
    lat: -33.522019,
    lng: -70.663684,
    descripcion: "Tiendas"
  },
  {
    id: 646,
    placeId: "ChIJVYtcyyXHYpYRipq_SPxczxc",
    nombre: "Milo Pet Shop",
    lat: -33.393978,
    lng: -70.650671,
    descripcion: "Tiendas"
  },
  {
    id: 647,
    placeId: "ChIJrRJImcLBYpYRXZ2jZd2KK4A",
    nombre: "Milu pet shop",
    lat: -33.383900,
    lng: -70.730280,
    descripcion: "Tiendas"
  },
  {
    id: 648,
    placeId: "ChIJ1eK12jfnYpYRzY9xR_G9pSA",
    nombre: "Mimados_grooming",
    lat: -33.611134,
    lng: -70.876740,
    descripcion: "Tiendas"
  },
  {
    id: 649,
    placeId: "ChIJY9A7MmrFYpYRuX66yYAATJk",
    nombre: "Mimi Mascota",
    lat: -33.455077,
    lng: -70.673868,
    descripcion: "Tiendas"
  },
  {
    id: 650,
    placeId: "ChIJh_PKsVrbYpYRP9GhmUefaOg",
    nombre: "Mimosos y Peludos",
    lat: -33.516906,
    lng: -70.700650,
    descripcion: "Tiendas"
  },
  {
    id: 651,
    placeId: "ChIJKTfAYrbjYpYR5WA7I26VpvU",
    nombre: "Minimarket Dejando Huellas",
    lat: -33.658931,
    lng: -70.924192,
    descripcion: "Tiendas"
  },
  {
    id: 652,
    placeId: "ChIJiWXE38kLY5YRrXLEnvFIZzM",
    nombre: "Minimarket Las Primas",
    lat: -34.033069,
    lng: -71.106747,
    descripcion: "Tiendas"
  },
  {
    id: 653,
    placeId: "ChIJ6_zynrxfYpYRg6Lz1wOChBA",
    nombre: "MINIMARKET QUILHUICA Y ALIMENTOS PARA MASCOTAS",
    lat: -33.497464,
    lng: -71.264939,
    descripcion: "Tiendas"
  },
  {
    id: 654,
    placeId: "ChIJNVfsxAy3Y5YRw1Ta9kPzEO4",
    nombre: "MinimarPet/Minimarket Serrano",
    lat: -33.943612,
    lng: -71.560125,
    descripcion: "Tiendas"
  },
  {
    id: 655,
    placeId: "ChIJ_3DC2CfHYpYRXjESXpUjfgI",
    nombre: "MiniPet Market Renca",
    lat: -33.405575,
    lng: -70.703141,
    descripcion: "Tiendas"
  },
  {
    id: 656,
    placeId: "ChIJFxeiNVjDYpYRHPtUlacc3D4",
    nombre: "Mio Miau Miau",
    lat: -33.491927,
    lng: -70.724175,
    descripcion: "Tiendas"
  },
  {
    id: 657,
    placeId: "ChIJz69nWq7GYpYRTbrkqM1jRq8",
    nombre: "MIS MASCOTAS",
    lat: -33.403496,
    lng: -70.708725,
    descripcion: "Tiendas"
  },
  {
    id: 658,
    placeId: "ChIJQ_bcmjHFYpYRrHf-1N2g5MQ",
    nombre: "Mis Regalones",
    lat: -33.479344,
    lng: -70.651361,
    descripcion: "Tiendas"
  },
  {
    id: 659,
    placeId: "ChIJt0k0G_PRYpYRwmxCitNlSgI",
    nombre: "Mis Regalones - alimento Mascotas",
    lat: -33.548636,
    lng: -70.619602,
    descripcion: "Tiendas"
  },
  {
    id: 660,
    placeId: "ChIJYQZ98N7nYpYRCgWLlxUm67M",
    nombre: "Mispeyos",
    lat: -33.571618,
    lng: -70.828341,
    descripcion: "Tiendas"
  },
  {
    id: 661,
    placeId: "ChIJDzTt317bYpYRzPLYUMvXgpc",
    nombre: "MitiendAnimal",
    lat: -33.559078,
    lng: -70.712406,
    descripcion: "Tiendas"
  },
  {
    id: 662,
    placeId: "ChIJRzfytvXFYpYRTsUFm_EtopI",
    nombre: "MODA ANIMAL",
    lat: -33.452020,
    lng: -70.647146,
    descripcion: "Tiendas"
  },
  {
    id: 663,
    placeId: "ChIJ72nwgR3FYpYRk_s4MW8_a_w",
    nombre: "Mollypet",
    lat: -33.448893,
    lng: -70.669279,
    descripcion: "Tiendas"
  },
  {
    id: 664,
    placeId: "ChIJyzmAnUDnYpYRkOwfDGkU0QM",
    nombre: "Mónaco tienda para mascotas",
    lat: -33.603049,
    lng: -70.876685,
    descripcion: "Tiendas"
  },
  {
    id: 665,
    placeId: "ChIJFdCLOx6jYpYReLqmd_6pn8w",
    nombre: "mondpets fabrica",
    lat: -33.131623,
    lng: -70.803796,
    descripcion: "Tiendas"
  },
  {
    id: 666,
    placeId: "ChIJET2zrmPRvJURW_FJbEavE5s",
    nombre: "Monte Can Tienda De Mascotas",
    lat: -34.813935,
    lng: -58.466258,
    descripcion: "Tiendas"
  },
  {
    id: 667,
    placeId: "ChIJscMj1TvDYpYRojHD7GwZgxI",
    nombre: "Montero Market",
    lat: -33.453999,
    lng: -70.761423,
    descripcion: "Tiendas"
  },
  {
    id: 668,
    placeId: "ChIJ7X7aqLDXYpYROwBL8iL9uMI",
    nombre: "Monty Pets",
    lat: -33.637104,
    lng: -70.576451,
    descripcion: "Tiendas"
  },
  {
    id: 669,
    placeId: "ChIJ80XV2ejbYpYRG4WUtnixk9o",
    nombre: "Morita Pet Shop",
    lat: -33.493630,
    lng: -70.657723,
    descripcion: "Tiendas"
  },
  {
    id: 670,
    placeId: "ChIJ9Yd-G23PYpYRupasd8WfQ3U",
    nombre: "Moxy Pet Box",
    lat: -33.404743,
    lng: -70.570208,
    descripcion: "Tiendas"
  },
  {
    id: 671,
    placeId: "ChIJmy6TNqvPYpYRYL3XSvN9fNE",
    nombre: "Mr Canino Pet Shop",
    lat: -33.394161,
    lng: -70.562121,
    descripcion: "Tiendas"
  },
  {
    id: 672,
    placeId: "ChIJofHvqjjPYpYRrlP-01Gdv_U",
    nombre: "Mr Pet Animal",
    lat: -33.439546,
    lng: -70.608396,
    descripcion: "Tiendas"
  },
  {
    id: 673,
    placeId: "ChIJ261BLEDJYpYRWRKYvgAzIp4",
    nombre: "Mr Pet Animal",
    lat: -33.387795,
    lng: -70.567031,
    descripcion: "Tiendas"
  },
  {
    id: 674,
    placeId: "ChIJ1wQrxrfOYpYR1d1Sn2Hb1f8",
    nombre: "Mr. Guau & Mrs. Miau",
    lat: -33.394909,
    lng: -70.548840,
    descripcion: "Tiendas"
  },
  {
    id: 675,
    placeId: "ChIJ9YbvrV47Y5YR7H0obkVmBpw",
    nombre: "MULTIVERSO ANIMAL",
    lat: -33.868134,
    lng: -70.693864,
    descripcion: "Tiendas"
  },
  {
    id: 676,
    placeId: "ChIJJRJPLRnXYpYRLvJwMoogSg8",
    nombre: "Munapet",
    lat: -33.632877,
    lng: -70.566580,
    descripcion: "Tiendas"
  },
  {
    id: 677,
    placeId: "ChIJ33WAfDvbYpYR0gy0uxRdz20",
    nombre: "Mundo Acuático",
    lat: -33.496205,
    lng: -70.668610,
    descripcion: "Tiendas"
  },
  {
    id: 678,
    placeId: "ChIJg_8ivzjbYpYR6fh6pqhGsKc",
    nombre: "Mundo acuatico Local w8",
    lat: -33.517432,
    lng: -70.659298,
    descripcion: "Tiendas"
  },
  {
    id: 679,
    placeId: "ChIJ5eODDQDBYpYRaozjZFN6zYM",
    nombre: "Mundo animal",
    lat: -33.405772,
    lng: -70.741080,
    descripcion: "Tiendas"
  },
  {
    id: 680,
    placeId: "ChIJ8blDE7VVYpYRZyDLGM_Sxu4",
    nombre: "Mundo mascota / peluqueria canina y felina",
    lat: -33.681787,
    lng: -71.225585,
    descripcion: "Tiendas"
  },
  {
    id: 681,
    placeId: "ChIJ5YJLc7TbYpYRF7UY16fHv5M",
    nombre: "Mundo Mascotas",
    lat: -33.552406,
    lng: -70.673721,
    descripcion: "Tiendas"
  },
  {
    id: 682,
    placeId: "ChIJp8UA7NXDYpYRRtQS3Cpo8eI",
    nombre: "Mundo mascotas",
    lat: -33.467055,
    lng: -70.730747,
    descripcion: "Tiendas"
  },
  {
    id: 683,
    placeId: "ChIJ31N-PgvfYpYR3bLUA_L0gg0",
    nombre: "Mundo Mascotas",
    lat: -33.626052,
    lng: -70.773557,
    descripcion: "Tiendas"
  },
  {
    id: 684,
    placeId: "ChIJGTkTwkDnYpYRebn1VSS1ehg",
    nombre: "Mundo Patitas Peludas",
    lat: -33.611138,
    lng: -70.890381,
    descripcion: "Tiendas"
  },
  {
    id: 685,
    placeId: "ChIJ_9sDeCeVYpYR5f76igrrKB4",
    nombre: "MUNDO PET",
    lat: -33.294190,
    lng: -70.868507,
    descripcion: "Tiendas"
  },
  {
    id: 686,
    placeId: "ChIJyaBkSXjbYpYRdJpwp9tR35Y",
    nombre: "Mundo pet niña bonita",
    lat: -33.512082,
    lng: -70.659005,
    descripcion: "Tiendas"
  },
  {
    id: 687,
    placeId: "ChIJH9nvQPQjY5YRR9xJjXm60CI",
    nombre: "Mundo pets love",
    lat: -33.808060,
    lng: -70.736566,
    descripcion: "Tiendas"
  },
  {
    id: 688,
    placeId: "ChIJp8UA7NXDYpYRRtQS3Cpo8eI",
    nombre: "Mundo Todo Mascotas",
    lat: -33.467055,
    lng: -70.730747,
    descripcion: "Tiendas"
  },
  {
    id: 689,
    placeId: "ChIJR9-PFmnRYpYR2pwjwf3dn94",
    nombre: "Mustafa Pet Shop",
    lat: -33.568580,
    lng: -70.584390,
    descripcion: "Tiendas"
  },
  {
    id: 690,
    placeId: "ChIJyVSOPwC_YpYRppsZBb2kRHw",
    nombre: "Mustafa y sus amigos",
    lat: -33.329227,
    lng: -70.770637,
    descripcion: "Tiendas"
  },
  {
    id: 691,
    placeId: "ChIJhwO0NwvPYpYRALQU1Mb4lT4",
    nombre: "My Can Peluqueria y Tienda De Mascotas",
    lat: -33.449016,
    lng: -70.597606,
    descripcion: "Tiendas"
  },
  {
    id: 692,
    placeId: "ChIJzQTj1vPLYpYR4QXfP6km7vw",
    nombre: "My Family Pets",
    lat: -33.341935,
    lng: -70.520943,
    descripcion: "Tiendas"
  },
  {
    id: 693,
    placeId: "ChIJmyC7Q7XPYpYRS-9EN47FEsM",
    nombre: "MY HAPPY PET SHOP",
    lat: -33.454410,
    lng: -70.575339,
    descripcion: "Tiendas"
  },
  {
    id: 694,
    placeId: "ChIJe25Vnc8nY5YRW-0J_8aPE9E",
    nombre: "My pet pirque",
    lat: -33.660528,
    lng: -70.628352,
    descripcion: "Tiendas"
  },
  {
    id: 695,
    placeId: "ChIJYeflqf3QYpYRpvhArye4OFA",
    nombre: "MYM Mascotas",
    lat: -33.528186,
    lng: -70.576686,
    descripcion: "Tiendas"
  },
  {
    id: 696,
    placeId: "ChIJ3YvZzO7PYpYR8bQnFyMZ1eg",
    nombre: "NamasPet Store",
    lat: -33.472570,
    lng: -70.601500,
    descripcion: "Tiendas"
  },
  {
    id: 697,
    placeId: "ChIJ71ag_-DLYpYRrR-OlbDVz_k",
    nombre: "NaturalPet",
    lat: -33.363340,
    lng: -70.523160,
    descripcion: "Tiendas"
  },
  {
    id: 698,
    placeId: "ChIJITfjqV3FYpYRyeJ2TX6cetM",
    nombre: "NELIPETS",
    lat: -33.437459,
    lng: -70.689885,
    descripcion: "Tiendas"
  },
  {
    id: 699,
    placeId: "ChIJq7rolZPHYpYRxDcP8YAxxsg",
    nombre: "Neopets Chile",
    lat: -33.374214,
    lng: -70.647785,
    descripcion: "Tiendas"
  },
  {
    id: 700,
    placeId: "ChIJDcwR6abbYpYRFF2lz57rIx0",
    nombre: "Nico MundoMascotas",
    lat: -33.526495,
    lng: -70.663247,
    descripcion: "Tiendas"
  },
  {
    id: 701,
    placeId: "ChIJhfyv6Q3XYpYR4LRlvVeflTY",
    nombre: "NORIPET.CL (PETSHOP)",
    lat: -33.572180,
    lng: -70.547874,
    descripcion: "Tiendas"
  },
  {
    id: 702,
    placeId: "ChIJ2a4YKEPFYpYR9NOb4BJiFbk",
    nombre: "Nova Pet Chile SPA",
    lat: -33.467718,
    lng: -70.634340,
    descripcion: "Tiendas"
  },
  {
    id: 703,
    placeId: "ChIJL_nfbnjPYpYRjeRBGkuSmUQ",
    nombre: "NutriPaw Chile",
    lat: -33.413869,
    lng: -70.565367,
    descripcion: "Tiendas"
  },
  {
    id: 704,
    placeId: "ChIJA-0UDhrBYpYRqo9eaK8R_uw",
    nombre: "Nutripet renca",
    lat: -33.396337,
    lng: -70.724629,
    descripcion: "Tiendas"
  },
  {
    id: 705,
    placeId: "ChIJiZ7PyVTPYpYRrrWt1DPCK7c",
    nombre: "Ñuñoa Pets",
    lat: -33.451883,
    lng: -70.585266,
    descripcion: "Tiendas"
  },
  {
    id: 706,
    placeId: "ChIJUck_1THZYpYRioVybtCbDwU",
    nombre: "O&E pets shop",
    lat: -33.581353,
    lng: -70.672597,
    descripcion: "Tiendas"
  },
  {
    id: 707,
    placeId: "ChIJQ67Ctx_hYpYRoxvaztuPRXA",
    nombre: "Oasis Pet Love",
    lat: -33.614147,
    lng: -70.887596,
    descripcion: "Tiendas"
  },
  {
    id: 708,
    placeId: "ChIJ2fHQE3TXYpYR1Wq4iFuhjKs",
    nombre: "Ofertón",
    lat: -33.589946,
    lng: -70.591504,
    descripcion: "Tiendas"
  },
  {
    id: 709,
    placeId: "ChIJAwyoncfPYpYR-RCZw1W2NoY",
    nombre: "Omvet Chile",
    lat: -33.401447,
    lng: -70.597138,
    descripcion: "Tiendas"
  },
  {
    id: 710,
    placeId: "ChIJySr004Hjd40RUmIEYrQVnYc",
    nombre: "Omydog | Juguetes y accesorios para Perros | Resistentes y duraderos",
    lat: -33.461771,
    lng: -70.618156,
    descripcion: "Tiendas"
  },
  {
    id: 711,
    placeId: "ChIJB6XTOMrPYpYRsnj7lVSEHIA",
    nombre: "OrangePet",
    lat: -33.391450,
    lng: -70.574388,
    descripcion: "Tiendas"
  },
  {
    id: 712,
    placeId: "ChIJl9xHGsnJaZYRZ51-aAjG8qo",
    nombre: "OrangePet",
    lat: -36.847382,
    lng: -73.092985,
    descripcion: "Tiendas"
  },
  {
    id: 713,
    placeId: "ChIJYYDPcSXFYpYRPeGxY0O-IMY",
    nombre: "Orly Pets",
    lat: -33.420401,
    lng: -70.682368,
    descripcion: "Tiendas"
  },
  {
    id: 714,
    placeId: "ChIJG9ZUavnFYpYRJwhAC_06L2s",
    nombre: "OTITO Pet Shop & Peluqueria Canina",
    lat: -33.405851,
    lng: -70.660348,
    descripcion: "Tiendas"
  },
  {
    id: 715,
    placeId: "ChIJ5TT0G5jPYpYRHGAfVNhWoP8",
    nombre: "Outlet Mascotas",
    lat: -33.447860,
    lng: -70.598927,
    descripcion: "Tiendas"
  },
  {
    id: 716,
    placeId: "ChIJo8M87XHhdWER1nIh7k35fKI",
    nombre: "Ovipet|peluqueria canina|chicureo|colina|",
    lat: -33.232718,
    lng: -70.694034,
    descripcion: "Tiendas"
  },
  {
    id: 717,
    placeId: "ChIJ16FmAMHFYpYRt_nTbEz81NM",
    nombre: "Pachin Pets Shop",
    lat: -33.443006,
    lng: -70.637327,
    descripcion: "Tiendas"
  },
  {
    id: 718,
    placeId: "ChIJMbofdenFYpYRsDb3Kio5G7Y",
    nombre: "Pajarería Estación",
    lat: -33.451779,
    lng: -70.678164,
    descripcion: "Tiendas"
  },
  {
    id: 719,
    placeId: "ChIJjeTETPrJYpYRyqx0T6Neulo",
    nombre: "Panda Pet",
    lat: -33.387734,
    lng: -70.568441,
    descripcion: "Tiendas"
  },
  {
    id: 720,
    placeId: "ChIJ_9X_Fj_bYpYRMy8AN0y5mNU",
    nombre: "Pandilla plumipatita , punto blueexpress",
    lat: -33.562705,
    lng: -70.651342,
    descripcion: "Tiendas"
  },
  {
    id: 721,
    placeId: "ChIJEX1UYUqVYpYRoyJ8CpFt9RA",
    nombre: "Panza+Llena",
    lat: -33.287275,
    lng: -70.881938,
    descripcion: "Tiendas"
  },
  {
    id: 722,
    placeId: "ChIJ9eGqXbvbYpYRXCfmvvDGJTw",
    nombre: "Papets",
    lat: -33.574743,
    lng: -70.695965,
    descripcion: "Tiendas"
  },
  {
    id: 723,
    placeId: "ChIJkUTzY0fFYpYRbB-ZsX8j-os",
    nombre: "Papi pets Peluqueria canina y pet shop",
    lat: -33.566522,
    lng: -70.672686,
    descripcion: "Tiendas"
  },
  {
    id: 724,
    placeId: "ChIJqd6XeHnBYpYR7DaZaXKyy1g",
    nombre: "Paradise pets",
    lat: -33.363868,
    lng: -70.729736,
    descripcion: "Tiendas"
  },
  {
    id: 725,
    placeId: "ChIJkZkNAN3AYpYRel2hM88TKkM",
    nombre: "Parrot Pet",
    lat: -33.365492,
    lng: -70.737914,
    descripcion: "Tiendas"
  },
  {
    id: 726,
    placeId: "ChIJF8lvszrDYpYRIB3IvBwJJ7s",
    nombre: "Paserida Mascotas",
    lat: -33.443911,
    lng: -70.721699,
    descripcion: "Tiendas"
  },
  {
    id: 727,
    placeId: "ChIJZariHX7JYpYRgjbJ6LLQVio",
    nombre: "Patamor",
    lat: -33.388226,
    lng: -70.567976,
    descripcion: "Tiendas"
  },
  {
    id: 728,
    placeId: "ChIJ4_FpIADVfJYR_FON7MGnKE4",
    nombre: "Patas y gattas",
    lat: -33.644136,
    lng: -70.353606,
    descripcion: "Tiendas"
  },
  {
    id: 729,
    placeId: "ChIJbda0SzLdYpYRdBP3xK_Tb2w",
    nombre: "Patita's Tienda de mascotas",
    lat: -33.508108,
    lng: -70.729926,
    descripcion: "Tiendas"
  },
  {
    id: 730,
    placeId: "ChIJhxoqSD69YpYRc-SiFjeb1e8",
    nombre: "Patitas Alimento y Accesorios para Mascotas",
    lat: -33.235984,
    lng: -70.811988,
    descripcion: "Tiendas"
  },
  {
    id: 731,
    placeId: "ChIJuUgsegDHYpYR6jJrZrQ037E",
    nombre: "Patitas Consentidas",
    lat: -33.397532,
    lng: -70.657086,
    descripcion: "Tiendas"
  },
  {
    id: 732,
    placeId: "ChIJG3rcbUbFYpYRfswUdVvsK_A",
    nombre: "Patitas Consentidas Petshop , Peluquería Canina & Felina",
    lat: -33.441352,
    lng: -70.638497,
    descripcion: "Tiendas"
  },
  {
    id: 733,
    placeId: "ChIJM0yYY17bYpYRlpnUUa0mMSs",
    nombre: "Patitas Consentidas Shop",
    lat: -33.520068,
    lng: -70.655386,
    descripcion: "Tiendas"
  },
  {
    id: 734,
    placeId: "ChIJ2Scwfq3GYpYRh31aZe9rFUQ",
    nombre: "Patitas dog",
    lat: -33.402378,
    lng: -70.713975,
    descripcion: "Tiendas"
  },
  {
    id: 735,
    placeId: "ChIJqSkV1izbYpYRFhtenSTOfLA",
    nombre: "Patitas eka",
    lat: -33.521781,
    lng: -70.680209,
    descripcion: "Tiendas"
  },
  {
    id: 736,
    placeId: "ChIJPeNymnbDYpYRbLUWriKobTo",
    nombre: "Patitas Felices - Todo para tu Mascota",
    lat: -33.428510,
    lng: -70.748050,
    descripcion: "Tiendas"
  },
  {
    id: 737,
    placeId: "ChIJE-Zml_zbYpYRLsbJ9tcytAM",
    nombre: "Patitas Felices Paulina @patitasfelicespaulinaa",
    lat: -33.534444,
    lng: -70.666872,
    descripcion: "Tiendas"
  },
  {
    id: 738,
    placeId: "ChIJS71DI_nbYpYRlKE2Witr3cQ",
    nombre: "Patitas Felices S&A",
    lat: -33.525888,
    lng: -70.646917,
    descripcion: "Tiendas"
  },
  {
    id: 739,
    placeId: "ChIJF5to6BPPYpYRTAAaNrMZhKU",
    nombre: "PATITAS FELICES SPA",
    lat: -33.471247,
    lng: -70.544154,
    descripcion: "Tiendas"
  },
  {
    id: 740,
    placeId: "ChIJV4ZJJODRYpYRP4KyFcwIuYg",
    nombre: "PATITAS LOVE",
    lat: -33.502771,
    lng: -70.611541,
    descripcion: "Tiendas"
  },
  {
    id: 741,
    placeId: "ChIJ2SuZyA3dYpYRyNdgvbgaCdw",
    nombre: "Patitas Pet",
    lat: -33.569438,
    lng: -70.793038,
    descripcion: "Tiendas"
  },
  {
    id: 742,
    placeId: "ChIJPRaCzzjBYpYRcH5Xu8ar6ak",
    nombre: "Patitas Pet Shop Quilicura",
    lat: -33.359451,
    lng: -70.743701,
    descripcion: "Tiendas"
  },
  {
    id: 743,
    placeId: "ChIJP6jhCZzPYpYRV3nJnF9MKUA",
    nombre: "Patitas Pets",
    lat: -33.440279,
    lng: -70.533894,
    descripcion: "Tiendas"
  },
  {
    id: 744,
    placeId: "ChIJARCnAknFYpYReSpwxf0a9TI",
    nombre: "Patitas Shop Cl",
    lat: -33.476099,
    lng: -70.711888,
    descripcion: "Tiendas"
  },
  {
    id: 745,
    placeId: "ChIJu031gbHPYpYRxF-hlr-rjzc",
    nombre: "PATITAS Y COLITAS Pet & Spa",
    lat: -33.400949,
    lng: -70.593677,
    descripcion: "Tiendas"
  },
  {
    id: 746,
    placeId: "ChIJ_RG_NvrFYpYRIAXE7Zse3BU",
    nombre: "Patitaslove",
    lat: -33.399944,
    lng: -70.629286,
    descripcion: "Tiendas"
  },
  {
    id: 747,
    placeId: "ChIJSTM1ES_RYpYROwVN7PgTbeQ",
    nombre: "Patota - Alimento y Accesorio de Animales",
    lat: -33.552386,
    lng: -70.566290,
    descripcion: "Tiendas"
  },
  {
    id: 748,
    placeId: "ChIJNQsBjB_FYpYRsKLPhrdIpVc",
    nombre: "Patumascota",
    lat: -33.443855,
    lng: -70.561865,
    descripcion: "Tiendas"
  },
  {
    id: 749,
    placeId: "ChIJsemA81jPYpYR-mfC3LIUkxc",
    nombre: "Paw Land",
    lat: -33.396676,
    lng: -70.550383,
    descripcion: "Tiendas"
  },
  {
    id: 750,
    placeId: "ChIJwYOj3DTHYpYRHzkt_md7M-A",
    nombre: "Pawal - Mall Plaza Norte",
    lat: -33.364805,
    lng: -70.679209,
    descripcion: "Tiendas"
  },
  {
    id: 751,
    placeId: "ChIJzVunwIvPYpYRwu81h61hxaQ",
    nombre: "Paws Club",
    lat: -33.540381,
    lng: -70.678183,
    descripcion: "Tiendas"
  },
  {
    id: 752,
    placeId: "ChIJTzczqULjYpYRfoI4vyXQzYI",
    nombre: "PAWYN CASTAÑO PETS",
    lat: -33.682963,
    lng: -70.987935,
    descripcion: "Tiendas"
  },
  {
    id: 753,
    placeId: "ChIJk1_CREjHYpYRLUaeQnCNVto",
    nombre: "Peaky Pets",
    lat: -33.368900,
    lng: -70.688286,
    descripcion: "Tiendas"
  },
  {
    id: 754,
    placeId: "ChIJqalyr9jRYpYRygilhsWqkAY",
    nombre: "Pelados y Peludos",
    lat: -33.520351,
    lng: -70.591018,
    descripcion: "Tiendas"
  },
  {
    id: 755,
    placeId: "ChIJX_baEADHYpYRmO7aaWw_JwM",
    nombre: "Pelayo & Calugon Pet",
    lat: -33.400973,
    lng: -70.661443,
    descripcion: "Tiendas"
  },
  {
    id: 756,
    placeId: "ChIJ35MHw0bZYpYRzWzZQNSSiao",
    nombre: "Peluditos",
    lat: -33.594945,
    lng: -70.666783,
    descripcion: "Tiendas"
  },
  {
    id: 757,
    placeId: "ChIJtYaHRzXFYpYR4RKXgPQfs_c",
    nombre: "Peluditos Petshop",
    lat: -33.447061,
    lng: -70.643968,
    descripcion: "Tiendas"
  },
  {
    id: 758,
    placeId: "ChIJBy5menPFYpYRm0li9PWbT7U",
    nombre: "Peluditos Regalones",
    lat: -33.414899,
    lng: -70.715928,
    descripcion: "Tiendas"
  },
  {
    id: 759,
    placeId: "ChIJX0qofQDFYpYRDR_8ujUFxy8",
    nombre: "PeluditosPet",
    lat: -33.480906,
    lng: -70.689981,
    descripcion: "Tiendas"
  },
  {
    id: 760,
    placeId: "ChIJg-n38mfFYpYRD6ZDid5Jfw0",
    nombre: "Peludos PetShop",
    lat: -33.447691,
    lng: -70.651595,
    descripcion: "Tiendas"
  },
  {
    id: 761,
    placeId: "ChIJ_wwwrtbAYpYRxCrQf3qgz8Y",
    nombre: "PELUMASCOTAS - PELUQUERIA CANINA Y PET SHOP",
    lat: -33.366178,
    lng: -70.723629,
    descripcion: "Tiendas"
  },
  {
    id: 762,
    placeId: "ChIJ4_VtwF7bYpYROlX5SUHN4uI",
    nombre: "peluquería canina caniche Brothers",
    lat: -33.536682,
    lng: -70.647435,
    descripcion: "Tiendas"
  },
  {
    id: 763,
    placeId: "ChIJ8_5UD9nLYpYRjweDx8w2tZM",
    nombre: "Peluqueria Canina Dog Bark",
    lat: -33.352775,
    lng: -70.522740,
    descripcion: "Tiendas"
  },
  {
    id: 764,
    placeId: "ChIJ198QchfHYpYR9GUY11ctSsI",
    nombre: "Peluquería canina Dog Cute Spa",
    lat: -33.406603,
    lng: -70.694368,
    descripcion: "Tiendas"
  },
  {
    id: 765,
    placeId: "ChIJkemj9iOVYpYRTA95q75WaA4",
    nombre: "Peluquería canina suaves patitas",
    lat: -33.300330,
    lng: -70.883255,
    descripcion: "Tiendas"
  },
  {
    id: 766,
    placeId: "ChIJKaVTEdDRYpYR7EGVrKKK3BM",
    nombre: "Peluqueria Canina venta de alimento y accesorios angeles peluditos",
    lat: -33.503592,
    lng: -70.565532,
    descripcion: "Tiendas"
  },
  {
    id: 767,
    placeId: "ChIJm2Dc3JQnY5YRNHhSwq-BXhM",
    nombre: "Peluquería canina y felina Mascotas Felices buin",
    lat: -33.735405,
    lng: -70.737595,
    descripcion: "Tiendas"
  },
  {
    id: 768,
    placeId: "ChIJ5exgKYzWYpYRjSvuJX4KZPY",
    nombre: "Peluquería Canina y tienda para mascotas",
    lat: -33.593361,
    lng: -70.544606,
    descripcion: "Tiendas"
  },
  {
    id: 769,
    placeId: "ChIJpXmlVrvaYpYRVb1bqHwnw-4",
    nombre: "Peluqueria canina y Veterinaria PetShopVet en San Joaquin",
    lat: -33.502330,
    lng: -70.633543,
    descripcion: "Tiendas"
  },
  {
    id: 770,
    placeId: "ChIJPbCQWQD_YpYRRRikB_xYS_g",
    nombre: "Pepa pets love",
    lat: -33.676834,
    lng: -71.171520,
    descripcion: "Tiendas"
  },
  {
    id: 771,
    placeId: "ChIJ2yGZOqbDYpYRSqJmWlmIpjU",
    nombre: "Pepe El Outlet De Las Mascotas",
    lat: -33.458787,
    lng: -70.751570,
    descripcion: "Tiendas"
  },
  {
    id: 772,
    placeId: "ChIJuUxS1yRVYpYR-ABD1syAcSE",
    nombre: "Peques.Pets",
    lat: -33.646849,
    lng: -71.154274,
    descripcion: "Tiendas"
  },
  {
    id: 773,
    placeId: "ChIJg0Dl1gPbYpYRAN6PB8uaCgY",
    nombre: "Perlita",
    lat: -33.530293,
    lng: -70.672497,
    descripcion: "Tiendas"
  },
  {
    id: 774,
    placeId: "ChIJ1yx4ERLPYpYR0j8WtWX4W9o",
    nombre: "Perrilook - Peluquería Canina y tienda de mascotas",
    lat: -33.452240,
    lng: -70.561243,
    descripcion: "Tiendas"
  },
  {
    id: 775,
    placeId: "ChIJWz_8LxC7YpYRm_evWC4HO7w",
    nombre: "PERRO LOCO COLINA",
    lat: -33.204723,
    lng: -70.677780,
    descripcion: "Tiendas"
  },
  {
    id: 776,
    placeId: "ChIJrQeugLTmYpYRE2oomJXN0Aw",
    nombre: "PerRock's Perruqueria Y Pet Shop",
    lat: -33.611010,
    lng: -70.888966,
    descripcion: "Tiendas"
  },
  {
    id: 777,
    placeId: "ChIJfTssrNTjYpYRhYst1qKldnQ",
    nombre: "PerroGato Pet Shop",
    lat: -33.663457,
    lng: -70.929741,
    descripcion: "Tiendas"
  },
  {
    id: 778,
    placeId: "ChIJW0hY3QHFYpYRfSNi1KWD56k",
    nombre: "Perruqueria Mascotitas style",
    lat: -33.446116,
    lng: -70.693729,
    descripcion: "Tiendas"
  },
  {
    id: 779,
    placeId: "ChIJWSF-LUXRYpYRyii_fWuRHRs",
    nombre: "Perry Pet Shop",
    lat: -33.490872,
    lng: -70.599378,
    descripcion: "Tiendas"
  },
  {
    id: 780,
    placeId: "ChIJrcJjrgcjY5YRX0BF7vwJJLc",
    nombre: "Pet & Clean Lovers",
    lat: -33.761196,
    lng: -70.733313,
    descripcion: "Tiendas"
  },
  {
    id: 781,
    placeId: "ChIJB0ZixL_RYpYRkC8sTGd3z5E",
    nombre: "PET BAU Tienda de Mascotas",
    lat: -33.513083,
    lng: -70.606619,
    descripcion: "Tiendas"
  },
  {
    id: 782,
    placeId: "ChIJDdu9qeDOYpYRH6VBiuLDdbI",
    nombre: "Pet Beauty and Boutique Del Inca",
    lat: -33.410707,
    lng: -70.568282,
    descripcion: "Tiendas"
  },
  {
    id: 783,
    placeId: "ChIJ-Wb8OMMhY5YRyaPT72jSmtw",
    nombre: "Pet BJ",
    lat: -33.732128,
    lng: -70.747913,
    descripcion: "Tiendas"
  },
  {
    id: 784,
    placeId: "ChIJMwThdUYhY5YRSNKuTThPBzM",
    nombre: "Pet BJ - MiaVet",
    lat: -33.732056,
    lng: -70.747605,
    descripcion: "Tiendas"
  },
  {
    id: 785,
    placeId: "ChIJ_ZdXKQAjY5YRnR97FoRQC98",
    nombre: "Pet BJ y Mía Vet Paine",
    lat: -33.806565,
    lng: -70.726263,
    descripcion: "Tiendas"
  },
  {
    id: 786,
    placeId: "ChIJKYhV4Q_dYpYRP6wtR9sWNEY",
    nombre: "PET BRONX",
    lat: -33.564574,
    lng: -70.798889,
    descripcion: "Tiendas"
  },
  {
    id: 787,
    placeId: "ChIJK8UP6N3OYpYR0jpK1irD_yo",
    nombre: "Pet Choice Apumanque",
    lat: -33.409915,
    lng: -70.567675,
    descripcion: "Tiendas"
  },
  {
    id: 788,
    placeId: "ChIJy5K5XMTLYpYRvxZg5VprdVk",
    nombre: "Pet City",
    lat: -33.351504,
    lng: -70.510927,
    descripcion: "Tiendas"
  },
  {
    id: 789,
    placeId: "ChIJlWViKYrdYpYRsCqhJq3VkHA",
    nombre: "Pet City Calera de Tango",
    lat: -33.623448,
    lng: -70.799835,
    descripcion: "Tiendas"
  },
  {
    id: 790,
    placeId: "ChIJlWViKYrdYpYRsCqhJq3VkHA",
    nombre: "Pet City Calera de Tango",
    lat: -33.623448,
    lng: -70.799835,
    descripcion: "Tiendas"
  },
  {
    id: 791,
    placeId: "ChIJy9j62XDOYpYRXH_ZnSGPrlo",
    nombre: "Pet City La Reina",
    lat: -33.439889,
    lng: -70.533373,
    descripcion: "Tiendas"
  },
  {
    id: 792,
    placeId: "ChIJy5K5XMTLYpYRvxZg5VprdVk",
    nombre: "Pet City Lo Barnechea",
    lat: -33.351504,
    lng: -70.510927,
    descripcion: "Tiendas"
  },
  {
    id: 793,
    placeId: "ChIJe7W2V8TRYpYRFB-ivUHPXyA",
    nombre: "Pet City Peñalolén",
    lat: -33.486959,
    lng: -70.559246,
    descripcion: "Tiendas"
  },
  {
    id: 794,
    placeId: "ChIJY2-ZOBPXYpYRTk7Buu0dqYI",
    nombre: "Pet City Puente Alto",
    lat: -33.597648,
    lng: -70.576924,
    descripcion: "Tiendas"
  },
  {
    id: 795,
    placeId: "ChIJy9j62XDOYpYR3J0Ljsa-xE4",
    nombre: "Pet City Vitacura",
    lat: -33.391177,
    lng: -70.553509,
    descripcion: "Tiendas"
  },
  {
    id: 796,
    placeId: "ChIJnUqaPQDLYpYRwW-WqGPcBG8",
    nombre: "Pet Club",
    lat: -33.356259,
    lng: -70.510270,
    descripcion: "Tiendas"
  },
  {
    id: 797,
    placeId: "ChIJy4l6TQDHYpYR2AIvgNLKhSA",
    nombre: "Pet comida y accesorios",
    lat: -33.397112,
    lng: -70.677235,
    descripcion: "Tiendas"
  },
  {
    id: 798,
    placeId: "ChIJ62Cl437bYpYR_rZpZaYwM8E",
    nombre: "Pet Delivery",
    lat: -33.404656,
    lng: -70.766932,
    descripcion: "Tiendas"
  },
  {
    id: 799,
    placeId: "ChIJ77PaW5_dYpYRo3DkcW5GlYM",
    nombre: "Pet El Parque",
    lat: -33.558841,
    lng: -70.788608,
    descripcion: "Tiendas"
  },
  {
    id: 800,
    placeId: "ChIJkZiWtWojY5YROGMNo8GfVys",
    nombre: "Pet Fans tienda de mascotas",
    lat: -33.818380,
    lng: -70.733263,
    descripcion: "Tiendas"
  },
  {
    id: 801,
    placeId: "ChIJ12hm6IjPYpYRtLwT46ko0S8",
    nombre: "Pet Garras y Patitas",
    lat: -33.414611,
    lng: -70.598152,
    descripcion: "Tiendas"
  },
  {
    id: 802,
    placeId: "ChIJ7dUN1xHpYpYR0b8tAe_N-_w",
    nombre: "Pet Guru",
    lat: -33.446704,
    lng: -70.851130,
    descripcion: "Tiendas"
  },
  {
    id: 803,
    placeId: "ChIJ4_5IegHXYpYRTGAAxY5749k",
    nombre: "Pet Happy - Plazuela Independencia Puente Alto",
    lat: -33.602112,
    lng: -70.578454,
    descripcion: "Tiendas"
  },
  {
    id: 804,
    placeId: "ChIJ55qEvjtEdYgRb3YuLp8vNUA",
    nombre: "Pet Happy Arauco Maipú",
    lat: -33.480180,
    lng: -70.751601,
    descripcion: "Tiendas"
  },
  {
    id: 805,
    placeId: "ChIJWxPN76rXYpYRU8EHR2amofE",
    nombre: "Pet Happy Camilo Henríquez/ San Carlos",
    lat: -33.590812,
    lng: -70.541467,
    descripcion: "Tiendas"
  },
  {
    id: 806,
    placeId: "ChIJQ_K2Y2nRYpYRThPuhjHXC90",
    nombre: "Pet Happy Jumbo Peñalolén",
    lat: -33.488131,
    lng: -70.556799,
    descripcion: "Tiendas"
  },
  {
    id: 807,
    placeId: "ChIJk6Hl3V_QYpYR_wlWMegCVjM",
    nombre: "Pet Happy La Florida",
    lat: -33.521120,
    lng: -70.595970,
    descripcion: "Tiendas"
  },
  {
    id: 808,
    placeId: "ChIJlZH1QcXAYpYRYBFvU5QTf08",
    nombre: "Pet Happy Lider Quilicura",
    lat: -33.356309,
    lng: -70.727756,
    descripcion: "Tiendas"
  },
  {
    id: 809,
    placeId: "ChIJm47PBy3QYpYRGiAaFrL3iuU",
    nombre: "Pet Happy Mall Paseo Quilín",
    lat: -33.488372,
    lng: -70.577167,
    descripcion: "Tiendas"
  },
  {
    id: 810,
    placeId: "ChIJ1QxjlGjZYpYRE3ceuqDQIZ0",
    nombre: "Pet Happy Nos",
    lat: -33.639725,
    lng: -70.703145,
    descripcion: "Tiendas"
  },
  {
    id: 811,
    placeId: "ChIJl59hBVrZYpYRNmE4EjSEByM",
    nombre: "Pet Happy San Bernardo",
    lat: -33.590242,
    lng: -70.704319,
    descripcion: "Tiendas"
  },
  {
    id: 812,
    placeId: "ChIJgRJmxLbbYpYRLUhsLG5r8qw",
    nombre: "Pet Happy Tottus el Bosque",
    lat: -33.553638,
    lng: -70.675902,
    descripcion: "Tiendas"
  },
  {
    id: 813,
    placeId: "ChIJsdrDeyvJYpYRuUIbJtfsos4",
    nombre: "Pet Happy Vitacura Los Cobres",
    lat: -33.387163,
    lng: -70.568619,
    descripcion: "Tiendas"
  },
  {
    id: 814,
    placeId: "ChIJ2flyVrDPYpYRszrgNUUllmM",
    nombre: "Pet Haus centro integral (ex Lavacan Express)",
    lat: -33.448278,
    lng: -70.583405,
    descripcion: "Tiendas"
  },
  {
    id: 815,
    placeId: "ChIJVR8t76DXYpYRgryR_-cDADY",
    nombre: "Pet house",
    lat: -33.618585,
    lng: -70.584886,
    descripcion: "Tiendas"
  },
  {
    id: 816,
    placeId: "ChIJrUrSgIXEYpYRiTJNyTu9jKA",
    nombre: "Pet Lovers cl",
    lat: -33.462546,
    lng: -70.704875,
    descripcion: "Tiendas"
  },
  {
    id: 817,
    placeId: "ChIJCTNNMADRYpYRMGRxzNy9sYE",
    nombre: "PET MASTER",
    lat: -33.523050,
    lng: -70.595270,
    descripcion: "Tiendas"
  },
  {
    id: 818,
    placeId: "ChIJMx1GHwDXYpYRkS5AGVLbNG8",
    nombre: "PET MASTER CENTRAL",
    lat: -33.580865,
    lng: -70.609757,
    descripcion: "Tiendas"
  },
  {
    id: 819,
    placeId: "ChIJNzKuGde7YpYRCKAdRFfivWw",
    nombre: "Pet Mati’s",
    lat: -33.207781,
    lng: -70.675869,
    descripcion: "Tiendas"
  },
  {
    id: 820,
    placeId: "ChIJXxPwHFUlY5YRsCw7WSfWB6Q",
    nombre: "Pet Negrito",
    lat: -33.796293,
    lng: -70.682046,
    descripcion: "Tiendas"
  },
  {
    id: 821,
    placeId: "ChIJZ7DlqN3OYpYR1eMJhQyf3oQ",
    nombre: "Pet Phone - Todo en alimento para mascotas",
    lat: -33.421440,
    lng: -70.537753,
    descripcion: "Tiendas"
  },
  {
    id: 822,
    placeId: "ChIJFfEfMBfBYpYRyPl-vmlikyM",
    nombre: "PET PIPO CACHORRO",
    lat: -33.355497,
    lng: -70.717363,
    descripcion: "Tiendas"
  },
  {
    id: 823,
    placeId: "ChIJ5fOKMhfPYpYRqwHUV3XbGmA",
    nombre: "Pet place House",
    lat: -33.471941,
    lng: -70.548192,
    descripcion: "Tiendas"
  },
  {
    id: 824,
    placeId: "ChIJreBBsL7FYpYR4WX1xKby2cg",
    nombre: "Pet Place SpA",
    lat: -33.520457,
    lng: -70.598448,
    descripcion: "Tiendas"
  },
  {
    id: 825,
    placeId: "ChIJ_VNzlyjbYpYR27p6agvbSxg",
    nombre: "Pet San Bernardo (LC)",
    lat: -33.516616,
    lng: -70.657892,
    descripcion: "Tiendas"
  },
  {
    id: 826,
    placeId: "ChIJ02AtamTZYpYRbnuMJfedLCw",
    nombre: "Pet San Bernardo (SB)",
    lat: -33.594600,
    lng: -70.700088,
    descripcion: "Tiendas"
  },
  {
    id: 827,
    placeId: "ChIJIyMOWzPjYpYR375MprmyhYY",
    nombre: "PET SANCTUARY - Pet Shop, Veterinaria, Peluquería Canina",
    lat: -33.668705,
    lng: -70.924717,
    descripcion: "Tiendas"
  },
  {
    id: 828,
    placeId: "ChIJWXs7ONnaYpYRltvjfLlfVb4",
    nombre: "Pet Shop - Colitas Felices",
    lat: -33.506774,
    lng: -70.664996,
    descripcion: "Tiendas"
  },
  {
    id: 829,
    placeId: "ChIJ1fupPKPPYpYRBowAi25mOaY",
    nombre: "Pet Shop Alimentos Accesorios Mascotas Delivery Peces Animales Exóticos PUKY PET",
    lat: -33.462450,
    lng: -70.553985,
    descripcion: "Tiendas"
  },
  {
    id: 830,
    placeId: "ChIJh2XW5GDFYpYRDrEGMGhbbpw",
    nombre: "Pet Shop Alimentos Mascotas Exóticos",
    lat: -33.409954,
    lng: -70.690116,
    descripcion: "Tiendas"
  },
  {
    id: 831,
    placeId: "ChIJf8LAAgAfY5YRwUPvarXI-m8",
    nombre: "Pet Shop Carolita",
    lat: -33.752741,
    lng: -70.902694,
    descripcion: "Tiendas"
  },
  {
    id: 832,
    placeId: "ChIJf8LAAgAfY5YRwUPvarXI-m8",
    nombre: "Pet Shop Carolita",
    lat: -33.752741,
    lng: -70.902694,
    descripcion: "Tiendas"
  },
  {
    id: 833,
    placeId: "ChIJLYLZuqi5YpYRMbzHjNy6HsY",
    nombre: "Pet Shop Chicureo: Tienda online para perros y gatos en Chicureo",
    lat: -33.282976,
    lng: -70.703524,
    descripcion: "Tiendas"
  },
  {
    id: 834,
    placeId: "ChIJN86UWX_FYpYR2ZPpSRbw6rM",
    nombre: "Pet Shop Comida Alimentos Mascotas PUKY PET (Ñuñoa)",
    lat: -33.452332,
    lng: -70.617990,
    descripcion: "Tiendas"
  },
  {
    id: 835,
    placeId: "ChIJP5BBAHXRYpYRQBfnf8jzY7Q",
    nombre: "Pet Shop Dara",
    lat: -33.559173,
    lng: -70.582655,
    descripcion: "Tiendas"
  },
  {
    id: 836,
    placeId: "ChIJgR5kuuTZYpYRTQnNNSRQrfk",
    nombre: "PET SHOP del 36",
    lat: -33.583169,
    lng: -70.628585,
    descripcion: "Tiendas"
  },
  {
    id: 837,
    placeId: "ChIJP_2c89HbYpYRDQEAWJGxTnk",
    nombre: "Pet Shop Despensa",
    lat: -33.569670,
    lng: -70.675641,
    descripcion: "Tiendas"
  },
  {
    id: 838,
    placeId: "ChIJyfSr5MfRYpYR2OVOteTOipI",
    nombre: "Pet Shop Doña Peluza",
    lat: -33.515140,
    lng: -70.562300,
    descripcion: "Tiendas"
  },
  {
    id: 839,
    placeId: "ChIJp83vRADDYpYR3Lvq1SYe8Ko",
    nombre: "Pet Shop Huellas Felices",
    lat: -33.453465,
    lng: -70.748741,
    descripcion: "Tiendas"
  },
  {
    id: 840,
    placeId: "ChIJOSZrBm_bYpYRttOpIAoiHlI",
    nombre: "Pet Shop Jimbo y Pretor - Punto Blue Express",
    lat: -33.414853,
    lng: -70.638387,
    descripcion: "Tiendas"
  },
  {
    id: 841,
    placeId: "ChIJrzyzDD_bYpYRPYvnO7slocU",
    nombre: "Pet Shop Katy",
    lat: -33.565338,
    lng: -70.632825,
    descripcion: "Tiendas"
  },
  {
    id: 842,
    placeId: "ChIJA2rUNwAnY5YR_K_Pnq1qUvc",
    nombre: "PET SHOP La Guarida Animal",
    lat: -33.668722,
    lng: -70.624863,
    descripcion: "Tiendas"
  },
  {
    id: 843,
    placeId: "ChIJmx6SJXP1YpYRWT12qlRV1jc",
    nombre: "Pet Shop Las Alondras Casa Matriz",
    lat: -33.402606,
    lng: -71.126911,
    descripcion: "Tiendas"
  },
  {
    id: 844,
    placeId: "ChIJmx6SJXP1YpYRWT12qlRV1jc",
    nombre: "Pet Shop Las Alondras Sucursal 2",
    lat: -33.402606,
    lng: -71.126911,
    descripcion: "Tiendas"
  },
  {
    id: 845,
    placeId: "ChIJmx6SJXP1YpYRWT12qlRV1jc",
    nombre: "Pet Shop Las Alondras Sucursal 2",
    lat: -33.402606,
    lng: -71.126911,
    descripcion: "Tiendas"
  },
  {
    id: 846,
    placeId: "ChIJXXWHehjRYpYRmc5LR8FWYQQ",
    nombre: "PET SHOP LAS PERDICES",
    lat: -33.491170,
    lng: -70.540136,
    descripcion: "Tiendas"
  },
  {
    id: 847,
    placeId: "ChIJYUUBTPK_YpYR_fzkRrBuaf8",
    nombre: "PET SHOP LIRAY",
    lat: -33.246819,
    lng: -70.724975,
    descripcion: "Tiendas"
  },
  {
    id: 848,
    placeId: "ChIJRRbEeOfbYpYRYLYVtenOwFk",
    nombre: "Pet shop lulú",
    lat: -33.563308,
    lng: -70.622702,
    descripcion: "Tiendas"
  },
  {
    id: 849,
    placeId: "ChIJIYLIVifdYpYRNuL7f54-kjs",
    nombre: "Pet shop LyJ",
    lat: -33.576811,
    lng: -70.803924,
    descripcion: "Tiendas"
  },
  {
    id: 850,
    placeId: "ChIJuSrxsczbYpYRN9cF81ITf5c",
    nombre: "Pet Shop Mai",
    lat: -33.518113,
    lng: -70.660677,
    descripcion: "Tiendas"
  },
  {
    id: 851,
    placeId: "ChIJh-0p2VHbYpYRIMjylhFYBRo",
    nombre: "Pet shop Martihare Un Mundo Para La Mascotas",
    lat: -33.550534,
    lng: -70.649249,
    descripcion: "Tiendas"
  },
  {
    id: 852,
    placeId: "ChIJz-Lo12LFYpYRgNu23ZurBf0",
    nombre: "Pet Shop Patitas",
    lat: -33.436901,
    lng: -70.674102,
    descripcion: "Tiendas"
  },
  {
    id: 853,
    placeId: "ChIJz09kCDHPYpYRT74JBQk_q20",
    nombre: "Pet Shop Pet Store La Tienda de Domingo",
    lat: -33.461914,
    lng: -70.605999,
    descripcion: "Tiendas"
  },
  {
    id: 854,
    placeId: "ChIJ-26YmK7EYpYRLH4sHqjfLx4",
    nombre: "Pet Shop Rock And Dog",
    lat: -33.492816,
    lng: -70.709429,
    descripcion: "Tiendas"
  },
  {
    id: 855,
    placeId: "ChIJa9UpcVjDYpYRms0FOZ9F9_I",
    nombre: "Pet Shop Silvestre y Piolin (Alimento y Accesorios para mascotas)",
    lat: -33.496741,
    lng: -70.744286,
    descripcion: "Tiendas"
  },
  {
    id: 856,
    placeId: "ChIJ3dXX88HXYpYRZI-cJ4pEncw",
    nombre: "Pet Store Huellitas",
    lat: -33.589631,
    lng: -70.562290,
    descripcion: "Tiendas"
  },
  {
    id: 857,
    placeId: "ChIJ7XzTlLi_YpYREWja3mlv12I",
    nombre: "Pet Store Patitas",
    lat: -33.329183,
    lng: -70.765748,
    descripcion: "Tiendas"
  },
  {
    id: 858,
    placeId: "ChIJl-uU53LFYpYRMVsn7-s2Ths",
    nombre: "Pet Time - Veterinaria • SPA • Pet Shop",
    lat: -33.446611,
    lng: -70.637557,
    descripcion: "Tiendas"
  },
  {
    id: 859,
    placeId: "ChIJmyQEnLHFYpYRCOxMNkV7lf0",
    nombre: "Pet Up Store",
    lat: -33.434565,
    lng: -70.662265,
    descripcion: "Tiendas"
  },
  {
    id: 860,
    placeId: "ChIJzVBq5CPZYpYRx7cKFFxxI3E",
    nombre: "Pet Yin",
    lat: -33.586537,
    lng: -70.676926,
    descripcion: "Tiendas"
  },
  {
    id: 861,
    placeId: "ChIJJ2i89hnbYpYRWe7rWW9F5xs",
    nombre: "Pet Zoo",
    lat: -33.516098,
    lng: -70.658644,
    descripcion: "Tiendas"
  },
  {
    id: 862,
    placeId: "ChIJrewQFdrLYpYRu08URLvYVHs",
    nombre: "PET-KINGDOM, alimentos para perros y gatos.",
    lat: -33.371469,
    lng: -70.518137,
    descripcion: "Tiendas"
  },
  {
    id: 863,
    placeId: "ChIJ755HZwDRYpYRlNC6HH-g988",
    nombre: "Pet'sPool",
    lat: -33.497371,
    lng: -70.601874,
    descripcion: "Tiendas"
  },
  {
    id: 864,
    placeId: "ChIJy7xEgxfDYpYRG9Hs82fJ8jY",
    nombre: "Pet&Go Arauco Maipú",
    lat: -33.481354,
    lng: -70.751853,
    descripcion: "Tiendas"
  },
  {
    id: 865,
    placeId: "ChIJj1FY2T_PYpYRUjHnk7H0wHA",
    nombre: "Pet&Go MallPlaza Los Dominicos",
    lat: -33.415209,
    lng: -70.540577,
    descripcion: "Tiendas"
  },
  {
    id: 866,
    placeId: "ChIJbWOxTQTdYpYRb6lTJkxMDVM",
    nombre: "Pet&Go MallPlaza Oeste",
    lat: -33.516664,
    lng: -70.718260,
    descripcion: "Tiendas"
  },
  {
    id: 867,
    placeId: "ChIJPRaUBCbPYpYREGTc4ElVdDI",
    nombre: "Pet&Go Parque Arauco",
    lat: -33.402403,
    lng: -70.579405,
    descripcion: "Tiendas"
  },
  {
    id: 868,
    placeId: "ChIJH0__Pd_PYpYRqAjx1eKuGfA",
    nombre: "Petco Los Dominicos (Express)",
    lat: -33.415760,
    lng: -70.539471,
    descripcion: "Tiendas"
  },
  {
    id: 869,
    placeId: "ChIJl6oBTB3LYpYR2c3bNBcrMuc",
    nombre: "Petco Patio Andino",
    lat: -33.325471,
    lng: -70.517325,
    descripcion: "Tiendas"
  },
  {
    id: 870,
    placeId: "ChIJFeK4RyjFYpYR364fbj5xOnk",
    nombre: "petfit animals",
    lat: -33.494576,
    lng: -70.708090,
    descripcion: "Tiendas"
  },
  {
    id: 871,
    placeId: "ChIJgatuq0XFYpYRP7qMBobbMbg",
    nombre: "Petfy",
    lat: -33.385879,
    lng: -70.566573,
    descripcion: "Tiendas"
  },
  {
    id: 872,
    placeId: "ChIJhakcb6_RYpYRlLQQt1Qt5gs",
    nombre: "Petglam Store",
    lat: -33.516539,
    lng: -70.591375,
    descripcion: "Tiendas"
  },
  {
    id: 873,
    placeId: "ChIJE7oqFrrHYpYRrAqduPudrU8",
    nombre: "Petgold",
    lat: -33.386461,
    lng: -70.659266,
    descripcion: "Tiendas"
  },
  {
    id: 874,
    placeId: "ChIJvVH9chrPYpYRPeGUURNzNOs",
    nombre: "PetHarmony",
    lat: -33.448411,
    lng: -70.623481,
    descripcion: "Tiendas"
  },
  {
    id: 875,
    placeId: "ChIJY87G3KvFYpYRhwtMG6M0hWE",
    nombre: "Pethome",
    lat: -33.524538,
    lng: -70.620727,
    descripcion: "Tiendas"
  },
  {
    id: 876,
    placeId: "ChIJETNzQY65YpYRwt14sBdZZvg",
    nombre: "PetLink Chicureo",
    lat: -33.285979,
    lng: -70.700035,
    descripcion: "Tiendas"
  },
  {
    id: 877,
    placeId: "ChIJx0QFYO3FYpYR0i_UgDwd8H0",
    nombre: "Petluditos - Peluqueria Canina, Alimentos y accesorios para mascotas",
    lat: -33.455124,
    lng: -70.690927,
    descripcion: "Tiendas"
  },
  {
    id: 878,
    placeId: "ChIJw_ySNiXjYpYRBX2QKU8zF0U",
    nombre: "Petluditos - Veterinaria, Alimento y accesorio para Mascotas",
    lat: -33.663254,
    lng: -70.928998,
    descripcion: "Tiendas"
  },
  {
    id: 879,
    placeId: "ChIJQVhaqzfPYpYRMrspTwX4e8o",
    nombre: "Petluditos -Alimentos y accesorios para mascotas",
    lat: -33.447899,
    lng: -70.605994,
    descripcion: "Tiendas"
  },
  {
    id: 880,
    placeId: "ChIJX96VZDTFYpYR-ra472FY2ZI",
    nombre: "Petludos",
    lat: -33.431165,
    lng: -70.689960,
    descripcion: "Tiendas"
  },
  {
    id: 881,
    placeId: "ChIJl9kVm7zbYpYRz1meVFfP8QY",
    nombre: "PetMaster Distribuidora La Cisterna",
    lat: -33.513898,
    lng: -70.665820,
    descripcion: "Tiendas"
  },
  {
    id: 882,
    placeId: "ChIJsdRLF2LPYpYR8sreJ8jsg6M",
    nombre: "Petrritos",
    lat: -33.411120,
    lng: -70.545978,
    descripcion: "Tiendas"
  },
  {
    id: 883,
    placeId: "ChIJg69XmyzbYpYRgs1GOQNE_6s",
    nombre: "Pets Beto",
    lat: -33.517649,
    lng: -70.694230,
    descripcion: "Tiendas"
  },
  {
    id: 884,
    placeId: "ChIJ9wD1A1i4YpYR_gqrkb_cB4A",
    nombre: "PETS CHICUREO",
    lat: -33.286285,
    lng: -70.668836,
    descripcion: "Tiendas"
  },
  {
    id: 885,
    placeId: "ChIJLXvjSzzGYpYRnJ3cqBsg_g4",
    nombre: "Pets Del Valle",
    lat: -33.376032,
    lng: -70.637750,
    descripcion: "Tiendas"
  },
  {
    id: 886,
    placeId: "ChIJLRELqPfFYpYRBH7HKrqy3tI",
    nombre: "Pets en Recoleta Comercial Capricci Alimentos y Accesorios para Mascotas",
    lat: -33.412889,
    lng: -70.636194,
    descripcion: "Tiendas"
  },
  {
    id: 887,
    placeId: "ChIJrVIioQjXYpYRAgRnq0r4EJk",
    nombre: "Pets Furry alimento y Peluquería Canina para Mascotas",
    lat: -33.598036,
    lng: -70.549839,
    descripcion: "Tiendas"
  },
  {
    id: 888,
    placeId: "ChIJTVw95zvnYpYRr1XqRDxZdNw",
    nombre: "Pets Happy",
    lat: -33.575626,
    lng: -70.832107,
    descripcion: "Tiendas"
  },
  {
    id: 889,
    placeId: "ChIJExH5PMbDYpYRdAzDtRduet8",
    nombre: "Pets house águilas negras 1168",
    lat: -33.436893,
    lng: -70.754950,
    descripcion: "Tiendas"
  },
  {
    id: 890,
    placeId: "ChIJHUCsIAAhY5YRRWoUNds_LCE",
    nombre: "Pets Kennedy",
    lat: -33.740392,
    lng: -70.744659,
    descripcion: "Tiendas"
  },
  {
    id: 891,
    placeId: "ChIJb_tqeADFYpYRMEtYLbj4ido",
    nombre: "Pets KMA",
    lat: -33.431443,
    lng: -70.707155,
    descripcion: "Tiendas"
  },
  {
    id: 892,
    placeId: "ChIJ5UpAcc3PYpYRh4IQAdG0gVI",
    nombre: "Pets Landia Spa",
    lat: -33.432689,
    lng: -70.585476,
    descripcion: "Tiendas"
  },
  {
    id: 893,
    placeId: "ChIJM3-_RFPPYpYR8wam9QdeNkU",
    nombre: "Pets love it!",
    lat: -33.415778,
    lng: -70.602575,
    descripcion: "Tiendas"
  },
  {
    id: 894,
    placeId: "ChIJ1Q86-G7EYpYR-hbicjQBBMc",
    nombre: "Pets Mona",
    lat: -33.439999,
    lng: -70.702235,
    descripcion: "Tiendas"
  },
  {
    id: 895,
    placeId: "ChIJTWUhdwApY5YR1lQdIsUWLYs",
    nombre: "PETS SOBARZO HMNOS",
    lat: -33.676774,
    lng: -70.583885,
    descripcion: "Tiendas"
  },
  {
    id: 896,
    placeId: "ChIJ0XJI24bHYpYRTln-pqC7J5E",
    nombre: "Pets Sounds",
    lat: -33.408427,
    lng: -70.694555,
    descripcion: "Tiendas"
  },
  {
    id: 897,
    placeId: "ChIJeYGdNpLZYpYR0HuOgmTBhTU",
    nombre: "Petsand.cl",
    lat: -33.624374,
    lng: -70.636665,
    descripcion: "Tiendas"
  },
  {
    id: 898,
    placeId: "ChIJrSAfiM7FYpYRGc0XuT7zBe4",
    nombre: "PETSAYPAS",
    lat: -33.406174,
    lng: -70.656578,
    descripcion: "Tiendas"
  },
  {
    id: 899,
    placeId: "ChIJa7vkl6zbYpYRztaUqe4mcKA",
    nombre: "PetsFoods",
    lat: -33.556751,
    lng: -70.640814,
    descripcion: "Tiendas"
  },
  {
    id: 900,
    placeId: "ChIJ2QLa-rWiYpYRiA4O8Zcat4A",
    nombre: "PetShop",
    lat: -33.160753,
    lng: -70.788967,
    descripcion: "Tiendas"
  },
  {
    id: 901,
    placeId: "ChIJI0fw61nLYpYRMWxFtkutx50",
    nombre: "PetShop",
    lat: -33.351045,
    lng: -70.509805,
    descripcion: "Tiendas"
  },
  {
    id: 902,
    placeId: "ChIJX6UUD_xpY5YR7Icuf5K6Xj8",
    nombre: "PETSHOP AMAISI LO MIRANDA",
    lat: -34.190619,
    lng: -70.892107,
    descripcion: "Tiendas"
  },
  {
    id: 903,
    placeId: "ChIJF0QJlwDDYpYRP_BQJp4oTxo",
    nombre: "Petshop Amanda Ltda",
    lat: -33.419484,
    lng: -70.737112,
    descripcion: "Tiendas"
  },
  {
    id: 904,
    placeId: "ChIJCVe0jo7DYpYR1eUUdiLGa44",
    nombre: "PetShop Entre Patas y Bigotes",
    lat: -33.476180,
    lng: -70.725622,
    descripcion: "Tiendas"
  },
  {
    id: 905,
    placeId: "ChIJV7DmOC7bYpYRnmzU1ui80pE",
    nombre: "Petshop Entrepatas",
    lat: -33.581350,
    lng: -70.704759,
    descripcion: "Tiendas"
  },
  {
    id: 906,
    placeId: "ChIJ2QLa-rWiYpYRiA4O8Zcat4A",
    nombre: "Petshop Karú",
    lat: -33.160753,
    lng: -70.788967,
    descripcion: "Tiendas"
  },
  {
    id: 907,
    placeId: "ChIJBw7x37mjYpYRw5xyz-pOJA0",
    nombre: "Petshop La Huella de Aris",
    lat: -33.140459,
    lng: -70.795511,
    descripcion: "Tiendas"
  },
  {
    id: 908,
    placeId: "ChIJ5V1sYgDbYpYRJwq3HevskqU",
    nombre: "Petshop Mister Chappie",
    lat: -33.506890,
    lng: -70.634656,
    descripcion: "Tiendas"
  },
  {
    id: 909,
    placeId: "ChIJ85Q__ZXQYpYRHzliSrsqH6Y",
    nombre: "petshop san camilo",
    lat: -33.545464,
    lng: -70.603764,
    descripcion: "Tiendas"
  },
  {
    id: 910,
    placeId: "ChIJ6YB0-_TbYpYR8rVibZFsMVI",
    nombre: "Petshop tienditahappycat",
    lat: -33.518912,
    lng: -70.681915,
    descripcion: "Tiendas"
  },
  {
    id: 911,
    placeId: "ChIJce-xRLsfY5YRu3tLKGSk8mk",
    nombre: "petshopbripau",
    lat: -33.755554,
    lng: -70.906945,
    descripcion: "Tiendas"
  },
  {
    id: 912,
    placeId: "ChIJ4wBoKYzWYpYRld4DiXASJp0",
    nombre: "Petshopping",
    lat: -33.593361,
    lng: -70.544606,
    descripcion: "Tiendas"
  },
  {
    id: 913,
    placeId: "ChIJbWn4HzfHYpYRP9yX_Jo04TI",
    nombre: "PetStar Delivery",
    lat: -33.364696,
    lng: -70.670228,
    descripcion: "Tiendas"
  },
  {
    id: 914,
    placeId: "ChIJ_VU_I3m7YpYR4rh8t25k-x8",
    nombre: "PETSTORE CHILE",
    lat: -33.207306,
    lng: -70.666495,
    descripcion: "Tiendas"
  },
  {
    id: 915,
    placeId: "ChIJtaJatgXDYpYRUxrJeXzIPqo",
    nombre: "PetStore Invasión Animal",
    lat: -33.462488,
    lng: -70.746845,
    descripcion: "Tiendas"
  },
  {
    id: 916,
    placeId: "ChIJ17ICRa3PYpYRU2rzx3wm52c",
    nombre: "Petting.cl | Providencia | Tienda para mascotas",
    lat: -33.439561,
    lng: -70.620711,
    descripcion: "Tiendas"
  },
  {
    id: 917,
    placeId: "ChIJ6SEoYPrPYpYRDilGVZ6t-_0",
    nombre: "Petvet.cl (Punto de Retiro)",
    lat: -33.411012,
    lng: -70.562764,
    descripcion: "Tiendas"
  },
  {
    id: 918,
    placeId: "ChIJnXaKKbrFYpYRf98KWj__ZMA",
    nombre: "PetWild Chile",
    lat: -33.429974,
    lng: -70.653599,
    descripcion: "Tiendas"
  },
  {
    id: 919,
    placeId: "ChIJa4npOZ3FYpYRiILqwnlzFWM",
    nombre: "PetWoow",
    lat: -33.450366,
    lng: -70.784598,
    descripcion: "Tiendas"
  },
  {
    id: 920,
    placeId: "ChIJKYHepdHbYpYR-TTqveokgc8",
    nombre: "Petysa Store",
    lat: -33.513476,
    lng: -70.694491,
    descripcion: "Tiendas"
  },
  {
    id: 921,
    placeId: "ChIJr6_Og8DFYpYR-rOW1_NjDu0",
    nombre: "Picaflor Spa",
    lat: -33.409954,
    lng: -70.690116,
    descripcion: "Tiendas"
  },
  {
    id: 922,
    placeId: "ChIJbYxSV41VYpYRf4ZHsMP858Y",
    nombre: "Pilchas y Mascotas",
    lat: -33.687777,
    lng: -71.212412,
    descripcion: "Tiendas"
  },
  {
    id: 923,
    placeId: "ChIJW9Z4GUrbYpYRx51h9rEh-D8",
    nombre: "pincheirapets",
    lat: -33.549387,
    lng: -70.626363,
    descripcion: "Tiendas"
  },
  {
    id: 924,
    placeId: "ChIJh1Zr2FPbYpYRN40oZFjLXJQ",
    nombre: "Pirata Petshop",
    lat: -33.508485,
    lng: -70.653049,
    descripcion: "Tiendas"
  },
  {
    id: 925,
    placeId: "ChIJTaY0U-XXYpYRYj3oWzzNufw",
    nombre: "Pirque Mascotas",
    lat: -33.642947,
    lng: -70.591953,
    descripcion: "Tiendas"
  },
  {
    id: 926,
    placeId: "ChIJpXBIXK_IYpYR9hk77M2LfGI",
    nombre: "Planet Pet",
    lat: -33.386517,
    lng: -70.614485,
    descripcion: "Tiendas"
  },
  {
    id: 927,
    placeId: "ChIJT7CK8gHFYpYRR4uHC8YZruE",
    nombre: "Planeta de Mascotas",
    lat: -33.412162,
    lng: -70.661290,
    descripcion: "Tiendas"
  },
  {
    id: 928,
    placeId: "ChIJV6JxZYPHYpYRpFExdb8HaY4",
    nombre: "Plus Pet Huechuraba",
    lat: -33.345218,
    lng: -70.669528,
    descripcion: "Tiendas"
  },
  {
    id: 929,
    placeId: "ChIJaRnWFNTbYpYR89tvz5KOWZ8",
    nombre: "Pluto Pets San Bernardo",
    lat: -33.583998,
    lng: -70.710730,
    descripcion: "Tiendas"
  },
  {
    id: 930,
    placeId: "ChIJ6STBR-zFYpYRSmhOLjmhQk8",
    nombre: "Pobre Guacho",
    lat: -33.452852,
    lng: -70.677120,
    descripcion: "Tiendas"
  },
  {
    id: 931,
    placeId: "ChIJCyJszZbDYpYRm2Mqb6xzx3w",
    nombre: "Polayna Pets",
    lat: -33.458307,
    lng: -70.723048,
    descripcion: "Tiendas"
  },
  {
    id: 932,
    placeId: "ChIJrfdoQ3XHYpYRrS3X8IwMW_k",
    nombre: "Polly pett`s",
    lat: -33.379400,
    lng: -70.666843,
    descripcion: "Tiendas"
  },
  {
    id: 933,
    placeId: "ChIJD7M-Gi7bYpYRSm7dUO5Alus",
    nombre: "Polo 2 Pet Shop",
    lat: -33.504118,
    lng: -70.661390,
    descripcion: "Tiendas"
  },
  {
    id: 934,
    placeId: "ChIJmVUmsRjPYpYR2BiWVsGrVvw",
    nombre: "PP",
    lat: -33.629073,
    lng: -70.768933,
    descripcion: "Tiendas"
  },
  {
    id: 935,
    placeId: "ChIJ1b0lWKTHYpYRk94skXHhTMI",
    nombre: "primos pets tienda mascotas",
    lat: -33.374521,
    lng: -70.636983,
    descripcion: "Tiendas"
  },
  {
    id: 936,
    placeId: "ChIJizSte3HZYpYRGZJCM9UjWoo",
    nombre: "Pro Plan",
    lat: -33.615692,
    lng: -70.683054,
    descripcion: "Tiendas"
  },
  {
    id: 937,
    placeId: "ChIJ9wRQVijJYpYR_Vz5lx4i5zo",
    nombre: "Propet",
    lat: -33.381510,
    lng: -70.571136,
    descripcion: "Tiendas"
  },
  {
    id: 938,
    placeId: "ChIJIcn3CUHXYpYRKQX_Ip4a-oE",
    nombre: "Pueblito Pets",
    lat: -33.624653,
    lng: -70.544827,
    descripcion: "Tiendas"
  },
  {
    id: 939,
    placeId: "ChIJVfouQ6zXYpYRGr-bbxK7bVc",
    nombre: "Pukymike pets",
    lat: -33.613544,
    lng: -70.527126,
    descripcion: "Tiendas"
  },
  {
    id: 940,
    placeId: "ChIJmy4YZd_FYpYRw8HSxycNkQg",
    nombre: "Punto Mascotas",
    lat: -33.418698,
    lng: -70.663722,
    descripcion: "Tiendas"
  },
  {
    id: 941,
    placeId: "ChIJQ_OAdN7RYpYRnot4CQ1ocBQ",
    nombre: "Punto Mascotas",
    lat: -33.542876,
    lng: -70.569673,
    descripcion: "Tiendas"
  },
  {
    id: 942,
    placeId: "ChIJo9UsEpPPYpYRNaiKEA463eE",
    nombre: "Punto Mascotas",
    lat: -33.458346,
    lng: -70.605759,
    descripcion: "Tiendas"
  },
  {
    id: 943,
    placeId: "ChIJTSfQ7AMhY5YRCOMlpBe8QYg",
    nombre: "Punto Mascotas",
    lat: -33.731711,
    lng: -70.748141,
    descripcion: "Tiendas"
  },
  {
    id: 944,
    placeId: "ChIJN6FlLrfjYpYRa9nWVmYd2sI",
    nombre: "Punto Mascotas",
    lat: -33.656765,
    lng: -70.911035,
    descripcion: "Tiendas"
  },
  {
    id: 945,
    placeId: "ChIJN6FlLrfjYpYRa9nWVmYd2sI",
    nombre: "Punto Mascotas",
    lat: -33.656765,
    lng: -70.911035,
    descripcion: "Tiendas"
  },
  {
    id: 946,
    placeId: "ChIJHY4T8i3RYpYRYyyH-L2Y1lY",
    nombre: "Punto mascotas .",
    lat: -33.564169,
    lng: -70.616183,
    descripcion: "Tiendas"
  },
  {
    id: 947,
    placeId: "ChIJI2_8Fj_PYpYRck594OAwJiA",
    nombre: "Puppies and Kittens Egaña - Tienda de Mascotas",
    lat: -33.456044,
    lng: -70.571134,
    descripcion: "Tiendas"
  },
  {
    id: 948,
    placeId: "ChIJvTtBE_LLYpYRhjhE0Uyl4RE",
    nombre: "Puppies and Kittens Las Condes - Tienda de Mascotas",
    lat: -33.371711,
    lng: -70.513525,
    descripcion: "Tiendas"
  },
  {
    id: 949,
    placeId: "ChIJ95A5Mi3JYpYRpiAisrE4p1s",
    nombre: "Puppies and Kittens Vitacura - Tienda de Mascotas",
    lat: -33.388503,
    lng: -70.564003,
    descripcion: "Tiendas"
  },
  {
    id: 950,
    placeId: "ChIJfd8YdMnRYpYRaxFGkxoI5kg",
    nombre: "Puppies House Tienda",
    lat: -33.496455,
    lng: -70.591388,
    descripcion: "Tiendas"
  },
  {
    id: 951,
    placeId: "ChIJbe7-PgDPYpYRDL_ZLFrlmrw",
    nombre: "Puppy Amy Pet Shop",
    lat: -33.479665,
    lng: -70.597256,
    descripcion: "Tiendas"
  },
  {
    id: 952,
    placeId: "ChIJL0WKO0rBYpYR380q41kXVlg",
    nombre: "Puppy pet",
    lat: -33.360343,
    lng: -70.744883,
    descripcion: "Tiendas"
  },
  {
    id: 953,
    placeId: "ChIJUY9Q2gPdYpYRrELsM_7SVKQ",
    nombre: "Puppy Pulgoso",
    lat: -33.545160,
    lng: -70.768170,
    descripcion: "Tiendas"
  },
  {
    id: 954,
    placeId: "ChIJgx8ToyLRYpYRfYQY7uBrG5A",
    nombre: "PuppyLove Pet Chile",
    lat: -33.540239,
    lng: -70.563297,
    descripcion: "Tiendas"
  },
  {
    id: 955,
    placeId: "ChIJBQb2BCbbYpYRtQjzFN-e_To",
    nombre: "Pups Pet Supply",
    lat: -33.506664,
    lng: -70.659762,
    descripcion: "Tiendas"
  },
  {
    id: 956,
    placeId: "ChIJ49HU4orFYpYR6k7ue5cbuaw",
    nombre: "PW Pet Warehouse",
    lat: -33.366450,
    lng: -70.682294,
    descripcion: "Tiendas"
  },
  {
    id: 957,
    placeId: "ChIJ4xa4QhfEYpYRXT4TnDCSZAI",
    nombre: "Quinta Normal Mascota",
    lat: -33.421927,
    lng: -70.697593,
    descripcion: "Tiendas"
  },
  {
    id: 958,
    placeId: "ChIJjcmYUOP1YpYRHx2zPrAqEKM",
    nombre: "RanchoPetss",
    lat: -33.410513,
    lng: -71.149366,
    descripcion: "Tiendas"
  },
  {
    id: 959,
    placeId: "ChIJvcYwfsdVYpYRO4nnSETkKL4",
    nombre: "Ravello Food's",
    lat: -33.688239,
    lng: -71.224530,
    descripcion: "Tiendas"
  },
  {
    id: 960,
    placeId: "ChIJfTp8Es_PYpYRktp8q2p_IHw",
    nombre: "Razas Pet",
    lat: -33.421886,
    lng: -70.605356,
    descripcion: "Tiendas"
  },
  {
    id: 961,
    placeId: "ChIJFWPAMwDPYpYRFzgn1q1x-S0",
    nombre: "Razas Pet Tienda Cristobal Colon",
    lat: -33.424256,
    lng: -70.581674,
    descripcion: "Tiendas"
  },
  {
    id: 962,
    placeId: "ChIJaZccwsHPYpYRVyPm2XrD2uY",
    nombre: "Razas Pet Tienda Irarrazaval",
    lat: -33.454108,
    lng: -70.603922,
    descripcion: "Tiendas"
  },
  {
    id: 963,
    placeId: "ChIJfTp8Es_PYpYRktp8q2p_IHw",
    nombre: "Razas Pet Tienda Los Leones",
    lat: -33.421886,
    lng: -70.605356,
    descripcion: "Tiendas"
  },
  {
    id: 964,
    placeId: "ChIJfTp8Es_PYpYRktp8q2p_IHw",
    nombre: "Razas Pet Tienda Nueva Providencia",
    lat: -33.421886,
    lng: -70.605356,
    descripcion: "Tiendas"
  },
  {
    id: 965,
    placeId: "ChIJjbo6YjzPYpYRt_QxJryjJNg",
    nombre: "Razas Pet Tienda Pedro de Valdivia",
    lat: -33.424049,
    lng: -70.612379,
    descripcion: "Tiendas"
  },
  {
    id: 966,
    placeId: "ChIJ54Gze6bbYpYRpdIEmo0A2Ko",
    nombre: "Razas Pet Tienda San Miguel",
    lat: -33.492782,
    lng: -70.652156,
    descripcion: "Tiendas"
  },
  {
    id: 967,
    placeId: "ChIJo30moBXFYpYRWE1MC2dkSdc",
    nombre: "Razas Pet Tienda Santa Isabel",
    lat: -33.447021,
    lng: -70.628348,
    descripcion: "Tiendas"
  },
  {
    id: 968,
    placeId: "ChIJU5cTID7FYpYRWzhXJX2Cwww",
    nombre: "Razas Pet Tienda Vicuña Mackenna 295",
    lat: -33.452546,
    lng: -70.630951,
    descripcion: "Tiendas"
  },
  {
    id: 969,
    placeId: "ChIJ2TkOy-nFYpYRLzZ8e9MLBIQ",
    nombre: "Razas Pet Tienda Vicuña Mackenna 853",
    lat: -33.452599,
    lng: -70.630927,
    descripcion: "Tiendas"
  },
  {
    id: 970,
    placeId: "ChIJAejEVv_bYpYRBh7rYnqlagY",
    nombre: "Regalones Con Estilo",
    lat: -33.516912,
    lng: -70.680012,
    descripcion: "Tiendas"
  },
  {
    id: 971,
    placeId: "ChIJ7ToYlIzRYpYRWCackGbpjTY",
    nombre: "Regalones Pet Shop 1",
    lat: -33.506259,
    lng: -70.577116,
    descripcion: "Tiendas"
  },
  {
    id: 972,
    placeId: "ChIJEeEb-efFYpYRf2v2cixwFVk",
    nombre: "Regaloones",
    lat: -33.421104,
    lng: -70.656115,
    descripcion: "Tiendas"
  },
  {
    id: 973,
    placeId: "ChIJHw_SzR_DYpYR8U65eQRkBiU",
    nombre: "Reino Animalia",
    lat: -33.483407,
    lng: -70.763367,
    descripcion: "Tiendas"
  },
  {
    id: 974,
    placeId: "ChIJhQo_0PXRYpYR7gB0G2A9yBU",
    nombre: "Rekete Patitas Pet Shop",
    lat: -33.491197,
    lng: -70.540121,
    descripcion: "Tiendas"
  },
  {
    id: 975,
    placeId: "ChIJ7ctH_jLDYpYRBkqfLQu8BWg",
    nombre: "Repostería Para Mascotas Homero",
    lat: -33.478787,
    lng: -70.718490,
    descripcion: "Tiendas"
  },
  {
    id: 976,
    placeId: "ChIJo3RoUqDbYpYRYXnUIK4UmXM",
    nombre: "Requeteanimal",
    lat: -33.527346,
    lng: -70.661958,
    descripcion: "Tiendas"
  },
  {
    id: 977,
    placeId: "ChIJJwHac0PFYpYRZnW17sNaaGM",
    nombre: "Rincón de Balú",
    lat: -33.427510,
    lng: -70.640470,
    descripcion: "Tiendas"
  },
  {
    id: 978,
    placeId: "ChIJZ9h9ln0jY5YRMNURxpOKG1w",
    nombre: "Rincon patitas",
    lat: -33.783068,
    lng: -70.746971,
    descripcion: "Tiendas"
  },
  {
    id: 979,
    placeId: "ChIJ2cgRJibjYpYRTSCBmwMjA-Q",
    nombre: "Ritmo Animal",
    lat: -33.684997,
    lng: -70.915850,
    descripcion: "Tiendas"
  },
  {
    id: 980,
    placeId: "ChIJsw60uxPFYpYRLgLRZnofvYE",
    nombre: "Rivet-Mascotas",
    lat: -33.487211,
    lng: -70.667755,
    descripcion: "Tiendas"
  },
  {
    id: 981,
    placeId: "ChIJk-5YaNzDYpYRcTFUvBH_t88",
    nombre: "Rocket Pet Clothes",
    lat: -33.421500,
    lng: -70.754830,
    descripcion: "Tiendas"
  },
  {
    id: 982,
    placeId: "ChIJe65mrxiVYpYRUserKVWyZMA",
    nombre: "Rokomascotas",
    lat: -33.238292,
    lng: -70.768567,
    descripcion: "Tiendas"
  },
  {
    id: 983,
    placeId: "ChIJQW-IKlDfYpYRCLiXN1NjEFM",
    nombre: "ruka kullin petshop",
    lat: -33.631628,
    lng: -70.756537,
    descripcion: "Tiendas"
  },
  {
    id: 984,
    placeId: "ChIJPwhQQELOYpYRPUE79Cxi8xQ",
    nombre: "RUKAPET Veterinaria Peluquería Alimentos",
    lat: -33.444622,
    lng: -70.551895,
    descripcion: "Tiendas"
  },
  {
    id: 985,
    placeId: "ChIJ754Fg7PmYpYRXz4IUZR5Jbg",
    nombre: "S.o.s Mascotas",
    lat: -33.610794,
    lng: -70.889864,
    descripcion: "Tiendas"
  },
  {
    id: 986,
    placeId: "ChIJzZbduxLbYpYRkepwlcZm6qM",
    nombre: "SabroZoo PetShop",
    lat: -33.517341,
    lng: -70.658345,
    descripcion: "Tiendas"
  },
  {
    id: 987,
    placeId: "ChIJDzMZ0yDRYpYR4kzZ3Da5Htg",
    nombre: "Safari Pet",
    lat: -33.506177,
    lng: -70.580921,
    descripcion: "Tiendas"
  },
  {
    id: 988,
    placeId: "ChIJnVqT0cfFYpYRH58XMmBGspc",
    nombre: "SafariPez - Tienda de Suplementos para Mascotas",
    lat: -33.407975,
    lng: -70.667582,
    descripcion: "Tiendas"
  },
  {
    id: 989,
    placeId: "ChIJnVqT0cfFYpYRH58XMmBGspc",
    nombre: "Safaripez “Soto y Jaña Ltda.”",
    lat: -33.407975,
    lng: -70.667582,
    descripcion: "Tiendas"
  },
  {
    id: 990,
    placeId: "ChIJ3Q1hwg_bYpYR_U_5m185kM8",
    nombre: "Sam cat store",
    lat: -33.520043,
    lng: -70.652555,
    descripcion: "Tiendas"
  },
  {
    id: 991,
    placeId: "ChIJDwbTg_zaYpYR3iZ9vBbLGUs",
    nombre: "San Ignacio Per Shop",
    lat: -33.525054,
    lng: -70.665806,
    descripcion: "Tiendas"
  },
  {
    id: 992,
    placeId: "ChIJn04MWATDYpYR6IY8ppHeLBM",
    nombre: "SANPETS Alimentos Para Mascotas",
    lat: -33.455847,
    lng: -70.764662,
    descripcion: "Tiendas"
  },
  {
    id: 993,
    placeId: "ChIJt0aS7KbPYpYRIZzPAketSUY",
    nombre: "Santiago Pet Store",
    lat: -33.445905,
    lng: -70.596596,
    descripcion: "Tiendas"
  },
  {
    id: 994,
    placeId: "ChIJP80SLQDDYpYRe0TNt6dIu_E",
    nombre: "SARIHUELLITAS",
    lat: -33.432633,
    lng: -70.739857,
    descripcion: "Tiendas"
  },
  {
    id: 995,
    placeId: "ChIJ07aVfPDbYpYRFiuvDcAlMKY",
    nombre: "Scar Mascotas",
    lat: -33.511700,
    lng: -70.657637,
    descripcion: "Tiendas"
  },
  {
    id: 996,
    placeId: "ChIJNegHKGPbYpYRjyPTME0XBb4",
    nombre: "SENDERO ANIMAL",
    lat: -33.579263,
    lng: -70.708401,
    descripcion: "Tiendas"
  },
  {
    id: 997,
    placeId: "ChIJ-8tLKOvFYpYRVoO0uaFqBAI",
    nombre: "Sera Chile - Comercial Pezera Ltda",
    lat: -33.422549,
    lng: -70.642472,
    descripcion: "Tiendas"
  },
  {
    id: 998,
    placeId: "ChIJ0bgcs5PBYpYRj85e0CEz7B4",
    nombre: "Simba Alimentos de Mascotas y Articulos de Aseo",
    lat: -33.353337,
    lng: -70.728765,
    descripcion: "Tiendas"
  },
  {
    id: 999,
    placeId: "ChIJ2Tkr3BlVYpYRV12VxVSyTJk",
    nombre: "Simbipet",
    lat: -33.669426,
    lng: -71.226292,
    descripcion: "Tiendas"
  },
  {
    id: 1000,
    placeId: "ChIJuZYZ5kHRYpYRVPZTV7zHZY0",
    nombre: "Sissa Store",
    lat: -33.499092,
    lng: -70.619086,
    descripcion: "Tiendas"
  },
  {
    id: 1001,
    placeId: "ChIJB8YNXQTBYpYRux8U5QQshLk",
    nombre: "Socomed SpA",
    lat: -33.372473,
    lng: -70.733538,
    descripcion: "Tiendas"
  },
  {
    id: 1002,
    placeId: "ChIJ26LtEdPQYpYRUnHlLK5XWQA",
    nombre: "SofiPet Alimento Y Accesorios Solo Para Peces Tortugas de agua y Roedores",
    lat: -33.562126,
    lng: -70.581953,
    descripcion: "Tiendas"
  },
  {
    id: 1003,
    placeId: "ChIJiaLg1qLbYpYRLN73kXZShYk",
    nombre: "Somol Tienda de mascotas",
    lat: -33.553754,
    lng: -70.668952,
    descripcion: "Tiendas"
  },
  {
    id: 1004,
    placeId: "ChIJq_0gxi_FYpYRJP_euMxa5mk",
    nombre: "SOY PET",
    lat: -33.424318,
    lng: -70.639744,
    descripcion: "Tiendas"
  },
  {
    id: 1005,
    placeId: "ChIJrbwhC4QhY5YRv_wZO3bdgBc",
    nombre: "Spa de mascotas @Pharmapetbuin",
    lat: -33.740562,
    lng: -70.743412,
    descripcion: "Tiendas"
  },
  {
    id: 1006,
    placeId: "ChIJM4P6T-HRYpYRxXs4DIf8QsY",
    nombre: "Store-Pets Ltda.",
    lat: -33.505047,
    lng: -70.591611,
    descripcion: "Tiendas"
  },
  {
    id: 1007,
    placeId: "ChIJQVaXdb_bYpYRtLaDxFV3EQQ",
    nombre: "StyloPets - Tienda para Mascotas",
    lat: -33.505009,
    lng: -70.655554,
    descripcion: "Tiendas"
  },
  {
    id: 1008,
    placeId: "ChIJK7f8jijOYpYRKY0cFh4bptY",
    nombre: "Suki Pet Food",
    lat: -33.471374,
    lng: -70.563948,
    descripcion: "Tiendas"
  },
  {
    id: 1009,
    placeId: "ChIJT8NNG07XYpYRyQRUQg4SIL8",
    nombre: "Sunito.Pets",
    lat: -33.626491,
    lng: -70.546880,
    descripcion: "Tiendas"
  },
  {
    id: 1010,
    placeId: "ChIJI3Q_CrvHYpYRZ8CZ4Mvnq38",
    nombre: "SUPER MASCOTA",
    lat: -33.395788,
    lng: -70.653280,
    descripcion: "Tiendas"
  },
  {
    id: 1011,
    placeId: "ChIJjQU1tTfZYpYR0cS9zDPbBXk",
    nombre: "Super Miau Petshop",
    lat: -33.617652,
    lng: -70.692084,
    descripcion: "Tiendas"
  },
  {
    id: 1012,
    placeId: "ChIJn3PmI9nXYpYR66ezMKHqTo8",
    nombre: "Super Peludos Chile",
    lat: -33.597086,
    lng: -70.560742,
    descripcion: "Tiendas"
  },
  {
    id: 1013,
    placeId: "ChIJqZz7bd3iYpYRSCPZyhIJTdg",
    nombre: "Supermercado Tottus El Monte",
    lat: -33.680032,
    lng: -70.979776,
    descripcion: "Tiendas"
  },
  {
    id: 1014,
    placeId: "ChIJAW7-rwXHYpYRBm7rsJnlCDE",
    nombre: "SuperZoo",
    lat: -33.351325,
    lng: -70.669962,
    descripcion: "Tiendas"
  },
  {
    id: 1015,
    placeId: "ChIJz8_tBxnPYpYRdg21rHIZ8Go",
    nombre: "SuperZoo",
    lat: -33.446402,
    lng: -70.561257,
    descripcion: "Tiendas"
  },
  {
    id: 1016,
    placeId: "ChIJz8_tBxnPYpYRdg21rHIZ8Go",
    nombre: "SuperZoo",
    lat: -33.446402,
    lng: -70.561257,
    descripcion: "Tiendas"
  },
  {
    id: 1017,
    placeId: "ChIJpYkiSt_PYpYR3Jv7W4wY3Ds",
    nombre: "SuperZoo",
    lat: -33.423582,
    lng: -70.578308,
    descripcion: "Tiendas"
  },
  {
    id: 1018,
    placeId: "ChIJ9YJiFXPLYpYRRPjuSRlsIa0",
    nombre: "SuperZoo",
    lat: -33.362368,
    lng: -70.514640,
    descripcion: "Tiendas"
  },
  {
    id: 1019,
    placeId: "ChIJ9YJiFXPLYpYRRPjuSRlsIa0",
    nombre: "SuperZoo",
    lat: -33.362368,
    lng: -70.514640,
    descripcion: "Tiendas"
  },
  {
    id: 1020,
    placeId: "ChIJ9YJiFXPLYpYRRPjuSRlsIa0",
    nombre: "SuperZoo",
    lat: -33.362368,
    lng: -70.514640,
    descripcion: "Tiendas"
  },
  {
    id: 1021,
    placeId: "ChIJh52EAWLRYpYRITJV-OE6C5A",
    nombre: "SuperZoo",
    lat: -33.486712,
    lng: -70.556064,
    descripcion: "Tiendas"
  },
  {
    id: 1022,
    placeId: "ChIJN03P1r7PYpYRNXi9pcy8kzU",
    nombre: "SuperZoo",
    lat: -33.417525,
    lng: -70.606464,
    descripcion: "Tiendas"
  },
  {
    id: 1023,
    placeId: "ChIJ_8NNNADBYpYRBFkVa2XVyZk",
    nombre: "SuperZoo",
    lat: -33.368024,
    lng: -70.730417,
    descripcion: "Tiendas"
  },
  {
    id: 1024,
    placeId: "ChIJcTscFf7FYpYRlkLjEZrpx4c",
    nombre: "SuperZoo",
    lat: -33.485974,
    lng: -70.651607,
    descripcion: "Tiendas"
  },
  {
    id: 1025,
    placeId: "ChIJbf8CSYTPYpYRjV3wpzpR_Ds",
    nombre: "SuperZoo",
    lat: -33.397340,
    lng: -70.582645,
    descripcion: "Tiendas"
  },
  {
    id: 1026,
    placeId: "ChIJbf8CSYTPYpYRjV3wpzpR_Ds",
    nombre: "SuperZoo",
    lat: -33.397340,
    lng: -70.582645,
    descripcion: "Tiendas"
  },
  {
    id: 1027,
    placeId: "ChIJbf8CSYTPYpYRjV3wpzpR_Ds",
    nombre: "SuperZoo",
    lat: -33.397340,
    lng: -70.582645,
    descripcion: "Tiendas"
  },
  {
    id: 1028,
    placeId: "ChIJbf8CSYTPYpYRjV3wpzpR_Ds",
    nombre: "SuperZoo",
    lat: -33.397340,
    lng: -70.582645,
    descripcion: "Tiendas"
  },
  {
    id: 1029,
    placeId: "ChIJU_iDq6HVYpYRTN6C4O2ssk0",
    nombre: "SuperZoo",
    lat: -33.598630,
    lng: -70.517836,
    descripcion: "Tiendas"
  },
  {
    id: 1030,
    placeId: "ChIJ3eXtPwDXYpYRPt8sNRZBF3Q",
    nombre: "SuperZoo Pirque",
    lat: -33.637935,
    lng: -70.577549,
    descripcion: "Tiendas"
  },
  {
    id: 1031,
    placeId: "ChIJ7R7XptLaYpYRkT5WlsW7T6E",
    nombre: "SuperZoo San Miguel",
    lat: -33.491152,
    lng: -70.657591,
    descripcion: "Tiendas"
  },
  {
    id: 1032,
    placeId: "ChIJ1fZ3VwrbYpYR5eNG6F8QFy0",
    nombre: "Sus Huellas - Tienda de productos para Mascotas en El Bosque",
    lat: -33.572409,
    lng: -70.674098,
    descripcion: "Tiendas"
  },
  {
    id: 1033,
    placeId: "ChIJ286UgG4hY5YRKBZ7_hbMWC0",
    nombre: "SWEET PETS",
    lat: -33.736401,
    lng: -70.736965,
    descripcion: "Tiendas"
  },
  {
    id: 1034,
    placeId: "ChIJSzKyUlTjYpYR_GPRAXmAAKo",
    nombre: "Tala Pets",
    lat: -33.669414,
    lng: -70.918217,
    descripcion: "Tiendas"
  },
  {
    id: 1035,
    placeId: "ChIJA7dT9GP1YpYRqZgAQkMhd9M",
    nombre: "Tao fish",
    lat: -33.417648,
    lng: -71.130557,
    descripcion: "Tiendas"
  },
  {
    id: 1036,
    placeId: "ChIJiXXZds2VYpYRPmLtEykjA84",
    nombre: "Targaryen Mascotas",
    lat: -33.305430,
    lng: -70.853987,
    descripcion: "Tiendas"
  },
  {
    id: 1037,
    placeId: "ChIJsXnTVnjXYpYRAeVShZYmPgs",
    nombre: "Tdy Petshop 🐾 Donde las Mascotas son Familia",
    lat: -33.586983,
    lng: -70.560183,
    descripcion: "Tiendas"
  },
  {
    id: 1038,
    placeId: "ChIJuR4QY3jjYpYRiPHktyHTkgo",
    nombre: "Techypets",
    lat: -33.653850,
    lng: -70.912082,
    descripcion: "Tiendas"
  },
  {
    id: 1039,
    placeId: "ChIJR0bxV7nDYpYRZ2DYnl9sj34",
    nombre: "TERRY Garritas",
    lat: -33.448194,
    lng: -70.723957,
    descripcion: "Tiendas"
  },
  {
    id: 1040,
    placeId: "ChIJGzDJH2DFYpYR_5NxW5DkDWo",
    nombre: "The Backyard Petshop",
    lat: -33.439200,
    lng: -70.630462,
    descripcion: "Tiendas"
  },
  {
    id: 1041,
    placeId: "ChIJu8sdydraYpYRZBNZ-QR0LS0",
    nombre: "The Perfect Jungle Pet Shop",
    lat: -33.502505,
    lng: -70.657813,
    descripcion: "Tiendas"
  },
  {
    id: 1042,
    placeId: "ChIJndIasdXdYpYRzY3JAjielzg",
    nombre: "The Pet Corner Tienda y Peluqueria Canina",
    lat: -33.559492,
    lng: -70.788934,
    descripcion: "Tiendas"
  },
  {
    id: 1043,
    placeId: "ChIJHbWmkgHHYpYR_o4BjvQepKM",
    nombre: "The Pet Shop",
    lat: -33.382950,
    lng: -70.661032,
    descripcion: "Tiendas"
  },
  {
    id: 1044,
    placeId: "ChIJvSx0iyznYpYRGMmeWPKPC4o",
    nombre: "The pets world",
    lat: -33.565100,
    lng: -70.830228,
    descripcion: "Tiendas"
  },
  {
    id: 1045,
    placeId: "ChIJEWWpZRHdYpYRHXb2C2ZvXHU",
    nombre: "The Rabbit World",
    lat: -33.571854,
    lng: -70.793538,
    descripcion: "Tiendas"
  },
  {
    id: 1046,
    placeId: "ChIJpTbgUvTHYpYR3O12TqcVNNM",
    nombre: "Tienda Alimentos Mascotas Delivery Accesorios Pet Shop LA TIENDA DE BLUE",
    lat: -33.382037,
    lng: -70.669372,
    descripcion: "Tiendas"
  },
  {
    id: 1047,
    placeId: "ChIJs49Zh43DYpYRBdlgK_tEoBE",
    nombre: "Tienda Alma pets",
    lat: -33.446302,
    lng: -70.720160,
    descripcion: "Tiendas"
  },
  {
    id: 1048,
    placeId: "ChIJZeQojy7PYpYR6c6rxKjlRXg",
    nombre: "Tienda Colas y patitas",
    lat: -33.421412,
    lng: -70.609670,
    descripcion: "Tiendas"
  },
  {
    id: 1049,
    placeId: "ChIJQeJt4GzPYpYRJdgQYTa6bWk",
    nombre: "Tienda De Alimentos y Accesorios para Mascotas | Vipets | Todo Para Perros, Gatos Y Mascotas en General",
    lat: -33.473938,
    lng: -70.593102,
    descripcion: "Tiendas"
  },
  {
    id: 1050,
    placeId: "ChIJaaPyI-fWYpYRvpHt6EL4cyc",
    nombre: "tienda de insumos de mascotas",
    lat: -33.585508,
    lng: -70.567033,
    descripcion: "Tiendas"
  },
  {
    id: 1051,
    placeId: "ChIJqZ5fDgDZYpYRjq7Sj_9Ixcg",
    nombre: "Tienda de mascota PoppyPet",
    lat: -33.596885,
    lng: -70.671805,
    descripcion: "Tiendas"
  },
  {
    id: 1052,
    placeId: "ChIJP09B9AaVYpYRrNfwnZoECKI",
    nombre: "Tienda de Mascotas",
    lat: -33.286038,
    lng: -70.879702,
    descripcion: "Tiendas"
  },
  {
    id: 1053,
    placeId: "ChIJKxdeECnbYpYRFOj2ZK9FO74",
    nombre: "Tienda de Mascotas \"El Pez Dorado\"",
    lat: -33.499942,
    lng: -70.673014,
    descripcion: "Tiendas"
  },
  {
    id: 1054,
    placeId: "ChIJ94adnp_DYpYREdNfTyQnLeg",
    nombre: "Tienda de Mascotas \"Pets Piwi Spa\"",
    lat: -33.434355,
    lng: -70.652396,
    descripcion: "Tiendas"
  },
  {
    id: 1055,
    placeId: "ChIJJTW4Rfa7YpYRjHF-sVoRKFQ",
    nombre: "Tienda de Mascotas Aquarium Colina",
    lat: -33.200656,
    lng: -70.675735,
    descripcion: "Tiendas"
  },
  {
    id: 1056,
    placeId: "ChIJTwAa5BzBYpYROMa4bA5iSks",
    nombre: "Tienda de mascotas el cholito",
    lat: -33.401795,
    lng: -70.717366,
    descripcion: "Tiendas"
  },
  {
    id: 1057,
    placeId: "ChIJfaJSRADBYpYRl5efY4vtTpE",
    nombre: "Tienda de mascotas Jacinto",
    lat: -33.350998,
    lng: -70.743364,
    descripcion: "Tiendas"
  },
  {
    id: 1058,
    placeId: "ChIJaeAxghnbYpYR0ojls0ppgzk",
    nombre: "tienda de mascotas kony",
    lat: -33.560313,
    lng: -70.656481,
    descripcion: "Tiendas"
  },
  {
    id: 1059,
    placeId: "ChIJmSBpWgDHYpYRS3LurT9PJnE",
    nombre: "Tienda de mascotas mundo de los peludos",
    lat: -33.405034,
    lng: -70.710592,
    descripcion: "Tiendas"
  },
  {
    id: 1060,
    placeId: "ChIJK5R_2NLDYpYRmwkD1DUQPv8",
    nombre: "Tienda de mascotas Patica",
    lat: -33.426230,
    lng: -70.739738,
    descripcion: "Tiendas"
  },
  {
    id: 1061,
    placeId: "ChIJ466ObnXHYpYRExU9DRTcGkA",
    nombre: "Tienda de Mascotas Pelulu",
    lat: -33.378807,
    lng: -70.688421,
    descripcion: "Tiendas"
  },
  {
    id: 1062,
    placeId: "ChIJJ6FrJT-UYpYRG9PBCWf_ZeA",
    nombre: "Tienda De Mascotas Thor",
    lat: -33.285835,
    lng: -70.878222,
    descripcion: "Tiendas"
  },
  {
    id: 1063,
    placeId: "ChIJx-BY4TzDYpYRElt_VEIGAVE",
    nombre: "Tienda de mascotas y peluquería canina Razas Felices spa.",
    lat: -33.431688,
    lng: -70.737540,
    descripcion: "Tiendas"
  },
  {
    id: 1064,
    placeId: "ChIJj3ZVwV3bYpYRsAZyOVPqUdw",
    nombre: "Tienda de Mascotas Zarpitas E.I.R.L.",
    lat: -33.510998,
    lng: -70.716772,
    descripcion: "Tiendas"
  },
  {
    id: 1065,
    placeId: "ChIJxVH8bIu9YpYReCSPodY0Zr8",
    nombre: "Tienda de mascotas-Alimentos-Accesorios \"EXÓTICOS KIMURA”",
    lat: -33.231568,
    lng: -70.807365,
    descripcion: "Tiendas"
  },
  {
    id: 1066,
    placeId: "ChIJM9VMkMHhYpYRggXvrP_5NDc",
    nombre: "Tienda de peces y Ciclidos africanos Peñaflor",
    lat: -33.619181,
    lng: -70.875710,
    descripcion: "Tiendas"
  },
  {
    id: 1067,
    placeId: "ChIJ_5J688rnYpYRG8gbSytiF6Q",
    nombre: "Tienda Decomania Pet",
    lat: -33.569419,
    lng: -70.824459,
    descripcion: "Tiendas"
  },
  {
    id: 1068,
    placeId: "ChIJQ6IVAZTbYpYR9vrX_Dvwmn8",
    nombre: "Tienda Encanto Animal",
    lat: -33.506016,
    lng: -70.677003,
    descripcion: "Tiendas"
  },
  {
    id: 1069,
    placeId: "ChIJRWYB5ljnYpYREWtN3Qv9aiw",
    nombre: "Tienda Entre J&J",
    lat: -33.564508,
    lng: -70.822984,
    descripcion: "Tiendas"
  },
  {
    id: 1070,
    placeId: "ChIJCQqtz4y7YpYR3NY73lCyacY",
    nombre: "Tienda Jacobo pets",
    lat: -33.193090,
    lng: -70.679152,
    descripcion: "Tiendas"
  },
  {
    id: 1071,
    placeId: "ChIJY0ayq_3FYpYRj1Y-lRCxnOk",
    nombre: "Tienda Mundo Pet´s",
    lat: -33.401972,
    lng: -70.630324,
    descripcion: "Tiendas"
  },
  {
    id: 1072,
    placeId: "ChIJO0H826zHYpYRfPuqpa-Vpo4",
    nombre: "Tienda Mundo Pet´s | Brit care | Pro Plan",
    lat: -33.397366,
    lng: -70.642967,
    descripcion: "Tiendas"
  },
  {
    id: 1073,
    placeId: "ChIJO0H826zHYpYRfPuqpa-Vpo4",
    nombre: "Tienda Mundo Pet´s | Brit care | Pro Plan",
    lat: -33.397366,
    lng: -70.642967,
    descripcion: "Tiendas"
  },
  {
    id: 1074,
    placeId: "ChIJO0H826zHYpYRfPuqpa-Vpo4",
    nombre: "Tienda Mundo Pet´s | Brit care | Pro Plan",
    lat: -33.397366,
    lng: -70.642967,
    descripcion: "Tiendas"
  },
  {
    id: 1075,
    placeId: "ChIJ-acFRpXbYpYRX1saNuQy-GU",
    nombre: "Tienda Neko Mascotas",
    lat: -33.487729,
    lng: -70.623661,
    descripcion: "Tiendas"
  },
  {
    id: 1076,
    placeId: "ChIJxc62IgA9Y5YRqXR_V4WAr0Q",
    nombre: "Tienda para mascotas El labrador",
    lat: -33.869715,
    lng: -70.746929,
    descripcion: "Tiendas"
  },
  {
    id: 1077,
    placeId: "ChIJBzdN7-_HYpYRz1QRh1SR0GU",
    nombre: "Tienda Pet SM - Alimentos, accesorios , higiene y cuidado general",
    lat: -33.345218,
    lng: -70.669528,
    descripcion: "Tiendas"
  },
  {
    id: 1078,
    placeId: "ChIJlTFH4FDHYpYR0Ad9ZOU1TP4",
    nombre: "Tienda Picaflor Spa",
    lat: -33.408880,
    lng: -70.693247,
    descripcion: "Tiendas"
  },
  {
    id: 1079,
    placeId: "ChIJWUH-UtraYpYR5oTPeaYU7pI",
    nombre: "Tienda Tu Mundo Pet",
    lat: -33.503885,
    lng: -70.660891,
    descripcion: "Tiendas"
  },
  {
    id: 1080,
    placeId: "ChIJ32tE55nnYpYRKh4xfSZ5ma8",
    nombre: "Tiendita amaral",
    lat: -33.597546,
    lng: -70.847183,
    descripcion: "Tiendas"
  },
  {
    id: 1081,
    placeId: "ChIJ0319kXrZYpYRgdAryXXT6bA",
    nombre: "Tiendita Keny Mascotas",
    lat: -33.628602,
    lng: -70.705683,
    descripcion: "Tiendas"
  },
  {
    id: 1082,
    placeId: "ChIJYeSZA1_XYpYRWPWwJIXdpKI",
    nombre: "Tierna Mascota",
    lat: -33.588480,
    lng: -70.618905,
    descripcion: "Tiendas"
  },
  {
    id: 1083,
    placeId: "ChIJo1mkz4fGYpYRlxaNCAHp22o",
    nombre: "Tierra de Mascotas - Alimentos y Accesorios para Mascotas",
    lat: -33.396480,
    lng: -70.671666,
    descripcion: "Tiendas"
  },
  {
    id: 1084,
    placeId: "ChIJRz3zNNPbYpYRDBXArzajGGc",
    nombre: "Tobyland Petshop",
    lat: -33.497666,
    lng: -70.658803,
    descripcion: "Tiendas"
  },
  {
    id: 1085,
    placeId: "ChIJ7YaJNwNTYpYRz9HlbrqpOX8",
    nombre: "Todo Animal codigua",
    lat: -33.757848,
    lng: -71.323709,
    descripcion: "Tiendas"
  },
  {
    id: 1086,
    placeId: "ChIJOU9w1vjaYpYRVNbbQaRnYQo",
    nombre: "Todo Mascota",
    lat: -33.531473,
    lng: -70.662993,
    descripcion: "Tiendas"
  },
  {
    id: 1087,
    placeId: "ChIJ68MpvAfEYpYR0LP-5ha9MRA",
    nombre: "Todo Mascota",
    lat: -33.422157,
    lng: -70.714804,
    descripcion: "Tiendas"
  },
  {
    id: 1088,
    placeId: "ChIJ68MpvAfEYpYR0LP-5ha9MRA",
    nombre: "Todo Mascotas",
    lat: -33.422157,
    lng: -70.714804,
    descripcion: "Tiendas"
  },
  {
    id: 1089,
    placeId: "ChIJ6W_EMw7HYpYRLvRKXm2RNxA",
    nombre: "TODO MASCOTAS RENCA",
    lat: -33.405794,
    lng: -70.702825,
    descripcion: "Tiendas"
  },
  {
    id: 1090,
    placeId: "ChIJIWkQzKjXYpYRbB1VxTzvyFM",
    nombre: "Todo Pets",
    lat: -33.587652,
    lng: -70.558264,
    descripcion: "Tiendas"
  },
  {
    id: 1091,
    placeId: "ChIJexnpwqjBYpYRXj4LWcDsAFE",
    nombre: "TODOMASCOTAS Lampa",
    lat: -33.307777,
    lng: -70.847003,
    descripcion: "Tiendas"
  },
  {
    id: 1092,
    placeId: "ChIJ39uTOQ3bYpYRheIT49Mj7Tc",
    nombre: "Todoparasumascota Bodega Pedro Aguirre Cerda Aliimento y accesorios",
    lat: -33.492263,
    lng: -70.667593,
    descripcion: "Tiendas"
  },
  {
    id: 1093,
    placeId: "ChIJm7h-AkvPYpYRJ23LIuPaRVI",
    nombre: "TodoParaSuMascota La Reina | Alimentos, Accesorios y Salud Animal",
    lat: -33.445701,
    lng: -70.571106,
    descripcion: "Tiendas"
  },
  {
    id: 1094,
    placeId: "ChIJpZVI81zdYpYRZYdThcYM4Bw",
    nombre: "Todoparasumascota Maipu",
    lat: -33.531008,
    lng: -70.792420,
    descripcion: "Tiendas"
  },
  {
    id: 1095,
    placeId: "ChIJ5SAHa-LPYpYRUABRt70LA7M",
    nombre: "Todoparatuhuron",
    lat: -33.445701,
    lng: -70.571106,
    descripcion: "Tiendas"
  },
  {
    id: 1096,
    placeId: "ChIJYdH4fsPJYpYRW7UjskM2hYg",
    nombre: "Todopets Chile",
    lat: -33.376725,
    lng: -70.543912,
    descripcion: "Tiendas"
  },
  {
    id: 1097,
    placeId: "ChIJsUlIKR_ZYpYRUt8yz7Jt4F8",
    nombre: "Tomcam Mascotas",
    lat: -33.634277,
    lng: -70.626789,
    descripcion: "Tiendas"
  },
  {
    id: 1098,
    placeId: "ChIJ75aCcBPbYpYRK-LDc5jw2yM",
    nombre: "Tommy pet’s",
    lat: -33.517333,
    lng: -70.628199,
    descripcion: "Tiendas"
  },
  {
    id: 1099,
    placeId: "ChIJvUObc44hY5YRdiSU9kPbvcE",
    nombre: "Tommy Pets Buin",
    lat: -33.716790,
    lng: -70.744960,
    descripcion: "Tiendas"
  },
  {
    id: 1100,
    placeId: "ChIJqbt9fa_bYpYRi8vWbX6HAHw",
    nombre: "TOOFE PET SHOP",
    lat: -33.515854,
    lng: -70.624816,
    descripcion: "Tiendas"
  },
  {
    id: 1101,
    placeId: "ChIJu1bPRfnaYpYRDRLbvHP0qZw",
    nombre: "Torrealba Hnos.",
    lat: -33.529603,
    lng: -70.662455,
    descripcion: "Tiendas"
  },
  {
    id: 1102,
    placeId: "ChIJHQa5Xz_OYpYRX2tbTTyjg68",
    nombre: "Tree Pet Store",
    lat: -33.452056,
    lng: -70.554861,
    descripcion: "Tiendas"
  },
  {
    id: 1103,
    placeId: "ChIJy6lcmivbYpYRVPzdjbEIaho",
    nombre: "Trinipetshop",
    lat: -33.495615,
    lng: -70.632079,
    descripcion: "Tiendas"
  },
  {
    id: 1104,
    placeId: "ChIJF7nSKACVYpYRISDcZkwGq60",
    nombre: "Tu mascota",
    lat: -33.293195,
    lng: -70.874106,
    descripcion: "Tiendas"
  },
  {
    id: 1105,
    placeId: "ChIJJYaemES6YpYR22_Mr9Q491I",
    nombre: "Tu mascota & algo mas",
    lat: -33.403575,
    lng: -70.682555,
    descripcion: "Tiendas"
  },
  {
    id: 1106,
    placeId: "ChIJx6YJ1nfDYpYR0hXz8qpg2As",
    nombre: "Tu Mascota Fiel",
    lat: -33.488685,
    lng: -70.742913,
    descripcion: "Tiendas"
  },
  {
    id: 1107,
    placeId: "ChIJhRjQ5IfXYpYRQLmRUWdsOGw",
    nombre: "TurboPets PuenteAlto",
    lat: -33.596904,
    lng: -70.561233,
    descripcion: "Tiendas"
  },
  {
    id: 1108,
    placeId: "ChIJ21hGxFDPYpYR5o7TfFf5Xy0",
    nombre: "Tus Mascotas",
    lat: -33.460807,
    lng: -70.579914,
    descripcion: "Tiendas"
  },
  {
    id: 1109,
    placeId: "ChIJlYmJTPDPYpYRYyXX5MAT-Bs",
    nombre: "Tus Mascotas - Francisco Bilbao",
    lat: -33.438251,
    lng: -70.605886,
    descripcion: "Tiendas"
  },
  {
    id: 1110,
    placeId: "ChIJtxVpnJHRYpYRGITZVUtRI5k",
    nombre: "Tus Mascotas - La Florida - Tusmascotas.cl",
    lat: -33.546903,
    lng: -70.588380,
    descripcion: "Tiendas"
  },
  {
    id: 1111,
    placeId: "ChIJ_TjrEVXDYpYRUF5o7PnAoCs",
    nombre: "Tus Mascotas - Maipú - Tusmascotas.cl",
    lat: -33.505772,
    lng: -70.757633,
    descripcion: "Tiendas"
  },
  {
    id: 1112,
    placeId: "ChIJf6TjvmjPYpYRE9W5_F95rvs",
    nombre: "Tus Mascotas - Nueva Providencia",
    lat: -33.421524,
    lng: -70.608664,
    descripcion: "Tiendas"
  },
  {
    id: 1113,
    placeId: "ChIJ21hGxFDPYpYR5o7TfFf5Xy0",
    nombre: "Tus Mascotas - Ñuñoa",
    lat: -33.460807,
    lng: -70.579914,
    descripcion: "Tiendas"
  },
  {
    id: 1114,
    placeId: "ChIJEQ6HZQDFYpYROC9Sg8ZcY_g",
    nombre: "TusMascotas - Huerfanos",
    lat: -33.440526,
    lng: -70.658250,
    descripcion: "Tiendas"
  },
  {
    id: 1115,
    placeId: "ChIJWaRQf5DBYpYREzbQCRbFotg",
    nombre: "TUTOBOUTIQUE",
    lat: -33.364737,
    lng: -70.752938,
    descripcion: "Tiendas"
  },
  {
    id: 1116,
    placeId: "ChIJ156vVzzFYpYRhL1J7HwPOS8",
    nombre: "Tutto Pets Santiago",
    lat: -33.471111,
    lng: -70.654365,
    descripcion: "Tiendas"
  },
  {
    id: 1117,
    placeId: "ChIJnTRP9ym7YpYR2ndINfI6EZs",
    nombre: "TuVet TuPet Centro Veterinario",
    lat: -33.201464,
    lng: -70.675308,
    descripcion: "Tiendas"
  },
  {
    id: 1118,
    placeId: "ChIJH8Y6AlUjY5YRjhjUyqZ0dsg",
    nombre: "UN PELO DE LA COLA",
    lat: -33.803132,
    lng: -70.738812,
    descripcion: "Tiendas"
  },
  {
    id: 1119,
    placeId: "ChIJRwCGvKDFYpYRSp_OmBILcEE",
    nombre: "Unda Pets Happy",
    lat: -33.441857,
    lng: -70.715198,
    descripcion: "Tiendas"
  },
  {
    id: 1120,
    placeId: "ChIJ-ZHGCQPHYpYRAxib9LnxuQk",
    nombre: "UniversalPets",
    lat: -33.374565,
    lng: -70.639691,
    descripcion: "Tiendas"
  },
  {
    id: 1121,
    placeId: "ChIJp-jsHqLaYpYRzzGWITWc_vs",
    nombre: "UNIVERZOO MASCOTAS",
    lat: -33.505733,
    lng: -70.627708,
    descripcion: "Tiendas"
  },
  {
    id: 1122,
    placeId: "ChIJOXvwr7rDYpYRsMQ12mL_7i8",
    nombre: "VALERIA Y ESMERALDA",
    lat: -33.470239,
    lng: -70.747732,
    descripcion: "Tiendas"
  },
  {
    id: 1123,
    placeId: "ChIJhZ04DzXbYpYRY3w7krKM1ek",
    nombre: "Venta alimentos Mi mascota feliz",
    lat: -33.553981,
    lng: -70.651325,
    descripcion: "Tiendas"
  },
  {
    id: 1124,
    placeId: "ChIJoy3Mc0vlYpYRzyJultT-cXU",
    nombre: "Venta animales lucila",
    lat: -33.610277,
    lng: -70.910062,
    descripcion: "Tiendas"
  },
  {
    id: 1125,
    placeId: "ChIJCWNqp47DYpYRD0bm53ZXPO8",
    nombre: "Venta arenas y alimentos happy Pets arenas",
    lat: -33.447269,
    lng: -70.736061,
    descripcion: "Tiendas"
  },
  {
    id: 1126,
    placeId: "ChIJfVhwNh7RYpYRrFrgs_BHXbk",
    nombre: "Venta de alimento y accesorios para mascotas",
    lat: -33.536300,
    lng: -70.572755,
    descripcion: "Tiendas"
  },
  {
    id: 1127,
    placeId: "ChIJHXywbm3jYpYRoqkbbY7pNOc",
    nombre: "Venta de Alimentos Animales",
    lat: -33.663814,
    lng: -70.931628,
    descripcion: "Tiendas"
  },
  {
    id: 1128,
    placeId: "ChIJiRvziRjbYpYRA4Ewwk5D2ak",
    nombre: "Venta de Alimentos y Accesorios para Mascotas",
    lat: -33.566340,
    lng: -70.672470,
    descripcion: "Tiendas"
  },
  {
    id: 1129,
    placeId: "ChIJ8ekSlmjPYpYRydSNm4ETs58",
    nombre: "Venta De Mascotas Y Accesorios Para Mascotas,. Eva Betsabe Guzman Vasquez, Empre",
    lat: -33.421500,
    lng: -70.608721,
    descripcion: "Tiendas"
  },
  {
    id: 1130,
    placeId: "ChIJAe8b4DjRYpYRjuk4NK8foTg",
    nombre: "Venus Pet Shop",
    lat: -33.507871,
    lng: -70.591379,
    descripcion: "Tiendas"
  },
  {
    id: 1131,
    placeId: "ChIJL8qU_STjYpYRQrwE6sBZr74",
    nombre: "Vet Petshop Talagante",
    lat: -33.663205,
    lng: -70.915138,
    descripcion: "Tiendas"
  },
  {
    id: 1132,
    placeId: "ChIJOdj-pM3HYpYRVXLvgI6c2BM",
    nombre: "Veterinaria | Farmacia veterinaria | peluqueria y alimentos para mascotas",
    lat: -33.370527,
    lng: -70.635079,
    descripcion: "Tiendas"
  },
  {
    id: 1133,
    placeId: "ChIJv35teADjYpYR77YxHC23ysk",
    nombre: "Veterinaria Emporio Vet Lovers",
    lat: -33.684040,
    lng: -71.003140,
    descripcion: "Tiendas"
  },
  {
    id: 1134,
    placeId: "ChIJVaWYJgDDYpYRFn2JDHF5sl0",
    nombre: "Veterinaria Furry Pet's",
    lat: -33.421383,
    lng: -70.719308,
    descripcion: "Tiendas"
  },
  {
    id: 1135,
    placeId: "ChIJuUO7rD_HYpYRWBaa0EAITzQ",
    nombre: "Veterinaria La Palmilla",
    lat: -33.379791,
    lng: -70.672443,
    descripcion: "Tiendas"
  },
  {
    id: 1136,
    placeId: "ChIJWzvYdAA9Y5YRs8EeOmIIAEQ",
    nombre: "Veterinaria Las Loicas",
    lat: -33.869443,
    lng: -70.746604,
    descripcion: "Tiendas"
  },
  {
    id: 1137,
    placeId: "ChIJwQqUUwDFYpYRILqc28kiLOc",
    nombre: "Veterinaria Lourdes Pet",
    lat: -33.437913,
    lng: -70.691557,
    descripcion: "Tiendas"
  },
  {
    id: 1138,
    placeId: "ChIJORP-OWXFYpYReluyteLkIrY",
    nombre: "Veterinaria Onlypatitas",
    lat: -33.481327,
    lng: -70.664611,
    descripcion: "Tiendas"
  },
  {
    id: 1139,
    placeId: "ChIJh4m_AKrjYpYRGr86c04-CUU",
    nombre: "Veterinaria Pets Cotas",
    lat: -33.682728,
    lng: -70.986890,
    descripcion: "Tiendas"
  },
  {
    id: 1140,
    placeId: "ChIJ94gNt_LGYpYRNOYXvGmwpB8",
    nombre: "Veterinaria Premium Pet's Conchali",
    lat: -33.385400,
    lng: -70.680108,
    descripcion: "Tiendas"
  },
  {
    id: 1141,
    placeId: "ChIJZc6-XJbFYpYR_0NcThOXXi8",
    nombre: "Veterinaria y peluquería club mascota",
    lat: -33.489332,
    lng: -70.673859,
    descripcion: "Tiendas"
  },
  {
    id: 1142,
    placeId: "ChIJY2X_0ZnFYpYR_CCPcrJffck",
    nombre: "Veterinaria y Peluqueria PetWild",
    lat: -33.430181,
    lng: -70.653769,
    descripcion: "Tiendas"
  },
  {
    id: 1143,
    placeId: "ChIJL5pirYvbYpYRUTFxlXHYH2U",
    nombre: "Veterinaria y Peluquería San Valentin",
    lat: -33.542559,
    lng: -70.665353,
    descripcion: "Tiendas"
  },
  {
    id: 1144,
    placeId: "ChIJmTVjOjohY5YRSTftJnM7uzo",
    nombre: "Veterinaria y Petshop Jackesperrou",
    lat: -33.734558,
    lng: -70.742640,
    descripcion: "Tiendas"
  },
  {
    id: 1145,
    placeId: "ChIJLXyIwhq3aZYROqexVwAOhpo",
    nombre: "Veterinaria y Tienda para Mascotas de Maria Cecilia",
    lat: -36.840741,
    lng: -73.082549,
    descripcion: "Tiendas"
  },
  {
    id: 1146,
    placeId: "ChIJnwEiT2XFYpYRAUO76JXEHlU",
    nombre: "VETMONTT Petshop, alimentos, Accesorios y Peluquería de Perros & Gatos",
    lat: -33.438825,
    lng: -70.615871,
    descripcion: "Tiendas"
  },
  {
    id: 1147,
    placeId: "ChIJra0ewtq5YpYRp0qL7UZ0TB4",
    nombre: "VETPROCAN",
    lat: -33.245364,
    lng: -70.698151,
    descripcion: "Tiendas"
  },
  {
    id: 1148,
    placeId: "ChIJcQYjX0zXYpYRqsIDexq5ypE",
    nombre: "VICHYPET — AVENIDA MÉXICO 3408",
    lat: -33.575709,
    lng: -70.565011,
    descripcion: "Tiendas"
  },
  {
    id: 1149,
    placeId: "ChIJwf3ZgpG7YpYRDBDKoxdDvXE",
    nombre: "Vida & Pets Store",
    lat: -33.205605,
    lng: -70.677885,
    descripcion: "Tiendas"
  },
  {
    id: 1150,
    placeId: "ChIJwf3ZgpG7YpYRDBDKoxdDvXE",
    nombre: "VIDA PET TIENDA DE MASCOTAS",
    lat: -33.205605,
    lng: -70.677885,
    descripcion: "Tiendas"
  },
  {
    id: 1151,
    placeId: "ChIJI-Ib2zfZYpYRZYzh_pYRozU",
    nombre: "ViFlo Pets",
    lat: -33.581620,
    lng: -70.672381,
    descripcion: "Tiendas"
  },
  {
    id: 1152,
    placeId: "ChIJfdiYpKvLaZYR0daQZqW3Sls",
    nombre: "Villa Pet - Pet shop",
    lat: -36.839732,
    lng: -73.105364,
    descripcion: "Tiendas"
  },
  {
    id: 1153,
    placeId: "ChIJwyxup3HDYpYR-DjMqZ4abiQ",
    nombre: "Vinipets",
    lat: -33.444264,
    lng: -70.721517,
    descripcion: "Tiendas"
  },
  {
    id: 1154,
    placeId: "ChIJfcQDvivFYpYRVOgs1Y6YR1U",
    nombre: "Viole Pet",
    lat: -33.423142,
    lng: -70.693251,
    descripcion: "Tiendas"
  },
  {
    id: 1155,
    placeId: "ChIJFT10jCXRYpYRI7GUYPxCwuU",
    nombre: "Walker Pets",
    lat: -33.522870,
    lng: -70.584580,
    descripcion: "Tiendas"
  },
  {
    id: 1156,
    placeId: "ChIJl6fu1SzPYpYRZQCyTlTM7SU",
    nombre: "Windsor Pets",
    lat: -33.439330,
    lng: -70.561888,
    descripcion: "Tiendas"
  },
  {
    id: 1157,
    placeId: "ChIJXfEswD_RfJYRrWKh-Y5mDvQ",
    nombre: "WOLLY PETSHOP",
    lat: -33.732055,
    lng: -70.312924,
    descripcion: "Tiendas"
  },
  {
    id: 1158,
    placeId: "ChIJjV4s8iXPYpYRXKoYd897tYU",
    nombre: "Woof Pets Tienda de Mascotas",
    lat: -33.421717,
    lng: -70.609333,
    descripcion: "Tiendas"
  },
  {
    id: 1159,
    placeId: "ChIJaaPyI-fWYpYRvpHt6EL4cyc",
    nombre: "Worldpet Alimentos y Accesorios para Mascotas",
    lat: -33.585508,
    lng: -70.567033,
    descripcion: "Tiendas"
  },
  {
    id: 1160,
    placeId: "ChIJ5ewDuhTPYpYRbX5It0C5-GQ",
    nombre: "WowPets",
    lat: -33.407996,
    lng: -70.553854,
    descripcion: "Tiendas"
  },
  {
    id: 1161,
    placeId: "ChIJ_dxXGgvEYpYRLO8riw4-1ic",
    nombre: "Z & Z",
    lat: -33.432750,
    lng: -70.712561,
    descripcion: "Tiendas"
  },
  {
    id: 1162,
    placeId: "ChIJgZBkZADdYpYRTrH677xlePU",
    nombre: "Zenon Market Pet",
    lat: -33.522716,
    lng: -70.786942,
    descripcion: "Tiendas"
  },
  {
    id: 1163,
    placeId: "ChIJG86ybtPcYpYRBCKwW_mXKMM",
    nombre: "Zoo Market",
    lat: -33.507913,
    lng: -70.757557,
    descripcion: "Tiendas"
  },
  {
    id: 1164,
    placeId: "ChIJm0eqCyPRYpYRer0eoA2Eyh0",
    nombre: "Zoo Wild Mascotas Ltda",
    lat: -33.543538,
    lng: -70.564938,
    descripcion: "Tiendas"
  },
  {
    id: 1165,
    placeId: "ChIJ79bANCHRYpYRwoiX0Yh7_FQ",
    nombre: "Zoomarket",
    lat: -33.544277,
    lng: -70.570785,
    descripcion: "Tiendas"
  },
  {
    id: 1166,
    placeId: "ChIJvaX00fjJaZYRHAjhH3hfDmI",
    nombre: "Zoomascotas",
    lat: -36.842725,
    lng: -73.094171,
    descripcion: "Tiendas"
  },
  {
    id: 1167,
    placeId: "ChIJjxznTwDPYpYRRmvWfvuAnk4",
    nombre: "Zoona de Mascotas",
    lat: -33.476583,
    lng: -70.585296,
    descripcion: "Tiendas"
  },
  {
    id: 1168,
    placeId: "ChIJIWKVagDXYpYRXHWKlc2ROhQ",
    nombre: "ZOOTOPET",
    lat: -33.578228,
    lng: -70.617056,
    descripcion: "Tiendas"
  },
  {
    id: 1169,
    placeId: "ChIJQ_P4LADfYpYR-68DU1jcFdM",
    nombre: "Zunipet",
    lat: -33.628314,
    lng: -70.772264,
    descripcion: "Tiendas"
  },
  {
    id: 1170,
    placeId: "ChIJbwhzIwbFYpYRHuIuNw0tFdw",
    nombre: "Zuny Pets",
    lat: -33.483891,
    lng: -70.663685,
    descripcion: "Tiendas"
  },
  {
    id: 1171,
    placeId: "ChIJZZ1bn0LPYpYRyyJ71l5HU0c",
    nombre: "Canil Parque Ramón Cruz",
    lat: -33.455740,
    lng: -70.580328,
    descripcion: "Parques"
  },
  {
    id: 1172,
    placeId: "ChIJA9UBTePFYpYR_K9LUiSdSuc",
    nombre: "Centro recreación canina Plaza Toesca",
    lat: -33.453316,
    lng: -70.659216,
    descripcion: "Parques"
  },
  {
    id: 1173,
    placeId: "ChIJ22Ir2JDFYpYRIOlj6-B_nTE",
    nombre: "Circuito Canino",
    lat: -33.481938,
    lng: -70.653464,
    descripcion: "Parques"
  },
  {
    id: 1174,
    placeId: "ChIJNUsKwiXPYpYR7pdrQ2v-ntE",
    nombre: "Parque Araucano",
    lat: -33.402204,
    lng: -70.572489,
    descripcion: "Parques"
  },
  {
    id: 1175,
    placeId: "ChIJ_SS0SBHPYpYRmygWxs3XOaQ",
    nombre: "Parque Canino",
    lat: -33.420629,
    lng: -70.590799,
    descripcion: "Parques"
  },
  {
    id: 1176,
    placeId: "ChIJpS4D5eDOYpYRVKgV9RIBZSo",
    nombre: "Parque Canino Del Inca",
    lat: -33.413478,
    lng: -70.570229,
    descripcion: "Parques"
  },
  {
    id: 1177,
    placeId: "ChIJb4A4IRrPYpYRo7zyLZBD5gA",
    nombre: "Parque Canino II",
    lat: -33.419207,
    lng: -70.584186,
    descripcion: "Parques"
  },
  {
    id: 1178,
    placeId: "ChIJeWE1HTfEYpYR10fCgdsohfM",
    nombre: "Parque de la Familia",
    lat: -33.425326,
    lng: -70.679116,
    descripcion: "Parques"
  },
  {
    id: 1179,
    placeId: "ChIJzQz1pLXFYpYRzXDv9a6Plec",
    nombre: "Parque de los Reyes",
    lat: -33.429199,
    lng: -70.666522,
    descripcion: "Parques"
  },
  {
    id: 1180,
    placeId: "ChIJuWlFktfWYpYRcNeuwPYEYyA",
    nombre: "Parque Inés de Suárez",
    lat: -33.572745,
    lng: -70.572335,
    descripcion: "Parques"
  },
  {
    id: 1181,
    placeId: "ChIJR6JjBJbOYpYRc3VwxLrTslE",
    nombre: "Parque Los Dominicos",
    lat: -33.407823,
    lng: -70.543630,
    descripcion: "Parques"
  },
  {
    id: 1182,
    placeId: "ChIJ165eV5DFYpYRClPKuH_c8sw",
    nombre: "Parque Metropolitano de Santiago",
    lat: -33.424425,
    lng: -70.633158,
    descripcion: "Parques"
  },
  {
    id: 1183,
    placeId: "ChIJ8zsF6L_OYpYRM3z-qhwE_JA",
    nombre: "Parque Montegrande",
    lat: -33.406892,
    lng: -70.548822,
    descripcion: "Parques"
  },
  {
    id: 1184,
    placeId: "ChIJe59sA2DOYpYRhpD6mzVeDDE",
    nombre: "Parque Padre Hurtado",
    lat: -33.431775,
    lng: -70.545383,
    descripcion: "Parques"
  },
  {
    id: 1185,
    placeId: "ChIJ7Q2QsQjPYpYR4jfbTp20Z-w",
    nombre: "Parque Presidente Errázuriz",
    lat: -33.430880,
    lng: -70.586904,
    descripcion: "Parques"
  },
  {
    id: 1186,
    placeId: "ChIJn2Yp4EjPYpYRYDbEP5GWGHc",
    nombre: "Parque Recreativo Canino",
    lat: -33.403005,
    lng: -70.602185,
    descripcion: "Parques"
  },
  {
    id: 1187,
    placeId: "ChIJNed_CJDOYpYRnRPULmGkfs0",
    nombre: "Parque Santa Rosa de Apoquindo",
    lat: -33.416718,
    lng: -70.539716,
    descripcion: "Parques"
  },
  {
    id: 1188,
    placeId: "ChIJC537V0nOYpYR8QkJ5Xwn12A",
    nombre: "Samantha Pelecher Park",
    lat: -33.449344,
    lng: -70.568113,
    descripcion: "Parques"
  },
  {
    id: 1189,
    placeId: "ChIJB4M2BQDPYpYRmVwNlVTva6s",
    nombre: "Zona Canina Parque Inés de Suárez",
    lat: -33.441671,
    lng: -70.611660,
    descripcion: "Parques"
  },
  {
    id: 1190,
    placeId: "ChIJ8Vc3L_nFYpYRAl3x8GXph3s",
    nombre: "Zona Recreativa Canina",
    lat: -33.456331,
    lng: -70.657737,
    descripcion: "Parques"
  },
  {
    id: 1191,
    placeId: "ChIJS0MdGdnFYpYR_mkrHugc-mk",
    nombre: "Zona recreativa canina Santa Isabel/Raulí",
    lat: -33.448696,
    lng: -70.636500,
    descripcion: "Parques"
  },
  {
    id: 1192,
    placeId: "ChIJP7fPy9opY5YRhW3jT4tPWxc",
    nombre: "Adiestrador Chile",
    lat: -33.524207,
    lng: -70.526665,
    descripcion: "Adiestradores"
  },
  {
    id: 1193,
    placeId: "ChIJ2xt01oDbYpYRoNQrU_GRva8",
    nombre: "Adiestramiento Canino DoggoCoach",
    lat: -33.493815,
    lng: -70.652955,
    descripcion: "Adiestradores"
  },
  {
    id: 1194,
    placeId: "ChIJzYpIWoXPYpYRFhjKa0NLUA8",
    nombre: "Adiestramiento Centro Canino",
    lat: -33.450780,
    lng: -70.581131,
    descripcion: "Adiestradores"
  },
  {
    id: 1195,
    placeId: "ChIJG_XBtIiP4koRVjrnnSPzKm4",
    nombre: "Adiestramiento Chile",
    lat: -33.472788,
    lng: -70.629831,
    descripcion: "Adiestradores"
  },
  {
    id: 1196,
    placeId: "ChIJfzP-TRvPYpYRhBDAsA4t1i4",
    nombre: "Adiestramiento.cl",
    lat: -33.400539,
    lng: -70.570182,
    descripcion: "Adiestradores"
  },
  {
    id: 1197,
    placeId: "ChIJsVM1DbXeEocRmM-wjJLmc1k",
    nombre: "Buen Ciudadano Canino",
    lat: -33.459649,
    lng: -70.621788,
    descripcion: "Adiestradores"
  },
  {
    id: 1198,
    placeId: "ChIJb-xsLjHRYpYRUjfc7M9wDDQ",
    nombre: "Canis Club Chile - Adiestramiento Canino K-9",
    lat: -33.507475,
    lng: -70.586103,
    descripcion: "Adiestradores"
  },
  {
    id: 1199,
    placeId: "ChIJifQi5QL1YpYRC4WkFbjiQmo",
    nombre: "Centro de Entrenamiento GAG K9",
    lat: -33.430242,
    lng: -71.145764,
    descripcion: "Adiestradores"
  },
  {
    id: 1200,
    placeId: "ChIJOYSqSufPYpYRIA7rmD66jNQ",
    nombre: "Christian Dogs",
    lat: -33.431345,
    lng: -70.568488,
    descripcion: "Adiestradores"
  },
  {
    id: 1201,
    placeId: "ChIJ47QDd9ItU0URA3GPCrt9tf8",
    nombre: "CityDogs - Entrenamiento y Conducta Animal",
    lat: -37.060832,
    lng: -88.180400,
    descripcion: "Adiestradores"
  },
  {
    id: 1202,
    placeId: "ChIJ-3cqE4_PYpYRzaqdwuET7pM",
    nombre: "Ciudad Perruna",
    lat: -33.428883,
    lng: -70.618955,
    descripcion: "Adiestradores"
  },
  {
    id: 1203,
    placeId: "ChIJ_2LoOtTFYpYRFjqoSOHX4wA",
    nombre: "Coach Canino - Entrenador de perros",
    lat: 13.507400,
    lng: -94.181900,
    descripcion: "Adiestradores"
  },
  {
    id: 1204,
    placeId: "ChIJI0kXQE4JKS8RzETlkfUhASQ",
    nombre: "ConcientizanDog",
    lat: -33.606483,
    lng: -70.742539,
    descripcion: "Adiestradores"
  },
  {
    id: 1205,
    placeId: "ChIJK-YzVCbPYpYRYChL7uELp84",
    nombre: "Dog teacher",
    lat: -33.400427,
    lng: -70.567846,
    descripcion: "Adiestradores"
  },
  {
    id: 1206,
    placeId: "ChIJeeFfYD8OFwcRowB-XpQzkU8",
    nombre: "Dog Tricolor Training sPa",
    lat: -33.606483,
    lng: -70.742539,
    descripcion: "Adiestradores"
  },
  {
    id: 1207,
    placeId: "ChIJO6JjiTHRYpYR2AmXtUTPHdI",
    nombre: "Dogleader",
    lat: -33.525420,
    lng: -70.595575,
    descripcion: "Adiestradores"
  },
  {
    id: 1208,
    placeId: "ChIJTdCEiZQxACARUSmrtCIEn_8",
    nombre: "Edupatas",
    lat: -33.472788,
    lng: -70.629831,
    descripcion: "Adiestradores"
  },
  {
    id: 1209,
    placeId: "ChIJ156NzQpmECUR6WyowMnxgDU",
    nombre: "El Profesor Canino",
    lat: -37.060832,
    lng: -88.180400,
    descripcion: "Adiestradores"
  },
  {
    id: 1210,
    placeId: "ChIJXdX45wRNcgcRtYE33JV7Gzc",
    nombre: "Escuela Canina La Jauria",
    lat: -33.472788,
    lng: -70.629831,
    descripcion: "Adiestradores"
  },
  {
    id: 1211,
    placeId: "ChIJi1-ff5nRYpYREaPZpvBlTUY",
    nombre: "Kimeltun",
    lat: -33.472788,
    lng: -70.629831,
    descripcion: "Adiestradores"
  },
  {
    id: 1212,
    placeId: "ChIJv1kJaKjPYpYRqe5Vi4qzKuE",
    nombre: "Muybienpet",
    lat: -33.437261,
    lng: -70.584500,
    descripcion: "Adiestradores"
  },
  {
    id: 1213,
    placeId: "ChIJR-rM-JWxNosRR12t_bJkLKk",
    nombre: "PetSense",
    lat: -33.472788,
    lng: -70.629398,
    descripcion: "Adiestradores"
  },
  {
    id: 1214,
    placeId: "ChIJCanaiubpXSARCnfG_4IzpBw",
    nombre: "Rom Dog Trainer",
    lat: -33.606483,
    lng: -70.742539,
    descripcion: "Adiestradores"
  },
  {
    id: 1215,
    placeId: "ChIJk5Wx8S4cPywRN-JDU9X1Leg",
    nombre: "Solotuperro",
    lat: -33.398911,
    lng: -70.531082,
    descripcion: "Adiestradores"
  },
  {
    id: 1216,
    placeId: "ChIJZchwKyzRYpYRYdQdO4WBbG4",
    nombre: "Acupuntura Animal",
    lat: -33.486379,
    lng: -70.596707,
    descripcion: "Veterinarias"
  },
  {
    id: 1217,
    placeId: "ChIJFxFliZDPYpYR2f0iJiF4qQ4",
    nombre: "Agrupet Clinica Veterinaria",
    lat: -33.450308,
    lng: -70.606279,
    descripcion: "Veterinarias"
  },
  {
    id: 1218,
    placeId: "ChIJ2Vn8awVV-SUR0_iNXA4U_yk",
    nombre: "Alpha Medical Vets",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1219,
    placeId: "ChIJ7cXumFDOYpYRxJdtZpnE2DA",
    nombre: "Amani Veterinaria",
    lat: -33.438484,
    lng: -70.562687,
    descripcion: "Veterinarias"
  },
  {
    id: 1220,
    placeId: "ChIJvbE018rOYpYRtjxqRA63Ti0",
    nombre: "American Vet Clinic",
    lat: -33.387422,
    lng: -70.553109,
    descripcion: "Veterinarias"
  },
  {
    id: 1221,
    placeId: "ChIJcfJTyMDaYpYRlca9RG3dp4g",
    nombre: "Animal Care Center",
    lat: -33.505038,
    lng: -70.647176,
    descripcion: "Veterinarias"
  },
  {
    id: 1222,
    placeId: "ChIJ_7ATjkzOYpYRa2dPFZhdigY",
    nombre: "Animal Clinic",
    lat: -33.448347,
    lng: -70.571807,
    descripcion: "Veterinarias"
  },
  {
    id: 1223,
    placeId: "ChIJWRteGuTPYpYRQs5sWLdcJNM",
    nombre: "Animal Plaza",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1224,
    placeId: "ChIJDcoFTybJYpYRai-p0tCtw2Q",
    nombre: "Animal World",
    lat: -33.377061,
    lng: -70.570559,
    descripcion: "Veterinarias"
  },
  {
    id: 1225,
    placeId: "ChIJ_fgiqWrEYpYRXedsk6fWl-I",
    nombre: "Animals Vet",
    lat: -33.431500,
    lng: -70.693000,
    descripcion: "Veterinarias"
  },
  {
    id: 1226,
    placeId: "ChIJXSlh0c_PYpYRN55IOWAaJ9E",
    nombre: "AnimalVet Peñalolen",
    lat: -33.468247,
    lng: -70.571740,
    descripcion: "Veterinarias"
  },
  {
    id: 1227,
    placeId: "ChIJ2dkWczbOYpYRQSkOmaPdCSI",
    nombre: "Anticevic Caceres Sonia Andrea Y Otros",
    lat: -33.455576,
    lng: -70.567536,
    descripcion: "Veterinarias"
  },
  {
    id: 1228,
    placeId: "ChIJSfnHNoTOYpYR56evnU-3IN4",
    nombre: "Asesorias Veterinarias Tatiana Jorquera Aguero Ei",
    lat: -33.420412,
    lng: -70.534822,
    descripcion: "Veterinarias"
  },
  {
    id: 1229,
    placeId: "ChIJ984xewDPYpYR2sAeAt0xBwQ",
    nombre: "Atencion Veterinaria ESPA Diagnostico",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1230,
    placeId: "ChIJz-GVJObPYpYR1GORGPtnKDI",
    nombre: "B-Pets",
    lat: -33.439546,
    lng: -70.608396,
    descripcion: "Veterinarias"
  },
  {
    id: 1231,
    placeId: "ChIJ4z7Ud8zaYpYRShoJVEW84Ps",
    nombre: "BerlinHappy.cl",
    lat: -33.492823,
    lng: -70.651346,
    descripcion: "Veterinarias"
  },
  {
    id: 1232,
    placeId: "ChIJw1ByMujbYpYRmuc9vBeEAU4",
    nombre: "BerlinHappy.cl - 4965",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1233,
    placeId: "ChIJTQU_pGbbYpYRXkapi7zQzIY",
    nombre: "BerlinHappy.cl - 5908",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1234,
    placeId: "ChIJr-ZJDwDJYpYRQODNnDEViZQ",
    nombre: "BeVet Clinica Veterinaria",
    lat: -33.383555,
    lng: -70.550007,
    descripcion: "Veterinarias"
  },
  {
    id: 1235,
    placeId: "ChIJLzuklP7QYpYRjx4gwevz6GA",
    nombre: "Bluevet Clinica Veterinaria",
    lat: -33.524520,
    lng: -70.578287,
    descripcion: "Veterinarias"
  },
  {
    id: 1236,
    placeId: "ChIJVcIYW57dYpYRcg9A9_TIHdM",
    nombre: "Breeder Vet Clinica Veterinaria",
    lat: -33.557058,
    lng: -70.792122,
    descripcion: "Veterinarias"
  },
  {
    id: 1237,
    placeId: "ChIJB1NS5pPEYpYRZaZQXvaUpd8",
    nombre: "Cachorritos Petshop",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1238,
    placeId: "ChIJZ3OVemzPYpYRh8mRfXzcdUY",
    nombre: "Cardioimagen.cl",
    lat: -33.426938,
    lng: -70.553971,
    descripcion: "Veterinarias"
  },
  {
    id: 1239,
    placeId: "ChIJ59N8rmPPYpYRzWsaa07gWug",
    nombre: "Cardiovet",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1240,
    placeId: "ChIJY9nSyvjaYpYRUVXzWt17U8c",
    nombre: "Cardiovet",
    lat: -33.532818,
    lng: -70.663392,
    descripcion: "Veterinarias"
  },
  {
    id: 1241,
    placeId: "ChIJ0XOzaADFYpYRYS01CMSJX0g",
    nombre: "CareVets - Pet Shop",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1242,
    placeId: "ChIJATqQGInPYpYRbvHLSI6BIIs",
    nombre: "CDT Veterinario",
    lat: -33.456705,
    lng: -70.612176,
    descripcion: "Veterinarias"
  },
  {
    id: 1243,
    placeId: "ChIJZ_Hvv23bYpYRNePOHPSIbD4",
    nombre: "CDVET",
    lat: -33.571299,
    lng: -70.688024,
    descripcion: "Veterinarias"
  },
  {
    id: 1244,
    placeId: "ChIJQV6lUEfOYpYRAi-Yim7-2VY",
    nombre: "CEKIVET",
    lat: -33.430799,
    lng: -70.566987,
    descripcion: "Veterinarias"
  },
  {
    id: 1245,
    placeId: "ChIJjwOG1r_PYpYRbm6FVjdbNWo",
    nombre: "Centro de Especialidades Medico Veterinario Verona",
    lat: -33.456516,
    lng: -70.597619,
    descripcion: "Veterinarias"
  },
  {
    id: 1246,
    placeId: "ChIJyX-1KD3aYpYRsBzDFjL-2JQ",
    nombre: "Centro de Salud Veterinaria El Roble de la Universidad de Chile",
    lat: -33.564045,
    lng: -70.647187,
    descripcion: "Veterinarias"
  },
  {
    id: 1247,
    placeId: "ChIJ1zdqQwDJYpYRtoH6Cot5pyI",
    nombre: "Centro Especialidades Veterinarias ArkaVet",
    lat: -33.392121,
    lng: -70.594077,
    descripcion: "Veterinarias"
  },
  {
    id: 1248,
    placeId: "ChIJfx0RwwvbYpYR-OwUWfvJql8",
    nombre: "Centro Medico Veterinario Sur",
    lat: -33.506906,
    lng: -70.625794,
    descripcion: "Veterinarias"
  },
  {
    id: 1249,
    placeId: "ChIJbWpcNOLPYpYR53xtTApvdwk",
    nombre: "Centro Veterinario Bayona",
    lat: -33.429474,
    lng: -70.554471,
    descripcion: "Veterinarias"
  },
  {
    id: 1250,
    placeId: "ChIJS-zDZzPOYpYRMDbvccH-Jxk",
    nombre: "Centro Veterinario CEBA",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1251,
    placeId: "ChIJfx61oO3OYpYRcqk07Dfdu9E",
    nombre: "Centro Veterinario CEDILO",
    lat: -33.419548,
    lng: -70.551662,
    descripcion: "Veterinarias"
  },
  {
    id: 1252,
    placeId: "ChIJq0vY8U_PYpYRSUUM_Y1oFRs",
    nombre: "Centro Veterinario CIRUVET",
    lat: -33.456499,
    lng: -70.577365,
    descripcion: "Veterinarias"
  },
  {
    id: 1253,
    placeId: "ChIJb2rrNATQYpYR9yxxhZy59IY",
    nombre: "Centro Veterinario Cordovet",
    lat: -33.491002,
    lng: -70.614573,
    descripcion: "Veterinarias"
  },
  {
    id: 1254,
    placeId: "ChIJE3ebGADBYpYRj0oDB_zo_os",
    nombre: "Centro Veterinario de Atencion Primaria y Rescate de Fauna Silvestre",
    lat: -33.356556,
    lng: -70.738107,
    descripcion: "Veterinarias"
  },
  {
    id: 1255,
    placeId: "ChIJ979cIW3GYpYRCmXZDBNyxbQ",
    nombre: "Centro Veterinario de Mascotas",
    lat: -33.389031,
    lng: -70.646794,
    descripcion: "Veterinarias"
  },
  {
    id: 1256,
    placeId: "ChIJCzeSo4LPYpYRrX635rOhgOQ",
    nombre: "Centro Veterinario Dr. Cafati",
    lat: -33.431220,
    lng: -70.567386,
    descripcion: "Veterinarias"
  },
  {
    id: 1257,
    placeId: "ChIJU1EXgOnDYpYRzfg6Zyw48UM",
    nombre: "Centro Veterinario EE.UU.",
    lat: -33.432962,
    lng: -70.738080,
    descripcion: "Veterinarias"
  },
  {
    id: 1258,
    placeId: "ChIJL-U1hCzPYpYRCiZUVVIunS4",
    nombre: "Centro Veterinario Fundacion Julieta",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1259,
    placeId: "ChIJl3dPCbPbYpYROXadu1s9aA4",
    nombre: "Centro Veterinario Gran Avenida 9915",
    lat: -33.550387,
    lng: -70.672248,
    descripcion: "Veterinarias"
  },
  {
    id: 1260,
    placeId: "ChIJRR1UD6PdYpYReeh3HpFWKK8",
    nombre: "Centro Veterinario Hundeland",
    lat: -33.562203,
    lng: -70.784644,
    descripcion: "Veterinarias"
  },
  {
    id: 1261,
    placeId: "ChIJ3cJtSHfFYpYR_u4Wks1OhMc",
    nombre: "Centro Veterinario Integral Territorio Pets",
    lat: -33.460738,
    lng: -70.624723,
    descripcion: "Veterinarias"
  },
  {
    id: 1262,
    placeId: "ChIJeYr9ekzFYpYR0X_wb2zG2zM",
    nombre: "Centro Veterinario Italia",
    lat: -33.440279,
    lng: -70.625973,
    descripcion: "Veterinarias"
  },
  {
    id: 1263,
    placeId: "ChIJPVDaBnvpYpYRAMuWwH6knis",
    nombre: "Centro Veterinario Los Valles",
    lat: -33.452159,
    lng: -70.849197,
    descripcion: "Veterinarias"
  },
  {
    id: 1264,
    placeId: "ChIJ3anegHfFYpYR6JIrJ69AGl0",
    nombre: "Centro Veterinario Mascotas",
    lat: -33.445491,
    lng: -70.633763,
    descripcion: "Veterinarias"
  },
  {
    id: 1265,
    placeId: "ChIJ4QXnvBXHYpYRzXjkmQGvnIM",
    nombre: "Centro Veterinario Mascotas Renca",
    lat: -33.403424,
    lng: -70.707670,
    descripcion: "Veterinarias"
  },
  {
    id: 1266,
    placeId: "ChIJ0RPUWwDRYpYRzxCV2OaXf3M",
    nombre: "Centro Veterinario Municipal",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1267,
    placeId: "ChIJc28t0fHZYpYRQkyMneAtpVA",
    nombre: "Centro Veterinario Municipal La pintana",
    lat: -33.587591,
    lng: -70.628632,
    descripcion: "Veterinarias"
  },
  {
    id: 1268,
    placeId: "ChIJRTneVtPcYpYRw5BwKswhwio",
    nombre: "Centro Veterinario Municipal Maipú",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1269,
    placeId: "ChIJsfp_b2PFYpYRuh-0MfapWy0",
    nombre: "Centro Veterinario Ñuñoa",
    lat: -33.455005,
    lng: -70.623705,
    descripcion: "Veterinarias"
  },
  {
    id: 1270,
    placeId: "ChIJ65OExa_RYpYRKvoo7aF7nV8",
    nombre: "Centro Veterinario Proanimal",
    lat: -33.490745,
    lng: -70.604351,
    descripcion: "Veterinarias"
  },
  {
    id: 1271,
    placeId: "ChIJs0XxQgDDYpYRBSL0fhcruVo",
    nombre: "Centro Veterinario Pudahuel",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1272,
    placeId: "ChIJR_7th-XFYpYRJmZp-kiLqQg",
    nombre: "Centro Veterinario Recoleta",
    lat: -33.429891,
    lng: -70.638624,
    descripcion: "Veterinarias"
  },
  {
    id: 1273,
    placeId: "ChIJwTM2Al_FYpYR4ClC-ei1sA0",
    nombre: "Centro Veterinario Republica",
    lat: -33.444585,
    lng: -70.668310,
    descripcion: "Veterinarias"
  },
  {
    id: 1274,
    placeId: "ChIJTVSHPkzJYpYRmWpmOeAFNZM",
    nombre: "Centro Veterinario Tabancura",
    lat: -33.380755,
    lng: -70.542869,
    descripcion: "Veterinarias"
  },
  {
    id: 1275,
    placeId: "ChIJr_4Kaz3DYpYRZMfwsCRJNQw",
    nombre: "Centro Veterinario Vespucio",
    lat: -33.457250,
    lng: -70.765332,
    descripcion: "Veterinarias"
  },
  {
    id: 1276,
    placeId: "ChIJbx1znnfFYpYRk2pSXtc3nDg",
    nombre: "Centro Veterinario VetSalud",
    lat: -33.445917,
    lng: -70.634726,
    descripcion: "Veterinarias"
  },
  {
    id: 1277,
    placeId: "ChIJk7O2ewDFYpYRzbv3PW4JJXA",
    nombre: "Centro Veterinario Vivalvets",
    lat: -33.421925,
    lng: -70.647418,
    descripcion: "Veterinarias"
  },
  {
    id: 1278,
    placeId: "ChIJdyfAUELFYpYRTABCbDMksiE",
    nombre: "CESVET",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1279,
    placeId: "ChIJ-bQgQNLFYpYRJhhvKw_97oc",
    nombre: "CIAM - Hospital Veterinario Independencia",
    lat: -33.414460,
    lng: -70.664975,
    descripcion: "Veterinarias"
  },
  {
    id: 1280,
    placeId: "ChIJOa_rJQDFYpYR1pbiBg7hhy4",
    nombre: "CIMEVET Veterinaria",
    lat: -33.454497,
    lng: -70.626908,
    descripcion: "Veterinarias"
  },
  {
    id: 1281,
    placeId: "ChIJy9b3YSTXYpYRDZg30cLbzZM",
    nombre: "Civavet",
    lat: -33.579197,
    lng: -70.583046,
    descripcion: "Veterinarias"
  },
  {
    id: 1282,
    placeId: "ChIJseX3xKPZYpYRh4DxmvAC2oc",
    nombre: "Clinica de Animales Pequeños de la Universidad de Chile",
    lat: -33.573562,
    lng: -70.629933,
    descripcion: "Veterinarias"
  },
  {
    id: 1283,
    placeId: "ChIJARU3NwDbYpYRv3KCmFio__Y",
    nombre: "Clinica Nueva Salesianos",
    lat: -33.495486,
    lng: -70.639370,
    descripcion: "Veterinarias"
  },
  {
    id: 1284,
    placeId: "ChIJW4cVVYTPYpYR2ibsuGCGfyE",
    nombre: "Clinica Triviño Centro Integral Felino",
    lat: -33.447781,
    lng: -70.612863,
    descripcion: "Veterinarias"
  },
  {
    id: 1285,
    placeId: "ChIJO5qDPMPZYpYRmq0idG09s0E",
    nombre: "Clinica Verterinaria Porto Alegre",
    lat: -33.584815,
    lng: -70.638714,
    descripcion: "Veterinarias"
  },
  {
    id: 1286,
    placeId: "ChIJW2p7_4bEYpYRbHv_Y0_-uLw",
    nombre: "Clinica Veterinaria Alameda Poniente",
    lat: -33.458161,
    lng: -70.707927,
    descripcion: "Veterinarias"
  },
  {
    id: 1287,
    placeId: "ChIJm0jJ8kfOYpYRKOy8ktPPuXc",
    nombre: "Clinica Veterinaria Alemana",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1288,
    placeId: "ChIJ_Z1BBr3pYpYRbw4H5uUofbg",
    nombre: "Clinica Veterinaria All Medical Vet",
    lat: -33.457560,
    lng: -70.845460,
    descripcion: "Veterinarias"
  },
  {
    id: 1289,
    placeId: "ChIJ85Ub58HPYpYRPkX_9hQVPwk",
    nombre: "Clinica Veterinaria Alto Macul",
    lat: -33.494459,
    lng: -70.599319,
    descripcion: "Veterinarias"
  },
  {
    id: 1290,
    placeId: "ChIJ567S2bbPYpYR7fUHb6LP5Cs",
    nombre: "Clinica Veterinaria Amivet",
    lat: -33.459001,
    lng: -70.594873,
    descripcion: "Veterinarias"
  },
  {
    id: 1291,
    placeId: "ChIJ_-w_FPPQYpYR7Vaba0VrFYM",
    nombre: "Clinica Veterinaria Aragon Peluqueria Canina y Felina",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1292,
    placeId: "ChIJlZQSyGvQYpYRUkVavHdlBqA",
    nombre: "Clinica Veterinaria Arauco",
    lat: -33.506580,
    lng: -70.601400,
    descripcion: "Veterinarias"
  },
  {
    id: 1293,
    placeId: "ChIJr3ql4FXaYpYRES7YcenymDo",
    nombre: "Clinica Veterinaria Area Sur",
    lat: -33.509269,
    lng: -70.657310,
    descripcion: "Veterinarias"
  },
  {
    id: 1294,
    placeId: "ChIJy6j3aVjFYpYRSdcanyG8aw8",
    nombre: "Clinica Veterinaria Ariaka Vet Care SPA.",
    lat: -33.455744,
    lng: -70.706273,
    descripcion: "Veterinarias"
  },
  {
    id: 1295,
    placeId: "ChIJv4f6wzvbYpYRGdQrr4wHyfw",
    nombre: "Clinica Veterinaria Barbie",
    lat: -33.536639,
    lng: -70.634309,
    descripcion: "Veterinarias"
  },
  {
    id: 1296,
    placeId: "ChIJD3ibspPGYpYRt7jVz2jftu8",
    nombre: "Clinica Veterinaria Baron de Juras Reales",
    lat: -33.389947,
    lng: -70.684270,
    descripcion: "Veterinarias"
  },
  {
    id: 1297,
    placeId: "ChIJSVq-OZfFYpYRcY7SkQvqAgs",
    nombre: "Clinica Veterinaria Bellavista",
    lat: -33.431863,
    lng: -70.640030,
    descripcion: "Veterinarias"
  },
  {
    id: 1298,
    placeId: "ChIJ9z8ksB7PYpYRZMuyex_bDnA",
    nombre: "Clinica Veterinaria Betterpet Las Condes",
    lat: -33.406219,
    lng: -70.567803,
    descripcion: "Veterinarias"
  },
  {
    id: 1299,
    placeId: "ChIJybcVBl_PYpYR3OiMYhWMMHY",
    nombre: "Clinica Veterinaria Betterpet Ñuñoa",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1300,
    placeId: "ChIJcb1IieDPYpYRuGy5JqYAobo",
    nombre: "Clinica Veterinaria Bon Amie",
    lat: -33.477658,
    lng: -70.598767,
    descripcion: "Veterinarias"
  },
  {
    id: 1301,
    placeId: "ChIJEfw-7KnbYpYRBXsU8YElRT0",
    nombre: "Clinica Veterinaria Buenos Cachorros",
    lat: -33.534155,
    lng: -70.629207,
    descripcion: "Veterinarias"
  },
  {
    id: 1302,
    placeId: "ChIJ-7S0yk3BYpYRm64qHjgGWX8",
    nombre: "Clinica Veterinaria Canuphis",
    lat: -33.400617,
    lng: -70.721381,
    descripcion: "Veterinarias"
  },
  {
    id: 1303,
    placeId: "ChIJDwTYAwDJYpYRZN4-bhcenM0",
    nombre: "Clinica Veterinaria Cefovet",
    lat: -33.386360,
    lng: -70.564608,
    descripcion: "Veterinarias"
  },
  {
    id: 1304,
    placeId: "ChIJsf2UIfbQYpYRztWaNJxM7Yk",
    nombre: "Clinica Veterinaria CEMVET",
    lat: -33.522476,
    lng: -70.590374,
    descripcion: "Veterinarias"
  },
  {
    id: 1305,
    placeId: "ChIJt2LTbtrFYpYRrfAqiqe_dAI",
    nombre: "Clinica Veterinaria Central Animal",
    lat: -33.470065,
    lng: -70.652006,
    descripcion: "Veterinarias"
  },
  {
    id: 1306,
    placeId: "ChIJExB4xn7bYpYRLjghXA9tx5Q",
    nombre: "Clinica Veterinaria CENVET",
    lat: -33.491710,
    lng: -70.646709,
    descripcion: "Veterinarias"
  },
  {
    id: 1307,
    placeId: "ChIJB7UMRa7PYpYRAwSXbrHTiQw",
    nombre: "Clinica Veterinaria Cibervet",
    lat: -33.443622,
    lng: -70.582083,
    descripcion: "Veterinarias"
  },
  {
    id: 1308,
    placeId: "ChIJ62m3EuTOYpYR72TBd3ebq1Q",
    nombre: "Clinica Veterinaria Colon",
    lat: -33.417521,
    lng: -70.567247,
    descripcion: "Veterinarias"
  },
  {
    id: 1309,
    placeId: "ChIJoZQ9IuzOYpYRpimXo-1e00Y",
    nombre: "Clinica Veterinaria Cruz Azul",
    lat: -33.415825,
    lng: -70.556197,
    descripcion: "Veterinarias"
  },
  {
    id: 1310,
    placeId: "ChIJVfKfCFPEYpYRNfN3hGCcXAU",
    nombre: "Clinica Veterinaria CVES",
    lat: -33.441852,
    lng: -70.672819,
    descripcion: "Veterinarias"
  },
  {
    id: 1311,
    placeId: "ChIJIVec387aYpYRKySGFXp1pgs",
    nombre: "Clinica Veterinaria CVMS",
    lat: -33.497357,
    lng: -70.652725,
    descripcion: "Veterinarias"
  },
  {
    id: 1312,
    placeId: "ChIJAW8naIDDYpYRrzc-n8f5Wu0",
    nombre: "Clinica Veterinaria DogTores",
    lat: -33.439210,
    lng: -70.758193,
    descripcion: "Veterinarias"
  },
  {
    id: 1313,
    placeId: "ChIJl2WmLTzDYpYRLd6_QtgRirA",
    nombre: "Clinica Veterinaria Dogtorres",
    lat: -33.505737,
    lng: -70.761440,
    descripcion: "Veterinarias"
  },
  {
    id: 1314,
    placeId: "ChIJkxzkwyzRYpYRVyCl9GrTk5o",
    nombre: "Clinica Veterinaria Dr. Roy",
    lat: -33.560608,
    lng: -70.564925,
    descripcion: "Veterinarias"
  },
  {
    id: 1315,
    placeId: "ChIJZ8bCfkDOYpYRlLNAqx9aVAk",
    nombre: "Clinica Veterinaria Dr. Yury",
    lat: -33.451213,
    lng: -70.552744,
    descripcion: "Veterinarias"
  },
  {
    id: 1316,
    placeId: "ChIJv8nzng3GYpYRJv-9wKVoTIg",
    nombre: "Clinica Veterinaria Dra. Josefa Lombera",
    lat: -33.391726,
    lng: -70.642231,
    descripcion: "Veterinarias"
  },
  {
    id: 1317,
    placeId: "ChIJvzrHxbLbYpYRWfaL3s5-MXk",
    nombre: "Clinica Veterinaria El Bosque",
    lat: -33.547756,
    lng: -70.670258,
    descripcion: "Veterinarias"
  },
  {
    id: 1318,
    placeId: "ChIJ_zyY84bDYpYR4gQyykTDw7o",
    nombre: "Clinica Veterinaria El Rosal",
    lat: -33.489675,
    lng: -70.775876,
    descripcion: "Veterinarias"
  },
  {
    id: 1319,
    placeId: "ChIJw0GyTPvFYpYREOppL-Eazew",
    nombre: "Clinica Veterinaria El Salto",
    lat: -33.406341,
    lng: -70.633555,
    descripcion: "Veterinarias"
  },
  {
    id: 1320,
    placeId: "ChIJNwwo91LJYpYR-xIaBAabLXw",
    nombre: "Clinica Veterinaria El Sol",
    lat: -33.381819,
    lng: -70.536359,
    descripcion: "Veterinarias"
  },
  {
    id: 1321,
    placeId: "ChIJa53OqmTDYpYRYQKbgr1EWcM",
    nombre: "Clinica Veterinaria Entre Perros y Gatos",
    lat: -33.468447,
    lng: -70.722842,
    descripcion: "Veterinarias"
  },
  {
    id: 1322,
    placeId: "ChIJG2mTnbfFYpYRX8jyy-cKqEc",
    nombre: "Clinica Veterinaria Escanilla",
    lat: -33.428165,
    lng: -70.658292,
    descripcion: "Veterinarias"
  },
  {
    id: 1323,
    placeId: "ChIJj3pBXuzbYpYRNxbSPXT_Ft8",
    nombre: "Clinica Veterinaria FACUNUMA",
    lat: -33.508467,
    lng: -70.659251,
    descripcion: "Veterinarias"
  },
  {
    id: 1324,
    placeId: "ChIJ-YEYGrzBYpYRVTyj2j7ZlJ8",
    nombre: "Clinica Veterinaria Fauna Vet Quilicura",
    lat: -33.360020,
    lng: -70.729157,
    descripcion: "Veterinarias"
  },
  {
    id: 1325,
    placeId: "ChIJ7Qu_NWvPYpYRC7KgsEEIr4o",
    nombre: "Clinica Veterinaria FemVet",
    lat: -33.447092,
    lng: -70.565298,
    descripcion: "Veterinarias"
  },
  {
    id: 1326,
    placeId: "ChIJBRvPasvbYpYRasyv9xOkK24",
    nombre: "Clinica Veterinaria FER-VET",
    lat: -33.561104,
    lng: -70.670946,
    descripcion: "Veterinarias"
  },
  {
    id: 1327,
    placeId: "ChIJ6fWx_wzGYpYR8GcuQvB-ugI",
    nombre: "Clinica Veterinaria Full Animals",
    lat: -33.393433,
    lng: -70.642782,
    descripcion: "Veterinarias"
  },
  {
    id: 1328,
    placeId: "ChIJDTCzDLTOYpYRTL0cYZZYC_E",
    nombre: "Clinica Veterinaria Gabriela Gronemann",
    lat: -33.389632,
    lng: -70.544753,
    descripcion: "Veterinarias"
  },
  {
    id: 1329,
    placeId: "ChIJqUJ55QfBYpYRoEBJLAB6mtk",
    nombre: "Clinica Veterinaria Gestion Animal",
    lat: -33.365611,
    lng: -70.724369,
    descripcion: "Veterinarias"
  },
  {
    id: 1330,
    placeId: "ChIJVyLxb9DaYpYR-xXM-RPwnHI",
    nombre: "Clinica Veterinaria Glovet",
    lat: -33.488282,
    lng: -70.653856,
    descripcion: "Veterinarias"
  },
  {
    id: 1331,
    placeId: "ChIJQw62qpHRYpYRr2CrAFXiCt8",
    nombre: "Clinica Veterinaria Guppyvet",
    lat: -33.506511,
    lng: -70.591160,
    descripcion: "Veterinarias"
  },
  {
    id: 1332,
    placeId: "ChIJxf8CTkDaYpYR4Q7xbE8wjfw",
    nombre: "Clinica Veterinaria Helkekura",
    lat: -33.550915,
    lng: -70.647861,
    descripcion: "Veterinarias"
  },
  {
    id: 1333,
    placeId: "ChIJW6xj5wfHYpYRs4BbaP_Q0DU",
    nombre: "Clinica Veterinaria Huechuraba",
    lat: -33.352475,
    lng: -70.670760,
    descripcion: "Veterinarias"
  },
  {
    id: 1334,
    placeId: "ChIJgaysFTfbYpYRE-GK0zATS3s",
    nombre: "Clinica Veterinaria Huella Animal",
    lat: -33.504414,
    lng: -70.688773,
    descripcion: "Veterinarias"
  },
  {
    id: 1335,
    placeId: "ChIJpVW_uKPDYpYRFkaxDrBozl8",
    nombre: "Clinica Veterinaria Huellas",
    lat: -33.439582,
    lng: -70.757059,
    descripcion: "Veterinarias"
  },
  {
    id: 1336,
    placeId: "ChIJvY5ssUnaYpYR9zwujITprnw",
    nombre: "Clinica Veterinaria Hundeland El Bosque",
    lat: -33.553133,
    lng: -70.660738,
    descripcion: "Veterinarias"
  },
  {
    id: 1337,
    placeId: "ChIJ91NwMavFYpYR8HPg-GnQpFo",
    nombre: "Clinica Veterinaria Innamedica",
    lat: -33.465190,
    lng: -70.630091,
    descripcion: "Veterinarias"
  },
  {
    id: 1338,
    placeId: "ChIJ_1_5cXXbYpYRG2-mvN97E6k",
    nombre: "Clinica Veterinaria Integramedvet",
    lat: -33.491487,
    lng: -70.662433,
    descripcion: "Veterinarias"
  },
  {
    id: 1339,
    placeId: "ChIJ82EA8FPPYpYRQp93wOkZk0I",
    nombre: "Clinica Veterinaria Invet - Chile",
    lat: -33.440336,
    lng: -70.620772,
    descripcion: "Veterinarias"
  },
  {
    id: 1340,
    placeId: "ChIJb3FRteLQYpYR9I7Mpe_8w7E",
    nombre: "Clinica Veterinaria K-Nino",
    lat: -33.530786,
    lng: -70.575605,
    descripcion: "Veterinarias"
  },
  {
    id: 1341,
    placeId: "ChIJF-JuKRjbYpYRenSB2CBTjrA",
    nombre: "Clinica Veterinaria La Bonte",
    lat: -33.517752,
    lng: -70.680895,
    descripcion: "Veterinarias"
  },
  {
    id: 1342,
    placeId: "ChIJF8M1hEDOYpYR_EvS3FlvAvA",
    nombre: "Clinica Veterinaria La Reina",
    lat: -33.451279,
    lng: -70.553780,
    descripcion: "Veterinarias"
  },
  {
    id: 1343,
    placeId: "ChIJre4be_LQYpYRpuFKt0dQB5M",
    nombre: "Clinica Veterinaria La Rotonda",
    lat: -33.533235,
    lng: -70.594380,
    descripcion: "Veterinarias"
  },
  {
    id: 1344,
    placeId: "ChIJRT8GMy3JYpYRh-jet0cwbO8",
    nombre: "Clinica Veterinaria Las Condes",
    lat: -33.388503,
    lng: -70.564003,
    descripcion: "Veterinarias"
  },
  {
    id: 1345,
    placeId: "ChIJd_lsVLfFYpYRl9IOeacrxTM",
    nombre: "Clinica Veterinaria Lasospet",
    lat: -33.440497,
    lng: -70.660353,
    descripcion: "Veterinarias"
  },
  {
    id: 1346,
    placeId: "ChIJTyQ3NcHOYpYRyrLjNIeGbjA",
    nombre: "Clinica Veterinaria Leonardo Da Vinci",
    lat: -33.460715,
    lng: -70.554513,
    descripcion: "Veterinarias"
  },
  {
    id: 1347,
    placeId: "ChIJr2f2vL7LYpYRfvTBOtgJU5I",
    nombre: "Clinica Veterinaria Lo Barnechea",
    lat: -33.358783,
    lng: -70.506541,
    descripcion: "Veterinarias"
  },
  {
    id: 1348,
    placeId: "ChIJv9x2AtDFYpYRQBx_rdYCZbY",
    nombre: "Clinica Veterinaria Los Avellanos",
    lat: -33.413334,
    lng: -70.658552,
    descripcion: "Veterinarias"
  },
  {
    id: 1349,
    placeId: "ChIJOa-hldPQYpYR9NLxlGCWFV0",
    nombre: "Clinica Veterinaria Los Quillayes",
    lat: -33.559908,
    lng: -70.581366,
    descripcion: "Veterinarias"
  },
  {
    id: 1350,
    placeId: "ChIJyctfXADPYpYR_Xf06kqeCiQ",
    nombre: "Clinica Veterinaria Los Robles",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1351,
    placeId: "ChIJI6tHFRfPYpYRqnFPIGuM9Mo",
    nombre: "Clinica Veterinaria Luis Thayer Ojeda",
    lat: -33.419931,
    lng: -70.601928,
    descripcion: "Veterinarias"
  },
  {
    id: 1352,
    placeId: "ChIJWZ5H7OfPYpYR-ob9EPBJ8OY",
    nombre: "Clinica Veterinaria Macul",
    lat: -33.471187,
    lng: -70.598874,
    descripcion: "Veterinarias"
  },
  {
    id: 1353,
    placeId: "ChIJ50hHs4zPYpYRMHSNgPQDxo4",
    nombre: "Clinica Veterinaria Marceven",
    lat: -33.461337,
    lng: -70.613844,
    descripcion: "Veterinarias"
  },
  {
    id: 1354,
    placeId: "ChIJM4aLsfbBYpYRyBlv7GFbGpw",
    nombre: "Clinica Veterinaria Mascotas del Valle",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1355,
    placeId: "ChIJawzw0dbRYpYR-kvalDcuJqY",
    nombre: "Clinica Veterinaria MasQueVet",
    lat: -33.487120,
    lng: -70.554591,
    descripcion: "Veterinarias"
  },
  {
    id: 1356,
    placeId: "ChIJi1ChitvPYpYRYNov0xfNyK8",
    nombre: "Clinica Veterinaria MasZoo",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1357,
    placeId: "ChIJe73sxmLFYpYRmOEe6hXAqus",
    nombre: "Clinica Veterinaria Metropolitana",
    lat: -33.453304,
    lng: -70.623480,
    descripcion: "Veterinarias"
  },
  {
    id: 1358,
    placeId: "ChIJt04iKGLDYpYRvedQZMaBMYQ",
    nombre: "Clinica Veterinaria Mimivets",
    lat: -33.460507,
    lng: -70.723131,
    descripcion: "Veterinarias"
  },
  {
    id: 1359,
    placeId: "ChIJkTSHtUnQYpYR8luDMIKRGn8",
    nombre: "Clinica Veterinaria Mundo Animal",
    lat: -33.500929,
    lng: -70.582806,
    descripcion: "Veterinarias"
  },
  {
    id: 1360,
    placeId: "ChIJ4zr0ldfBYpYR5e6BV2A50cs",
    nombre: "Clinica Veterinaria Municipal",
    lat: -33.416390,
    lng: -70.741519,
    descripcion: "Veterinarias"
  },
  {
    id: 1361,
    placeId: "ChIJFY7iRjXFYpYRiaLtc7k8JVA",
    nombre: "Clinica Veterinaria My Konan Pet San Miguel",
    lat: -33.487792,
    lng: -70.647127,
    descripcion: "Veterinarias"
  },
  {
    id: 1362,
    placeId: "ChIJrfFROz7QYpYRYMHWQxlCUV4",
    nombre: "Clinica Veterinaria Nativa",
    lat: -33.498542,
    lng: -70.597196,
    descripcion: "Veterinarias"
  },
  {
    id: 1363,
    placeId: "ChIJez7j3HjPYpYRsJiXQAbSyMc",
    nombre: "Clinica Veterinaria Nervet",
    lat: -33.437835,
    lng: -70.614529,
    descripcion: "Veterinarias"
  },
  {
    id: 1364,
    placeId: "ChIJy7uywWXPYpYRa7KONnGRwiM",
    nombre: "Clinica Veterinaria Novavet",
    lat: -33.457493,
    lng: -70.600505,
    descripcion: "Veterinarias"
  },
  {
    id: 1365,
    placeId: "ChIJja9jja3GYpYRy3uj8ZHrxDY",
    nombre: "Clinica Veterinaria Nuestros Hermanos Menores",
    lat: -33.401465,
    lng: -70.712221,
    descripcion: "Veterinarias"
  },
  {
    id: 1366,
    placeId: "ChIJw53WNajPYpYRp7CZTq4dmL4",
    nombre: "Clinica Veterinaria Nueva Costanera (Av. Luis Pasteur)",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1367,
    placeId: "ChIJsw_7bIHPYpYRVm6qEi_lRJg",
    nombre: "Clinica Veterinaria Nueva Costanera (Av. Nueva Costanera)",
    lat: -33.406483,
    lng: -70.599154,
    descripcion: "Veterinarias"
  },
  {
    id: 1368,
    placeId: "ChIJx1Rb0XjPYpYRINrvHQf8RqE",
    nombre: "Clinica Veterinaria Nueva Madrid",
    lat: -33.449630,
    lng: -70.601233,
    descripcion: "Veterinarias"
  },
  {
    id: 1369,
    placeId: "ChIJ-4Ej60TaYpYRZaaexOi91mA",
    nombre: "Clinica Veterinaria Nueva Poniente",
    lat: -33.545010,
    lng: -70.653225,
    descripcion: "Veterinarias"
  },
  {
    id: 1370,
    placeId: "ChIJ-e3EI4zRYpYRTGwmYRoXluc",
    nombre: "Clinica Veterinaria Ñatitos",
    lat: -33.543299,
    lng: -70.610139,
    descripcion: "Veterinarias"
  },
  {
    id: 1371,
    placeId: "ChIJ9cA95FrbYpYRucbQfKUXw68",
    nombre: "Clinica Veterinaria Oeste",
    lat: -33.511198,
    lng: -70.706777,
    descripcion: "Veterinarias"
  },
  {
    id: 1372,
    placeId: "ChIJ_X5J15bFYpYRHdjioWEIxtE",
    nombre: "Clinica Veterinaria Omilen Antu Spa",
    lat: -33.430406,
    lng: -70.640191,
    descripcion: "Veterinarias"
  },
  {
    id: 1373,
    placeId: "ChIJ2z3CCBPDYpYRkhDqBDQFXbQ",
    nombre: "Clinica Veterinaria Oncovet",
    lat: -33.507934,
    lng: -70.758393,
    descripcion: "Veterinarias"
  },
  {
    id: 1374,
    placeId: "ChIJ7bI-Gm3DYpYRDmgJCYbofKY",
    nombre: "Clinica Veterinaria One Health",
    lat: -33.472981,
    lng: -70.738842,
    descripcion: "Veterinarias"
  },
  {
    id: 1375,
    placeId: "ChIJw_N9OnjFYpYR6MMCb7TG3Pc",
    nombre: "Clinica Veterinaria Parque Bustamante",
    lat: -33.444997,
    lng: -70.632645,
    descripcion: "Veterinarias"
  },
  {
    id: 1376,
    placeId: "ChIJl8rP8MnRYpYReJqsweoDSzo",
    nombre: "Clinica Veterinaria Parque Vespucio",
    lat: -33.498495,
    lng: -70.585027,
    descripcion: "Veterinarias"
  },
  {
    id: 1377,
    placeId: "ChIJkY7J-hrQYpYRi33ISreXX9M",
    nombre: "Clinica Veterinaria Paskana",
    lat: -33.487466,
    lng: -70.597679,
    descripcion: "Veterinarias"
  },
  {
    id: 1378,
    placeId: "ChIJDeSK8uzOYpYRbGpxFb0e3l8",
    nombre: "Clinica Veterinaria Pasteur",
    lat: -33.415199,
    lng: -70.552617,
    descripcion: "Veterinarias"
  },
  {
    id: 1379,
    placeId: "ChIJBVNDzkjPYpYRiqXelYZUmLQ",
    nombre: "Clinica Veterinaria Paw Sucursal Ñuñoa",
    lat: -33.460987,
    lng: -70.605774,
    descripcion: "Veterinarias"
  },
  {
    id: 1380,
    placeId: "ChIJuR2QtZfpYpYRpDdJguyUEUE",
    nombre: "Clinica Veterinaria Pet & Health",
    lat: -33.454018,
    lng: -70.844970,
    descripcion: "Veterinarias"
  },
  {
    id: 1381,
    placeId: "ChIJJSfIB7TOYpYRGOeC4uYjauQ",
    nombre: "Clinica Veterinaria Pet's Center",
    lat: -33.390991,
    lng: -70.544181,
    descripcion: "Veterinarias"
  },
  {
    id: 1382,
    placeId: "ChIJkV-jQADPYpYRTREFJddWlyI",
    nombre: "Clinica Veterinaria PetFamily Care",
    lat: -33.447994,
    lng: -70.600473,
    descripcion: "Veterinarias"
  },
  {
    id: 1383,
    placeId: "ChIJ8WvIeQDFYpYRgNqafyKdvHQ",
    nombre: "Clinica Veterinaria Petvet",
    lat: -33.471283,
    lng: -70.698786,
    descripcion: "Veterinarias"
  },
  {
    id: 1384,
    placeId: "ChIJweZw45DLYpYRqWQe7Or8zXQ",
    nombre: "Clinica Veterinaria Plaza San Enrique Limitada",
    lat: -33.364819,
    lng: -70.495982,
    descripcion: "Veterinarias"
  },
  {
    id: 1385,
    placeId: "ChIJHesKe9bFYpYR7R0l7QwghLg",
    nombre: "Clinica Veterinaria Pravet",
    lat: -33.407663,
    lng: -70.664500,
    descripcion: "Veterinarias"
  },
  {
    id: 1386,
    placeId: "ChIJOe0ArmPPYpYRJmxJhuw0e6k",
    nombre: "Clinica Veterinaria Providencia",
    lat: -33.426654,
    lng: -70.618288,
    descripcion: "Veterinarias"
  },
  {
    id: 1387,
    placeId: "ChIJj1l4n-nLYpYR90YX1d6y2vw",
    nombre: "Clinica Veterinaria Puente Viejo",
    lat: -33.360813,
    lng: -70.510460,
    descripcion: "Veterinarias"
  },
  {
    id: 1388,
    placeId: "ChIJPejyEC_DYpYRAC5DSBPZy88",
    nombre: "Clinica Veterinaria Punto Animal",
    lat: -33.515734,
    lng: -70.757048,
    descripcion: "Veterinarias"
  },
  {
    id: 1389,
    placeId: "ChIJuw6HBxjbYpYR8bpTfkZESBo",
    nombre: "Clinica Veterinaria Puppies",
    lat: -33.515535,
    lng: -70.680962,
    descripcion: "Veterinarias"
  },
  {
    id: 1390,
    placeId: "ChIJe8T4bIDBYpYRPLxb9HblEGY",
    nombre: "Clinica Veterinaria Raizavet",
    lat: -33.351156,
    lng: -70.739851,
    descripcion: "Veterinarias"
  },
  {
    id: 1391,
    placeId: "ChIJV0QsMXPdYpYRVJ89fyIKwUk",
    nombre: "Clinica Veterinaria Romavet",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1392,
    placeId: "ChIJY4UvOibPYpYRW3ksrggEYIE",
    nombre: "Clinica Veterinaria Rucanimal",
    lat: -33.452117,
    lng: -70.584522,
    descripcion: "Veterinarias"
  },
  {
    id: 1393,
    placeId: "ChIJR65zkEDPYpYR7y0H_Kf_lFI",
    nombre: "Clinica Veterinaria S.O.S. Animal",
    lat: -33.412212,
    lng: -70.598579,
    descripcion: "Veterinarias"
  },
  {
    id: 1394,
    placeId: "ChIJI2rH2BHDYpYR02fgAgQrVJs",
    nombre: "Clinica Veterinaria Safari",
    lat: -33.472599,
    lng: -70.748362,
    descripcion: "Veterinarias"
  },
  {
    id: 1395,
    placeId: "ChIJve8pwgfDYpYRSScygkL8tQU",
    nombre: "Clinica Veterinaria San Alberto",
    lat: -33.444189,
    lng: -70.721530,
    descripcion: "Veterinarias"
  },
  {
    id: 1396,
    placeId: "ChIJ-9zSghPPYpYRWodlxYsODWs",
    nombre: "Clinica Veterinaria San Blas a Domicilio",
    lat: -33.426370,
    lng: -70.598107,
    descripcion: "Veterinarias"
  },
  {
    id: 1397,
    placeId: "ChIJpzuSdXHPYpYRK-ZVfGua6aU",
    nombre: "Clinica Veterinaria San Cristobal",
    lat: -33.430397,
    lng: -70.605153,
    descripcion: "Veterinarias"
  },
  {
    id: 1398,
    placeId: "ChIJFfM5vZzEYpYRTfkgbRnHFQ4",
    nombre: "Clinica Veterinaria San Francisco",
    lat: -33.467908,
    lng: -70.711682,
    descripcion: "Veterinarias"
  },
  {
    id: 1399,
    placeId: "ChIJ8V9qPZvOYpYRTTRCWy4oRlA",
    nombre: "Clínica Veterinaria San Francisco ",
    lat: -33.415000,
    lng: -70.534628,
    descripcion: "Veterinarias"
  },
  {
    id: 1400,
    placeId: "ChIJWQcxg9LaYpYRObEohaZniR4",
    nombre: "Clinica Veterinaria San Ignacio",
    lat: -33.491933,
    lng: -70.657688,
    descripcion: "Veterinarias"
  },
  {
    id: 1401,
    placeId: "ChIJm4LNCPPQYpYRPKS9WF9uLBU",
    nombre: "Clinica Veterinaria San Martín - La Florida",
    lat: -33.530453,
    lng: -70.595788,
    descripcion: "Veterinarias"
  },
  {
    id: 1402,
    placeId: "ChIJIdv4a7baYpYRBAUieZrUE8w",
    nombre: "Clinica Veterinaria San Miguel",
    lat: -33.494174,
    lng: -70.643631,
    descripcion: "Veterinarias"
  },
  {
    id: 1403,
    placeId: "ChIJYZbLKm7EYpYRlahUOhVbmxw",
    nombre: "Clinica Veterinaria San Pablo",
    lat: -33.441065,
    lng: -70.704769,
    descripcion: "Veterinarias"
  },
  {
    id: 1404,
    placeId: "ChIJwdcc0zLHYpYR3hrX1ordNcY",
    nombre: "Clinica Veterinaria San Sebastian",
    lat: -33.357223,
    lng: -70.716659,
    descripcion: "Veterinarias"
  },
  {
    id: 1405,
    placeId: "ChIJwX51DT7DYpYRpzHNfnFvpyY",
    nombre: "Clinica Veterinaria Santa Gema",
    lat: -33.483444,
    lng: -70.745586,
    descripcion: "Veterinarias"
  },
  {
    id: 1406,
    placeId: "ChIJOTAU1I7DYpYRIP4U-1ygjNE",
    nombre: "Clinica Veterinaria Santa Maria",
    lat: -33.443807,
    lng: -70.723106,
    descripcion: "Veterinarias"
  },
  {
    id: 1407,
    placeId: "ChIJe-mECFPBYpYRNCZkXoQxw7I",
    nombre: "Clinica Veterinaria Santa Monica",
    lat: -33.406248,
    lng: -70.719530,
    descripcion: "Veterinarias"
  },
  {
    id: 1408,
    placeId: "ChIJRR4QHEvFYpYRaMkGbDyrujY",
    nombre: "Clinica Veterinaria Santa Victoria 24 horas ",
    lat: -33.446337,
    lng: -70.640607,
    descripcion: "Veterinarias"
  },
  {
    id: 1409,
    placeId: "ChIJWRKQwmHDYpYRaSo_vw1CJXY",
    nombre: "Clinica Veterinaria Selvatico Vet",
    lat: -33.472564,
    lng: -70.728279,
    descripcion: "Veterinarias"
  },
  {
    id: 1410,
    placeId: "ChIJQd_BM8XRYpYRdsVPwf_SBCI",
    nombre: "Clinica Veterinaria Sr. Bigotes",
    lat: -33.485421,
    lng: -70.560238,
    descripcion: "Veterinarias"
  },
  {
    id: 1411,
    placeId: "ChIJnXooE9TAYpYRwG0w9T1GcLw",
    nombre: "Clinica Veterinaria Sta. Maria",
    lat: -33.366213,
    lng: -70.721435,
    descripcion: "Veterinarias"
  },
  {
    id: 1412,
    placeId: "ChIJqXi92Q3DYpYR-5oQhbi_7rQ",
    nombre: "Clinica Veterinaria Stgo. Norte",
    lat: -33.470234,
    lng: -70.746373,
    descripcion: "Veterinarias"
  },
  {
    id: 1413,
    placeId: "ChIJX3ufMxrPYpYRogEJ532jbTo",
    nombre: "Clinica Veterinaria Tabitha's (CMAI)",
    lat: -33.450412,
    lng: -70.587810,
    descripcion: "Veterinarias"
  },
  {
    id: 1414,
    placeId: "ChIJ-2bbN-TRYpYRvmFXkZ7Akuw",
    nombre: "Clinica Veterinaria Tecnovet Alto la Florida",
    lat: -33.544609,
    lng: -70.582708,
    descripcion: "Veterinarias"
  },
  {
    id: 1415,
    placeId: "ChIJ942YNp_DYpYRyC8dwIl6ooU",
    nombre: "Clinica Veterinaria Teniente Cruz",
    lat: -33.455153,
    lng: -70.739041,
    descripcion: "Veterinarias"
  },
  {
    id: 1416,
    placeId: "ChIJy8aQZbzPYpYRNgyzgWfbGVc",
    nombre: "Clinica Veterinaria The Cool Dogs Vet",
    lat: -33.428658,
    lng: -70.602836,
    descripcion: "Veterinarias"
  },
  {
    id: 1417,
    placeId: "ChIJR9GBLv7QYpYR_QoMQwf0YA4",
    nombre: "Clinica Veterinaria Tierra Animal",
    lat: -33.522629,
    lng: -70.574803,
    descripcion: "Veterinarias"
  },
  {
    id: 1418,
    placeId: "ChIJb_laDU3OYpYRD7vh0JzXKoA",
    nombre: "Clinica Veterinaria Tobalaba",
    lat: -33.583126,
    lng: -70.628522,
    descripcion: "Veterinarias"
  },
  {
    id: 1419,
    placeId: "ChIJoTZ9qvPOYpYRB2eDEjDjhWY",
    nombre: "Clinica Veterinaria Tomas Moro",
    lat: -33.422074,
    lng: -70.553258,
    descripcion: "Veterinarias"
  },
  {
    id: 1420,
    placeId: "ChIJhfIQ30JeUoARFdd8xZi6aVg",
    nombre: "Clinica Veterinaria UBO",
    lat: -33.475673,
    lng: -70.651022,
    descripcion: "Veterinarias"
  },
  {
    id: 1421,
    placeId: "ChIJBe7FRADbYpYRU74qQzCvBDc",
    nombre: "Clinica Veterinaria UNIVERZOO CVU",
    lat: -33.496782,
    lng: -70.662479,
    descripcion: "Veterinarias"
  },
  {
    id: 1422,
    placeId: "ChIJn3QM62PdYpYRy7JwKGIydeU",
    nombre: "Clinica Veterinaria Vanyvet",
    lat: -33.518026,
    lng: -70.777076,
    descripcion: "Veterinarias"
  },
  {
    id: 1423,
    placeId: "ChIJh9zJQTvXYpYRNuuofnBvbew",
    nombre: "Clinica Veterinaria Vasca",
    lat: -33.582046,
    lng: -70.603726,
    descripcion: "Veterinarias"
  },
  {
    id: 1424,
    placeId: "ChIJF7SaxoHFYpYR4BjxPyKT_T8",
    nombre: "Clinica Veterinaria Vet Friendly Quinta Normal",
    lat: -33.432417,
    lng: -70.689988,
    descripcion: "Veterinarias"
  },
  {
    id: 1425,
    placeId: "ChIJpWZjswbPYpYR4cO5yc2TjB8",
    nombre: "Clinica Veterinaria Vet Surg",
    lat: -33.430150,
    lng: -70.580187,
    descripcion: "Veterinarias"
  },
  {
    id: 1426,
    placeId: "ChIJR68uAYPPYpYRjVtNU_KwelM",
    nombre: "Clinica Veterinaria Vet's",
    lat: -33.453204,
    lng: -70.599790,
    descripcion: "Veterinarias"
  },
  {
    id: 1427,
    placeId: "ChIJG5JmpdfDYpYRim4jtQiCNsc",
    nombre: "Clinica Veterinaria Vet's Home",
    lat: -33.430439,
    lng: -70.747291,
    descripcion: "Veterinarias"
  },
  {
    id: 1428,
    placeId: "ChIJRcO8vMLBYpYRhYVf4WvJ3Lc",
    nombre: "Clinica Veterinaria Vetbull",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1429,
    placeId: "ChIJEQm9I5vFYpYRh_WwGcpkMo0",
    nombre: "Clinica Veterinaria Vetdog",
    lat: -33.405805,
    lng: -70.660692,
    descripcion: "Veterinarias"
  },
  {
    id: 1430,
    placeId: "ChIJ3Y5aG9PAYpYR-7jKzIxD6hQ",
    nombre: "Clinica Veterinaria Vethealth",
    lat: -33.362837,
    lng: -70.719027,
    descripcion: "Veterinarias"
  },
  {
    id: 1431,
    placeId: "ChIJzxXSMc7PYpYR9bltYN4XGZA",
    nombre: "Clinica Veterinaria Vetlandia",
    lat: -33.456826,
    lng: -70.573019,
    descripcion: "Veterinarias"
  },
  {
    id: 1432,
    placeId: "ChIJaSTAPPTGYpYRj_70c5_xShY",
    nombre: "Clinica Veterinaria Vetsalud",
    lat: -33.380281,
    lng: -70.673341,
    descripcion: "Veterinarias"
  },
  {
    id: 1433,
    placeId: "ChIJ5eEOl_7FYpYRaC4-s-xCYuM",
    nombre: "Clinica Veterinaria VetsRockers",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1434,
    placeId: "ChIJYeqE2wDFYpYRM6ZZdPCKpxY",
    nombre: "Clinica Veterinaria Vida Sana",
    lat: -33.450375,
    lng: -70.664502,
    descripcion: "Veterinarias"
  },
  {
    id: 1435,
    placeId: "ChIJhexUSxPFYpYRY4WH4u8ytjI",
    nombre: "Clinica Veterinaria Villapatitas SpA",
    lat: -33.430029,
    lng: -70.713943,
    descripcion: "Veterinarias"
  },
  {
    id: 1436,
    placeId: "ChIJ8epzq3rLYpYRlGAZcdb7zNk",
    nombre: "Clinica Veterinaria VitaVet",
    lat: -33.352262,
    lng: -70.669103,
    descripcion: "Veterinarias"
  },
  {
    id: 1437,
    placeId: "ChIJOQ4bSI7EYpYR2anEjo_s8Bw",
    nombre: "Clinica Veterinaria Vivir Mejor",
    lat: -33.472658,
    lng: -70.738573,
    descripcion: "Veterinarias"
  },
  {
    id: 1438,
    placeId: "ChIJI46D4A7PYpYRCncaXq2vc5I",
    nombre: "Clinica Veterinaria WildVet",
    lat: -33.450141,
    lng: -70.561057,
    descripcion: "Veterinarias"
  },
  {
    id: 1439,
    placeId: "ChIJLerKLZrJYpYRio349iwmYAY",
    nombre: "Clinica Veterinaria Zoodata",
    lat: -33.381034,
    lng: -70.536997,
    descripcion: "Veterinarias"
  },
  {
    id: 1440,
    placeId: "ChIJGVCNCdbbYpYRzR8bniK7pHI",
    nombre: "Clinica Veterinaria Zoolomascotas",
    lat: -33.578483,
    lng: -70.675328,
    descripcion: "Veterinarias"
  },
  {
    id: 1441,
    placeId: "ChIJISic6AfFYpYRlk1PnE8ZHbk",
    nombre: "Clinimascotas",
    lat: -33.481672,
    lng: -70.698653,
    descripcion: "Veterinarias"
  },
  {
    id: 1442,
    placeId: "ChIJb40OLrHOYpYR6G2TgX_LiuI",
    nombre: "CLINOMOVIL Veterinaria",
    lat: -33.410817,
    lng: -70.541843,
    descripcion: "Veterinarias"
  },
  {
    id: 1443,
    placeId: "ChIJCzXSfknPYpYRkjyZG6_D8nQ",
    nombre: "CLINVET",
    lat: -33.416962,
    lng: -70.613165,
    descripcion: "Veterinarias"
  },
  {
    id: 1444,
    placeId: "ChIJA5Qxm8TRYpYRedGlKvxCqDA",
    nombre: "Club Animal",
    lat: -33.486448,
    lng: -70.556942,
    descripcion: "Veterinarias"
  },
  {
    id: 1445,
    placeId: "ChIJv0Qezg7PYpYRWtSQvtO842U",
    nombre: "Club Entre Patitas 2419",
    lat: -33.427175,
    lng: -70.578280,
    descripcion: "Veterinarias"
  },
  {
    id: 1446,
    placeId: "ChIJWcNVrErPYpYRHGmmpQA71zk",
    nombre: "Club Entre Patitas 2879",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1447,
    placeId: "ChIJpa9E6QzFYpYRkBx4rqRs7jI",
    nombre: "Conexion Gatuna - Especialidad Medicina Felina",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1448,
    placeId: "ChIJ76T3qAhrqgkRv2uMHKEHHIE",
    nombre: "Constanza Veterinaria (Dra. Constanza Aedo)",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1449,
    placeId: "ChIJHxk_32nPYpYRZZADMohF6ms",
    nombre: "Consulta Veterinaria DogtorNico",
    lat: -33.404663,
    lng: -70.547898,
    descripcion: "Veterinarias"
  },
  {
    id: 1450,
    placeId: "ChIJ0zrRPgjFYpYRulaRtafVEz4",
    nombre: "Consulta Veterinaria Mundo Pet's 2701",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1451,
    placeId: "ChIJA6uWMZvHYpYRWYt83dJuufc",
    nombre: "Consulta Veterinaria Mundo Pet's 369",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1452,
    placeId: "ChIJ2dhakkTPYpYRo0rM0PdsKYI",
    nombre: "Consulta Veterinaria Rincon Animal",
    lat: -33.471581,
    lng: -70.563086,
    descripcion: "Veterinarias"
  },
  {
    id: 1453,
    placeId: "ChIJP7jOwDbDYpYRxb-pnTIDS2A",
    nombre: "Consulta y Peluqueria Veterinaria Kidamy",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1454,
    placeId: "ChIJYSYla9bHYpYRhyWzsEBIzcY",
    nombre: "Consultorio Veterinario DAM",
    lat: -33.379320,
    lng: -70.685841,
    descripcion: "Veterinarias"
  },
  {
    id: 1455,
    placeId: "ChIJgdOaXpDLYpYRqNeG06Rp_e0",
    nombre: "Costavet Clínica Veterinaria",
    lat: -33.363987,
    lng: -70.492519,
    descripcion: "Veterinarias"
  },
  {
    id: 1456,
    placeId: "ChIJzZQVBIjPYpYRMREV9bzkAik",
    nombre: "CRIVET",
    lat: -33.451434,
    lng: -70.557854,
    descripcion: "Veterinarias"
  },
  {
    id: 1457,
    placeId: "ChIJu-Z9DiLbYpYRfqqTi2sui58",
    nombre: "CronosVet",
    lat: -33.528793,
    lng: -70.662713,
    descripcion: "Veterinarias"
  },
  {
    id: 1458,
    placeId: "ChIJo2uxV4CLFY0RQLRIh13762U",
    nombre: "CuidaPet - Veterinario a Domicilio",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1459,
    placeId: "ChIJE87BWg7PYpYRPwOepmnP2H4",
    nombre: "Delivet",
    lat: -33.429271,
    lng: -70.587817,
    descripcion: "Veterinarias"
  },
  {
    id: 1460,
    placeId: "ChIJP7shTePRYpYRq7XgNQvGSjg",
    nombre: "DermaClinic",
    lat: -33.546864,
    lng: -70.593743,
    descripcion: "Veterinarias"
  },
  {
    id: 1461,
    placeId: "ChIJF8M1hEDOYpYRNBn7TvEiGgQ",
    nombre: "Dermatologa Veronica Balazs",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1462,
    placeId: "ChIJtwOSa8fFYpYRBeytyOjI0hU",
    nombre: "Dinamicanimal",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1463,
    placeId: "ChIJSxYQl37dYpYRMYEeEB6emDw",
    nombre: "Doctora Veterinaria - Medico Veterinaria a Domicilio",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1464,
    placeId: "ChIJDZesUX7t_I0RqcLZKtrkB64",
    nombre: "Dogtora Paz Loreto (Perry Vets)",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1465,
    placeId: "ChIJSXBo-qrFYpYR-t_jUxA8eJU",
    nombre: "Dogtoralia",
    lat: -33.427453,
    lng: -70.675189,
    descripcion: "Veterinarias"
  },
  {
    id: 1466,
    placeId: "ChIJ55qRfsjAYpYRPgk-t7vJyJc",
    nombre: "Doña Sofía",
    lat: -33.352832,
    lng: -70.728421,
    descripcion: "Veterinarias"
  },
  {
    id: 1467,
    placeId: "ChIJGTbBc0XOYpYRfLdDmiCvc0g",
    nombre: "Dr Chilet Veterinario",
    lat: -33.444425,
    lng: -70.561030,
    descripcion: "Veterinarias"
  },
  {
    id: 1468,
    placeId: "ChIJjx30e6LDYpYRzJvaqQJJCbs",
    nombre: "Dr Franco Berrios",
    lat: -33.456093,
    lng: -70.751276,
    descripcion: "Veterinarias"
  },
  {
    id: 1469,
    placeId: "ChIJlZHM8brPYpYRmOfKCJzfp28",
    nombre: "Dr. Zoo Clinica Veterinaria",
    lat: -33.448632,
    lng: -70.588004,
    descripcion: "Veterinarias"
  },
  {
    id: 1470,
    placeId: "ChIJyYHjJLLPYpYR1aJ47pkYmy0",
    nombre: "Dr.Pet Clinica Veterinaria - Las Verbenas",
    lat: -33.393581,
    lng: -70.545553,
    descripcion: "Veterinarias"
  },
  {
    id: 1471,
    placeId: "ChIJN2_zD1DJYpYRnazTPv4z7UI",
    nombre: "Dr.Pet Clinica Veterinaria - Lo Barnechea Pie Andino",
    lat: -33.323906,
    lng: -70.538086,
    descripcion: "Veterinarias"
  },
  {
    id: 1472,
    placeId: "ChIJVYZfdZPPYpYRN0AZTRC09J0",
    nombre: "Dr.Pet Clinica Veterinaria - Los Leones Providencia",
    lat: -33.424997,
    lng: -70.604310,
    descripcion: "Veterinarias"
  },
  {
    id: 1473,
    placeId: "ChIJqXjVydzCYpYRmNGBaYl4q1I",
    nombre: "Dr.Pet Clinica Veterinaria - Maipu",
    lat: -33.491592,
    lng: -70.776890,
    descripcion: "Veterinarias"
  },
  {
    id: 1474,
    placeId: "ChIJLYZYPYbOYpYRDK4g2nQ3ZVc",
    nombre: "Dr.Pet Clinica Veterinaria - Padre Hurtado Las Condes",
    lat: -33.422880,
    lng: -70.538532,
    descripcion: "Veterinarias"
  },
  {
    id: 1475,
    placeId: "ChIJvTCuDg7RYpYRH8UiLdP6SC8",
    nombre: "Dr.Pet Clinica Veterinaria - Peñalolen",
    lat: -33.478841,
    lng: -70.544195,
    descripcion: "Veterinarias"
  },
  {
    id: 1476,
    placeId: "ChIJWU2An9nAYpYR9nKAICViKsA",
    nombre: "Dr.Pet Clinica Veterinaria - Quilicura",
    lat: -33.355485,
    lng: -70.728201,
    descripcion: "Veterinarias"
  },
  {
    id: 1477,
    placeId: "ChIJmXNkWcjJYpYRKj9tbJgqY7g",
    nombre: "Dr.Pet Clinica Veterinaria - Vitacura Santa Maria",
    lat: -33.376667,
    lng: -70.571068,
    descripcion: "Veterinarias"
  },
  {
    id: 1478,
    placeId: "ChIJz3SeSnAVjmYR2ZoXomGjRns",
    nombre: "Dra Evelin Vet Acupuntura",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1479,
    placeId: "ChIJf3itWAXDYpYRqGR-29PAJaA",
    nombre: "Dra. Ana Caceres - Medicina Veterinaria Integral",
    lat: -33.429598,
    lng: -70.735670,
    descripcion: "Veterinarias"
  },
  {
    id: 1480,
    placeId: "ChIJixCuoi3PYpYR4dDQEZ4vVY4",
    nombre: "Dra. Aurora Shen - Veterinaria a Domicilio",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1481,
    placeId: "ChIJi32UyA_PYpYRSDA1LAmu3SQ",
    nombre: "Dra. Eli",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1482,
    placeId: "ChIJw8iWC5nCm4wRdkytLnGKwrw",
    nombre: "Dra. Isidora Ananias - Consulta Veterinaria a Domicilio",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1483,
    placeId: "ChIJs2PM_mbEYpYRX-xG198Yejw",
    nombre: "Ecoin Clinica Veterinaria",
    lat: -33.445405,
    lng: -70.698036,
    descripcion: "Veterinarias"
  },
  {
    id: 1484,
    placeId: "ChIJx9O85eXFYpYR8MnhkyXLy1g",
    nombre: "Ecovet",
    lat: -33.410759,
    lng: -70.638813,
    descripcion: "Veterinarias"
  },
  {
    id: 1485,
    placeId: "ChIJufS6etbRYpYRLhfpggr6aE8",
    nombre: "El Rincon Animal",
    lat: -33.477164,
    lng: -70.568872,
    descripcion: "Veterinarias"
  },
  {
    id: 1486,
    placeId: "ChIJHXvh5wnHYpYROQYcNkGaEv4",
    nombre: "El Roble Veterinaria",
    lat: -33.347393,
    lng: -70.670010,
    descripcion: "Veterinarias"
  },
  {
    id: 1487,
    placeId: "ChIJL5LqxNjFYpYRUTbChz1eidM",
    nombre: "Esteticcan",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1488,
    placeId: "ChIJbSQhP4PdYpYR9KbUccs7NZw",
    nombre: "ExotiCare",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1489,
    placeId: "ChIJiyzIz0nOYpYR8cmOns7HWYo",
    nombre: "Exzootic",
    lat: -33.452840,
    lng: -70.565761,
    descripcion: "Veterinarias"
  },
  {
    id: 1490,
    placeId: "ChIJf7tNbeTOYpYRTIWEtLijQ74",
    nombre: "Fernando Montoya Aravena",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1491,
    placeId: "ChIJRSfyLnbPYpYRozsR1RRIymU",
    nombre: "Fonomascotas",
    lat: -33.438109,
    lng: -70.607048,
    descripcion: "Veterinarias"
  },
  {
    id: 1492,
    placeId: "ChIJs2vV2n_PYpYR9XHdeP51YnY",
    nombre: "GlobAnimal Clinica y Peluqueria Veterinaria",
    lat: -33.439402,
    lng: -70.620917,
    descripcion: "Veterinarias"
  },
  {
    id: 1493,
    placeId: "ChIJGTKq7FzDYpYROUb62kM8lU4",
    nombre: "Grimau",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1494,
    placeId: "ChIJm5WTnjHBYpYRwEdlIHAA5uM",
    nombre: "Happy Feet",
    lat: -33.381688,
    lng: -70.718774,
    descripcion: "Veterinarias"
  },
  {
    id: 1495,
    placeId: "ChIJfXTREQPPYpYRJSITDp-XukM",
    nombre: "HappyVet",
    lat: -33.425501,
    lng: -70.577861,
    descripcion: "Veterinarias"
  },
  {
    id: 1496,
    placeId: "ChIJrSEw_WjFYpYRNSx7ssDdx3o",
    nombre: "Hidalgo Dermatologia Veterinaria",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1497,
    placeId: "ChIJOyHabhjdYpYR83jikWQnEXg",
    nombre: "Hospital Clinico Puppy Vets Maipu",
    lat: -33.530086,
    lng: -70.776294,
    descripcion: "Veterinarias"
  },
  {
    id: 1498,
    placeId: "ChIJG8ShSgDFYpYRN4853Z3Z-2o",
    nombre: "Hospital Clinico Veterinario - UNAB Santiago",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1499,
    placeId: "ChIJT5PYl9fPYpYRyzId2EPAEUM",
    nombre: "Hospital Clinico Veterinario (Sede Bilbao) de la Universidad de Chile",
    lat: -33.435300,
    lng: -70.591482,
    descripcion: "Veterinarias"
  },
  {
    id: 1500,
    placeId: "ChIJWcwhnD3EYpYRsTGHybIAQjk",
    nombre: "Hospital Clinico Veterinario Austral",
    lat: -33.423021,
    lng: -70.692076,
    descripcion: "Veterinarias"
  },
  {
    id: 1501,
    placeId: "ChIJD2EOKW7EYpYRbHDQNk0yLFU",
    nombre: "Hospital Clinico Veterinario Blanqueado",
    lat: -33.440510,
    lng: -70.704886,
    descripcion: "Veterinarias"
  },
  {
    id: 1502,
    placeId: "ChIJxxvFB4jRYpYRcFs9tk2SzJc",
    nombre: "Hospital Clinico Veterinario MDK",
    lat: -33.535915,
    lng: -70.557026,
    descripcion: "Veterinarias"
  },
  {
    id: 1503,
    placeId: "ChIJQ8_3rgnRYpYRkARbQY9NmwM",
    nombre: "Hospital Clinico Veterinario Vethappy",
    lat: -33.521352,
    lng: -70.596440,
    descripcion: "Veterinarias"
  },
  {
    id: 1504,
    placeId: "ChIJjyOs3XbPYpYR6_2LKcidtDI",
    nombre: "Hospital MediVet",
    lat: -33.541734,
    lng: -70.663382,
    descripcion: "Veterinarias"
  },
  {
    id: 1505,
    placeId: "ChIJS91KFJDPYpYRAqXuNrHY_40",
    nombre: "Hospital Veterinario Aleman",
    lat: -33.451025,
    lng: -70.608566,
    descripcion: "Veterinarias"
  },
  {
    id: 1506,
    placeId: "ChIJbWj0TB7RYpYRbWfe0yUeDqc",
    nombre: "Hospital Veterinario Alto la Florida",
    lat: -33.538139,
    lng: -70.571993,
    descripcion: "Veterinarias"
  },
  {
    id: 1507,
    placeId: "ChIJSWlS6zfFYpYRqaKecszinn4",
    nombre: "Hospital Veterinario Animal Med",
    lat: -33.478685,
    lng: -70.646944,
    descripcion: "Veterinarias"
  },
  {
    id: 1508,
    placeId: "ChIJUwKuKEHFYpYRp8AIaXeM-fg",
    nombre: "Hospital Veterinario de Santiago",
    lat: -33.470884,
    lng: -70.641911,
    descripcion: "Veterinarias"
  },
  {
    id: 1509,
    placeId: "ChIJR8RaS6LIYpYRvK3QMaxJZDE",
    nombre: "Hospital Veterinario Docente Universidad Mayor",
    lat: -33.377883,
    lng: -70.613987,
    descripcion: "Veterinarias"
  },
  {
    id: 1510,
    placeId: "ChIJofKAVqTFYpYREFN_kpGmkIE",
    nombre: "Hospital Veterinario Esteticcan (Animal Pets)",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1511,
    placeId: "ChIJC1VmcsTLYpYRwypRJcMJVgk",
    nombre: "Hospital Veterinario Global Vet",
    lat: -33.352439,
    lng: -70.510250,
    descripcion: "Veterinarias"
  },
  {
    id: 1512,
    placeId: "ChIJCehgZWzFYpYRNnI17at416s",
    nombre: "Hospital Veterinario Independencia - HVI",
    lat: -33.414446,
    lng: -70.664891,
    descripcion: "Veterinarias"
  },
  {
    id: 1513,
    placeId: "ChIJyb_BBhrLYpYRuOhScXM1dgE",
    nombre: "Hospital Veterinario La Dehesa",
    lat: -33.351980,
    lng: -70.511905,
    descripcion: "Veterinarias"
  },
  {
    id: 1514,
    placeId: "ChIJJcK3NcHEYpYRY6TaF2E-Adw",
    nombre: "Hospital Veterinario Los Trineos",
    lat: -33.478732,
    lng: -70.688715,
    descripcion: "Veterinarias"
  },
  {
    id: 1515,
    placeId: "ChIJ6YSmzkLdYpYRxlioAV_8kLg",
    nombre: "Hospital Veterinario Maipu - HVM",
    lat: -33.551175,
    lng: -70.761500,
    descripcion: "Veterinarias"
  },
  {
    id: 1516,
    placeId: "ChIJ39nfQQDFYpYRZV_RWUkjAcE",
    nombre: "Hospital Veterinario Mofivets",
    lat: -33.431405,
    lng: -70.704021,
    descripcion: "Veterinarias"
  },
  {
    id: 1517,
    placeId: "ChIJMzGVJ2DFYpYRGWjFfI_CHD4",
    nombre: "Hospital Veterinario Nueva Ñuñoa",
    lat: -33.461824,
    lng: -70.608498,
    descripcion: "Veterinarias"
  },
  {
    id: 1518,
    placeId: "ChIJwbsSCCbEYpYRonsWvPfOA2I",
    nombre: "Hospital Veterinario Nueva Renca",
    lat: -33.413102,
    lng: -70.681966,
    descripcion: "Veterinarias"
  },
  {
    id: 1519,
    placeId: "ChIJxZb2DQDDYpYRLY5hZ0s401I",
    nombre: "Hospital Veterinario One Health",
    lat: -33.481262,
    lng: -70.744000,
    descripcion: "Veterinarias"
  },
  {
    id: 1520,
    placeId: "ChIJwUkIMY7LYpYRxJwQglWzwk0",
    nombre: "Hospital Veterinario Oriente",
    lat: -33.354989,
    lng: -70.511403,
    descripcion: "Veterinarias"
  },
  {
    id: 1521,
    placeId: "ChIJGTlgNZXPYpYRXAq4LlJUzCY",
    nombre: "Hospital Veterinario Pedro De Valdivia",
    lat: -33.459193,
    lng: -70.599267,
    descripcion: "Veterinarias"
  },
  {
    id: 1522,
    placeId: "ChIJK62gYvXEYpYRen-cO_skkDk",
    nombre: "Hospital Veterinario Trinidad",
    lat: -33.452360,
    lng: -70.690885,
    descripcion: "Veterinarias"
  },
  {
    id: 1523,
    placeId: "ChIJ045X0I3PYpYRsR6DW6OFjWM",
    nombre: "Hospital Veterinario Vecme",
    lat: -33.446727,
    lng: -70.586196,
    descripcion: "Veterinarias"
  },
  {
    id: 1524,
    placeId: "ChIJTQeNP3zDYpYRKa3pHzoM9VQ",
    nombre: "Hospital Veterinario Zoovet",
    lat: -33.468333,
    lng: -70.732494,
    descripcion: "Veterinarias"
  },
  {
    id: 1525,
    placeId: "ChIJGSb_vzDdYpYRN01P7Iid7tE",
    nombre: "INMEVET - Urgencias Veterinarias 24H",
    lat: -33.524218,
    lng: -70.775089,
    descripcion: "Veterinarias"
  },
  {
    id: 1526,
    placeId: "ChIJRWWF6RvDYpYRwkbZAoJbLa0",
    nombre: "INMEVET- El Rosal",
    lat: -33.477941,
    lng: -70.757043,
    descripcion: "Veterinarias"
  },
  {
    id: 1527,
    placeId: "ChIJPQvl9j_OYpYRIdNVuLOgqBI",
    nombre: "Instituto Neurologico y Especialidades Veterinarias",
    lat: -33.472788,
    lng: -70.629831,
    descripcion: "Veterinarias"
  },
  {
    id: 1528,
    placeId: "ChIJo2jhg_7OYpYRNIieqZRWkAI",
    nombre: "Integravet",
    lat: -33.427921,
    lng: -70.570759,
    descripcion: "Veterinarias"
  },
  {
    id: 1529,
    placeId: "ChIJbf6c_xXPYpYRhEIwglNNdL4",
    nombre: "Intovet",
    lat: -33.395592,
    lng: -70.579902,
    descripcion: "Veterinarias"
  },
  {
    id: 1530,
    placeId: "ChIJLdsl_qjFYpYR1r9x0Som4Zc",
    nombre: "JackSperrow San Miguel",
    lat: -33.488032,
    lng: -70.654047,
    descripcion: "Veterinarias"
  },
  {
    id: 1531,
    placeId: "ChIJ8U_ii07PYpYRZoIIKdb4RJY",
    nombre: "La Casa de mi Mascota",
    lat: -33.438351,
    lng: -70.576298,
    descripcion: "Veterinarias"
  },
  {
    id: 1532,
    placeId: "ChIJf4OP1nfEYpYR9QxLElj4RM0",
    nombre: "La Doc",
    lat: -33.442584,
    lng: -70.710575,
    descripcion: "Veterinarias"
  },
  {
    id: 1533,
    placeId: "ChIJlxK6INbdYpYRPkFPE7XVIpo",
    nombre: "La Pequeña Lulu",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1534,
    placeId: "ChIJfXWvA4XRYpYRm2wc-llaLPA",
    nombre: "La Sante Animale Veterinaria",
    lat: -33.489835,
    lng: -70.584326,
    descripcion: "Veterinarias"
  },
  {
    id: 1535,
    placeId: "ChIJ1bfim2bPYpYRQWw-6oOy6-s",
    nombre: "Lazy Pet",
    lat: -33.413855,
    lng: -70.575128,
    descripcion: "Veterinarias"
  },
  {
    id: 1536,
    placeId: "ChIJDUDedeTRYpYRPRR5cfEPvyM",
    nombre: "Lovmaipet",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1537,
    placeId: "ChIJEb0bL7fCYpYRE8dG6BVzsFs",
    nombre: "Lulu'Vet",
    lat: -33.503497,
    lng: -70.793580,
    descripcion: "Veterinarias"
  },
  {
    id: 1538,
    placeId: "ChIJofuWukrbYpYRV0K4eA_PC2c",
    nombre: "Lupivets",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1539,
    placeId: "ChIJF5H_MRvFYpYRKw2F4S8nlpE",
    nombre: "Mascovet",
    lat: -33.426365,
    lng: -70.641759,
    descripcion: "Veterinarias"
  },
  {
    id: 1540,
    placeId: "ChIJNT0Zq97bYpYRPDa-XzFZGKE",
    nombre: "Maskotitas Pets Centro Veterinario y Peluqueria Canina",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1541,
    placeId: "ChIJxXjTvYfGYpYR59urbUOzYGg",
    nombre: "Medico Veterinario a Domicilio",
    lat: -33.396959,
    lng: -70.671020,
    descripcion: "Veterinarias"
  },
  {
    id: 1542,
    placeId: "ChIJ53QmMgDRYpYRVnV_PWYOogg",
    nombre: "Medico Veterinario a Domicilio Ingrid Sandoval M",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1543,
    placeId: "ChIJS-Re9KbPYpYRsGKE7S1itRI",
    nombre: "Medico Veterinario Cardiólogo",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1544,
    placeId: "ChIJC3MMPYLZYpYRLSddzj6qMQY",
    nombre: "Mery's Vet",
    lat: -33.584122,
    lng: -70.667639,
    descripcion: "Veterinarias"
  },
  {
    id: 1545,
    placeId: "ChIJq6OYf5bbYpYR33UwkWgShoo",
    nombre: "Mi Mascota Chile Spa",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1546,
    placeId: "ChIJRW_Uwt7dYpYR9N0v0Qb_TCY",
    nombre: "Mireya House Vet",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1547,
    placeId: "ChIJgX64Rw_PYpYR9zoEIm-OeLs",
    nombre: "Moggie Cats Cia.",
    lat: -33.429487,
    lng: -70.587567,
    descripcion: "Veterinarias"
  },
  {
    id: 1548,
    placeId: "ChIJ0S1b09LPYpYR9t2f85ieGTo",
    nombre: "Morgana Vet",
    lat: -33.456527,
    lng: -70.609792,
    descripcion: "Veterinarias"
  },
  {
    id: 1549,
    placeId: "ChIJf0s_2GXPYpYRSzF4zqbkCcc",
    nombre: "Movet Medicina Veterinaria",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1550,
    placeId: "ChIJXWkeSaLPYpYR3-zGb3cuj2E",
    nombre: "Mundo Kahu",
    lat: -33.390058,
    lng: -70.563387,
    descripcion: "Veterinarias"
  },
  {
    id: 1551,
    placeId: "ChIJi-diONPaYpYR04djaMFcqxY",
    nombre: "Nación Animal Veterinaria",
    lat: -33.491772,
    lng: -70.661690,
    descripcion: "Veterinarias"
  },
  {
    id: 1552,
    placeId: "ChIJsbEjJJDPYpYRtxrGAL8cbxM",
    nombre: "Neuroplanet - Consulta Privada",
    lat: -33.439330,
    lng: -70.561888,
    descripcion: "Veterinarias"
  },
  {
    id: 1553,
    placeId: "ChIJNYmxGYnPYpYR_GvnJZ2eBgs",
    nombre: "Neurovet",
    lat: -33.437570,
    lng: -70.585347,
    descripcion: "Veterinarias"
  },
  {
    id: 1554,
    placeId: "ChIJDcwR6abbYpYRFF2lz57rIx0",
    nombre: "Nico MundoMascotas",
    lat: -33.526495,
    lng: -70.663247,
    descripcion: "Veterinarias"
  },
  {
    id: 1555,
    placeId: "ChIJv-Fb5TvdYpYRW3MhlDGEAVU",
    nombre: "Odontologia Veterinaria",
    lat: -33.416915,
    lng: -70.613185,
    descripcion: "Veterinarias"
  },
  {
    id: 1556,
    placeId: "ChIJdyv-NynPYpYRKc2-umRbYaM",
    nombre: "Odontologia Veterinaria Chile",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1557,
    placeId: "ChIJkcsRV1_OYpYRVuMoWmyBpvE",
    nombre: "Oftaderm",
    lat: -33.430715,
    lng: -70.555580,
    descripcion: "Veterinarias"
  },
  {
    id: 1558,
    placeId: "ChIJQdBp9WXFYpYRyWkkp1wHCjI",
    nombre: "OftalmovetChile",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1559,
    placeId: "ChIJDQ4VK8PbYpYRYGHN2NRZ2Cc",
    nombre: "Oh my Pet!",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1560,
    placeId: "ChIJFcxu-BDdYpYRqvOar_qv7BE",
    nombre: "Oncovet Plaza Maipu",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1561,
    placeId: "ChIJdeYeUPTOYpYR4MQnfEQiuuA",
    nombre: "Opcion Felina",
    lat: -33.426954,
    lng: -70.553894,
    descripcion: "Veterinarias"
  },
  {
    id: 1562,
    placeId: "ChIJQ_mfM23GYpYR1bTnp_zKjqs",
    nombre: "OPEVET",
    lat: -33.389501,
    lng: -70.645836,
    descripcion: "Veterinarias"
  },
  {
    id: 1563,
    placeId: "ChIJbWaBicHRYpYRiDVGE-SqKP4",
    nombre: "Patitas Vet",
    lat: -33.558074,
    lng: -70.600696,
    descripcion: "Veterinarias"
  },
  {
    id: 1564,
    placeId: "ChIJJ0a8StstgywRX8tNyxiirkk",
    nombre: "Paws to Go",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1565,
    placeId: "ChIJd7EM-crRYpYRKD6em40EcPg",
    nombre: "Peluqueria Canina y Veterinaria \"Paola\"",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1566,
    placeId: "ChIJUYqM4ELbYpYRtP7UYi4VtF4",
    nombre: "Peluvets Spa",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1567,
    placeId: "ChIJDY3B5p5jVWwRC8sUA8yR-hM",
    nombre: "Perros.cl",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1568,
    placeId: "ChIJDdu9qeDOYpYRH6VBiuLDdbI",
    nombre: "Pet Beauty and Boutique Del Inca",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1569,
    placeId: "ChIJ55qEvjtEdYgRb3YuLp8vNUA",
    nombre: "Pet Happy Arauco Maipu",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1570,
    placeId: "ChIJy6PlEejaYpYRWjInyyhZ6So",
    nombre: "Pet Happy Gran Avenida",
    lat: -33.511857,
    lng: -70.656792,
    descripcion: "Veterinarias"
  },
  {
    id: 1571,
    placeId: "ChIJQ_K2Y2nRYpYRThPuhjHXC90",
    nombre: "Pet Happy Jumbo Peñalolen",
    lat: -33.488131,
    lng: -70.556799,
    descripcion: "Veterinarias"
  },
  {
    id: 1572,
    placeId: "ChIJk6Hl3V_QYpYR_wlWMegCVjM",
    nombre: "Pet Happy La Florida",
    lat: -33.521120,
    lng: -70.595970,
    descripcion: "Veterinarias"
  },
  {
    id: 1573,
    placeId: "ChIJFQmh7aXPYpYR0wX2i5WCBHI",
    nombre: "Pet Happy Las Condes",
    lat: -33.402901,
    lng: -70.556320,
    descripcion: "Veterinarias"
  },
  {
    id: 1574,
    placeId: "ChIJm47PBy3QYpYRGiAaFrL3iuU",
    nombre: "Pet Happy Mall Paseo Quilin",
    lat: -33.463025,
    lng: -70.597390,
    descripcion: "Veterinarias"
  },
  {
    id: 1575,
    placeId: "ChIJixQECbnQYpYR0saEK0Na7Dg",
    nombre: "Pet Happy Pony Center",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1576,
    placeId: "ChIJgRJmxLbbYpYRLUhsLG5r8qw",
    nombre: "Pet Happy Tottus El Bosque",
    lat: -33.553638,
    lng: -70.675902,
    descripcion: "Veterinarias"
  },
  {
    id: 1577,
    placeId: "ChIJ0_O3PmrRYpYRaGKhkvFaIHg",
    nombre: "Pet Happy Tottus Quilín",
    lat: -33.499291,
    lng: -70.555250,
    descripcion: "Veterinarias"
  },
  {
    id: 1578,
    placeId: "ChIJFfNqyQPXYpYRDOJbck0yqYQ",
    nombre: "Pet Happy Vespucio",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1579,
    placeId: "ChIJWyXFztfcYpYROXPJgucUkco",
    nombre: "Pet Help",
    lat: -33.515702,
    lng: -70.763298,
    descripcion: "Veterinarias"
  },
  {
    id: 1580,
    placeId: "ChIJrUrSgIXEYpYRiTJNyTu9jKA",
    nombre: "Pet Lovers cl",
    lat: -33.462546,
    lng: -70.704875,
    descripcion: "Veterinarias"
  },
  {
    id: 1581,
    placeId: "ChIJ-4t6w7fFYpYRCHxiPGm0ZoI",
    nombre: "Pet Sania",
    lat: -33.426541,
    lng: -70.659196,
    descripcion: "Veterinarias"
  },
  {
    id: 1582,
    placeId: "ChIJb-icGDhmxGUR2NdpDRN3SWc",
    nombre: "Petpulse",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1583,
    placeId: "ChIJjdoiQB_PYpYR92D84jvg5eo",
    nombre: "PetsMann",
    lat: -33.413699,
    lng: -70.578676,
    descripcion: "Veterinarias"
  },
  {
    id: 1584,
    placeId: "ChIJF8xOvO_RYpYRLKkJUbCyzkU",
    nombre: "Planimal - Veterinario a Domicilio",
    lat: -33.512424,
    lng: -70.578435,
    descripcion: "Veterinarias"
  },
  {
    id: 1585,
    placeId: "ChIJEWDhfInbYpYR6WWg3TkIuNc",
    nombre: "Policlinico Veterinario La Cisterna",
    lat: -33.533085,
    lng: -70.669149,
    descripcion: "Veterinarias"
  },
  {
    id: 1586,
    placeId: "ChIJZ-aAQcTLYpYRfeAWJLDo70I",
    nombre: "Posta Veterinaria",
    lat: -33.351958,
    lng: -70.511869,
    descripcion: "Veterinarias"
  },
  {
    id: 1587,
    placeId: "ChIJf6D9KwTFYpYRf4R3QzhaCdM",
    nombre: "Premium Pet",
    lat: -33.453384,
    lng: -70.660821,
    descripcion: "Veterinarias"
  },
  {
    id: 1588,
    placeId: "ChIJNb2OF0fXYpYR39ajs7C8r6Y",
    nombre: "Provet",
    lat: -33.581926,
    lng: -70.600446,
    descripcion: "Veterinarias"
  },
  {
    id: 1589,
    placeId: "ChIJlcksGSNX300RiyJglgGSSHk",
    nombre: "PuppyGo",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1590,
    placeId: "ChIJxdAeKYHFYpYRtRPhObkNBfM",
    nombre: "Reino Salvaje",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1591,
    placeId: "ChIJQ8uIXnnPYpYRnrSLx3zNUYE",
    nombre: "Republica Animal",
    lat: -33.444865,
    lng: -70.565425,
    descripcion: "Veterinarias"
  },
  {
    id: 1592,
    placeId: "ChIJu37pO9bPYpYRoy8H0gRFpIY",
    nombre: "Rincon Vet",
    lat: -33.444762,
    lng: -70.585673,
    descripcion: "Veterinarias"
  },
  {
    id: 1593,
    placeId: "ChIJsw60uxPFYpYRLgLRZnofvYE",
    nombre: "Rivet Mascotas",
    lat: -33.487211,
    lng: -70.667755,
    descripcion: "Veterinarias"
  },
  {
    id: 1594,
    placeId: "ChIJd6LIJwrFYpYRk4CUSD_E_IA",
    nombre: "Ruka Kulliñ",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1595,
    placeId: "ChIJTeSVO7LOYpYRT8GxjBYNKdk",
    nombre: "Rukapet",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1596,
    placeId: "ChIJrw1ELgDDYpYRWfmKcMH6IWs",
    nombre: "Salupet",
    lat: -33.460366,
    lng: -70.742239,
    descripcion: "Veterinarias"
  },
  {
    id: 1597,
    placeId: "ChIJnzIHWC7EYpYR2VB24uQMwY4",
    nombre: "Santiago Animal Vet",
    lat: -33.417589,
    lng: -70.674898,
    descripcion: "Veterinarias"
  },
  {
    id: 1598,
    placeId: "ChIJt0aS7KbPYpYRIZzPAketSUY",
    nombre: "Santiago Pet Store",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1599,
    placeId: "ChIJM7-QDPrFYpYR42h47j0ifio",
    nombre: "Seavet Clinica Veterinaria",
    lat: -33.403173,
    lng: -70.660580,
    descripcion: "Veterinarias"
  },
  {
    id: 1600,
    placeId: "ChIJC_ShmWTDYpYRWoUrlsmDAU4",
    nombre: "Server Mascotas",
    lat: -33.469753,
    lng: -70.723131,
    descripcion: "Veterinarias"
  },
  {
    id: 1601,
    placeId: "ChIJ7QPbsxgVd0gRdmOSZrjELWo",
    nombre: "Servicios vet oftalmo",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1602,
    placeId: "ChIJ6UiruqvcYpYRWgiZMcKXVbo",
    nombre: "Sociedad Clinica Veterinaria Maxipets Limitada",
    lat: -33.503754,
    lng: -70.720744,
    descripcion: "Veterinarias"
  },
  {
    id: 1603,
    placeId: "ChIJn_7RI55o4YsRZseIwiYkcXU",
    nombre: "SofiasVet Veterinaria a Domicilio en Santiago",
    lat: -33.544473,
    lng: -70.615090,
    descripcion: "Veterinarias"
  },
  {
    id: 1604,
    placeId: "ChIJuw4IPhnPYpYRGLSMOGwxHP0",
    nombre: "Spacio Tribal Centro Médico Veterinario",
    lat: -33.433482,
    lng: -70.601498,
    descripcion: "Veterinarias"
  },
  {
    id: 1605,
    placeId: "ChIJ9Xy3OFnOYpYRuIVpqi5y0-k",
    nombre: "Su Veterinaria",
    lat: -33.434852,
    lng: -70.557425,
    descripcion: "Veterinarias"
  },
  {
    id: 1606,
    placeId: "ChIJQcVnJfPPYpYR_MDRRPtVnNQ",
    nombre: "The Cool Cats House",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1607,
    placeId: "ChIJY0ayq_3FYpYRj1Y-lRCxnOk",
    nombre: "Tienda Mundo Pet´s",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1608,
    placeId: "ChIJ75aCcBPbYpYRK-LDc5jw2yM",
    nombre: "Tommy Pet’s",
    lat: -33.517333,
    lng: -70.628199,
    descripcion: "Veterinarias"
  },
  {
    id: 1609,
    placeId: "ChIJ21hGxFDPYpYR5o7TfFf5Xy0",
    nombre: "Tus Mascotas - Ñuñoa",
    lat: -33.460807,
    lng: -70.579914,
    descripcion: "Veterinarias"
  },
  {
    id: 1610,
    placeId: "ChIJpdMcwcHXYpYRIXBRN38l2Xc",
    nombre: "TutiVet Veterinarias",
    lat: -33.602634,
    lng: -70.576321,
    descripcion: "Veterinarias"
  },
  {
    id: 1611,
    placeId: "ChIJOZCNUADPYpYRQVnN0z_Tyr8",
    nombre: "Tuvet Veterinaria y Peluqueria",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1612,
    placeId: "ChIJHdMNCjUpL40ROXKCBhENKSc",
    nombre: "Ukavet",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1613,
    placeId: "ChIJN4LNs9h0RCIRQIuTyRIE0u8",
    nombre: "Unidad Veterinaria Movil",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1614,
    placeId: "ChIJff_L_IjPYpYRjjab6WhJ5d0",
    nombre: "UniversoPet",
    lat: -33.448329,
    lng: -70.576211,
    descripcion: "Veterinarias"
  },
  {
    id: 1615,
    placeId: "ChIJ8Ws3G7zaYpYRKKiN1CD4ZCA",
    nombre: "Urgencias Veterinarias San Miguel",
    lat: -33.504177,
    lng: -70.639274,
    descripcion: "Veterinarias"
  },
  {
    id: 1616,
    placeId: "ChIJn_JEVxh9kC4RkvszYthOzjU",
    nombre: "Valeria Castillo MV",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1617,
    placeId: "ChIJcVuzlGHPYpYRr8Fy_ADznI4",
    nombre: "ValVet - Veterinaria Pocuro",
    lat: -33.431152,
    lng: -70.586010,
    descripcion: "Veterinarias"
  },
  {
    id: 1618,
    placeId: "ChIJaReCcOPFYpYRqnzaUj-TTA8",
    nombre: "Vet Central",
    lat: -33.462552,
    lng: -70.698470,
    descripcion: "Veterinarias"
  },
  {
    id: 1619,
    placeId: "ChIJ5wExbPRzAA8Roay1puBtOVc",
    nombre: "Vet En Casa",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1620,
    placeId: "ChIJU75jwmbJYpYRidzJLhiSSDU",
    nombre: "Vet Friends Veterinaria",
    lat: -33.379474,
    lng: -70.538150,
    descripcion: "Veterinarias"
  },
  {
    id: 1621,
    placeId: "ChIJEzc_TWfGYpYRj-Q_QiwCpm0",
    nombre: "Vet Planet",
    lat: -33.384042,
    lng: -70.663261,
    descripcion: "Veterinarias"
  },
  {
    id: 1622,
    placeId: "ChIJAwYa3QnHYpYR3hOXJ8iPg9c",
    nombre: "Vet Rodeo",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1623,
    placeId: "ChIJUbrd65TFYpYRKS4M5j7VkEc",
    nombre: "Vet.PeluCan",
    lat: -33.422383,
    lng: -70.659872,
    descripcion: "Veterinarias"
  },
  {
    id: 1624,
    placeId: "ChIJyawzrKbPYpYR0vttnP7eN2w",
    nombre: "Vet24",
    lat: -33.443622,
    lng: -70.582083,
    descripcion: "Veterinarias"
  },
  {
    id: 1625,
    placeId: "ChIJ4V1KTlPEYpYRbqsfi3xEVFg",
    nombre: "Vetcamas",
    lat: -33.442730,
    lng: -70.669744,
    descripcion: "Veterinarias"
  },
  {
    id: 1626,
    placeId: "ChIJq6oG-sbOYpYRmWJ9pNSxKE4",
    nombre: "VetdermChile - Las Condes (Av. Las Condes)",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1627,
    placeId: "ChIJRb9TswbPYpYRgkHJg84lx8k",
    nombre: "VetdermChile - Las Condes (Juan de Austria)",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1628,
    placeId: "ChIJkYySpsPLYpYRgPsqs-_9w9E",
    nombre: "VetdermChile - Lo Barnechea",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1629,
    placeId: "ChIJqe2zJS_fFysRL5IvOwtkjlw",
    nombre: "Veterimedi",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1630,
    placeId: "ChIJf0BhBOHRYpYRZUmRHhrz1fM",
    nombre: "Veterinaria - Centro Esterilizacion Dra. Mariola",
    lat: -33.475437,
    lng: -70.546734,
    descripcion: "Veterinarias"
  },
  {
    id: 1631,
    placeId: "ChIJbdaEXzrdYpYR9EcoTk90LBE",
    nombre: "Veterinaria 3 Poniente",
    lat: -33.530650,
    lng: -70.775764,
    descripcion: "Veterinarias"
  },
  {
    id: 1632,
    placeId: "ChIJu_lF5afdYpYRYjhpd_pvysk",
    nombre: "Veterinaria 5 de Abril",
    lat: -33.510061,
    lng: -70.744500,
    descripcion: "Veterinarias"
  },
  {
    id: 1633,
    placeId: "ChIJA-0Kxn-SQacRGCq8-CSIrPQ",
    nombre: "Veterinaria a Domicilio ElyVet",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1634,
    placeId: "ChIJPwpOLzfOAqwRGxU4facyL4E",
    nombre: "Veterinaria a Domicilio Kariolys Yoris",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1635,
    placeId: "ChIJy8nRYN7ZYpYRYP7wIoKgjEc",
    nombre: "Veterinaria a Domicilio RVM",
    lat: -33.592287,
    lng: -70.703619,
    descripcion: "Veterinarias"
  },
  {
    id: 1636,
    placeId: "ChIJx1kLXXvDYpYRvDWz9pC1Pto",
    nombre: "Veterinaria a Domicilio RVM Poniente",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1637,
    placeId: "ChIJ85wEs7bPYpYRT7GLsBKzEmU",
    nombre: "Veterinaria a Domicilio Santiago",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1638,
    placeId: "ChIJrZhSRVPOYpYRkjL5oqIZtYc",
    nombre: "Veterinaria a Domicilio Santiago Dr Cafati",
    lat: -33.431261,
    lng: -70.567384,
    descripcion: "Veterinarias"
  },
  {
    id: 1639,
    placeId: "ChIJdytV-7zDYpYRfARrVzMmmVw",
    nombre: "Veterinaria Alma Vet Maipu",
    lat: -33.487416,
    lng: -70.762879,
    descripcion: "Veterinarias"
  },
  {
    id: 1640,
    placeId: "ChIJBeug1PfOYpYRBoLGYowT3SE",
    nombre: "Veterinaria Alto Bilbao",
    lat: -33.430893,
    lng: -70.559241,
    descripcion: "Veterinarias"
  },
  {
    id: 1641,
    placeId: "ChIJfxiwz83bYpYRVw_fJRJrE-M",
    nombre: "Veterinaria Animal Live",
    lat: -33.566175,
    lng: -70.674300,
    descripcion: "Veterinarias"
  },
  {
    id: 1642,
    placeId: "ChIJc7alJj_DYpYRsDeJFRvQRKE",
    nombre: "Veterinaria Animal Wellness",
    lat: -33.434741,
    lng: -70.776561,
    descripcion: "Veterinarias"
  },
  {
    id: 1643,
    placeId: "ChIJbe-okNvRYpYR-1g8WhdPDZU",
    nombre: "Veterinaria Animalia",
    lat: -33.481333,
    lng: -70.557225,
    descripcion: "Veterinarias"
  },
  {
    id: 1644,
    placeId: "ChIJ_Q2Wrn3XYpYRN1Uw9-qchw0",
    nombre: "Veterinaria AnimalKoki",
    lat: -33.577973,
    lng: -70.609554,
    descripcion: "Veterinarias"
  },
  {
    id: 1645,
    placeId: "ChIJ_1o6TCTbYpYRayVN3WUoveg",
    nombre: "Veterinaria AnimalMarket",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1646,
    placeId: "ChIJme2EhEnQYpYRO2FH-P5VUyQ",
    nombre: "Veterinaria Antares (Peñalolen)",
    lat: -33.501652,
    lng: -70.580760,
    descripcion: "Veterinarias"
  },
  {
    id: 1647,
    placeId: "ChIJ_XjCHKXdYpYR80EDfe1EpX4",
    nombre: "Veterinaria AntcoVet",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1648,
    placeId: "ChIJh3O3-63bYpYRYqoM2bhnflw",
    nombre: "Veterinaria Baquedano",
    lat: -33.557998,
    lng: -70.666969,
    descripcion: "Veterinarias"
  },
  {
    id: 1649,
    placeId: "ChIJAaNbJ6jEYpYRwJhIc2Jnj8s",
    nombre: "Veterinaria Bicentenario",
    lat: -33.490636,
    lng: -70.716732,
    descripcion: "Veterinarias"
  },
  {
    id: 1650,
    placeId: "ChIJxdpa2ZPDYpYRjbuioV7bgQw",
    nombre: "Veterinaria Bobby Lo Prado",
    lat: -33.444848,
    lng: -70.728123,
    descripcion: "Veterinarias"
  },
  {
    id: 1651,
    placeId: "ChIJj3xxHPnbYpYRsjIvqfguYlw",
    nombre: "Veterinaria Cesar Vet",
    lat: -33.561180,
    lng: -70.663911,
    descripcion: "Veterinarias"
  },
  {
    id: 1652,
    placeId: "ChIJYaaf4yLbYpYRTheemhWoCyA",
    nombre: "Veterinaria Clara Estrella - Vargasvet",
    lat: -33.512985,
    lng: -70.679131,
    descripcion: "Veterinarias"
  },
  {
    id: 1653,
    placeId: "ChIJ05X6ntfRYpYRW4lW8X0EgXA",
    nombre: "Veterinaria Clifford",
    lat: -33.485228,
    lng: -70.666152,
    descripcion: "Veterinarias"
  },
  {
    id: 1654,
    placeId: "ChIJu7FNDCDPYpYR9gCuKJt7y4c",
    nombre: "Veterinaria Clino Pet",
    lat: -33.410685,
    lng: -70.574654,
    descripcion: "Veterinarias"
  },
  {
    id: 1655,
    placeId: "ChIJI4Fd2HXJYpYRIrY9bjy7HZw",
    nombre: "Veterinaria Del Valle",
    lat: -33.342946,
    lng: -70.544691,
    descripcion: "Veterinarias"
  },
  {
    id: 1656,
    placeId: "ChIJ65csI_PGYpYRSJae-plzCF8",
    nombre: "Veterinaria Diego Silva",
    lat: -33.384335,
    lng: -70.677435,
    descripcion: "Veterinarias"
  },
  {
    id: 1657,
    placeId: "ChIJda-DJxbRYpYRLhBYmu2iJiM",
    nombre: "Veterinaria Doctora Pet",
    lat: -33.507584,
    lng: -70.552035,
    descripcion: "Veterinarias"
  },
  {
    id: 1658,
    placeId: "ChIJifQmTYzbYpYRWaHgKr60kNw",
    nombre: "Veterinaria Dr Todo Animal",
    lat: -33.501547,
    lng: -70.657930,
    descripcion: "Veterinarias"
  },
  {
    id: 1659,
    placeId: "ChIJmbx4awXHYpYRRYp0WejZX18",
    nombre: "Veterinaria Dr. House Vet",
    lat: -33.345540,
    lng: -70.670706,
    descripcion: "Veterinarias"
  },
  {
    id: 1660,
    placeId: "ChIJT60Tzd_RYpYRpD-mm73WJEY",
    nombre: "Veterinaria Dr. Leon",
    lat: -33.475417,
    lng: -70.551146,
    descripcion: "Veterinarias"
  },
  {
    id: 1661,
    placeId: "ChIJrbQvzdrBYpYRf4GPv2-Kuec",
    nombre: "Veterinaria Dr. Roguer",
    lat: -33.364662,
    lng: -70.721363,
    descripcion: "Veterinarias"
  },
  {
    id: 1662,
    placeId: "ChIJl5l6BwTdYpYRGqI3ymGUuyc",
    nombre: "Veterinaria El Abrazo",
    lat: -33.545586,
    lng: -70.770335,
    descripcion: "Veterinarias"
  },
  {
    id: 1663,
    placeId: "ChIJHTTa7enRYpYRSsdetDrNHuQ",
    nombre: "Veterinaria el Roble Peñalolen",
    lat: -33.487615,
    lng: -70.549571,
    descripcion: "Veterinarias"
  },
  {
    id: 1664,
    placeId: "ChIJV06zbdnLYpYRRblemJZ6mRQ",
    nombre: "Veterinaria el Rodeo",
    lat: -33.347630,
    lng: -70.670400,
    descripcion: "Veterinarias"
  },
  {
    id: 1665,
    placeId: "ChIJNT5yc3bOYpYR3JstvPrqfX4",
    nombre: "Veterinaria El Rodeo",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1666,
    placeId: "ChIJz4bcEg3dYpYRHHxZN-W8BOY",
    nombre: "Veterinaria El Vergel",
    lat: -33.543818,
    lng: -70.784767,
    descripcion: "Veterinarias"
  },
  {
    id: 1667,
    placeId: "ChIJNZKD67TDYpYRXCCeaeREM5I",
    nombre: "Veterinaria Espoz La Estrella",
    lat: -33.444031,
    lng: -70.753617,
    descripcion: "Veterinarias"
  },
  {
    id: 1668,
    placeId: "ChIJnwCJo4bEYpYRG9M3ZyXHcDk",
    nombre: "Veterinaria Estacion Central",
    lat: -33.462056,
    lng: -70.709817,
    descripcion: "Veterinarias"
  },
  {
    id: 1669,
    placeId: "ChIJn2lUb1TDYpYRPlwE30zQGCw",
    nombre: "Veterinaria Fossey",
    lat: -33.480327,
    lng: -70.732943,
    descripcion: "Veterinarias"
  },
  {
    id: 1670,
    placeId: "ChIJ8fB2OujDYpYRkqM6xxznoe8",
    nombre: "Veterinaria Francisco de Asís",
    lat: -33.430101,
    lng: -70.739730,
    descripcion: "Veterinarias"
  },
  {
    id: 1671,
    placeId: "ChIJ5QWBeWvFYpYRJpe6fcEL_JQ",
    nombre: "Veterinaria Furry Pet's",
    lat: -33.421383,
    lng: -70.719308,
    descripcion: "Veterinarias"
  },
  {
    id: 1672,
    placeId: "ChIJ4UAFdhzPYpYRaKkCq8pgxrY",
    nombre: "Veterinaria Go Vet",
    lat: -33.426016,
    lng: -70.553708,
    descripcion: "Veterinarias"
  },
  {
    id: 1673,
    placeId: "ChIJ28QbVj2rt5URi7AAga75DqM",
    nombre: "Veterinaria Guau & Miau - Sucursal Asuncion",
    lat: -33.501968,
    lng: -70.785517,
    descripcion: "Veterinarias"
  },
  {
    id: 1674,
    placeId: "ChIJMV0FLgnDYpYRWjoNttbl0Ys",
    nombre: "Veterinaria Guau & Miau - Sucursal Las Torres",
    lat: -33.473250,
    lng: -70.731606,
    descripcion: "Veterinarias"
  },
  {
    id: 1675,
    placeId: "ChIJicdo3HfDYpYR-qBX8SQqjLQ",
    nombre: "Veterinaria Gutierrez",
    lat: -33.471882,
    lng: -70.743558,
    descripcion: "Veterinarias"
  },
  {
    id: 1676,
    placeId: "ChIJ0cABwsPPYpYR0LG-eRsmcgI",
    nombre: "Veterinaria HamburgoPatitas",
    lat: -33.464622,
    lng: -70.593443,
    descripcion: "Veterinarias"
  },
  {
    id: 1677,
    placeId: "ChIJMY-lO-bWYpYRVGim7e7zNFA",
    nombre: "Veterinaria Happy Animal Mexico",
    lat: -33.586934,
    lng: -70.562975,
    descripcion: "Veterinarias"
  },
  {
    id: 1678,
    placeId: "ChIJlfKuvI7DYpYRk1D-BYQyLD0",
    nombre: "Veterinaria Haustier",
    lat: -33.479641,
    lng: -70.757206,
    descripcion: "Veterinarias"
  },
  {
    id: 1679,
    placeId: "ChIJ2dkswvDPYpYRpNLgP0XeQ70",
    nombre: "Veterinaria Hijos",
    lat: -33.443216,
    lng: -70.614491,
    descripcion: "Veterinarias"
  },
  {
    id: 1680,
    placeId: "ChIJR_c1lrnbYpYRrAHhz4oF3R4",
    nombre: "Veterinaria Holipets",
    lat: -33.561224,
    lng: -70.665107,
    descripcion: "Veterinarias"
  },
  {
    id: 1681,
    placeId: "ChIJUUfGlvnbYpYRwdj3NG5qdi4",
    nombre: "Veterinaria Honuvet - El Parron",
    lat: -33.527804,
    lng: -70.652412,
    descripcion: "Veterinarias"
  },
  {
    id: 1682,
    placeId: "ChIJ8y9-3O_aYpYRgt-xeMTfDNQ",
    nombre: "Veterinaria Honuvet - Freire",
    lat: -33.521627,
    lng: -70.655510,
    descripcion: "Veterinarias"
  },
  {
    id: 1683,
    placeId: "ChIJGdL7AwDDYpYRgbs4x3scKJI",
    nombre: "Veterinaria Huella y Vida",
    lat: -33.447170,
    lng: -70.739290,
    descripcion: "Veterinarias"
  },
  {
    id: 1684,
    placeId: "ChIJB6u02wTEYpYReuqgbx05YIg",
    nombre: "Veterinaria Huellitas Pet",
    lat: -33.418521,
    lng: -70.707155,
    descripcion: "Veterinarias"
  },
  {
    id: 1685,
    placeId: "ChIJxVILZ1DBYpYRzjh7sfdGNMM",
    nombre: "Veterinaria Infante",
    lat: -33.406775,
    lng: -70.735117,
    descripcion: "Veterinarias"
  },
  {
    id: 1686,
    placeId: "ChIJgaPXTZzRYpYREaz0Eta9wFw",
    nombre: "Veterinaria Infinito",
    lat: -33.522403,
    lng: -70.596932,
    descripcion: "Veterinarias"
  },
  {
    id: 1687,
    placeId: "ChIJXzsX0E3EYpYRnVd88KG64w8",
    nombre: "Veterinaria Integral Vet",
    lat: -33.436856,
    lng: -70.674659,
    descripcion: "Veterinarias"
  },
  {
    id: 1688,
    placeId: "ChIJmSog9bfPYpYRe-_KdRM0ZmE",
    nombre: "Veterinaria Integravet Nuñoa",
    lat: -33.455760,
    lng: -70.585691,
    descripcion: "Veterinarias"
  },
  {
    id: 1689,
    placeId: "ChIJP73ec-3OYpYR4XQHYbbs2XU",
    nombre: "Veterinaria IV Centenario",
    lat: -33.424795,
    lng: -70.546628,
    descripcion: "Veterinarias"
  },
  {
    id: 1690,
    placeId: "ChIJZ7j2UADbYpYReYcCa4L2y9Y",
    nombre: "Veterinaria Jamaica",
    lat: -33.559223,
    lng: -70.623133,
    descripcion: "Veterinarias"
  },
  {
    id: 1691,
    placeId: "ChIJi2xMwQzbYpYR9CQJXkmdcUU",
    nombre: "Veterinaria Kentucky - La Granja",
    lat: -33.519703,
    lng: -70.621775,
    descripcion: "Veterinarias"
  },
  {
    id: 1692,
    placeId: "ChIJC3JPv5bLYpYR9u7pwSOMQNQ",
    nombre: "Veterinaria Kirevet",
    lat: -33.351747,
    lng: -70.510619,
    descripcion: "Veterinarias"
  },
  {
    id: 1693,
    placeId: "ChIJuUO7rD_HYpYRWBaa0EAITzQ",
    nombre: "Veterinaria La Palmilla",
    lat: -33.379791,
    lng: -70.672443,
    descripcion: "Veterinarias"
  },
  {
    id: 1694,
    placeId: "ChIJ4cEB4UbDYpYRU0ChHJGxG00",
    nombre: "Veterinaria Las Golondrinas",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1695,
    placeId: "ChIJUd_hrHrDYpYR0VAYRQJ5dJ8",
    nombre: "Veterinaria Los Solares",
    lat: -33.469202,
    lng: -70.728256,
    descripcion: "Veterinarias"
  },
  {
    id: 1696,
    placeId: "ChIJH5EDE5LdYpYRM5q9ERkmWc8",
    nombre: "Veterinaria Los Tilos",
    lat: -33.509751,
    lng: -70.730009,
    descripcion: "Veterinarias"
  },
  {
    id: 1697,
    placeId: "ChIJwQqUUwDFYpYRILqc28kiLOc",
    nombre: "Veterinaria Lourdes Pet",
    lat: -33.437913,
    lng: -70.691557,
    descripcion: "Veterinarias"
  },
  {
    id: 1698,
    placeId: "ChIJjUGGTgDbYpYRnAfe41Za5To",
    nombre: "Veterinaria Lukitas",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1699,
    placeId: "ChIJF5pIeqjPYpYR0xQwyW2XMUY",
    nombre: "Veterinaria Malas Pulgas",
    lat: -33.437484,
    lng: -70.585651,
    descripcion: "Veterinarias"
  },
  {
    id: 1700,
    placeId: "ChIJfTVm_IXZYpYR6f1CicH-ggM",
    nombre: "Veterinaria Marvets",
    lat: -33.582064,
    lng: -70.657935,
    descripcion: "Veterinarias"
  },
  {
    id: 1701,
    placeId: "ChIJh3RQU-TPYpYRerHZBB7IMn4",
    nombre: "Veterinaria Mascotilandy",
    lat: -33.464056,
    lng: -70.592556,
    descripcion: "Veterinarias"
  },
  {
    id: 1702,
    placeId: "ChIJ3ZsNxsjCYpYRIs_m1gAyeV0",
    nombre: "Veterinaria Medical Vet",
    lat: -33.501390,
    lng: -70.783160,
    descripcion: "Veterinarias"
  },
  {
    id: 1703,
    placeId: "ChIJVbgdnsrDYpYRfIOqLHf8PiA",
    nombre: "Veterinaria Medical Vet Las Rosas",
    lat: -33.490313,
    lng: -70.742425,
    descripcion: "Veterinarias"
  },
  {
    id: 1704,
    placeId: "ChIJUZ8fjzfQYpYRPzWQ5BuTK0E",
    nombre: "Veterinaria MedVet",
    lat: -33.436289,
    lng: -70.574134,
    descripcion: "Veterinarias"
  },
  {
    id: 1705,
    placeId: "ChIJsVSTpLzbYpYRUNaX5XR-4So",
    nombre: "Veterinaria Mi Mascota",
    lat: -33.546603,
    lng: -70.666723,
    descripcion: "Veterinarias"
  },
  {
    id: 1706,
    placeId: "ChIJXTOjMzDBYpYRwSBAFpG27eE",
    nombre: "Veterinaria MisterVet",
    lat: -33.383507,
    lng: -70.726052,
    descripcion: "Veterinarias"
  },
  {
    id: 1707,
    placeId: "ChIJy1YaF8rQYpYRqkw-9XPbfvg",
    nombre: "Veterinaria Mota",
    lat: -33.562041,
    lng: -70.596678,
    descripcion: "Veterinarias"
  },
  {
    id: 1708,
    placeId: "ChIJb2QWwtfcYpYRNuzR2kbF_to",
    nombre: "Veterinaria Mota Mascota",
    lat: -33.516689,
    lng: -70.763179,
    descripcion: "Veterinarias"
  },
  {
    id: 1709,
    placeId: "ChIJn11r9hF4QEARp2VdVFqN6k8",
    nombre: "Veterinaria Movil La Granja",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1710,
    placeId: "ChIJV0GEx53PYpYR2ewq8nGitAc",
    nombre: "Veterinaria MSVET - Medicina y Salud Veterinaria",
    lat: -33.453495,
    lng: -70.582478,
    descripcion: "Veterinarias"
  },
  {
    id: 1711,
    placeId: "ChIJtx92DH3RYpYRRPC7Pz5iJjs",
    nombre: "Veterinaria Munay",
    lat: -33.506450,
    lng: -70.575709,
    descripcion: "Veterinarias"
  },
  {
    id: 1712,
    placeId: "ChIJfRAuXHbDYpYRfsYTSsgL-HE",
    nombre: "Veterinaria Mundo Animal",
    lat: -33.461409,
    lng: -70.733076,
    descripcion: "Veterinarias"
  },
  {
    id: 1713,
    placeId: "ChIJ2x_IKXnJwQsRGS-xePpzF7s",
    nombre: "Veterinaria MVI a domicilio -",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1714,
    placeId: "ChIJlypGOwDRYpYRcJmnQ8Y3j9c",
    nombre: "Veterinaria NicoVet",
    lat: -33.557211,
    lng: -70.581409,
    descripcion: "Veterinarias"
  },
  {
    id: 1715,
    placeId: "ChIJP1_h88rRYpYRSeFsJa6ynBg",
    nombre: "Veterinaria Noe",
    lat: -33.494064,
    lng: -70.578655,
    descripcion: "Veterinarias"
  },
  {
    id: 1716,
    placeId: "ChIJS8Ce6gLbYpYRZExsseCAKQA",
    nombre: "Veterinaria Nueva Vida",
    lat: -33.526147,
    lng: -70.670853,
    descripcion: "Veterinarias"
  },
  {
    id: 1717,
    placeId: "ChIJORP-OWXFYpYReluyteLkIrY",
    nombre: "Veterinaria Onlypatitas",
    lat: -33.481327,
    lng: -70.664611,
    descripcion: "Veterinarias"
  },
  {
    id: 1718,
    placeId: "ChIJQyQN-MbOYpYRaP-Pxed8WEo",
    nombre: "Veterinaria Oriente",
    lat: -33.400814,
    lng: -70.553879,
    descripcion: "Veterinarias"
  },
  {
    id: 1719,
    placeId: "ChIJ-fXNO0TbYpYRZk5Y6pDlAiQ",
    nombre: "Veterinaria Patitas de Amor",
    lat: -33.565379,
    lng: -70.677652,
    descripcion: "Veterinarias"
  },
  {
    id: 1720,
    placeId: "ChIJQ1SeilLBYpYRaNPvzckA9sI",
    nombre: "Veterinaria Payllahue",
    lat: -33.404279,
    lng: -70.719750,
    descripcion: "Veterinarias"
  },
  {
    id: 1721,
    placeId: "ChIJybc1Bh7PYpYRl7yh13fdb20",
    nombre: "Veterinaria Pet Hunter",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1722,
    placeId: "ChIJI5r2AxbQYpYRLtWRoh7RCL8",
    nombre: "Veterinaria Pet Life",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1723,
    placeId: "ChIJl09-JEzPYpYRHkGeqthS2gc",
    nombre: "Veterinaria Pet Native",
    lat: -33.421213,
    lng: -70.594716,
    descripcion: "Veterinarias"
  },
  {
    id: 1724,
    placeId: "ChIJadvuT0jRYpYRaTVtyXBehL8",
    nombre: "Veterinaria Petdiatra Macul",
    lat: -33.485358,
    lng: -70.596325,
    descripcion: "Veterinarias"
  },
  {
    id: 1725,
    placeId: "ChIJr2QrlLnOYpYRM6AfEI9_Rb4",
    nombre: "Veterinaria PetSalud",
    lat: -33.398198,
    lng: -70.545615,
    descripcion: "Veterinarias"
  },
  {
    id: 1726,
    placeId: "ChIJV8eZvADHYpYRznW3WvZqY-w",
    nombre: "Veterinaria Piedra Roja",
    lat: -33.358543,
    lng: -70.670518,
    descripcion: "Veterinarias"
  },
  {
    id: 1727,
    placeId: "ChIJxw1eefTPYpYRLgF8v-_eDeo",
    nombre: "Veterinaria Ponzano - Oftalmología",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1728,
    placeId: "ChIJH9w6a9_cYpYR1u-DZ93Zj6I",
    nombre: "Veterinaria Porloskiltros",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1729,
    placeId: "ChIJf-pyZ-HRYpYRwhhUicPakVY",
    nombre: "Veterinaria Portal Mayor",
    lat: -33.475957,
    lng: -70.544859,
    descripcion: "Veterinarias"
  },
  {
    id: 1730,
    placeId: "ChIJ_Z56KTXJYpYR2GlIVBrpFGI",
    nombre: "Veterinaria Premev (Pet&Co)",
    lat: -33.386631,
    lng: -70.553227,
    descripcion: "Veterinarias"
  },
  {
    id: 1731,
    placeId: "ChIJ94gNt_LGYpYRNOYXvGmwpB8",
    nombre: "Veterinaria Premium Pet's Conchalí",
    lat: -33.385400,
    lng: -70.680108,
    descripcion: "Veterinarias"
  },
  {
    id: 1732,
    placeId: "ChIJ725HdivHYpYRGOjvRWge-qw",
    nombre: "Veterinaria Premium Pet's Quilicura",
    lat: -33.364933,
    lng: -70.713818,
    descripcion: "Veterinarias"
  },
  {
    id: 1733,
    placeId: "ChIJM3UzxWnEYpYRPlPL2e9NUSQ",
    nombre: "Veterinaria Quinta Normal",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1734,
    placeId: "ChIJF3ThydbPYpYRmtQ1cN-73ow",
    nombre: "Veterinaria Ramón Cruz",
    lat: -33.473057,
    lng: -70.581260,
    descripcion: "Veterinarias"
  },
  {
    id: 1735,
    placeId: "ChIJEeh6tD_FYpYRupjLVDzJ3Ww",
    nombre: "Veterinaria Roccologia",
    lat: -33.459885,
    lng: -70.707029,
    descripcion: "Veterinarias"
  },
  {
    id: 1736,
    placeId: "ChIJ1ycIOV3BYpYR9H9m-iR3acU",
    nombre: "Veterinaria San Benildo",
    lat: -33.406862,
    lng: -70.738794,
    descripcion: "Veterinarias"
  },
  {
    id: 1737,
    placeId: "ChIJ_dYFoe_PYpYRPaizit8cP9s",
    nombre: "Veterinaria San Bruno",
    lat: -33.451909,
    lng: -70.598653,
    descripcion: "Veterinarias"
  },
  {
    id: 1738,
    placeId: "ChIJvz5i0MzFYpYRpu3UhkAPysg",
    nombre: "Veterinaria San Gabriel",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1739,
    placeId: "ChIJ84b4jEnXYpYRPn2F_xnbLRA",
    nombre: "Veterinaria San Gabriel Puente Alto",
    lat: -33.574379,
    lng: -70.599355,
    descripcion: "Veterinarias"
  },
  {
    id: 1740,
    placeId: "ChIJj9GK_g7PYpYRSHLEbB-ySMo",
    nombre: "Veterinaria San José",
    lat: -33.428099,
    lng: -70.589154,
    descripcion: "Veterinarias"
  },
  {
    id: 1741,
    placeId: "ChIJOayL67LRYpYRo0LysKPlpnw",
    nombre: "Veterinaria San Luis",
    lat: -33.507151,
    lng: -70.572284,
    descripcion: "Veterinarias"
  },
  {
    id: 1742,
    placeId: "ChIJdwVGXhTbYpYRhaR54YP0_sw",
    nombre: "Veterinaria San Vicente - Lo Espejo",
    lat: -33.520849,
    lng: -70.689820,
    descripcion: "Veterinarias"
  },
  {
    id: 1743,
    placeId: "ChIJESaA7JLBYpYRTb49VfIx97Y",
    nombre: "Veterinaria San Vicente - Renca",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1744,
    placeId: "ChIJH8hmwvrFYpYRTXH2s_jTX-s",
    nombre: "Veterinaria Sandoval Petcare",
    lat: -33.432547,
    lng: -70.673449,
    descripcion: "Veterinarias"
  },
  {
    id: 1745,
    placeId: "ChIJpQw5WQDbYpYREYxyC5rPkrY",
    nombre: "Veterinaria Santa Adriana",
    lat: -33.511796,
    lng: -70.675572,
    descripcion: "Veterinarias"
  },
  {
    id: 1746,
    placeId: "ChIJ5cKNvIDPYpYR_onYHYdgfss",
    nombre: "Veterinaria Santa Ciencia",
    lat: -33.403988,
    lng: -70.531813,
    descripcion: "Veterinarias"
  },
  {
    id: 1747,
    placeId: "ChIJZ1p_E7nQYpYRFOyOiWmwEL0",
    nombre: "Veterinaria Santa Raquel",
    lat: -33.553038,
    lng: -70.602338,
    descripcion: "Veterinarias"
  },
  {
    id: 1748,
    placeId: "ChIJ9cd67J_aYpYRxarQC3ZwEiQ",
    nombre: "Veterinaria Santa Teresa",
    lat: -33.507998,
    lng: -70.621901,
    descripcion: "Veterinarias"
  },
  {
    id: 1749,
    placeId: "ChIJufx35cPAYpYR5w-O9i_zXRU",
    nombre: "Veterinaria Territorio Animal Quilicura",
    lat: -33.357588,
    lng: -70.735618,
    descripcion: "Veterinarias"
  },
  {
    id: 1750,
    placeId: "ChIJW8dp8APdYpYRbeyBejJ-tAU",
    nombre: "Veterinaria Top Animal",
    lat: -33.549145,
    lng: -70.766890,
    descripcion: "Veterinarias"
  },
  {
    id: 1751,
    placeId: "ChIJsWzEpX_PYpYRuC6atr6m26U",
    nombre: "Veterinaria TopCat",
    lat: -33.450231,
    lng: -70.620541,
    descripcion: "Veterinarias"
  },
  {
    id: 1752,
    placeId: "ChIJlUpxWt7bYpYRKU3gnoKSyDk",
    nombre: "Veterinaria Tora ge",
    lat: -33.523315,
    lng: -70.623814,
    descripcion: "Veterinarias"
  },
  {
    id: 1753,
    placeId: "ChIJw3jby4vRYpYRUq1PohT761w",
    nombre: "Veterinaria Totoro",
    lat: -33.516649,
    lng: -70.605563,
    descripcion: "Veterinarias"
  },
  {
    id: 1754,
    placeId: "ChIJZ3iwxKXDYpYRO3kzm4PNeF8",
    nombre: "Veterinaria Travesia Spa",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1755,
    placeId: "ChIJ8dPemFbbYpYRyVA1LSByBDc",
    nombre: "Veterinaria UniverZoo",
    lat: -33.515482,
    lng: -70.667376,
    descripcion: "Veterinarias"
  },
  {
    id: 1756,
    placeId: "ChIJr3JU1ejOYpYRPL7u8IIDDlY",
    nombre: "Veterinaria Van Doll",
    lat: -33.414903,
    lng: -70.559179,
    descripcion: "Veterinarias"
  },
  {
    id: 1757,
    placeId: "ChIJ_cTul_DbYpYR_5Yb5KtcFfk",
    nombre: "Veterinaria Vet Company",
    lat: -33.573000,
    lng: -70.709332,
    descripcion: "Veterinarias"
  },
  {
    id: 1758,
    placeId: "ChIJyxt3WRvFYpYRHIqzl6E6bhA",
    nombre: "Veterinaria Vetarzan",
    lat: -33.439162,
    lng: -70.658919,
    descripcion: "Veterinarias"
  },
  {
    id: 1759,
    placeId: "ChIJs-OaXdrPYpYRQI54UtThlsc",
    nombre: "Veterinaria Veter & Staff",
    lat: -33.470961,
    lng: -70.587840,
    descripcion: "Veterinarias"
  },
  {
    id: 1760,
    placeId: "ChIJcxGIUpnbYpYRqV7XzsH38Yk",
    nombre: "Veterinaria VetFriend",
    lat: -33.441979,
    lng: -70.709504,
    descripcion: "Veterinarias"
  },
  {
    id: 1761,
    placeId: "ChIJ4ZyyJbrPYpYRIRPNO6ppbbk",
    nombre: "Veterinaria Vetline Limitada",
    lat: -33.451405,
    lng: -70.588054,
    descripcion: "Veterinarias"
  },
  {
    id: 1762,
    placeId: "ChIJBWvk0RjbYpYRTFg0IBaXmN8",
    nombre: "Veterinaria Vida de Perros",
    lat: -33.521489,
    lng: -70.695804,
    descripcion: "Veterinarias"
  },
  {
    id: 1763,
    placeId: "ChIJG_CSOY_GYpYRDwu4liM1MKE",
    nombre: "Veterinaria Vivacetavet",
    lat: -33.394383,
    lng: -70.676000,
    descripcion: "Veterinarias"
  },
  {
    id: 1764,
    placeId: "ChIJzUAt7ezFYpYRDUW2x2CX4QU",
    nombre: "Veterinaria VSP",
    lat: -33.573111,
    lng: -70.834108,
    descripcion: "Veterinarias"
  },
  {
    id: 1765,
    placeId: "ChIJZc6-XJbFYpYR_0NcThOXXi8",
    nombre: "Veterinaria y Peluquería Club Mascota",
    lat: -33.489332,
    lng: -70.673859,
    descripcion: "Veterinarias"
  },
  {
    id: 1766,
    placeId: "ChIJPRhLXyDOYpYRA-IuJqqzDjo",
    nombre: "Veterinaria y Peluquería Diana",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1767,
    placeId: "ChIJY2X_0ZnFYpYR_CCPcrJffck",
    nombre: "Veterinaria y Peluqueria PetWild",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1768,
    placeId: "ChIJL5pirYvbYpYRUTFxlXHYH2U",
    nombre: "Veterinaria y Peluquería San Valentín",
    lat: -33.542559,
    lng: -70.665353,
    descripcion: "Veterinarias"
  },
  {
    id: 1769,
    placeId: "ChIJvSVvRPknkg4R4Jd9_d4IEtk",
    nombre: "Veterinario a Domicilio Movil",
    lat: -33.485006,
    lng: -70.651840,
    descripcion: "Veterinarias"
  },
  {
    id: 1770,
    placeId: "ChIJX_mLdXrZXogRBkR5RLOAngU",
    nombre: "Veterinario Emanuel Reyes",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1771,
    placeId: "ChIJub9QSLnFYpYRXQ7YdkoHzdg",
    nombre: "Veterinario Joaquin Diaz",
    lat: -33.455355,
    lng: -70.691485,
    descripcion: "Veterinarias"
  },
  {
    id: 1772,
    placeId: "ChIJ5-2g3JDOYpYR3m8T_QSrn-E",
    nombre: "Veterinary Center Padre Hurtado",
    lat: -33.400702,
    lng: -70.544721,
    descripcion: "Veterinarias"
  },
  {
    id: 1773,
    placeId: "ChIJgfco14XJYpYRFz9ECan81I8",
    nombre: "Veterinary Medical Center",
    lat: -33.408468,
    lng: -70.564581,
    descripcion: "Veterinarias"
  },
  {
    id: 1774,
    placeId: "ChIJaRONQd7FYpYRiYrxXT63NTc",
    nombre: "VetFamily",
    lat: -33.485020,
    lng: -70.658486,
    descripcion: "Veterinarias"
  },
  {
    id: 1775,
    placeId: "ChIJQ_Ka88Ins0oRkh9phF6wBow",
    nombre: "Vetfelina.cl - Dra. Claudia Morales Fornells",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1776,
    placeId: "ChIJg9Jv2SPPYpYRn-yqtFe4mQU",
    nombre: "Vethouse Veterinaria",
    lat: -33.429464,
    lng: -70.548062,
    descripcion: "Veterinarias"
  },
  {
    id: 1777,
    placeId: "ChIJb12BLb07X4QRy7j3HVfPWY0",
    nombre: "Vetivery - Veterinario y Peluquero de Mascotas a Domicilio",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1778,
    placeId: "ChIJo6GXg-zFYpYRkRoFAWUPLb0",
    nombre: "Vetlivery Santiago",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1779,
    placeId: "ChIJnwEiT2XFYpYRAUO76JXEHlU",
    nombre: "Vetmontt",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1780,
    placeId: "ChIJ-57uwl_FYpYRZWS0lAEqTmM",
    nombre: "VetPet Santiago",
    lat: -33.416736,
    lng: -70.658176,
    descripcion: "Veterinarias"
  },
  {
    id: 1781,
    placeId: "ChIJk71syG3PYpYRI0t6clQ7feQ",
    nombre: "VetPoint",
    lat: -33.438375,
    lng: -70.570505,
    descripcion: "Veterinarias"
  },
  {
    id: 1782,
    placeId: "ChIJs-Zz79DPYpYRlVYKBxiaCkA",
    nombre: "VetPortugal - Medicina Digestiva Veterinaria",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1783,
    placeId: "ChIJfYEW3R_RYpYRotMBSymFs-g",
    nombre: "VetRock Veterinarias",
    lat: -33.537644,
    lng: -70.572177,
    descripcion: "Veterinarias"
  },
  {
    id: 1784,
    placeId: "ChIJc2C7UR3aYmsRddmfW7Nah3k",
    nombre: "VetSmart - Veterinaria a Domicilio",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1785,
    placeId: "ChIJzY23t83FYpYRxMERALcjY60",
    nombre: "Vetsurgery Clínica Veterinaria",
    lat: -33.492581,
    lng: -70.599537,
    descripcion: "Veterinarias"
  },
  {
    id: 1786,
    placeId: "ChIJd4AuPUzFYpYRwaeq7I6hMVA",
    nombre: "Vett Veterinaria y Peluquería",
    lat: -33.482130,
    lng: -70.694754,
    descripcion: "Veterinarias"
  },
  {
    id: 1787,
    placeId: "ChIJe4frmn_PYpYRtZxOwIS-WNc",
    nombre: "Vidavet",
    lat: -33.440097,
    lng: -70.619442,
    descripcion: "Veterinarias"
  },
  {
    id: 1788,
    placeId: "ChIJP_ZLefvPYpYRNvyf065zzio",
    nombre: "Vip Pet Veterinaria",
    lat: -33.439566,
    lng: -70.613119,
    descripcion: "Veterinarias"
  },
  {
    id: 1789,
    placeId: "ChIJ5QerdQ_FYpYRi4w7YTc6N20",
    nombre: "Woof & Meow Pet",
    lat: nan,
    lng: nan,
    descripcion: "Veterinarias"
  },
  {
    id: 1790,
    placeId: "ChIJjW19eWjDYpYRrMzpOHW5CfE",
    nombre: "YanicaninosPet",
    lat: -33.430950,
    lng: -70.758180,
    descripcion: "Veterinarias"
  },
  {
    id: 1791,
    placeId: "ChIJnzhaXtTAYpYRnAAjuHaykCU",
    nombre: "Zoointegramed",
    lat: -33.366857,
    lng: -70.720494,
    descripcion: "Veterinarias"
  },
  {
    id: 1792,
    placeId: "ChIJXUa5oEDPYpYR83hHMsrO01k",
    nombre: "Zoonosis La Reina",
    lat: -33.452382,
    lng: -70.529131,
    descripcion: "Veterinarias"
  },
  {
    id: 1793,
    placeId: "ChIJNa5iRiTOYpYRgqDwFqww5os",
    nombre: "Zoonosis Peñalolen",
    lat: -33.467049,
    lng: -70.559024,
    descripcion: "Veterinarias"
  },
];

export default serviciosPetChile;
];

// MOSTRAR SERVICIOS EN EL MAPA
servicios.forEach((s) => {
  const marker = L.marker([s.lat, s.lng]).addTo(map);

  const popupHtml = `
    <div>
      <strong>${s.nombre}</strong><br>
      <small>${s.descripcion}</small><br>
    </div>
  `;

  marker.bindPopup(popupHtml);

  // EJEMPLO: cuando se haga click al marcador, imprimes el placeId
  marker.on("click", () => {
    console.log("PLACE ID:", s.placeId);

    // Aquí puedes enviar a Adalo
    // window.postMessage(s.placeId);
  });
});
