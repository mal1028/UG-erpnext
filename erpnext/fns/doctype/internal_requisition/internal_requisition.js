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
