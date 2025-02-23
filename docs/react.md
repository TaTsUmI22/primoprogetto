React è una libreria per creare interfacce grafiche usando JS e HTML

Mischia JS e HTML con un linguaggio che viene compilato di nome JSX (JS + XML. nota, HTML è molto simile a XML)

JSX ti permette di definire funzioni "render" in maniera più semplice usando un linguaggio simile a HTML

jsx```

function renderLi(text) {
return <li>{text}</li>;
}

```

React gestisce automaticamente lo stato. Quando cambia lo stato, viene fatto automaticamente il render

react rende semplice Stato(dato) -> Render -> HTML
```
