import React , {Component} from 'react';
import Resume from './ResumeComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Project from './ProjectComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
            <Switch>
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/contactus" component={Contact} />
                <Route exact path="/projects" component={Project} />
                <Route path="/Home" component={Home}/>
                <Redirect to="/Home" />
            </Switch>
        <Footer />    
      </div>
    )
  }
}
export default Main;

