var app = new Vue({
    el: '#app',
    data: {
        numAttDice: 3,
        numDefDice: 2,
        attResults: null,
        defResults: null,
        attLosses: null,
        defLosses: null,
    },
    methods: {
        rollDice: function () {
            console.log('rollDice with att: ' + this.numAttDice + ', def: ' + this.numDefDice);

            this.resetResults();

            var attThrows = [-1, -1, -1];
            var defThrows = [-1, -1];

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

            var numberOfTroopsAtStake = Math.min(this.numAttDice, this.numDefDice);
            for (let i = 0; i < numberOfTroopsAtStake; i++) {
                if (attThrows[i] > defThrows[i]) {
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
        }
    }
});