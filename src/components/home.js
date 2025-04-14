import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Home.css';

const Home = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [allMemeImgs, setAllMemeImgs] = useState([]);
  const [randomImg, setRandomImg] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        if (!response.ok) {
          throw new Error('Failed to fetch memes');
        }
        const content = await response.json();
        setAllMemeImgs(content.data.memes);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching memes:", err);
      }
    };

    fetchMemes();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'topText') {
      setTopText(value);
    } else {
      setBottomText(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (allMemeImgs.length > 0) {
      const randomMeme = allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)].url;
      setRandomImg(randomMeme);
    }
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="meme-container">
      <form className="meme-form" onSubmit={handleSubmit}>
        <input
          placeholder="Enter Top Text"
          type="text"
          value={topText}
          name="topText"
          onChange={handleChange}
          className="text-input"
        />
        <input
          placeholder="Enter Bottom Text"
          type="text"
          value={bottomText}
          name="bottomText"
          onChange={handleChange}
          className="text-input"
        />
        <button type="submit" className="generate-button">Generate</button>
      </form>
      <div className="meme">
        {randomImg && (
          <>
            <img src={randomImg} alt="generated meme" />
            <h2 className="top">{topText}</h2>
            <h2 className="bottom">{bottomText}</h2>
          </>
        )}
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;