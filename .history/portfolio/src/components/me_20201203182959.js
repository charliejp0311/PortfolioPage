import { Component  } from "react";

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
                <img src='../images/summer2020.jpg' alt='Me' /><br />
                {this.state.moto}<br />
                {this.state.career}<br />
                {this.state.aspiration}
            </div>
        )
    }
};

export default Me;