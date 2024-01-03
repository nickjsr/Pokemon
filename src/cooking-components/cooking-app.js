import React, { useState, useEffect } from 'react';
import IngredientsForm from './ingredients-form';
import ResultDisplay from './result-display';
import { BNavbar } from '../search-components/navbar';
import listFilesAndUrls from "../utils/storage-download";

function App() {
  const [ingredients, setIngredients] = useState({
    fancyApple: 0,
    fancyEgg: 0,
    honey: 0,
    moomooMilk: 0,
    snoozyTomato: 0,
    soothingCacao: 0,
    warmingGinger: 0
  });
  const [result, setResult] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const [panURL, setPanURL] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const imgData = await listFilesAndUrls('pan');
      const url = imgData[0].url;
      setPanURL(url);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loading">Working...</div>;  // Loading message
  }

  const handleIngredientChange = (ingredient, value) => {
    setIngredients(prevIngredients => ({
      ...prevIngredients,
      [ingredient]: isNaN(value) ? 0 : parseInt(value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dish = determineDish(ingredients);
    setResult(dish);
  };


  const determineDish = (ingredients) => {
    const { fancyApple, fancyEgg, honey, moomooMilk, snoozyTomato, soothingCacao, warmingGinger } = ingredients;

    if (honey === 9 && soothingCacao === 8 && moomooMilk === 7) return 'sweet-scent-chocolate-cake';
    if (fancyApple === 11 && moomooMilk === 9 && honey === 7 && soothingCacao === 8) return 'lovely-kiss-smoothie';
    if (honey === 20 && fancyEgg === 15 && moomooMilk === 10 && fancyApple === 10) return 'jigglypuff\'s-fruity-flan';
    if (honey === 14 && warmingGinger === 12 && soothingCacao === 5 && fancyEgg === 4) return 'steadfast-ginger-cookies';
    if (snoozyTomato === 9 && fancyApple === 7) return 'stalwart-vegetable-juice';
    if (warmingGinger === 9 && fancyApple === 7) return 'ember-ginger-tea';
    if (moomooMilk === 7) return 'warm-moomoo-milk';
    if (honey === 9) return 'craft-soda-pop';

    return null;
  };

  const H1 = ({ isOpen }) => {
    return (
      <div>
        <h1 className={`h1 ${isOpen ? 'navbar-open' : ''}`}>Cooking Simulator</h1>
      </div>
    );
  }

  const applyMenu = (isOpen) => {
    setIsOpen(isOpen)
  }

  return (
    <div className="App">
      <header className="cooking-container">
        <nav>
          <BNavbar applyMenuCallBack={applyMenu} />
        </nav>
        <H1 isOpen={isOpen} />
      </header>
      <main className="cooking-container">

        <section className="cooking-pan-container">
          <img src={panURL} alt="PAN" aria-label="pan-schematic-diagram"></img>
          <h2>Let's select for cooking</h2>
        </section>
        <IngredientsForm ingredients={ingredients} onChange={handleIngredientChange} onSubmit={handleSubmit} />
        <h2>If you make it, the recipe will be shown!</h2>
        {result && <ResultDisplay result={result} />}
      </main>
      <footer className="cooking-container">
        <p>This web application was created by us using our own two hands.</p>
        <address>Contact Noor Aamir, Ling (Evelyn) Lin, Jessie Ren at <a href="mailto:siyiren@uw.edu">siyiren@uw.edu</a>, and Yi Shi.</address>
        <p>&copy; 2023 INFO 340 Team B6.</p>
      </footer>
    </div>
  );
}

export default App;


