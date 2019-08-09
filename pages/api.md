---
index: 1
path: api
title: DHIS2 API
description: Learn to use the DHIS2 API.
---

# DHIS2 API

Application Programming Interfaces (API) allows applications to communicate with one another. APIs consists of a set of routines, protocols, and tools for building software applications. The purpose of APIs is to simplify programming by abstracting the underlying implementation and only exposing objects or actions the developer needs.


REST (Representational state transfer) is a software archetecural style, and often a logical choice for building APIs. RESTful APIs takes advantage of HTTP methodologies, and use GET to retrieve a resource (eg. data), PUT to change the state of or update a resource, POST to create a resource, and DELETE to remove it.


DHIS2 has an open RESTful API to  access and manipulate data stored in the instance of DHIS2. The full documentation is available [here](dhis2-api-doc)



To try out API calls you can download [Postman](postman) - a API development environment, a tool created to make it easier to test APIs.


Using Postmann, we can try out some of the DHIS2 API calls by using the DHIS2 [demo](dhis2-demo) instance.


First, we need to set authorization in Postmann, we use admin / district as username and password. The base-URL is 'https://play.dhis2.org/2.32.1/api/'

![Postman](postman-image)

[dhis2-api-doc]: https://docs.dhis2.org/2.22/en/developer/html/ch01.html
[postman]: https://www.getpostman.com/downloads/
[dhis2-demo]: https://play.dhis2.org/2.32.1/
[postman-image]: images/dhis2_login_postman.PNG
