// import React, { useState } from 'react';
// import './Inventions.css'; // Ensure you have this CSS file

// const Inventions = () => {
// const inventions = [
//   // --- Existing 15 items from your list (kept) ---

//   {
//     name: "Antikythera Mechanism",
//     desc: "An ancient Greek analog computer used to predict astronomical positions.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Antikythera_mechanism.jpg",
//     keyPoints: [
//       "Developed in ancient Greece around 150-100 BC.",
//       "Used for astronomical calculations.",
//       "Considered the world's first analog computer."
//     ]
//   },
//   {
//     name: "Baghdad Battery",
//     desc: "Believed to be an ancient galvanic cell used for electroplating or experimentation.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Baghdad_Battery.jpg",
//     keyPoints: [
//       "Discovered in Iraq, dating back to 250 BC.",
//       "Could generate a small electric current.",
//       "Possibly used for electroplating gold."
//     ]
//   },
//   {
//     name: "Printing Press",
//     desc: "Invented by Johannes Gutenberg, it revolutionized the spread of knowledge.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Gutenberg_press.jpg",
//     keyPoints: [
//       "Introduced in the 15th century.",
//       "Enabled mass production of books.",
//       "Facilitated the spread of the Renaissance."
//     ]
//   },
//   {
//     name: "Steam Engine",
//     desc: "James Watt’s powerful engine fueled the Industrial Revolution.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Watt_steam_engine.jpg",
//     keyPoints: [
//       "Developed in the late 18th century.",
//       "Transformed transportation and manufacturing.",
//       "Key driver of the Industrial Revolution."
//     ]
//   },
//   {
//     name: "Internet",
//     desc: "A global network that changed the way we connect, communicate, and learn.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Internet_map_1024.jpg",
//     keyPoints: [
//       "Originated in the late 20th century.",
//       "Facilitated instant communication worldwide.",
//       "Enabled the rise of social media and e-commerce."
//     ]
//   },
//   {
//     name: "Telephone",
//     desc: "Alexander Graham Bell’s revolutionary communication device.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Alexander_Graham_Bell%27s_telephone.jpg/800px-Alexander_Graham_Bell%27s_telephone.jpg",
//     keyPoints: [
//       "Patented in 1876.",
//       "Revolutionized personal and business communication.",
//       "Laid the foundation for modern telecommunications."
//     ]
//   },
//   {
//     name: "Airplane",
//     desc: "The Wright brothers' invention that brought humans to the sky.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Wrightflyer.jpg",
//     keyPoints: [
//       "First successful flight in 1903.",
//       "Transformed global travel and commerce.",
//       "Enabled rapid transportation of goods and people."
//     ]
//   },
//   {
//     name: "Vaccination",
//     desc: "A method to prevent disease, pioneered by Edward Jenner.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Vaccine_vial.jpg",
//     keyPoints: [
//       "Introduced in the late 18th century.",
//       "Significantly reduced mortality from infectious diseases.",
//       "Foundation of modern immunology."
//     ]
//   },
//   {
//     name: "Telescope",
//     desc: "Revealed the stars, used by Galileo to explore space.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Galileo%27s_telescope.jpg",
//     keyPoints: [
//       "First used in the early 17th century.",
//       "Revolutionized astronomy and our understanding of the universe.",
//       "Enabled discoveries of celestial bodies."
//     ]
//   },
//   {
//     name: "Electric Light Bulb",
//     desc: "Thomas Edison's invention that illuminated the world.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Light_bulb.jpg",
//     keyPoints: [
//       "Patented in 1879.",
//       "Transformed daily life and industry.",
//       "Enabled longer working hours and improved safety."
//     ]
//   },
//   {
//     name: "Refrigerator",
//     desc: "A household appliance that revolutionized food preservation.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Refrigerator.jpg",
//     keyPoints: [
//       "Commercially available in the early 20th century.",
//       "Changed food storage and consumption habits.",
//       "Reduced food spoilage and waste."
//     ]
//   },
//   {
//     name: "Computer",
//     desc: "A device that processes data and performs calculations.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Computer.jpg",
//     keyPoints: [
//       "First electronic computers developed in the 1940s.",
//       "Revolutionized business, education, and entertainment.",
//       "Foundation of the digital age."
//     ]
//   },
//   {
//     name: "Camera",
//     desc: "A device that captures images, revolutionizing photography.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Camera.jpg",
//     keyPoints: [
//       "First successful photograph taken in 1826.",
//       "Transformed art and documentation.",
//       "Enabled the rise of visual media."
//     ]
//   },
//   {
//     name: "Microwave Oven",
//     desc: "A kitchen appliance that cooks food using microwave radiation.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Microwave_oven.jpg",
//     keyPoints: [
//       "Invented in the 1940s.",
//       "Revolutionized cooking and food preparation.",
//       "Enabled quick and convenient meal preparation."
//     ]
//   },
//   {
//     name: "Smartphone",
//     desc: "A handheld device that combines mobile phone and computing functions.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Smartphone.jpg",
//     keyPoints: [
//       "First smartphones emerged in the late 1990s.",
//       "Transformed communication, entertainment, and productivity.",
//       "Enabled access to the internet on-the-go."
//     ]
//   },

//   // --- 25+ NEW INVENTIONS BELOW ---

//   {
//     name: "Wheel",
//     desc: "One of humanity’s earliest inventions that revolutionized transport and machinery.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Wheel-symbol.svg",
//     keyPoints: [
//       "Dates back to around 3500 BC in Mesopotamia.",
//       "Crucial for transportation and pottery.",
//       "Foundation for mechanical engineering."
//     ]
//   },
//   {
//     name: "Compass",
//     desc: "A navigation tool that allowed explorers to travel across the seas with accuracy.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/79/Magnetic_compass.jpg",
//     keyPoints: [
//       "Invented in China around the 11th century.",
//       "Guided the Age of Exploration.",
//       "Used magnetism to find direction."
//     ]
//   },
//   {
//     name: "Gunpowder",
//     desc: "An explosive powder that transformed warfare and mining.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/2/21/GunpowderExplosion.png",
//     keyPoints: [
//       "Developed in 9th century China.",
//       "Led to the invention of firearms and cannons.",
//       "Revolutionized military technology."
//     ]
//   },
//   {
//     name: "Mechanical Clock",
//     desc: "A device to accurately measure time using gears and weights.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Salisbury_Cathedral_clock.jpg",
//     keyPoints: [
//       "First appeared in Europe in the 14th century.",
//       "Improved timekeeping and daily schedules.",
//       "Led to development of modern watches."
//     ]
//   },
//   {
//     name: "Printing with Movable Type",
//     desc: "Chinese innovation that predated Gutenberg’s press for flexible printing.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Movable_Type_Printing.jpg",
//     keyPoints: [
//       "Invented by Bi Sheng in 1040 AD.",
//       "Allowed reusable characters for printing.",
//       "Inspired future printing technology."
//     ]
//   },
//   {
//     name: "Parachute",
//     desc: "A device that slows down a fall from great heights.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Da_Vinci_Parachute.jpg",
//     keyPoints: [
//       "Concepts by Leonardo da Vinci in the 15th century.",
//       "Used in aviation and space exploration.",
//       "Essential for skydiving and safety."
//     ]
//   },
//   {
//     name: "Battery",
//     desc: "A device that stores and provides electrical energy.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Voltaic_pile.jpg",
//     keyPoints: [
//       "Invented by Alessandro Volta in 1800.",
//       "Enabled portable electric devices.",
//       "Foundation of modern electronics."
//     ]
//   },
//   {
//     name: "Locomotive",
//     desc: "Steam-powered trains that transformed land transport.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Rocket_001.jpg",
//     keyPoints: [
//       "Pioneered by George Stephenson in 1829.",
//       "Allowed mass transport of goods and people.",
//       "Integral to the Industrial Revolution."
//     ]
//   },
//   {
//     name: "Photography",
//     desc: "The art and science of capturing light to create images.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Daguerreotype_camera.jpg",
//     keyPoints: [
//       "Developed in the early 19th century.",
//       "Documented history and culture visually.",
//       "Led to cinema and digital cameras."
//     ]
//   },
//   {
//     name: "Penicillin",
//     desc: "The first widely used antibiotic that saved millions of lives.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/0/04/Alexander_Fleming_Laboratory.jpg",
//     keyPoints: [
//       "Discovered by Alexander Fleming in 1928.",
//       "Revolutionized medicine and surgery.",
//       "Fights bacterial infections effectively."
//     ]
//   },
//   {
//     name: "Radio",
//     desc: "Wireless communication technology that connected the world.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Marconi1901.jpg",
//     keyPoints: [
//       "Developed by Guglielmo Marconi in 1895.",
//       "Enabled long-distance wireless messaging.",
//       "Foundation for broadcasting and Wi-Fi."
//     ]
//   },
//   {
//     name: "Television",
//     desc: "A medium for broadcasting visual content to the masses.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/5/51/First_TV_Set.jpg",
//     keyPoints: [
//       "Invented in the early 20th century.",
//       "Changed entertainment and information sharing.",
//       "Evolved to color and digital formats."
//     ]
//   },
//   {
//     name: "Satellite",
//     desc: "Artificial objects orbiting Earth for communication, navigation, and research.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Sputnik_1.jpg",
//     keyPoints: [
//       "Sputnik 1 launched in 1957.",
//       "Enabled GPS, weather monitoring, and TV broadcasts.",
//       "Key for modern space exploration."
//     ]
//   },
//   {
//     name: "Nuclear Reactor",
//     desc: "Harnesses nuclear fission to produce energy.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Chicago_Pile-1.jpg",
//     keyPoints: [
//       "First achieved in 1942 at Chicago Pile-1.",
//       "Basis for nuclear power plants.",
//       "Provides clean but regulated energy."
//     ]
//   },
//   {
//     name: "Smartwatch",
//     desc: "A wearable device that combines a watch with digital features.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_Watch.jpg",
//     keyPoints: [
//       "Popularized in the 2010s.",
//       "Monitors health, notifications, and fitness.",
//       "Integrates with smartphones and IoT."
//     ]
//   }
// ];


//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredInventions, setFilteredInventions] = useState(inventions);

//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);
//     const filtered = inventions.filter(inv => 
//       inv.name.toLowerCase().includes(value) || 
//       inv.desc.toLowerCase().includes(value)
//     );
//     setFilteredInventions(filtered);
//   };

//   return (<>
//     <div className="inventions-container">
//       <header>
        
//         <input 
//           type="text" 
//           id="searchInput" 
//           placeholder="Search inventions or place..." 
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </header>

//       <main className="inventions-gallery" id="inventionGallery">
//         {filteredInventions.map(inv => (
//           <div className="invention-card" key={inv.name}>
//             <img src={inv.img} alt={inv.name} />
//             <h3>{inv.name}</h3>
//             <p>{inv.desc}</p>
//             <ul>
//               {inv.keyPoints.map((point, index) => (
//                 <li key={index}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </main>
//     </div>

//     </>
//   );
// };

// export default Inventions;


import React, { useState } from 'react';
import './Inventions.css'; // Ensure you have this CSS file

const Inventions = () => {
  const inventions = [
    {
      name: "Antikythera Mechanism",
      desc: "An ancient Greek analog computer used to predict astronomical positions.",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Antikythera_mechanism.jpg",
      keyPoints: [
        "Developed in ancient Greece around 150-100 BC.",
        "Used for astronomical calculations.",
        "Considered the world's first analog computer."
      ]
    },
    {
      name: "Baghdad Battery",
      desc: "Believed to be an ancient galvanic cell used for electroplating or experimentation.",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Baghdad_Battery.jpg",
      keyPoints: [
        "Discovered in Iraq, dating back to 250 BC.",
        "Could generate a small electric current.",
        "Possibly used for electroplating gold."
      ]
    },
    {
      name: "Printing Press",
      desc: "Invented by Johannes Gutenberg, it revolutionized the spread of knowledge.",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Gutenberg_press.jpg",
      keyPoints: [
        "Introduced in the 15th century.",
        "Enabled mass production of books.",
        "Facilitated the spread of the Renaissance."
      ]
    },
    {
      name: "Steam Engine",
      desc: "James Watt’s powerful engine fueled the Industrial Revolution.",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Watt_steam_engine.jpg",
      keyPoints: [
        "Developed in the late 18th century.",
        "Transformed transportation and manufacturing.",
        "Key driver of the Industrial Revolution."
      ]
    },
    {
      name: "Internet",
      desc: "A global network that changed the way we connect, communicate, and learn.",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Internet_map_1024.jpg",
      keyPoints: [
        "Originated in the late 20th century.",
        "Facilitated instant communication worldwide.",
        "Enabled the rise of social media and e-commerce."
      ]
    },
    {
      name: "Telephone",
      desc: "Alexander Graham Bell’s revolutionary communication device.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Alexander_Graham_Bell%27s_telephone.jpg/800px-Alexander_Graham_Bell%27s_telephone.jpg",
      keyPoints: [
        "Patented in 1876.",
        "Revolutionized personal and business communication.",
        "Laid the foundation for modern telecommunications."
      ]
    },
    {
      name: "Airplane",
      desc: "The Wright brothers' invention that brought humans to the sky.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Wrightflyer.jpg",
      keyPoints: [
        "First successful flight in 1903.",
        "Transformed global travel and commerce.",
        "Enabled rapid transportation of goods and people."
      ]
    },
    {
      name: "Vaccination",
      desc: "A method to prevent disease, pioneered by Edward Jenner.",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Vaccine_vial.jpg",
      keyPoints: [
        "Introduced in the late 18th century.",
        "Significantly reduced mortality from infectious diseases.",
        "Foundation of modern immunology."
      ]
    },
    {
      name: "Telescope",
      desc: "Revealed the stars, used by Galileo to explore space.",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Galileo%27s_telescope.jpg",
      keyPoints: [
        "First used in the early 17th century.",
        "Revolutionized astronomy and our understanding of the universe.",
        "Enabled discoveries of celestial bodies."
      ]
    },
    {
      name: "Electric Light Bulb",
      desc: "Thomas Edison's invention that illuminated the world.",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Light_bulb.jpg",
      keyPoints: [
        "Patented in 1879.",
        "Transformed daily life and industry.",
        "Enabled longer working hours and improved safety."
      ]
    },
    {
      name: "Refrigerator",
      desc: "A household appliance that revolutionized food preservation.",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Refrigerator.jpg",
      keyPoints: [
        "Commercially available in the early 20th century.",
        "Changed food storage and consumption habits.",
        "Reduced food spoilage and waste."
      ]
    },
    {
      name: "Computer",
      desc: "A device that processes data and performs calculations.",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Computer.jpg",
      keyPoints: [
        "First electronic computers developed in the 1940s.",
        "Revolutionized business, education, and entertainment.",
        "Foundation of the digital age."
      ]
    },
    {
      name: "Camera",
      desc: "A device that captures images, revolutionizing photography.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Camera.jpg",
      keyPoints: [
        "First successful photograph taken in 1826.",
        "Transformed art and documentation.",
        "Enabled the rise of visual media."
      ]
    },
    {
      name: "Microwave Oven",
      desc: "A kitchen appliance that cooks food using microwave radiation.",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Microwave_oven.jpg",
      keyPoints: [
        "Invented in the 1940s.",
        "Revolutionized cooking and food preparation.",
        "Enabled quick and convenient meal preparation."
      ]
    },
    {
      name: "Smartphone",
      desc: "A handheld device that combines mobile phone and computing functions.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Smartphone.jpg",
      keyPoints: [
        "First smartphones emerged in the late 1990s.",
        "Transformed communication, entertainment, and productivity.",
        "Enabled access to the internet on-the-go."
      ]
    },
    {
      name: "Wheel",
      desc: "One of humanity’s earliest inventions that revolutionized transport and machinery.",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Wheel-symbol.svg",
      keyPoints: [
        "Dates back to around 3500 BC in Mesopotamia.",
        "Crucial for transportation and pottery.",
        "Foundation for mechanical engineering."
      ]
    },
    {
      name: "Compass",
      desc: "A navigation tool that allowed explorers to travel across the seas with accuracy.",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/79/Magnetic_compass.jpg",
      keyPoints: [
        "Invented in China around the 11th century.",
        "Guided the Age of Exploration.",
        "Used magnetism to find direction."
      ]
    },
    {
      name: "Gunpowder",
      desc: "An explosive powder that transformed warfare and mining.",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/21/GunpowderExplosion.png",
      keyPoints: [
        "Developed in 9th century China.",
        "Led to the invention of firearms and cannons.",
        "Revolutionized military technology."
      ]
    },
    {
      name: "Mechanical Clock",
      desc: "A device to accurately measure time using gears and weights.",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Salisbury_Cathedral_clock.jpg",
      keyPoints: [
        "First appeared in Europe in the 14th century.",
        "Improved timekeeping and daily schedules.",
        "Led to development of modern watches."
      ]
    },
    {
      name: "Printing with Movable Type",
      desc: "Chinese innovation that predated Gutenberg’s press for flexible printing.",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Movable_Type_Printing.jpg",
      keyPoints: [
        "Invented by Bi Sheng in 1040 AD.",
        "Allowed reusable characters for printing.",
        "Inspired future printing technology."
      ]
    },
    {
      name: "Parachute",
      desc: "A device that slows down a fall from great heights.",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Da_Vinci_Parachute.jpg",
      keyPoints: [
        "Concepts by Leonardo da Vinci in the 15th century.",
        "Used in aviation and space exploration.",
        "Essential for skydiving and safety."
      ]
    },
    {
      name: "Battery",
      desc: "A device that stores and provides electrical energy.",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Voltaic_pile.jpg",
      keyPoints: [
        "Invented by Alessandro Volta in 1800.",
        "Enabled portable electric devices.",
        "Foundation of modern electronics."
      ]
    },
    {
      name: "Locomotive",
      desc: "Steam-powered trains that transformed land transport.",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Rocket_001.jpg",
      keyPoints: [
        "Pioneered by George Stephenson in 1829.",
        "Allowed mass transport of goods and people.",
        "Integral to the Industrial Revolution."
      ]
    },
    {
      name: "Photography",
      desc: "The art and science of capturing light to create images.",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Daguerreotype_camera.jpg",
      keyPoints: [
        "Developed in the early 19th century.",
        "Documented history and culture visually.",
        "Led to cinema and digital cameras."
      ]
    },
    {
      name: "Penicillin",
      desc: "The first widely used antibiotic that saved millions of lives.",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/04/Alexander_Fleming_Laboratory.jpg",
      keyPoints: [
        "Discovered by Alexander Fleming in 1928.",
        "Revolutionized medicine and surgery.",
        "Fights bacterial infections effectively."
      ]
    },
    {
      name: "Radio",
      desc: "Wireless communication technology that connected the world.",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Marconi1901.jpg",
      keyPoints: [
        "Developed by Guglielmo Marconi in 1895.",
        "Enabled long-distance wireless messaging.",
        "Foundation for broadcasting and Wi-Fi."
      ]
    },
    {
      name: "Television",
      desc: "A medium for broadcasting visual content to the masses.",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/51/First_TV_Set.jpg",
      keyPoints: [
        "Invented in the early 20th century.",
        "Changed entertainment and information sharing.",
        "Evolved to color and digital formats."
      ]
    },
    {
      name: "Satellite",
      desc: "Artificial objects orbiting Earth for communication, navigation, and research.",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Sputnik_1.jpg",
      keyPoints: [
        "Sputnik 1 launched in 1957.",
        "Enabled GPS, weather monitoring, and TV broadcasts.",
        "Key for modern space exploration."
      ]
    },
    {
      name: "Nuclear Reactor",
      desc: "Harnesses nuclear fission to produce energy.",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Chicago_Pile-1.jpg",
      keyPoints: [
        "First achieved in 1942 at Chicago Pile-1.",
        "Basis for nuclear power plants.",
        "Provides clean but regulated energy."
      ]
    },
    {
      name: "Smartwatch",
      desc: "A wearable device that combines a watch with digital features.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_Watch.jpg",
      keyPoints: [
        "Popularized in the 2010s.",
        "Monitors health, notifications, and fitness.",
        "Integrates with smartphones and IoT."
      ]
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredInventions, setFilteredInventions] = useState(inventions);
  const [selectedInvention, setSelectedInvention] = useState(null);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = inventions.filter(inv => 
      inv.name.toLowerCase().includes(value) || 
      inv.desc.toLowerCase().includes(value)
    );
    setFilteredInventions(filtered);
  };

  return (
    <>
      <div className="inventions-container">
        <header>
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search inventions or place..." 
            value={searchTerm}
            onChange={handleSearch}
          />
        </header>

        <main className="inventions-gallery" id="inventionGallery">
          {filteredInventions.map(inv => (
            <div 
              className="invention-card" 
              key={inv.name}
              onClick={() => setSelectedInvention(inv)}
            >
              <img src={inv.img} alt={inv.name} />
              <h3>{inv.name}</h3>
              <p>{inv.desc}</p>
              <ul>
                {inv.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </div>

      {/* Modal Overlay */}
      {selectedInvention && (
        <div className="invention-modal-overlay" onClick={() => setSelectedInvention(null)}>
          <div className="invention-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="invention-modal-close" onClick={() => setSelectedInvention(null)}>✖</button>
            <img src={selectedInvention.img} alt={selectedInvention.name} />
            <h3>{selectedInvention.name}</h3>
            <p>{selectedInvention.desc}</p>
            <ul>
              {selectedInvention.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Inventions;