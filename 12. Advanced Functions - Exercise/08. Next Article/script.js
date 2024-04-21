function getArticleGenerator(articles) {
    let articleArray = [...articles];
    const contentRef = document.getElementById("content");

    function generateNewArticle() {
        if (!articleArray.length) {
            return;
        }

        let currentArticleText = articleArray.shift();
        contentRef.innerHTML += `<article>${currentArticleText}</article>`;
    }

    return generateNewArticle;
}
