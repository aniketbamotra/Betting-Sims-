import React from "react";
import { useEffect, useState } from "react";
import { phantom_connect } from "../pages/placeBet";

const BettingSlip = ({ isBetSlipOpen, closeBetSlip, betData }) => {
  const [total, setTotal] = useState();
  const [Odds, setOdds] = useState(betData.betOdds);
  const [Stake, setStake] = useState(betData.betStake);

  useEffect(() => {
    setOdds(betData.betOdds);
    setStake(betData.betStake);
  }, [betData.betOdds, betData.betStake]);

  useEffect(() => {
    let odds = document.getElementById("odds").value;
    let stake = document.getElementById("stake").value;
    setTotal((odds * stake).toFixed(2));
  });
  const handleOdds = (e) => {
    setOdds(e.target.value);
  };
  const handleStake = (e) => {
    setStake(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    phantom_connect();
  };

  return (
    <div>
      <div
        className={`betting-wrapper ${isBetSlipOpen && "betting-wrapper-open"}`}
        onClick={closeBetSlip}
      ></div>
      <div
        className={`betting-container ${
          isBetSlipOpen && "betting-container-open"
        }`}
      >
        <div className="betting-content">
          <form action="">
            <label htmlFor="odds" className="heading">
              Odds
            </label>
            <br />
            <input
              type="text"
              id="odds"
              className="body-text"
              onChange={handleOdds}
              value={Odds}
            />
            <br />
            <label htmlFor="stake" className="heading">
              Stake
            </label>
            <br />
            <input
              type="text"
              id="stake"
              className="body-text"
              onChange={handleStake}
              value={Stake}
            />
            <br />
            <label htmlFor="total-bet" className="heading">
              Total Winnings
            </label>
            <br />
            <input
              type="text"
              id="total-bet"
              className="body-text"
              value={total}
            />
            <br />
            <button className="place-bet body-text" onClick={handleSubmit}>
              Place Bet!
            </button>
          </form>
          <div className="hidden-data">
            <p id="acc">{betData.account}</p>
            <p id="id1">0</p>
            <p id="id2">{betData.gameId}</p>
            <p id="ha">{betData.homeAway}</p>
            <p id="originalOdds">{betData.betOdds}</p>
            <p id="originalStake">{betData.betStake}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingSlip;