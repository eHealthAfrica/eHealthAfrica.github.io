---
layout: default
title: Case Studies
description: Take a look at some of the projects we've been working on recently.
---

<ul class="case-studies-list">
{% for study in site.case-studies %}
  <li>
    <a href="{{ study.url }}" style="background-image: url({{ study.image }})">
      <h1>{{ study.title }}</h1>
      <p>{{ study.description }}</p>
    </a>
  </li>
{% endfor %}
</ul>
