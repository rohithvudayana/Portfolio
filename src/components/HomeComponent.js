import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, Jumbotron,CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {

    return(

        <div className="container">
         
                <div className='jumbotron'>
                    <div className="row row-header">
                        <div className="col-4">
                                <img class ="center"   src='/assets/images/Rohith.jpg'></img>
                        </div>
                        <div className="col-8">
                            <h1>I'm Rohith.</h1>
                            <p>Based in srikakulam. Student at IIITS. I am a full stack developer .</p>
                        </div>
                    </div>
                </div>
            

            <Breadcrumb>
                <BreadcrumbItem><Link to="/Aboutus">Home</Link></BreadcrumbItem>
                {/* <BreadcrumbItem active>About Me</BreadcrumbItem> */}
            </Breadcrumb>

            <div className="row">             
                <div className="col-12">
                    <h3>About Me</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <p>Hi there! I am Rohith I've been coding for over 1 year now. I havebeen working on webdevelopment , I've worked with startups to help build & scale their companies.</p>                   
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Contact</CardHeader>
                        <CardBody>
                            <h4>Vudayana Rohith</h4>
                            <p>srikakulam   Andhra pradesh</p>
                            <p>6309425077</p>
                            <p>rohithvudayana46@gmail.com</p>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    
                </div>
            </div>
            
        </div>
    );
}

export default About;  