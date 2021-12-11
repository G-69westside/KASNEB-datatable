// use FileSystemDirectoryEntry;
// use strict();
$(document).ready(function ()
{   
    var table = $('#tbl-contact').DataTable({
            "scrollX": true,
            "pagingType": "numbers",
        "processing": true,
        "serverSide": true,
        "ajax": "server.php",
        order: [[2, 'asc']],
        columnDefs: [{
            targets: "_all",
            orderable: true
         }]
    });
    
    $('#tbl-contact thead th').each(function () {
        var title = $(this).text();
        $(this).html(title+' <input type="text" class="col-search-input" placeholder="Search ' + title + '" />');
    });
    
    table.columns().every(function () {
        var table = this;
        $('input', this.header()).on('keyup change', function () {
            if (table.search() !== this.value) {
                   table.search(this.value).draw();
            }
        });
    });
});