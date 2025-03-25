import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [allMemeImgs, setAllMemeImgs] = useState([]);
  const [randomImg, setRandomImg] = useState('');

  useEffect(() => {
    const API_KEY = 'YOUR_API_KEY';
    fetch(`https://api.imgflip.com/get_memes?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(content => {
        setAllMemeImgs(content.data.memes);
      })
      .catch(error => console.log("Error fetching memes:", error));
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
      const random_Meme = allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)].url;
      setRandomImg(random_Meme);
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
          style={{ border: '1px solid red' }} 
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