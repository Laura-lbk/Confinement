import React from 'react';
import '../CSS/background.css';
import Particles from 'react-particles-js';



class Background extends React.Component {
    


    render() {
    return <div className="particles-container">
        <Particles params={{
          "particles":{
            "number":{
            "value":80
          },
          "size":{
            "value":3
          }
        },
        "interactivity":{
          "events":{
            "onhover":{
              "enable":true,
              "mode": "repulse"
            }
          }
        }
        }}/>
        </div>;
    }
  }

export default Background;