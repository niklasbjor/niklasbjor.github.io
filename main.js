var app = new Vue({
    el: '#app',
    data: {
        numAttDice: 3,
        numDefDice: 2,
        attResults: [
            {value: null, color: '#FFFFFF'},
            {value: null, color: '#FFFFFF'},
            {value: null, color: '#FFFFFF'}
        ],
        defResults: [
            {value: null, color: '#FFFFFF'},
            {value: null, color: '#FFFFFF'}
        ],
        attLosses: null,
        defLosses: null,
    },
    methods: {
        throwDie: function () {
            return Math.ceil(Math.random() * 6);
        },
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

            attThrows.sort().reverse();
            defThrows.sort().reverse();

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
        }
    }
});