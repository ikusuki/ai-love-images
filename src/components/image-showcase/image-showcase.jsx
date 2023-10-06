import tenoChanImage from "./assets/teno-chan-photo.png"
import "./image-showcase.css"

export const ImageShowcase = ({src, isLoading}) => {
  return (
  <div className={`imageWrapper ${isLoading === false ? "animate" : ""}`}>
    <img src={src || tenoChanImage} alt="Everybody loves TenoChan" />
    <div className={isLoading ? "loading full" : "loading"}></div>
  </div>
)}