async function verify() {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
}

function clicky() {
    const otherCheckbox = document.querySelector('#other');
    const otherText = document.querySelector('#otherValue');
    otherText.style.visibility = 'hidden';

    otherCheckbox.addEventListener('change', () => {
        if (otherCheckbox.checked) {
            otherText.style.visibility = 'visible';
            otherText.value = '';
        } else {
            otherText.style.visibility = 'hidden';
        }
    });
}



function edit() {
    alert('Editing applicant form.')

    const form = document.getElementById('editing').elements;
    for (let i = 0; i < form.length; i++) {
        // Disable all form controls
        form[i].removeAttribute('disabled')
    }

    document.getElementById('update').removeAttribute('disabled')
}

function save() {

    const form = document.getElementById('editing').elements;
    for (let i = 0; i < form.length; i++) {
        // Disable all form controls
        form[i].setAttribute('disabled', 'true')
    }
}


function show() {
    const form = document.getElementById('allergyInput');
    const submit = document.getElementById('tutorial');
    form.setAttribute("required", "")
    submit.style.display = 'block';
}

function hide() {
    const form = document.getElementById('allergyInput');
    const submit = document.getElementById('tutorial');
    form.removeAttribute("required", "");
    form.value = '';
    submit.style.display = 'none';
}

function validateSize(input) {
    const fileSize = input.files[0].size / 1024 / 1024; // in MiB

    if (fileSize > 2) {
        alert('File size exceeds 2 MiB, please try uploading something smaller!');
        input.value = null;
    }
}

async function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

async function searchHardware() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function tableToCSV() {

    // Variable to store the final csv data
    var csv_data = [];

    // Get each row data
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {

        // Get each column data
        var cols = rows[i].querySelectorAll('td,th');

        // Stores each csv row data
        var csvrow = [];
        for (var j = 0; j < cols.length; j++) {

            // Get the text data of each cell
            // of a row and push it to csvrow
            csvrow.push(cols[j].innerHTML);
        }

        // Combine each column value with comma
        csv_data.push(csvrow.join(","));
    }

    // Combine each row data with new line character
    csv_data = csv_data.join('\n');

    // Call this function to download csv file
    downloadCSVFile(csv_data);

}

function downloadCSVFile(csv_data) {

    // Create CSV file object and feed
    // our csv_data into it
    CSVFile = new Blob([csv_data], {
        type: "text/csv"
    });

    // Create to temporary link to initiate
    // download process
    var temp_link = document.createElement('a');

    // Download csv file
    temp_link.download = "data.csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // Automatically click the link to
    // trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
}

// -- Get checked hardware items out of list
function getChecked(){
    // const hardwareID = [];

    var items=document.getElementsByName('hardwareItems');

    let formData = new FormData(formElem);


    for(var i=0; i<items.length; i++){

        if(items[i].type === 'checkbox' && items[i].checked === true){
            // hardwareID.push(items[i].value)
            formData.append(items[i].value, "delete")
        }
    }

    for(let [name, value] of formData) {
        console.log(`${name} = ${value}`); // key1 = value1, then key2 = value2
    }

    // console.log(hardwareID)
}