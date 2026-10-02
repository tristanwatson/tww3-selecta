/*
  Victory conditions for each legendary lord, used by index.html.

  text     The objectives as the game words them, one string per line.
           Display only.
  destroy  Lords or races this condition requires you to destroy, spelled
           exactly as in index.html, e.g. "Karl Franz" or "Dwarfs".
           This is what drives the clash warnings. Only list playable
           lords or races here; minor factions can stay in the text.

  Filled-in example (made-up values, just to show the shape):

  "Some Lord": {
    short: { text: ["Destroy Karl Franz's faction", "Control 20 settlements"], destroy: ["Karl Franz"] },
    long:  { text: ["Destroy every Dwarf faction", "Control 50 settlements"], destroy: ["Dwarfs"] },
  },

  Mistyped names are reported in the browser console (F12).
*/
window.VICTORY = {

  // The Empire
  "Elspeth von Draken": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Boris Todbringer": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Markus Wulfhart": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Karl Franz": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Balthasar Gelt": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Volkmar the Grim": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Dwarfs
  "Malakai Makaisson": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Thorek Ironbrow": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Thorgrim Grudgebearer": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Ungrim Ironfist": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Grombrindal": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Belegar Ironhammer": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Greenskins
  "Gorbad Ironclaw": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Grom the Paunch": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Grimgor Ironhide": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Azhag the Slaughterer": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Wurrzag": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Skarsnik": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Vampire Counts
  "Neferata": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "The Red Duke": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Mannfred von Carstein": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Heinrich Kemmler": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Vlad von Carstein": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Isabella von Carstein": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Helman Ghorst": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Warriors of Chaos
  "Azazel": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Festus the Leechlord": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Valkia the Bloody": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Vilitch the Curseling": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "The Glottkin": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Be'lakor": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Archaon the Everchosen": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Kholek Suneater": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Prince Sigvald": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Beastmen
  "Morghur the Shadowgave": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Taurox the Brass Bull": {
    short: { text: ['Claim a Rampage Reward 2 times', 'Reach Ruination Level 3', 'Win 3 Battle in one turn','Raise Minotaurs unit capacity 3 times using Dread', 'Kill 700 entities with Minotaurs','Raze 30 settlements','Upgrade a Special Herdstone to Tier 4'], destroy: [] },
    long:  { text: ['Reach Ruination Level 5','Claim a Rampage Reward 6 times','Construct 3 Special Herdstones'], destroy: [] },
  },
  "Khazrak One-Eye": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Malagor the Dark Omen": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Wood Elves
  "Drycha": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "The Sisters of Twilight": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Orion": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Durthu": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Bretonnia
  "Repanse de Lyonesse": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Louen Leoncoeur": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Alberic de Bordeleaux": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "The Fay Enchantress": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Norsca
  "Sayl the Faithless": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Wulfrik the Wanderer": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Throgg": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // High Elves
  "Sea Lord Aislinn": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Tyrion": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Teclis": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Alith Anar": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Imrik": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Alarielle the Radiant": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Eltharion the Grim": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Dark Elves
  "Malekith": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Morathi": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Lokhir Fellheart": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Rakarth": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Hellebron": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Malus Darkblade": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Lizardmen
  "Lord Mazdamundi": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Kroq-Gar": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Tiktaq'to": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Gor-Rok": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Tehenhauin": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Nakai the Wanderer": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Oxyotl": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Skaven
  "Grey Seer Thanquol": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Queek Headtaker": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Lord Skrolk": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Tretch Craventail": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Ikit Claw": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Deathmaster Snikch": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Throt the Unclean": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Tomb Kings
  "Settra the Imperishable": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Arkhan the Black": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Grand Hierophant Khatep": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "High Queen Khalida": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Vampire Coast
  "Luthor Harkon": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Count Noctilus": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Aranessa Saltspite": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Cylostra Direfin": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Kislev
  "Tzarina Katarin": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Kostaltyn": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Boris Ursus": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Mother Ostankya": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Grand Cathay
  "Miao Ying": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Zhao Ming": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Yuan Bo": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Bhashiva": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Khorne
  "Skarbrand": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Arbaal the Undefeated": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Nurgle
  "Ku'gath Plaguefather": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Tamurkhan": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Epidemius": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Tzeentch
  "Kairos Fateweaver": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "The Changeling": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Slaanesh
  "N'Kari": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Dechala": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "The Masque": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Daemons of Chaos
  "Daemon Prince": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Ogre Kingdoms
  "Greasus Goldtooth": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Skrag the Slaughterer": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Golgfag Maneater": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Chaos Dwarfs
  "Drazhoath the Ashen": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Zhatan the Black": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Astragoth Ironhand": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },

  // Undead Legions
  "Nagash": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
};
