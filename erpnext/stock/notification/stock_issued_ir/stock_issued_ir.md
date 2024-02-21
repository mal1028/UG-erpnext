<h2>Internal Requisition</h2>

Dear {{doc.full_name}}, <br> <br>
<p>Items that you requested were just issued by faculty office. {{doc.name}}.</p>

<p> Click on the link to login and add the items to your inventory.</p>

<li><b>{{ _("Internal Requisition") }}:</b> {{ frappe.utils.get_link_to_form(doc.doctype, doc.name) }}</li>