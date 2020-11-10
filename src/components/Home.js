import React from 'react';

class home extends React.Component {
    constructor(props){
        super(props);
        this.state = {result: "none"};
    }

    componentDidMount(){
        const api = 'http://18.224.61.179:5000/'
        console.log("component mounted");
        var result;
        fetch(api)
        .then(res=> res.text())
        .then(text=> {
            console.log('parsed: ', text);
            this.setState(  {result : text});
        })    
    }

    render(){

        return (
           <div>
            <h1>Home</h1>
            <p>Home page body content {this.state.result}</p>
           </div>
        );
    }

}
 
export default home;
