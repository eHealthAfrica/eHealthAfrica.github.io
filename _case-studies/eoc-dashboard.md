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

Polio is a highly contagious virus that causes irreversible paralysis, usually in the legs. The main form of transmission is the fecal-oral route, which means that it thrives in areas without good sewage systems.

Depictions of it can be seen in art as far back as ancient Egypt, but the first recognisable description of the polio virus is from 1789. After a pandemic in Europe and the US, a vaccine was developed by Jonas Salk in the 1950s, and the Americas were eventually declared polio-free in 1994. Europe followed in 2002. 

In 2012 the [Global Polio Eradication Initiative](http://www.polioeradication.org/), a public-private partnership led by national governments and spearheaded by the World Health Organization (WHO), Rotary International, the US Centers for Disease Control and Prevention (CDC), and the United Nations Children’s Fund (UNICEF), developed a [Polio Eradication and Endgame Strategic Plan](http://www.polioeradication.org/Resourcelibrary/Strategyandwork.aspx) with the intention of ridding the world of polio by 2018. Regions can receive polio-free certification by going 3 years without a new infection, while maintaining a robust and data-backed surveillance system to look for new cases.

Currently the disease is endemic in only two countries: Pakistan and Afghanistan. The WHO removed Nigeria from the endemic list in 2015, after 14 months passed without any new cases. If no new cases are discovered in the next two years, Nigeria and the whole Afro region will be certified **polio-free**.

## Polio in Nigeria

In fact Nigeria was provisionally considered to be polio-free 15 years ago, but in 2003 Boko Haram, the Islamic extremist group that controls much of the Nort-East, declared a fatwah agains the vaccine, announcing that it was a western conspiracy to sterilise muslims.

Since then there have been several cases in the area, the majority of which have  been the result of “non-compliance”, where parents refuse to allow the vaccination of their children. Vaccination teams in the northeast have reported being threatened, which has led to some unique strategies for reaching every child. In security compromised regions, teams will participate in “hit and run” interventions, a compressed form of a polio campaign that allows them to get in quickly and vaccinate all children in a short amount of time.

Despite this, huge progress has been made: as mentioned, the last recorded case was in July 2014. Nigerians are considerably more mobile than the inhabitants of other at-risk countries, so if the country is certified polio-free in 2017, would represent a huge step along the way to global eradication.

## Polio eradication in Nigeria

Because of the high transmissibility of the virus, the key to polio eradiction is **100% vaccination coverage**. This is achieved by sending vaccination teams out on campaigns, to travel from settlement to settlement, stopping at every single household to administer administering vaccines to all children under five. These settlements can be extremely isolated:

> Even if you have to go on a motorbike to get to a settlement nearby, it’s still not hard to reach by African standards. Think riding as far as you can in a car before you run out of roads, followed by a motorbike trip, followed by a boat trip across a large river, and then a long walk to finally reach the settlement. <cite>Lucy Chambers, EOC Dashboard Product Owner</cite>

![Travelling to a hard to reach settlement](/img/eoc-dashboard-hard-to-reach.jpg)

100% coverage requires 100% knowledge; our GIS team has captured **over 10TB of geolocation data** about previously unmapped areas, and has identified 782 previously undocumented hamlet settlements. At one point eHA was the single biggest contributor to the [Open Street Map](https://www.openstreetmap.org/) project. 

## Emergency Operation Centers

In 2012, we received funds from The Gates Foundation to build and manage **Emergency Operations Centers** (EOCs) in the northern states with the highest infection rates, and a National Polio EOC in Abuja to coordinate activities between state governments and national agencies. The aim of these centers is to bring together the disparate groups who are involved (national, state, and local governments in Nigeria, WHO, UNICEF, CDC, Rotary International, and other local partners) and promote collaboration between them to achieve the eradication milestone..

![The Emergency Operations Center in Kano](/img/eoc-dashboard-eoc.jpg)

## Polio Campaigns

Each vaccination campaign is 4 days long, followed by a **mop-up** to cover any missed settlements. **Microplans** created by the local governments specify which settlements should be visited by which team on which day. Our GIS work has helped enormously with this microplanning by locating settlements that were previously being missed.

As they travel from settlement to settlement performing vaccinations and searching for cases, the campaign teams carry GPS-enabled phones, which eHA deploys — roughly 19,000 phones in all. After each child has been vaccinated, they are **fingermarked**.

![A child being fingermarked after vaccination](/img/eoc-dashboard-fingermark.jpg)

The fingermarks serve two purposes: they enable the teams to quickly check for any missed children, but they are also used by independent monitors who assess campaign quality by verifying the coverage a few days after its conclusion.


## EOC Dashboard

In collaboration with the Data team of the National Emergency Operations Centre in Abuja, the [Gates Foundation](http://www.gatesfoundation.org/) and [Novel-T](http://www.novel-t.ch/), we created a dashboard that displays and allows analysis of data relating to the campaigns. It is being used by the National EOC currently, and will be rolled out to state EOCs for local-level planning and analysis at a later date.

The dasboard enables the EOC and the Data Team to automatically generate a wide variety of reports based on the campaign data – a task which was previously done manually, and was extremely time-consuming.

### Dashboard data
Campaign data is split into three phases: **pre-campaign**, **intra-campaign** and **post-campaign**. Pre-campaign data relates to preparations that take place in the regions where a vaccination campaign is planned, for example:

- has the region received the necessary funding?
- has the necessary training taken place?
- have ward boundaries been established?

During the campaigns, the teams participate in daily meetings, which are an important forum for coordination and decision-making. Whether or not these meetings take place -- and whether they involve the right stakeholders that can drive local action -- is therefore an important intra-campaign datum.

The post-campaign data is concerned with how many settlements were covered, how many missed, and how many children were fingermarked.

## Technical details

The most complex and interesting aspect of the dashboard’s implementation has been the **UX design**. Presenting the quantity and range of data in a format that is easily analysable is a challenge. Ally Long, one of our UX designers, travelled from Berlin to Nigeria to perform user testing and to analyse processes both on-site and in the field.

> It was so invaluable to observe hands-on how the dashboard was used and any usability issues that cropped up (not everyone knows what a hamburger icon means! labels labels labels!) <cite>Ally Long, UX designer</cite>

Currently the dashboard is an Angular Single Page Application, backed by [Kazana](https://github.com/eHealthAfrica/kazana), our in-house data warehousing system. 

### Kazana

Kazana evolved out of another of our projects that collects and analyses nutrition data. We realised that we could abstract large parts of that project and turn them into a re-usable system. It now provides the foundation for much of our work.

Kazana provides the three main aspects of data warehousing that are required for the type of health projects in which we specialise: 

- **data staging** to consume and store raw data submissions
- **data integration** that transforms this raw data into a more useful format
- access tools to enable **online analytic processing** (OLAP) of the transformed data

Kazana’s modular architecture enables us to use plugins to consume and transform data from a variety of different sources, for example Excel files submitted via email. It also provides a suite of user management tools that make it easy to get new projects up and running as quickly as possible.

Like the majority of our other projects, Kazana is backed by a [CouchDB](https://couchdb.apache.org/) database, which provides a versatile, performant data store. The EOC Dashboard currently retrieves its data from Novel-T via an API, so it barely uses the data staging and integration capabilities of Kazana. However, we are moving towards a standalone system that will use the API to import all the existing data so that we can hand it over to the Nigerian government in a single, unified form.
