'use strict';
var workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var container1 = document.getElementById('location1');
var newArr = []
function Shop(name, minCustPerHour, maxCustPerHour, avgCookieSoldToCust) {
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookieSoldToCust = avgCookieSoldToCust;
    this.avgCookieSoldPerHour = [];
    this.totalSumCookei = 0;
    newArr.push(this)
    // console.log(Shop);
    
};

Shop.prototype.avgCookiePerHour = function () {
    for (var i = 0; i < workHours.length; i++) {
        var calc1 = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
        // console.log('calc11', calc1)
        var multiplyedByAvg = Math.floor(calc1 * this.avgCookieSoldToCust);
        // console.log(("++++++++"+multiplyedByAvg));
        this.avgCookieSoldPerHour[i] = multiplyedByAvg;
        // console.log("+++"+multiplyedByAvg+"+++"+this.avgCookieSoldPerHour[i]);
    }
}
Shop.prototype.totalSum = function () {
    var newSumSe = 0;
    for (var h = 0; h < this.avgCookieSoldPerHour.length; h++) {
        newSumSe = newSumSe + this.avgCookieSoldPerHour[h];
        // this.totalSumCookei.push(newSumSe);
        this.totalSumcookei = newSumSe;
    }
    console.log('dfhdfh', this.totalSumCookei);
    console.log('nnnnnnnnnnnn', newSumSe);
    // return newSumSe;

    
    
}

var tableCons = document.createElement('table')
    function tableHead(){
        container1.appendChild(tableCons);
        var trTab = document.createElement('tr');
        tableCons.appendChild(trTab);
        var thTab = document.createElement('th');   
        trTab.appendChild(thTab)
        thTab.textContent= '   '
        
        for (var t1 = 0; t1 < workHours.length; t1++) {
            var th1 = document.createElement('th')
            trTab.appendChild(th1)
            th1.textContent = workHours[t1]
    
        }
        var th2Tab = document.createElement('th');   
        trTab.appendChild(th2Tab)
        th2Tab.textContent= '  Daily Location Total '
       
    }
    
    tableHead();
    Shop.prototype.render= function(){
        var tr2 = document.createElement('tr')
       tableCons.appendChild(tr2)
       tr2.textContent= this.name;
       for (var f=0; f<workHours.length ; f++){
           var td1 = document.createElement('td');
           tr2.appendChild(td1);
           td1.textContent = this.avgCookieSoldPerHour[f]; 
       }
       var tdTotaDaily = document.createElement('td');
          tr2.appendChild(tdTotaDaily);
          tdTotaDaily.textContent=  this.totalSumCookei ;
    }
  
    Shop.prototype.tablefooter= function(){
        var trFooter = document.createElement('tr');
        tableCons.appendChild(trFooter);
        trFooter.textContent= 'Totals'
        for (var f=0; f<workHours.length ; f++){

            var tdTotaHourly = document.createElement('td');
            trFooter.appendChild(tdTotaHourly);
            for (var x=0 ; x<this.avgCookieSoldPerHour;x++){

            }
            tdTotaHourly.textContent=  this.avgCookieSoldPerHour[x] ;
        }
        // for (var fo=0 ;fo<shops.length ; fo++){

        // }
   


    }

    







var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('tokyo', 3, 24, 1.2);
var dubai = new Shop('Dubai', 11, 38, 3.7);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima', 2, 16, 4.6);

        seattle.avgCookiePerHour();
        seattle.totalSum();
        seattle.render();
        tokyo.avgCookiePerHour();
        tokyo.totalSum();
        tokyo.render();
        dubai.avgCookiePerHour();
        dubai.totalSum();
        dubai.render();
        paris.avgCookiePerHour();
        paris.totalSum();
        paris.render();
        lima.avgCookiePerHour();
        lima.totalSum();
        lima.render();
        
        seattle.tablefooter();