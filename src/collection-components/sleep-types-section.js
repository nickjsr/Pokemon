import React from 'react';

function SleepTypesSection(props) {
  const { onSleepTypeChange, selectedSleepTypes } = props;

  const sleepTypes = ['Dozing', 'Snoozing', 'Slumbering'];

  const handleSleepTypeChange = (sleepType) => {
    onSleepTypeChange(sleepType);
  };

  const sleepTypeItems = sleepTypes.map((type) => (
    <div className="form-filter-card" key={type.toLowerCase()}>
      <input
        type="checkbox"
        id={type.toLowerCase()}
        aria-describedby={`${type.toLowerCase()}-checkbox`}
        onChange={() => handleSleepTypeChange(type)}
        checked={selectedSleepTypes.includes(type)}
      />
      <label htmlFor={type.toLowerCase()}>{type}</label>
    </div>
  ));

  return (
    <div className="section-container">
      <fieldset>
        <h2>Sleep Types</h2>
        <legend>Select Sleep Types</legend>
        <div className="form-filter-container">{sleepTypeItems}</div>
      </fieldset>
    </div>
  );
}

export default SleepTypesSection;
