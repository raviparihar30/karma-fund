// Philosophy.js
import React from "react";
import "./philosophy.modules.css";
import { Reveal } from "react-awesome-reveal";

function Philosophy() {
  return (
    <section id="philosophy" className="philosophy-section dark-background">
      <div className="container">
        <div className="philosophy-content">
          <div
            style={{
              flex: 1,
            }}
          >
            <h1 className="mb-4">PHILOSOPHY</h1>
            <ul>
              <Reveal className="fade-in">
                <li>
                  Capitalize on market movements and the lack of movements by
                  manufacturing attractive returnirisk ratios. Systematic
                  approach, without being in the market at all times.
                </li>
              </Reveal>
              <Reveal className="fade-in" delay={200}>
                <li>
                  Position sizing is key to manage risk return especially in
                  less mature markets such as crypto. When markets are
                  turbulent, a “reasonable” position may be impossible to exit.
                  We guard against this by having significant dry powder
                  available to capitalize on normalizations.
                </li>
              </Reveal>
              <Reveal className="fade-in" delay={400}>
                <li>
                  We are rarely more than 50% invested in the market and keep
                  this liquidity very close to us. Liquidity and deep pockets =
                  Alpha
                </li>
              </Reveal>
              <Reveal className="fade-in" delay={600}>
                <li>
                  Conservativeness invariably proves to be the winning
                  philosophy when stress returns. Don't try to predict stress,
                  prepare for it
                </li>
              </Reveal>
            </ul>
          </div>
          <div className="philosophy-part">
            {/* Part 2 content */}
            <div className="part-squares">
              <div className="part-square">
                <p>
                  Manage risk without fear of blow-ups. Therefore we. purchase
                  protection against our risk element: intelligent manner to
                  minimize portfolio drawdowns
                </p>
              </div>
              <div className="part-square">
                <p>
                  Comfort with periods of fiat performance as we dont expect to
                  get the best odds most times. Those periods and opportunities
                  are there, but patience is key.
                </p>
              </div>
              <div className="part-square">
                <p>
                  Return profiles that enable us to generate 35-70% gross
                  returns and compound that for years. Again this cannot come at
                  the expense of existential risk hence once that is out of the
                  picture, we. try to generate returns from what the market
                  gives us
                </p>
              </div>
              <div className="part-square">
                <p>
                  If this describes you as well in approach, we invite you tobe
                  part of this together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
