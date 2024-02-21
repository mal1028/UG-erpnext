<h3>Internal Requisition</h3>

<p>Internal Requisition {{ doc.name }} has been submitted to you. Please take necessary action.</p>

<p> Click on the link to see more details</p>

<li><b>{{ _("Internal Requisition") }}:</b> {{ frappe.utils.get_link_to_form(doc.doctype, doc.name) }}</li>