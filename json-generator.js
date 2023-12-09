function createDOMTree(element) {
    let childrenArray = [];
    for (let i = 0; i < element.children.length; i++) {
        childrenArray.push(createDOMTree(element.children[i]));
    }

    let name = element.tagName;
    if (element.className) {
        name += ' class: ' + element.className;
    }
    if (element.id) {
        name += ' id: ' + element.id;
    }

    return {
        name: name,
        value: childrenArray.length,
        children: childrenArray
    };
}

let domTree = createDOMTree(document.body);
let jsonOutput = JSON.stringify(domTree, null, 2);
console.log(jsonOutput);