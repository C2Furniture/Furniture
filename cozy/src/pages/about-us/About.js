import React from "react";
import './About.css';
import Malak from '../Images/malak.jpeg';

import {FaCarSide ,FaHandHoldingUsd ,FaMedal} from "react-icons/fa";

const About =()=>{
    return(
<div>
<section className='about'>

<div className="container ">
<div className="row ">

<div className="col-lg-4 col-md-4">
<div className="about1"></div>

</div>
<div className="col-lg-8 col-md-8">
    <div className="services">
<h1>About Cozy</h1>
<p style={{textAlign:"left"}}>We curate inspiration for the home, connecting the creative work of artisans and designers to people and places around the world.</p>

<button class="button-8" role="button">Our services</button>

<div className="row icon0">
                           <div className="col-sm-4 col-6">
                            <div>
                            < FaMedal className=" icon2"/>
                            <h6 className="icon1">Quality Product</h6>
                            </div>
                        </div>

                        <div className="col-sm-4 col-6">
                            <div>
                                < FaHandHoldingUsd className=" icon2"/>
                                <h6 className="icon1">100% Cash Back</h6>
                            </div>
                        </div>
                        <div className="col-sm-4 col-6">
                            <div>
                            < FaCarSide className=" icon2"/>
                                <h6 className="icon1"> Free Delivery</h6>
                            </div>
                        </div>


</div>
</div>
</div>
</div>




</div>









</section>
<section className="room2"  style={{height:"744px"}}>

<div className="container ">




<div className="row">

<div className="col-lg-12 col-md-12 pt-5">

    <h1 className="Works pt-5">Our Works</h1>
<p >Cozy is a member of the Otto Group and employs 7,500 associates across Cozy. With over 100 stores and franchise partners in 9 countries, we are an international destination for contemporary and modern furniture, housewares and decor that help people Welcome Life In.</p>

</div>

{/* <div className="col-lg-6 col-md-6">
<div className="img2 ">
</div>
</div> */}




</div>
</div>
</section>

{/* <section className='room3'>


<div className="container marketing">
<div className="row featurette pt-5">


<div className="col-md-6">

    <h1 className="Works1" >Leading Interior Design Firm</h1>
   
</div>

<div className="col-md-6 ">

 
<div className="Work1"> elementum sed varius at, adipiscing vitae est.Mauris accumsan eros eget libero.</div>

</div>


</div>




</div>
</section> */}

<h2 style={{ textAlign: "center",margin:"22px" ,fontSize:"72px" }}>Our team</h2>

<div className="card-group">

  <div className="card">
  <img className="card-img-top image"  src={Malak} title='img'/>
    <div className="card-body">
      <h5 style={{fontSize:"25px" }} className="card-title">Malak Al-farwan</h5>
      <p className="card-text" style={{fontSize:"24px" }}>
      alfarwanmalak@gmail.com
      </p>
     
    </div>
  </div>
  <div className="card">
  <img className="card-img-top image"  src={Malak} title='img'/>
    <div className="card-body">
      <h5  style={{fontSize:"25px" }} className="card-title">Card title</h5>
      <p className="card-text"style={{fontSize:"24px" }}>
      alfarwanmalak@gmail.com
      </p>
     
    </div>
  </div>
  <div className="card">
  <img className="card-img-top image"  src={Malak} title='img'/>
    <div className="card-body">
      <h5  style={{fontSize:"25px" }} className="card-title">Card title</h5>
      <p className="card-text"style={{fontSize:"24px" }}>
      alfarwanmalak@gmail.com
      </p>
     
    </div>
  </div>
  <div className="card">
  <img className="card-img-top image"  src={Malak} title='img'/>
    <div className="card-body">
      <h5  style={{fontSize:"25px" }} className="card-title">Card title</h5>
      <p className="card-text" style={{fontSize:"24px" }}> 
      alfarwanmalak@gmail.com
      </p>
      
    </div>
  </div>
  <div className="card">
  
    <img className="card-img-top image"  src={Malak} title='img'/>
    <div className="card-body">
      <h5  style={{fontSize:"25px" }} className="card-title">Card title</h5>
      <p className="card-text" style={{fontSize:"24px" }} >
      alfarwanmalak@gmail.com
      </p>
     
    </div>
  </div>
</div>

</div>
)
}
export default About;