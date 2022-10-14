# ExtraSelect ed ExtraSuggest

## Installazione

## Sistemi Legacy (non compilati)

1. Andare sul [repository](https://git.sinergo.it/gitblit/summary/?r=txdPackage/extraselect.git) -> tree -> scaricare la cartella "dist" -> scompattare la cartella in public/plugins rinominandola "extraselect" (Il file extraselect.jsZone.Identifier si può rimuovere se presente)

2. Includere in backend.blade le seguenti righe: 
   ```html
   <link href="{{ config('par.subfolder', '') }}/plugins/extraselect/css/extraselect.bs4.css?v={{ config('par.versione_include', '') }}" rel="stylesheet">
   <script src="{{ config('par.subfolder', '') }}/plugins/extraselect/wrapped/extraselect.iife.js?v={{ config('par.versione_include', '') }}"></script>
   ```
   N.B. al posto di bs4 mettere __bs[versione di bootstrap del sistema]__

3. Se necessario includere Vue 3 PRIMA degli script js
   ```html
   <script src="https://unpkg.com/vue@3.2.40/dist/vue.runtime.global.prod.js"></script>
   ```
   valutare se scaricarne una copia in public/pulgins

4. per uso in modale, aggiungere al metodo js load_autosuggest() (cercarlo, di solito in _public/plugins/JSM_layout/txd-autosuggest/JSM_autosuggest_compatibility.js_) le seguenti righe
   ```js
    Extraselect.ExtraSelect.init()
    Extraselect.ExtraSuggest.init()
    ```

1. bump al file par

## Opzioni

Tutte le opzioni elencate sono disponibili sia nel componente Vue sia nell'inclusione standalone. 
Per l'inclusione standalone il valore può essere impostato tramite dataset dell'elemento (attributo __data-nome-parametro-in-kebab-case__ ), tranne nei casi dove indicato.
### Extraselect
| Parametro | Tipo (default) | Descrizione |
|--|--|--|
| originalNode |  HtmlElement ( null ) | in inlcusione standalone, è l'oggetto a cui collegare l'extraselect. In Vue deve essere non compilato |
| multiple | Boolean ( false ) | Definisce se il select è multiple o no. in modalità standalone non è necessario, viene letto direttamente da originalNode |
| options |  Array ( [] ) | array di elementi {key,value} che rappresentano le opzioni possibili del campo. Vengono sempre caricate, anche in caso di caricamento ajax |
| modelValue |  Array ( [] ) | elemento per v-model in modalità vue. non usato in modalità standalone |
| maxWidth |  String ( "dynamic" ) | larghezza massima del dropdown. Opzioni: dynamic - default, si allarga in base alla larghezza delle opzioni contenute; inherit - stessa dimensione del campo originale; custom -  si può inserire un valore qualsiasi che viene passato direttamente nello stile |
| url | String ( null ) | se popolato, questo url viene chiamato per recuperare le opzioni del campo in modo asincrono |
| search |  Boolean ( false ) | abilita il filtraggio delle opzioni |
| searchableUrl |  Boolean ( false ) | definisce se usare l'url come sorgente della ricerca |
| initialValue |  any ( null ) | valore iniziale del campo testuale del select. Usato in modalità standalone  |
| minChars |  Number ( 0 ) | numero di caratteri necessari per scatenare un evento di ricerca un ajax |
| fetchMode |  String ( "limited" ) |  Avanzata. regola l'esecuzione delle chiamate ajax quando la chiave di ricerca è una versione più specifica di una chiave già usata  |
| fetchOptions |  Object ( {} ) | Avanzata. oggetto che viene passato alla chiamata fetch eseguita per raccogliere le opzioni |
| dropdownContainer | String ( null ) | Avanzata. Definisce quale elemento html usare come contenitore del dropdown. Se null viene usato l'intero body |
| showSelected |  Boolean ( false ) | Sperimentale. se true mostra delle badge con i valori selezionati sopra al campo |
| removeIcon | String ( "X" ) | Sperimentale. Stringa usata come icona di rimozione se showSelected è attivo |
### Extrasuggest
| Parametro | Tipo (default) | Descrizione |
|--|--|--|
| originalNode |  HtmlElement ( null ) | in inlcusione standalone, è l'oggetto a cui collegare l'extraselect. In Vue deve essere non compilato |
| options |  Array ( [] ) | array di elementi {key,value} che rappresentano le opzioni possibili del campo. Vengono sempre caricate, anche in caso di caricamento ajax |
| modelValue |  Array ( [] ) | elemento per v-model in modalità vue. non usato in modalità standalone |
| maxWidth |  String ( "dynamic" ) | larghezza massima del dropdown. Opzioni: dynamic - default, si allarga in base alla larghezza delle opzioni contenute; inherit - stessa dimensione del campo originale; custom -  si può inserire un valore qualsiasi che viene passato direttamente nello stile |
| url | String ( null ) | se popolato, questo url viene chiamato per recuperare le opzioni del campo in modo asincrono |
| searchableUrl |  Boolean ( false ) | definisce se usare l'url come sorgente della ricerca |
standalone  |
| minChars |  Number ( 0 ) | numero di caratteri necessari per scatenare un evento di ricerca un ajax |
| fetchMode |  String ( "limited" ) |  Avanzata. regola l'esecuzione delle chiamate ajax quando la chiave di ricerca è una versione più specifica di una chiave già usata  |
| fetchOptions |  Object ( {} ) | Avanzata. oggetto che viene passato alla chiamata fetch eseguita per raccogliere le opzioni |
| dropdownContainer | String ( null ) | Avanzata. Definisce quale elemento html usare come contenitore del dropdown. Se null viene usato l'intero body |