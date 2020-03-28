var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        par: 'agraph',
        result: '*blank*',
        showResult: false,
        diceResult: null
    },
    methods: {
        rollDie6: function () {
            console.log('rollDie6');
            this.diceResult = Math.ceil(Math.random() * 6);
        }
    }
})