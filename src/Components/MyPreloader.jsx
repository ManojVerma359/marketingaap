import React from "react";
import { Pre_logo4 } from "./Iconsvg";

const MyPreloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.style.overflow = "unset";
  }, 3000);

  return (
    <section
      className="perloaderback z_index_2000 position-relative bg-gray z_indexxx"
      id="none"
    >
      <div className="none">
        <div className="perloaderback text-center d-flex align-items-center justify-content-center start-0 top-0 b w-100 z_index_100 min-vh-100 position-fixed">
          {/* <img
            src={madeimg}
            alt="preloder_img"
            className="d-flex align-items-center justify-content-center animation_preloader w-25"
          /> */}
          <div className="d-flex align-items-center justify-content-center animation_preloader w_100px "><Pre_logo4/></div>
        </div>
      </div>
    </section>
  );
};
export default MyPreloader;