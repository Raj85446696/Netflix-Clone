import React from "react";
import "../Home/Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/Play_icon.png";
import info_icon from "../../assets/info_icon.png";
import Titlecard from "../../components/TitleCards/Titlecard.jsx";
import Footor from "../../components/Fotoor/Footor.jsx";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div class="hero">
        <img src={hero_banner} alt="hero_banner" className="banner-img" />
        <div class="hero-caption">
          <img src={hero_title} alt="hero_titel" className="caption-img" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            dolorum aliquid cumque dolor culpa, natus asperiores sapiente.
          </p>

          <div class="hero-btns">
            <button className="btn"> <img src={play_icon} alt=""/>Play</button>
            <button className="btn dark-btn"> <img src={info_icon} alt=""/>More Info</button>
          </div>
          <div className="title-cards"><Titlecard/></div>
        </div>
      </div>
      <div class="more-cards">
      <Titlecard title={"Blockbuster Movies"} category={"top_rated"}/>
      <Titlecard title={"Only on Netflix"} category={"popular"}/>
      <Titlecard title={"Upcoming"} category={"upcoming"}/>
      <Titlecard title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footor/>
    </div>
  );
}

export default Home;
