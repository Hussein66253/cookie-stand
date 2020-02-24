'use strict';
var workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
    name: 'Seattle',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookieSoldToCust: 6.3,
    avgCookieSoldPerHour: [],
    avgCookiePerHour: function () {
        for (var i = 0; i < workHours.length; i++) {
            var calc1 = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
            // console.log('calc11', calc1)
            var multiplyedByAvg = Math.floor(calc1 * this.avgCookieSoldToCust);
            // console.log(Math.ceil(multiplyedByAvg));
            var CookieSoldPerhour = multiplyedByAvg;
            this.avgCookieSoldPerHour.push(CookieSoldPerhour);
        }



        return multiplyedByAvg;
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
    }
}
console.log(seattle);
//////////////////////////
seattle.avgCookiePerHour();
seattle.render();
var tokyo = {
    name: 'Tokyo',
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookieSoldToCust: 1.2,
    avgCookieSoldPerHour: [],
    avgCookiePerHour: function () {
        for (var i = 0; i < workHours.length; i++) {
            var calc1 = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
            var multiplyedByAvg = Math.floor(calc1 * this.avgCookieSoldToCust);
            var CookieSoldPerhour = multiplyedByAvg;
            this.avgCookieSoldPerHour.push(CookieSoldPerhour);
        }
        return Math.floor(multiplyedByAvg);
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
    }
}
tokyo.avgCookiePerHour();
tokyo.render();
///////////////////////
var dubai = {
    name: 'Dubai',
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCookieSoldToCust: 3.7,
    avgCookieSoldPerHour: [],
    avgCookiePerHour: function () {
        for (var i = 0; i < workHours.length; i++) {
            var calc1 = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
            var multiplyedByAvg = Math.floor(calc1 * this.avgCookieSoldToCust);
            var CookieSoldPerhour = multiplyedByAvg;
            this.avgCookieSoldPerHour.push(CookieSoldPerhour);
        }



        return Math.floor(multiplyedByAvg);
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
    }
}
dubai.avgCookiePerHour();
dubai.render();
/////////////////////
var paris = {
    name: 'Paris',
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCookieSoldToCust: 2.7,
    avgCookieSoldPerHour: [],
    avgCookiePerHour: function () {
        for (var i = 0; i < workHours.length; i++) {
            var calc1 = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
            var multiplyedByAvg = Math.floor(calc1 * this.avgCookieSoldToCust);
            var CookieSoldPerhour = multiplyedByAvg;
            this.avgCookieSoldPerHour.push(CookieSoldPerhour);
        }



        return Math.floor(multiplyedByAvg);
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
    }
}
paris.avgCookiePerHour();
paris.render();
/////////////////////
var lima = {
    name: 'Lima',
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCookieSoldToCust: 4.6,
    avgCookieSoldPerHour: [],
    avgCookiePerHour: function () {
        for (var i = 0; i < workHours.length; i++) {
            var calc1 = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
            var multiplyedByAvg = Math.floor(calc1 * this.avgCookieSoldToCust);
            var CookieSoldPerhour = multiplyedByAvg;
            this.avgCookieSoldPerHour.push(CookieSoldPerhour);
        }



        return Math.floor(multiplyedByAvg);
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
    }
}
lima.avgCookiePerHour();
lima.render();


