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