//php for github pages, coded in javascript, for javascript.
var init = 0;
console.log("php extras init complete!");
function phpinit(){
    //confirm you want to use php module in this script.
    init = 1;
}
function PHP_GET(varname){
    try{
        let params = new URLSearchParams(location.search);
        return params.getAll('name')
    }catch(e){
        console.log("GET_: No variables found matching query, returning null")
        return null
    }
}
function PHP_POST(){
    console.log("POST_ not avaiable yet.")
}
function PHP_isset(variable){
    var declared = 1;
    try{ variable; }
    catch(e) {
        if (e.name == "ReferenceError"){
            return 0
        } else {
            return 1
        }
    }
}
function PHP_sha(owner, repo, token){
    fetch(`https://api.github.com/repos/${owner}/${repo}/commits`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        const sha = data[1].sha;
        return sha; // prints the SHA of the previous commit
      })
      .catch(error => console.error(error));
}
function PHP_fopen(url, owner, repo, path, token, content1, message1, sha1){
    console.log("this is designed, and ONLY works for GITHUB PAGES, or any GITHUB repo")
    console.log("")
    //add functionality for pastebin later, check URL var
    if (url.includes("github")){
        const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    }
const content = btoa(content1);
const message = message1;
const sha = sha1;

fetch(url, {
  method: 'PUT',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    message,
    content,
    sha
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
//queue up data, in case it isn't present in github !!
document.cookie = "datawritten=" + content1;
}
function PHP_fetch(owner, repo, branch, path){
    var url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`
    try{
    fetch(url).then(response => response.json());
    return response;
    }catch(e){
        console.log("PHP_ERROR_PHP-FETCH" + e);
        try{
            cookie = document.cookie();
        }catch(e){
            return "ERROR:: GITHUB FAILED, SHORTTERM QUEUE FAIL. FATAL ERROR, CHECK PATH, EXITING.";
        }
    }
}
function PHP_cred(){
    console.log("Made by Kingve");
}
