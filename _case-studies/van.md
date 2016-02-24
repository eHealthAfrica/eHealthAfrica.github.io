---
class: long-form
title: Van VSPM Dashboard
description: Improving visibility and analytics in the Nigerian vaccine supply chain network
image: /img/list-call-center.jpg
draft: true
---

In 2012 the Federal Government of Nigeria (FGN) launched the **Saving One Million Lives Initiative** (SOML), to save one million women and children annually from dying from predominantly preventable diseases by 2015. This initiative included many objectives involving the expansion of vaccine stocks and supply chains, and improvements to logistics networks.

To this end, the **National Primary Health Care Development Agency** (NPHCDA) developed the first **Vaccine Stock Performance Management** (VSPM) Dashboard, an Excel template that is used to display physical stock counts next to inventory plans. It includes maximum and minimum stock levels for each Zone, State and LGA (Local Government Authority), to enable performance measurement and to facilitate planning. (For reference, Nigeria comprises 6 zones, 36 states, or 774 LGAs.)

## The existing process

Every week, each LGA reports its stock levels to their state office via phone or SMS. The state office then adds these figures to their Excel template, and emails the spreadsheet to a data manager at the NHPCDA, who copies and pastes the data into a master spreadsheet.

This master spreadsheet auto-generates reports and schematics via a set of complex formulae, which the data manager then shares with stakeholders and policymakers on a weekly basis.

This system has done a lot to improve visibility throughout the vaccine distribution process, and to ensure that vaccine stocks are maintained at requisite levels in the various national, zonal, state and LGA cold stores. But there are major limitations:

- there is no visibility below the LGA level
- the procedure is very work-intensive, particularly for the national data manager, who is forced to spend most of his time downloading, copying and pasting
- the system is unsustainable: since each Excel file contains the data for all previous weeks, they are already becoming awkwardly large

## Enter the VAN VSPM Dashboard

The **Visibility and Analytics Network** (VAN) project is a global collaboration among leading supply chain experts, country representatives, and implementing partners from across Africa and India, with the intention of improving end-to-end visibility of all public health supply chain information. 

> **Supply chains** are the series of steps involved in transporting products from manufacturers all the way to patients

Higher visibility enables improved analysis, which facilitates a process of continual improvement within the supply chain processes – which, ultimately, saves lives.

The VAN VSPM Dashboard is a part of this project. It is a partnership between the NPHCDA, UNICEF, CHAI (Clinton Health Access Initiative), eHealth Africa and several others. It is a work in progress, but the first stage has the following aims:

- simplify the process of spreadsheet submission described above
- reduce the burden on the national data manager 
- create more complex and complete reports than have been possible until now
- reduce (or even, ultimately, remove) the reliance on Excel, which imposes limitations on data visibility
- provide a data warehousing solution to store all historical data, thereby allowing more complex time-based data analysis

The VAN VSPM Dashboard is a custom-built web application that reads Excel spreadsheets in the currently-used format and applies transformations to extract the necessary data. The spreadsheets can be submitted via email or direct upload. The Dashboard then analyses this data to present a variety of visualisations.

![Matrix visualisation with the VAN VSPM Dashboard](/img/van-matrix-view.jpg)

### Improved Visibility and Analytics: An Example

An important figure for the management of the vaccine supplies is “total stock in country”, an aggregate of stocks held in every cold store at national, zonal, state and LGA levels. The figure calculated by the Excel file doesn’t include the LGA levels, since the spreadsheet is simply too complicated.

When the NHCPDA data manager was recently asked to produce this figure, he spent hours copying and pasting figures in an ultimately failed attempt to calculate a figure for just one state. On the other hand, although calculation of this figure wasn’t in the current implementation of the VAN VSPM Dashboard, adding it was a trivial matter, since the data had been extracted from the spreadsheets and transformed into a considerably more versatile format.

This is exactly the kind of data visibility that the overall VAN project aims to provide.

## NAV: not just VAN backwards

There is a simultaneous attempt to introduce NAV, Microsoft’s ERP solution, to improve the supply chain and warehouse management. It is hoped that this will introduce coherence and clarity. NAV, however, is a fairly monolithic piece of software, and the fact that the NHPCDA only requires a tiny subset of its functionality creates major usability issues: which of the 27 available buttons is the one that the LGA Cold Store Manager needs to press to submit a report?

Another challenge is that NAV is not offline-capable. This is a serious problem, since even at the state level, several Cold Store Facilities are offline — in these cases the Excel files are currently stored on USB sticks which can then be taken to internet cafés.

Perhaps because of these usability issues, discrepancies have already started appearing between the data in NAV and the data in the Excel files. Discussion about which of the two should be the canonical data source is ongoing. 

## Technical Details

The VAN VSPM Dashboard is built on top of Kazana, our in-house data warehouse platform. The front-end is an AngularJS application. It uses the [Highcharts](http://www.highcharts.com/) library to render the data visualisations.

In order to extract the requisite data from the Excel files, we wrote transformers, making use of Kazana’s plug-in-based architecture to include them at run-time.

More complicated than these transformers is the extraction of data from emailed files. This is, again, a Kazana plugin. It uses IMAP libraries to watch and import from a specified email inbox. The Van VSPM Dashboard then attempts to guess the state from which the Excel file comes and the week to which it pertains. A screen in the dashboard (access to which is limited to specific user types, as is the case with all areas of the application) lets the data manager confirm or reject these guesses, and/or manually set the values.

![Managing emailed files with the VAN VSPM Dashboard](/img/van-email-reconciliation.jpg)

The sheer size of the Excel files has caused many problems: working with 7MB files in unreliable network conditions requires  careful configuration, much of which can only be determined heuristically. To make the situation even worse, some of the LGAs have outdated versions of Excel and submit their data as .xls files, which are often 4x larger and, due to their undocumented format, very hard to parse.

In order to re-create the stock visualisations that are currently used for decision-making, we needed to reverse engineer complex calculations and formulae from the national Excel template — unfortunately these calculations were not formally documented. When we eventually managed this, refining and confirming our assumptions through several discussions with the relevant stakeholders, it turned out that there were discrepancies between the visualisations created by the dashboard and those created by the Excel template. Further investigation revealed errors in the Excel calculations, which had until now gone unnoticed.

## The Future

The Van VSPM Dashboard is about to go into production for the first time. The data managers at the NPHCDA have been using it on a trial basis for the past few months, and have agreed that it is now ready for real-world use. Meanwhile, it is under continuous development. As the VAN initiative continues, its functionality is expected grow considerably, with more data input options and more analysis possibilities.


