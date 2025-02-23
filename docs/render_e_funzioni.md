


Applicazione JS su browser web

Dato -> Render -> HTML

Dato:
  variabili `const todoList = []`

Render:
  funzione: `function render(dato) { return `<html></html>`}`

HTML
  stringa: descrizione degli elementi `<html></html>`

### Come funzionano le funzioni

## Dichiarazione

javascript```

function laMiaFunziona(iMieiArgomenti, ilSecondoArgomento) {

    // codice che usa gli argomenti

    return valoreDiRitorno
}

const dato1DaPassareComeArgomento = 1
const dato2DaPassareComeArgomento = ['ciao']
const valoreDiRitorno1 = laMiaFunzione(dato1DaPassareComeArgomento,dato2DaPassareComeArgomento)

```

## Esempi

in matematica tu scrivi una funzione: y = 4x + 5
quando dai un nome a questa funzione, la chiami f(x)

in programmazione è uguale:

javascript```

function f(x) {
    return 4 * x + 5
}

const myX = 4
const myY = f(myX) // myY === 21


```