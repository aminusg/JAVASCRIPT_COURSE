const apiList = [
    'https://api.dailysmarty.com/posts',
    'https://api.github.com/users/jordanhudgens/repos',
    'https://api.github.com/users/jordanhudgens'
]
  
const [posts, repos, profile] = apiList;
  
console.log(posts);
console.log(repos);
console.log(profile);

//Antes teníamos que hacerlo así:
//const posts = apiList[0];
//console.log(posts);
//const posts = apiList[1];
//const posts = apiList[2];