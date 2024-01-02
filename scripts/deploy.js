
const hre = require("hardhat");

async function main() {
  const chatApp = await hre.ethers.deployContract("chatApp", [unchatAppTime], {
    value: chatAppedAmount,
  });

  await chatApp.waitForDeployment();

  console.log(
    `chatApp with ${ethers.formatEther(
      chatAppedAmount
    )}ETH and unchatApp timestamp ${unchatAppTime} deployed to ${chatApp.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
