function getTimeOfDay() {
    let now = new Date();
    let hour = now.getHours();
    return hour;
}
function greetUser() {
    let name = document.getElementById('greetingName').value;
    document.getElementById('userName').innerHTML = name;
    $('#getUserName').modal('hide');
    $('#greetUser').modal('show');

}

function displayGreetingMessage(message) {
    document.getElementById('message').innerHTML = message;
}


function customizeGreeting() {
    let hour = getTimeOfDay();
    let message = 'message';
    if (hour >= 5 && hour < 12) {
        message = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        message = 'Good Afternoon';
    } else if (hour >= 18) {
        message = 'Good Evening';
    }

    displayGreetingMessage(message);
}

$(document).ready(() => {
    $('#getUserName').modal('show');
    customizeGreeting();
    displayReferences();
});



function displayReferences() {
    let references = [

        {
            Name: 'Rox Burkett M.D.',
            Information: 'rxburkett@yahoo.com'
        },
        {
            Name: 'David Jolley',
            Information: '801-707-7141'
        }
    ];
}
let tableBody = document.querySelector('#references-table > tbody');


for (let references of references)  {
        let html = '';
        html += '<tr>';
        html += '<td>' + references.name + '</td>';
        html += '<td>' + references.Information + '</td>';

        tableBody.innerHTML = + html;
};






