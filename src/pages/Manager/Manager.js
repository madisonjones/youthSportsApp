import React from "react";
import Footer from "../../components/Footer"
import Carousel from "../../components/Carousel";
require("./Manager.css");

// const customSize = {
//     height: 374px, max-height:374px,
// }

const Manager = props => {
  return (
  <div className="main">
    <div className="cont">
  <h1 className="text-center title">Manager</h1>

  <br/>

  <Carousel />

<br/>

<p className=" btnContainer align-text-bottom">
  <button type="button" className="btn btn-primary btn-lg btn-block customBtn"><a href="/manager/login">Sign In</a></button>
  <button type="button" className="btn btn-secondary btn-lg btn-block customCreateBtn"><a href="manager/register">Create</a></button>
</p>
</div>
<Footer/>
</div>
  );
};

export default Manager;
