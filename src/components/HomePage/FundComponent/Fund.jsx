import "./Fund.modules.css";
import { motion } from "framer-motion";

const FundComponent = () => {
  return (
    <div>
      <div className="fund-text-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="animate__animated animate__fadeInDown"
        >
          The <span className="text-success">Karma</span> Fund
        </motion.h1>
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="animate__animated animate__fadeInUp"
        >
          Fund creates systematic risk profile opportunities to increase return
          per unit of risk. We identify volatility regimes in the market and
          deploy strategies that can monetize the rate of change of markets
          while remaining market direction neutral. The market is monitored and
          traded 24/7 between our systems and people. Our investor base consists
          of Fund of Funds, Family Offices, HNW Individuals and Institutional
          Allocators across the globe. We accept capital once a month and do not
          have any gates after the first year. We also have monthly liquidity
          given the liquid nature of our positions
        </motion.h5>
      </div>
    </div>
  );
};

export default FundComponent;
