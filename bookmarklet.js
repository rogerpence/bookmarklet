(function() {

console.log('bm loaded');

console.log(window.location.href);
console.log(document.title);

const bm_form = 
`<div id="bm-html" class="bm">
    <div id="bm-html-title">rp bookmarks</div>
    <input id="bm-url" type="text"><br>
    <input id="bm-title" type="text"><br>

    <button id="bm-cancel">Cancel</button>
    <button id="bm-save">Save</button>
</div>`;

const bm_css = 
`div.bm {
    background-color: rebeccapurple;
    position: fixed;
    top : 20px;
    right: 40px;
    padding: 1rem;
    z-index: 99999;    
    font-size: 16px;
}

#bm-html-title {
    color: white;
    padding: .5rem;
}

#bm-url  {
    width: 24rem;
}

#bm-title {
    width: 24rem;
}`;

document.body.insertAdjacentHTML('afterbegin',`<style id='bm-style'>${bm_css}</style>`);
document.body.insertAdjacentHTML('afterbegin',bm_form);

const bmSave = document.getElementById('bm-save');
bmSave.addEventListener('click', e => {
    alert('save code here');
});        

const bmCancel = document.getElementById('bm-cancel');
bmCancel.addEventListener('click', e => {
    const bmHtml = document.getElementById('bm-html');
    const bmStyle = document.getElementById('bm-style');
    const bmScript = document.getElementById('bm-script');

    // document.body.removeChild(bmHtml);
    // document.body.removeChild(bmStyle);
    // bmScript.parentElement.removeChild(bmScript);
    window.location.reload();
});        

const urlinput = document.getElementById('bm-url');
const titleinput = document.getElementById('bm-title');

urlinput.value = window.location.href;
titleinput.value = document.title;

})();

// let cssurl = 'http://127.0.0.1:5500/bm.css'
// cssurl = `https://asna.com/filebin/marketing/article-figures/bm.css?${Math.random()}`;
// fetch(cssurl, {credentials: 'include'}).then(function(response) {
//     response.text().then(function(text) {
//         document.body.insertAdjacentHTML('afterbegin',`<style id='bm-style'>${text}</style>`);
//     });
// });

// let url = 'http://127.0.0.1:5500/bm.html'
// url = `https://asna.com/filebin/marketing/article-figures/bm.html?${Math.random()}`;
// fetch(url, {credentials: 'include'}).then(function(response) {
//     response.text().then(function(text) {
//         document.body.insertAdjacentHTML('afterbegin',text);
//         runbm();
//     });
// });

