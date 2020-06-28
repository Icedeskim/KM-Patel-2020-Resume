function commentThanksubmit(message) {
    document.commentThanksubmit('message').innerHTML = message;
}
commentThanksubmit(message);
}
$(document).ready(() => {
    $('#commentThanksubmit').modal('show');
    customizeGreeting();
});