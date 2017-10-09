import React from "react";
import Footer from "../../components/Footer"
import Carousel from "../../components/Carousel";

require("./Teammate.css");

const Teammate  = () => {
    return (
        <div className="container-fluid mainContainer">
          <div className="cont">
    <h1 className="text-center title">Teammate</h1>

    <br/>

    <Carousel />
<br/>

<p className=" btnContainer align-text-bottom">
    <button type="button" className="btn btn-primary btn-lg btn-block customBtn"><a href="/teammate/login">Sign In</a></button>
    <button type="button" className="btn btn-secondary btn-lg btn-block customCreateBtn"><a href="/teammate/register">Create</a></button>
</p>
</div>
<Footer/>
  </div>
    )}



export default Teammate