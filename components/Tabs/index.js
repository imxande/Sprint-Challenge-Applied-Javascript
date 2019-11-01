// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

    // selecting related class
    const topicClass = document.querySelector('.topics'); 

// get request
axios.get(' https://lambda-times-backend.herokuapp.com/topics')
.then(response => {

    // place holder for data
    const lambdaTopics = response.data;

    // displaying data in console
    console.log(lambdaTopics);

    //iteration
    lambdaTopics.topics.forEach(topic => {

        // passing data into function
    const newTab = Tab_Creator(topic);

        // appending new created tab into topic class 
    topicClass.appendChild(newTab);
    })
})

// tab component
function Tab_Creator(data){
    
    // creating element
    const tabDiv = document.createElement('div');

    // adding class for tabDiv
    tabDiv.classList.add('tab');

    // adding content to tab
    tabDiv.textContent = data;

    return tabDiv;
}

    

   
  

