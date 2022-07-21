/* eslint-disable @next/next/no-img-element */
import React from "react";
import useImageZoom from "react-image-zoom-hook";
 
export default function AppWithZoomCustomization({image}) {
console.log(image)
  
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
      <div className="container absolute top-[55.5vw] justify-around left-[20vw] flex">
        <div
          className="img-main-container"
          onMouseMove={moveLens}
          style={{
            ...imgContainerDimesions
          }}
        >
          <div
            ref={meshRefCallback}
            className="mesh"
            style={{
              ...lensDimensions,
              height:"5vw",
              width:"4vw"
            }}
          />
  
          <img
            style={{
             
              height:"20vw",
              width:"14vw"
            }}
            ref={imgRefCallback}
            alt="test"
            src={img}
            className=""
          />
        </div>
  
        <div
          className="img-preview-section-container"
          // ref={imagePreviewRefContainer}
  
          style={{
            
            height:"100vw",
            width:"60vw"
          }}
        >
          <img
            ref={imagePreviewRefCallback}
            alt="test-preview"
            src={previewImg}
            style={{
              ...previewImgDimensions
            }}
            className="img-preview-section absolute z-30"
          />
        </div>
      </div>
    );
  }
  
 
  