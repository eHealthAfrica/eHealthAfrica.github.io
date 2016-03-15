---
class: long-form
title: Trace and Go
description: Building trust by maintaining communication with the families of Ebola patients 
image: /img/list-tag.jpg
draft: true
---

During the height of the Ebola epidemic in Liberia, patients were isolated and cared for in **Ebola Treatment Units** (ETUs). Patients and suspected patients would arrive at an ETU either by ambulance or by their own means. Case investigators and doctors recorded information about them and their condition when they arrived, and updated it according to their ongoing status. Unfortunately, though, **there was no way of sharing this information with the patients’ families**, or even of informing them that their loved ones were being treated at the ETU. In the worst case, deceased victims were cremated before their families were even notified of their death.

This inadvertent lack of transparency created **mistrust of the ETUs**. Patients would often refuse to go to an ETU, or even to enter ambulances that they suspected would take them to one, for fear of becoming lost in the system. This severely impeded the fight against Ebola, an essential part of which was the rapid quarantining of victims.

**Trace and Go (TAG)** was developed to make up for this shortfall in psychosocial support. It is an **open-source SMS platform** (the code is in a public [Github repository](https://github.com/eHealthAfrica/trace-and-go-public)) that tracks patients as they move through the medical system. When a patient first enters the system, TAG informs their family. From that point on, the family receives updates whenever the patient’s status or location changes. It is also possible to inquire about the status of a particular patient via SMS.

![A health worker at an ETU enters a newly arrived patient’s data into TAG](/img/tag-data-entry.jpg)

Because it contains details of all patients who are -- or have been -- held in ETUs, TAG also functions as an **administrative dashboard** that can be used by health workers to track and update patient information. This dashboard proved useful for coordinators and supervisors during the outbreak, since there had previously been no centralised repository for this information.

## Data Flow

When a patient arrives at an ETU, a health care worker adds their information via the TAG Dashboard. They also add the mobile number of a relative. 

![Creating a new patient in TAG](/img/tag-screenshot-in-use.jpg)

TAG then assigns a unique id to the patient, and triggers two text messages:

- The patient’s id number and the message “You will be notified of all changes in the status and location of your loved one” are sent to the relative
- The patient’s id number is sent to the case investigator

The patient’s status and/or location can then be updated in the TAG Dashboard. Each time this is done, an SMS is automatically sent to the relative.

The relative can also get updates by sending the patient’s id number to a shortcode number. The incoming SMS is redirected to the TAG backend, which then triggers an SMS response to the relative containing the patient’s status.

## Technical Details

Trace and Go is a [Django](https://www.djangoproject.com/) application. It exposes a basic **RESTful API** through which it is possible to create, read and update patients. For example, to search for a particular patient it is possible to issue a request in the following form:

`curl -X GET http://tag.tld/api/patients/?search=Jane,Doe`

The Dashboard uses this API to provide a directory of all patients who are or have been in ETUs.

TAG can work with a number of different SMS platforms, including [RapidPro](https://community.rapidpro.io/), [Telerivet](https://telerivet.com/) and [Textit](http://textit.in/). Once an SMS has been triggered, by either adding or updating a patient, the relative's phone number and SMS text is passed to [Celery](http://celeryproject.org/), an open source asynchronous task queue based on distributed message passing. Celery uses [RabbitMQ](https://www.rabbitmq.com/) as a message broker.

## The Future of TAG

TAG - which has been [released](https://github.com/eHealthAfrica/trace-and-go-public) under an  **open source** licence - went a long way towards rebuilding trust in the Liberian health system, and also provided solace and reassurance for a large number of families whose loved ones contracted -- or were suspected to have contracted -- Ebola.

Although the outbreak seems to be over (as of March 2016), the likelihood of new cases in Liberia is, officially, still high. TAG is therefore still running, just in case the service becomes necessary again.






