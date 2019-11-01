// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// get request
axios.get(' https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    const lambdaTopics = response.data;
    console.log(lambdaTopics);
// iteration
lambdaTopics.Array.forEach(element => {
    
});

})

// tab component
function Tab_Comp(){
    
    // creating element
    const tabDiv = document.createElement('div');

    // adding class for tabDiv
    tabDiv.classList.add('tab');

    return tabDiv;
}

// place holder for my component creator
const myTab = Tab_Comp();

