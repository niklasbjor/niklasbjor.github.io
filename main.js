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

            let numberOfTroopsAtStake = Math.min(this.numAttDice, this.numDefDice);
            for (let i = 0; i < numberOfTroopsAtStake; i++) {
                let attResult = this.attResults[i];
                let defResult = this.defResults[i];

                if (i === 0) {
                    if (this.hasAttLeader) {
                        attResult.modifier++;
                    }
                    if (this.hasDefLeader) {
                        defResult.modifier++;
                    }
                    if (this.hasDefFortress) {
                        defResult.modifier++;
                    }
                }

                if (attResult.value + attResult.modifier > defResult.value + defResult.modifier) {
                    this.defLosses++;
                    attResult.color = 'rgba(157,255,69,0.61)';
                    defResult.color = 'rgba(255,67,30,0.61)';
                } else {
                    attResult.color = 'rgba(255,67,30,0.61)';
                    defResult.color = 'rgba(157,255,69,0.61)';
                }
            }

            this.attLosses = numberOfTroopsAtStake - this.defLosses;
        },
        throwDie: function () {
            return Math.ceil(Math.random() * 6);
        },
        getResult: function (number) {
            return {value: number, modifier: 0, color: '#FFFFFF'};
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
        toggleAttLeader: function () {
            this.hasAttLeader = !this.hasAttLeader;
        },
        toggleDefLeader: function () {
            this.hasDefLeader = !this.hasDefLeader;
        },
        toggleDefFortress: function () {
            this.hasDefFortress = !this.hasDefFortress;
        },
        incrementNumAttDice: function () {
            this.numAttDice++;
        },
        decrementNumAttDice: function () {
            this.numAttDice--;
        },
        incrementNumDefDice: function () {
            this.numDefDice++;
        },
        decrementNumDefDice: function () {
            this.numDefDice--;
        }
    }
});