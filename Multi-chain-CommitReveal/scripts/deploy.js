const hre = require("hardhat");

async function main() {
  
  // Deploy the CommitReveal contract
  const commitReveal = await hre.ethers.deployContract("CommitReveal");
  await commitReveal.waitForDeployment();


  console.log("CommitReveal contract deployed to:", commitReveal.target);
  // await hre.run("verify:verify", {
  //   address:commitReveal.target,
  //   contract: "contracts/CommitReveal.sol:CommitReveal",
  //   constructorArguments:[],
  // })
}

// Handle errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
