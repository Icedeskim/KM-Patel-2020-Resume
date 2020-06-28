
function displayReferences() {
    let references = [

        {Name: "Rox Burkett M.D.", Information: "rxburkett@yahoo.com"
        },
        {Name: "David Jolley", Information: "801-707-7141"             
        }
    ];
}
let tableBody = document.querySelector('#displayReferences');


for (let references of references)  {
        let html = '';
        html += '<tr>';
        html += '<td>' + references.name + '</td>';
        html += '<td>' + references.Information + '</td>';
        tableBody.innerHTML = + html;
};






