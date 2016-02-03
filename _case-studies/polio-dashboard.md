---
class: long-form
layout: default
title: Polio Dashboard
description: Working towards the global eradication of the polio virus
image: /img/list-sense-followup.jpg
draft: true
---

> Nigeria has made remarkable progress against polio, but continued vigilance is needed to protect these gains and ensure that polio does not return. [...] Immunization and surveillance activities must continue to rapidly detect a potential re-introduction or re-emergence of the virus.
><cite>[WHO Removes Nigeria from Polio-Endemic List](WHO Removes Nigeria from Polio-Endemic List)</cite>

Polio is an extremely contagious virus that causes paralysis, usually in the legs. The main form of transmission is via faecal matter, which means that it thrives in areas without good sewage systems. A major complication is that carriers of the virus can be impossible to recognise: only about 1 in 200 cases exhibit symptoms.

Depictions of it can be seen in art as far back as ancient Egypt, but the first recognisable description of the polio virus is from 1789. In the late 19th century, outbreaks in Europe and the US became more and more common, reaching pandemic levels during the first half of the twentieth century. In the 1950s a vaccine was developed by Jonas Salk, and the Americas were eventually declared polio-free in 1994. Europe followed in 2002. 

In 2013 the WHO announced its intention to eradicate the disease globally within the next five years. Countries can receive polio-free certification by going 3 years without infection, as long as they can prove that they are actively seeking new cases.

Currently the disease is endemic in only two countries: Pakistan and Afghanistan. Nigeria was also on this endemic list until the WHO removed it in 2015; the last recorded case was in 2014. If no new cases are discovered in the next two years, Nigeria will be certified polio-free.

## Polio in Nigeria

In fact Nigeria was provisionally considered to be polio free, but in 2003 Boko Haram, the Islamic extremist group that controls much of the Nort-East, declared a fatwah agains the vaccine, announcing that it was a western conspiracy to sterilise muslims.

Since then there have been several cases in the area, the majority of which have  been the result of “non-compliance”, where parents refuse to allow the vaccination of their children. Vaccination teams in the North-East have reported being threatened, and they sometimes describe their campaigns as “hit and run”.

Thanks to the quantity and range of these vaccination campaigns, huge progress has been made: as mentioned, the last recorded case was in July 2014. If there are no new cases reported, Nigeria will be certified polio-free in 2017. Nigerians are considerably more mobile than the inhabitants of other at-risk countries, so this would represent a huge step along the way to global eradication.

## How to eradicate Polio?

Since it is so virulent, the key to polio eradiction is 100% vaccination coverage. This is achieved by sending vaccination teams out on campaigns, to travel from settlement to settlement, many of which are very isolated.


> Even if you have to go on a motorbike to get to a settlement nearby, it’s still not hard to reach by African standards. Think riding as far as you can in a car before you run out of roads, followed by a motorbike trip, followed by a boat trip across a large river, and then a long walk to finally reach the settlement. <cite>Lucy Chambers, Polio Dashboard Product Owner</cite>

100% coverage requires 100% knowledge; our GIS team has captured over 10TB of geolocation data about previously unmapped areas, and has identified 782 previously undocumented hamlet settlements. At one point eHA was the single biggest contributor to the [Open Street Map](https://www.openstreetmap.org/) project. 

## Emergency Operation Centers

In 2012, we received funds from The Gates Foundation to build and manage Emergency Operations Centers (EOCs) in the northern states with the highest infection rates, and a National Polio EOC in Abuja to coordinate activities between state governments and national agencies. The aim of these centers is to bring together the disparate groups who are involved (WHO, UNICEF, the Nigerian government) and promote collaboration between them To this end, the EOCs are all comfortable and open-plan, and equipped with extremely good internet connections.

![An Emergency Operations Center in Kano](/img/polio-dashboard-eoc.jpg)

## Polio Campaigns

Each campaign is 4 days long, followed by a “mop-up” to cover any missed settlements. As they travel from settlement to settlement performing vaccinations and searching for cases, the campaign teams carry GPS-enabled phones, which eHA deploys — roughly 19,000 phones in all. Our partner NovelT has developed a Vaccine Tracker System, which records the GPS trails of each team, overlays each team’s trail, and notes any missed settlements. These missed settlements can then be covered in the mop-up phase.

Detailed data about the number and location of vaccinations are currently paper-based. NovelT has developed an [ODK](https://opendatakit.org/)-based solution which will soon be rolled out.

## EOC Dashboard

The Gates Foundation commissioned us to create a dashboard that displays and allows analysis of data relating to the campaigns. It is intended to be used by the National EOC, but there is a possibility that it will also be used by state-level EOCs at a later date.

The users of the dashboard are the EOC Data Team, which includes members from each of the involved organisations. The requisite data is currently held in disparate systems. It is collated by upload to NovelT’s systems; we then access it via their API. The dashboard enables the automatic generation of a wide variety of reports, a task which was previously done manually, and was extremely time-consuming.

### Dashboard data
Campaign data is split into three phases: pre-campaign, intra-campaign and post-campaign. Examples of pre-campaign data would be:

- has the region received the necessary funding?
- has the necessary training taken place?
- have ward boundaries been established?

During the campaigns, the teams participate in daily meetings; this is where a lot of coordination and decision-making takes place. Whether or not these meetings happen is therefore an important intra-campaign datum.

The post-campaign data is concerned with how many settlements were covered / missed, and how many children were “fingermarked” (after being vaccinated, children are marked on the finger as proof that they are covered).

![A child being fingermarked after vaccination](/img/polio-dashboard-fingermarking.jpg)

### Dashboard report example
*Acute Flaccid Paralysis* is a symptom of polio, but it can also be a symptom of other conditions; an occurrence of 0.1333% in a typical population would be considered normal. Reports of cases of this symptom being found (due to causes other than polio) are a good proof of the robust level of surveillance that the campaigns provide -- exactly the kind of proof that the WHO is looking for as part of its polio-free certification.

## Technical details

The most complex and interesting aspect of the dashboard’s implementation has been the UX design. Presenting the quantity and range of data in a format that is easily analysable is a challenge. Our UX team travelled from Berlin to Nigeria to perform user testing and to analyse processes both on-site and in the field.

> It was so invaluable to observe hands-on how the site was used and any usability issues that cropped up (not everyone knows what a hamburger icon means! labels labels labels!) <cite>Ally Long, UX designer</cite>

From a technical perspective, the Polio Dashboard is less complex than many of our other projects; the fact that NovelT handles the data collation and provides an API greatly simplifies the stack. In the future, however, it is likely that the dashboard will collect and consume its own data.

Currently the dashboard is an Angular Single Page Application, backed by [Kazana](https://github.com/eHealthAfrica/kazana), our in-house data warehousing system. Kazana’s modular architecture enables us to use plugins to clean up or normalise the data we retrieve. It also contains vital user management tools.
