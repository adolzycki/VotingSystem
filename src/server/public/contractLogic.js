document.addEventListener("DOMContentLoaded", function() {


    document.getElementById("voteButton").onclick = Vote;
    document.getElementById("connectButton").onclick = Connect;

});

function Connect() {
    if (window.ethereum) {
        web3 = new Web3(web3.currentProvider);

        try {
            window.ethereum.enable().then(function () {

            });
        } catch (e) {
            alert("Cos poszlo nie tak")
        }
    }
    else {
        alert('Zainstaluj wtyczke MetaMusk w swojej przegladarce');
    }

}

function Vote() {

    var selected = 0;
    for (var i =1; i<= 5; i++ ) {
        if (document.getElementById('k'.concat(String(i))).checked) {
            selected = i;
        }
    }

    if (window.ethereum) {
        web3 = new Web3(web3.currentProvider);

        try {
            window.ethereum.enable().then(function () {

                var abi = [{"constant":true,"inputs":[],"name":"getWinner","outputs":[{"name":"winnerId","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"voterAdress","type":"address"}],"name":"giveRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"candidateId","type":"uint8"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"closeVoting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"numberOfCandidates","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
                var adress = "0x517e8a41c1d4540b4315378ac3a80fa0638fd495";
                var contract = web3.eth.contract(abi).at(adress);
                web3.eth.defaultAccount = web3.eth.accounts[0];

                try {
                   contract.vote(selected, function (res, err) {
                       console.log(res,err)
                   })

                }
                catch(error) {
                    alert('Cos poszlo nie tak');
                    console.log(error);
                }
            });
        } catch (e) {
            console.log("Prosze polaczyc z MetaMusk")
        }
    }
    else {
        alert('Zainstaluj wtyczke MetaMusk');
    }
}
