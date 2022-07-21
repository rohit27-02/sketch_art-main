/* eslint-disable @next/next/no-img-element */
import React from "react";
import useImageZoom from "react-image-zoom-hook";
import { useState,useEffect } from "react";
 
export default function AppWithZoomCustomization({image}) {
const [left, setleft] = useState(false);

  
    const imgHeight = "1vw";
  
    const imgWidth = "4vw";
  
    const lensHeight = 100;
  
    const lensWidth = 100;
  
    const previewLensHeight = 600;
  
    const img =
      image
    const previewImg =
     image
  
    const {
      moveLens,
  
      imgDimesions,
  
      lensDimensions,
  
      previewLensDimensions,
  
      previewImgDimensions,
  
      imgContainerDimesions,
  
      imgRefCallback,
  
      meshRefCallback,
  
      imagePreviewRefCallback
    } = useImageZoom({
      imgHeight,
  
      imgWidth,
  
      lensHeight,
  
      lensWidth,
  
      previewLensHeight,
  
      img,
  
      previewImg
    });
  
    /**
  
  * Two images are involved here, user need to have a actual image and
  
  * one good quality image with higher resolution
  
  */
  
    return (
      <div className=" absolute top-[51.5vw] w-[100vw] z-30 flex">
        <div
          className="left-[17vw] top-[5vw] absolute   "
          onMouseMove={moveLens}
          onMouseLeave={()=>setleft(false)}
          onMouseEnter={()=>setleft(true)}
          style={{
            ...imgContainerDimesions,
            height:"24vw"
          }}
        >
         {left && <div
            ref={meshRefCallback}
            className="mesh"
            style={{
              ...lensDimensions,
              height:"5vw",
              width:"4vw"
            }}
          />
  }
          <img
            style={{
             
              height:"24vw",
              width:"18vw"
            }}
            ref={imgRefCallback}
            alt="test"
            src={img}
            className=""
          />
        </div>
  
       {left && <div
          className=" overflow-hidden ml-[20vw]  bg-white "
          // ref={imagePreviewRefContainer}
  
          style={{
            
            height:"50vw",
            width:"50vw"
          }}
        >
         <div className="h-[240vw] w-[180vw]">
         <img
            ref={imagePreviewRefCallback}
            alt="test-preview"
            src={previewImg}
           
            className="  z-30"
          />
         </div>
        </div>}
      </div>
    );
  }
  
 
  