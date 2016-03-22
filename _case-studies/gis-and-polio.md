---
class: long-form
title: GIS and Polio
description: Supporting Polio eradication by mapping undocumented regions
image: /img/list-tag.jpg
draft: true
---

> A geographic information system or geographical information system (GIS) or geospatial information system is a system designed to capture, store, manipulate, analyze, manage, and present all types of spatial or geographical data.<cite>[Geographic information system entry](https://en.wikipedia.org/wiki/Geographic_information_system), Wikipedia</cite>

eHealth Africa's GIS Department is based in Kano, Nigeria. Its job is to integrate Geographic Information Systems across all eHA's tools and programs, and to build a shared GIS platform and data store to support Nigeria, Liberia, Sierra Leone and Guinea.

The work it does can essentially be split into three parts: **capture**, **analysis** and **presentation**. Each of these is vital to eHA's work, and specifically to the ongoing role that eHA is playing in the mission to eradicate Polio.

Nigeria is the only country in the Afro region to have had polio cases in recent years. If it can be proved that Nigeria 

1. has no new cases
2. is actively seeking cases, and
3. is pursuing 100% vaccination coverage in children under 5

then the whole continent will be certified polio-free by the WHO in 2018. This will leave Pakistan and Afghanistan as the only remaining polio-affected regions in the world.

## Data capture and *Hard to Reach* areas

The vaccinations are carried out in micro-planned four day campaigns, by teams who travel through the country visiting every built up area, hamlet and settlement. If a settlement is not on any maps, then it can't be visited: 100% map coverage is a prerequisite to the success of these campaigns.

There are four distinct parts to the GIS work involved:

1. Data collection, specifically ward boundaries and settlement data
2. Producing maps that can be used in the microplanning process
3. Using GPS-enabled devices to track vaccination teams
4. Analysing this data to assess coverage

 http://jid.oxfordjournals.org/content/210/suppl_1/S102.long

* manual feature extraction
* data collection
* machine-generated names


Teams of data collectors go out into the field with GIS enabled tablets and lists of known settlements. The collectors record details of settlements, roads, health centres, and any other points of interest, while the tablets track their movements via GPS. Once they return, their records are reconciled with the GPS data.

![A data collection team, armed with GPS tablets](/img/gis-data-collectors.jpg)

In this way, the settlement lists and maps used for vaccination campaign microplanning are incrementally filled out, as can be seen here:

![Three iterations of a campaign map for Dundubus Ward in Jigawa State](/img/gis-campaign-maps.jpg)

Settlements are classified according to Esri's global classification system:

* **Hamlets** – 2-15 houses, huts or roofed structures
* **Small settlements** - 16-100 houses, etc.
* **Built-up areas** – > 100 houses etc.

Our datasets for Nigeria currently contain more than 8000 built-up areas, more than 23,000 small settlements and more than 500,000 hamlets.

An important part of data collection is naming: settlements must be named in order to support the tracking of vaccinators during their campaigns. If there is no locally recognised name – as is often the case with hamlets – they are given a machine-generated name.

Another data source is high-resolution satellite maps. Using image processing and pattern recognition, it’s possible to perform feature detection on these maps. Solar radiation reflects differently depending on the terrain: water, forest, soil, roads and built-up areas can all be detected in this way.



http://jid.oxfordjournals.org/content/210/suppl_1/S102.long

