var app = new Vue({
    el: '#app',
    data: {
        numAttDice: 3,
        numDefDice: 2,
        attResults: null,
        defResults: null,
        attLosses: null,
        defLosses: null,
        hasAttLeader: false,
        hasDefLeader: false,
        hasDefFortress: false
    },
    methods: {
        rollDice: function () {
            console.log('rollDice with att: ' + this.numAttDice + ', def: ' + this.numDefDice);

            this.resetResults();

            let attThrows = [-1, -1, -1];
            let defThrows = [-1, -1];

            for (let i = 0; i < this.numAttDice; i++) {
                attThrows[i] = this.throwDie();
            }
            for (let i = 0; i < this.numDefDice; i++) {
                defThrows[i] = this.throwDie();
            }

            this.sortNumericDescending(attThrows);
            this.sortNumericDescending(defThrows);

            for (let i = 0; i < this.numAttDice; i++) {
                this.attResults[i] = this.getResult(attThrows[i])
            }
            for (let i = 0; i < this.numDefDice; i++) {
                this.defResults[i] = this.getResult(defThrows[i])
            }

            this.applyModifiers();

            let numberOfTroopsAtStake = Math.min(this.numAttDice, this.numDefDice);
            for (let i = 0; i < numberOfTroopsAtStake; i++) {
                if (this.attResults[i].value > this.defResults[i].value) {
                    this.defLosses++;
                    this.attResults[i].color = 'rgba(157,255,69,0.61)';
                    this.defResults[i].color = 'rgba(255,67,30,0.61)';
                } else {
                    this.attResults[i].color = 'rgba(255,67,30,0.61)';
                    this.defResults[i].color = 'rgba(157,255,69,0.61)';
                }
            }

            this.attLosses = numberOfTroopsAtStake - this.defLosses;
        },
        throwDie: function () {
            return Math.ceil(Math.random() * 6);
        },
        getResult: function (number) {
            return {value: number, color: '#FFFFFF'};
        },
        resetResults: function () {
            this.attResults = [
                this.getResult(null),
                this.getResult(null),
                this.getResult(null)];
            this.defResults = [
                this.getResult(null),
                this.getResult(null)];

            this.defLosses = 0;
        },
        sortNumericDescending: function (array) {
            array.sort(function (a, b) {
                return b - a;
            });
        },
        applyModifiers: function () {
            if (this.hasAttLeader) {
                this.attResults[0].value = this.attResults[0].value + 1;
            }
            if (this.hasDefLeader) {
                this.defResults[0].value = this.defResults[0].value + 1;
            }
            if (this.hasDefFortress) {
                this.defResults[0].value = this.defResults[0].value + 1;
            }
        }
    }
});