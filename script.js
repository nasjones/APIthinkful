function getRepos() {
    let username = document.getElementById("user").value;
    let link = 'https://api.github.com/users/' + username + '/repos';
    fetch(link)
        .then(response => {

            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson =>
            showRepos(responseJson))
        .catch(error => alert('something went wrong!'));
}

function showRepos(responseJson) {
    let username = document.getElementById("user").value;
    console.log(responseJson[0]);
    // if (responseJson.status == 'error') {
    //     errorMessage();
    // } else {
    $('#repoStage').empty();
    $('#repoStage').append(`<h2> Here are all of ${username}'s repos</h2>
     <ul id="repoList"></ul>`);
    for (let i = responseJson.length - 1; i > 0; i--) {
        $('#repoList').append(`<li>${responseJson[i].name} -- <a href="${responseJson[i].html_url}" target="_blank">link</a> </li>`);
    }
    $('.results').removeClass('hidden');
}

function errorMessage() {
    $('#picStage').html(
        `<p>I'm sorry but that doesnt seem to be one of the breeds we have 
    here try one of these:</p>
    <ul>
    <li>akita</li>
    <li>hound</li>
    <li>cocker</li>
    <li>bulldog</li>
    <li>elkhound</li>
    <li>pinscher</li>
    </ul>`);
}

function submit() {
    $('form').submit(e => {
        e.preventDefault();
        getRepos();
    });
}

submit();