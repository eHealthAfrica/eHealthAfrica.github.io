---
class: long-form
title: Sense Followup
description: Optimising the workflow of contact tracers in the West African Ebola epidemic
image: /img/list-sense-followup.jpg
---

> Contact tracing is an integral component of the overall strategy for controlling an outbreak of Ebola virus disease (EVD). Contact tracing is defined as the identification and follow-up of persons who may have come into contact with an infected person […] All potential contacts of Ebola cases should be identified and closely observed for 21 days. <cite>Contact Tracing During an Outbreak of Ebola Virus Disease, WHO</cite>

The health workers on the ground were probably the single most important resource in the fight against the West Africa Ebola outbreak. Their job was to travel from settlement to settlement looking for and keeping track of everyone who had come into contact with Ebola cases. These people are known as *contacts*, and the twice daily visits that are carried out during the 21 day risk period are known as *followups*. A followup consists of a series of questions concerning any possible symptoms, such as high temperature, headache, etc.

Initially, these workers were using paper-based forms to keep track of the contacts and followups, but the sheer volume of data soon rendered this system untenable.

![Paper-based contact tracing](/img/sense-followup-paper.jpg)

We began development of a mobile app to handle contact tracing in October 2014, and version 1.0 was released after 2 days’ frenetic work. **Sense Followup** is a hybrid mobile app built for Android phones/tablets. It provides an simple interface that guides health workers through the processes of registering a contact and performing a followup.

Because many affected settlements are in remote areas with little or no cellular connectivity, Sense Followup stores the contact and followup data locally, and waits for a data connection strong enough to make it possible to synchronise with the master database. During this process of synchronisation, the application also receives any new data from other health workers, making it easier to coordinate contact tracing and followups within large teams.

Specifying the location of a particular home or settlement is a constant problem in West Africa; there is no standardised system of postal codes. To overcome this difficulty, Sense Followup leverages device location services to provide accurate longitude/latitude coordinates of contacts’ homes.

This level of accuracy is also useful for the **Sense Dashboard**, a web app that provides administrators and data analyzers with a summary of all contact tracing activities. The coordinates mean that it’s possible to see the positions of all infected and at-risk persons rendered on maps, and thereby get a sense of the spread of the disease.

Since October 2014, Sense Followup has been adapted to work in several affected countries (Liberia, Sierra Leone, Mali) with the requisite internationalisation, advanced to version 5, and recorded many thousands of contacts and followups.

![Product Owner Nils Kaiser running a training session in Freetown, Sierra Leone](/img/sense-followup-training.jpg)

Sense Followup forms the basis for several other similar projects that are currently in development, such as HAT, a mobile app for the Democratic Republic of Congo that will be used to combat sleeping sickness.

> The network, the phone and the application are all good because they are fast. We can send our information and within one second it will
go straight to the Ministry of Health and Social Welfare. All partners will monitor this information and can respond to any issues because eHA has made it possible to spread the information quickly. <cite>Mohammad - contact tracer</cite>

## Technical details

Sense Followup is a [Cordova](https://cordova.apache.org/)-based hybrid mobile app built for Android phones/tablets. Cordova is a framework that enables the development of native mobile apps using Javascript, HTML and CSS. Plugins, written in Java for Android or Objective-C for iOS, make it possible for Cordova applications to interact with the hardware. Sense Followup, for example, uses plugins for its location services.

We use [PouchDB](http://pouchdb.com/) for local storage and [CouchDB](https://couchdb.apache.org/) for the main, remote database. PouchDB does a good job of automatically managing synchronisation with remote Couchdb instances, but we developed our own Cordova plugin to handle sync as a background service whenever a good enough network connection is detected.

The app is deployed via the [Google Play store](https://play.google.com/store/apps/details?id=com.ehealthafrica.lrsenseebola), which makes it easy for health workers to download updates.

We use [Transifex](https://www.transifex.com/) for internationalisation, which makes it easy to supply the application in both English and French.
