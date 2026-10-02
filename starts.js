/*
  Start positions for the map in index.html.

  MAP     The base map image and the size of its coordinate grid.
          Set width and height to match your map's viewBox BEFORE picking
          positions, e.g. viewBox="0 0 1600 1000" means width 1600, height 1000.
  STARTS  x and y in that grid. "place" is optional and shows on hover.

  Easiest way to fill this in: open the site, press "Pick start positions",
  click the map for each lord, then "Copy starts.js" and paste over this file.
*/
window.MAP = { src: "map.svg", width: 4097, height: 3191 };

window.STARTS = {

  // The Empire
  "Elspeth von Draken": { x: 1571, y: 1212 },
  "Boris Todbringer": { x: 1595, y: 866 },
  "Markus Wulfhart": { x: 442, y: 1995 },
  "Karl Franz": { x: 1495, y: 1072 },
  "Balthasar Gelt": { x: 3300, y: 1767 },
  "Volkmar the Grim": { x: 1595, y: 2368 },

  // Dwarfs
  "Malakai Makaisson": { x: 2008, y: 416 },
  "Thorek Ironbrow": { x: 1950, y: 2453 },
  "Thorgrim Grudgebearer": { x: 2123, y: 1391 },
  "Ungrim Ironfist": { x: 2147, y: 1078 },
  "Grombrindal": { x: 74, y: 605 },
  "Belegar Ironhammer": { x: 1537, y: 1652 },

  // Greenskins
  "Gorbad Ironclaw": { x: 2144, y: 1831 },
  "Grom the Paunch": { x: 1294, y: 1336 },
  "Grimgor Ironhide": { x: 2721, y: 1023 },
  "Azhag the Slaughterer": { x: 2278, y: 899 },
  "Wurrzag Da Great Green Prophet": { x: 1832, y: 2638 },
  "Skarsnik": { x: 2308, y: 1245 },

  // Vampire Counts
  "Neferata": { x: 2360, y: 1020 },
  "Mannfred von Carstein": { x: 1838, y: 2383 },
  "Heinrich Kemmler": { x: 1300, y: 1139 },
  "Vlad von Carstein": { x: 2032, y: 1175 },
  "Isabella von Carstein": { x: 2032, y: 1175 },
  "Helman Ghorst": { x: 3015, y: 1809 },

  // Warriors of Chaos
  "Azazel": { x: 1798, y: 486 },
  "Festus the Leechlord": { x: 1695, y: 756 },
  "Valkia the Bloody": { x: 250, y: 213 },
  "Vilitch the Curseling": { x: 3822, y: 1008 },
  "The Glottkin": { x: 1237, y: 368 },
  "Be'lakor": { x: 1003, y: 732 },
  "Archaon the Everchosen": { x: 2602, y: 262 },
  "Kholek Suneater": { x: 2933, y: 699 },
  "Prince Sigvald": { x: 1033, y: 334 },

  // Beastmen
  "Morghur the Shadowgave": { x: 1130, y: 1758 },
  "Taurox the Brass Bull": { x: 247, y: 802 },
  "Khazrak One-Eye": { x: 1461, y: 838 },
  "Malagor the Dark Omen": { x: 1916, y: 1946 },

  // Wood Elves
  "Drycha": { x: 1901, y: 938 },
  "The Sisters of Twilight": { x: 199, y: 972 },
  "Orion": { x: 1452, y: 1497 },
  "Durthu": { x: 1467, y: 1327 },

  // Bretonnia
  "Repanse de Lyonesse": { x: 1337, y: 2064 },
  "Louen Leoncoeur": { x: 1182, y: 935 },
  "Alberic de Bordeleaux": { x: 608, y: 2073 },
  "The Fay Enchantress": { x: 1334, y: 1521 },

  // Norsca
  "Sayl the Faithless": { x: 3719, y: 814 },
  "Wulfrik the Wanderer": { x: 1085, y: 538 },
  "Throgg": { x: 1698, y: 265 },

  // High Elves
  "Sea Lord Aislinn": { x: 2727, y: 2726 },
  "Tyrion": { x: 724, y: 1509 },
  "Teclis": { x: 1549, y: 2941 },
  "Alith Anar": { x: 557, y: 684 },
  "Imrik": { x: 2548, y: 1767 },
  "Alarielle the Radiant": { x: 733, y: 1294 },
  "Eltharion the Grim": { x: 1625, y: 2022 },

  // Dark Elves
  "Malekith": { x: 314, y: 514 },
  "Morathi": { x: 196, y: 1269 },
  "Lokhir Fellheart": { x: 3841, y: 1154 },
  "Rakarth": { x: 105, y: 2386 },
  "Crone Hellebron": { x: 593, y: 492 },
  "Malus Darkblade": { x: 372, y: 620 },

  // Lizardmen
  "Lord Mazdamundi": { x: 181, y: 1633 },
  "Kroq-Gar": { x: 1935, y: 2550 },
  "Tiktaq'to": { x: 1528, y: 2480 },
  "Gor-Rok": { x: 505, y: 2395 },
  "Tehenhauin": { x: 633, y: 2838 },
  "Nakai the Wanderer": { x: 3807, y: 1946 },
  "Oxyotl": { x: 669, y: 3108 },

  // Skaven
  "Grey Seer Thanquol": { x: 1926, y: 1309 },
  "Queek Headtaker": { x: 2202, y: 1925 },
  "Lord Skrolk": { x: 527, y: 2565 },
  "Tretch Craventail": { x: 2387, y: 1515 },
  "Ikit Claw": { x: 1343, y: 1673 },
  "Deathmaster Snikch": { x: 3428, y: 1312 },
  "Throt the Unclean": { x: 1995, y: 553 },

  // Tomb Kings
  "Settra the Imperishable": { x: 1771, y: 2213 },
  "Arkhan the Black": { x: 1209, y: 2286 },
  "Grand Hierophant Khatep": { x: 44, y: 1057 },
  "High Queen Khalida": { x: 2344, y: 2134 },

  // Vampire Coast
  "Luthor Harkon": { x: 781, y: 2356 },
  "Count Noctilus": { x: 736, y: 1727 },
  "Aranessa Saltspite": { x: 1413, y: 1913 },
  "Cylostra Direfin": { x: 599, y: 902 },

  // Kislev
  "Tzarina Katarin": { x: 2044, y: 756 },
  "Kostaltyn": { x: 1750, y: 580 },
  "Boris Ursus": { x: 2193, y: 368 },
  "Mother Ostankya": { x: 256, y: 1136 },

  // Grand Cathay
  "Miao Ying": { x: 3258, y: 1081 },
  "Zhao Ming": { x: 3127, y: 1670 },
  "Yuan Bo": { x: 3313, y: 1624 },
  "Bhashiva": { x: 3052, y: 1360 },

  // Khorne
  "Skarbrand": { x: 2041, y: 2043 },
  "Skulltaker": { x: 278, y: 2171 },
  "Arbaal the Undefeated": { x: 2293, y: 486 },

  // Nurgle
  "Ku'gath Plaguefather": { x: 2797, y: 2073 },
  "Tamurkhan": { x: 2866, y: 423 },
  "Epidemius": { x: 1795, y: 162 },

  // Tzeentch
  "Kairos Fateweaver": { x: 1473, y: 3093 },
  "The Changeling": { x: 1774, y: 1133 },

  // Slaanesh
  "N'Kari": { x: 836, y: 1081 },
  "Dechala": { x: 3938, y: 2098 },
  "The Masque": { x: 77, y: 2080 },

  // Daemons of Chaos
  "Daemon Prince": { x: 1971, y: 74 },

  // Ogre Kingdoms
  "Greasus Goldtooth": { x: 2945, y: 1545 },
  "Skrag the Slaughterer": { x: 1750, y: 1466 },
  "Golgfag Maneater": { x: 1683, y: 665 },

  // Chaos Dwarfs
  "Drazhoath the Ashen": { x: 2712, y: 1649 },
    "Zhatan the Black": { x: 3164, y: 860 },
    "Astragoth Ironhand": { x: 2423, y: 853 },

  // Undead Legions
  "Nagash": { x: 1665, y: 2280 },
};
