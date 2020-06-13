var data
var url = "https://raw.githubusercontent.com/jabakus/jabakus/rewrite/assets/lang/de.json"
fetch(url)
.then(response => response.json()) // Transform the data into json
.then(
    json => data = json 
)