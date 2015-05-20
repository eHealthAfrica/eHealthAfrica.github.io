---
layout: page
title:  Our apps
permalink: /apps/
categories: 
---

### Sense

<ul class="list-unstyled">
  {% for app in site.data.apps %}
  {% if app.type == "sense" %}
  <li><h4><a href="{{app.path}}">{{app.name}}</a></h4></li>
  {% endif %}
  {% endfor %}
</ul>

---

### Nutrition

<ul class="list-unstyled">
  {% for app in site.data.apps %}
  {% if app.type == "nutrition" %}
  <li><h4><a href="{{app.path}}">{{app.name}}</a></h4></li>
  {% endif %}
  {% endfor %}
</ul>

---

### Communications

<ul class="list-unstyled">
  {% for app in site.data.apps %}
  {% if app.type == "communications" %}
  <li><h4><a href="{{app.path}}">{{app.name}}</a></h4></li>
  {% endif %}
  {% endfor %}
</ul>

---

### Logistics

<ul class="list-unstyled">
  {% for app in site.data.apps %}
  {% if app.type == "logistics" %}
  <li><h4><a href="{{app.path}}">{{app.name}}</a></h4></li>
  {% endif %}
  {% endfor %}
</ul>

---


To add an app, [read this]({{site.url_repo}}#adding-items).
