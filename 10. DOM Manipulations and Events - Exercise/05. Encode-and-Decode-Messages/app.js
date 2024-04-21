function encodeAndDecodeMessages() {
    const [senderTextareaRef, receiverTextareaRef] = document.querySelectorAll('textarea');
    const btnsRefsArray = Array.from(document.querySelectorAll('button'));

    btnsRefsArray.forEach(x => x.addEventListener('click', encodeOnClick));

    function encodeOnClick(event) {
        let clickedBtn = event.currentTarget;
        let textareaRef = clickedBtn.parentElement.children[1];
        let messageToProcess = textareaRef.value;

        let modifiedMessage = messageToProcess.split('').map((char) => {
            char = char.charCodeAt([0]);
            let newAscii = textareaRef.placeholder.includes('Write') ? char + 1 : char - 1;
            return String.fromCharCode(newAscii);
        }).join('');

        receiverTextareaRef.value = modifiedMessage;
        senderTextareaRef.value = '';
    }
}