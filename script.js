function crearBody_modificarEnlace() {

    var header = document.createElement("h1");
    header.textContent = "encabezado dinámico";
    var line = document.createElement("hr");
    var div = document.createElement("div");
    var section = document.createElement("p");
    section.textContent = "párrafo creado dinámicamente";
    div.appendChild(section);
    document.body.insertBefore(div, document.body.firstChild);
    document.body.insertBefore(line, document.body.firstChild);
    document.body.insertBefore(header, document.body.firstChild);

    var link = document.getElementsByTagName("a")[0];
    link.href = "https://www.wikipedia.org";
    link.textContent = "ir a wikipedia";

}

function goHome() {

    window.location.href = '/';

}

function goGit() {

    window.location.href = 'https://github.com/s7rg77/dynamic-creation-of-an-HTML-document';

}

function goDoc() {

    window.location.href = '/doc';

}