import React, { useState, useEffect } from 'react';

const ColorGenerator = () => {
  const [randomColor, setRandomColor] = useState(null);
  const [convertedColor, setConvertedColor] = useState(null);

  useEffect(() => {
    fetchRandomColor();
  }, []);

  const fetchRandomColor = async () => {
    try {
      const response = await fetch('https://x-colors.yurace.pro/api/random');
      const data = await response.json();
      setRandomColor(data);
      setConvertedColor(null); // Reset converted color on new fetch
    } catch (error) {
      console.error('Error fetching random color:', error);
    }
  };

  const convertColor = async (format) => {
    if (!randomColor) return;
    let url = '';
    switch (format) {
      case 'hex2rgb':
        url = `https://x-colors.yurace.pro/api/hex2rgb?value=${randomColor.hex.slice(1)}`;
        break;
      case 'hex2hsl':
        url = `https://x-colors.yurace.pro/api/hex2hsl?value=${randomColor.hex.slice(1)}`;
        break;
      case 'rgb2hex':
        const rgbValues = randomColor.rgb.match(/\d+/g).join('-');
        url = `https://x-colors.yurace.pro/api/rgb2hex?value=${rgbValues}`;
        break;
      case 'hsl2hex':
        const hslValues = randomColor.hsl.match(/\d+/g).join('-');
        url = `https://x-colors.yurace.pro/api/hsl2hex?value=${hslValues}`;
        break;
      case 'hsl2rgb':
        const hslValuesForRgb = randomColor.hsl.match(/\d+/g).join('-');
        url = `https://x-colors.yurace.pro/api/hsl2rgb?value=${hslValuesForRgb}`;
        break;
      default:
        console.error('Unsupported format');
        return;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setConvertedColor(data); // Update with the entire response data
    } catch (error) {
      console.error(`Error converting color to ${format}:`, error);
    }
  };

  const handleClick = () => {
    fetchRandomColor();
  };

  return (
    <div>
      <h2>Random Color: {randomColor && randomColor.hex}</h2>
      {randomColor && (
        <div style={{ backgroundColor: randomColor.hex, width: '100px', height: '100px' }}></div>
      )}
      <button onClick={() => convertColor('hex2rgb')}>Convert to RGB</button>
      <button onClick={() => convertColor('hex2hsl')}>Convert to HSL</button>
      {convertedColor && (
        <div>
          <h2>Converted Color:</h2>
          <p>HEX: {convertedColor.hex}</p>
          <p>RGB: {convertedColor.rgb}</p>
          <p>HSL: {convertedColor.hsl}</p>
        </div>
      )}
      <button onClick={handleClick}>Get New Random Color</button>
    </div>
  );
};

export default ColorGenerator;




