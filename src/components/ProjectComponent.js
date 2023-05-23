import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    const Project = (props) => {

        return (
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/Aboutus'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Projects</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        {/* <h3>Projects</h3> */}
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className='col-4'>
                        <h4>PROJECTS</h4>
                    </div>

                    <div className='col-8'>
                       <h3><a href='https://rohithvudayana.github.io/tindog/'> Tindog </a></h3>
                       <p>  It is a social app for dog lovers who want to connect with other owners nearby that share a similar passion for canines,
                         according to its developer Holidog, an online marketplace for pet services.  
                        <br/>• May 2021 </p>
                       <p></p><br/>
                       <h3><a href=''> My portfolio </a></h3>
                       <p> This is my personal portfolio website of all my achievements and accomplishments , which is built up on top of Reactjs.<br/> • May 2021 </p>
                       <p></p>
                        <hr/>
                    </div>
                    

                </div>
            </div>
        );
    }

export default Project;
