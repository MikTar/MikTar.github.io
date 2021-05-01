
//------------------------------DELETING TWEETS -----------------------//
let form = document.querySelector('#form');
let username = form.elements.username;
let tweet = form.elements.tweet;
let h2 = document.querySelector('#h2');
let asideLeft = document.querySelector('.aside-left');
let asideRight = document.querySelector('.aside-right');
let submit = document.querySelector('#submit');

form.addEventListener('submit', function(evt){
    if(username.value===''){alert('Enter username'); return}
    if(tweet.value===''){alert('Enter tweet'); return}



    evt.preventDefault();
    let ul = document.createElement('ul');
    h2.insertAdjacentElement("afterend",ul);
    let newTweet = document.createElement('li');
    let boldUsername = document.createElement('b');
    boldUsername.append(`${username.value} : `);
    let tweetValue = tweet.value;
    let deleteBtn = document.createElement('button')
    deleteBtn.classList.toggle('delete-button')
    deleteBtn.innerText = 'delete';
    newTweet.append(boldUsername);
    newTweet.append(tweetValue);
    newTweet.append(deleteBtn);
    ul.append(newTweet);
    ul.classList.add('fadeIn')
    username.value = '';
    tweet.value = '';


    ul.addEventListener('click', function(e){
         e.target.nodeName === 'BUTTON' && newTweet.remove();
    })

})

// submit.addEventListener('click', function(){
   

// })





//--------------------------------------------------------------------------------//












