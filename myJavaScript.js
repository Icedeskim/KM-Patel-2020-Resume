
function greetUser()  {
    let name = document.getElementById('greetingName').value
    document.getElementById('userName').innerHTML = name;
    $('#getUserName').modal('hide');
    $('#getUserName').modal('show');
}
$(document).ready(() => {
    $('#greetUser').modal('show');
});

