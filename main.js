var app = new Vue({
    el: '#app',
    data: {
        diceResult: null,
        att1: null,
        att2: null,
        att3: null,
        def1: null,
        def2: null,
        attLosses: null,
        defLosses: null
    },
    methods: {
        rollDie6: function () {
            console.log('rollDie6');
            this.diceResult = Math.ceil(Math.random() * 6);
        },
        rollAtt3Def2: function () {
            console.log('rollAtt3Def2');

            this.defLosses = 0;

            var a1 = Math.ceil(Math.random() * 6);
            var a2 = Math.ceil(Math.random() * 6);
            var a3 = Math.ceil(Math.random() * 6);
            var d1 = Math.ceil(Math.random() * 6);
            var d2 = Math.ceil(Math.random() * 6);

            var attackerThrows = [a1, a2, a3].sort().reverse();
            var defenderThrows = [d1, d2].sort().reverse();

            this.att1 = attackerThrows[0];
            this.att2 = attackerThrows[1];
            this.att3 = attackerThrows[2];
            this.def1 = defenderThrows[0];
            this.def2 = defenderThrows[1];

            if (this.att1 > this.def1) {
                this.defLosses++;
            }
            if (this.att2 > this.def2) {
                this.defLosses++;
            }

            this.attLosses = 2 - this.defLosses;
        }
    }
});