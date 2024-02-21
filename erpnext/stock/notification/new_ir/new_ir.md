<p>Dear {{doc.full_name}},</p>

<p>Your Internal Requisition {{doc.name}} has been submitted.</p>

<p>It will be reviewed by the HOD and you will be notified as soon as the status updates. </p>

<li><b>{{ _("Internal Requisition") }}:</b> {{ frappe.utils.get_link_to_form(doc.doctype, doc.name) }}</li>