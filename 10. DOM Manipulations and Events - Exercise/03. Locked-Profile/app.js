function lockedProfile() {
    let btnsRefsArray = Array.from(document.querySelectorAll('button'));
    btnsRefsArray.forEach(btn => btn.addEventListener('click', onClickHandler));

    function onClickHandler(event) {
        let parent = event.currentTarget.parentElement;
        let checkedRadioBtnRef = parent.querySelector('[type="radio"]:checked');
        let profileStatus = checkedRadioBtnRef.value;

        if (profileStatus === 'unlock') {
            let parent = event.currentTarget.parentElement;
            let hiddenDivRef = parent.querySelector('div');
            let clickedBtnRef = event.currentTarget;
            let clickedBtnText = clickedBtnRef.textContent;

            hiddenDivRef.style.display = clickedBtnText === 'Show more' ? 'block' : 'none';
            clickedBtnRef.textContent = clickedBtnText === 'Show more' ? 'Hide it' : 'Show more';
        }       
    }
}