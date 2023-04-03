# Lighthouse Labs | CRUD with Express

* [x] Express
* [x] Routes
* [x] CRUD
* [x] EJS Templates
* [] Workshop/Problem

## Express

Simplifying the process of HTTP Server

## CRUD

Any time we are working ressources on a web browser...

* CREATE
* READ
* UPDATE
* DELETE

# Data

Resource: Dragon(s)

{name: 'Droga', region: "Forest", color: "Green"},
{name: 'FireBreather', region: "Volcano", color: "Black"},
{name: '3 Tailed Beats', region: "Desert", color: 'Brown'},
{name: 'Winter Dragon', region: "IceLand", color: 'Blue'},

## Routes!

Routes are essentially different paths, with specific intended methods that the client can interact with. 

CRUD    METHOD    PATH 
READ    GET       /dragon             # Displays all Dragons
READ    GET       /dragon/:id    # Displays specific dragon  
UPDATE  GET       /dragon/edit/:id    # Edit New Dragon Page
UPDATE  POST      /dragon/edit/:id    # Edit New Dragon
CREATE  GET       /dragon/add         # Add a Dragon Page 
CREATE  POST      /dragon/add         # Add a new Dragon  
CREATE  POST      /dragon/navEdit/:id # Add a Dragon Page 
CREATE  DELETE    /dragon/delete/:id      # Delete a Dragon  


## EJS

* Embedded Javascript 
* Runs in the back-end


