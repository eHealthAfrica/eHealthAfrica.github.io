---
layout: default
title: eHealth Africa Global Informatics • Case Studies
---

<section class="hero">
# Case Studies

Take a detailed look at some of the projects we’ve been working on recently

</section>
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
