import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div class="contact">

   <h1 class="heading"> تواصل <span>معنا</span></h1>
   <div className="container">
   <div class="icons-container">

<div class="icons">
   <i class="fas fa-clock"></i>
   <h3>ساعات العمل :</h3>
   <p style={{fontWeight: 'bold' , fontSize: '16px'}}>من الساعة العاشرة صباحا ألي الساعة السادسة مساء</p>
</div>

<div class="icons">
   <i class="fas fa-phone"></i>
   <h3>رقم الهاتف :</h3>
   <p  style={{fontWeight: 'bold',  fontSize: '18px'}}>01018147820</p>
</div>

<div class="icons">
   <i class="fas fa-envelope"></i>
   <h3> الأيميل :</h3>
   <p  style={{fontWeight: 'bold', fontSize: '18px'}}>freedomofchoicedata@gmail.com</p>
</div>

<div class="icons">
   <i class="fas fa-map"></i>
   <h3>العنوان : </h3>
   <p style={{fontWeight: 'bold' , fontSize: '18px' , fontFamily: 'Almaria'}}>الشرقية - الزقازيق - فلل الجامعة 14 شارع عمر بن الخطاب امام مطعم هوت برجر</p>
</div>

</div>
   </div>
 



</div>
  )
}

export default Contact