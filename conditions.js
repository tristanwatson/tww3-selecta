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
    short: { text: [
      "Defeat Tamurkhan and local Vampire Counts factions",
      "Construct Nuln Gunnery School upgrades",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Tamurkhan"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Direct or allied control: Nuln, Castle Drakenhof, Zanbaijin",
    ], destroy: [] },
  },
  "Boris Todbringer": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Markus Wulfhart": {
    short: { text: [
      "Defeat local Lizardmen factions (Hexoatl, Itza)",
      "Reach maximum Hostility / Imperial Supplies level",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Lord Mazdamundi", "Gor-Rok"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Direct or allied control: Hexoatl, Itza, Awakening, Altdorf",
    ], destroy: [] },
  },
  "Karl Franz": {
    short: { text: [
      "Use 4 unique Emperor's Decrees",
    ], destroy: ["The Barrow Legion", "Sylvania", "The Fecundites"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Direct or allied control: Altdorf, Middenheim, Castle Drakenhof, Kislev",
    ], destroy: [] },
  },
  "Balthasar Gelt": {
    short: { text: [
      "Destroy starting local threats and Greenskins",
      "Control home province",
      "Occupy, sack or raze 30 settlements",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Direct or allied control: Wei-Jin, Altdorf, Akendorf",
    ], destroy: [] },
  },
  "Volkmar the Grim": {
    short: { text: [
      "Destroy local Tomb Kings and Mannfred von Carstein",
      "Collect 4 Books of Nagash",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Mannfred von Carstein"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Khemri, Castle Drakenhof and Altdorf",
    ], destroy: [] },
  },

  // Dwarfs
  "Malakai Makaisson": {
    short: { text: [
      "Complete 3 Legendary Adventures",
      "Destroy Throt the Unclean (Clan Moulder)",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Throt the Unclean"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Complete all Adventures and control Hell Pit, Karaz-a-Karak, Karak Kadrin",
    ], destroy: [] },
  },
  "Thorek Ironbrow": {
    short: { text: [
      "Destroy local Lizardmen & Skaven",
      "Reclaim 4 lost Dwarf Artifacts",
      "Occupy, sack or raze 30 settlements",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Karak Zorn, Karaz-a-Karak, Khemri",
    ], destroy: [] },
  },
  "Thorgrim Grudgebearer": {
    short: { text: [
      "Destroy Bloody Spearz & Red Eye",
      "Control The Silver Road",
      "Occupy, sack or raze 30 settlements",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Reclaim all major Karaks: Karaz-a-Karak, Karak Eight Peaks, Karak Zorn, Zhufbar",
    ], destroy: [] },
  },
  "Ungrim Ironfist": {
    short: { text: [
      "Destroy Red Eye & Azhag the Slaughterer",
      "Control Peak Pass",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Azhag the Slaughterer"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Reclaim Karaz-a-Karak, Karak Kadrin, Mount Gunbad, Karak Ungor",
    ], destroy: [] },
  },
  "Grombrindal": {
    short: { text: [
      "Destroy Malekith (Naggarond) & local Dark Elves",
      "Secure starting Naggaroth province",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Malekith"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Naggarond, Karaz-a-Karak, and clear all Ancestral Grudges",
    ], destroy: [] },
  },
  "Belegar Ironhammer": {
    short: { text: [
      "Reclaim and control Karak Eight Peaks",
      "Destroy Mutinous Gits & Skaven threats",
      "Occupy, sack or raze 30 settlements",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Hold Karak Eight Peaks, Karaz-a-Karak, Karak Izor",
    ], destroy: [] },
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
  "Wurrzag Da Great Green Prophet": {
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
    short: { text: [
      "Vassalize 4 human factions",
      "Occupy, sack or raze 30 settlements",
      "Maximize Slaanesh Devotion",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control 13 Dark Fortresses including Altdorf & Kislev",
    ], destroy: [] },
  },
  "Festus the Leechlord": {
    short: { text: [
      "Spread Nurgle Plagues to 10 settlements",
      "Destroy Karl Franz (Reikland)",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Karl Franz"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Destroy Empire/Kislev",
      "Control 13 Dark Fortresses",
    ], destroy: ["The Empire", "Kislev"] },
  },
  "Valkia the Bloody": {
    short: { text: [
      "Win 20 battles with maximum Bloodletting",
      "Destroy Malekith (Naggarond)",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Malekith"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Naggarond, Lothern, and 13 Dark Fortresses",
    ], destroy: [] },
  },
  "Vilitch the Curseling": {
    short: { text: [
      "Perform 10 Teleport Encounters / Changing of Ways",
      "Occupy, sack or raze 30 settlements",
      "Defeat Grand Cathay factions",
    ], destroy: ["Grand Cathay"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Wei-Jin, Nan-Gau, and 13 Dark Fortresses",
    ], destroy: [] },
  },
  "The Glottkin": {
    short: { text: [], destroy: [] },
    long:  { text: [], destroy: [] },
  },
  "Be'lakor": {
    short: { text: [
      "Open 5 Chaos Rifts across the world",
      "Occupy, sack or raze 30 settlements",
      "Destroy local Human/Elf rivals",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control 13 Dark Fortresses including Altdorf, Lothern, Kislev",
    ], destroy: [] },
  },
  "Archaon the Everchosen": {
    short: { text: [
      "Vassalize/destroy 4 Norscan/Chaos factions",
      "Occupy, sack or raze 30 settlements",
      "Control 4 Dark Fortresses",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control 13 Dark Fortresses / Major World Capitals (Altdorf, Kislev, Couronne)",
    ], destroy: [] },
  },
  "Kholek Suneater": {
    short: { text: [
      "Vassalize 3 factions near World's Edge Mountains",
      "Occupy, sack or raze 30 settlements",
      "Control 4 Dark Fortresses",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control 13 Dark Fortresses",
      "Defeat Tamurkhan & Grimgor",
    ], destroy: ["Tamurkhan", "Grimgor Ironhide"] },
  },
  "Prince Sigvald": {
    short: { text: [
      "Defeat local High Elf / Empire factions",
      "Occupy, sack or raze 30 settlements",
      "Control 4 Dark Fortresses",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control 13 Dark Fortresses",
      "Destroy Seducers of Slaanesh rivals",
    ], destroy: ["N'Kari"] },
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
    short: { text: [
      "Destroy Cult of Excess & local Norscans",
      "Control Lothern / Eataine province",
      "Occupy, sack or raze 30 settlements",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Secure all 10 Inner & Outer Kingdoms of Ulthuan",
      "Destroy Naggarond",
    ], destroy: ["Malekith"] },
  },
  "Teclis": {
    short: { text: [
      "Destroy Kairos Fateweaver (Oracles of Tzeentch)",
      "Control home province in Southlands",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Kairos Fateweaver"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Direct or allied control: Lothern, Tor Elasor, Hexoatl",
    ], destroy: [] },
  },
  "Alith Anar": {
    short: { text: [
      "Destroy Morathi (Cult of Pleasure) & Malekith",
      "Control Anlec",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Morathi", "Malekith"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Naggarond, Ghrond, Anlec",
      "Wipe out all Dark Elf factions",
    ], destroy: ["Dark Elves"] },
  },
  "Imrik": {
    short: { text: [
      "Defeat/Tame 5 Legendary Dragons",
      "Destroy local Skaven / Chaos Dwarf rivals",
      "Occupy, sack or raze 30 settlements",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Caledor, Dragon Isles, and Zharr-Naggrund",
    ], destroy: [] },
  },
  "Alarielle the Radiant": {
    short: { text: [
      "Keep Ulthuan clear of foreign invaders",
      "Destroy local Chaos/Norsca factions",
      "Occupy, sack or raze 30 settlements",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Maintain 100% High Elf control across all Ulthuan gates and capitals",
    ], destroy: [] },
  },
  "Eltharion the Grim": {
    short: { text: [
      "Destroy Grom the Paunch (Broken Axe)",
      "Fully upgrade Athel Tamarha",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Grom the Paunch"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Secure Yvresse, Lothern, and destroy all Greenskin major factions",
    ], destroy: ["Greenskins"] },
  },

  // Dark Elves
  "Malekith": {
    short: { text: [
      "Destroy Grombrindal & local Norscans",
      "Control Naggarond province",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Grombrindal"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Conquer Lothern, Anlec, Karaz-a-Karak, and unite Dark Elves",
    ], destroy: [] },
  },
  "Morathi": {
    short: { text: [
      "Destroy Mazdamundi (Hexoatl) & Tlaqua",
      "Spread Slaanesh/Chaos Corruption",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Lord Mazdamundi", "Tiktaq'to"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Lothern, Hexoatl, Quintex, Naggarond",
    ], destroy: [] },
  },
  "Lokhir Fellheart": {
    short: { text: [
      "Destroy Miao Ying (Northern Provinces)",
      "Control Cathayan coastal provinces",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Miao Ying"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Wei-Jin, Lothern, Karond Kar, Port Reaver",
    ], destroy: [] },
  },
  "Rakarth": {
    short: { text: [
      "Capture beasts from 5 distinct monster categories",
      "Destroy local Imperial/High Elf factions",
      "Occupy, sack or raze 30 settlements",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Karond Kar, Lothern, Couronne, Altdorf",
    ], destroy: [] },
  },
  "Crone Hellebron": {
    short: { text: [
      "Destroy Alith Anar & local Chaos factions",
      "Perform Death Nights regularly",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Alith Anar"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Har Ganeth, Lothern, Avelorn",
    ], destroy: [] },
  },
  "Malus Darkblade": {
    short: { text: [
      "Maintain Tz'arkan control/suppression",
      "Destroy local Chaos/Khorne threats",
      "Occupy, sack or raze 30 settlements",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Hag Graef, Naggarond, Wei-Jin",
    ], destroy: [] },
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
    short: { text: [
      "Capture and control Karak Eight Peaks",
      "Destroy Belegar Ironhammer & Skarsnik",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Belegar Ironhammer", "Skarsnik"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Karak Eight Peaks, Karaz-a-Karak, Skavenblight",
    ], destroy: [] },
  },
  "Lord Skrolk": {
    short: { text: [
      "Destroy Gor-Rok (Itza) & Teclis",
      "Spread Pestilens Plagues",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Gor-Rok", "Teclis"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Skavenblight, Itza, Hexoatl, Star Tower",
    ], destroy: [] },
  },
  "Tretch Craventail": {
    short: { text: [
      "Destroy Imrik & local Dwarf factions",
      "Maintain high Stormvermin quotas",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Imrik"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Skavenblight, Karak Eight Peaks, Crookback Mountain",
    ], destroy: [] },
  },
  "Ikit Claw": {
    short: { text: [
      "Construct 5 Doomspheres / Workshop Upgrades",
      "Destroy Estalia & Tilea factions",
      "Occupy, sack or raze 30 settlements",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Skavenblight, Altdorf, Miragliano, Karaz-a-Karak",
    ], destroy: [] },
  },
  "Deathmaster Snikch": {
    short: { text: [
      "Complete 5 Shadow Actions / Nightlord Contracts",
      "Destroy Zhao Ming (Western Provinces)",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Zhao Ming"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Wei-Jin, Skavenblight, Nagashizzar",
    ], destroy: [] },
  },
  "Throt the Unclean": {
    short: { text: [
      "Harvest 500 Growth Juice / Laboratory Upgrades",
      "Destroy Kislev factions",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Kislev"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Hell Pit, Kislev, Erengrad, Skavenblight",
    ], destroy: [] },
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
    short: { text: [
      "Defeat Vilitch & Kurgan Warbands",
      "Control all 3 Great Bastion Gates",
      "Occupy, sack or raze 30 settlements",
    ], destroy: ["Vilitch the Curseling"] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Secure all Cathayan provinces",
      "Control Wei-Jin, Nan-Gau, Zharr-Naggrund",
    ], destroy: [] },
  },
  "Zhao Ming": {
    short: { text: [
      "Defeat local Skaven & Ogre factions",
      "Control Warpstone Desert",
      "Occupy, sack or raze 30 settlements",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Shang-Yang, Wei-Jin, Great Hall of Greasus",
    ], destroy: [] },
  },
  "Yuan Bo": {
    short: { text: [
      "Complete 4 Matters of State / Astromantic Needle tasks",
      "Control home Lustrian provinces",
      "Occupy, sack or raze 30 settlements",
    ], destroy: [] },
    long:  { text: [
      "Achieve short victory",
      "Occupy, sack or raze 70 settlements",
      "Control Wei-Jin, Hexoatl, Itza, Port Reaver",
    ], destroy: [] },
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
