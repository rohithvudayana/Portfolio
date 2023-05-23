import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle, Jumbotron, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const Progress_bar = ({bgcolor,progress,skill,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        marginLeft:0 ,
        marginTop: 50,
        marginBottom : 50
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'left'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{skill}</span>
      </div>
    </div>
    )
}
  


    const Resume = (props) => {

        return (
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/Aboutus'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Resume</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Resume</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className='col-4'>
                        <h4>EDUCATION</h4>
                    </div>

                    <div className='col-8'>
                        <h3>IIIT Sricity</h3>
                        <p>Bachelor's Degree, Electronics and Communication  •  Dec 2024</p>
                        <h7>CGPA - 8.00</h7><br/><br/>
                        <h3>Narayana Junior college</h3>
                        <p>11th and 12th  •  Jul 2020</p>
                        <h7>percentage - 93.4%</h7><br/><br/>
                        <h3>Narayana High school</h3>
                        <p>10th Standard •  Jul 2018</p>
                        <h7>CGPA - 10.00</h7><br/><br/>
                        <hr/>
                    </div>

                    <div className='col-4'>
                        <h4>SKILLS</h4>
                    </div>
                    <div className='col-8'>                       
                        <div className="App">
                            <div className='col-12'>
                            <Progress_bar bgcolor="orange" progress='50' skill="CPP" height={30} />
                            <Progress_bar bgcolor="red" progress='80' skill="REACTJS"   height={30} />
                            <Progress_bar bgcolor="#99ff66" progress='70'   skill="NODEJS" height={30} />
                            <Progress_bar bgcolor="#ff00ff" progress='80'  skill="FULL STACK" height={30} />
                            </div>
                        </div>
                        <hr />                             
                    </div>
                    

                    <div className='col-4'>
                        <h4>CERTIFICATES</h4>
                    </div>

                    <div className='col-8'>
                    <div className="row"  >
                        <div className="col-6">
                            <img  className="rohith" src='/assets/images/front.png' alt="reactjs certificate" ></img>    
                            <div className='overlay'>front end certificate</div>                       
                        </div>
                        <div className="col-6">
                            <img className="rohith" src='/assets/images/back.png' alt="nodejs certificate" ></img><br/><br/>
                        </div>
                    </div>
                    </div>
                    

                </div>
            </div>
        );
    }

export default Resume;
