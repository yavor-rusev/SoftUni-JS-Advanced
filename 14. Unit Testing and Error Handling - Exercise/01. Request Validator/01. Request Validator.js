function requestValidator(object) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriRegex = /^[\w.]+$/;
    let validVersionHTTP = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let invalidMessageChars = ['<', '>', '\\', '&', "'", '"'];

    if (!validMethods.includes(object.method)) {
        throw new Error("Invalid request header: Invalid Method")
    }

    if (!object.uri || (object.uri !== '*' && !object.uri.match(uriRegex))) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!validVersionHTTP.includes(object.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (!object.hasOwnProperty("message")) {
        throw new Error("Invalid request header: Invalid Message");
    }

    for (let char of object.message) {
        if (invalidMessageChars.includes(char)) {
            throw new Error("Invalid request header: Invalid Message")
        };
    }

    return object;
}

// try {
//     requestValidator({
//         method: 'GET',
//         uri: 'git.master',
//         version: 'HTTP/1.1',
//         message: ''
//     })
// } catch (error) {
//     console.log(error);
// }



// requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// });

// requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// });

