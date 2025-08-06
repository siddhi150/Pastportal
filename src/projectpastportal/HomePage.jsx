import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import separate CSS file

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const HomePage = () => {
  const navigate = useNavigate();
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [filteredInventions, setFilteredInventions] = useState([]);
  const [selectedEra, setSelectedEra] = useState('');

 const inventionsData = [
  {
    name: 'Antikythera Mechanism',
    era: 'Ancient',
    lat: 36.8,
    lng: 23.5,
    desc: 'An ancient Greek analog computer used to predict astronomical positions and eclipses.',
    image:'https://www.researchgate.net/publication/264389831/figure/fig13/AS:669678783442957@1536675272417/Exploded-computer-reconstruction-of-the-Antikythera-Mechanism-On-the-left-the-front.png',
       },
  {
    name: 'Printing Press',
    era: 'Renaissance',
    lat: 49.99,
    lng: 8.27,
    desc: 'Invented by Johannes Gutenberg, it revolutionized the production of books in Europe.',
    image:'https://t4.ftcdn.net/jpg/00/74/53/23/360_F_74532304_K7pQhnCfkLasKAN6DKzzaqFJv3XSMwAX.jpg',
     },
  {
    name: 'Steam Engine',
    era: 'Industrial',
    lat: 51.5,
    lng: -0.12,
    desc: "James Watt's improved steam engine drove the Industrial Revolution.",
    image:'https://i.ytimg.com/vi/P3F20t6PoYQ/maxresdefault.jpg',
        },
  {
    name: 'Internet',
    era: 'Modern',
    lat: 37.4,
    lng: -122.1,
    desc: 'A global system of interconnected computer networks originating in the late 20th century.',
    image: 'https://images.saymedia-content.com/.image/t_share/MTc2Mjg4ODUwMDk4NzkxNTk3/famous-inventions-of-the-20th-century.jpg',
       },
  {
    name: 'Electricity',
    era: 'Modern',
    lat: 39.0,
    lng: -77.0,
    desc: 'The discovery and harnessing of electricity transformed the world.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHxuf-OEgPMg5E8Ja5SXmKX610qkRRqe74g&s',
  },
{
      name: 'Telephone',
      era: 'Modern',
      lat: 42.0,
      lng: -71.0,
      desc: "Alexander Graham Bell's invention revolutionized communication.",
      image: 'https://m.media-amazon.com/images/I/71affGlkNtL.jpg'
    },
    {
      name: 'Wheel',
      era: 'Ancient',
      lat: 33.3,
      lng: 44.4,
      desc: 'One of the earliest inventions in Mesopotamia that revolutionized transport and machinery.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcsYd77gq-NzSeNA3h_uzovJMWfi_4T66xQ&s'
    },
    {
      name: 'Gunpowder',
      era: 'Medieval',
      lat: 34.0,
      lng: 108.9,
      desc: 'Invented in China, gunpowder transformed warfare and weaponry in the medieval era.',
      image: 'https://danielyuan12.files.wordpress.com/2013/08/imagescacc9e9n2.jpg'
    },
    {
      name: 'Compass',
      era: 'Medieval',
      lat: 31.2,
      lng: 121.5,
      desc: 'The magnetic compass allowed accurate navigation and fueled the Age of Exploration.',
      image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/compass-on-old-texture-dny59.jpg'
    },
    {
      name: 'Telescope',
      era: 'Renaissance',
      lat: 52.0,
      lng: 5.1,
      desc: 'Developed in the Netherlands, and later used by Galileo to explore the heavens.',
      image: 'https://www.pbs.org/wgbh/nova/media/images/inventing-telescopes-01.width-990_aMDNQeV.jpg'
    },
    {
      name: 'Light Bulb',
      era: 'Industrial',
      lat: 40.7,
      lng: -74.0,
      desc: 'Thomas Edison’s practical electric light bulb illuminated homes and cities worldwide.',
      image: 'https://www.electricalapparatus.net/wp-content/uploads/thomas-edison-inventions.jpeg'
    },
    {
      name: 'Airplane',
      era: 'Modern',
      lat: 39.7,
      lng: -84.1,
      desc: 'The Wright brothers achieved the first powered flight in 1903, revolutionizing travel.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBSKRhCHag25JCVJ36LyEHiq9vBdJLOosuzYxLKnJXGtz86vsVxXRRlW0Mf5CmwXoee8&usqp=CAU'
    },
    {
      name: 'Computer',
      era: 'Modern',
      lat: 51.5,
      lng: -0.1,
      desc: 'The development of computers in the 20th century transformed information processing.',
      image: 'https://images.saymedia-content.com/.image/t_share/MTc2Mjg4ODUwMDk4NzkxNTk3/famous-inventions-of-the-20th-century.jpg'
    },
    {
      name: 'Vaccination',
      era: 'Modern',
      lat: 51.75,
      lng: -1.25,
      desc: 'Edward Jenner’s smallpox vaccine laid the foundation for modern immunology.',
      image: 'https://chinaobservers.eu/wp-content/uploads/2022/09/covid-still-life-with-vaccine-2-e1664458442814.jpg'
    },
    {
      name: 'Radio',
      era: 'Modern',
      lat: 45.0,
      lng: 7.7,
      desc: 'Guglielmo Marconi’s invention allowed wireless communication across long distances.',
      image: 'https://services.meteored.com/img/article/sono-passati-150-anni-dalla-nascita-inventore-della-radio-guglielmo-marconi-1714385160875_512.jpg'
    },

     {
      name: 'Paper',
      era: 'Ancient',
      lat: 34.2,
      lng: 108.9,
      desc: 'Invented in China around 105 AD, paper revolutionized record-keeping and communication.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Ancient_Chinese_Paper.jpg'
    },
    {
      name: 'Concrete',
      era: 'Ancient',
      lat: 41.9,
      lng: 12.5,
      desc: 'Developed by the Romans, concrete allowed the creation of massive enduring structures.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Roman_Concrete_Wall.jpg'
    },
    {
      name: 'Mechanical Clock',
      era: 'Medieval',
      lat: 51.5,
      lng: -0.12,
      desc: 'Medieval Europe developed mechanical clocks, improving timekeeping accuracy.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Salisbury_Cathedral_clock.jpg'
    },
    {
      name: 'Stirrups',
      era: 'Medieval',
      lat: 35.0,
      lng: 103.0,
      desc: 'Stirrups originated in China, transforming cavalry tactics and medieval warfare.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Ancient_Chinese_Stirrup.jpg'
    },
    {
      name: 'Microscope',
      era: 'Renaissance',
      lat: 51.9,
      lng: 4.5,
      desc: 'Invented in the Netherlands, the microscope opened the door to microbiology.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Antoni_van_Leeuwenhoek_Microscope.jpg'
    },
    {
      name: 'Locomotive',
      era: 'Industrial',
      lat: 55.0,
      lng: -1.6,
      desc: 'George Stephenson’s steam locomotive pioneered modern railway transport.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Rocket_001.jpg'
    },
    {
 name: 'Photography',
      era: 'Industrial',
      lat: 48.85,
      lng: 2.35,
      desc: 'Louis Daguerre and Joseph Nicéphore Niépce developed photography in the 19th century.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Daguerreotype_camera.jpg'
    },
    {
      name: 'Television',
      era: 'Modern',
      lat: 55.9,
      lng: -3.2,
      desc: 'Developed in the early 20th century, television transformed global entertainment and communication.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/First_TV_Set.jpg'
    },
    {
      name: 'Penicillin',
      era: 'Modern',
      lat: 51.5,
      lng: -0.13,
      desc: 'Discovered by Alexander Fleming in 1928, penicillin revolutionized medicine as the first true antibiotic.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Alexander_Fleming_Laboratory.jpg'
    },
    {
      name: 'Satellite',
      era: 'Modern',
      lat: 28.6,
      lng: 77.2,
      desc: 'Sputnik and later satellites revolutionized communication, navigation, and space exploration.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Sputnik_1.jpg'
    },

      {
      name: 'Abacus',
      era: 'Ancient',
      lat: 34.3,
      lng: 108.9,
      desc: 'An ancient calculating tool used in Mesopotamia, China, and Egypt for arithmetic operations.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Suanpan_abacus_2.jpg'
    },
    {
      name: 'Water Mill',
      era: 'Ancient',
      lat: 37.9,
      lng: 23.7,
      desc: 'Used in ancient Greece and Rome to grind grain and power simple machinery with flowing water.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Ancient_water_mill.jpg'
    },
    {
      name: 'Windmill',
      era: 'Medieval',
      lat: 52.1,
      lng: 5.1,
      desc: 'First developed in Persia and popularized in Europe for grinding grain and pumping water.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Dutch_windmill.jpg'
    },
    {
      name: 'Astrolabe',
      era: 'Medieval',
      lat: 36.7,
      lng: 3.0,
      desc: 'An ancient astronomical device used by Islamic scholars to measure celestial positions for navigation.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Astrolabe_Mariner.jpg'
    },
    {
      name: 'Printing with Movable Type',
      era: 'Renaissance',
      lat: 35.0,
      lng: 103.0,
      desc: 'Bi Sheng in China invented movable clay type printing in the 11th century, a precursor to Gutenberg’s press.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Movable_Type_Printing.jpg'
    },
    {
      name: 'Parachute',
      era: 'Renaissance',
      lat: 45.4,
      lng: 9.2,
      desc: 'Concepts by Leonardo da Vinci led to parachute designs to safely descend from heights.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Da_Vinci_Parachute.jpg'
    },
    {
      name: 'Battery',
      era: 'Industrial',
      lat: 45.1,
      lng: 7.7,
      desc: 'Alessandro Volta created the first electric battery in 1800, enabling portable power.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Voltaic_pile.jpg'
    },
    {
      name: 'Typewriter',
      era: 'Industrial',
      lat: 40.7,
      lng: -74.0,
      desc: 'The typewriter revolutionized writing efficiency in the 19th century, shaping modern communication.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Remington_typewriter.jpg'
    },
    {
      name: 'Nuclear Reactor',
      era: 'Modern',
      lat: 41.8,
      lng: -87.6,
      desc: 'The first controlled nuclear chain reaction took place in Chicago in 1942, leading to nuclear energy.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Chicago_Pile-1.jpg'
    },
    {
      name: 'Smartphone',
      era: 'Modern',
      lat: 37.3,
      lng: -122.0,
      desc: 'Combining computing, communication, and multimedia, smartphones revolutionized modern life.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/IPhone_1st_gen.jpg'
    }



];


  // Initialize Leaflet map
  useEffect(() => {
    const mapInstance = L.map('map').setView([20, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(mapInstance);

    setMap(mapInstance);
    setFilteredInventions(inventionsData);
    updateMarkers(inventionsData, mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, []);

  // Update map markers
  const updateMarkers = (inventions, mapInstance = map) => {
    if (!mapInstance) return;

    // Remove old markers
    markers.forEach((marker) => mapInstance.removeLayer(marker));
    const newMarkers = inventions.map((inv) => {
      const marker = L.marker([inv.lat, inv.lng]).addTo(mapInstance);
      // marker.bindPopup(`
      //   <strong>${inv.name}</strong><br>
      //   ${inv.desc}<br>
      //   <img src="${inv.image}" width="150">
      // `);
      const popupContent = document.createElement("div");
popupContent.innerHTML = `
  <strong>${inv.name}</strong><br>
  ${inv.desc}<br>
  <img src="${inv.image}" width="150" style="margin-top: 8px;" />
`;
marker.bindPopup(popupContent);

      return marker;
    });

    setMarkers(newMarkers);
  };

  // Filter inventions by era
  const filterInventions = (era) => {
    setSelectedEra(era);
    const filtered = inventionsData.filter(
      (inv) => inv.era === era || era === ''
    );
    setFilteredInventions(filtered);
    updateMarkers(filtered);
  };

  // Search by name
  const searchLocation = () => {
    const searchValue = document
      .getElementById('searchInput')
      .value.trim()
      .toLowerCase();
    const searchResults = inventionsData.filter((inv) =>
      inv.name.toLowerCase().includes(searchValue)
    );
    setFilteredInventions(searchResults);
    updateMarkers(searchResults);
  };

  return (
    <div className="homepage-container">
      {/* Filter Options */}
      <div className="filter-controls">
        <label htmlFor="eraSelect">Filter by Era:</label>
        <select
          id="eraSelect"
          value={selectedEra}
          onChange={(e) => filterInventions(e.target.value)}
        >
          <option value="">All</option>
          <option value="Ancient">Ancient</option>
          <option value="Medieval">Medieval</option>
          <option value="Renaissance">Renaissance</option>
          <option value="Industrial">Industrial</option>
          <option value="Modern">Modern</option>
        </select>
      </div>

      {/* Search Controls */}
      <div className="controls">
        <input
          type="text"
          id="searchInput"
          placeholder="Search invention or place"
        />
        <button onClick={searchLocation}>Search</button>
      </div>

      {/* Map */}
      <div id="map"></div>

      {/* Featured Inventions */}
      <section className="featured-inventions">
        <h2>Featured Inventions</h2>
        <div className="invention-grid">
          {filteredInventions.map((inv) => (
            <div className="invention-card" key={inv.name}>
              <img src={inv.image} alt={inv.name} />
              <h3>{inv.name}</h3>
              <p>{inv.desc}</p>
              <button onClick={() => alert(`More about ${inv.name}`)}>
                 Learn More
                 </button>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;



// import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import { useNavigate } from 'react-router-dom';
// import './HomePage.css';

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//   iconUrl:
//     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   shadowUrl:
//     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// });

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [map, setMap] = useState(null);
//   const [markers, setMarkers] = useState([]);
//   const [filteredInventions, setFilteredInventions] = useState([]);
//   const [selectedEra, setSelectedEra] = useState('');

//   const inventionsData = [
//     {
//       name: 'Antikythera Mechanism',
//       era: 'Ancient',
//       lat: 36.8,
//       lng: 23.5,
//       desc: 'An ancient Greek analog computer used to predict astronomical positions and eclipses.',
//       image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Antikythera_mechanism.jpg',
//     },
//     {
//       name: 'Printing Press',
//       era: 'Renaissance',
//       lat: 49.99,
//       lng: 8.27,
//       desc: 'Invented by Johannes Gutenberg, it revolutionized the production of books in Europe.',
//       image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Gutenberg_press.jpg',
//     },
//     {
//       name: 'Steam Engine',
//       era: 'Industrial',
//       lat: 51.5,
//       lng: -0.12,
//       desc: "James Watt's improved steam engine drove the Industrial Revolution.",
//       image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Watt_steam_engine.jpg',
//     },
//     {
//       name: 'Internet',
//       era: 'Modern',
//       lat: 37.4,
//       lng: -122.1,
//       desc: 'A global system of interconnected computer networks originating in the late 20th century.',
//       image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Internet_map_1024.jpg',
//     },
//     {
//       name: 'Electricity',
//       era: 'Modern',
//       lat: 39.0,
//       lng: -77.0,
//       desc: 'The discovery and harnessing of electricity transformed the world.',
//       image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Thomas_Edison%2C_1880.jpg',
//     },
//     // Add more inventions here using external image URLs if needed...
//   ];

//   useEffect(() => {
//     const mapInstance = L.map('map').setView([20, 0], 2);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 18,
//     }).addTo(mapInstance);

//     setMap(mapInstance);
//     setFilteredInventions(inventionsData);
//     updateMarkers(inventionsData, mapInstance);

//     return () => {
//       mapInstance.remove();
//     };
//   }, []);

//   const updateMarkers = (inventions, mapInstance = map) => {
//     if (!mapInstance) return;
//     markers.forEach((marker) => mapInstance.removeLayer(marker));
//     const newMarkers = inventions.map((inv) => {
//       const marker = L.marker([inv.lat, inv.lng]).addTo(mapInstance);
//       marker.bindPopup(`
//         <strong>${inv.name}</strong><br>
//         ${inv.desc}<br>
//         <img src="${inv.image}" width="150">
//       `);
//       return marker;
//     });
//     setMarkers(newMarkers);
//   };

//   const filterInventions = (era) => {
//     setSelectedEra(era);
//     const filtered = inventionsData.filter(
//       (inv) => inv.era === era || era === ''
//     );
//     setFilteredInventions(filtered);
//     updateMarkers(filtered);
//   };

//   const searchLocation = () => {
//     const searchValue = document.getElementById('searchInput').value.trim().toLowerCase();
//     const searchResults = inventionsData.filter((inv) =>
//       inv.name.toLowerCase().includes(searchValue)
//     );
//     setFilteredInventions(searchResults);
//     updateMarkers(searchResults);
//   };

//   return (
//     <div className="homepage-container">
//       <div className="controls-container">
//         <select
//           id="eraSelect"
//           value={selectedEra}
//           onChange={(e) => filterInventions(e.target.value)}
//         >
//           <option value="">All Eras</option>
//           <option value="Ancient">Ancient</option>
//           <option value="Medieval">Medieval</option>
//           <option value="Renaissance">Renaissance</option>
//           <option value="Industrial">Industrial</option>
//           <option value="Modern">Modern</option>
//         </select>

//         <input type="text" id="searchInput" placeholder="Search invention or place" />
//         <button onClick={searchLocation}>Search</button>
//       </div>

//       <div id="map"></div>

//       <section className="featured-inventions">
//         <h2>Featured Inventions</h2>
//         <div className="invention-grid">
//           {filteredInventions.map((inv) => (
//             <div className="invention-card" key={inv.name}>
//               <img src={inv.image} alt={inv.name} />
//               <h3>{inv.name}</h3>
//               <p>{inv.desc}</p>
//               <button onClick={() => alert(`More about ${inv.name}`)}>
//                 Learn More
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;
