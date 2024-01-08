function hideSettingGear(node){
    gearIcon = ((node.find('.icon')).find('use[href="#icon-setting-gear"]')).parent().parent().parent()
    gearIcon.css("visibility", "hidden")
}

function removeFormModalControles (frm){
	frm.page.wrapper.find('.grid-delete-row').hide();
	frm.page.wrapper.find('.grid-insert-row').hide();
	frm.page.wrapper.find('.grid-insert-row-below').hide();
	frm.page.wrapper.find('.grid-duplicate-row').hide();
	frm.page.wrapper.find('.grid-move-row').hide();
	frm.page.wrapper.find('.grid-shortcuts').hide();
	frm.page.wrapper.find('.grid-append-row').text('Add Another').css("background-color","#cccccc");
}
