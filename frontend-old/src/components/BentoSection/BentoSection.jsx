
import React, {useState, useEffect} from 'react';
import './bento_section.css';

const CardsContent = [
    {
        id: 1, 
        icon: {id: "", size: 28}, 
        title: "Título 1", 
        description: "Descrição do titulo 1"
    },
        {
        id: 2, 
        icon: {id: "", size: 28}, 
        title: "Título 2", 
        description: "Descrição do titulo 2"
    },
        {
        id: 3, 
        icon: {id: "", size: 28}, 
        title: "Título 3", 
        description: "Descrição do titulo 3"
    },
        {
        id: 4, 
        icon: {id: "", size: 28}, 
        title: "Título 4", 
        description: "Descrição do titulo 4"
    },
        {
        id: 5, 
        icon: {id: "", size: 28}, 
        title: "Título 5", 
        description: "Descrição do titulo 5"
    },
        {
        id: 6, 
        icon: {id: "", size: 28}, 
        title: "Título 6", 
        description: "Descrição do titulo 6"
    },
]

const BentoSection = () => {

  const [visibleIndex, setVisibleIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setVisibleIndex((prevIndex) => {
      // Calculate the max index we can start at (e.g., if total is 6, max is 3)
      const maxIndex = CardsContent.length - 3; 
      
      // If we are at the end, go back to 0. Otherwise, add 1.
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  }, 10000); // Changed to 10s for better "life" on the page

  return () => clearInterval(interval); 
}, []);

  const visibleCards = CardsContent.slice(visibleIndex, visibleIndex + 3);
  return (
    <section className="bento-container">
        <div className="bento-grid">
            {
                visibleCards.map( (card) => {
                    return(
                        <div className="bento-card" key={card.id}>
                        <div className="card-icon">{card.icon.id}</div>
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-subtitle">{card.description}</p>
                        </div>
                    )
                    
                })
            }
            
        </div>
    </section>
  );
};

export default BentoSection;