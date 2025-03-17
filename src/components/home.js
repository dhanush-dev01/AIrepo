import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [allMemeImgs, setAllMemeImgs] = useState([]);
  const [randomImg, setRandomImg] = useState('');

  // Fetching memes on component mount
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(content => setAllMemeImgs(content.data.memes));
  }, []);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    name === 'topText' ? setTopText(value) : setBottomText(value);
  };

  // Generate a random meme
  const handleSubmit = (event) => {
    event.preventDefault();
    if (allMemeImgs.length > 0) {
      const rand = allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)].url;
      setRandomImg(rand);
    }
  };

  return (
    <div>
      {/* Controlled form */}
      <form className="meme-form" onSubmit={handleSubmit}>
        <input
          placeholder="Enter Text"
          type="text"
          value={topText}
          name="topText"
          onChange={handleChange}
        />
        <input
          placeholder="Enter Text"
          type="text"
          value={bottomText}
          name="bottomText"
          onChange={handleChange}
        />
        <button>Generate</button>
      </form>
      <br />
      <div className="meme">
        {randomImg && (
          <>
            <img src={randomImg} alt="meme" />
            <h2 className="top">{topText}</h2>
            <h2 className="bottom">{bottomText}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
