var data // Contains the fetched json language data.


fetch("https://raw.githubusercontent.com/jabakus/jabakus/rewrite/assets/js/lang/de.json")
    .then(response => response.json()) // Transform the data into json
    .then(
    json => VueLang.lang = json
)

var VueLang = new Vue({
    el:"#VueMain",
    data:{
        lang: data,
    }
})