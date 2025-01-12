import React from 'react'
import './Footor.css'
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

function Footor() {
  return (
    <div>
      <div class="footor">
        <div class="footor-icons">

        <img src={instagram_icon} alt="instagram icon"/>
          <img src={twitter_icon} alt="twitter icon "/>
          <img src={facebook_icon} alt="facebook icon "/>
          <img src={youtube_icon} alt="youtube icon"/>
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gifts Cards</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of use</li>
          <li>Privacy</li>
          <li>Legal Notice</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <p class="copyright-text"> &copy; 2024 Netflix.com</p>
      </div>
    </div>
  )
}

export default Footor
