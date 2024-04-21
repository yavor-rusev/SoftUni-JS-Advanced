function extensibleObject() {
    let parent = {};
    let child = Object.create(parent);

    child.extend = function (obj) {
        let objAsArray = Object.entries(obj);

        for (let [key, value] of objAsArray) {
            if (typeof (value) === "function") {
                parent[key] = value;
            } else {
                child[key] = value;
            }
        }
    }

    return child;
}

const myObj = extensibleObject();

const template = {
    extensionMethod: function () { console.log("Hello - I am the value of the inherited 'extensionMethod'") },
    extensionProperty: 'someString'
}

myObj.extend(template);

console.log(myObj);
console.log('---------------');

console.log(myObj.hasOwnProperty('extensionProperty'), "- myObj has his own property 'extensionProperty'");
console.log(myObj.extensionProperty, "- is the value of the own property 'extensionProperty'");

console.log('---------------');

console.log(myObj.hasOwnProperty('extensionMethod'), "- myObj has not his own 'extensionMethod'");
if ('extensionMethod' in myObj) {
    console.log(true, "- myObj has inherited 'extensionMethod' from 'parent'");
};
myObj.extensionMethod();



