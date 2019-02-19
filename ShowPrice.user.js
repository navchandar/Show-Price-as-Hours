// ==UserScript==
// @name            Show Price as Hours of your Life
// @description     Gets the price displayed on shopping sites and shows the equivalent hours of your life spent to earn that money.
// @author          navchandar
// @version         0.1
// @run-at          document-end
// @copyright       2019, navchandar(https://openuserjs.org/users/navchandar)
// @updateURL       https://openuserjs.org/
// @icon            https://www.seaicons.com/wp-content/uploads/2015/09/Money-Graph-icon.png
// @license         MIT
// @grant           GM_addStyle
// @grant           GM_getValue
// @grant           GM_setValue
// @include         https://play.google.com/store/*
// @include         http://www.amazon.in/*
// @include         https://www.amazon.in/*
// @include         https://www.flipkart.com*
// @include         http://www.flipkart.com*
// @include         https://paytm.com*
// @include         http://paytm.com*
// @include         https://paytmmall.com*
// @include         http://paytmmall.com*
// ==/UserScript==

function updateValuesINR(){
    var approxHourlySalary = Number(GM_getValue("approxAnnualSalary", ""))/(9*22*12) ;
    if(!approxHourlySalary){
        console.log("Error calculating approxHourlySalary.")
    }

    if (approxHourlySalary > 0){
        var items, separator;
        // These xpaths cover most of the price elements shown. Feel free to comment/fork to update if required.
        var amazonINRxpath = "//span[contains(@class, 'CurrencyINR')]//following-sibling::span" + " | " +
            "//span[@class='currencyINR']/parent::*" + " | " +
            "//*[contains(@class, 'rice')][contains(text(), '₹')]" + " | " +
            "//*[contains(@class, 'price')]//*[contains(text(), '₹')]" + " | " +
            "//h2/span[contains(text(), '₹')]";

        var flipkartINRxpath = "//*[contains(@title, '₹')]/div[3]" + " | " +
            "//div[contains(text(), '₹')]";

        var paytmINRxpath = "//span/span[contains(text(), 'Rs')]" + " | " +
            "//a//*[contains(@class, 'iconRupess')]//.." + " | " +
            "//*[contains(@class, 'iconRupess')]//..";

        var playStoreINRxpath = "//*[@class='display-price' and contains(text(), '₹')]" + " | " +
            "//button[@jsmodel]//span[contains(text(), '₹')]" + " | " +
            "//button[contains(text(), '₹')]//text()";

        var hostURL = window.location.href;
        if (hostURL.indexOf('amazon') >= 0){
            items = document.evaluate(amazonINRxpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            separator = "&nbsp;"; }

        else if (hostURL.indexOf('flipkart') >= 0){
            items = document.evaluate(flipkartINRxpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            separator = "&nbsp;"; }

        else if (hostURL.indexOf('paytm') >= 0){
            items = document.evaluate(paytmINRxpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            separator = "<br/>"; }

        else if ((hostURL.indexOf('google') >= 0) && (hostURL.indexOf('details') >= 0)){
            items = document.evaluate(playStoreINRxpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            separator = "&nbsp;"; }

        else if ((hostURL.indexOf('google') >= 0) && (hostURL.indexOf('store') >= 0)){
            items = document.evaluate(playStoreINRxpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            separator = "<br/>"; }

        else { console.log("Show Price Hours script didnt match with the current site."); }

        if(!items){
            console.log("No items found with the xpath in this page.");
        } else if(items.snapshotLength <= 0){
            console.log("No items found with the xpath in this page.");
        } else {
            var passCount = 0;
            for (let i = 0; i < items.snapshotLength; i++) {
                var thisitem = items.snapshotItem(i);
                var txt = thisitem.innerText;

                if(!(txt.indexOf('hrs') >= 0) && !(thisitem.innerHTML.indexOf('hrs') >=0)){
                    // to remove +10% offers from flipkart
                    if(txt.indexOf('+') >= 0){
                        txt = txt.split('+')[0];
                    }

                    // to remove hidden text from paytm
                    if(txt.indexOf('%') >= 0 && txt.indexOf('-') >= 0){
                        txt = txt.split('-')[0]
                    }

                    // to remove 100-200 range from amazon
                    if(txt.indexOf('-') >= 0){
                        txt = txt.split('-')[1];
                    }

                    // remove unneccessary text and convert to number.
                    var amount = Number(txt.replace(",","").replace("Rs.","").replace("₹", "").replace(".00", "").replace(" ", ""));
                    if(!amount || amount <= 0){
                        amount = Number(txt.replace(/\D+/g,""));
                    }
                    if(amount > 0) {
                        var calculated = (amount/approxHourlySalary).toFixed(2);
                        if(calculated){
                            thisitem.innerHTML += (separator + "<b>(" + calculated + " hrs)</b>");
                            passCount++;
                        } else {
                            console.log("Error calculating amount : " + amount);
                        }
                    }
                }
            }
            console.log("Updated hours to " + passCount +" items.");
            items = "";
        }
    }
}

function ButtonClickAction(zEvent){
    GM_setValue("approxAnnualSalary", "");
    var approxAnnualSalary = prompt ('To calculate how many hours of your life, each item will cost, add an approximate Annual Salary/Wage Amount :', '');
    if(approxAnnualSalary){
        GM_setValue("approxAnnualSalary", approxAnnualSalary);
        console.log("Stored approxAnnualSalary : " + approxAnnualSalary);
        GM_setValue("UserCancelledPrompt", false);
        self.location.assign(location);
    } else {
        GM_setValue("UserCancelledPrompt", true);
        console.log("User Cancelled prompt to update approxAnnualSalary.");
    }
}


function AddButton(){
    // Add a button element on div
    var zNode       = document.createElement('div');
    zNode.innerHTML = '<button id="myButton" title="To update your stored wage/salary, Click me" type="button">Reset</button>';
    zNode.setAttribute ('id', 'myContainer');
    document.body.appendChild(zNode);

    //--- Activate the newly added button.
    document.getElementById ("myButton").addEventListener ("click", ButtonClickAction, false);

    //--- Style our newly added element using CSS.
    GM_addStyle ( `
#myContainer {
position:               fixed;
bottom:                 0;
left:                   0;
font-size:              11px;
margin:                 0px;
opacity:                0.75;
}
#myButton {
cursor:                 pointer;
background-color:       lightgrey;
color:                  black;
}
#myButton:hover {
background-color:       #555;
color:                  white;
box-shadow:             0 2px 6px 0 rgba(0,0,0,.24), 0 5px 10px 0 rgba(0,0,0,.19);
opacity:                1;
}
` );

}

(function() {
    'use strict';
    //GM_setValue("approxAnnualSalary", ""); // Reset here for test.
    var approxAnnualSalary = GM_getValue("approxAnnualSalary", "");
    var checkPriorCancellation = GM_getValue("UserCancelledPrompt");

    if((approxAnnualSalary=="" || !approxAnnualSalary) && !checkPriorCancellation) {
        approxAnnualSalary = prompt ('To calculate how many hours of your life, each item will cost, add an approximate Annual Salary/Wage Amount :', '');
        if(approxAnnualSalary){
            GM_setValue("approxAnnualSalary", approxAnnualSalary);
            GM_setValue("UserCancelledPrompt", false);
            console.log("Stored approxAnnualSalary : " + approxAnnualSalary);
        } else {
            GM_setValue("UserCancelledPrompt", true);
            console.log("User Cancelled prompt to update approxAnnualSalary.");
        }
    } else {
        console.log("Retrieved approxAnnualSalary : " + approxAnnualSalary);
    }

    // call this function once
    AddButton();

    // call this every 2 seconds to update according to page load
    setInterval(function() {
        updateValuesINR();
    }, 2000);

})();
