---
layout: page
title:  Templates
permalink: /templates/
categories: templates
---

Templates are useful to get a jump on some part of a project!


<ul>
  {% for template in site.data.templates %}
  <li>
    <a href="{% if template.url %}{{design.url}}{% else %}/template/{{template.path}}{%endif%}">{{template.name}}</a>
  </li>
  {% endfor %}
</ul>

---

To add an Template [read this]({{site.url_repo}}#adding-items)
