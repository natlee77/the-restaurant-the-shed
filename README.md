![home](<Screenshot (1204).png>)
![order](<Screenshot (1206).png>)
![admnin](<Screenshot (1205).png>)
![contact](<Screenshot (1207).png>)
#  
 a page for a restaurant. This page will present your restaurant, concept, orientation, contact details, etc. WITH a booking functionality in the browser (or phone).

 
# Pages

The following pages must be included:
>- Start page,
>- booking page and a 
>- contact page. 
>- If you want additional pages, it is fine to add them.

 
# Description of the booking

Assume that the restaurant has 15 tables for six people at each table. The restaurant has two sittings every evening, one at 18:00 and one at 21:00. This means that all tables should be bookable twice per evening.

Based on this, create an application where it is possible to search for information for a given date or week. The user must be able to choose a time for the selected day. Collect personal data, inform about gdpr and ensure that the booking is carried out.

In an admin mode, bookings should be able to be administered (modified, removed, added) for the staff of the restaurant.

 
# Technical description

You have received a contract that contains the functionality you need to complete this task.

This contract includes the following features:

 
>Create restaurant - used only once to create a restaurant for you. This restaurant will contain your reservations.

>Create booking – used every time a new booking is to be created.

>Remove booking – used when a booking is to be deleted

>Retrieve reservations – used when reservations for the restaurant are to be retrieved

 

Keep in mind that when you create your restaurant, you get an ID back. This ID is your restaurant ID which needs to be used with almost all subsequent calls. For example. if you want to create a booking, you need to specify which restaurant ID is to be used.

Searching for a table should be done via a form where the user can enter the number of people (1-6) and the desired date. If there were tables left, the time(s) available will be shown. If there are no tables left, a warning text appears and the user must search again.

When the user has chosen a time, another form appears where the user can write name, e-mail and phone number. Save or Cancel where Save writes the booking into your blockchain.

For the admin mode, a simpler CRUD approach applies.

The project must be in a git repo and all students' commits must be included.

Trello or similar tools must be used as tools for the project. It must be stated who worked on which point.

 
För G
>A working application with all pages set up with react router.

>The result from the search (of free times) must be presented in a well-thought-out way, perhaps through a radio button list or a drop-down menu.

>The administration interface is included.

>Be able to display existing bookings.

>Can delete a booking.

>Your application is responsive.

>The code must be well documented.

>The code must be well thought out and have a clear structure.

>The file structure in the project must be good.

>The form contains validation and error messages.

>Manage changes to an existing booking.

>Use css/scss to create animations at e.g. charging and bookings.

 
>Use services to communicate with your blockchain.


[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/BHyDwSGZ)
