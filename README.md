## Consegna

> Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del **20%** per i *minorenni*
va applicato uno sconto del **40%** per gli *over 65*.
L'output del prezzo finale va messo fuori (con massimo due decimali, per indicare centesimi sul prezzo).

### Svolgimento

**Fase input :**

1. Chilometri dello User
2. Età User

**Fase Logica :**

    Controllo che l'età dell'utente sia inferiore a 18 (Sconto minorenne) 
    Se Vero : 
        - Calcolo lo Sconto Minorenne, Km * Costo/Km * 0.20.
        - Calcolo il costo totale, Km * costo/Km - Sconto Minorenne.
    
    Altrimenti Se :
    Controllo che l'età dell'utente sia superiore a 65 (Sconto anziano)
    Se Vero : 
        - Calcolo lo Sconto Anziano, Km * Costo/Km * 0.40.
        - Calcolo il costo totale, Km * Costo/Km - Sconto Anziano.
    
    Altrimenti :
        - Calcolo il costo totale, Km * Costo/Km.

**Fase Output :**

Scrivo sul documento il risultato ad ogni fine condizione, stampando il costoTot e spiegando se l'utente ha avuto accesso o meno ad uno sconto legato alla sua età. 
Per evitare che il numero superi 2 numeri decimali e mi mostri sempre 2 numeri decimale, uso la proprietà toFixed(n) dove n lo sostituisco con 2, ossia il numero di cifre dopo la virgola che voglio vengano mostrate