import { latLng } from 'leaflet';

export const content = {
    popupTitle: `Witaj na Mapie Oznaczeń Saperskich`,
    popupP1: `Celem stworzonej przez nas mapy jest ułatwienie dotarcia do pamiątek z 1945 roku, pozostawionych przez specjalne oddziały saperskie rozminowujące Warszawę.`
}

export const state = {
    'unknown': 'Niebezbepieczony',
    'veryGood': 'Zabezpieczony',
    'veryBad': 'Bardzo zły',
    'destroyed': 'Zniszczony'
}
export const markers = [
    {
      name: 'Skolimowska 3',
      description: `Oznaczenie saperskie istnieje do dnia dzisiejszego, ale wciąż pozostaje niezabezpieczone.
        Zwróciliśmy się z prośbą do Urzędu Dzielnicy Mokotów i do służb konserwatorskich o interwencję w tej sprawie.
        Napis jest nieczytelny, ale po jego zarysie można wnioskować, że oznacza “Dom rozminowany. 76 Zamsz”,
        co świadczy, że tak jak w pozostałych częściach Mokotowa rozminowywał go batalion pod dowództwem “Zamsza`,
      latLng: latLng(52.21164, 21.02177),
      state: 'unknown',
    },
    {
      name: 'Willowa 6',
      description: `Podejmujemy próby mające na celu zabezpieczenie napisu przed dalszą degradacją i wandalizmem.
        Napis obecnie jest nieczytelny i ukryty pod graffiti,
        jednakże zdjęcia którymi dysponujemy pozwalają odczytać część oznaczenia: “Dom rozminowany. 26 [II]? Zamsz..[..]”.
        Bez wątpienia jest to oznaczenie dowódcy bataliony “Zamsza”, który podobne zostawił na ulicy Głogowej 27, Skolimowskiej 3 i Narbutta 3a.`,
      latLng: latLng(52.20749,21.02398),
      state: 'unknown',
    },
    {
      name: 'Wawelska 60',  // zabezpieczony
      latLng: latLng(52.21656, 20.98707),
      state: 'veryGood',
    },
    {
      name: 'Białobrzeska 39', // zabezpieczony
      latLng: latLng(52.21711, 20.97658),
      state: 'veryGood',
    },
    {
      name: 'Hołowki 3',// zabezpieczony
      description: `Budynek przy ulicy Hołówki 3 to ewenement w kwestii zachowania oznaczeń saperskich.
        Istnieje ich tutaj aż 6. Zostały pieczołowicie zabezpieczone przez spółdzielnię mieszkaniową 
        i można je podziwiać w idealnym stanie zachowania do dnia dzisiejszego. 
        Wszystkie oznaczenia pozostawił po sobie 4 batalion saperów LWP pod dowództwem Władysława Borowicza`,
      latLng: latLng(52.20830, 21.04612),
      state: 'veryGood',
    },
    {
      name: 'Grójecka 41', // zabezpieczony
      latLng: latLng(52.21710, 20.98230),
      state: 'veryGood',
    },
    {
      name: 'Litewska 16', // zabezpieczony
      description: `“Dom rozminowany. Borowicz .76 dnia 1945” informuje o tym,
        że budynek został rozminowany przez saperów LWP z 4 batalionu pod dowództwem Władysława Borowicza.
        W roku 2019 oznaczenie saperskie zostało zabezpieczone przez właściciela obiektu.`,
      latLng: latLng(52.21709, 21.02027),
      state: 'veryGood',
    },
    {
      name: 'Aleja Niepodległości 243', // zabezpieczony
      description: `Na siedzibie Służby Wywiadu Wojskowego znajduje się oznaczenie “Dom rozminowany. 74 Kus”.
        Oznacza to, że budynek rozminowywał 51 batalion saperów LWP pod dowództwem Władysława Kusia.`,
      latLng: latLng(52.22136, 21.00452),
      state: 'veryGood',
    },
    {
      name: 'Aleja Niepodległości 120',
      description: `Na tym budynku, po prawej stronie od wejścia frontowego, mniej więcej na wysokości 160cm od ziemi, 
        znajdował się napis “Dom rozminowany. 6 II 1945. 76 Zamsz”.
        Widoczny na zdjęciu Zbyszko Siemaszki, które znajduje się w Narodowym Archiwum Cyfrowym.
        Za rozpoznanie lokalizacji dziękujemy twórcom strony: Warszawska Identyfikacja.`,
      latLng: latLng(52.20259, 21.01084),
      state: 'destroyed',
    },
    {
      name: 'Filtrowa 57',
      description: `Przed zniknięciem napis był bardzo nieczytelny.
        Prawdopodobnie widniało na nim “Sprawdzono. Min nie znaleziono”, ale odczytanie całości na podstawie posiadanych zdjęć jest niemożliwe. `,
      latLng: latLng(52.21841, 20.99915),
      state: 'destroyed',
    },
    {//
      name: 'Narbutta 3a', // zabezpieczony
      latLng: latLng(52.20704,21.02093),
      state: 'veryGood',
    },
    {//
      name: 'Piękna 1b',
      description: `Jedyne zachowane oznaczenie saperskie namalowane zieloną farbą.
        Budynek należy do m.st.Warszawy, ale jest wydzierżawiony Ministerstwu Sprawiedliwości.
        Nieustannie staramy się o zabezpieczenie tej pamiątki.`,
      latLng: latLng(52.223686970518074, 21.02291513951925),
      state: 'unknown',
    },
    {
    name: 'Klonowa 12',
    description: `
      Napis zniknął przed 2009 rokiem w czasie remontu elewacji.
      Nie zachowały się zdjęcia, które mogą ostatecznie potwierdzić, co było zawarte na tym oznaczeniu saperskim.
      Prawdopodobnie część napisu stanowiło: “26 II 1945 Borowicz [...]”`,
    latLng: latLng(52.21240, 21.02359),
    state: 'destroyed'
    },
    {
    name: 'Żelazna 16/ Chmielna 73b',
    description: `W sierpniu 2018 roku, założyciel Stowarzyszenia “Kamień i co?” był naocznym świadkiem przykrywania tego oznaczenia saperskiego tynkiem wtórnym.
      Pomimo posiadania legitymacji Społecznego Opiekuna Zabytków i poinformowania służb konserwatorskich, nie udało się ocalić tej pamiątki.
      Na domu kolejowym przy Żelaznej widniał napis “Dom sprawdzony… Kus”. Oznacza to, że rozminowywał go batalion LWP pod dowództwem Władysława Kusia.`,
    latLng: latLng(52.22763, 20.99552),
    state: 'destroyed'
    },
    {
    name: 'Mur Konesera od Strony Białostockiej',
    description: `Na jednym z murów znajdujących się na terenie dzisiejszego “Centrum Praskiego Koneser” znajdował się napisany cyrylicą napis “Min niet” wraz ze strzałką.`,
    latLng: latLng(52.255963, 21.043016),
    state: 'destroyed'
    },
    {
    name: 'Gagarina 35',
    description: `Do 2012 roku w tym miejscu istniał napisany czarną farbą (lub smołą) i nieczytelny w tamtym okresie napis “Sprawdzono. Min nie ma”.
      Niestety nie wiadomo, który batalion LWP pozostawił oznaczenie.`,
    latLng: latLng(52.20670, 21.03296),
    state: 'destroyed'
    },
    {
      name: 'Głogowa 27',
      description: `Oznaczenie saperskie w tym miejscu było doskonale widoczne i zachowane w bardzo dobrym stanie.
      Niestety mimo to, zniknęło pod warstwą farbą elewacyjnej.
      Na oznaczeniu mogliśmy odczytać następującą informację: :Dom rozminowany. 10 II 45. 76 Zamsz”.`,
      latLng: latLng(52.19187, 21.00013),
      state: 'destroyed'
    },
    {
      name: 'Wilcza 22',
      description:  `Na elewacji kamienicy widniał napis “Dom sprawdzono. Min nie ma”.
        Niestety został on otynkowany w czasie remontu elewacji kamienicy w latach 2007-2008.
        Inwestor postanowił przywrócić mu pamięć w formie tablicy poliwęglanowej z informacją, która istnieje do dnia dzisiejszego.`,
      latLng: latLng(52.225661531590404, 21.018212540763134),
      state: 'destroyed'
    },
    {
      name: 'Gimnastyczna 3',
      description: `Oznaczenie jest w fatalnym stanie. Trudno coś na nim odczytać,
      ale prawdopodobnie część napisanego czarną farbą (lub smołą) napisu stanowi “Dom rozminowany”`,
      latLng: latLng(52.19667598165929, 21.00039926959749),
      state: 'veryBad'
    },
  ]
