---
class: long-form
layout: default
title: EOC Dashboard
description: Working towards the global eradication of the polio virus
image: /img/list-sense-followup.jpg
draft: true
---

> Nigeria has made remarkable progress against polio, but continued vigilance is needed to protect these gains and ensure that polio does not return. [...] Immunization and surveillance activities must continue to rapidly detect a potential re-introduction or re-emergence of the virus.
><cite>[WHO Removes Nigeria from Polio-Endemic List](WHO Removes Nigeria from Polio-Endemic List)</cite>

Polio is an extremely contagious virus that causes paralysis, usually in the legs. The main form of transmission is in stool, which means that it thrives in areas without good sewage systems.

Depictions of it can be seen in art as far back as ancient Egypt, but the first recognisable description of the polio virus is from 1789. After a pandemic in Europe and the US, a vaccine was developed by Jonas Salk in the 1950s, and the Americas were eventually declared polio-free in 1994. Europe followed in 2002. 

In 2012 the [Global Polio Eradication Initiative](http://www.polioeradication.org/), a public-private partnership led by national governments and spearheaded by the World Health Organization (WHO), Rotary International, the US Centers for Disease Control and Prevention (CDC), and the United Nations Children’s Fund (UNICEF), developed a [Polio Eradication and Endgame Strategic Plan](http://www.polioeradication.org/Resourcelibrary/Strategyandwork.aspx) with the intention of ridding the world of polio by 2018. Countries can receive polio-free certification by going 3 years without a new infection, as long as they can prove that they are actively seeking new cases.

Currently the disease is endemic in only two countries: Pakistan and Afghanistan. The WHO removed Nigeria from the endemic list in 2015, after it went for a year without any new cases. If no new cases are discovered in the next two years, Nigeria will be certified **polio-free**.

## Polio in Nigeria

In fact Nigeria was provisionally considered to be polio-free 15 years ago, but in 2003 Boko Haram, the Islamic extremist group that controls much of the Nort-East, declared a fatwah agains the vaccine, announcing that it was a western conspiracy to sterilise muslims.

Since then there have been several cases in the area, the majority of which have  been the result of “non-compliance”, where parents refuse to allow the vaccination of their children. Vaccination teams in the North-East have reported being threatened, and they sometimes describe their campaigns as “hit and run”.

Despite this, huge progress has been made: as mentioned, the last recorded case was in July 2014. Nigerians are considerably more mobile than the inhabitants of other at-risk countries, so if the country is certified polio-free in 2017, would represent a huge step along the way to global eradication.

## Polio eradication in Nigeria

Since it is so virulent, the key to polio eradiction is **100% vaccination coverage**. This is achieved by sending vaccination teams out on campaigns, to travel from settlement to settlement administering vaccines to all children under five. These settlements can be extremely isolated:

> Even if you have to go on a motorbike to get to a settlement nearby, it’s still not hard to reach by African standards. Think riding as far as you can in a car before you run out of roads, followed by a motorbike trip, followed by a boat trip across a large river, and then a long walk to finally reach the settlement. <cite>Lucy Chambers, EOC Dashboard Product Owner</cite>

![Travelling to a hard to reach settlement](/img/eoc-dashboard-hard-to-reach.jpg)

100% coverage requires 100% knowledge; our GIS team has captured **over 10TB of geolocation data** about previously unmapped areas, and has identified 782 previously undocumented hamlet settlements. At one point eHA was the single biggest contributor to the [Open Street Map](https://www.openstreetmap.org/) project. 

## Emergency Operation Centers

In 2012, we received funds from The Gates Foundation to build and manage **Emergency Operations Centers** (EOCs) in the northern states with the highest infection rates, and a National Polio EOC in Abuja to coordinate activities between state governments and national agencies. The aim of these centers is to bring together the disparate groups who are involved (WHO, Unicef, CDC, the Nigerian government) (any others?) and promote collaboration between them around specific health emergencies.

![The Emergency Operations Center in Kano](/img/eoc-dashboard-eoc.jpg)

## Polio Campaigns

Each vaccination campaign is 4 days long, followed by a “mop-up” to cover any missed settlements. As they travel from settlement to settlement performing vaccinations and searching for cases, the campaign teams carry GPS-enabled phones, which eHA deploys — roughly 19,000 phones in all.

After each child has been vaccinated, the health workers “fingermark” them.

![A child being fingermarked after vaccination](/img/eoc-dashboard-fingermark.jpg)

## EOC Dashboard

In collaboration with the Data team of the National Emergency Operations Centre in Abuja, the Gates Foundation and Novel-T, we created a dashboard that displays and allows analysis of data relating to the campaigns. It is intended to be used by the National EOC, but there is a possibility that it will also be used by state-level EOCs at a later date.

The users of the dashboard are the EOC Data Team, which includes members from each of the involved organisations. The dasboard enables them to automatically generate a wide variety of reports based on the campaign data – a task which was previously done manually, and was extremely time-consuming.

### Dashboard data
Campaign data is split into three phases: **pre-campaign**, **intra-campaign** and **post-campaign**. Pre-campaign data relates to preparations that take place in the regions where a vaccination campaign is planned, for example:

- has the region received the necessary funding?
- has the necessary training taken place?
- have ward boundaries been established?

During the campaigns, the teams participate in daily meetings, which are an important forum for coordination and decision-making. Whether or not these meetings take place is therefore an important intra-campaign datum.

The post-campaign data is concerned with how many settlements were covered, how many missed, and how many children were fingermarked.

## Technical details

The most complex and interesting aspect of the dashboard’s implementation has been the **UX design**. Presenting the quantity and range of data in a format that is easily analysable is a challenge. Ally Long, one of our UX designers, travelled from Berlin to Nigeria to perform user testing and to analyse processes both on-site and in the field.

> It was so invaluable to observe hands-on how the dashboard was used and any usability issues that cropped up (not everyone knows what a hamburger icon means! labels labels labels!) <cite>Ally Long, UX designer</cite>

Currently the dashboard is an Angular Single Page Application, backed by [Kazana](https://github.com/eHealthAfrica/kazana), our in-house data warehousing system. 

![Screenshot of the EOC Dashboard](/img/eoc-dashboard-screenshot.jpg)

### Kazana

Kazana evolved out of another of our projects that collects and analyses nutrition data. We realised that we could abstract large parts of that project and turn them into a re-usable system. It now provides the foundation for much of our work.

Kazana provides the three main aspects of data warehousing that are required for the type of health projects in which we specialise: 

- **data staging** to consume and store raw data submissions
- **data integration** that transforms this raw data into a more useful format
- access tools to enable **online analytic processing** (OLAP) of the transformed data

Kazana’s modular architecture enables us to use plugins to consume and transform data from a variety of different sources, for example Excel files submitted via email. It also provides a suite of user management tools that make it easy to get new projects up and running as quickly as possible.

Like the majority of our other projects, Kazana is backed by a [CouchDB](https://couchdb.apache.org/) database, which provides a versatile, performant data store. Since the EOC Dashboard currently retrieves its data from Novel-T via an API, it barely uses the data staging and data integration capabilities of Kazana. There is however a strong possibility that we will at some point import all the existing data from Novel-T’s API so that we can hand it over to the Nigerian government in a single, unified form.
