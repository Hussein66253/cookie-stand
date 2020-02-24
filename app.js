'use strict';
var workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var seattle = {
    name: 'Seattle',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookieSoldToCust: 6.3,
    avgCookieSoldPerHour: [],
    totalSumcookei:0, 

    avgCookiePerHour: function () {
        for (var i = 0; i < workHours.length; i++) {
            var randomCus = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
            // console.log('randomCus1', randomCus)
            var multiplyedByAvg = Math.floor(randomCus * this.avgCookieSoldToCust);
            // console.log(Math.ceil(multiplyedByAvg));
            var CookieSoldPerhour = multiplyedByAvg;
            this.avgCookieSoldPerHour.push(CookieSoldPerhour);
        }
        return multiplyedByAvg;
        
    
        
    },
    totalSum: function(){
        var newSumSe = 0;
        for (var h=0; h<this.avgCookieSoldPerHour.length ; h++){
            newSumSe = newSumSe + this.avgCookieSoldPerHour[h];
            this.totalSumcookei = newSumSe;
        }
        console.log('ffff', newSumSe);
        // return newSumSe();
        
    },
    render: function () {
        var container1 = document.getElementById('Header2');
        var h2tit = document.createElement('h2');
        container1.appendChild(h2tit);
        h2tit.textContent= 'Salmon Cookies sales'
        var container = document.getElementById('location1');
        console.log(container);
        var h1Se = document.createElement('h1');
        container.appendChild(h1Se);
        h1Se.textContent = this.name;
        var ulSe = document.createElement('ul');
        container.appendChild(ulSe);
        for (var i = 0; i < workHours.length; i++) {
            var liSe = document.createElement('li')
            ulSe.appendChild(liSe);
            liSe.textContent = `${workHours[i]}: ${this.avgCookieSoldPerHour[i]} cookies.`
     
        }

        var liSe2 = document.createElement('li');
        ulSe.appendChild(liSe2);
        liSe2.textContent = `Total : ${this.totalSumcookei} cookies`
    }
}

console.log(seattle);
seattle.avgCookiePerHour();
seattle.totalSum();
seattle.render();

seattle.totalSum();

var tokyo = {
    name: 'Tokyo',
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookieSoldToCust: 1.2,
    avgCookieSoldPerHour: [],
    totalSumcookei:0, 
    avgCookiePerHour: function () {
        for (var i = 0; i < workHours.length; i++) {
            var randomCus = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
            var multiplyedByAvg = Math.floor(randomCus * this.avgCookieSoldToCust);
            var CookieSoldPerhour = multiplyedByAvg;
            this.avgCookieSoldPerHour.push(CookieSoldPerhour);
        }
        return Math.floor(multiplyedByAvg);
        
    },
    totalSum: function(){
        var newSumSe = 0;
        for (var h=0; h<this.avgCookieSoldPerHour.length ; h++){
            newSumSe = newSumSe + this.avgCookieSoldPerHour[h];
            this.totalSumcookei = newSumSe;
        }
        console.log('ffff', newSumSe);
        // return newSumSe();
        
    },
    render: function () {
        var container = document.getElementById('location2');
        console.log(container);
        var h1To = document.createElement('h1');
        container.appendChild(h1To);
        h1To.textContent = this.name;
        var ulTo = document.createElement('ul');
        container.appendChild(ulTo);
        for (var i = 0; i < workHours.length; i++) {
            var liTo = document.createElement('li')
            ulTo.appendChild(liTo);
            liTo.textContent = `${workHours[i]}: ${this.avgCookieSoldPerHour[i]} cookies.`
        }
        var liTo2 = document.createElement('li');
        ulTo.appendChild(liTo2);
        liTo2.textContent = `Total : ${this.totalSumcookei} cookies`
    }
    }

tokyo.avgCookiePerHour();
tokyo.totalSum();
tokyo.render();
///////////////////////
var dubai = {
    name: 'Dubai',
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCookieSoldToCust: 3.7,
    avgCookieSoldPerHour: [],
    totalSumcookei:0,
    avgCookiePerHour: function () {
        for (var i = 0; i < workHours.length; i++) {
            var randomCus = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
            var multiplyedByAvg = Math.floor(randomCus * this.avgCookieSoldToCust);
            var CookieSoldPerhour = multiplyedByAvg;
            this.avgCookieSoldPerHour.push(CookieSoldPerhour);
        }



        return Math.floor(multiplyedByAvg);
    },
    totalSum: function(){
        var newSumSe = 0;
        for (var h=0; h<this.avgCookieSoldPerHour.length ; h++){
            newSumSe = newSumSe + this.avgCookieSoldPerHour[h];
            this.totalSumcookei = newSumSe;
        }
        console.log('ffff', newSumSe);
        // return newSumSe();
        
    },
    render: function () {
        var container = document.getElementById('location3');
        console.log(container);
        var h1Du = document.createElement('h1');
        container.appendChild(h1Du);
        h1Du.textContent = this.name;
        var ulDu = document.createElement('ul');
        container.appendChild(ulDu);
        for (var i = 0; i < workHours.length; i++) {
            var liDu = document.createElement('li')
            ulDu.appendChild(liDu);
            liDu.textContent = `${workHours[i]}: ${this.avgCookieSoldPerHour[i]} cookies.`
        }
        var liDu2 = document.createElement('li');
        ulDu.appendChild(liDu2);
        liDu2.textContent = `Total : ${this.totalSumcookei} cookies`
    }
}
dubai.avgCookiePerHour();
dubai.totalSum();
dubai.render();
/////////////////////
var paris = {
    name: 'Paris',
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCookieSoldToCust: 2.7,
    avgCookieSoldPerHour: [],
    totalSumcookei:0,
    avgCookiePerHour: function () {
        for (var i = 0; i < workHours.length; i++) {
            var randomCus = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
            var multiplyedByAvg = Math.floor(randomCus * this.avgCookieSoldToCust);
            var CookieSoldPerhour = multiplyedByAvg;
            this.avgCookieSoldPerHour.push(CookieSoldPerhour);
        }



        return Math.floor(multiplyedByAvg);
        
    },
        totalSum: function(){
            var newSumSe = 0;
            for (var h=0; h<this.avgCookieSoldPerHour.length ; h++){
                newSumSe = newSumSe + this.avgCookieSoldPerHour[h];
                this.totalSumcookei = newSumSe;
            }
            console.log('ffff', newSumSe);
            // return newSumSe();
        
    
    },
    

    render: function () {
        var container = document.getElementById('location3');
        console.log(container);
        var h1Pr = document.createElement('h1');
        container.appendChild(h1Pr);
        h1Pr.textContent = this.name;
        var ulPr = document.createElement('ul');
        container.appendChild(ulPr);
        for (var i = 0; i < workHours.length; i++) {
            var liPr = document.createElement('li')
            ulPr.appendChild(liPr);
            liPr.textContent = `${workHours[i]}: ${this.avgCookieSoldPerHour[i]} cookies.`
        }
        var liPr2 = document.createElement('li');
        ulPr.appendChild(liPr2);
        liPr2.textContent = `Total : ${this.totalSumcookei} cookies`
    }
}
paris.avgCookiePerHour();
paris.totalSum();
paris.render();
/////////////////////
var lima = {
    name: 'Lima',
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCookieSoldToCust: 4.6,
    avgCookieSoldPerHour: [],
    totalSumcookei:0,
    avgCookiePerHour: function () {
        for (var i = 0; i < workHours.length; i++) {
            var randomCus = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
            var multiplyedByAvg = Math.floor(randomCus * this.avgCookieSoldToCust);
            var CookieSoldPerhour = multiplyedByAvg;
            this.avgCookieSoldPerHour.push(CookieSoldPerhour);
        }



        return Math.floor(multiplyedByAvg);
    },
    totalSum: function(){
        var newSumSe = 0;
        for (var h=0; h<this.avgCookieSoldPerHour.length ; h++){
            newSumSe = newSumSe + this.avgCookieSoldPerHour[h];
            this.totalSumcookei = newSumSe;
        }
        console.log('ffff', newSumSe);
        // return newSumSe();
        
    },
    render: function () {
        var container = document.getElementById('location5');
        console.log(container);
        var h1Lm = document.createElement('h1');
        container.appendChild(h1Lm);
        h1Lm.textContent = this.name;
        var ulLm = document.createElement('ul');
        container.appendChild(ulLm);
        for (var i = 0; i < workHours.length; i++) {
            var liLm = document.createElement('li')
            ulLm.appendChild(liLm);
            liLm.textContent = `${workHours[i]}: ${this.avgCookieSoldPerHour[i]} cookies.`
        }
        var liLm2 = document.createElement('li');
        ulLm.appendChild(liLm2);
        liLm2.textContent = `Total : ${this.totalSumcookei} cookies`
    }
}
lima.avgCookiePerHour();
lima.totalSum();
lima.render();


