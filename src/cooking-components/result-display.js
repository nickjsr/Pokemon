import React, { useState, useEffect } from 'react';
import listFilesAndUrls from "../utils/storage-download";
import { formatString } from '../utils/string-utils';

function ResultDisplay(props) {
  const [dishImagesObject, setDishImagesObject] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const imgData = await listFilesAndUrls('dishes');
      const imagesObj = imgData.reduce((acc, image) => {
        let name = image.name.slice(0, -4);
        acc[name] = image.url;
        return acc;
      }, {});
      setDishImagesObject(imagesObj);
    };
    fetchData();
  }, []);

  const result = props.result;
  const formattedresult = formatString(result);

  return (
    <div className={`result-display ${result ? 'show' : ''}`}>
      {result ? (
        <>
          <h1>Success! Dish: {formattedresult}</h1>
          <img src={dishImagesObject[result]} alt={formattedresult} style={{ maxWidth: '100%' }} />
        </>
      ) : (
        <h1>No matching dish found</h1>
      )}
    </div>
  );
}

export default ResultDisplay;
