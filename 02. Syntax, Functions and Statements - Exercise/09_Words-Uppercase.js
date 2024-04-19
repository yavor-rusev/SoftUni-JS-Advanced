function wordsUppercase(str) {
    let regex = /\W+/g;
    console.log(str.split(regex).filter(Boolean).join(", ").toUpperCase());
}

wordsUppercase('Hi, how are you?');