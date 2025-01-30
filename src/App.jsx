import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import headshot1 from './assets/headshot1.png'; 
import headshot2 from './assets/headshot2.png';
import headshot3 from './assets/headshot3.png';
import headshot4 from './assets/headshot4.png';
import headshot5 from './assets/headshot5.png';
import headshot6 from './assets/headshot6.png';
import headshot7 from './assets/headshot7.png';
import headshot8 from './assets/headshot8.png';
import './index.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const cardData = [
    {
      name: 'Isabelle',
      role: 'Web Developer',
      image: headshot1,
    },
    {
      name: 'Tom Nook',
      role: 'UI/UX Designer',
      image: headshot2,
    },
    {
      name: 'KK Slider',
      role: 'Sound Designer',
      image: headshot3,
    },
    {
      name: 'Celeste',
      role: 'Animation and VFX',
      image: headshot4,
    },
    {
      name: 'Mabel',
      role: 'Animation and VFX',
      image: headshot5,
    },
    {
      name: 'Rover',
      role: 'Web Developer',
      image: headshot6,
    },
    {
      name: 'Harriet',
      role: 'UI/UX Designer',
      image: headshot7,
    },
    {
      name: 'Kappn',
      role: 'Illustrator',
      image: headshot8,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const filteredCards = cardData.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole ? card.role === selectedRole : true;
    return matchesSearch && matchesRole;
  });

  const handleReset = () => {
    setSearchTerm('');
    setSelectedRole('');
  };

  return (
    <div className={`app ${theme}`}>
      <header>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </header>
      <main>
        <div id="home" className="section">
          <div className="container">
            <h1 className="profile-title">Profile App</h1>
          </div>
        </div>
        <div id="about" className="section">
          <div className="container">
            <About />
          </div>
        </div>
        <div id="profiles" className="section">
          <div className="container">
            <div className="filter-container">
              <input 
                type="text" 
                placeholder="Search by name..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
              />
              <select 
                value={selectedRole} 
                onChange={(e) => setSelectedRole(e.target.value)} 
              >
                <option value="">Filter by role</option>
                <option value="Web Developer">Web Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Sound Designer">Sound Designer</option>
                <option value="Animation and VFX">Animation and VFX</option>
                <option value="Illustrator">Illustrator</option>
              </select>
              <button onClick={handleReset}>Reset</button>
            </div>

            <Wrapper>
              {filteredCards.map((card, index) => (
                <Card 
                  key={index} 
                  name={card.name} 
                  role={card.role} 
                  image={card.image} 
                />
              ))}
            </Wrapper>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;