[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/BHyDwSGZ)


# Översikt

Ni skall skapa en sida för en restaurang. Denna sida kommer att presentera er restaurang, koncept, inriktning, kontaktuppgifter m.m. Ni har fria händer att välja vad som skall presenteras. Men, den stora saken för er att skapa är en bokningsfunktionalitet.

Ni behöver skapa en grafisk profil (ingenting som behöver redovisas) som visar att ni har en genomtänkt design, färgpaletter och en grundlayout. Försök att få denna restaurang att bli så bra ni kan göra den, både sett till kod men även hur resultatet ser ut i webbläsaren (eller telefonen).

 
# Sidor

Följande sidor måste finnas med: Startsida, bokningssida och en kontaktsida. Om ni vill ha ytterligare sidor går det bra att lägga till.

 
# Beskrivning av bokningen

Utgå ifrån att restaurangen har 15 bord för sex personer vid varje bord. Restaurangen har två sittningar varje kväll, en klockan 18:00 och en klockan 21:00. Detta innebär att samtliga bord bör gå att boka två gånger per kväll.

Skapa utifrån detta en applikation där det går att söka fram information för ett givet datum eller vecka. Användaren skall kunna välja en tid för den valda dagen. Samla in personuppgifter, upplys om gdpr och se till att bokningen genomförs.

I ett adminläge bör bokningar kunna administreras (modifieras, tas bort, läggas till) för personalen på restaurangen.

 
# Teknisk beskrivning

Ni har fått ett kontrakt som innehåller den funktionalitet som ni behöver för att klara denna uppgift.

I detta kontrakt finns följande funktioner:

 

>Skapa restaurang – används bara en gång för att skapa en restaurang åt er. Denna restaurang kommer att innehålla dina bokningar.

>Skapa bokning – används varje gång en ny bokning skall skapas.

>Ta bort bokning – används när en bokning skall tas bort

>Hämta bokningar – används när bokningar för restaurangen skall hämtas

 

Tänk på att när ni skapar er restaurang får ni tillbaka ett id. Detta id är ert restaurang-id som behöver användas med nästan alla efterföljande anrop. T.ex. om ni vill skapa en bokning behöver ni ange vilket restaurangid som skall användas.

 

Att söka bord bör göras via ett formulär där användaren får ange antal personer (1-6) och önskat datum. Om det fanns bord kvar så visas vilken/vilka tider som är tillgängliga. Om det inte finns bord kvar kommer en varningstext upp och användaren får söka igen.

När användaren har valt tid kommer ytterligare ett formulär upp där användaren får skriva namn, e-post och telefonnummer. Spara eller Avbryt där Spara skriver ner bokningen i er blockchain.

För adminläget är det ett enklare CRUD-tänk som gäller.

Projektet skall finnas i ett git-repo och samtliga studenters commits skall finnas med.

Trello eller liknande verktyg skall användas som verktyg för projektet. Det skall framgå vem som arbetat med vilken punkt.

 
För G

>En fungerande applikation med samtliga sidor uppsatta med react router.

>Resultatet från sökningen (av lediga tider) skall presenteras på ett genomtänkt sätt, kanske genom en radioknappslista eller en rullgardinsmeny.

>Administrationsgränssnittet finns med.

>Kunna visa befintliga bokningar.

>Kunna ta bort en bokning.

>Er applikation är responsiv.

>Koden skall vara väldokumenterad.

>Koden skall vara genomtänkt och ha en tydlig struktur.

>Filstrukturen i projektet skall vara god.

>Formulären innehåller validering och felmeddelanden.

>Hantera ändringar i en befintlig bokning.

>Använd css/scss för att skapa animationer vid t.ex. laddning och bokningar.

>Använd er av tjänster för att kommunicera med er blockchain.