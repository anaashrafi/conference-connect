import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

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
           <div style={{paddingTop: "120px"}}>
            <h1 style={{paddingBottom: "140px"}}>Welcome, <b>Ana</b>. To start making connections, please register your band below.</h1>
            {/* <p>Home page body content {this.state.result}</p> */}
            <Container style={{backgroundColor: "#7030a0", paddingTop: "30px"}}>
                <Form>
                    <Form.Group controlId="conferenceID" style={{fontSize: "25px", color: "white"}}>
                        <Form.Label>Conference ID</Form.Label>
                        <Form.Control type="conference" style={{fontSize: "22px"}} placeholder="Enter Conference ID" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group controlId="bandID" style={{fontSize: "25px", marginTop: "30px", color: "white"}}>
                        <Form.Label>Band ID</Form.Label>
                        <Form.Control type="band" style={{fontSize: "22px"}} placeholder="Enter Band ID" />
                    </Form.Group>
                    <Button variant="light" style={{fontSize: "22px", marginTop: "30px", marginBottom: "30px"}} type="submit">
                        Register Band
                    </Button>
                </Form>
            </Container>
           </div>
        );
    }

}
 
export default Home;
