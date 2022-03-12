const Tabs = (topics) => {
    // TASK 3
    // ---------------------
    // Implement this function which takes an array of strings ("topics") as its only argument.
    // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
    // then the function returns the markup below.
    // The tags used, the hierarchy of elements and their attributes must match the provided markup!
    // The text inside elements will be set using their `textContent` property (NOT `innerText`).
    //
    // <div class="topics">
    //   <div class="tab">javascript</div>
    //   <div class="tab">bootstrap</div>
    //   <div class="tab">technology</div>
    // </div>
    //

    const parentElem1 = document.querySelector(".tabs-container");

    const topicsElem = document.createElement("div");
    const javascriptElem = document.createElement("div");
    const bootstrapElem = document.createElement("div");
    const technologyElem = document.createElement("div");
    const jqueryElem = document.createElement("div");
    const nodejsElem = document.createElement("div")


    parentElem1.appendChild(topicsElem);
    topicsElem.appendChild(javascriptElem);
    topicsElem.appendChild(bootstrapElem);
    topicsElem.appendChild(technologyElem);
    topicsElem.appendChild(jqueryElem);
    topicsElem.appendChild(nodejsElem);


    javascriptElem.textContent = "javascript";
    bootstrapElem.textContent = "bootstrap";
    technologyElem.textContent = "technology";
    jqueryElem.textContent = "jquery";
    nodejsElem.textContent = "node.js";

    topicsElem.classList.add("topics");
    javascriptElem.classList.add("tab");
    bootstrapElem.classList.add("tab");
    technologyElem.classList.add("tab");
    jqueryElem.classList.add("tab");
    nodejsElem.classList.add("tab");

    return parentElem1;

}
console.log(Tabs());

const tabsAppender = (selector) => {
    // TASK 4
    // ---------------------
    // Implement this function which takes a css selector as its only argument.
    // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
    // Find the array of topics inside the response, and create the tabs using the Tabs component.
    // Append the tabs to the element in the DOM that matches the selector passed to the function.
    //
}

export { Tabs, tabsAppender }