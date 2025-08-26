// Mock data for the Open Pool Ledger
const pool = {
  stripeUSD: 0.00,
  solanaSOL: 1.8,
  payoutsUSD: 0.00,
  solanaWallet: "4c2Uhh2NSyYymBsQiB3eb5D8A5iauv8cc98HqiRBJmAz",
};

function getPool() {
  return pool;
}

module.exports = { getPool };

