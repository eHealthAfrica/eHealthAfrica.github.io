---
class: long-form
layout: default
title: Sense Followup
---

<section class="hero">
# Case Study: Sense Followup

Optimising the workflow of contact tracers in the West African Ebola epidemic
</section>

> Contact tracing is an integral component of the overall strategy for controlling an outbreak of Ebola virus disease (EVD). Contact tracing is defined as the identification and follow-up of persons who may have come into contact with an infected person […] All potential contacts of Ebola cases should be identified and closely observed for 21 days. <cite>Contact Tracing During an Outbreak of Ebola Virus Disease, WHO</cite>

The health workers on the ground were probably the single most important resource in the fight against the West Africa Ebola outbreak.  Their job was to travel from settlement to settlement looking for and keeping track of everyone who had come into contact with Ebola cases. These people are known as *contacts*, and the regular visits that are carried out during the 21 day risk period are known as *followups*. A followup consists of a series of questions concerning any possible symptoms, such as high temperature, headache, etc.

Initially, these workers were using paper-based forms to keep track of the contacts and followups, but the sheer volume of data soon rendered this system untenable.

![Image of paper-based tracing](/img/sense-followup-paper.jpg)

We began development of a mobile app to handle contact tracing in October 2014, and version 1.0 was released after 2 days’ frenetic work. **Sense Followup** is a hybrid mobile app built for Android phones/tablets. It provides an simple interface that guides health workers through the processes of registering a contact and performing a followup.

Since many affected settlements are in remote areas with little or no cellular connectivity, Sense Followup stores the contact and followup data locally, and waits for a data connection strong enough to make it possible to synchronise with the master database. During this process of synchronisation, the application also receives any new data from other health workers, making it easier to coordinate contact tracing and followups within large teams.

Specifying the location of a particular home or settlement is a constant problem in West Africa; there is no standardised system of postal codes. To overcome this difficulty, Sense Followup leverages device location services to provide accurate longitude/latitude coordinates of contacts’ homes.

Since then it has been adapted to work in all affected countries (Liberia, Sierra Leone, Guinea) with the requisite internationalisation, advanced to version 5, and recorded many thousands of contacts and followups.

It forms the basis for several other similar projects that are currently in development, such as HAT, a mobile app for the Democratic Republic of Congo that will be used to combat sleeping sickness.

## Technical details

**Sense Followup** is a Cordova-based hybrid mobile app built for Android phones/tablets that leverages PouchDB for local storage and synchronises with a remote CouchDB database.
