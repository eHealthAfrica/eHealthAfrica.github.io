---
class: long-form
layout: default
title: Call Center
description: The application and infrastructure that played a key role in the fight against the West African Ebola epidemic
image: /img/list-call-center.jpg
---

The World Health Organisation described the Ebola outbreak that began in December 2013 in Guinea and subsequently spread to Sierra Leone and Liberia as “the most severe acute public health emergency seen in modern times”.

Of these three countries, Sierra Leone was the one with the highest number of reported cases. When the outbreak began, the government repurposed an exisiting healthcare service as an emergency hotline. Callers could report sick patients, possible Ebola cases, and deaths; they could also get access to health information. But technically, the hotline was severely limited: it consisted of one phone per mobile provider, which meant that the number would be engaged if you tried to call while someone else on your provider was already connected. In addition, all the data collection was paper-based.

![A poster for the 117 hotline to the Call Center in Sierra Leone](/img/call-center-poster.jpg)

In September 2014, eHealth teamed up with Sierra Leone telcom Afcom to improve the hotline, and one month later a full, software-based call center went live with 52 operators, using the first iteration of our call center application.

![Interior view of the Freetown Call Center](/img/call-center-interior.jpg)

The primary method of Ebola outbreak control is to locate and isolate any infected individuals, then track down everyone who has come into contact with them, and keep them under observation for 21 days. A system that allows the timely and accurate reporting of possible cases is therefore vital.

In the three countries where it has been deployed (Sierra Leone and then later Guinea and Liberia), our call center application and the infrastructure around it played a crucial part in this process.

## Infrastructure and application

Our team in Berlin developed the desktop web application (see below for technical details), while eHA worked onsite with local telcos and HR companies to put together the physical centers and staff. Installing servers and getting the required network connectivity was no small feat in itself (although the latter proved easier in Guinea, where the center happened to be across the street from a bank, and could piggy-back its fibre connection).

> “About a week after I began working at eHAGI, I was deployed to Sierra Leone. My first task when I got there? Screwing legs onto all the tables of the new call center.” <cite>Nils Kaiser, Product Owner</cite>

The call centers were set up to respond to four types of call:

* relatives (or the patient themselves) reporting possible infection
* relatives reporting a death
* ambulances needing information about an infection or death
* callers asking for health advice

On receiving a call from a relative or patient, the operators used our application to quickly and efficiently record all the requisite information, such as symptoms, contact details, etc. A major step up for the Ebola response was that the Surveillance and Burial sections of the regional District Ebola Response Centers automatically received a filtered stream of alerts, and could use the app to send information to local teams via SMS.

![A surveillance alert center](/img/call-center-surveillance.jpg)

The app also assisted the operators as they provided health information, or as they guided ambulances that were trying to locate victims.

Supervisors used the app to generate reports, implement control mechanisms for quality assessments, and improve their staff planning; data analysts gathered information about areas most affected by disease outbreaks so that they could coordinate with government officials and take appropriate action.

At the height of the outbreak, the 3 call centers were handling a combined total of around 15,000 calls per day. Since then, this number has decreased considerably, but the centers are still operational, and have evolved into more general helplines for people people reporting illness and death, or seeking health advice.

![Lilian James, call center operator](/img/call-center-smiling.jpg)

## Technical details

The call center application runs on [AngularJS](https://angularjs.org), backed by [CouchDB](https://couchdb.apache.org/). Initially we were using [PouchDB](http://pouchdb.com/) so that each operator’s computer could keep a local store of calls received, but after running into situations where synchronisation between the PouchDB instances and the central CouchDB database proved unreliable, we switched the architecture: the application now connects directly to the main CouchDB instance, which runs on a server in each center. These instances all replicate to [AWS](https://aws.amazon.com/) for back-up purposes. (It should be pointed out that PouchDB has proved extremely reliable in other contexts, and we make extensive use of it in our mobile apps)

To enable fulltext searches on the call records, and to allow for sorting of records via multiple criteria, we use [Elasticsearch](https://www.elastic.co/products/elasticsearch). It connects to CouchDB via a “river”, and copies across all the data. This also allows us to make use of [Kibana](https://www.elastic.co/products/kibana), an open source data visualisation plugin for Elasticsearch that provides advanced data analysis.

At the height of the outbreak, requirements were changing almost daily as various outbreak control strategies were tried out. To enable the rapid deployment of updates to each call center, we set up an automated system using [Travis](https://travis-ci.org/). When changes are committed to the main branch of the relevant GitHub repository, Travis runs all associated tests, and upon their successful completion triggers the creation of a new [Docker](https://www.docker.com/) image. These images are sent to our Docker repository, which then automatically logs in to each call center server, pulls the new image, boots it, and finally shuts down the previous image.

On November 11th 2015, the World Health Organisation declared Sierra Leone Ebola-free. The hotline, call centers and infrastructure are however still in use, and as we wait to see whether they will be repurposed as a more generalised health service, we continue to iterate on the application; for example the latest feature allows operators to schedule and then be reminded of an appointment to call someone back at a later date.
