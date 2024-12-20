// HexagonMap.js
import './HexagonMap.css';

export default function HexagonMap() {
  return (
    <div className="hexagon-map">
      <div className="center-point"></div>

      <div className="hex-point" id="point-1"></div>
      <div className="hex-point" id="point-2"></div>
      <div className="hex-point" id="point-3"></div>
      <div className="hex-point" id="point-4"></div>
      <div className="hex-point" id="point-5"></div>
      <div className="hex-point" id="point-6"></div>

      <div className="line" id="line-1"></div>
      <div className="line" id="line-2"></div>
      <div className="line" id="line-3"></div>
      <div className="line" id="line-4"></div>
      <div className="line" id="line-5"></div>
      <div className="line" id="line-6"></div>

      <div className="circle" id="circle-1"></div>
      <div className="circle" id="circle-2"></div>
      <div className="circle" id="circle-3"></div>

      <h1 className="attributes" id="attribute-1">Analytics</h1>
      <h1 className="attributes" id="attribute-2">Programming</h1>
      <h1 className="attributes" id="attribute-3">Leadership</h1>
      <h1 className="attributes" id="attribute-4">Communication</h1>
      <h1 className="attributes" id="attribute-5">Problem Solving</h1>
      <h1 className="attributes" id="attribute-6">Innovation</h1>

      <div className="stats"></div>
    </div>
  );
}
