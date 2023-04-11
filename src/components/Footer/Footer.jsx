import React from 'react';
import './Footer.css';
import logo from './../../images/freedom.png';

const Footer = () => {
  return (
    <section class="footer">

   <div class="box-container">

      <div class="box">
         <div class="share">
            <a href="https://www.facebook.com/freedom055" target="_blank" class="fab fa-facebook-f"></a>
            <a href="https://twitter.com/freedom52057624" target="_blank" class="fab fa-twitter"></a>
            <a href="https://www.tiktok.com/@freedom_academy?lang=en"  target="_blank"  class="fab fa-tiktok"  ></a>
            <a href="https://www.instagram.com/freedom__055/" target="_blank" class="fab fa-instagram"></a>
            <a href="https://www.youtube.com/channel/UCIY---kfx3Z99wH82crQepQ" target="_blank"  class="fab fa-youtube"></a>
         </div>
         <h3><span>Space Center</span><img class="imgs" width="80" height="80" src={logo} alt="" />  </h3>

      </div>
   



    
   </div>

   <div class="credit"> created by <span>Space Center</span> | all rights reserved! </div>

</section>
  )
}

export default Footer