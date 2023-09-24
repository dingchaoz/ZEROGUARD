task("commit", "Sends SimpleCoin")
.addParam("contract", "The SimpleCoin address")
// .addParam("amount", "The amount to send")
// .addParam("toaccount", "The account to send to")
.setAction(async (taskArgs) => {
    //store taskargs as useable variables
    const contractAddr = taskArgs.contract
    // const amount = taskArgs.amount
    // const toAccount = taskArgs.toaccount

    //create a new wallet instance
    const wallet = new ethers.Wallet(network.config.accounts[0], ethers.provider)

    //create a SimpleCoin contract factory
    const CommitReveal = await ethers.getContractFactory("CommitReveal", wallet)
    //create a SimpleCoin contract instance 
    //this is what you will call to interact with the deployed contract
    const commitReveal = await CommitReveal.attach(contractAddr)

    //console.log("Sending:", amount, "SimpleCoin to", toAccount)

    //send transaction to call the sendCoin() method
    const hash = '0xa0636f449b8cb06289dca20789ad430ec36a9f0e3e3c8c8c9909d535473a0a36'
    const transaction = await commitReveal.commitVote(hash)
    const receipt = await transaction.wait()
    console.log("receipt is", receipt)
    // let result = BigInt(await simpleCoinContract.getBalance(toAccount)).toString()
    // console.log("Total SimpleCoin at:", toAccount, "is", result)
})