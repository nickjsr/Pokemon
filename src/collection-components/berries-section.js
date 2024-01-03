import React from 'react';
import { formatString } from '../utils/string-utils';

function BerriesSection(props) {
  const { berries, onBerryChange, selectedBerries } = props;

  const handleBerryChange = (berryName) => {
    onBerryChange(berryName);
  };

  const berryItems = berries.map((oneB) => (
    <div className="form-filter-card" key={oneB.berryName}>
      <input
        type="checkbox"
        id={oneB.berryNameDash}
        name={oneB.berryNameDash}
        aria-describedby={oneB.berryNameDash + '-checkbox'}
        onChange={() => handleBerryChange(oneB.berryName)}
        checked={selectedBerries.includes(oneB.berryName)}
      />
      <img src={oneB.source} alt={oneB.berryName} />
      <label htmlFor={oneB.berryNameDash}>{formatString(oneB.berryName)}</label>
    </div>
  ));

  return (
    <div className="section-container">
      <fieldset>
        <h2>Berries</h2>
        <legend>Select Berries</legend>
        <div className="form-filter-container">{berryItems}</div>
      </fieldset>
    </div>
  );
}

export default BerriesSection;
