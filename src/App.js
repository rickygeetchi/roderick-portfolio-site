import React from 'react';
import './App.css';
import { ReactComponent as RsHeader } from "./assets/RS-header.svg";
import { ReactComponent as Mail } from "./assets/mail.svg";
import { ReactComponent as InfoCard } from "./assets/infocard.svg";
import { ReactComponent as Github } from "./assets/github.svg";
import { ReactComponent as Spotify } from "./assets/spotify.svg";
import { ReactComponent as LinkedIn } from "./assets/linkedin.svg";
import Background from "./assets/background.svg";


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Background})`}}>
      <div className="header">
        <div className="rshead">
          <RsHeader />
          </div>
          <div className="mail">
            <Mail/>
          </div>
       </div>
    <div className="facecard">
      <div className="infocard">
        <InfoCard />
      </div>
      <div className="iconlinks">
      <a href='https://github.com/rickygeetchi' target="_blank">
      <Github id="github" />
      </a>
      <a href='https://www.linkedin.com/in/roderick95/' target="_blank">
      <LinkedIn id="linkedin" />
      </a>
      <a href='https://open.spotify.com/artist/6fFGgO33absofu7uUkIGyV' target="_blank">
      <Spotify id="spotify" />
      </a>
      
      </div>
    </div>
      
    </div>
  );
}

export default App;
