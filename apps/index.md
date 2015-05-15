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

### Communications

<ul>
  {% for app in site.data.apps %}
  {% if app.type == "communications" %}
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

---


To add an App [read this]({{site.url_repo}}#adding-items)
