import React from 'react';
import { useState } from 'react/cjs/react.development';
import data from '../Data/Data';

const LoremIpsum = () => {
  const [value, setValue] = useState(0);
  const [myData, setMyData] = useState([]);
  const [plural, setPlural] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlural(false);
    let amount = parseInt(value);
    if (amount <= 1) {
      let randomNumber = Math.floor(Math.random() * data.length);
      setMyData(data[randomNumber]);
      setPlural(true);
    } else if (amount >= 8) {
      amount = 8;
      setMyData(data.slice(0, amount));
    } else {
      setMyData(data.slice(0, amount));
    }
  };

  return (
    <>
      <form action=''>
        <h2>TIRED OF BORING LOREM IPSUM?</h2>
        <div className='controls'>
          <label htmlFor='number'>Paragraphs</label>
          <input
            type='number'
            id='number'
            name='number'
            value={value}
            onChange={handleChange}
          />
          <button className='btn' type='submit' onClick={handleSubmit}>
            Generate
          </button>
        </div>
      </form>
      <div>
        {plural ? (
          <li>{myData}</li>
        ) : (
          myData.map((item, index) => {
            return <li key={index}>{item}</li>;
          })
        )}
      </div>
    </>
  );
};

export default LoremIpsum;

// const [value, setValue] = useState(0);
// const [myData, setMyData] = useState([]);

// const handleChange = (e) => {
//   setValue(e.target.value);
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   let amount = parseInt(value);
//   if (value <= 0) {
//     amount = 1;
//     setMyData(data[amount]);
//   } else if (value > 8) {
//     amount = 8;
//   }
//   setMyData(data.slice(0, amount));
// };
