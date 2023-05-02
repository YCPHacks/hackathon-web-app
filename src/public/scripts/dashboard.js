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


function edit(){
    alert('Editing applicant form.')

    const form = document.getElementById('editing').elements;
    for (let i = 0; i < form.length; i++) {
        // Disable all form controls
        form[i].removeAttribute('disabled')
    }

    document.getElementById('update').removeAttribute('disabled')
}

function save(){

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
    // submit.style.visibility = 'visible';
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
    // console.log(input.files[0].name);

    if (fileSize > 2) {
        alert('File size exceeds 2 MiB, please try uploading something smaller!');
        input.value = null;
        // console.log("successfully reset");
    } else {
        // alert("its fine");
    }
}

async function searchTable(){
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

async function searchHardware(){
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