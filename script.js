document.getElementById('menuButton').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    // Toggle visibility of dropdown menu
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

// Menutup dropdown jika pengguna mengklik di luar menu
window.onclick = function(event) {
    if (!event.target.matches('#menuButton')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}

document.getElementById('menuButton1').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdownMenu1');
    
    // Toggle visibility of dropdown menu
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});


const words = [
    "der Winterurlaub", "das Skigebiet", "der (Ski-)Lift", "der Strandurlaub", "die Küste", "der Sand", 
    "die Strandpromenade", "der Urlaubsgruß", "Urlaubsplanung", "der Zeitpunkt", "der Terminkalender", "rechtzeitig", "gründlich", 
    "buchen", "sich entschließen", "die Halbpension", "die Vollpension", 
    "höchstens", "enthalten sein", "der Kompromiss", "meinetwegen", "dabei sein", 
    "der Einfall",  "einpacken", "auspacken", "der Mitarbeiter", "die Mitarbeiterin", "Unterkünfte", 
    "das Ferienhaus",  "das Wellnesshotel",  "die Hütte", "die Badewanne", "im Freien übernachten", "aufbauen", "der Ausblick", "die Aussicht", "herrlich", 
    "schick", "der Aufenthalt", "vorbei sein", "Reisen", 
    "das Urlaubsziel", "die Entfernung", "die Fahrtzeit", "gegen", 
    "der Hauptbahnhof", "der ICE", "der Kofferraum", "die Schifffahrt", "das Boot", 
    "Urlaub in der Natur", "die Alm", "die Kuh", "der Wanderer", 
    "das Gebirge", "der Himmel", "die Wiese", "die Traube", "reif", "brennen", "giftig", "das Insekt", "der Schutz"
    , "das Netz", "die Einsamkeit", "einsam", "der Empfang", "weg sein", 
    "das Heimweh", "sich erkälten", "Urlaubsaktivitäten", "das Abenteuer", "das Erlebnis", 
    "entspannend", "angenehm", "sich erholen", "faulenzen", "spazieren", "der Pilz", 
    "mitarbeiten", "vorbeikommen", "begeistert sein", 
    "gut/schlecht gelaunt sein", "zufrieden sein", "genervt sein", "enttäuscht sein", 
    "verzweifelt sein", "beinahe", "auf (Ohren auf!)", "drüben"
    ,
    "hierher"
    ,
    "momentan"
    ,
    "eher (Auf der Alm ist es eher einsam.)"
    ,
    "jedenfalls"
    ,
    "ca. (- circa)"
    ,
    "falls (Falls ihr Lust habt, meldet euch.)"
    ,
    "offenbar (Offenbar hatten auch andere diese Idee.)"
    ,
    "der Typ, -en"
    ,
    "der Chat, -s"
    ,
    "erfahren, er erfährt, hat erfahren"
    ,
    "die Neuigkeit, -en"
    ,
    "der Rückblick, -e"
    ,
    "solche (Wir kennen solche Listen.)"
    ,
    "tragen, er trägt, hat getragen"
    ,
    "vorne liegen (Berlin liegt in dieser Liste ganz vorne.)"
    ,
    "wieso (Wieso fahren wir nicht an die Ostsee?)"
    ,
    "das Zeug (Sg.)"
    ,
    "da (Da die Stadt sehr bekannt ist, gibt es viele Touristen.)"
    ,
    "obwohl (Obwohl es geregnet hat, waren wir gut gelaunt.)"
    ,
    "zu (Ich habe keine Lust, lange nach einer Unterkunft zu suchen.)"
    ,
    "Geräte und Zubehör"
    ,
    "der Staubsauger, -"
    ,
    "die Waschmaschine, -n"
    ,
    "der Kopfhörer, -"
    ,
    "die Powerbank, -s"
    ,
    "der USB-Stick, -s"
    ,
    "der Knopf, e"
    ,
    "die Taste, -n"
    ,
    "der Monitor, -e"
    ,
    "ein schalten (den Monitor einschalten)"
    ,
    "installieren"
    ,
    "das Ladekabel, -"
    ,
    "an schließen, er schließt"
    ,
    "an, hat angeschlossen (ein Kabel anschließen)"
    ,
    "der Handyakku, -s"
    ,
    "auf laden, er lädt auf, hat aufgeladen (den Akku aufladen)"
    ,
    "laden, er lädt, hat geladen (das Handy laden)"
    ,
    "sparsam"
    ,
    "stumm schalten (das Handy stumm schalten)"
    ,
    "(sich) an schaffen (sich ein neues Handy anschaffen)"
    ,
    "dabei haben, er hat dabei, hat dabeigehabt"
    ,
    "reparieren und reklamieren"
    ,
    "reklamieren"
    ,
    "umtauschen"
    ,
    "zurück geben, er gibt zurück, hat zurückgegeben"
    ,
    "die Garantie, -n"
    ,
    "die Quittung, -en"
    ,
    "kaputt gehen, er geht kaputt, ist kaputt gegangen"
    ,
    "reparieren"
    ,
    "zufrieden"
    ,
    "testen"
    ,
    "benötigen"
    ,
    "die Anleitung, -en"
    ,
    "die Gebrauchs- anweisung, -en"
    ,
    "smartes Wohnen"
    ,
    "automatisch"
    ,
    "bedienen (etwas von Hand bedienen)"
    ,
    "steuern"
    ,
    "anpassen (an + A.) (das Licht an die Stimmun anpassen)"
    ,
    "berühren"
    ,
    "reinigen"
    ,
    "technisch"
    ,
    "die Technologie, -n"
    ,
    "smart"
    ,
    "machen (zu+ D.) (Die Wohnung zu einem Smart Home machen.)"
    ,
    "die Alarmanlage, -n"
    ,
    "der Einbruch, e"
    ,
    "die Gefahr, -en"
    ,
    "sicher"
    ,
    "der Neubau, -ten"
    ,
    "die Haustür, -en"
    ,
    "der Fingerabdruck, e"
    ,
    "der Sprachassistent, en"
    ,
    "aufnehmen, nimmt auf, hat aufgenommen"
    ,
    "gleichzeitig"
    ,
    "der Tagesablauf, e"
    ,
    "Werbung"
    ,
    "das Produkt, -e"
    ,
    "auf den Markt kommen"
    ,
    "das Kaufverhalten, -"
    ,
    "das Verhalten, -"
    ,
    "der Slogan, -s"
    ,
    "ansprechen"
    ,
    "auf fallen, er fällt auf, ist aufgefallen"
    ,
    "wirken (auf + A.)"
    ,
    "wecken (Wünsche wecken.)"
    ,
    "beeinflussen"
    ,
    "der Rabatt, -e"
    ,
    "das Sonderangebot, -e"
    ,
    "das Merkmal, -e"
    ,
    "frech"
    ,
    "ausgezeichnet"
    ,
    "bemerken"
    ,
    "verbieten, er verbietet, hat verboten"
    ,
    "vertrauen"
    ,
    "reichen (Das reicht schon.)"
    ,
    "aufmerksam"
    ,
    "interessiert"
    ,
    "die Erinnerung, -en"
    ,
    "das Magazin, -e"
    ,
    "die Vorstellung, -en"
    ,
    "Geld und Banken"
    ,
    "die EC-Karte, -n"
    ,
    "die Geheimzahl, -en"
    ,
    "der Geldautomat, -en"
    ,
    "das Girokonto, -konten"
    ,
    "gratis"
    ,
    "genügen"
    ,
    "sich lohnen"
    ,
    "sich leisten"
    ,
    "das Portemonnaie, -s"
    ,
    "an haben, er hat an, hat angehabt"
    ,
    "die Ausnahme, -n"
    ,
    "bereits"
    ,
    "bloß (Das kostet bloß 10 Euro.)"
    ,
    "diesmal"
    ,
    "daher/darum/deswegen"
    ,
    "sodass"
    ,
    "ebenfalls"
    ,
    "vor einer Frage stehen"
    ,
    "geschehen, es geschieht, ist geschehen"
    ,
    "merkwürdig"
    ,
    "seltsam"
    ,
    "nähen"
    ,
    "rein (reines Glück)"
    ,
    "sich Sorgen machen"
    ,
    "das Taschentuch, "
    ,
    "der Transport, -e"
    ,
    "verraten, er verrät, hat verraten"
    ,
    "die Wand, e"
    ,
    "streichen, er streicht, hat gestrichen (eine Wand streichen)"
    ,
    "wegen"
    ,
    "trotz"
    ,
    "Veränderungen"
    ,
    "die Gewohnheit, -en"
    ,
    "gewohnt"
    ,
    "raus (raus aus dem gewohnten Alltag)"
    ,
    "üblich"
    ,
    "historisch"
    ,
    "die Krise, -n"
    ,
    "die Trennung, -en"
    ,
    "die Rückkehr (Sg.)"
    ,
    "verschwinden, er verschwindet, verschwand, ist verschwunden"
    ,
    "verursachen"
    ,
    "führen (zu + D.) (Das führt zu Veränderungen.)"
    ,
    "der Prozess, -e"
    ,
    "der Gegensatz, "
    ,
    "minimal radikal (Das Leben hat sich minimal/ radikal verändert.)"
    ,
    "über Zeit sprechen"
    ,
    "während"
    ,
    "mittlerweile"
    ,
    "schließlich"
    ,
    "seitdem"
    ,
    "von... auf (von einem Tag auf den anderen)"
    ,
    "jahrelang"
    ,
    "Arbeitswelt"
    ,
    "die Arbeiterin, -nen"
    ,
    "der Lehrling, -e"
    ,
    "das Personal (Sg.)"
    ,
    "die Handarbeit, -en"
    ,
    "die Bedingung, -en"
    ,
    "die Konkurrenz (Sg.)"
    ,
    "Arbeitswelt"
    ,
    "die Schulbildung (Sg.)"
    ,
    "die Disziplin (Sg.)"
    ,
    "tolerant"
    ,
    "die Strafe, -n (eine Strafe bekommen)"
    ,
    "Sportunfall"
    ,
    "die Fitness (Sg.) (auf die Fitness achten)"
    ,
    "die Form, -en (sich in Form halten)"
    ,
    "der Trend, -s (Fitness liegt im Trend.)"
    ,
    "der Weltmeister, -"
    ,
    "-fach (eine fünffache Weltmeisterin)"
    ,
    "sich ereignen"
    ,
    "stürzen"
    ,
    "die Wirbelsäule, -n (sich an der Wirbelsäule verletzen)"
    ,
    "abwärts (vom Oberkörper abwärts gelähmt sein)"
    ,
    "aufgeben, er gibt auf, gab auf, hat aufgegeben"
    ,
    "der Mut (Sg.) (jemandem Mut machen)"
    ,
    "sich beruflich engagieren"
    ,
    "die Herausforderung, -en", 
    
    "sich ein setzen (für + A.)"
    ,
    "politisch (politisch engagiert sein)"
    ,
    "die Wahl, -en"
    ,
    "kämpfen (für + A.) (für die Selbstständigkeit kämpfer"
    ,
    "die Heldin, -nen"
    ,
    "ehren"
    ,
    "Essgewohnheiten"
    ,
    "die Ernährung (Sg.)"
    ,
    "sich ernähren (sich bewusst gesund ernähren)"
    ,
    "die Diät, -en"
    ,
    "halten, er hält, hielt, hat gehalten (Diät halten)"
    ,
    "das Nahrungsmittel,-"
    ,
    "die Speise, -n"
    ,
    "die Frucht, e"
    ,
    "die Karotte, -n"
    ,
    "das Vitamin, -e"
    ,
    "der Nachtisch, -e"
    ,
    "biologisch"
    ,
    "frisch"
    ,
    "vegetarisch"
    ,
    "Reise-Dokumente"
    ,
    "der Reisepass, e"
    ,
    "das Visum, Visa"
    ,
    "überqueren (eine Grenze überqueren)"
    ,
    "die Botschaft, -en"
    ,
    "das Konsulat, -e"
    ,
    "der Zoll, e"
    ,
    "die Beziehung, -en"
    ,
    "das Verhältnis, -se"
    ,
    "sich verlieben (in A.)"
    ,
    "die Schwiegereltern (Pl.)"
    ,
    "das Benehmen (Sg.)"
    ,
    "sich verhalten, er verhält, verhielt, hat verhalten"
    ,
    "sich begrüßen"
    ,
    "sich umarmen"
    ,
    "siezen"
    ,
    "duzen"
    ,
    "unter (Unter Studierenden duzt man sich.)"
    ,
    "der Kuss, "
    ,
    "umgekehrt"
    ,
    "ausschließlich"
    ,
    "wesentlich (Die Situation ist wesentlich besser.)"
    ,
    "anwesend"
    ,
    "nachher"
    ,
    "das Fach, er (Die Tasche hat viele Fächer.)"
    ,
    "das Camping (Sg.)"
    ,
    "die Reihe, -n (der Reihe nach)"
    ,
    "der Lift, -e"
    ,
    "die Struktur, -en"
    ,
    "zufällig"
    ,
    "der Sonnabend, -e"
    ,
    "gucken"
    ,
    "auf wachen"
    ,
    "erstellen (eine Liste erstellen) /machen."
    ,
    "veröffentlichen"
    ,
    "aus suchen"
    ,
    "auf halten, er hält auf, hielt auf, hat aufgehalter (Sie hält mir die Tür auf.)"
    ,
    "operieren"
    ,
    "klagen"
    ,
    "relativ"
    ,
    "beziehungsweise (bzw.)"
    ,
    "schwach"
    ,
    "theoretisch"
    ,
    "innerhalb"
    ,
    "außerhalb"
    ,
    ,"Weshalb?"
    ,"der Profi, -s"
,
"der Schreiner, -"
,
"die Spezialistin, -nen"
,
"der Unternehmer, -"
,
"am Gericht"
,
"die Rechtsanwältin, -nen"
,
"der Richter, -"
,
"das Gericht, -e"
,
"die Gerichtsverhand- lung, -en"
,
"das Urteil, -e"
,
"das Verbrechen, -"
,
"fair"
,
"gerecht"
,
"die Reporterin, -nen"
,
"die Reportage, -n"
,
"Branchen"
,
"der Bereich, -e"
,
"die Branche, -n"
,
"die Industrie, -n"
,
"die Landwirtschaft (Sg.)"
,
"Tätigkeiten"
,
"aus tragen, er trägt aus, trug aus, hat ausgetragen"
,
"zu stellen (Pakete zustellen)"
,
"ab/schreiben, er schreibt"
,
"ab, schrieb ab, hat"
,
"abgeschrieben"
,
"her stellen"
,
"Jobsuche"
,
"das Inserat, -e"
,
"der Interessent, -en"
,
"sich eignen (für + A.)"
,
"der Stundenlohn, e"
,
"der Teilzeitjob, -s"
,
"die Voraussetzung, -en"
,
"zukünftig"
,
"Bewerbung"
,
"die Bewerberin, -nen"
,
"die Personalien (Pl.)"
,
"der Anhang, #e"
,
"die Bewerbungsunter- lagen (PI.)"
,
"die Bescheinigung, -en"
,
"der Lebenslauf, e"
,
"an kommen (auf + D.), es kommt an, kam an, ist angekommen"
,
"aussagekräftig"
,
"sich beziehen (auf + A.), er bezieht, bezog, hat bezogen"
,
"enthalten, er enthält, enthielt, hat enthalten"
,
"die Fähigkeit, -en"
,
"zählen (zu + D.) (Pünktlichkeit zählt zu den wichtigsten Eigenschaften Eines Bewerbers.)"
,
"Vorstellungsgespräch"
,
"der Auftritt, -e"
,
"die Geduld (Sg.)"
,
"der Eindruck, e (einen guten Eindruck machen)"
,
"sich erkundigen (nach + D."
,
"ruhig (Sagen Sie ruhig, dass Sie nervös sind.)"
,
"überzeugen (von + D.)"
,
"im Beruf"
,
"der Arbeitnehmer,"
,
"das Einkommen, -"
,
"die Anlage, -n"
,
"sich beschäftigen (mit + D.)"
,
"die Entwicklung, -en"
,
"die Fortbildung, -en"
,
"die Planung, -en"
,
"geregelt (geregelte Arbeitszeiten)"
,
"der Rechner, -"
,
"Eigenschaften"
,
"aggressiv"
,
"befriedigend"
,
"exakt"
,
"kommunikativ"
,
"konservativ"
,
"locker"
,
"menschlich"
,
"offen"
,
"optimistisch"
,
"qualifiziert"
,
"speziell"
,
"unfreundlich"
,
"zornig"
,
"Pannen am Arbeitsplatz"
,
"die Absicht, -en (Das war keine Absicht.)"
,
"das Versehen, - (aus Versehen)"
,
"sich irren (in + D.)"
,
"verwechseln"
,
"verzeihen, er verzeiht, verzieh, hat verziehen (Verzeihen Sie bitte.)"
,
"schrecklich"
,
"Werkzeuge und Materialien"
,
"der Hammer, -"
,
"das Metall, -e"
,
"die Bürste, -n"
,
"die Schere, -n"
,
"das Besteck, -e"
,
"absolut"
,
"der Augenblick, -e (im Augenblick)"
,
"der Faktor, -en"
,
"gesamt"
,
"möglichst"
,
"kürzlich"
,
"sämtlich"
,
"jedoch"
,
"ursprünglich"
,
"selbstverständlich"
,
"stellen (den Wecker stellen)"
,
"die Gaststätte, -n"
,
"der Imbiss, -e"
,
"die Verbindung, -en"
,
"das Vergnügen (Sg.)"
,
"die Partei, -en"
,
"die Öffentlichkeit (Sg.)"
,
"vor ziehen, er zieht vor, zog vor, hat vorgezogen"
,
"zahlreich"
,
"der Zweck, -e"
,
"zweifeln (an + D.)"
,
"Land und Leute"
,
"die Gegend, -en (eine Region ländliche Gegend)"
,
"der Vorort, -e"
,
"die Region, -en"
,
"regional"
,
"europäisch"
,
"die Herkunft, e"
,
"die Bevölkerung, -en"
,
"der Bürger, -"
,
"die Bürgerin, -nen"
,
"Umwelt"
,
"die Erde (Sg.)"
,
"das Trinkwasser (Sg.)"
,
"Ökologisch / Öko-"
,
"bio/Bio- (Bio-Produkte)"
,
"die Ernte, -n"
,
"das Rind, -er"
,
"das Huhn, Fer"
,
"Umweltprobleme"
,
"die Umweltverschmutzung (Sg.)"
,
"verschmutzen"
,
"die Schwierigkeit, -en"
,
"das Klima (Sg.)"
,
"der Klimawandel (Sg.)"
,
"entstehen, er entsteht, entstand, ist entstanden"
,
"der Abfall, e"
,
"der Mülleimer, -"
,
"der Kunststoff, -e"
,
"landen (im Müll landen)"
,
"die Tonne, -n (2 Millionen Tonnen Lebensmittel)"
,
"das Abgas, -e "
,
"schaden"
,
"schädlich"
,
"die Ursache, -n"
,
"der Stromverbrauch (Sg.)"
,
"verschwenden"
,
"liegen (bei + D.), er liegt, lag, hat gelegen (Der Bio- Anteil liegt bei 15%.)"
,
"zerstören"
,
"Umweltschutz"
,
"der Umweltschutz (Sg.)"
,
"die Alternative, -n"
,
"das Pfand (Sg.)"
,
"verlangen (Pfand verlangen)"
,
"die Maßnahme, -n"
,
"messen, er misst, maß, hat gemessen"
,
"berechnen"
,
"der Rekord, -e"
,
"das Resultat, -e"
,
"Engagement für die Umwelt"
,
"die Aktion, -en"
,
"dagegen (Ich bin dagegen.)"
,
"sich engagieren (für/ gegen + A.)"
,
"sich an schließen, er schließt an, schloss an, hat angeschlossen (sich einer Gruppe anschließen)"
,
"unterstützen"
,
"sich beteiligen (an + D.)"
,
"retten"
,
"schützen (vor + D.)"
,
"aufſhalten, er hält auf, hielt auf, hat aufgehalten"
,
"stoppen"
,
"aufheben, er hebt auf, hob auf, hat aufgehoben"
,
"auf klären"
,
"vermeiden, er vermeidet, vermied, hat vermieden"
,
"beobachten"
,
"pflanzen"
,
"Geschäftsideen"
,
"auf eine Idee kommen"
,
"der Fortschritt, -e"
,
"die Marke, -n"
,
"der Bedarf (Sg.)"
,
"liefern"
,
"fördern"
,
"verbrauchen (Energie verbrauchen)"
,
"verleihen, er verleiht, verlieh, hat verliehen"
,
"verteilen"
,
"haltbar (Frische Milch ist nicht lange haltbar.)"
,
"Wetter"
,
"der Blitz, -e"
,
"blitzen"
,
"der Donner, -"
,
"donnern"
,
"hageln"
,
"der Sturm, e"
,
"mild"
,
"extrem"
,
"neblig"
,
"feucht"
,
"die Wettervorhersage, -n"
,
"allein (Allein morgens trinke ich schon zwei Liter Tee.)"
,
"damit"
,
"um zu (Ich fahre Rad, um fit zu bleiben.)"
,
"allerdings"
,
"die Ansicht, -en"
,
"der Durchschnitt (Sg.)"
,
"der Standpunkt, -e (auf einem Standpunkt stehen)"
,
"widersprechen"
,
"unterscheiden"
,
"die Steckdose, -n"
,
"digital"
,
"elektronisch"
,
"das Zeichen,"
,
"dienen (als N.) (als Zeichen für etwas dienen)"
,
"drehen"
,
"extra"
,
"der Fall, e (in jedem Fall)"
,
"die Geschwindigkeit, -en"
,
"auf der sicheren Seite sein"
,
"sogenannt"
,
"die richtige Wahl treffen"
,
"umsonst"
,
"völlig"
,
"korrekt"
,
"kommen (zu+ D.) (zu einem Ergebnis kommen)"
,
"jederzeit"
,
"zählen (bis zehn zählen)"
,
"Zukunftsprognosen"
,
"werden (Was wird sich in der Zukunft ändern?)"
,
"aus gehen (von + D.), er geht aus, ging aus, ist ausgegangen (Experten -gehen davon aus, dass)"
,
"die Prognose, -n"
,
"lauten (Die Prognose lautet: ...)"
,
"irgendwann"
,
"voraussichtlich"
,
"eventuell"
,
"möglicherweise"
,
"längst"
,
"der Fortschritt, -e"
,
"das Labor, -e"
,
"der Planet, en"
,
"die Passagierin, -nen"
,
"der Chip, -s"
,
"die Haut, e"
,
"der Anteil, -e"
,
"das Fünftel, -"
,
"wachsen, er wächst, wuchs, ist gewachsen"
,
"Orte in der Stadt"
,
"die Akademie, -n"
,
"das Altenheim, -e"
,
"das Fundbüro, -s"
,
"die Fußgängerzone, -n"
,
"das Hallenbad, er,"
,
"die Kindertagesstätte, -n e-n"
,
"der Kiosk, -e"
,
"die Klinik, -en"
,
"der Tierpark, -s"
,
"die Volkshochschule, -n"
,
"der Zirkus, -se"
,
"Wohnen"
,
"das Stadtviertel -"
,
"die Wohnanlage, -n"
,
"der Wohnraum, e"
,
"die Solarzelle, -n"
,
"Leben in der Stadt"
,
"anonym"
,
"Lebenswert"
,
"miteinander"
,
"frisch (Ich genieße die frische Luft.)"
,
"sich befinden"
,
"begegnen"
,
"die Bildung (Sg.)"
,
"der Dienstleistungsbereich"
,
"heutig (die heutigen Fahrzeuge)"
,
"das Homeoffice (Sg.) (Ich arbeite im Homeoffice.)"
,
"von aus (Ich arbeite viel von zu Hause aus.)"
,
"die Lebensqualität (Sg.)"
,
"die Mobilität (Sg.)"
,
"die Verkehrssituation, -en"
,
"Berufe und Positionen"
,
"der Bürgermeister,"
,
"die Pädagogin, -nen"
,
"der Praktikant, -en"
,
"die Doktorandin, -nen"
,
"gute Vorsätze"
,
"der Vorsatz, e"
,
"fassen (einen Vorsatz fassen)"
,
"sich vornehmen,"
,
"er nimmt vor, nahm vor, hat vorgenommen"
,
"realisieren"
,
"gelingen"
,
"der Anlass,"
,
"Silvester, (ohne Artikel)"
,
"die Ausrede, -n"
,
"die Gewohnheit, -en"
,
"die Wahrheit, -en"
,
"Musik und Instrumente"
,
"der Song, -s"
,
"die Melodie, -n"
,
"der Rhythmus, Rhythmen"
,
"das Musikinstrument, -e"
,
"der Bass, e"
,
"die Flöte, -n"
,
"das Piano, -s"
,
"das Schlagzeug, -e"
,
"die Violine, -n"
,
"die Auszeichnung, -en"
,
"der Preis, -e"
,
"bewerten"
,
"die Jury, -s"
,
"die Charts (Pl.)"
,
"der Affe, -n"
,
"der Elefant, -en"
,
"der Löwe, -n"
,
"sich aufhalten, er hält aufhielt auf, hat aufgehalten (Sie hält sich viel in der Küche der WG auf.)"
,
"dahin"
,
"dauernd"
,
"die Hürde, -n"
,
"in der Lage sein (Ich bin gerade nicht in der Lage, mich zu bewegen.)"
,
"der Leser, -"
,
"nach denken, er denkt nach, dachte nach, hat nachgedacht"
,
"das Hauptproblem, -e"
,
"das Prinzip, -ien"
,
"eine Rolle spielen (Geld spielt für viele eine wichtige Rolle im Leben.)"
,
"schweben"
,
"selber (ugs. für selbst)"
,
"stapeln"
,
"staubsaugen"
,
"der Stern, -e"
,
"etwas Süßes (Papa, bringst du uns was Süßes aus dems Supermarkt mit?)"
,
"übernehmen, er übernimmt, übernahm, hat übernommen"
,
"vergrößern"
,
"verständlich"
,
"die Vorfreude (Sg.)"
,
"das Zitat, -e"
,
"die Clique, -n"
,
"der Einfluss, e"
,
"das Verständnis (Sg.) (Verständnis haben für + A.)"
,
"sich verstehen (mit + D.), er versteht, verstand, hat verstanden (Ich verstehe mich gut mit meinem Mitbewohner.)"
,
"sich amüsieren (über + A.)"
,
"schätzen (Ich schätze, so tolle Freunde findet man selten.)"
,
"schätzen (an + D.) (An meiner Freundin schätze ich vor allem ihre Ehrlichkeit.)"
,
"halten, er hält, hielt, hat gehalten (Unsere Freundschaft hält schon eine Ewigkeit.)"
,
"aus den Augen verlieren (Meine Freunde aus der Kindheit habe ich leider aus den Augen verloren.)"
,
"alles beim Alten bleiben (Früher dachte ich, dass immer alles beim Alten bleibt.)"
,
"eingespannt sein (Ich bin beruflich stark eingespannt.)"
,
"gehören (zu + D.)"
,
"ins Gespräch kommen (mit + D.)"
,
"über den Weg laufen"
,
"Konflikte"
,
"der Konflikt, -e"
,
"der Streit, -e"
,
"die Kritik, -en"
,
"die Harmonie (Sg.)"
,
"die Mahnung, -en"
,
"die Scheidung, -en"
,
"die Forderung, -en"
,
"die Erwartung, -en"
,
"vor Gericht gehen"
,
"die Behauptung, -en"
,
"behaupten"
,
"feststellen"
,
"akzeptieren"
,
"sich einigen (auf + A.)"
,
"klären"
,
"erreichtern"
,
"beweisen, er beweist, bewies, hat bewiesen"
,
"sich aufregen (über + A.)"
,
"hassen"
,
"lügen, er lügt, log, hat gelogen"
,
"schweigen, er schweigt, schwieg, hat geschwiegen"
,
"stehlen, er stiehlt, stahl, hat gestohlen"
,
"übertreiben, er übertreibt, übertrieb, hat übertrieben"
,
"verhindern"
,
"sich verspäten"
,
"zusammen stoßen, er stößt zusammen, stieß zusammen, ist Zusammengestoßen"
,
"zwingen, er zwingt, zwang, hat gezwungen"
,
"angeblich"
,
"diplomatisch"
,
"Personen"
,
"arm, ärmer, am ärmsten"
,
"berufstätig"
,
"bereit sein (zu + D.)"
,
"erschöpft"
,
"der Ehegatte, -n"
,
"die Ehegattin, -nen"
,
"der Feind, -e"
,
"die Feindin, -nen"
,
"loben"
,
"Tiere"
,
"beißen, er beißt, biss, hat gebissen"
,
"fressen, er frisst, fraß, hat gefressen"
,
"scharf, schärfer, am schärfsten (Das Krokodil hat scharfe Zähne.)"
,
"kräftig"
,
"die Beute (Sg.)"
,
"die Ente, -n"
,
"die Fliege, -n"
,
"der Fuchs, e"
,
"die Giraffe, -n"
,
"der Hirsch, -e"
,
"das Krokodil, -e"
,
"die Mücke, -n"
,
"der Pinguin, -e"
,
"der Rabe, -n"
,
"die Schildkröte, -n"
,
"auf einer Versammlung"
,
"die Versammlung, -en"
,
"die Teilnahme (Sg.)"
,
"die Mehrheit, -en"
,
"die Presse (Sg.)"
,
"die Vorstellung, -en (Kommst du zur Vorstellung der neuen Präsidentin?)"
,
"die Rede, -n"
,
"die Erhöhung, -en"
,
"beschließen, er beschließt, beschloss, hat beschlossen"
,
"streiken"
,
"geheim"
,
"die Ausgabe, -n (Lesen Sie den Artikel in der Juli- Ausgabe.)"
,
"die Schlagzeile, -n"
,
"die Einzelheit,"
,
"das Institut, -e"
,
"die Kabine, -n"
,
"fürchten (Ich fürchte, dass Mpochann als Freund verliere.)"
,
"klicken (auf + A.)"
,
"stecken (in + D.)"
,
"eigen"
,
"kommerziell"
,
"erhalten sein (Die Briefe sind alt, aber gut erhalten.)"
,
"der Ersatz (Sg.)"
,
"die Gegenwart (Sg.)"
,
"die Gelegenheit, -en"
,
"der Grill, -s"
,
"die Konzentration (Sg.)"
,
"die Krankenkasse, -n"
,
"die Pflicht, -en"
,
"selbe (Inga und ich wohne im selben Haus.)"
,
"der Tod, -e"
,
"entgegen (+ G.)"
,
"um (+ A.) (die Gegend um Leipzig)"
,
"bevor"
,
"nachdem"
,
"seit/seitdem (Seitdem du den Job gewechselt hast, bist du immer gestresst.)"
,
"während (Ich putze, während ich telefoniere.)"
,
"fit und gesund bleiben"
,
"die Gymnastik (Sg.)"
,
"sich an strengen"
,
"das Gehirn, -e"
,
"der Geist, -er"
,
"raten (zu + D.), er rät, riet, hat geraten (Ich rate dir, auf deine Gesundheit zu achten.)"
,
"kühlen"
,
"ein cremen"
,
"der Schatten, -"
,
"Essen und Trinken"
,
"die Flüssigkeit, -en"
,
"die Hauptmahlzeit -en"
,
"der Knödel, -"
,
"der Pfannkuchen, -"
,
"der Schweinebraten, -"
,
"das Steak, -s"
,
"roh"
,
"blutig"
,
"essbar"
,
"eiskalt"
,
"rund um den Körper"
,
"atmen"
,
"blass"
,
"schwindelig"
,
"die Brust, e"
,
"die Schulter, -п"
,
"leiden (an + D.), er leidet, litt, hat gelitten im Krankenhaus"
,
"die Heilung, -en"
,
"die Medizin (Sg.)"
,
"das Schmerzmittel, -"
,
"einnehmen, er nimmt ein, nahm ein, hat eingenomme (Medikamente einnehmen)"
,
"auf lösen"
,
"verschreiben, er verschreib verschrieb, hat verschriebe"
,
"krank schreiben"
,
"der Krankenwagen, -"
,
"die Notaufnahme, -n"
,
"die Versichertenkarte, -n"
,
"Ender Klinikaufenthalt, -e"
,
"die Entlassung, -en"
,
"die Besuchszeit, en"
,
"der Haupteingang, e"
,
"der Notausgang, #e"
,
"der Notruf, -e"
,
"der Pfleger, -"
,
"zur Verfügung stehen"
,
"aufbewahren"
,
"untersagt sein"
,
"warnen (vor + D.)"
,
"zuständig (für + A.)"
,
"Kleidung und Hygiene"
,
"der Bademantel, "
,
"der Hausschuh, -e"
,
"der Schlafanzug, e"
,
"die Zahnbürste, -n"
,
"die Zahnpasta, -en"
,
"kämmen"
,
"die Drogerie, -n"
,
"Technik"
,
"der Alarmknopf, e"
,
"der Apparat, -e"
,
"die Bedienungsanleitung, -en"
,
"die Chipkarte, -n"
,
"die Fernbedienung, -en"
,
"das Festnetz (Sg.)"
,
"Musik und Emotionen"
,
"der Klang, e"
,
"der Jazz (Sg.)"
,
"die Klassik (Sg.)"
,
"klassisch"
,
"das Stück, -e (Ich spiele ein Stück von Mozart.)"
,
"beruhigend"
,
"die Wirkung, -en"
,
"empfinden, er empfindet, empfand, hat empfunden"
,
"spüren"
,
"die Forscherin, -nen"
,
"feierlich"
,
"besondere Orte"
,
"barrierearm"
,
"familienfreundlich"
,
"fantasievoll"
,
"geeignet (für + Α.)"
,
"interaktiv"
,
"ungewöhnlich"
,
"sich wundern (über + A.)"
,
"alltäglich"
,
"ausreichend"
,
"die Beerdigung, -en"
,
"betragen, er beträgt, betrug, hat betragen"
,
"bisher"
,
"brauchen zu (Sie brau- chen mich nur zu rufen, wenn ich Ihnen helfen soll)"
,
"einigermaßen"
,
"einschließlich"
,
"vermutlich"
,
"gelangen"
,
"glatt"
,
"grundsätzlich"
,
"kleben"
,
"das Rätsel, -"
,
"kommen (auf + A.), er kommt, kam, ist gekomme (Ich komme gerade nicht auf die Lösung.)"
,
"durch den Kopf gehen"
,
"mithilfe (von + D.)"
,
"der Moderator, -en (Sg.)"
,
"die Motivation"
,
"motiviert"
,
"die Nachfrage, -n"
,
"obere"
,
"die Reklame, -n"
,
"der Rest, -e"
,
"die Rücksicht (Sg.) "
,
"zur Seite gehen"
,
"sichtbar"
,
"sinken"
,
"überprüfen"
,
"einerseits ..., andererseits"
,
"entweder... oder"
,
"nicht nur ..., sondern auch"
,
"sowohl ... als auch"
,
"weder...noch"
,
"zwar .., aber"
,
"Kunstobjekte"
,
"das Kunstwerk, -e"
,
"die Installation, -en"
,
"die Statue, -n"
,
"der Brunnen, -"
,
"die Auktion, -en"
,
"das Original, -e (Das Bild ist ein Original, keine Kopie.)"
,
"original"
,
"in der Galerie"
,
"die Galerie, -n"
,
"die Eröffnung, -en"
,
"an regen (zu + D.) (Das Bild regt zum Nachdenken an.)"
,
"an sprechen, er spricht an, sprach an, hat angesprochen (Das Bild spricht mich nicht an.)"
,
"die Ölfarbe, -n"
,
"der Geschmack, er"
,
"der Käufer, -"
,
"die Käuferin, -nen"
,
"künstlerisch"
,
"sich handeln (um + A.)"
,
"beschädigen"
,
"die Putzfirma, -firmen"
,
"rund um die Musik musizieren"
,
"bewegen (Die Musik bewegt mich. Sie macht mich traurig.)"
,
"der Schulchor, e"
,
"das Volkslied, -er"
,
"der Gedanke, -п"
,
"die Tradition, -en"
,
"traditionell"
,
"auf der Bühne"
,
"das Theaterstück, -e"
,
"das Impro-Theater, -"
,
"improvisieren"
,
"erfinden, er erfindet, erfand, hat erfunden"
,
"an wenden (eine beson- dere Technik anwenden)"
,
"herumspringen, er spring herum, sprang herum, ist herumgesprungen"
,
"rennen, er rennt, rannte, ist gerannt"
,
"schreien, er schreit, schrie hat geschrien"
,
"das Kostüm, -e"
,
"die Uniform, -en"
,
"der Dieb, -e"
,
"die Diebin, -nen"
,
"rund um die Aufführung"
,
"auf führen"
,
"auftreten, er tritt auf, trat auf, ist aufgetreten"
,
"um/setzen (eigene Ideen umsetzen)"
,
"veranstalten (eine Feler veranstalten)"
,
"sich schminken (Für ihre Rolle schminkt sie sich besonders.)"
,
"die Frisur, en"
,
"die Mode, -n"
,
"die Darstellung, -en "
,
"die Vorstellung, -en"
,
"zusehen, er sieht zu, sah zu, hat zugesehen (Ich seh den Schauspielern zu.)"
,
"die Broschüre, -n"
,
"das Büfett, -s"
,
"der Snack, -s"
,
"konsumieren"
,
"Gegenstände"
,
"die Rose, -n"
,
"der Spiegel,-"
,
"der Topf, e"
,
"die Vase, -n"
,
"die Couch, -s"
,
"der Backofen,"
,
"die Briefmarke, -n"
,
"der Kuli, -s"
,
"Eigenschaften"
,
"clever"
,
"chaotisch"
,
"durcheinander (Alles ist durcheinander.)"
,
"begrenzt"
,
"rund (Das Gebäude hat runde Formen.)"
,
"steil"
,
"weich"
,
"talentiert"
,
"zeitlos"
,
"begeistert"
,
"dankbar (für + A.)"
,
"behandeln"
,
"besprechen, er bespricht, besprach, hat besprochen"
,
"bestehen (aus + D.), er besteht, bestand, hat bestanden (Die Gruppe besteht aus fünf Personen.)"
,
"die Biene, -n"
,
"ein sperren"
,
"einzig"
,
"ersetzen"
,
"der Frieden (Sg.)"
,
"her sein (Das ist schon lange her.)"
,
"hinauf (Es geht weit hinauf.)"
,
"das Inland (Sg.)"
,
"die Mauer, -n"
,
"der Meister, -"
,
"die Meisterin, -nen"
,
"das Missverständnis, -se"
,
"die Nachbarschaft (Sg.)"
,
"der Neffe, -n"
,
"nicht..., sondern"
,
"heimlich"
,
"scheinbar"
,
"schließen, er schließt, ber schloss, hat geschlossen (Freundschaft schließen)"
,
"das Referat, -e"
,
"das Treppenhaus,"
,
"die Stufe, -n"
,
"die Umleitung, -en"
,
"vergeblich"
,
"das Virus, Viren"
,
"die Qualifikation, -en"
,
"der Schwerpunkt, -e"
,
"das Treffen, -"
,
"Miteinander"
,
"die Gemeinschaft, -en"
,
"die Gesellschaft, -en"
,
"das Zusammenleben (Sg.)"
,
"der Wert, -e"
,
"der Respekt (Sg.)"
,
"die Meinungsfreiheit (Sg.)"
,
"die Gleichberechti- gung (Sg.)"
,
"die Würde (Sg.)"
,
"die Solidarität (Sg.)"
,
"die Gerechtigkeit (Sg.)"
,
"die Ehrlichkeit (Sg.)"
,
"die Fairness (Sg.)"
,
"die Zivilcourage (Sg.)"
,
"die Sicherheit (Sg.)"
,
"die Erziehung (Sg.)"
,
"das Recht, -e regeln"
,
"die Minderheit, -en"
,
"das Vorurteil, -e"
,
"die Toleranz (Sg.)"
,
"Engagement"
,
"ehrenamtlich"
,
"die Hilfsbereitschaft (Sg.)"
,
"die Nachhilfe (Sg.)"
,
"bewältigen (eine Aufgabe bewältigen)"
,
"die Mühe, -n"
,
"das Vorhaben, -"
,
"der Pate, -n"
,
"die Patin, -nen"
,
"die Patenschaft (Sg.)"
,
"die Not, e (in der Not helfen)"
,
"bedürftig"
,
"die Berufsfeuerwehr, -en"
,
"die Erste Hilfe (Sg.)"
,
"spenden"
,
"Behörden und Arbeitswelt"
,
"das Amt, er"
,
"der Anspruch, e (Sie haben Anspruch auf 30 Tage Urlaub.)"
,
"die Vorschrift, -en"
,
"ab melden"
,
"zulassen, er lässt zu, ließ zu, hat zugelassen"
,
"verantwortlich (für + A.)"
,
"zuverlässig"
,
"eine Entscheidung treffen"
,
"das Arbeitsamt, er"
,
"die Arbeitsstelle, -n"
,
"ein nehmen, er nimmt, ein, nahm ein, hat eingenommen (Geld einnehmen)"
,
"finanzieren"
,
"die Dienstleistung, -en"
,
"Politik"
,
"die Demokratie, -n"
,
"ab stimmen"
,
"der Bundestag (Sg.)"
,
"der/die Abgeordnete, -n"
,
"die Regierung, -en"
,
"der Bundeskanzler, -"
,
"die Bundeskanzlerin, -nere"
,
"der Minister, -"
,
"die Ministerin, -nen"
,
"der Kandidat, -en"
,
"die Kandidatin, -nen"
,
"die Bürgerversamm- Mlung, -en"
,
"die EU / Europäische Union (Sg.)"
,
"der Mitgliedsstaat, -en"
,
"die Organisation, -en"
,
"die Vertretung, -en"
,
"der Sitz, -e (Die politische Vertretung hat ihren Sitz im Rathaus.)"
,
"erfüllen (eine wichtige Funktion erfüllen)"
,
"schließen, er schließt, schloss, hat geschlossen (einen Vertrag schließen)"
,
"unterzeichnen"
,
"national"
,
"Migration und Flucht"
,
"die Flucht, -en"
,
"der Krieg, -e (Krieg führen)"
,
"die Aufnahme (Sg.)"
,
"die Integration (Sg.)"
,
"der Migrant, -en"
,
"die Migrantin, -nen"
,
"Lebensmittel"
,
"die Apfelsine, -n"
,
"die Orange, -n"
,
"die Aprikose, -n"
,
"die Pflaume, -n"
,
"die Zwetschge/ Zwetschke, -n"
,
"die Konfitüre, -п"
,
"die Semmel, -n (Süddeutsch)"
,
"das Hörnchen, -"
,
"das Croissant, -s"
,
"die Margarine, -n"
,
"das Milchprodukt, -e"
,
"die Vollmilch (Sg.)"
,
"der Quark (Sg.)"
,
"die Schlagsahne (Sg.)"
,
"der Pudding, -e/-s"
,
"das Hackfleisch (Sg.)"
,
"das Hühnchen, -"
,
"der/das Ketchup, -s"
,
"die Soße, -n"
,
"das Gewürz,-"
,
"würzen"
,
"die Lieferung, -en"
,
"zunächst"
,
"im Lauf (+ G.) (im Lauf der Zeit)"
,
"übrig"
,
"das Ding, -e (Das ist voll mein Ding.)"
,
"verlassen, er verlässt, verließ, hat verlassen"
,
"der Vortrag, e"
,
"sichern (Bildung sichert die Zukunft.)"
,
"heraus finden, er findet heraus, fand heraus, hat herausgefunden"
,
"körperlich"
,
"blind"
,
"der Humor (Sg.)"
,
"die Auswahl (Sg.) (eine Auswahl treffen)"
,
"endgültig"
,
"entsorgen"
,
"erscheinen, er erscheint, erschien, ist erschienen"
,
"werden (Er wird in Erste Hilfe ausgebildet.)"
,
"die Zone, -n"
,
"in der Stadt"
,
"der Fußgänger, -"
,
"der Stadtbummel, -"
,
"das Schaufenster, -"
,
"anschauen"
,
"das Bürogebäude, -"
,
"das Reinigungsfahrzeug, -"
,
"abbiegen, er biegt ab, bog ab, ist abgebogen"
,
"das Tempo, Tempi"
,
"der Schmutz (Sg.)"
,
"der Dreck (Sg.)"
,
"der Stadtmensch, -en"
,
"der Landmensch, -en"
,
"der/die Obdachlose, -n"
,
"das Freizeitangebot, -e"
,
"der Rand, er"
,
"städtisch"
,
"das Garagentor, -e"
,
"herunter fahren, er fährt"
,
"herunter, fuhr herunter, ist heruntergefahren"
,
"im Krankenhaus"
,
"der Dienst, -e"
,
"der Nachtdienst, e"
,
"die Schicht, -en"
,
"die Frühschicht, -en"
,
"die Übergabe, -n"
,
"unruhig"
,
"schwer (Es gab einen schweren Unfall.)"
,
"ein liefern"
,
"der/die Verletzte, -n"
,
"in der Bäckerei"
,
"die Backstube, -n"
,
"der Korb, e (ein Korb mit frischem Brot)"
,
"laden, er lädt, lud, hat geladen"
,
"konzentriert"
,
"Städte-Ranking"
,
"das Ranking, -s"
,
"die Fachleute (Pl.)"
,
"im Vordergrund stehen"
,
"der Mittelpunkt, -e (im Mittelpunkt stehen)"
,
"abhängen (von + D.), er hängt ab, hing ab, hat abgehangen (Das Ergebnis hängt von vielen Faktoren ab.)"
,
"berücksichtigen"
,
"werten (Das Wetter wird nicht gewertet.)"
,
"betreffen, er betrifft, betraf, hat betroffen"
,
"Lebensqualität einer Stadt"
,
"die Work-Life-Balance (Sg.)"
,
"gesellschaftlich (Welche gesellschaftlichen Werte gibt es?)"
,
"die Gender-Gerechtig- keit (Sg.)"
,
"die Diversität (Sg.)"
,
"das Gesundheitssystem,"
,
"die Kinderbetreuung (Sg.)"
,
"die Elternzeit (Sg.)"
,
"die Intensität, -en (die Intensität der Arbeit)"
,
"die Arbeitslosigkeit (Sg.)"
,
"die Hochschule, -n"
,
"der Zugang, e"
,
"fest legen (Gesetze legen den Anspruch auf Urlaub fest.)"
,
"rechtlich"
,
"Projekte für die Stadt"
,
"die Stadträtin, -nen"
,
"das Budget, -s"
,
"der Wohnbau (Sg.)"
,
"der Umbau, -ten"
,
"die Renovierung, -en"
,
"die Initiative, -n"
,
"die Kita, -s"
,
"eine Diskussion führen"
,
"die Diskussion, -en"
,
"einlgehen (auf + A.), er geht ein, ging ein, ist eingegangen"
,
"recht geben"
,
"außer Acht lassen"
,
"vermitteln"
,
"unterbrechen, er unterbricht, unterbrach, hat unterbrochen"
,
"aus reden (Lassen Sie mich bitte ausreden.)"
,
"fort setzen"
,
"eine Stadt kennenlernen"
,
"der Tourismus (Sg.)"
,
"die Rundfahrt, -en"
,
"rum fahren, er fährt rum, fuhr rum, ist rumgefahren"
,
"das Wahrzeichen, -"
,
"das Denkmal, er"
,
"die Fassade, -n"
,
"die Gasse, -n"
,
"schmal"
,
"mittendrin"
,
"fern"
,
"um... herum (Um die Altstadt herum gibt es ...)"
,
"fließen, er fließt, floss, ist geflossen"
,
"springen, er springt, sprang, ist gesprungen"
,
"steigen, er steigt, stieg, ist gestiegen (auf einen Turm steigen)"
,
"rauf fahren, er fährt rauf, fuhr rauf, ist raufgefahren"
,
"rollen (mit dem Fahrrad durch die Stadt rollen)"
,
"der/die Einheimische, -n"
,
"der Dialekt, -e"
,
"das Billett, -s (Schweizerdeutsch)"
,
"das Velo, -s (Schweizerdeutsch)"
,
"sich auf den Weg machen"
,
"hinein gehen, er geht hinein, ging hinein, ist hineingegangen"
,
"hindern (an + D.) (Niemand hindert ihn daran.)"
,
"der Sozialarbeiter, -"
,
"der Flüchtling,"
,
" anlgehen, er geht an, ging an, ist angegangen (Das geht keinen etwas an.)"
,
"irgendein, irgendeine, irgendwelche (Kennst du irgendein nettes Café?)"
,
"anscheinend"
,
"eindeutig"
,
"Geld und Finanzen"
,
"die Ausgabe, -n"
,
"die Einnahme, -n"
,
"die Zahlung, -en"
,
"die Schulden (Pl.)"
,
"das Bargeld (Sg.)"
,
"der Schein, -e"
,
"die Münze, -n"
,
"das Kleingeld (Sg.)"
,
"der Geldbetrag, e"
,
"der Beleg, -e"
,
"gering (Es fallen nur geringe Kosten an.)"
,
"pauschal"
,
"monatlich (die monatlicher Kosten)"
,
"fällig (Die Rechnung ist sofort fällig.)"
,
"die Rate, -n"
,
"versäumen"
,
"regieren (Geld regiert die Welt?)"
,
"Bankgeschäfte"
,
"das Bankgeschäft, -e"
,
"der/die Bankangestellte, n"
,
"die BIC, -s"
,
"die IBAN, -s"
,
"die Kontoeröffnung, en"
,
"die Kontodaten (Pl.)"
,
"die Kontoführungs- gebühr, -en"
,
"der Kontoauszug, e"
,
"der Dauerauftrag, e"
,
"der Kredit, -e"
,
"aufnehmen, er nimmt auf, nahm auf, hat aufgenommen (einen Kredit aufnehmen)"
,
"fristgerecht"
,
"abhängig (Die Zinsen sind von der Höhe des Kredits abhängig.)"
,
"an fallen, er fällt an, fiel an, ist angefallen (Es fallen Gebühren an.)"
,
"angeben, er gibt an, gab an, hat angegeben (Bitte geben Sie Ihren Namen an"
,
"eintragen, er trägt ein, trug ein, hat eingetragen"
,
"ein zahlen"
,
"gut schreiben, er schreibt gut, schrieb gut, hat gutgeschrieben (einen Betrag gutschreiben)"
,
"überziehen, er überzieht, überzog, hat überzogen (ein Konto überziehen)"
,
"der Zins, -en"
,
"der Verlust, -e (Melden Sie den Verlust Ihrer Bankkarte sofort.)"
,
"die Kopie, -n"
,
"Online-Banking"
,
"das Online-Banking (Sg.)"
,
"der Benutzername, -n"
,
"sich einfloggen"
,
"der Log-in, -s"
,
"die Fotoüberweisung, -en"
,
"die Ansicht, -en "
,
"der Webseite ändern.)"
,
"das Menü, -s (Klicken Sie im Menü auf „Start)"
,
"Globalisierung"
,
"die Globalisierung (Sg.)"
,
"global"
,
"fortschrittlich"
,
"der Konsument, -en"
,
"die Konsumentin, -nen"
,
"der Verbraucher, -"
,
"die Verbraucherin, -nen"
,
"der Weltmarkt, e"
,
"das Produktangebot, -e"
,
"verlegen (die Produktion ins Ausland verlegen)"
,
"der Wohlstand (Sg.)"
,
"die Forschung, -en"
,
"die Wissenschaft, -en"
,
"nützen (Nützt die Globalisierung allen?)"
,
"profitieren (von + D.)"
,
"problematisch"
,
"pro"
,
"contra (Bist du pro oder contra Globalisierung?)"
,
"der Pluspunkt, -e"
,
"Gewissensfragen"
,
"das Gewissen, -"
,
"befürworten"
,
"tolerieren"
,
"merken (Er merkte, dass er nicht alles bezahlt hatte.)"
,
"bedenken, er bedenkt, bedachte, hat bedacht"
,
"betrügen, er betrügt, betrog, hat betrogen"
,
"die Sicht, -en (aus meiner Sicht)"
,
"der Vorwurf, e"
,
"die Schuld (Sg.)"
,
"geraten (Sie ist ohne Schuld in finanzielle Not geraten.)"
,
"das Versprechen, -"
,
"wünschenswert"
,
"der Zustand, e"
,
"aus ziehen, er zieht aus, zog aus, ist ausgezogen"
,
"fort (Er wohnt mehr als 400 km weit fort.)"
,
"drin sein (Im Portemonnaie ist nichts drin.)"
,
"zu Wort kommen"
,
"stammen (aus + D.)"
,
"überleben"
,
"irgendwo"
,
"nirgendwo"
,
"je..., desto/umso"
,
"der Kasten, ="
,
"der Staub (Sg.)"
,
"teilweise"
,
"zusätzlich"
,
"beten"
    ];


function generateRandomText(wordCount, outputElementId, wordList) {
    let randomWords = [];
    
    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        randomWords.push(wordList[randomIndex]);
    }

    document.getElementById(outputElementId).textContent = randomWords.join(' ');
}

// Event listener untuk Generator 1
document.getElementById('generateButton1').addEventListener('click', function() {
    const wordCount = parseInt(document.getElementById('wordCount1').value);
    
    if (isNaN(wordCount) || wordCount <= 0) {
        alert("Silakan masukkan jumlah kata yang valid.");
        return;
    }

    generateRandomText(wordCount, 'randomText1', words);
});

// Event listener untuk Generator 2
document.getElementById('generateButton2').addEventListener('click', function() {
    const wordCount = parseInt(document.getElementById('wordCount2').value);
    
    if (isNaN(wordCount) || wordCount <= 0) {
        alert("Silakan masukkan jumlah kata yang valid.");
        return;
    }

    generateRandomText(wordCount, 'randomText2', words1);
});

document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan elemen-elemen menu
    var menuButton = document.getElementById("menuButton");
    var dropdownMenu = document.getElementById("dropdownMenu");
    var menuButton1 = document.getElementById("menuButton1");
    var dropdownMenu1 = document.getElementById("dropdownMenu1");
 
    
    function closeAllDropdowns() {
        dropdownMenu.style.display = "none";
        dropdownMenu1.style.display = "none";
    }

    // Event listener untuk membuka/menutup menu pertama
    menuButton.addEventListener("click", function() {
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none"; // Menutup menu jika sudah terbuka
        } else {
            closeAllDropdowns(); // Menutup semua dropdown
            dropdownMenu.style.display = "block"; // Menampilkan menu yang dipilih
        }
    });

    // Event listener untuk membuka/menutup menu kedua
    menuButton1.addEventListener("click", function() {
        if (dropdownMenu1.style.display === "block") {
            dropdownMenu1.style.display = "none"; // Menutup menu jika sudah terbuka
        } else {
            closeAllDropdowns(); // Menutup semua dropdown
            dropdownMenu1.style.display = "block"; // Menampilkan menu yang dipilih
        }
    });

    // Menutup dropdown saat klik di luar menu
    window.addEventListener("click", function(event) {
        if (!event.target.matches('#menuButton') && !event.target.matches('#menuButton1')) {
            closeAllDropdowns();
        }
    });
});





