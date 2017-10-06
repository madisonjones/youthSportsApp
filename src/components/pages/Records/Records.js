import React from "react";
import Navbar from "../../components/Navbar";
import SideNav from "../../components/SideNav";
import Messages from "../../components/Messages";
require("./Records.css");

const Records  = () => {
    return (
    <div classNameName="h-100">
    <Navbar />
    <div classNameName="container-fluid mainContainer">
    <div classNameName="row h-100">
      <SideNav />
      
      <div classNameName="col pt-2 mainBackground">
   
      {/* <button classNameName="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
      <img classNameName="d-block img-fluid rounded mx-auto d-block customImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/041933-3d-transparent-glass-icon-sports-hobbies-cup-trophy.png" alt="First slide"/>
      </button>
      
      <div classNameName="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div classNameName="modal-dialog modal-lg">
          <div classNameName="modal-content h-100 w-100">
              <h1>Top</h1>
          <div id="carouselExampleSlidesOnly" classNameName="carousel slide customCarousel" data-ride="carousel">
    <div classNameName="carousel-inner " role="listbox">
      <div classNameName="carousel-item active">
        <img classNameName="d-block img-fluid rounded mx-auto d-block customImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/041933-3d-transparent-glass-icon-sports-hobbies-cup-trophy.png" alt="First slide"/>
      </div>
      <div classNameName="carousel-item">
        <img classNameName="d-block img-fluid rounded mx-auto d-block customImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/041903-3d-transparent-glass-icon-sports-hobbies-ball-basketball.png" alt="Second slide"/>
      </div>
      <div classNameName="carousel-item">
        <img classNameName="d-block img-fluid rounded mx-auto d-block customImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/041907-3d-transparent-glass-icon-sports-hobbies-ball-soccer.png" alt="Third slide"/>
      </div>
      <div classNameName="carousel-item">
      <img classNameName="d-block img-fluid rounded mx-auto d-block customImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/041989-3d-transparent-glass-icon-sports-hobbies-people-hockey1-sc37.png" alt="Third slide"/>
    </div>
    <div classNameName="carousel-item">
      <img classNameName="d-block img-fluid rounded mx-auto d-block customImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-silver-icons-sports-hobbies/044659-glossy-silver-icon-sports-hobbies-people-basketball23-sc29.png" alt="Third slide"/>
    </div>
    <div classNameName="carousel-item">
      <img classNameName="d-block img-fluid rounded mx-auto d-block customImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-sports-hobbies/042005-3d-transparent-glass-icon-sports-hobbies-people-volleyball.png" alt="Third slide"/>
    </div>

    </div>
  </div>
          </div>
        </div>
      </div> */}

      <div>
      <a className="example-image-link " href="http://digitalspyuk.cdnds.net/16/09/1600x800/landscape-1456759219-14993-call-of-duty-4-modern-warfare-game-desktop-wallpaper-2560x1600.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img className="example-image customImg" src="http://digitalspyuk.cdnds.net/16/09/1600x800/landscape-1456759219-14993-call-of-duty-4-modern-warfare-game-desktop-wallpaper-2560x1600.jpg" alt=""/></a>

      <a className="example-image-link "  href="https://resource.supercheats.com/library/2016/1478244285codinfinitewarfare.png" data-lightbox="example-set" data-title="Or press the right arrow on your keyboard."><img className="example-image customImg" src="https://resource.supercheats.com/library/2016/1478244285codinfinitewarfare.png" alt="" /></a>

      <a className="example-image-link " href="http://cdn.edgecast.steamstatic.com/steam/apps/209160/extras/Art-SteamSpecialAnnouncement-GoldEdition.jpg?t=1447355542" data-lightbox="example-set" data-title="The next image in the set is preloaded as you're viewing."><img className="example-image customImg" src="http://cdn.edgecast.steamstatic.com/steam/apps/209160/extras/Art-SteamSpecialAnnouncement-GoldEdition.jpg?t=1447355542" alt="" /></a>

      <a className="example-image-link " href="https://blog.activision.com/eikmo72643/attachments/eikmo72643/call-of-duty/1101/1/Beta_Main3.jpg%27);" data-lightbox="example-set" data-title="Click anywhere outside the image or the X to the right to close."><img className="example-image customImg" src="https://blog.activision.com/eikmo72643/attachments/eikmo72643/call-of-duty/1101/1/Beta_Main3.jpg%27);" alt="" /></a>
    </div>
      
      

      </div>
    </div>
    </div>
    </div>
    )
}

export default Records