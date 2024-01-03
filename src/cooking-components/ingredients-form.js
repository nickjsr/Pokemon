import React, { useState, useEffect } from 'react';
import listFilesAndUrls from "../utils/storage-download";

export function IngredientsForm({ ingredients, onChange, onSubmit }) {
  const [ingredientImages, setIngredientImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const imgData = await listFilesAndUrls('ingredients');
      setIngredientImages([...imgData]);
    };
    fetchData();
  }, []);

  // Safely access image URLs
  const getImageUrl = (index) => ingredientImages[index]?.url || '';

  return (
    <div className="cooking-form-container">
      <form onSubmit={onSubmit}>
        <div className="ingredient-item">
          <input
            type="number"
            id="fancy-apple"
            name="fancy-apple"
            min="0"
            value={ingredients.fancyApple}
            aria-describedby="fancy-apple-input"
            onChange={(e) => onChange('fancyApple', parseInt(e.target.value))}
          />
          <img src={getImageUrl(0)} alt="Fancy Apple"></img>
          <label for="fancy-apple">Fancy Apple</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            id="fancy-egg"
            name="fancy-egg"
            min="0"
            value={ingredients.fancyEgg}
            aria-describedby="fancy-egg-input"
            onChange={(e) => onChange('fancyEgg', parseInt(e.target.value))}
          />
          <img src={getImageUrl(1)} alt="Fancy Egg"></img>
          <label for="fancy-egg">Fancy Egg</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            id="honey"
            name="honey"
            min="0"
            value={ingredients.honey}
            aria-describedby="honey-input"
            onChange={(e) => onChange('honey', parseInt(e.target.value))}
          />
          <img src={getImageUrl(2)} alt="Honey"></img>
          <label for="honey">Honey</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            id="moomoo-milk"
            name="moomoo-milk"
            min="0"
            value={ingredients.moomooMilk}
            aria-describedby="moomoo-milk-input"
            onChange={(e) => onChange('moomooMilk', parseInt(e.target.value))}
          />
          <img src={getImageUrl(3)} alt="Moomoo Milk"></img>
          <label for="moomoo-milk">Moomoo Milk</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            id="snoozy-tomato"
            name="snoozy-tomato"
            min="0"
            value={ingredients.snoozyTomato}
            aria-describedby="snoozy-tomato-input"
            onChange={(e) => onChange('snoozyTomato', parseInt(e.target.value))}
          />
          <img src={getImageUrl(4)} alt="Snoozy Tomato"></img>
          <label for="snoozy-tomato">Snoozy Tomato</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            id="soothing-cacao"
            name="soothing-cacao"
            min="0"
            value={ingredients.soothingCacao}
            aria-describedby="soothing-cacao-input"
            onChange={(e) => onChange('soothingCacao', parseInt(e.target.value))}
          />
          <img src={getImageUrl(5)} alt="Soothing Cacao"></img>
          <label for="soothing-cacao">Soothing Cacao</label>
        </div>

        <div className="ingredient-item">
          <input
            type="number"
            id="warming-ginger"
            name="warming-ginger"
            value={ingredients.warmingGinger}
            min="0"
            aria-describedby="warming-ginger-input"
            onChange={(e) => onChange('warmingGinger', parseInt(e.target.value))}
          />
          <img src={getImageUrl(6)} alt="Warming Ginger"></img>
          <label for="warming-ginger">Warming Ginger</label>
        </div>

        <input id="submit" name="submit" aria-describedby="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default IngredientsForm;