const app = new Vue({
    data:{
        locale: []
    },

    created() {
        fetch('https://raw.githubusercontent.com/jabakus/jabakus/rewrite/assets/lang/de.json')
        .then(response => response.json())
        .then(json => {
            this.locale = json.locale
        })
    }
})