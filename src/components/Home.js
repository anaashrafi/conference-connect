import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {result: "none"};
    }

    componentDidMount(){
        const api = 'http://18.224.61.179:5000/'
        fetch(api + 'users')
        .then(res=> res.text())
        .then(text=> {
            console.log('parsed: ', text);
            this.setState(  {result : text});
        })    
    }

    render(){

        return (
           <div>
            <h1>Home Ana</h1>
            <p>Home page body content {this.state.result}</p>
           </div>
        );
    }

}
 
export default Home;
