/*
var http = require('http');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));



//create a server object:
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client

    var abi = [{"constant":true,"inputs":[],"name":"getWinner","outputs":[{"name":"winnerId","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"voterAdress","type":"address"}],"name":"giveRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"candidateId","type":"uint8"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"closeVoting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"numberOfCandidates","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
    var adress = 0x06b24b10c19b30df7bb8d918fc080f3f31a400e4;
    var myContract = new web3.eth.Contract(abi, adress);
    res.write(myContract.address);

    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080


*/
const Accounts =  require('web3-eth-accounts');
const Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const accounts = new Accounts('ws://localhost:8546', null);
web3.eth.accounts.
web3.eth.getAccounts((error => console.log(error))).then(console.log);;


  //  var abi = [{"constant":true,"inputs":[],"name":"getWinner","outputs":[{"name":"winnerId","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"voterAdress","type":"address"}],"name":"giveRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"candidateId","type":"uint8"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"closeVoting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"numberOfCandidates","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
 //   var adress = 0x06b24b10c19b30df7bb8d918fc080f3f31a400e4;
  //  return web3.version.api
   // return myContract = new web3.eth.Contract(abi, adress);


function getAdress(contract) {
    web3.eth.accounts.create()
}


