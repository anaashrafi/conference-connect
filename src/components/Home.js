import React from 'react';

const home = () => {
    var result;
    fetch('http://18.224.61.179:5000/')
    .then(res=> res.text())
    .then(text=> {
        console.log('parsed: ', text);
        result = text;
    })
    
    return (
       <div>
          <h1>Home</h1>
    <p>Home page body content {result}</p>
       </div>
    );
}
 
export default home;