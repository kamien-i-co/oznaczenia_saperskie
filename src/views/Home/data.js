import { latLng } from 'leaflet';

export const state = {
    'unknown': 'Niebezbepieczony',
    'veryGood': 'Zabezpieczony',
    'veryBad': 'Bardzo zły',
    'destroyed': 'Zniszczony'
}
export const markers = [
    {
      name: 'Skolimowska 3',
      latLng: latLng(52.21158,21.02177),
      state: 'unknown',
    },
    {
      name: 'Willowa 6',
      latLng: latLng(52.20749,21.02398),
      state: 'unknown',
    },
    {
      name: 'Wawelska 60',  // zabezpieczony
      latLng: latLng(52.21651,20.98738),
      state: 'veryGood',
    },
    {
      name: 'Białobrzeska 39', // zabezpieczony
      latLng: latLng(52.21705, 20.97651),
      state: 'veryGood',
    },
    {
      name: 'Hołowki 3',// zabezpieczony
      latLng: latLng(52.20830, 21.04612),
      state: 'veryGood',
    },
    {
      name: 'Grójecka 41', // zabezpieczony
      latLng: latLng(52.21706, 20.98273),
      state: 'veryGood',
    },
    {
      name: 'Litewska 16', // zabezpieczony
      latLng: latLng(52.21701, 21.02028),
      state: 'veryGood',
    },
    {//
      name: 'Narbutta 3a', // zabezpieczony
      latLng: latLng(52.20704,21.02093),
      state: 'veryGood',
    },
    {//
      name: 'Piekna 1b',
      latLng: latLng(52.223686970518074, 21.02291513951925),
      state: 'unknown',
    },
    {
    name: 'Klonowa 12',
    latLng: latLng(52.21243, 21.02400),
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
    name: 'Piękna 3',
    latLng: latLng(52.22372092111382, 21.022374427057937),
    state: 'destroyed'
    },
    {
        name: 'Wilcza 22, zniszczony przez inwestora odnawiajacego kamienicę, istnieje tam symboliczna i wtórna pleksi informujaca ze napis byl',
        latLng: latLng(52.225661531590404, 21.018212540763134),
        state: 'destroyed'
    },
    {
        name: 'Gimnastyczna 3',
        latLng: latLng(52.19667598165929, 21.00039926959749),
        state: 'veryBad'
      },
  ]
