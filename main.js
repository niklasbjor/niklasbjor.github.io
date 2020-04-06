var app = new Vue({
    el: '#app',
    data: {
        numAttDice: 3,
        numDefDice: 2,
        att1: null,
        att2: null,
        att3: null,
        def1: null,
        def2: null,
        attLosses: null,
        defLosses: null
    },
    methods: {
        throwDie: function () {
            return Math.ceil(Math.random() * 6);
        },
        rollDice: function () {
            console.log('rollDice with att: ' + this.numAttDice + ', def: ' + this.numDefDice);

            this.defLosses = 0;
            var attThrows = [-1, -1, -1];
            var defThrows = [-1, -1];

            for (let i = 0; i < this.numAttDice; i++) {
                attThrows[i] = this.throwDie();
            }
            for (let i = 0; i < this.numDefDice; i++) {
                defThrows[i] = this.throwDie();
            }

            attThrows = attThrows.sort().reverse();
            defThrows = defThrows.sort().reverse();

            this.att1 = attThrows[0] !== -1 ? attThrows[0] : null;
            this.att2 = attThrows[1] !== -1 ? attThrows[1] : null;
            this.att3 = attThrows[2] !== -1 ? attThrows[2] : null;
            this.def1 = defThrows[0] !== -1 ? defThrows[0] : null;
            this.def2 = defThrows[1] !== -1 ? defThrows[1] : null;

            var numberOfTroopsAtStake = Math.min(this.numAttDice, this.numDefDice);
            for (let i = 0; i < numberOfTroopsAtStake; i++) {
                if (attThrows[i] > defThrows[i]) {
                    this.defLosses++;
                }
            }

            this.attLosses = numberOfTroopsAtStake - this.defLosses;
        }
    }
});