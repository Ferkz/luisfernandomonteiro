/*var typed = new Typed(".auto-type",{
    strings: ["codding", "sleppiun", "eating"],
    typeSpeed: 150,
    backSpeed: 150,
    loop:true

})

var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12');
document.head.appendChild(jQueryScript)*/

import Typed from 'typed.js'

var options = {
    strings: ['codding', 'sleping', 'eating'],
    typeSpeed: 150

};
var type = new Typed('.auto-type', options);

var typed = new Typed(".auto-type",{
    strings: ["codding", "sleppiun", "eating"],
    typeSpeed: 150,
    backSpeed: 150,
    loop:true

})