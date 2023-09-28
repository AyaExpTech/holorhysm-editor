/**
 * document.querySelectorのエイリアス
 * @param {String} selector - CSSセレクタ
 * @returns {Element}
 */
const $ = selector => document.querySelector(selector);

/**
 * document.querySelectorAllのエイリアス
 * @param {String} selector - CSSセレクタ
 * @returns {Element[]}
 */
const $$ = selector => document.querySelectorAll(selector);

/**
 * ページ読み込み時にURLのアンカー部分を見てその画面に遷移
 */
window.addEventListener("load", () => {
    if (window.location.hash) window.location.replace(window.location.hash);
});

/**
 * 各種、変数になりそうなやつ
 */
const Options = {
    "laneWidth": 50, // レーン幅(px)
};

/**
 * 画面リサイズ時、canvasの縦幅を自動的に設定
 */
window.addEventListener("resize", event => {
    $("#view").setAttribute("height", $("#view").clientHeight - 1);
})