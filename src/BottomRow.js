import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  let [round, setRound] = useState(0);
  let [down, setDown] = useState(0);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button className="quarter" onClick={() => down <= 3 ? setDown(down + 1) : setDown(down = 1)}>Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
  <div className="quarter__value">{round}</div>
        <button className="quarter" onClick={() => round <= 3 ? setRound(round + 1) : setRound(round = 1)}>Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
