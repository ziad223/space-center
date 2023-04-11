import React from 'react';
import './About.css';
import about from '../../images/about.svg';
import room from '../../images/room.jpg';

const About = () => {
  return (
    <div className='about'>
      <div className="container">
        <h2>معلومات <span>عنا</span></h2>
        <div className="content">
            <p>
            <span>Space Center</span> هو مؤسسة لغات علمية رائدة ومتميزة في مجال التدريب وتقديم الدورات التدريبية والدورات عبر الإنترنت وغير المتصلة بالإنترنت والتدريب عن بعد. نقدم دورات تدريبية في مجالات مختلفة من خلال أمهر    وأفضل  المدربين وهي خاصة لتعليم اللغات لمراحل الثانوية (أولي وتانية وتالتة ) ثانوي .

            </p>
            <img src={about} alt="About" />
        </div>

  <div className="about-two">
  
   <div class="content-two">
      <div class="icons-container">
         <div class="icons">
         <i class="fa-solid fa-landmark" style={{color: 'rgb(196,47,217)',fontSize: '35px', marginBottom: '20px', marginTop: '10px'}}></i>
            <h3>12+</h3>
            <span>courses</span>
         </div>
         <div class="icons">
         <i class="fa-solid fa-graduation-cap" style={{color: 'rgb(196,47,217)',fontSize: '35px', marginBottom: '20px', marginTop: '10px'}}></i>

            <h3>8000+</h3>
            <span>students</span>
         </div>
         <div class="icons">
         <i class="fa-solid fa-person-chalkboard" style={{color: 'rgb(196,47,217)',fontSize: '35px', marginBottom: '20px', marginTop: '10px'}}></i>
            <h3>20+</h3>
            <span>Teachers</span>
         </div>
         <div class="icons">
            <i class="fa fa-face-smile" style={{color: 'rgb(196,47,217)',fontSize: '35px', marginBottom: '20px', marginTop: '10px'}}></i>
            <h3>99%</h3>
            <span>Satisfaction</span>
         </div>
         <div class="icons">
            <i class="fa-solid fa-person-shelter" style={{color: 'rgb(196,47,217)', fontSize: '35px', marginBottom: '20px', marginTop: '10px'}}></i>
            <h3>15+</h3>
            <span>Rooms </span>
         </div>
         <div class="icons">
            <i class="fa-brands fa-usps" style={{color: 'rgb(196,47,217) ' , fontSize: '35px', marginBottom: '20px' , marginTop: '10px'}}></i>
            <h3>20+</h3>
            <span>Services</span>
         </div>
      </div>
   </div>
   <div class="image">
      <img src={room} alt="" />
   </div>
  </div>
        </div>
    </div>
  )
}

export default About