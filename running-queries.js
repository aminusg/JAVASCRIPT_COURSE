//traversing the DOM
$('.jsb').childNodes[0].childNodes;
$('.jsb').childNodes[0].childNodes[0].click;
//pulling images from Instagram
const images = document.querySelectorAll('.FFVAD');
images.forEach(img => console.log(img.src));
let imageUrlArray = [];
images.forEach(img => imageUrlArray.push(img.src));
//para que nos copie el array cada elemento en una línea, lo copiamos así: copy(imageUrlArray)

//Following Hashtags in LinkedIn
let hashtagBtns = document.querySelectorAll('.mn-discovery-hashtag-card__action-btn');
hashtagBtns.forEach(btn => btn.click());
//unfollow
const followingBtns = document.querySelectorAll('.follows-recommendation-card__follow-btn');
followingBtns.forEach(followbtn => followbtn.click());