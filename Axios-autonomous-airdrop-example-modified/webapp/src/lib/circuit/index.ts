import { Halo2Lib, Halo2Data } from "@axiom-crypto/halo2-js";
import { CircuitInputs } from "./constants";

export const circuit = async (
  halo2Lib: Halo2Lib,
  halo2Data: Halo2Data,
  {
    winningOptionCount,
    checkVoteOption,
    block,
    addr,
    mappingSlot
  }: CircuitInputs
) => {
  const {
    constant,
    add,
    sub,
    and,
    or,
    not,
    select,
    assertEqual,
    checkLessThan,
    value,
    addToCallback,
    log,
    circuit
  } = halo2Lib;
  const {
    getAccount,
    getReceipt,
    getStorage,
    getTx,
    getHeader,
    getSolidityMapping,
    circuit: circuitData
  } = halo2Data;
  //
  //                 _                 _____  ______ _____  _
  //     /\         (_)               |  __ \|  ____|  __ \| |
  //    /  \   __  ___  ___  _ __ ___ | |__) | |__  | |__) | |
  //   / /\ \  \ \/ / |/ _ \| '_ ` _ \|  _  /|  __| |  ___/| |
  //  / ____ \  >  <| | (_) | | | | | | | \ \| |____| |    | |____
  // /_/    \_\/_/\_\_|\___/|_| |_| |_|_|  \_\______|_|    |______|
  //
  //

  // example Axiom REPL circuit to prove the first block an account transacted
  // get the previous block number
  // const prevBlock = sub(claimedBlockNumber, constant(1));

  // //get the account at the previous block
  // const accountPrevBlock = getAccount(prevBlock, address);

  // // get the account nonce at the previous block and assert that it is 0
  // const prevNonce = accountPrevBlock.nonce().toCircuitValue();
  // assertEqual(prevNonce, constant(0))

  // // get the account nonce at the claimed block number
  // const account = getAccount(claimedBlockNumber, address);
  // const currNonce = account.nonce().toCircuitValue();

  // //checks that currNonce > 0 at the claimed block
  // checkLessThan(constant(0), currNonce)

  // // Here is a list of all functions you can use to fetch on-chain data in the REPL.
  // // For more detailed docs and a list of all data and compute functions, see our
  // // preview docs at:
  // //
  // // docs-v2.axiom.xyz/axiom-repl/axiom-repl
  // //

  // // fetch block header data
  // let header = getHeader(block);
  // // access the timestamp field
  // let timestamp = header.timestamp();
  // // access the gasLimit field
  // let gasLimit = header.gasLimit();

  // // fetch account data
  // let acct = getAccount(block, addr);
  // // access the account balance at `block`
  // let balance = acct.balance();
  // // access the nonce of the account at `block`
  // let nonce = acct.nonce();

  // // fetch storage data
  // let storage = getStorage(block, addr);
  // // access the value at storage slot `slot`
  // let slotVal = storage.slot(slot);

  let mapping = getSolidityMapping(block, addr, mappingSlot);
  let mappingVal = mapping.key(checkVoteOption);

  const checkedOptionVoteCount = mappingVal.toCircuitValue();

  //checks that the checkedOptionVoteCount is less than the winning count
  checkLessThan(checkedOptionVoteCount, winningOptionCount);

  // add the actualCount and checkVoteOption to the callback, for it to be passed
  // as a result to the callback client contract
  addToCallback(checkedOptionVoteCount);
  // addToCallback(checkVoteOption);

  // fetch transaction data, example is for the transaction below:
  // https://goerli.etherscan.io/tx/0xa4f781ad033d6dab5b13e3ab7c7cbdbd0ea4c0a2be3d9ffa7ed1e53d2d5bcc46
  // let tx = getTx(txHash);
  // // access the index of the transaction within the block
  // let txIdx = tx.txIdx();
  // // get the 4-byte function selector that was called
  // let functionSelector = tx.functionSelector();
  // // access bytes [32, 64) of calldata
  // let calldata = tx.calldata(1);

  // // fetch receipt data, example is for the first event log in the transaction below
  // // Deposit (index_topic_1 address payor, uint256 amt)
  // // https://goerli.etherscan.io/tx/0xa4f781ad033d6dab5b13e3ab7c7cbdbd0ea4c0a2be3d9ffa7ed1e53d2d5bcc46
  // // eventSchema = keccak(Deposit(address,uint256))
  // const eventSchema = "0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c";
  // let receipt = getReceipt(txHash);
  // // access the address that emitted the log event at index 0
  // let logAddr = receipt.log(0).address();
  // // access the topic at index 1 of the log event at index 0 and check it has schema eventSchema
  // // because `address` is indexed in the event, this corresponds to `address`
  // let topic = receipt.log(0).topic(1, eventSchema);
  // // access the first 32 bytes of data in the log event at index 0
  // // because `amt` is not indexed, this corresponds to `amt`
  // let data = receipt.log(0).data(0);
};
