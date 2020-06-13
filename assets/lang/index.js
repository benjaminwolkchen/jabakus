var app = new Vue({
    el: '#wow',
    data: {
        LocaleStrings: {},
        url: "https://raw.githubusercontent.com/jabakus/jabakus/rewrite/assets/lang/de.json"
    },
    created(){
        fetch(this.url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(data) {
          this.LocaleStrings = data;
          console.log(this.LocaleStrings)
          })
    }
});