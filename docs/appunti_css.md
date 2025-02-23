## HTML

html```
<html>
    <head></head>
    <body>
        <div>
            <span>Ciao</span>
        </div>
    </body>
</html>
```

l'HTML e gli elementi nell'inspect non solo la stessa cosa!

l'HTML spiega al browser come generare il DOM

Document Object Model

javascript```

class MyClass {
    public constructor() {
        // descrive
    }
}


const myVariable = new MyClass() // istanza

```

quando scrivo HTML spiego al browser come creare gli elementi

quando modifico l'HTML, il browser deve ricreare gli elementi per allinearsi al nuovo html

javascript```

const myelement = document.querySelector('#id') // prende un element esistente
myelement.innerHTML = `<div>Ciao</div>` // questo cambia l'html dentro l'elemento

```

il browser deve distruggere tutti gli elementi dentro myelement.
Poi il browser deve ricostruire tutti gli elementi con nuovi elementi.

### Come selezionare gli elementi (selector)

### tag

`div`
`body`
`a`

sono gli elementi base dell'html

### classi

`.my_class`

i nomi assegnati con l'attributo id

`<div class="my_class">`

lo selezioni con un selector che inizia per `.` e viene seguito dal nome dell'id. Puoi usare la stessa classe si più elementi

un singolo tag può avere più di una classe separata da spazio

`<div class="my_class1 my_class2 my_class3">`

### id

`#my_id`

i nomi assegnati con l'attributo id

`<div id="my_id">`

lo selezioni con un selector che inizia per `#` e viene seguito dal nome dell'id. L'id è unico nella pagina! Se metti due id uguali il browser si lamenta

### Come seleziono un elemento con un selector in Javascript?

```
document.querySelector('.my_class') // questo seleziona il primo elemento con la classe "my_class"

document.querySelectorAll('.my_class') // questo restituisce un array di element dove ciascun elemento corrisponde al selettore (se hai più elementi con classe "my_class")
```

### Come faccio se ho tanti elementi e faccio fatica a trovare il selettore?

html```

<div>
    <ul>
        <li>
            <div> // come seleziono questo div?
                test
            </div>
        </li>
    </ul>
</div>

```

aggiungi un id o una classe al div

usi un selettore composto

`<selettore del genitore> <selettore del figlio>`

nell'esempio sopra:

javascript```
document.querySelector('div div') -> voglio un div che si trova dentro un div

// oppure

document.querySelector('li div') -> voglio un div che si trova dentro un li

// oppure

document.querySelector('ul li div') -> voglio un div che si trova dentro un li che si trova dentro un ul
```

Ma posso anche combinare diversi tag

html```

<div id="my_app">
    <ul class="list">
        <li>
            <div class="list-item"> // come seleziono questo div?
                test
            </div>
        </li>
    </ul>
</div>

```

posso selezionarlo combinando vari selettori

javascript```

document.querySelector('#my_app .list div')
document.querySelector('div ul.list div.list-item')


```

è come una ricerca di file, ma puoi saltare i pezzi in mezzo:

/home/matteo/git/personale/primoprogetto

`matteo primoprogetto` -> primoprogetto dentro matteo

### Selettori e specificità

Ci sono alcuni selettori che sono più forti di altri

gli id vincono sempre
le classi al secondo posto
i tag come ultimi

ciascun selettore ha una specificità calcolabile (https://specificity.keegan.st/) con il numero di id, classi e tag usati.

Per controllare "chi vince" tra due selettori, controllo il numero di id
se parimerito controllo il numeri di classi
se parimerito controllo il numero di emelenti

## CSS

il css serve per dare stile agli element di una pagina HTML usando i selettori. 

Quando due selettori danno regole allo stesso elemento si applicano entrambi

Quando due selettori danno la stessa regola si applica la regola del selettore più specifico

Quando hanno la stessa specificità vince l'ultimo

```
selettore {
    regola: 'valore regola'
}
```

per esempio

html```

<div id="my_app">
    <ul class="list">
        <li>
            <div class="list-item"> // come seleziono questo div?
                test
            </div>
        </li>
    </ul>
</div>

```

css```

#my_app {
    background-color: red;
}

div .list-item {
    font-size: 12px;
}

```

### Regole CSS principali

## Regole del box model

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model

## block
`div`, `h1`, `p`

occupano tutto lo spazio disponibile (vanno a capo)

## inline
`span`, `strong`

seguono il testo

Gioco
https://flexboxfroggy.com/

CheatSheet CSS
https://admm.co/css-cheat-sheet/ 