import React from "react";
require("./Manager.css");

// const customSize = {
//     height: 374px, max-height:374px,
// }

const Manager = props => {
  return (
  <div className="container-fluid mainContainer">
  <h1 className="text-center title">Manager</h1>

  <br/>

  <div id="carouselExampleSlidesOnly" className="carousel slide customCarousel" data-ride="carousel">
  <div className="carousel-inner " role="listbox">
    <div className="carousel-item active">
      <img className="d-block img-fluid rounded mx-auto d-block customImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/041933-3d-transparent-glass-icon-sports-hobbies-cup-trophy.png" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid rounded mx-auto d-block customImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/041903-3d-transparent-glass-icon-sports-hobbies-ball-basketball.png" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid rounded mx-auto d-block customImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/041907-3d-transparent-glass-icon-sports-hobbies-ball-soccer.png" alt="Third slide"/>
    </div>
    <div className="carousel-item">
    <img className="d-block img-fluid rounded mx-auto d-block customImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/041989-3d-transparent-glass-icon-sports-hobbies-people-hockey1-sc37.png" alt="Third slide"/>
  </div>
  <div className="carousel-item">
    <img className="d-block img-fluid rounded mx-auto d-block customImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-silver-icons-sports-hobbies/044659-glossy-silver-icon-sports-hobbies-people-basketball23-sc29.png" alt="Third slide"/>
  </div>
  <div className="carousel-item">
    <img className="d-block img-fluid rounded mx-auto d-block customImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png" alt="Third slide"/>
  </div>

  </div>
</div>
<br/>

<p className=" btnContainer align-text-bottom">
  <button type="button" className="btn btn-primary btn-lg btn-block customBtn">Sign In</button>
  <button type="button" className="btn btn-secondary btn-lg btn-block customCreateBtn">Create</button>
</p>


</div>
  );
};

export default Manager;
