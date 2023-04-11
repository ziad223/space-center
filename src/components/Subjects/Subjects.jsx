import React from 'react';
import './Subjects.css';
import arabic from '../../images/arabic.jpeg'

const Subjects = () => {
  return (
    <div className='subjects'>
        <div className="container">
        <h2>اللغات التي نقوم <span>بتدريسها</span> </h2>
        <div className="langs">

            <div className="lang">
                <h2>اللغة العربية</h2>
                <p>تقوم أكاديمية بشرح مفصل للغة العربية لجميع مراحل الثانوية (اولي وتانية وتالتة ) ثانوي مع متابعة يومية وامتحانات </p>
                <img src={arabic} alt="" />
                <button className='btn'>Book Now</button>
            </div>


            <div className="lang">
                <h2>اللغة العربية</h2>
                <p>تقوم أكاديمية بشرح مفصل للغة العربية لجميع مراحل الثانوية (اولي وتانية وتالتة ) ثانوي مع متابعة يومية وامتحانات </p>
                <img src={arabic} alt="" />
                <button className='btn'>Book Now</button>
            </div>

            <div className="lang">
                <h2>اللغة العربية</h2>
                <p>تقوم أكاديمية بشرح مفصل للغة العربية لجميع مراحل الثانوية (اولي وتانية وتالتة ) ثانوي مع متابعة يومية وامتحانات </p>
                <img src={arabic} alt="" />
                <button className='btn'>Book Now</button>
            </div>

            <div className="lang">
                <h2>اللغة العربية</h2>
                <p>تقوم أكاديمية بشرح مفصل للغة العربية لجميع مراحل الثانوية (اولي وتانية وتالتة ) ثانوي مع متابعة يومية وامتحانات </p>
                <img src={arabic} alt="" />
                <button className='btn'>Book Now</button>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Subjects