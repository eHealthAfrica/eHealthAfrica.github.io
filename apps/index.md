---
layout: page
title:  Apps
permalink: /apps/
categories: 
---

### Sense

<ul>
  {% for app in site.data.apps %}
  {% if app.type == "sense" %}
  <li><h3><a href="/apps/{{app.url}}">{{app.name}}</a></h3></li>
  {% endif %}
  {% endfor %}
</ul>

---

### Nutrition

<ul>
  {% for app in site.data.apps %}
  {% if app.type == "nutrition" %}
  <li><h3><a href="/apps/{{app.url}}">{{app.name}}</a></h3></li>
  {% endif %}
  {% endfor %}
</ul>
