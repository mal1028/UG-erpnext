<h2>Internal Requisition</h2>

Dear Faculty, <br> <br>
<p>Internal Requisition {{doc.name}} created by {{ doc.full_name }} of {{ doc.department }} is pending your approval.</p>

<li><b>{{ _("Internal Requisition") }}:</b> {{ frappe.utils.get_link_to_form(doc.doctype, doc.name) }}</li>