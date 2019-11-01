// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector(".cards-container")

axios
.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {

   const articleData = response.data.articles;
   console.log(articleData);

    // JavaScript Data
    const js = articleData.javascript;

    // iteration
    js.forEach(element => {
        const jsCard = cardCreator(element); // place holder for new card created
        
        cardContainer.appendChild(jsCard);// structure
       }); // end of JavaScript card 

   // bootStrap Data
   const bootStrap = articleData.bootstrap;

   // iteration
   bootStrap.forEach(element => {
       const bootStrapCard = cardCreator(element); // place holder for new card created
       
       cardContainer.appendChild(bootStrapCard); // structure
   }); // end of bootStrap card

   // technology Data
   const tech = articleData.technology;

   // iteration
   tech.forEach(element => {
    const techCard = cardCreator(element); // place holder for new card created

    cardContainer.appendChild(techCard); // structure
   }); // end of technology card
    
    // jquery Data
    const jquery = articleData.jquery;

    // iteration
    jquery.forEach(element => {
     const jqueryCard = cardCreator(element); // place holder for new card created

     cardContainer.appendChild(jqueryCard); // structure
   }); // end of jquery card
  

   // node Data
   const node = articleData.node;

   // iteration
   node.forEach(element => {
    const nodeCard = cardCreator(element); // place holder for new card created

    cardContainer.appendChild(nodeCard); // structure
   }); // end of node card
   
}) // end of axios 

function cardCreator(obj) {

    // define elements
    const card = document.createElement("div");
    const headLine = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const authorsName = document.createElement("span");


    // adding classes
    card.classList.add("card");
    headLine.classList.add(".headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    // content
    headLine.textContent = obj.headline;
    console.log(headLine)
    img.src = obj.authorPhoto;
    authorsName.textContent = `By ${obj.authorName}`;

    // structure
    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    imgContainer.appendChild(authorsName);

    return card;
}



