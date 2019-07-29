window.onload = function () {

    fetch('https://script.google.com/macros/s/AKfycbw-U1KFkAtGdlkeIH2zlsxJUFZnaN1v5aYhBdg751PRTKm-iDwb/exec', {
        method: 'GET'
    }).then(function (response) {
        return response.json();
    }).then(function (json) {

        console.log(JSON.stringify(json));
        initVue((json));
    });
};

function initVue(data) {
    new Vue({
        el: "#app",
        data: {
            list: data
        }
    });
}
