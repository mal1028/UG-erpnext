frappe.ui.form.on('Internal Requisition', {
    onload: function(frm) {
        frm.toggle_display('faculty_items', false);
        frm.get_field('faculty_items').grid.cannot_add_rows = true;
        
    },
    faculty_button: function(frm) {
        
        frm.toggle_display('faculty_items', !frm.doc.faculty_button);
        frm.set_df_property('faculty_button', 'hidden', true);
       

        if (frm.doc.internal_requisition_items.length >= 1) {
            
            for (let i = 0; i < frm.doc.internal_requisition_items.length; i++) {
                frm.add_child("faculty_items");
                frm.doc.faculty_items[i].des_of_stock = frm.doc.internal_requisition_items[i].des_of_stock
                frm.doc.faculty_items[i].quantity_req= frm.doc.internal_requisition_items[i].quantity_req 
                frm.doc.faculty_items[i].uom = frm.doc.internal_requisition_items[i].uom 
                frm.doc.faculty_items[i].item_name = frm.doc.internal_requisition_items[i].item_name 
                console.log(frm.doc.faculty_items[i])
            }
            frm.refresh_field("faculty_items");
          } else {
            return;
          }
        
    }
});
