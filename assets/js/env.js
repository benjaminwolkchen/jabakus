var env
function getEnv(){
    // Fetches Env Json File to get Vars
    fetch("https://raw.githubusercontent.com/jabakus/jabakus/rewrite/env.json")
.then(response => response.json()) // Transform the data into json
.then(
json => env = json
)}
getEnv()