var app = new Vue({
    el: '#wow',
    data: {
        url: "https://cdn.jsdelivr.net/gh/jabakus/jabakus@rewrite/assets/lang/de.json",

        loc: {},
        },
    created(){
        fetch(this.url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(response) {
          this.loc = JSON.parse(response);
          console.log(this.loc)
          })
    }
});