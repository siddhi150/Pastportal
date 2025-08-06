// import React, { useState } from 'react';
// import './ScientistsPage.css';

// // Normalized and deduplicated scientist data
// const scientists = [
//   {
//     name: "Leonardo da Vinci",
//     fullName: "Leonardo di ser Piero da Vinci",
//     dob: "15 April 1452",
//     birthPlace: "Vinci, Republic of Florence (Italy)",
//     invention: "Concepts of Helicopter, Parachute, and War Machines",
//     fact: "He was also a legendary artist who painted the Mona Lisa."
//   },
//   {
//     name: "Michael Faraday",
//     fullName: "Michael Faraday",
//     dob: "22 September 1791",
//     birthPlace: "Newington Butts, England",
//     invention: "Electromagnetic Induction",
//     fact: "His experiments led to the creation of electric motors and generators."
//   },
//   {
//     name: "Gregor Mendel",
//     fullName: "Gregor Johann Mendel",
//     dob: "20 July 1822",
//     birthPlace: "Heinzendorf, Austrian Empire (now Czech Republic)",
//     invention: "Laws of Heredity",
//     fact: "Known as the 'Father of Genetics.'"
//   },
//   {
//     name: "Louis Pasteur",
//     fullName: "Louis Pasteur",
//     dob: "27 December 1822",
//     birthPlace: "Dole, France",
//     invention: "Pasteurization, Germ Theory",
//     fact: "His work saved countless lives by preventing infections."
//   },
//   {
//     name: "Niels Bohr",
//     fullName: "Niels Henrik David Bohr",
//     dob: "7 October 1885",
//     birthPlace: "Copenhagen, Denmark",
//     invention: "Bohr Model of the Atom",
//     fact: "Won the 1922 Nobel Prize in Physics."
//   },
//   {
//     name: "Dmitri Mendeleev",
//     fullName: "Dmitri Ivanovich Mendeleev",
//     dob: "8 February 1834",
//     birthPlace: "Tobolsk, Russian Empire",
//     invention: "Periodic Table of Elements",
//     fact: "He predicted the existence of elements not yet discovered."
//   },
//   {
//     name: "Enrico Fermi",
//     fullName: "Enrico Fermi",
//     dob: "29 September 1901",
//     birthPlace: "Rome, Italy",
//     invention: "Nuclear Reactor",
//     fact: "He is called the 'architect of the nuclear age.'"
//   },
//   {
//     name: "Rosalind Franklin",
//     fullName: "Rosalind Elsie Franklin",
//     dob: "25 July 1920",
//     birthPlace: "London, England",
//     invention: "X-ray Crystallography of DNA",
//     fact: "Her work was critical in discovering the DNA double helix."
//   },
//   {
//     name: "Jane Goodall",
//     fullName: "Dame Jane Morris Goodall",
//     dob: "3 April 1934",
//     birthPlace: "London, England",
//     invention: "Groundbreaking Chimpanzee Research",
//     fact: "She changed our understanding of primate behavior."
//   },
//   {
//     name: "Tim Berners-Lee",
//     fullName: "Sir Timothy John Berners-Lee",
//     dob: "8 June 1955",
//     birthPlace: "London, England",
//     invention: "World Wide Web",
//     fact: "Invented the first web browser and server in 1989."
//   },
//   {
//     name: "John von Neumann",
//     fullName: "John von Neumann",
//     dob: "28 December 1903",
//     birthPlace: "Budapest, Hungary",
//     invention: "Modern Computer Architecture",
//     fact: "His work led to the design of digital stored-program computers."
//   },
//   {
//     name: "Alan Turing",
//     fullName: "Alan Mathison Turing",
//     dob: "23 June 1912",
//     birthPlace: "London, England",
//     invention: "Turing Machine, Codebreaking",
//     fact: "Helped crack the Enigma code in WWII."
//   },
//   {
//     name: "Carl Sagan",
//     fullName: "Carl Edward Sagan",
//     dob: "9 November 1934",
//     birthPlace: "Brooklyn, New York, USA",
//     invention: "Popularized Astronomy and Planetary Science",
//     fact: "Co-wrote the TV series 'Cosmos.'"
//   },
//   {
//     name: "Richard Feynman",
//     fullName: "Richard Phillips Feynman",
//     dob: "11 May 1918",
//     birthPlace: "New York City, USA",
//     invention: "Quantum Electrodynamics",
//     fact: "Known for his engaging lectures and 'Feynman diagrams.'"
//   },
//   {
//     name: "Max Planck",
//     fullName: "Max Karl Ernst Ludwig Planck",
//     dob: "23 April 1858",
//     birthPlace: "Kiel, Germany",
//     invention: "Quantum Theory",
//     fact: "The Planck constant is named after him."
//   },
//   {
//     name: "Erwin Schrödinger",
//     fullName: "Erwin Rudolf Josef Alexander Schrödinger",
//     dob: "12 August 1887",
//     birthPlace: "Vienna, Austria",
//     invention: "Schrödinger Equation in Quantum Mechanics",
//     fact: "Famous for his 'Schrödinger's cat' thought experiment."
//   },
//   {
//     name: "Srinivasa Ramanujan",
//     fullName: "Srinivasa Ramanujan",
//     dob: "22 December 1887",
//     birthPlace: "Erode, Tamil Nadu, India",
//     invention: "Groundbreaking Mathematical Theories",
//     fact: "He produced extraordinary results in number theory without formal training."
//   },
//   {
//     name: "Aryabhata",
//     fullName: "Aryabhata",
//     dob: "476 AD",
//     birthPlace: "Kusumapura (India)",
//     invention: "Approximation of Pi, Concept of Zero in Astronomy",
//     fact: "He was one of the first major mathematician-astronomers of India."
//   },
//   {
//     name: "Alhazen",
//     fullName: "Hasan Ibn al-Haytham",
//     dob: "c. 965 AD",
//     birthPlace: "Basra, Iraq",
//     invention: "Book of Optics",
//     fact: "Known as the 'Father of Modern Optics.'"
//   },
//   {
//     name: "Archimedes",
//     fullName: "Archimedes of Syracuse",
//     dob: "c. 287 BC",
//     birthPlace: "Syracuse, Sicily",
//     invention: "Archimedes' Screw, Principle of Buoyancy",
//     fact: "Famously said 'Eureka!' upon discovering water displacement."
//   },
//   {
//     name: "Hippocrates",
//     fullName: "Hippocrates of Kos",
//     dob: "c. 460 BC",
//     birthPlace: "Kos, Greece",
//     invention: "Hippocratic Oath",
//     fact: "Considered the 'Father of Medicine.'"
//   },
//   {
//     name: "Avicenna",
//     fullName: "Ibn Sina",
//     dob: "c. 980 AD",
//     birthPlace: "Bukhara, Persia",
//     invention: "Canon of Medicine",
//     fact: "His medical texts were used in Europe for centuries."
//   },
//   {
//     name: "Johannes Kepler",
//     fullName: "Johannes Kepler",
//     dob: "27 December 1571",
//     birthPlace: "Weil der Stadt, Germany",
//     invention: "Laws of Planetary Motion",
//     fact: "He was a key figure in the Scientific Revolution."
//   },
//   {
//     name: "Robert Hooke",
//     fullName: "Robert Hooke",
//     dob: "28 July 1635",
//     birthPlace: "Freshwater, England",
//     invention: "Hooke's Law, Microscope Observations",
//     fact: "Coined the term 'cell' in biology."
//   },
//   {
//     name: "Christiaan Huygens",
//     fullName: "Christiaan Huygens",
//     dob: "14 April 1629",
//     birthPlace: "The Hague, Netherlands",
//     invention: "Pendulum Clock, Wave Theory of Light",
//     fact: "Discovered Titan, Saturn's largest moon."
//   },
//   {
//     name: "Blaise Pascal",
//     fullName: "Blaise Pascal",
//     dob: "19 June 1623",
//     birthPlace: "Clermont-Ferrand, France",
//     invention: "Pascal's Calculator, Probability Theory",
//     fact: "The unit of pressure 'Pascal' is named after him."
//   },
//   {
//     name: "Guglielmo Marconi",
//     fullName: "Guglielmo Marconi",
//     dob: "25 April 1874",
//     birthPlace: "Bologna, Italy",
//     invention: "Radio Communication",
//     fact: "Won the 1909 Nobel Prize in Physics for wireless telegraphy."
//   },
//   {
//     name: "Heinrich Hertz",
//     fullName: "Heinrich Rudolf Hertz",
//     dob: "22 February 1857",
//     birthPlace: "Hamburg, Germany",
//     invention: "Electromagnetic Waves",
//     fact: "The unit of frequency 'hertz' is named in his honor."
//   },
//   {
//     name: "Jonas Salk",
//     fullName: "Jonas Edward Salk",
//     dob: "28 October 1914",
//     birthPlace: "New York City, USA",
//     invention: "Polio Vaccine",
//     fact: "He chose not to patent the vaccine to make it widely available."
//   },
//   {
//     name: "Tu Youyou",
//     fullName: "Tu Youyou",
//     dob: "30 December 1930",
//     birthPlace: "Ningbo, Zhejiang, China",
//     invention: "Artemisinin for Malaria Treatment",
//     fact: "First Chinese woman to win a Nobel Prize in medicine."
//   },
//   {
//     name: "Emmy Noether",
//     fullName: "Amalie Emmy Noether",
//     dob: "23 March 1882",
//     birthPlace: "Erlangen, Germany",
//     invention: "Noether's Theorem in Physics",
//     fact: "Her work underpins modern theoretical physics."
//   },
//   {
//     name: "Chien-Shiung Wu",
//     fullName: "Chien-Shiung Wu",
//     dob: "31 May 1912",
//     birthPlace: "Liuhe, China",
//     invention: "Parity Violation in Physics",
//     fact: "Known as the 'First Lady of Physics.'"
//   }
// ];


// export default function ScientistsPage() {
//   const [search, setSearch] = useState('');
//   const filteredScientists = scientists.filter(sci =>
//     sci.name.toLowerCase().includes(search.toLowerCase()) ||
//     sci.fullName.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//     <div className="scientist-page">
//       <header className="scientist-header">
        
//         <input
//           type="text"
//           placeholder="Search scientists..."
//           className="search-bar"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </header>

//       <div className="scientist-list">
//         {filteredScientists.map((sci, index) => (
//           <div className="scientist-card" key={index}>
//             <h2>{sci.name}</h2>
//             <p><strong>Full Name:</strong> {sci.fullName}</p>
//             <p><strong>Date of Birth:</strong> {sci.dob}</p>
//             <p><strong>Place of Birth:</strong> {sci.birthPlace}</p>
//             <p><strong>Famous Invention:</strong> {sci.invention}</p>
//             <p><strong>Fun Fact:</strong> {sci.fact}</p>
//           </div>
//         ))}
//       </div>

//       <div className="info-section">
//         <div className="info-box">
//           <h3>About This Page</h3>
//           <p>This page showcases the contributions of history's most impactful scientists.</p>
//         </div>
//         <div className="info-box">
//           <h3>Why Learn About Scientists?</h3>
//           <p>Understanding their work helps us appreciate the roots of modern science.</p>
//         </div>
//         <div className="info-box">
//           <h3>Explore More</h3>
//           <p>Visit our Explore section to dive into inventions, innovations, and timelines.</p>
//         </div>
//         <div className="info-box">
//           <h3>PastPortals Project</h3>
//           <p>This content is part of the PastPortals initiative – a digital time travel experience.</p>
//         </div>
//       </div>
//     </div>
       
//     </>
//   );
// }

import React, { useState } from 'react';
import './ScientistsPage.css';

// Normalized and deduplicated scientist data
const scientists = [
  {
    name: "Leonardo da Vinci",
    fullName: "Leonardo di ser Piero da Vinci",
    dob: "15 April 1452",
    birthPlace: "Vinci, Republic of Florence (Italy)",
    invention: "Concepts of Helicopter, Parachute, and War Machines",
    fact: "He was also a legendary artist who painted the Mona Lisa."
  },
  {
    name: "Michael Faraday",
    fullName: "Michael Faraday",
    dob: "22 September 1791",
    birthPlace: "Newington Butts, England",
    invention: "Electromagnetic Induction",
    fact: "His experiments led to the creation of electric motors and generators."
  },
  {
    name: "Gregor Mendel",
    fullName: "Gregor Johann Mendel",
    dob: "20 July 1822",
    birthPlace: "Heinzendorf, Austrian Empire (now Czech Republic)",
    invention: "Laws of Heredity",
    fact: "Known as the 'Father of Genetics.'"
  },
  {
    name: "Louis Pasteur",
    fullName: "Louis Pasteur",
    dob: "27 December 1822",
    birthPlace: "Dole, France",
    invention: "Pasteurization, Germ Theory",
    fact: "His work saved countless lives by preventing infections."
  },
  {
    name: "Niels Bohr",
    fullName: "Niels Henrik David Bohr",
    dob: "7 October 1885",
    birthPlace: "Copenhagen, Denmark",
    invention: "Bohr Model of the Atom",
    fact: "Won the 1922 Nobel Prize in Physics."
  },
  {
    name: "Dmitri Mendeleev",
    fullName: "Dmitri Ivanovich Mendeleev",
    dob: "8 February 1834",
    birthPlace: "Tobolsk, Russian Empire",
    invention: "Periodic Table of Elements",
    fact: "He predicted the existence of elements not yet discovered."
  },
  {
    name: "Enrico Fermi",
    fullName: "Enrico Fermi",
    dob: "29 September 1901",
    birthPlace: "Rome, Italy",
    invention: "Nuclear Reactor",
    fact: "He is called the 'architect of the nuclear age.'"
  },
  {
    name: "Rosalind Franklin",
    fullName: "Rosalind Elsie Franklin",
    dob: "25 July 1920",
    birthPlace: "London, England",
    invention: "X-ray Crystallography of DNA",
    fact: "Her work was critical in discovering the DNA double helix."
  },
  {
    name: "Jane Goodall",
    fullName: "Dame Jane Morris Goodall",
    dob: "3 April 1934",
    birthPlace: "London, England",
    invention: "Groundbreaking Chimpanzee Research",
    fact: "She changed our understanding of primate behavior."
  },
  {
    name: "Tim Berners-Lee",
    fullName: "Sir Timothy John Berners-Lee",
    dob: "8 June 1955",
    birthPlace: "London, England",
    invention: "World Wide Web",
    fact: "Invented the first web browser and server in 1989."
  },
  {
    name: "John von Neumann",
    fullName: "John von Neumann",
    dob: "28 December 1903",
    birthPlace: "Budapest, Hungary",
    invention: "Modern Computer Architecture",
    fact: "His work led to the design of digital stored-program computers."
  },
  {
    name: "Alan Turing",
    fullName: "Alan Mathison Turing",
    dob: "23 June 1912",
    birthPlace: "London, England",
    invention: "Turing Machine, Codebreaking",
    fact: "Helped crack the Enigma code in WWII."
  },
  {
    name: "Carl Sagan",
    fullName: "Carl Edward Sagan",
    dob: "9 November 1934",
    birthPlace: "Brooklyn, New York, USA",
    invention: "Popularized Astronomy and Planetary Science",
    fact: "Co-wrote the TV series 'Cosmos.'"
  },
  {
    name: "Richard Feynman",
    fullName: "Richard Phillips Feynman",
    dob: "11 May 1918",
    birthPlace: "New York City, USA",
    invention: "Quantum Electrodynamics",
    fact: "Known for his engaging lectures and 'Feynman diagrams.'"
  },
  {
    name: "Max Planck",
    fullName: "Max Karl Ernst Ludwig Planck",
    dob: "23 April 1858",
    birthPlace: "Kiel, Germany",
    invention: "Quantum Theory",
    fact: "The Planck constant is named after him."
  },
  {
    name: "Erwin Schrödinger",
    fullName: "Erwin Rudolf Josef Alexander Schrödinger",
    dob: "12 August 1887",
    birthPlace: "Vienna, Austria",
    invention: "Schrödinger Equation in Quantum Mechanics",
    fact: "Famous for his 'Schrödinger's cat' thought experiment."
  },
  {
    name: "Srinivasa Ramanujan",
    fullName: "Srinivasa Ramanujan",
    dob: "22 December 1887",
    birthPlace: "Erode, Tamil Nadu, India",
    invention: "Groundbreaking Mathematical Theories",
    fact: "He produced extraordinary results in number theory without formal training."
  },
  {
    name: "Aryabhata",
    fullName: "Aryabhata",
    dob: "476 AD",
    birthPlace: "Kusumapura (India)",
    invention: "Approximation of Pi, Concept of Zero in Astronomy",
    fact: "He was one of the first major mathematician-astronomers of India."
  },
  {
    name: "Alhazen",
    fullName: "Hasan Ibn al-Haytham",
    dob: "c. 965 AD",
    birthPlace: "Basra, Iraq",
    invention: "Book of Optics",
    fact: "Known as the 'Father of Modern Optics.'"
  },
  {
    name: "Archimedes",
    fullName: "Archimedes of Syracuse",
    dob: "c. 287 BC",
    birthPlace: "Syracuse, Sicily",
    invention: "Archimedes' Screw, Principle of Buoyancy",
    fact: "Famously said 'Eureka!' upon discovering water displacement."
  },
  {
    name: "Hippocrates",
    fullName: "Hippocrates of Kos",
    dob: "c. 460 BC",
    birthPlace: "Kos, Greece",
    invention: "Hippocratic Oath",
    fact: "Considered the 'Father of Medicine.'"
  },
  {
    name: "Avicenna",
    fullName: "Ibn Sina",
    dob: "c. 980 AD",
    birthPlace: "Bukhara, Persia",
    invention: "Canon of Medicine",
    fact: "His medical texts were used in Europe for centuries."
  },
  {
    name: "Johannes Kepler",
    fullName: "Johannes Kepler",
    dob: "27 December 1571",
    birthPlace: "Weil der Stadt, Germany",
    invention: "Laws of Planetary Motion",
    fact: "He was a key figure in the Scientific Revolution."
  },
  {
    name: "Robert Hooke",
    fullName: "Robert Hooke",
    dob: "28 July 1635",
    birthPlace: "Freshwater, England",
    invention: "Hooke's Law, Microscope Observations",
    fact: "Coined the term 'cell' in biology."
  },
  {
    name: "Christiaan Huygens",
    fullName: "Christiaan Huygens",
    dob: "14 April 1629",
    birthPlace: "The Hague, Netherlands",
    invention: "Pendulum Clock, Wave Theory of Light",
    fact: "Discovered Titan, Saturn's largest moon."
  },
  {
    name: "Blaise Pascal",
    fullName: "Blaise Pascal",
    dob: "19 June 1623",
    birthPlace: "Clermont-Ferrand, France",
    invention: "Pascal's Calculator, Probability Theory",
    fact: "The unit of pressure 'Pascal' is named after him."
  },
  {
    name: "Guglielmo Marconi",
    fullName: "Guglielmo Marconi",
    dob: "25 April 1874",
    birthPlace: "Bologna, Italy",
    invention: "Radio Communication",
    fact: "Won the 1909 Nobel Prize in Physics for wireless telegraphy."
  },
  {
    name: "Heinrich Hertz",
    fullName: "Heinrich Rudolf Hertz",
    dob: "22 February 1857",
    birthPlace: "Hamburg, Germany",
    invention: "Electromagnetic Waves",
    fact: "The unit of frequency 'hertz' is named in his honor."
  },
  {
    name: "Jonas Salk",
    fullName: "Jonas Edward Salk",
    dob: "28 October 1914",
    birthPlace: "New York City, USA",
    invention: "Polio Vaccine",
    fact: "He chose not to patent the vaccine to make it widely available."
  },
  {
    name: "Tu Youyou",
    fullName: "Tu Youyou",
    dob: "30 December 1930",
    birthPlace: "Ningbo, Zhejiang, China",
    invention: "Artemisinin for Malaria Treatment",
    fact: "First Chinese woman to win a Nobel Prize in medicine."
  },
  {
    name: "Emmy Noether",
    fullName: "Amalie Emmy Noether",
    dob: "23 March 1882",
    birthPlace: "Erlangen, Germany",
    invention: "Noether's Theorem in Physics",
    fact: "Her work underpins modern theoretical physics."
  },
  {
    name: "Chien-Shiung Wu",
    fullName: "Chien-Shiung Wu",
    dob: "31 May 1912",
    birthPlace: "Liuhe, China",
    invention: "Parity Violation in Physics",
    fact: "Known as the 'First Lady of Physics.'"
  }
];

export default function ScientistsPage() {
  const [search, setSearch] = useState('');
  const [selectedScientist, setSelectedScientist] = useState(null);

  const filteredScientists = scientists.filter(sci =>
    sci.name.toLowerCase().includes(search.toLowerCase()) ||
    sci.fullName.toLowerCase().includes(search.toLowerCase())
  );

  const handleCardClick = (sci) => {
    setSelectedScientist(sci);
  };

  const closeModal = () => {
    setSelectedScientist(null);
  };

  return (
    <>
      <div className="scientist-page">
        {/* Search bar directly in page */}
        <input
          type="text"  
          placeholder="Search scientists..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="scientist-list">
          {filteredScientists.map((sci, index) => (
            <div className="scientist-card" key={index} onClick={() => handleCardClick(sci)}>
              <h2>{sci.name}</h2>
              <p><strong>Full Name:</strong> {sci.fullName}</p>
              <p><strong>Date of Birth:</strong> {sci.dob}</p>
              <p><strong>Place of Birth:</strong> {sci.birthPlace}</p>
              <p><strong>Famous Invention:</strong> {sci.invention}</p>
              <p><strong>Fun Fact:</strong> {sci.fact}</p>
            </div>
          ))}
        </div>

        {/* Info Section (kept, commented out) */}
        {/* <div className="info-section">
          <div className="info-box">
            <h3>About This Page</h3>
            <p>This page showcases the contributions of history's most impactful scientists.</p>
          </div>
          <div className="info-box">
            <h3>Why Learn About Scientists?</h3>
            <p>Understanding their work helps us appreciate the roots of modern science.</p>
          </div>
          <div className="info-box">
            <h3>Explore More</h3>
            <p>Visit our Explore section to dive into inventions, innovations, and timelines.</p>
          </div>
          <div className="info-box">
            <h3>PastPortals Project</h3>
            <p>This content is part of the PastPortals initiative – a digital time travel experience.</p>
          </div>
        </div> */}
      </div>

      {/* Modal Overlay */}
      {selectedScientist && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>✖</button>
            <h2>{selectedScientist.name}</h2>
            <p><strong>Full Name:</strong> {selectedScientist.fullName}</p>
            <p><strong>Date of Birth:</strong> {selectedScientist.dob}</p>
            <p><strong>Place of Birth:</strong> {selectedScientist.birthPlace}</p>
            <p><strong>Famous Invention:</strong> {selectedScientist.invention}</p>
            <p><strong>Fun Fact:</strong> {selectedScientist.fact}</p>
          </div>
        </div>
      )}
    </>
  );
}