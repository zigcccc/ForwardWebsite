# Dokumentacija - Urejanje Forward spletne strani

## Kazalo vsebine

* [Uvod v urejanje](#uvod-v-urejanje)
* [Vsebinski zaboji](#vsebinski-zaboji)
* [Deljena vsebina](#deljena-vsebina)
* [Tipografija](#tipografija)
* [Fotografije](#fotografije)
* [Kontaktni obrazci](#kontaktni-obrazci)
* [Grafi](#grafi)


## Uvod v urejanje
Ker posodobljen dizajn spletne strani ni privzet na osnovno platformo, je potrebno za vpeljavo dizajna in funkcionalnosti na novo vsebine vnesti lastne stile, ki "povozijo" obstoječe in ustvarijo željen izgled. **Kodiranje ni potrebno** oziroma vsaj ne v klasičnem pomenu besede. Kar moramo naredi ročno je, da posameznim elementom (v večini primerov) dodamo določene `class` atribute. Kako doseči, da je posamezen element oblikovan tako kot želimo, bo opisano v nadaljevanju in razdeljeno po glavnih kategorijah elementov.

**Kje lahko vnesemo `class` atribute?**

V urejevalniku, ki ga ponuja Element platforma, imamo opcijo *izvorna koda*. S klikom na ta gumb se nam klasična vsebina spremeni v HTML kodo. Posamezni znački (značka = `<ime_značke> </ime_značke>`) dodamo class atribut tako, da takoj za imenom dodamo besedo `class` kateri sledi enačaj (`=`) in ime class atributa, zavit v dvojne narekovaje (`"class-name"`). Koda torej izgleda nekako tako:

```html
<ime_značke class="class-name"> vsebina značke </ime_značke>
```

## Vsebinski zaboji
### Glavni zaboj
Da je vsebina ustrezno poravnana in prilagojena tudi najmanjšim napravam, moramo celotno vsebino zaviti v poseben zaboj. To naredimo s sledečo kodo:

```html
<div class="content-container">
	Vsa ostala vsebina
</div>
```
Edini primer, kjer vsebine ne želimo zaviti v ta zaboj, je velika slika v vsebinskem delu, ki sega izven zaboja. Vsa ostala vsebina naj bi bila zavita v ta zaboj, saj ji to daja preglednost in željen izgled.

### Izpostavljene kartice
Izpostavljene kartice dodatno poudarijo vsebino in razbijejo monotonost na strani. Implementacija od nas zahteva nekoliko več dela, in sicer:

```html
<div class="cards-container">
	<div class="card">
		<div class="card-image-container">
			<img src="/pot-do-slike.jpg" alt="nadomestno besedilo">
		</div>
		<p class="card-text">Besedilo kartice</p>
	</div>
</div>
```

Zunanji okvir `cards-container` služi kot ogrodje posameznim karticam. Kartice znotraj ogrodje se prikazujejo optimalno, če vstavimo 3 kartice (tudi drugo število je mogoče, a bo prikaz slabši). 

Najprej definiramo ogrodje posamezne kartice `card`, v katerega vstavimo ogrodje za ikono kartice `card-image-container` in besedilo kartice, kateremu dodamo atribut `card-text`.

### Vsebina deljena v mrežo
Vsebino včasih znotraj glavnega vsebinskega dela želimo še dalje razdeliti na več manjših enot. To lahko naredimo s t.i. `grid-content` zabojem. Pravila za uporabo zaboja so sledeča:

* Najprej naredimo zunanji zaboj, kateremu določimo atribut `grid-content-container`. To naredimo tako:

```html
<div class="grid-content-container">Ostala vsebina mrežnega zaboja</div>
```

* Ostane na tvorjenje posameznih mrežnih elementov znotraj zaboja. Število elementov je povsem poljubno, vsak pa mora biti tvorjen na sledeč način:

```html
<div class="grid-element">
	<div class="grid-element-header">
		<!-- Poljubno lahko dodamo ikono posameznega elementa -->
		<img src="/pot-do-ikone-elementa.jpg" class="grid-element-icon">
		<h3 class="grid-element-title">Naslov elementa</h3>
	</div>
	<div class="grid-element-body">
		<p class="grid-element-text">Besedilo elementa</p>
	</div>
</div>
```
Atribut `grid-element` predstavlja zunanje ogrodje elementa. Znotraj ogrodja nastopata dva zaboja, in sicer `grid-element-header` in `grid-element-body`. V zaboj grid element header vključimo ikono (poljubno) in naslov (obvezno) elementa. Za posamezno stiliziranje glej zgornji primer. V zaboj grid element body pa vstavimo besedilo elementa (ponovno glej zgornji primer). **Pomembno** je, da se držimo zgornje strukture, drugače elementi ne bodo prikazani pravilno.

## Deljena vsebina
Včasih nam pride prav, da je vsebina razdeljena v več stolpcev. Ker stran že privzeto uporablja Bootstrap CSS framework, se delitev vsebine v glavnem naslanja na to ogrodje. Deljeno vsebino lahko uporabljamo kjer koli na strani, tako znotraj glavnega okvirja (priporočeno), kot tudi izven.

### Klasična dva stolpca
Največkrat želimo vsebino razdeliti v dva klasična stolpca. To naredimo na sledeč način (podrobnosti Bootstrap class-ov si lahko preberete na [uradni strani](https://getbootstrap.com/docs/4.0/getting-started/introduction/) tega CSS ogrodja):

```html
<div class="row">
	<div class="col-sm-6">
		Ostala vsebina levega stolpca
	</div>
	<div class="col-sm-6">
		Ostala vsebina desnega stolpca
	</div>
</div>
```

V tem primeru smo vsebina razdelili na dva enaka stolpca, ki bosta ostala deljena vse do mobilne verzije, kjer se bosta postavila en pod drugega v vrstnem redu: naprej "levi", nato "desni" stolpec.

### Dva stolpca, kjer se vsebina vedno horizontalno poravna
Bootstrap prizveto ne deluje na "flex" sistemu, zato je vertikalna poravnava vsebine velikokrat težavna. V ta namen smo uvedli poseben `class` atribut, ki omogoča enostavno vertikalno poravnavo vsebine med dvema stolpcema. Sintaksa je zelo podobna prejšnemu primeru, le da atributu `class="row"` dodamo še `flex-row`. Izgleda nekako tako:

```html
<div class="row flex-row">
	Vsa ostala vsebina
</div>
```

Elementi se bodo v tem primeru sredinsko poravnali po vertikali.

### Obrnjen vrstni red vsebine
Včasih želimo obrniti vrstni red vsebine na namizni različici, da ustvarimo na strani neko dinamiko. To bi sicer lahko naredili direktno v kodi, tako da bi zamenjali vrstni red elementov, a bi v tem primeru na mobilni različici, kjer se elementi postavijo en pod drugega, izgledalo čudno. 

V ta namen smo uvedli poseben `class` atribut, ki obrne vrstni red elementov le na namizni različici, in sicer atribut `reversed-row`. Ta atribut se mora vedno uporabljati **v kombinaciji z atributom flex-row**, saj nam le ta način omogoča dinamično spreminjanje vrstnega reda elementov.

Sintaksa je sledeča:

```html
<div class="row flex-row reversed-row">
	<div class="col-sm-6">Lev stolpec</div>
	<div class="col-sm-6">Desni stolpec</div>
</div>
```

V tem primeru bo na namizni različici "lev" stolpec v resnici nastopal na desni strani in obratno, na mobilni pa se bodo elementi še vedno pravilno postavili en pod drugega.

## Tipografija
### Naslovi
Na strani nastopajo naslovi v večjem delu v največ treh ravneh - od `h1` do `h3`. Vsaki znački pripada en do največ dva različna class imena, glede na to, kje v vsebini se ta naslov uporablja.

**Glavni naslovi**

Glavne naslove predstavlja značka `<h1>`. Za naše potrebe, tej znački dodamo sledeč class atribut:

```html
<h1 class="special">Naš naslov</h1>
```

**Podnaslovi**

Podobno kot za glavne naslove velja tudi za podnaslove; če želimo prenesti nove smernice dizajna v podnaslov, le temu dodamo class `special`. Podnaslove predstavlja značka `<h2>`, koda pa izgleda nekako tako:

```html
<h2 class="special">Naš podnaslov</h2>
```

**Naslovi tretje stopnje `<h3>`**

Ti naslovi se v glavnem uporabljajo znotraj kartic ali mrežno deljene vsebine, navodila za implementacijo pa so opisana pri posameznih tipih vsebin (glej kazalo vsebine).

### Tekoče besedilo

Tekoče besedilo je glavnina vsebinskega dela. Zavit je v značko `<p>` (paragraph), da pa mu dodamo posobljno stilsko podobo, znački dodamo class `basic-paragprah`. Koda izgleda tako:

```html
<p class="basic-paragraph">Besedilo odstavka</p>
```

Pomembno je, da vsak nov odstavek na novo zavijemo v to značko in vsaki znački posebej dodamo dotični class atribut.

### Povezani odstavki
Včasih želilo dodatno izpostaviti, da se deli besedila, kljub temu da so ločeni z podnaslovi, med sabo močno povezujejo in navezujejo en na drugega. Implementacija takih "povezanih" odstavkov besedila je sledeča:

```html
<h2 class="connected-content-title">Naslov povezanega odstavka</h2>
<div class="connected-content-container">
	<p>Odstavek z besedilom.</p>
	<p>Znotraj bloka vsebine je lahko več odstavkov.</p>
	<p>Odstavki ne potrebujejo dodatnega atributa basic-paragraph.</p>
</div>
```

Najprej vstavimo značko za podnaslov `<h2>` kateri dodamo class atribut `connected-content-title`. Takoj naslednja stvar za to značko mora biti ogrodni element `<div>` s class atributom `connected-content-container`, v katerega so zaviti odstavki povezanega besedila. Odstavki znotraj tega okvirja ne potrebujejo dodatnega class atributa `basic-paragraph`, saj stil "podedujejo" od okvirja. Število odstavkov je poljubno.

## Fotografije
### Velika fotografija
Velika fotagrafija zavzema celoten mogoč prostor, zato jo moramo postaviti izven glavnega okvirja `content-container`. Primer uporabe je sledeč:

```html
<p class="featured-image">
	<img src="/pot-do-željene-slike.jpg" alt="nadomestno besedilo" style="width: 100%">
</p>
```
Atribut `featured-image` pripnemo znački za odstavek **in ne znački za ogrodje `div`**, saj v tem primeru elementov program povozi naša navodila in slika ne izgleda tako kot bi morala. 

### Mala fotografija
Implementacija male fotografije je načeloma enaka implementaciji velike, le da se taka fotografija obvezno nahaja znotraj glavnega okvirja `content-container` in ji dodamo dodaten atribut `small-image`. Implementacija torej izgleda nekako tako:

```html
<p class="featured-image small-image">
	<img src="/pot-do-željene-slike.jpg" alt="nadomestno besedilo">
</p>
```
### Fotografija s tekstom
Fotografija s tekstom od nas zahteva največ dela in je natežavnejša za implementacijo. Zahteva svoj lasten zaboj, torej div element z atributom `overlayed-image-container`. Znotraj tega zaboja vstavimo klasično značko za sliko, kot opisano v prejšnih odstavkih, dodaten zaboj, z atributom `overlay`, ki je **prazen** in pa zaboj z atributom `content`, v katerega naposled vstavimo tekst zavit v značko `h3` in atributom `image-quote`. Opcijsko lahko dodamo tudi stiliziran narekovaj, ki dodatno nakazuje, da gre za neko citirano besedilo. Narekovaj dodamo s pomočjo značke `<i>` in atributa `fa fa-quote-left`. Najlažje si predstavljamo s primerom, ki je predstavljen spodaj:

```html
<div class="overlayed-image-container">
	<img src="/pot-do-željene-slike.jpg" alt="nadomestno besedilo">
	<div class="overlay"></div>
	<div class="content">
		<h3 class="image-quote">
			<i class="fa fa-quote-left" aria-hidden="true"></i>
			Besedilo, ki bo prišlo čez fotografijo
		</h3>
	</div>
</div>
```

## Kontaktni obrazci
Na strani nastopa več različnih kontaktnih obrazcev, vse pa lahko najdemo pod statičnimi vsebinami, ker je sam kontaktni obrazec preveč kompleksen, da bi se ga kodiralo sproti in po potrebi.

Torej, če želimo na stran vstaviti kontaktni obrazec ustvarimo nov nosilec, kot tip vsebine izberemo **statična vsebina** in poiščemo ime kontaktnega obrazca, ki ga želimo vstaviti. Možnosti so:

* splošni kontaktni obrazec
* kontaktni obrazec povpraševanje
* kontaktni obrazec foto360 povpraševanje

## Pomožni atributi
Posamezne elemente včasih želimo oblikovati ali postaviti drugače, kot to storimo običajno. Za dodajnje praznega prostora znotraj ali zunaj elementa je bila do sedaj uporabljena *tehnika dodajanja praznih odstavkov*, ki pa ni optimalna predvsem z vidika optimizacije.

Torej, z implementacijo novega dizajna, lahko razmak med elementi povečamo z class atributom, in sicer lahko povečamo zgornji odmik na način:

```html
class="mt-10" za 10px zunanjega odmika
class="mt-20" za 20px zunanjega odmika
class="mt-30" za 30px zunanjega odmika
class="mt-40" za 40px zunanjega odmika
class="mt-50" za 50px zunanjega odmika
```

oziroma povečamo zgornji odmik znotraj elementa na način:

```html
class="pd-10" za 10px notranjega odmika
class="pd-20" za 20px notranjega odmika
class="pd-30" za 30px notranjega odmika
class="pd-40" za 40px notranjega odmika
class="pd-50" za 50px notranjega odmika
```
Primer, ko bi naprimer vsebino od naslova želeli odmakniti za 40px bi bil:

```html
<h2 class="subheading">Podnaslov</h2>
<p class="mt-40 basic-paragraph">Vsebina, ki smo jo od naslova odmaknili za 40px</p>
```

## Grafi
Grafi na strani so odlična prezentacija povprečnemu uporabniku razmeroma "dolgočasnih" podatkov. Implementacija grafa na stran je povsem enostavna, držati se moramo le naslednjih pravil:

```html
<div class="content-container">
  <canvas 
    id="graf-statistika-email"
    class="stats-chart"
    data-type="doughnut"
    data-labels="oznaka1, oznaka2, oznaka3"
    data-values="30, 50, 25"
  ></canvas>
</div>
```

Graf, tako kot vso ostalo vsebino, zavijemo oziroma vmestimo znotraj zaboja `content-container`. Za sam graf uporabimo značko `<canvas></canvas>` - to je posebna značka HTML5 jezika, ki nam dovoljuje prikaz kompleksnih grafičnih elementov (kar graf za razmere programiranja načeloma je). 

Značka canvas na to od nas zahteva:

* atribut **id**, ki je povsem poljuben in služi le, če z grafom želi doseči nekaj, kar navadno ne
* atribut **class**, ki mora obzevno biti `stats-chart` - tako JavaScript prepozna element kot kandidata za graf
* atributi `data-`, kamor vnesemo dejanske podatke grafa in sicer:
	* **type**, kjer izbiramo med: line, bar, radar, **doughnut, pie**, polar-area, bubble, scatter in area (za naše potrebe najbl aktualna doughnut in pie)
	* **labels**, kamor vnesemo oznake vnesenih podatkov, so povsem poljubne
	* **values**, vrednosti grafa, **obvezno cele številke**, ki pa so povsem poljubne (vsota ni nujno 100, graf sam normalizira vrednosti)

Pomebno je, da te atrbiute vnesemo točno, saj bo v nasprotnem primeru sigurno prišlo do napake. Za lažji začetek je [na voljo HTML predloga](https://github.com/zigcccc/ForwardWebsite/blob/master/Examples/example-chart.html), kjer lahko samo popravimo željene vrednosti in oznake in imamo tako manjše možnosti za napako.