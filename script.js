const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

function requestJSON(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        let response = request.response;
        processResponse(response);
    }
}

function sendRequest() {
    requestJSON(requestUrl);
}

function processResponse(response) {
    console.log(response);

    let mainTbody = document.getElementById("main");
    mainTbody.innerHTML = `
        <tr>
            <td>$(response.squadName)</td>
            <td>$(response.homeTown)</td>
            <td>$(response.formed)</td>
            <td>$(response.secretBase)</td>
            <td>$(response.active)</td>
        <tr>'
}
    let heroesTbody = document.getElementById("heroes");
    response.members.forEach(function (hero) {
        heroesTbody.innerHTML += `
        < tr >
        < td >${hero.name} < /td>;
    <td>${hero.age}</td>
    < td >${hero.secretIdentity} < /td>;
    ${arrayToTD(hero.powers)}
</tr>
`;
})
}

function arrayToTD(array) {
let result = "";

array.forEach(function (element) {
result += '<td>' + element + '</td>';
});

return result;
}