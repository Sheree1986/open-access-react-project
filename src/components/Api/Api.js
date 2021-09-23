import React, { useState } from "react";
// import { ResponsiveEmbed } from 'react-bootstrap';
import "../CSS/Api.css";


const languagetool = require("languagetool-api");

const initialText = `
Typos hapen. We striving to correct them.`;



const Api = () => {
  // let [response, setResponse] = useState([]);
  const [text, setText] = useState(initialText);
  const [mistakes, setMistakes] = useState([])



const handleChange= text => {
  checkText(text);
};

const checkText = text => {
  console.log(text, languagetool);
  languagetool.check(
    {
      language: "en-US",
      text: text
    },
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
        languagetool.showMistakes(res, mis => {
          setMistakes(mis)
        });

        languagetool.bestSuggestion(res, mis => {
          setMistakes(mis);
        });
      }
    }
  );
};

  // const [input, setInput] = useState("");

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  //   console.log(input);
  // };


    // const options = {
    //   method: 'POST',
    //   url: 'https://dnaber-languagetool.p.rapidapi.com/v2/check',
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'x-rapidapi-host': 'dnaber-languagetool.p.rapidapi.com',
    //     'x-rapidapi-key': '32bc752900msh2a99aca8a92e59cp1f0926jsn87c679c7ea73'
    //   },
    //   data: {text: 'This is a error.', language: 'en-US'}
    // };
    
    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });
    
    // fetch("https://dnaber-languagetool.p.rapidapi.com/v2/check", {
    //   "method": "POST",
    //   "headers": {
    //     "content-type": "application/x-www-form-urlencoded",
    //     "x-rapidapi-host": "dnaber-languagetool.p.rapidapi.com",
    //     "x-rapidapi-key": "32bc752900msh2a99aca8a92e59cp1f0926jsn87c679c7ea73"
    //   },
    //   "body": {
    //     "text": "This is a error.",
    //     "language": "en-US"
    //   }
    // })
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(err => {
    //   console.error(err);
    // });

    // }
  
    return (
      <div className="ContentWrapper">
        <h1>
          Proofreading API
          <label htmlFor=""></label>
 
          <input 
            onChange={handleChange}
            id="proofreader"
            type="text"
            spellcheck={true} defaultValue={initialText}
            
          />
        </h1>


        {mistakes.map((item, index) => (
          <p key={index}>{item.title}</p> 
       ))}
        <button type="button"

onClick={() => handleChange(checkText)}>
          Click Here
        </button>
      </div>
    );
  
};

export default Api;


