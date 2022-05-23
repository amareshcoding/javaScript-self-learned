
// DOM-->Document Object Method 

// console.log(window.document);
// console.dir(window.document);


// getElementById
// console.dir(document.getElementById("heading"));
// const h2tag = document.getElementById("heading");
// console.log('h2tag: ', h2tag);

//querySelector
//textontent and innerText
//grt and set attribute

// const h2tag = document.getElementById("heading");
// console.log('h2tag: ', h2tag.getAttribute("style"));
// h2tag.setAttribute("border","1px solid")

// "\"something\""


// innerHTML



// DOM Tree
const rootNode = document.getRootNode();
console.log('rootNode: ', rootNode.childNodes);
const html = rootNode.childNodes[1];
console.log('html: ', html);
console.log('html: ', html.childNodes);
