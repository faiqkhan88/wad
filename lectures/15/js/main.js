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
    if(e.keyCode == 13)
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


