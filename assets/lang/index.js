const app = new Vue({
    data:{
        locale: []
    },

    created() {
        fetch('https://cdn.jsdelivr.net/gh/jabakus/jabakus@rewrite/assets/lang/de.json')
        .then(response => response.json())
        .then(json => {
            this.locale = json.locale
        })
    }
})