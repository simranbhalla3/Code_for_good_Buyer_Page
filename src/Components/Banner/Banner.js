import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
          <option value="Agri-Based">Agri-Based</option>
          <option value="Retail">Retail</option>
          <option value="Forest-Based">Forest</option>
          <option value="Artistic Products">Artisitic Products</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Agri-Based")} >Agri-Based</span>
            <span onClick={()=>setCategory("Retail")} >Retail</span>
            <span onClick={()=>setCategory("Forest")} >Forest</span>
            <span onClick={()=>setCategory("Artistic Products")} >Artistic Products</span>
          </div>
        </div>
        <div className="banner">
          <img src="../../../Images/banner copy.png" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
