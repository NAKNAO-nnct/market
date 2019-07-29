
(function (handleload) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", handleload, false);
    xhr.open("GET", "https://script.google.com/macros/s/AKfycbw-U1KFkAtGdlkeIH2zlsxJUFZnaN1v5aYhBdg751PRTKm-iDwb/exec", true);
    xhr.send(null);
})(function handleLoad(event) {
    var xhr = event.target,
        obj = JSON.parse(xhr.responseText);
    initVue(obj);
    console.log(obj);
});

function initVue(data) {
    new Vue({
        el: "#app",
        data: {
            list: data
        }
    });
}
