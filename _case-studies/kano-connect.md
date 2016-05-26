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

Kano Connect is a project that touches on every part of this mission statement. It is a programme that improves communication and information flow across all levels of the Kano State health care system. The increased information flow provides real data, which can then be analysed and used to improve the provision of health services to the entire state population.

Kano State is a state located in in the North-West of Nigeria. It is the most populous state in Nigeria, and the country's second largest industrial centre. Like all states in Nigeria, it is broken up into Zones, Local Government Areas (LGAs) and Wards. The Kano Connect programme is a partnership between eHealth Africa, the Kano State Primary Health Care Management Board, and the Gates and Dangote Foundations.

eHA has equipped more than 1800 healthcare workers at all levels of the primary health care system (State, Zone, LGA, Ward & Health Facility) with a Kano Connect-specific Android smartphone. The phones are in a closed user group, allowing everyone in the group to communicate (via voice calls & SMS) for free, and to access mobile data.

The phones are all equipped with **Open Data Kit** (ODK) applications that make it easy for the health workers to submit data via questionnaires. eHA provides training and technical support of health workers on the use of ODK.

![Training Health Workers in the use of ODK](/img/kano-connect-training.jpg)

## Routine Immunization Supportive Supervision

The unified data architecture of this network of ODK-enabled smartphones represents a  huge leap forward in the ability of Kano State to collect, track, and act on crucial health performance indicators. The initial focus of the data collection has been on **Routine Immunization Supportive Supervision** (RISS). RISS is the periodic assessment of a health facility's performance in the provision of vaccinations to the population for which it is responsible.

Every Health Facility in the state submits monthly answers to a questionnaire, which asks questions such as:

> Is there a poster size LGA map showing all Health Facilities and the Health Facilities that provide routine immunization?

> Is there an updated temperature monitoring chart on each refrigerator/freezer where vaccines are kept?

> Have funds been provided for the conduct of Routine Immunisation services in the LGA in the current month?

The Health Workers answer and submit the questionnaires in the ODK application, which is offline capable, allowing for the completion of the questionnaire at the health facility and submission at a later date, when the phone has network connectivity.

## The Dashboard

The Kano Connect Dashboard is a web application that acts as the central hub for Kano Connect. The first phase of development created a user directory of all the health workers who have been supplied with Android smartphones, along with shared calendars and the locations and details of all the state's Health Facilities. 

Th directory shows names and contact details of all the relevant health workers, and provides an easy to use search interface so that the right contact can be found quickly and easily.

The health facility component integrates data from eHA's GIS department to display the facilities on a map.

![Health Facility mapping on the Kano Connect Dashboard](/img/kano-connect-health-facility-map.jpg)

The second phase of dashboard development, which was launched in February 2016, added the ability to supervise and manage the collection of RISS data.

## RISS System Architecture

RISS questionnaires are submitted on a monthly basis by every Health Facility, every LGA and every Zone in Kano State. The questionnaires are built in [Formhub](https://formhub.org/), which is an [open source](http://github.com/modilabs/formhub) solution for creating surveys which can then be completed and submitted from ODK-enabled smartphones. The questionnaires are built in Excel spreadsheets using the XLSform format, which was developed by Formhub. There are separate forms for Zones, LGAs and Health Facilities.

Formhub provides a web form engine called Enketo, which can also be used for questionnaire submission.

[Architecture Diagram]

The ODK app on the smartphones connects to the Kano Connect Formhub server and downloads the relevant questionnaire. Once the health worker has answered the questions, the ODK app submits the answers back to the Kano Connect Formhub server.

Thanks to its connection with the Formhub API, the Dashboard can display information about which health facilities have submitted their monthly questionnaires, and how they were submitted. This makes it easy for supervisors and coordinators to follow up on any health facilities that are failing to provide information.

![Status of health facility submissions in the Kano Connect Dashboard](/img/kano-connect-dashboard-riss.jpg)

For health facilities that did not submit a form via ODK, it's possible to specify via the dashboard why this was the case, and whether or not the supervision actually took place (this could be the case, for example, if there was no network connectivity to upload the data).

## Future Plans







