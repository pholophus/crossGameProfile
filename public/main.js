// var io = require("socket.io-client");

var socket = io("http://localhost:3010");


        connectMetamask()

        function connectMetamask(){
        let walletAddress = ""

        ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          let currentAccount = null; 

          if (accounts.length === 0) {
            // $('#connection-status').innerText = "You're not connected to MetaMask";
            // $('#connect-btn').disabled = false;
            alert("You're not connected to MetaMask")
          } else if (accounts[0] !== currentAccount) {

            currentAccount = accounts[0];

            socket.emit('register_player', currentAccount);
            
            console.log(`Address: ${currentAccount}`)
            
            walletAddress = currentAccount.substring(0, 6) + "..." + currentAccount.substring(currentAccount.length - 6, currentAccount.length) 

            document.getElementById('walletAddress').innerHTML = "Address :"+walletAddress;
          }
        })
        .catch((err) => {
          if (err.code === 4001) {
            console.log('Please connect to MetaMask.');
          } else {
            console.error(err);
          }
        });
    }