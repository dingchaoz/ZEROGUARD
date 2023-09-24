const hre = require("hardhat");

async function main() {
  
  // Deploy the CommitReveal contract
  const CommitRevealUint = await hre.ethers.deployContract("CommitRevealUint");
  await CommitRevealUint.waitForDeployment();


  console.log("CommitRevealUint contract deployed to:", CommitRevealUint.target);
}

// Handle errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
