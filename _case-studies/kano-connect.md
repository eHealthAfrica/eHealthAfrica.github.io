---
class: long-form
title: Kano Connect
description: Strengthening the Kano State healthcare system by improving communication 
image: /img/list-tag.jpg
draft: true
---

# Kano Connect Dashboard

> eHealth Africa’s mission is to build stronger health systems through the design and implementation of data-driven solutions that respond to local needs and provide under-served communities with tools to lead healthier lives.
  <cite>eHealth Africa mission statement

Kano Connect is a project that touches on every part of this mission statement. Its objective is to improve communication and information flow across all levels of the Kano State health care system. This enhanced information flow provides a large quantity of data which can then be analysed and used to improve the provision of health services to the entire state population.

Kano State is located in the North-West of Nigeria. It is the most populous state in Nigeria, and the country's second largest industrial centre. Like all Nigerian states, it is broken up into Zones, Local Government Areas (LGAs) and Wards. The Kano Connect programme is a partnership between eHealth Africa, the Kano State Primary Health Care Management Board, and the Gates and Dangote Foundations.

During the initial 12 months, eHealth Africa is responsible for the construction and integration of this communications platform before it is handed over to the Kano State Primary Health Care Management Board (KSPHCMB). eHealth Africa is also responsible for providing training and technical support, and for providing the advice and guidance necessary to ensure the smooth and sustainable operation of the project after the KSPHCMB takes control.

eHA has equipped more than 1800 healthcare workers at all levels of the primary health care system (State, Zone, LGA, Ward & Health Facility) with a Kano Connect-specific Android smartphone. These phones are in a closed user group, allowing everyone in the group to communicate (via voice calls & SMS) for free, and to access mobile data. In addition, eHA has distributed over 350 solar chargers so that the phones can be charged in a cost-effective and environmentally sustainable way.

The phones are all equipped with Open Data Kit (ODK) applications that make it easy for the health workers to submit data via questionnaires. eHA provides training and technical support of health workers on the use of ODK.

![Training Health Workers in the use of ODK](/img/kano-connect-training.jpg)

## The Dashboard

The Kano Connect Dashboard is a web application that acts as the central hub for Kano Connect. The first phase of dashboard development created a user directory of all the health workers who have been supplied with Android smartphones, along with shared calendars and the locations and details of all the state's Health Facilities. 

The user directory shows names and contact details of all the relevant health workers, and provides an easy to use search interface so that the right contact can be found quickly and easily.

The health facility component integrates data from eHA's GIS department to display the facilities on a map.

![Health Facility mapping on the Kano Connect Dashboard](/img/kano-connect-health-facility-map.jpg)

The second phase of dashboard development, which was launched in February 2016, added the ability to supervise and manage the collection of Routine Immunization Supportive Supervision data.

## Routine Immunization Supportive Supervision

The smartphones, ODK and dashboard together form a unified data architecture that represents a  huge leap forward in the ability of Kano State to collect, track, and act on crucial health performance indicators. The initial focus of the data collection has been on Routine Immunization Supportive Supervision (RISS). RISS is the periodic assessment of a health facility's performance in the distribution of vaccinations to the population for which it is responsible, and the provision of support to any facilities that require it.

![Supportive supervision at a Kano health facility](/img/kano-connect-supportive-supervision.jpg)

Every Health Facility in the state submits monthly answers to a questionnaire, which asks questions such as:

- Is there a poster size LGA map showing all Health Facilities and the Health Facilities that provide routine immunization?
- Is there an updated temperature monitoring chart on each refrigerator/freezer where vaccines are kept?
- Have funds been provided for the conduct of Routine Immunisation services in the LGA in the current month?

The health workers complete the questionnaires in the ODK application, which is offline capable. This means that the questionnaire can be completed at the health facility even if there is no network connectivity (as is the case in many of the more remote facilities) and submitted at a later date when network conditions are more favourable.

## RISS System Architecture

RISS questionnaires are submitted on a monthly basis by every zone, LGA and health facility in Kano State. The questionnaires are built in Excel spreadsheets using the [XLSform](http://xlsform.org/) format and imported into [Formhub](https://formhub.org/), which is an [open source](http://github.com/modilabs/formhub) solution for creating surveys which can then be completed and submitted from ODK-enabled smartphones. There are separate forms for zones, LGAs and health facilities.

![Architecture Diagram](/img/kano-connect-architecture.jpg)

Using the ODK app on that is pre-installed on their smartphones, health workers can connect to the Kano Connect Formhub server and download the relevant questionnaire. Once they have finished the questionnaire (and have network connectivity), they can use the app to submit their answers back to the Kano Connect Formhub server.

Thanks to its connection with the Formhub API, the Dashboard can display information about which health facilities have submitted their monthly questionnaires, and how they were submitted. This makes it easy for supervisors and coordinators to follow up on any health facilities that are failing to provide information.

![Status of health facility submissions in the Kano Connect Dashboard](/img/kano-connect-dashboard-riss.jpg)

For health facilities that did not submit a form via ODK, it's possible to specify via the dashboard why this was the case, and whether or not the supervision actually took place (this could be the case, for example, if there was no network connectivity to upload the data).

## Technology

The Kano Connect Dashboard is an [Angular](https://angularjs.org/) application with a [Django](https://www.djangoproject.com/) back-end. It uses a [PostgreSQL](https://www.postgresql.org/) database, along with [ElasticSearch](https://www.elastic.co/products/elasticsearch). The mapping functionality that is used to show the locations of health facilities is handled by [Leaflet](http://leafletjs.com/), an open source Javascript library for interactive maps.

## Future Plans

In addition to adding tighter and more efficient integration to the communication network that has already been put in place, the third stage of development will add a number of extensions to the dashboard and surrounding ecosystem, for example:

### Mobile Directory App

This app will take the directory functionality of the dashboard and put it on every phone in the Kano Connect network, thereby improving user discovery and team collaboration.

### Improved Analytics

A number of options for the presentation and exploration of the ever-growing dataset comprised from the completed questionnaires are currently in evaluation. The intention is to present the data in configurable and intelligible graphs and diagrams, so that its analysis can be used to drive decision making. The final implementation is likely to make use of [Kibana](https://www.elastic.co/products/kibana), an open source data visualization plugin for Elasticsearch that eHealth Africa uses in a number of other projects (eg. the [Call Center](/case-studies/call-center.html)).





