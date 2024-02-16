import React from "react";
import "./home.scss"
import logoImg from "./images/logo.svg"
import dolarIcon from "./images/icon-dollar.svg"
import personIcon from "./images/icon-person.svg"

const home = () => {
  return (
    <div>
      <main class="main">
        <header class="img">
          <img src={logoImg} alt="" />
        </header>
        <div class="app">
          <div class="bill">
            <div class="money-input">
              <div class="input-bill user-input-bill">
                <label>Bill</label>
                <img
                  class="icon-dollar"
                  src={dolarIcon}
                  alt="dolar icon"
                />
                <input class="input bill-input" placeholder="0" type="tex" />
              </div>
              <div class="tip-wrapper">
                <label>Select Tip %</label>
                <div class="percents">
                  <button class="percent-btn">5%</button>
                  <button class="percent-btn">10%</button>
                  <button class="percent-btn">15%</button>
                  <button class="percent-btn">25%</button>
                  <button class="percent-btn">50%</button>
                  <div class="custom">
                    <input
                      class="custom custom-input"
                      type="text"
                      placeholder="Custom"
                    />
                  </div>
                </div>
              </div>
              <div class="person-input user-input-people">
                <label>Number of People</label>
                <img
                  class="icon-person"
                  src={personIcon}
                  alt="person icon"
                />
                <input class="input people-input" placeholder="0" type="text" />
              </div>
            </div>
          </div>
          <div class="amounts">
            <div class="tip-amount">
              <div class="tip-title">
                <p>Tip Amount</p>
                <span>/ person</span>
              </div>
              <div class="money">
                $<span class="money tip-money">0.00</span>
              </div>
            </div>
            <div class="total-amount">
              <div class="total-title">
                <p>Total</p>
                <span>/ person</span>
              </div>
              <div class="money">
                $<span class="money total-money">0.00</span>
              </div>
            </div>
            <button class="reset-btn">RESET</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default home;
