function addAndRemove(commands) {
    result = [];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'add') {
            result.push(i + 1);
        } else {
            result.pop();
        }
    }

    console.log(result.join("\n") || "Empty");
}

// addAndRemove(['add','add','add','add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
// addAndRemove(['remove','remove','remove']);