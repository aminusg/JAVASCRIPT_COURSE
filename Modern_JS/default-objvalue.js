const blog = {
    title: 'My great post',
    summary: 'Summary of my post'
  }
  
  const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
    console.log(`
      og-title=${title}
      og-description=${summary}
    `);
  }
  
  openGraphMetadata(blog);
  
  
  //Exercise:
  /*Write an object called user with an attribute for username and status.
  You may set the username to whatever string you'd like but the status must be set to "away".
  Then, write a function called loginEvent that changes the users status to "active". 
  (Instead of a console.log use return). It must return "your_username is active"*/
  const user = {
    username: 'cocodrilo',
    status: 'active'
};
const loginEvent =({username, status = "away"}) => {
    return (`
    your_${username} is ${status} 
    `);
};
