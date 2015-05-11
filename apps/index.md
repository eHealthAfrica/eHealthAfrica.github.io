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
  <li><h3><a href="{{app.path}}">{{app.name}}</a></h3></li>
  {% endif %}
  {% endfor %}
</ul>

---

### Nutrition

<ul>
  {% for app in site.data.apps %}
  {% if app.type == "nutrition" %}
  <li><h3><a href="{{app.path}}">{{app.name}}</a></h3></li>
  {% endif %}
  {% endfor %}
</ul>

---

### Call Centre

<ul>
  {% for app in site.data.apps %}
  {% if app.type == "call-centre" %}
  <li><h3><a href="{{app.path}}">{{app.name}}</a></h3></li>
  {% endif %}
  {% endfor %}
</ul>

---

### Logistics

<ul>
  {% for app in site.data.apps %}
  {% if app.type == "logistics" %}
  <li><h3><a href="{{app.path}}">{{app.name}}</a></h3></li>
  {% endif %}
  {% endfor %}
</ul>