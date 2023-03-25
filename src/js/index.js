/** Stylesheet **/
import '../scss/style.scss';

/** Bootstrap */
import 'bootstrap';

/** FontAwesome 6 */
import '@fortawesome/fontawesome-free/js/all.js';

/** Footer */
document.body.onload = footer;

function footer() {
    // create a new div element
    const footerDiv = document.createElement("footer");

    // assign it a class
    footerDiv.classList.add("footer");

    // gets the current date
    const copyright = new Date().getFullYear();

    // gets the copyright symbol
    const favicon = document.createElement("i");
    favicon.classList.add("fa-solid", "fa-copyright");

    const text = document.createTextNode(" 2004 " + "- " + copyright);
    const text2 = document.createTextNode(" Heart4Kids.org All Rights Reserved.");

    // add the text node to the newly created div
    footerDiv.appendChild(favicon);
    footerDiv.appendChild(text);
    footerDiv.appendChild(text2);

    // add the newly created element and its content into the DOM
    const newDiv = document.getElementById("div");
    document.body.insertBefore(footerDiv, newDiv);
}