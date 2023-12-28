frappe.ui.form.on('Internal Requisition', {
    onload: function(frm) {
        frm.toggle_display('faculty_items', false);
        frm.get_field('faculty_items').grid.cannot_add_rows = true;
    },
    faculty_button: function(frm) {
        var isFacultyItemsVisible = frm.fields_dict.faculty_items.df.hidden;
        frm.toggle_display('faculty_items', isFacultyItemsVisible);

        if (!isFacultyItemsVisible) {
            copyDataToFacultyItems(frm);
        }
    }
});

function copyDataToFacultyItems(frm) {
   
    var childTableFieldNames = ['des_of_stock', 'quantity_req', 'uom'];
    var facultyItemsTable = frm.fields_dict.faculty_items.grid;

   
    facultyItemsTable.remove_all();
    childTableFieldNames.forEach(function(childTableName) {
      
        var internalItemsField = frm.fields_dict.internal_requisition_items[childTableName];

        
        if (internalItemsField) {
            
            for (var i = 0; i < internalItemsField.grid.get_data().length; i++) {
                var row = internalItemsField.grid.get_data()[i];
                var newRow = frm.add_child('faculty_items');

              
                newRow.des_of_stock = row.des_of_stock;
                newRow.quantity_req = row.quantity_req;
                newRow.uom = row.uom;


                newRow.quantity_issued = 0; 
                newRow.remarks = '';
            }
        }
    });

    frm.fields_dict.faculty_items.refresh();
}