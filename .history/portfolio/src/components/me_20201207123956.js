import { Component  } from "react";
import portfolioPic from "./images/summer2020.jpg";

class Me extends Component{
    state = {
        name: "Charles Pelton",
        moto: "Continually work on the person in the mirror, in order to change the world.",
        career: "Operations Supervisor, DHL Supply Chain",
        aspiration: "Full stack web developer / Software Engineer"
    }
    render(){
        return(
            <div id="me">
                {this.state.name}<br />
                <img src={portfolioPic} alt='Me' width='250' height='375' /><br />
                <em>{this.state.moto}</em><br />
                <b>Currently I am an {this.state.career}</b><br />
                <b><em>I am aspireing to be a {this.state.aspiration}</em></b>
            </div>
        )
    }
};

export default Me;