// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    // define new elements
    const headerDiv = document.createElement('header');
    const spanDate = document.createElement('span');
    const lambdaH1 = document.createElement('h1');
    const spanTemp = document.createElement('span');
    
    // added classes
    headerDiv.classList.add('header');
    spanDate.classList.add('date');
    spanTemp.classList.add('temp');





}
