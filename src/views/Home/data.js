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
      latLng: latLng(52.21164, 21.02177),
      state: 'unknown',
    },
    {
      name: 'Willowa 6',
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
      latLng: latLng(52.21709, 21.02027),
      state: 'veryGood',
    },
    {//
      name: 'Narbutta 3a', // zabezpieczony
      latLng: latLng(52.20704,21.02093),
      state: 'veryGood',
    },
    {//
      name: 'Piękna 1b',
      latLng: latLng(52.223686970518074, 21.02291513951925),
      state: 'unknown',
    },
    {
    name: 'Klonowa 12',
    latLng: latLng(52.21240, 21.02359),
    state: 'destroyed'
    },
    {
    name: 'Chmielna 73b',
    latLng: latLng(52.22763, 20.99552),
    state: 'destroyed'
    },
    {
    name: 'Mur Konesera od Strony Białostockiej',
    latLng: latLng(52.255963, 21.043016),
    state: 'destroyed'
    },
    {
    name: 'Gagarina 35',
    latLng: latLng(52.20670, 21.03296),
    state: 'destroyed'
    },
    {
      name: 'Głogowa 27',
      latLng: latLng(52.19187, 21.00013),
      state: 'destroyed'
    },
    {
        name: 'Wilcza 22',
        description:  'Zniszczony przez inwestora odnawiajacego kamienicę, istnieje tam symboliczna i wtórna pleksi informujaca ze napis byl',
        latLng: latLng(52.225661531590404, 21.018212540763134),
        state: 'destroyed'
    },
    {
        name: 'Gimnastyczna 3',
        latLng: latLng(52.19667598165929, 21.00039926959749),
        state: 'veryBad'
      },
  ]
