---
layout: page
title: User Personas
permalink: /templates/user-personas/
categories: templates
---

Personas are a great way to get a sense of *who* is using an application. This sort of information is useful for design thinking (as well as development) as it informs *how* they use it as well as for giving [user roles](/templates/feature-specification/#user-roles) in applications a more human side. The following is an example of one of our user personas.

---

{% for person in site.data.personas %}
{% if person.slug == "simon-moses" %}

  <h3>{{person.name}}</h3>

  **Overview**

  {{person.overview}}

  **Lifestyle**

  {{person.lifestyle}}

  **Work**

  {{person.work}}

  **Skills**

  {{person.skills}}
  
  **Software**

  {{person.software}}

  **Challenges**

  {{person.challenges}}

  **Goals**

  {{person.goals}}

  **Languages**

  {{person.languages}}
{% endif %}
{% endfor %}

---

### Persona Template

To add a new user persona to our list of personas copy the following block of code and paste it at the bottom of [data/personas.yml](https://github.com/eHealthAfrica/eHealthAfrica.github.io/blob/master/_data/personas.yml) and send a pull request

<pre>
- slug:
  name:
  picture:
  overview: 
  lifestyle:
  work:
  skills:
  software:
  challenges:
  goals:
  languages:
</pre>
