---
class: long-form
title: Sense ID
description: Registering and managing participants in ebola vaccine trials
image: /img/list-sense-id.jpg
---

In February 2015 the [CDC](http://www.cdc.gov/index.htm) asked us to create an application and dashboard that could be used to register and follow up with participants in STRIVE (**S**ierra Leone **T**rial to **I**ntroduce a **V**accine against **E**bola).

STRIVE has 8000 participants, mainly health and other frontline workers, and is run from 10 vaccine centres in five districts of Sierra Leone. The participants needed to be registered at the beginning of the trial in order to avoid duplicates, multiple registrations, or cross-contamination from other trials. They all received reimbursement to help with the costs of time away from work, and for any necessary transportation.

## Technology

Sense ID consists of two parts: an offline-first mobile app and a dashboard. As with all our mobile apps, we used Apache Cordova. Both the mobile app and the dashboard are Angular-based, and both communicate with a central CouchDB database. The mobile app is optimised for – but not restricted to – Nvidia tablets.

In order to be offline-capable, the mobile app uses PouchDB to store data locally, taking advantage of the Cordova plugin we developed for our [Sense Followup app](/case-studies/sense-followup.html) app to perform background synchronisation with the main database when network conditions are amenable.

### Fingerprints?

The initial proposal for Sense ID stipulated that all participants should be fingerprinted on enrollment, as biometric proof against re- or dual enrollment. This seemed like a sensible solution in a country where token-based identification such as passports or drivers licences are rarely used.

We settled on a fingerprint scanner that was affordable and robust enough for our needs, and acquired the source code for the accompanying APK (Android application package) from the developers. We were then able to adapt the APK so that it was possible to communicate with it via **intents** (messaging objects that are used to request an action from another Android application). Once this was done, we developed a Cordova plugin that could create these intents and handle the responses. The data from the scanned fingerprints is stored in 4Kb binary files, which means that fingerprint data for several thousand participants would not be prohibitively large.

### Nope

Although the technical viability of finger print scanning proved feasible, given the circumstances of the outbreak, the expedited timeline of the trial and concerns about privacy and data storage, the implementing partners decided to go with token based identification. This meant using the tablet’s camera to take ID photos, which are then printed on to an ID card using bluetooth printers.

### That Syncing Feeling

This switch in requirements turned out to have unexpected consequences: shortly after the trial began, we started getting reports that participants who had enrolled were not showing up in the main dashboard, which meant that their payments could not be processed. The situation rapidly deteriorated, and we started receiving reports that unpaid participants became uncooperative and untrusting of those associated with the trial. This had the potential to adversely effect participant follow up which is critical for determining efficacy and safety of the drug.

Upon investigation, it became clear that synchronisation between PouchDB on the tablets and the main CouchdB database was failing silently. Eventually we realised that this was due to two false assumptions that had been made during the specification of the application:

1. the entire dataset would be needed on all devices
2. enrollment sites would have wifi connections

The first assumption went back to the aborted fingerprint functionality: if fingerprints were being used to confirm the uniqueness of a registrant, the fingerprint data would need to held on every device. This was no longer the case, but we were still using a synchronisation strategy that was based on it. The photo data, however, is almost 10x larger than the fingerprint data, which represents a considerable strain on the already constricted bandwidth.

Which leads to the second assumption: it turned out that one of the enrollment centres had only a wireless GPRS (“2.5G”) connection, yielding maximum download speeds of 50kbps and latencies of up to 500ms.

These two factors explained the silent sync failures. We quickly developed and deployed new versions of the Android app with a more suitable (and resilient) syncing implementation that uses push-first replication, and only pulls when manually triggered. This solved the problem – and averted any disruption in the trials.

## Current Status

The trial is scheduled to end in August 2016. The Dashboard is still in use as a directory of participants and the mobile app is only in use during active periods of enrollment and vaccination. Once STRIVE is completed, Sense ID will no longer be in use.