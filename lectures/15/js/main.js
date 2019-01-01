
var totalBalance = 1000000;

initialize();


function initialize() {
    var title = document.getElementById("title");
    title.innerText = "Faiq Ali";
    var balance = document.getElementById("balance");
    balance.innerText = totalBalance;
    var currency = document.getElementById("currency");
    currency.innerText = "PKR";
    var IBAN = document.getElementById("IBAN");
    IBAN.innerText = "IPAK02002345991";
}

function depositAmount(e) {
    if(e.key == 'Enter')
    {
        var bal = document.getElementById("deposit").value;
        bal = parseInt(bal);
        if(isNaN(bal))
        {
            document.getElementById("deposit-msg").innerText = "Enter Valid Amount!";
            document.getElementById("deposit-msg").style.cssText = 'color: red';
        }
        else {
            document.getElementById("deposit-msg").innerText = " ";
            totalBalance = totalBalance + bal;
            document.getElementById("balance").innerText = totalBalance;

            let table = document.getElementById("transaction-table");
            table.innerHTML +=
                '<tr>'
                + '<th align="left" valign="middle" scope="col">'+ new Date() +'</th>'
                + '<th align="left" valign="middle" scope="col">'+ 'Credit' +'</th>'
                + '<th align="left" valign="middle" scope="col">'+ document.getElementById("deposit").value +'</th>'
                + '</tr>';
        }
    }
}

function withdrawAmount(e) {
    if(e.keyCode == 13)
    {
        var bal = document.getElementById("withdraw").value;
        bal = parseInt(bal);
        if(isNaN(bal))
        {
            document.getElementById("withdraw-msg").innerText = "Enter Valid Amount";
            document.getElementById("withdraw-msg").style.cssText = "color: red";
        }
        else if((totalBalance - bal) >= 0){
            document.getElementById("withdraw-msg").innerText = " ";
            totalBalance = totalBalance - bal;
            document.getElementById("balance").innerText = totalBalance;
            let table = document.getElementById("transaction-table");
            table.innerHTML +=
                '<tr>'
                + '<th align="left" valign="middle" scope="col">'+ new Date() +'</th>'
                + '<th align="left" valign="middle" scope="col">'+ 'Debit' +'</th>'
                + '<th align="left" valign="middle" scope="col">'+ document.getElementById("withdraw").value +'</th>'
                + '</tr>';
        }
        else
        {
            document.getElementById("withdraw-msg").innerText = "Dont have sufficient amount to Withdraw!";
            document.getElementById("withdraw-msg").style.cssText = 'color: yellow';
        }
    }
}


var savingsAccount = {
    title: 'Muhammad Ali',
    balance: 962155,
    currency: 'PKRS',
    IBAN: 'PKN1234654321',
    deposit: function addMoney(e,amount) {
        if(e.keyCode === 13) {
            if (!isNaN(amount) && parseInt(amount) > 0) {
                savingsAccount.balance += parseInt(amount);
                document.getElementById('deposit').value = '';
                loadAccount();
                savingsAccount.printTransactions('Credit', amount);
            }else {
                document.getElementById("deposit-msg").style.color = "red";
                document.getElementById("deposit-msg").innerText = "Enter Valid Amount";
            }
        }
    },
    withdraw: function removeMoney(e,amount) {
        if(e.keyCode === 13) {
            if (!isNaN(amount) && parseInt(amount) > 0) {
                var verifyBalance = savingsAccount.balance - parseInt(amount);
                if(verifyBalance >= 0) {
                    savingsAccount.balance -= parseInt(amount);
                    document.getElementById('withdraw').value = '';
                    loadAccount();
                    savingsAccount.printTransactions('Debit', amount);
                }
                else {
                    document.getElementById("withdraw-msg").style.color = "orange";
                    document.getElementById("withdraw-msg").innerText = "Don't have sufficient amount in account ";
                }
            }else {
                document.getElementById("withdraw-msg").style.color = "red";
                document.getElementById("withdraw-msg").innerText = "Enter Valid Amount";
            }
        }
    },
    printTransactions: function print(tType, amount){
        var table = document.getElementById("transaction-table");
        var row = document.createElement("tr");
        var dateTd = document.createElement("td");
        var d = new Date();
        d = month[d.getMonth()] + ' '+d.getDate() +', '+d.getFullYear()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
        dateTd.innerHTML = d;
        var typeTd = document.createElement("td");
        typeTd.innerHTML = tType;
        var amountTd = document.createElement("td");
        amountTd.innerHTML = amount;
        row.appendChild(dateTd);
        row.appendChild(typeTd);
        row.appendChild(amountTd);
        table.appendChild(row);
    }
};

loadAccount();
function loadAccount() {
    var title = document.getElementById('title');
    var balance = document.getElementById('balance');
    var currency = document.getElementById('currency');
    var IBAN = document.getElementById('IBAN');
    title.innerHTML = savingsAccount.title;
    balance.innerHTML = savingsAccount.balance;
    currency.innerHTML = savingsAccount.currency;
    IBAN.innerHTML = savingsAccount.IBAN;
}

var month = [];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
