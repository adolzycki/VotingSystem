document.getElementById("voteButton").onclick = Vote;


function Vote() {
    if (window.ethereum) {
        web3 = new Web3(web3.currentProvider);
        // web3 = new Web3(window.ethereum);
        try {
            window.ethereum.enable().then(function() {

                var abi = [{"constant":true,"inputs":[],"name":"getWinner","outputs":[{"name":"winnerId","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"voterAdress","type":"address"}],"name":"giveRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"candidateId","type":"uint8"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"closeVoting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"numberOfCandidates","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
                var adress = "0x06b24b10c19b30df7bb8d918fc080f3f31a400e4";
                var contract = web3.eth.contract(abi).at(adress);
                web3.eth.defaultAccount = web3.eth.accounts[0];

                //  console.log(web3.eth.accounts);

                /*        try {
                           contract.vote(2, function (res, err) {
                               console.log(res,err)
                           })

                        }
                        catch(error) {
                            console.log("teb bload?")
                            console.log( error.message);
                        }
                        */
                contract.getWinner(function (res,err) {
                    console.log(res,err)
                })

                // User has allowed account access to DApp...
            });
        } catch(e) {
            //console.log("Prosze polaczyc z MetaMusk")
        }
    }
// Legacy DApp Browsers
    else if (window.web3) {
        web3 = new Web3(web3.currentProvider);
        //console.log("test?2")
    }
// Non-DApp Browsers
    else {
        //alert('Zainstaluj wtyczke MetaMusk w swojej przegladarce');
    }
}
