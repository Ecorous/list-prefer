let currentData: {
  name: string;
  desc: string;
  cat: string;
  attr: string;
  matches: number;
  wins: number;
}[] = JSON.parse(`[
    {
       "name": "Paperboy",
       "desc": "You start knowing 3 not-in-play characters.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Blackmailer",
       "desc": "You start knowing 2 players who will likely lie to you.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Violinist",
       "desc": "You start knowing an in-play character & how many evil players are between you 2 (least steps).",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Heliolater",
       "desc": "You start knowing up to 5 players. If they guess (once each) the Demon & a team, that team wins.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Trapper",
       "desc": "You start knowing a Minion's character. On the 3rd night, learn the character they're mad they are.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Grovetender",
       "desc": "Each night, choose a number: learn if it's less than (or equals) the number of good players in the longest line. ",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Sericulturist",
       "desc": "Each night, choose a player: learn the direction of the closest Minion from them (arbitrary, if equidistant). ",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Conspiracist",
       "desc": "Each night, learn an evil player or Outsider. If a (non-Traveller) neighbor is evil, you get false info.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Foreman",
       "desc": "Each night, choose 3 neighboring players (ones you haven't chosen): you learn if exactly 1 is evil.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Conductor",
       "desc": "Each night, choose up to 2 players: if evil, they learn you. If you chose all other Townsfolk & Outsiders, your team wins.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Author",
       "desc": "Each night, the Demon chooses another alive player: you learn them, & if you've guessed (once) who you learn next, their character.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Minotaur",
       "desc": "Each night*, a dead Minion is revived.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Trixter",
       "desc": "Each night*, learn an alive good player who’s mad that you're evil.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Count",
       "desc": "Each night*, choose 4 characters: if all are in a line, 1 dies tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Kenku",
       "desc": "Each night* choose a player: If they die tonight, 2 good players die instead.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Iconoclast",
       "desc": "Each night* learn the character of a player who voted for your 1st nomination.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Carpenter",
       "desc": "Each night*, you learn if one of the Demon's living neighbors died tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Augur",
       "desc": "Each day, publicly make a statement: If true, you become a not in play character that night.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Medium",
       "desc": "Once per game, at night*, learn which dead players are evil.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Bard",
       "desc": "Once per game, at night, choose a player: when they die at night, they're revived as a Traveller.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Grist Miller",
       "desc": "Once per game, during the day, publicly choose half of the alive players: if none are the Demon, all die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Candlemaker",
       "desc": "Once per game (even if dead), publicly choose a player: chosen Minions, while alive, win if (& only if) you do. ",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Barbarian",
       "desc": "Once per game, at night, choose 3 players (the Demon learns who). If 1 of them dies, the other 2 die tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Ragpicker",
       "desc": "Once per game, at night, choose a character (not a Demon). You learn who they are if in-play, but false info if not.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Soda Jerk",
       "desc": "Each day, you may visit the Storyteller for some advice to help you lose.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Imam",
       "desc": "Each day, you may publicly advise your team: that night, learn how useful your advice was.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Mason",
       "desc": "Each day, if you publicly guess who all Masons are, your team wins. [All Minions are Masons] ",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Beetle",
       "desc": "Each day, you may publicly guess which character is 'about to die'. If correct, they are executed immediately.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Necromancer",
       "desc": "If you die at night, the next living executee's team wins.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Worker",
       "desc": "When you die, learn a player & their character tonight. [All Townsfolk are Workers] ",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Advisor",
       "desc": "On your 1st night, choose 2 players. Each night*, learn which is more correct.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Ninja",
       "desc": "Players only get Demon Info (or bluffs) the night after they're nominated, even if you die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Shaman",
       "desc": "If you die at night, you can revive 1 player (not the Demon) when their death is declared.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Cleric",
       "desc": "From the 2nd day onwards, Demons you nominate die. If an evil player is dead, you are drunk.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Mouse Trainer",
       "desc": "Evil players think 1 Minion (who learns this) isn't a Minion, & that an Outsider is instead. [+1 Outsider]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Bug Collector",
       "desc": "The Storyteller has a picture. Each night*, see it, & learn if you were correct about what it means yesterday.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Dealer",
       "desc": "Evil loses when a Demon dies, but wins when only they live. Demons might not wake. You cannot lose this ability. [+? Demons]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Malum",
       "desc": "You start knowing the in-play Minions. They might change (once, even if dead) if a good player is 'mad' this info is false.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Prodigy",
       "desc": "You start knowing everyone of a trait. Each day (even if dead), you guess it: until you guess the truth, your team will lose.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Captain",
       "desc": "Once per day, a living player may publicly choose another: they die. If a good player does this, good loses.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Shade",
       "desc": "Once per game, a player you vote for might die tonight (& learn this), but appear alive until executed.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Dragon Killer",
       "desc": "Only the Demon can register as an evil player or character to Townsfolk, even if you die. ",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Showman ",
       "desc": "Players who don't applaud your (& only your) death might die at any time.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Detective",
       "desc": "The 1st time you nominate a player, if it is the Demon, you turn evil and win.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Shepherd",
       "desc": "If only 3 players live (including the Demon, but not Travellers), your team loses.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Cultist",
       "desc": "If there are no living Outsiders, all but 3 players die tonight (even if you're dead).",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Sinner",
       "desc": "The final living executee's team wins, even if you're dead. Other dead players turn evil.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Merchant",
       "desc": "On your 1st night, choose 2 alive players. Unless 1 is the Demon, your team loses when either is executed, even if you're dead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Whispiri",
       "desc": "If you were nominated, the game ends today. If this occurs, your team only wins if a Minion (living, if any are) is executed. ",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Gentleman",
       "desc": "You start knowing a good player, and once per game, may publicly order them. If they disobey, they might be executed.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Kilnstar",
       "desc": "You start knowing a Traveller character. Once per game, choose a player: they're reborn as that character.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Cryomancer",
       "desc": "Each night, you may choose a character: they're poisoned. A good player (while alive) learns your choices. ",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Curionist",
       "desc": "On your 1st night, choose 3 players. Each night, 2 of them are poisoned until next night.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Shankaar",
       "desc": "Each night, evil players secretly communicate for 1 minute. [A good neighbor is an evil Shankaar] ",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Alphera",
       "desc": "Each day you may publicly guess every player's character: if all correct, your team wins.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Ariel",
       "desc": "Once per game, while dead, publicly choose a player: if they're executed, their team loses.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Caliban",
       "desc": "Once per game, at night, the Demon chooses who you are. You are evil. [No one is Caliban, +1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Viemite",
       "desc": "If an evil player nominates and executes you, your team wins. [All Minions are Viemite]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Galaxi",
       "desc": "If there are no living Outsiders, choose 3 other players tonight: everyone else dies. [+1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Gargoyle",
       "desc": "When the Demon is executed, each Outsider says 1 name: if none are yours, your team wins. [+1 Outsider] ",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Megamorph",
       "desc": "The Storyteller chooses the in-play characters, and you choose the Grimoire they make. [All players know you're in play]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Paropet",
       "desc": "If a living player was executed yesterday, players who are 'mad' they are an Outsider cannot die. [-1 or +1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "OBL-8",
       "desc": "Each night, choose a player. Yesterdays choices die & if they were nominated today, choose two players tonight.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Zabb-Yani",
       "desc": "Each night* choose a player: they die, & something they learned might become false. [No Outsiders]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Anarki",
       "desc": "Each night* choose a player: they might die. Minions you choose become Anarki. Your team loses if you die.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Comediarch",
       "desc": "Each night*, choose a player: they die. If the last executee isn't a Townsfolk, evil wins when you're executed.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Seer",
       "desc": "Each night*, see the Grimoire & choose a player: they die. Minions steal 1 bluff, & you think they're good characters.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Prosperor",
       "desc": "Each night*, all players may silently choose to die. Only evil players see their choice, & they win if no one dies tonight.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Rat King",
       "desc": "Each night*, choose a player: they die. The Townsfolk neighbors of the first player who dies this way are poisoned.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Mari-Lwyd",
       "desc": "Each night*, choose a player: they die. Everyone then learns 2 events, & secretly vote for which occurs (yours breaks ties).",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Adobe",
       "desc": "Each night*, choose 1 or 2 players (not yourself): the 1st dies, & the 2nd is a good Adobe. If exactly 4 players live, all are poisoned.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Grimm Reaper",
       "desc": "Each night*, choose a player: they die. You & a Townsfolk know of each other. If 1 publicly guesses the other (once), their team wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Morticulturist",
       "desc": "If a Townsfolk & Minion have been executed, evil wins. After day 5, evil wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Eclypso",
       "desc": "If a player died today, choose 3 tonight: they all die. If no one died in the last 2 days, your team wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Creepsye",
       "desc": "From the 1st day onwards, even if dead: Townsfolk are 'the Demon' & you're not, a player dies each night*. [+1 Outsider]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Rhapsode",
       "desc": "On your 1st night, choose an edition. A good player learns your choice, & you become a Demon from that edition.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Flock",
       "desc": "Your team wins after day 5, but lose if 3 Flock die. Evil votes secretly don’t count & only 2 are required. [Most players are Flock] ",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "BakedIce"
     },
     {
       "name": "Dressmaker",
       "desc": "You start knowing a player's character type. Each night*, learn the character type (not Travellers) clockwise to them.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Forager",
       "desc": "You start knowing 3 players. The first 2 share a trait the 3rd does not possess.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Old Salt",
       "desc": "You start knowing an in-play Minion, and you cannot die whilst they are alive.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Pavilion",
       "desc": "You start knowing which Outsiders are in play (or that zero are) & may choose one: they are drunk whilst you live. [+0 or +1 Outsider]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Scare Actor",
       "desc": "The Demon thinks they're a different Demon whilst you live. You start knowing which Demon they think they are.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Pawnbroker",
       "desc": "You start knowing a character of each type, at-least 1 is in play. Each night*, you learn if one was nominated yesterday. [+0 or +1 Outsider]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Corsair",
       "desc": "Each night, you secretly playing roshambo against an opposing player; If they lose, they are drunk until dusk.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Stamp Collector",
       "desc": "Twice per game, at night, learn 2 players: 1 is the most beneficial for evil to choose tonight. If none chose a player, learn this instead. ",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Tobacconist",
       "desc": "Each night, choose 3 characters (not the Tobacconist, & only once a Demon): learn if exactly 1 is in play. ",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Fireprod",
       "desc": "Each night, choose a player. You may (once) choose to learn which chosen player is closest to the Demon.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Gourmet",
       "desc": "Each night*, choose a player & guess their character: if correct, you survive execution tomorrow.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Headliner",
       "desc": "Each night*, you are drunk if evil was executed yesterday, & learn how many other nominees would have been a good execution for you.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Laureate",
       "desc": "On your 1st day, privately learn 2 abilities; Each night*, gain the ability that helps you the least until dusk.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Quarryman",
       "desc": "Each day, privately name a simple event to the Storyteller & learn how likely it is to occur. If impossible, you learn false information.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Legerdemain",
       "desc": "A Minion only learns you & evil only learns them when you die (& must). Once per game, at night, you & evil learn them.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Vaudevillian",
       "desc": "Once per game, during the day, publicly choose a different player: if an evil player kills either of you tonight, learn who they are.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Ballerina",
       "desc": "The Demon is drunk, but their kills still die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Lounge Singer",
       "desc": "If the Demon just killed the most important good player, you are woken to learn an evil player. ",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Goddess",
       "desc": "If an evil player chooses one of your good neighbours, you are chosen instead. ",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Reverend",
       "desc": "A Minion starts knowing who you are. If 3 live, they become your alignment & your team wins.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Tasseomancer",
       "desc": "If you're the only alive Townsfolk, your team wins. The 1st time the Demon attacks you, they learn your character instead.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Apparition",
       "desc": "You think you're a Townsfolk. Players you nominate become the Apparition instead of you. If they're the Demon, the Storyteller now is.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Beauty",
       "desc": "The 1st evil executee doesn’t die. You survive execution until an evil player does.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Bellboy",
       "desc": "Each night, the Demon chooses a player (you learn them). If they are executed tomorrow, the Demon sees the Grimoire.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Biographer",
       "desc": "If you die, the Storyteller may add or change up to 2 words in the Demon's ability (they learn this), and you learn 1 new word.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Birdwatcher",
       "desc": "If you're executed, the team that cast more votes loses (evil loses ties). If a team would win otherwise, they win 2 days later.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Botanist",
       "desc": "The Demon starts by seeing the Grimoire and choosing a player: they become the Botanist. [Not in Bag]",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Cardmaker",
       "desc": "If you die, evil players keep or regain their abilities whilst dead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Coracle",
       "desc": "The Demon acts twice*, even if you were executed yesterday. If you claimed Coracle when nominated, you’re drunk until dawn.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Curator",
       "desc": "You start knowing a question. If you die, you must correctly answer it tomorrow (once) or your team loses.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Faith Healer",
       "desc": "You start knowing the Demon character. Good players mad it’s in play might die at any time, even if dead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Fog Rover",
       "desc": "Evil players might register as good Fog Rovers. Once per game, at night, learn if the Demon has done so since dawn.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Fraud",
       "desc": "You have an in-play Townsfolk’s ability. Each night, until correct, the Demon guesses which: if correct, you turn evil & keep your ability if dead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Holloway",
       "desc": "You must register falsely. The first time the Demon would kill you, you live, & Townsfolk learn false information until dusk.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Ruffian",
       "desc": "If you nominate a player, and they aren't executed the same day, an additional might player die tonight.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Angolde",
       "desc": "Each night*, you may choose a player: they die. Each day, if a player you killed guesses you (once), you die.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Brenyddraig",
       "desc": "If no Outsiders live & you are executed, evil wins. [+0 or +1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Hypech",
       "desc": "If a good player votes on consecutive nominations, they might become poisoned.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Illucent",
       "desc": "A good player knows you’re in play. If they don’t vote when you nominate, they & 1 good player are poisoned until tomorrow dusk.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Impresario",
       "desc": "Once per game, at night, choose to become the character executed tomorrow. Each day, if no-one is executed, evil wins.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Malady",
       "desc": "You start by seeing the Grimoire, choosing a player & an Outsider: they gain its ability, & another player thinks they do.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Maligmaere",
       "desc": "If dead, you may (once) publicly guess the character of a good player who executed you or themselves. If correct, your team wins.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Pontifex",
       "desc": "Each night, you may choose any unique alive good players: they receive false info until dusk (1 good player learns how many).",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Siren",
       "desc": "A Townsfolk is poisoned. Once per game, at night*, choose that the Demon dies and you become the Demon.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Abscract",
       "desc": "Each night*, choose a player: they die. One on script Townsfolk is marked with ☼, if they die you become Dei Ovid. [+☼] ",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Dei Ovid",
       "desc": "Each night*, choose a player: they die. The 1st time an evil playrer (not you) is executed, evil wins. [Not in Bag, must have been Abscract]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Exolus",
       "desc": "Players are executed immediately & day 2 only ends if most agree or if most good players are dead. After day 2, evil wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Nosurfatu",
       "desc": "Each night*, choose a player: they die. Once, if you’re executed while most live, a player who voted becomes an evil Nosurfatu.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Phlegm Fatale",
       "desc": "Each night*, choose a player: they die; then you guess the most recent good executee’s character, & if correct, choose again.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Pradona",
       "desc": "Each night*, even if dead, choose a player: they die. Once per game, at night, choose which player is “the Demon” & their ability works twice.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Psaliphim",
       "desc": "Each night*, choose a player: they die. On the 2nd night, the Storyteller choose who you & Minions are. [No evil characters]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Undertow",
       "desc": "Each night*, choose a player: they die. The first time you are executed, you survive, and only you can die tonight.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Rendmaw",
       "desc": "Each night*, choose a player: they die. If 5 would live, no more die tonight & a good player learns this. If 4 live, evil wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Veirot",
       "desc": "Each night*, choose a player: they die. A good player knows you’re in play & if they die, once you may choose 3 instead.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Xaoh",
       "desc": "Each night*, choose a player: they die. 1 impossible thing happens each full day.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "DJ",
       "desc": "Each Night, choose a player (not you): if they are, or become, drunk or poisoned, you become drunk or poisoned instead.",
       "cat": "Traveller",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Governor",
       "desc": "If you nominate a dead player, and a majority of players vote, that dead player regains their ability until dusk tomorrow.",
       "cat": "Traveller",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Iconoclast",
       "desc": "If a player survives execution, you may immediately choose to execute another player.",
       "cat": "Traveller",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Jetsetter",
       "desc": "Dead players don't use vote tokens on nominations you make. Players of your alignment you nominate might survive execution. ",
       "cat": "Traveller",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Reverist",
       "desc": "Once per game, publicly say a word. The following night, gain an ability which contains it.",
       "cat": "Traveller",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Art Critic",
       "desc": "The Storyteller announces the maximum number of Outsiders. If it would exceed that number, the Demon learns an extra bluff.",
       "cat": "Fabled",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Mythos",
       "desc": "The 1st executed player grants an on-script ability to the Storyteller. The Storyteller's ability can be drunk or poisoned.",
       "cat": "Fabled",
       "matches": 0,
       "wins": 0,
       "attr": "Pynstripe"
     },
     {
       "name": "Cobbler",
       "desc": "You start knowing 1 good & 1 evil character: they are either both in-play or not at all.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Bookie",
       "desc": "You start by choosing 2 alive players (not yourself): if the 1st dies before the 2nd, you learn an evil player & choose again.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Hierophant",
       "desc": "Each night, choose a player: you learn how helpful they are being to their team.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Mycologist",
       "desc": "Each night, choose 2 players (not yourself): if either is evil, neither can die tonight or tomorrow day.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Wig Snatcher",
       "desc": "Each night*, choose a player: if they die tonight, you become their character.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Courier",
       "desc": "Each day, you may visit the Storyteller to learn a task & its reward.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Locksmith",
       "desc": "Each day, you may guess players' characters (not yourself): if all are correct, all can't die tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Rancher",
       "desc": "Once per game, during the day, declare that if an evil player is executed today, 1 good player dies.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Goldsmith",
       "desc": "Once per game, during the day, publicly choose a player: you give this ability to them. On the final night, learn the Demon player.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Fetch",
       "desc": "If another ability kills you, you learn this & die the next night instead unless evil is executed after.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Mosaicist",
       "desc": "If the Demon kills you, each night from now on, learn a Minion player & their character.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Guardian",
       "desc": "If the Demon kills you, each night after, learn who & what they attacked. Once per game, choose that they don’t die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Ka",
       "desc": "If the Demon kills you, each night from now on, you learn if the Demon 1) nominated, 2) was nominated, or 3) both today.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Haberdasher",
       "desc": "If the Demon chooses their good neighbors (except you) with their ability, they immediately lose it until dawn, even if you died tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Deacon",
       "desc": "The good player who is the most correct can't die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Seraph",
       "desc": "Good players who you nominate & kill by execution learn you are in play.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Blabbermouth",
       "desc": "You know a phrase. Each dusk, if publicly, no other alive good player said it or a Minion guessed it (even if dead), your team loses.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Moonflower",
       "desc": "If you die & the next executee is good, your team loses.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Porcher",
       "desc": "If you die, the Demon has a 2nd Demon ability (they choose which): each night, they choose which to wake for (if possible).",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Rodent",
       "desc": "If 1 of your Townsfolk neighbours die, the other is drunk from now on, even if you are dead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Mirage",
       "desc": "An extra rule is in play, even if dead. Each day, if you guess it, you lose your ability & learn this.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Dedalis",
       "desc": "Each night, choose a player: they must privately answer a riddle correctly or die tomorrow night.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Chariot",
       "desc": "Each night, choose 2 alive players (not yourself): if one is executed tomorrow, the other is instead.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Chupacabra",
       "desc": "Each night*, you may choose a player nominated by evil today: they die.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Cowboy",
       "desc": "Each day, you may publicly guess any players’ characters: if all are correct, all die.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Crawler",
       "desc": "You know an alive player: if 1 is executed, they learn you're in play. If 2 are, your team wins.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Leftenent",
       "desc": "You poison good players who choose the Demon with their abilities, & then learn who they are. 1 good player might then learn you too.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Anubis",
       "desc": "If an Outsider dies, a 2nd might become a not-in-play Townsfolk tonight (you know them) & vice versa. [-1 to +1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Vampire",
       "desc": "The 1st evil player nominated by evil today lives if executed. Townsfolk who nominate you poison you both until dawn.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Genie",
       "desc": "Things that evil players are mad about might become true.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Autarch",
       "desc": "Townsfolk that nominate are poisoned until tomorrow dusk. If none do, evil wins. 1 good player learns if you die.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Bloodwrite",
       "desc": "Each night, you may choose 2 players (they learn this): they die tomorrow night. Players who offer the most might not die.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Pestilence",
       "desc": "Each night*, choose a player: they die. If they had no ability, 1 of their Townsfolk neighbours die too.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Kukalpa",
       "desc": "Each night*, even if dead, choose a player: they die. The 1st player (not yourself) to nominate you 'is the Demon' instead of you.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Crown",
       "desc": "Each night*, you may choose 2 pairs of players: all choose which dies. If a Minion is dead & you die this way, evil wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Matsuraid",
       "desc": "Evil votes secretly don't count & only 2 are required. Dead executees' teams lose. After day 3, evil wins. [Some players are evil]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Dealer",
       "desc": "Each night, you know what happens to whoever picks up the phone when it rings tomorrow: they learn what happens too.",
       "cat": "Traveller",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Pedlar",
       "desc": "If you agree, dead players may give vote tokens & spend 2 to regain their ability. You are sober & healthy.",
       "cat": "Traveller",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Icarus",
       "desc": "Nominations that do not receive a 50% majority kill the nominator immediately.",
       "cat": "Traveller",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Soul Binder",
       "desc": "During setup, name 2 characters. Both are in play, or not at all. Named Outsiders might replace Townsfolk.",
       "cat": "Fabled",
       "matches": 0,
       "wins": 0,
       "attr": "Luis S"
     },
     {
       "name": "Admiral",
       "desc": "Once per game, during the day, visit the Storyteller to privately learn the good player who is harming, & the evil player who is helping, your team the most",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Aesthete",
       "desc": "Each night*, learn a character the Storyteller believes you should think about.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Boxer",
       "desc": "You are safe from Minions. If chosen by 1, learn each other's characters.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Bursar",
       "desc": "Each day, if 3 or more unique public statements were made, that night*, you learn if most were true",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Cosmonaut",
       "desc": "Each day, you may visit the Storyteller to learn a cryptic hint about the gamestate",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Curarist",
       "desc": "The Demon's neighbors register as good Outsiders to good abilities. [+0 or +1 Outsider]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Dean",
       "desc": "If the Demon is the only living evil player, learn who they are tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Duke",
       "desc": "Each night, choose a player: You learn a character type they are not.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Escape Artist",
       "desc": "If nominated by an opposing player, executions on you fail. 1 player registers falsely to you.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Furze-Burner",
       "desc": "You start by choosing 3 players: chosen Minions become Outsiders until your 3rd day.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Geologist",
       "desc": "Each day, you may visit the storyteller to say a number: You learn something that has that answer",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Hippie",
       "desc": "Each night*, Minions and Demons wake & choose a unique alive good player: you learn who. If you are chosen, you die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Lemming",
       "desc": "Good players who nominate you become Lemmings. If 1 Lemming dies, all do.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Milkmaid",
       "desc": "If you die at night, learn 1 evil player. [+0 or +1 Milkmaid]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Mowltaker",
       "desc": "Each night*, choose a player: chosen Outsiders die & learn you. You might register as evil. [+1 Outsider] ",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Orchard Keeper",
       "desc": "There are an even number of Outsiders in play. [+0 or +1 Outsiders]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Ornithologist",
       "desc": "Minions & Demons don't learn their characters until you die. [Minions & Demons draw blank tokens]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Plotter",
       "desc": "Each day, you may visit the Storyteller to learn a piece of advice that harms the winning team.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Punk",
       "desc": "On the 1st night, choose a player: If evil, they swap characters & alignments with a good player.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Rat-Catcher",
       "desc": "If the Demon kills you, an alive Minion gains this ability & 'Good wins on the final day, the Demon knows who you are.'",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Rockstar",
       "desc": "Each night, guess how many players would wake tonight: If correct (once), they instead learn you.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Troll",
       "desc": "If the Demon would kill you at night, a Minion dies instead. If you left your seat in the town square today, you're drunk until dawn.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Vicar",
       "desc": "On your 1st night, choose 1 player for each Minion: if you all live, you're all safe from the Demon.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Visitor",
       "desc": "Each night, a player's information is nonsensical. ",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Whaler",
       "desc": "You start knowing 1 in-play evil character. If the character you know dies, you learn another tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Barometz",
       "desc": "If you died today or tonight, 2 players equidistant from you become evil Minions & learn the Demon. [-1 Minion]",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Believer",
       "desc": "Each night, learn a player: If you are not mad they are evil, you might be executed.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Gobemouche",
       "desc": "If you are 'mad' that any info is false, you might be executed.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Muñoz",
       "desc": "You think you're a Townsfolk & get correct info. If you die at night, you register as alive & get false info until you would die again.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Orc",
       "desc": "You might be good or evil & don't know which until you lose your ability or the final night. [All Outsiders are Orcs]",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Princess",
       "desc": "Each night, if evil is losing, 1 evil player learns a good player's character.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Quaaltagh",
       "desc": "If you draw this token, you may redraw, but learn false info once. Townsfolk become leftover evil characters. [+1 Townsfolk in the bag]",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Unicorn",
       "desc": "Minions start knowing an improbable condition. If it happens (once), you're executed, even if dead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Vigilante",
       "desc": "Players who are 'mad' you're evil might die at night.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "White Elephant",
       "desc": "Once per game, at night, the Demon chooses who you are. If you die by execution, they may choose another player to become a White Elephant. [You don't start in play]",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Zhuangzi",
       "desc": "You think you're a Townsfolk. Once, at night, you & some Townsfolk lose your abilities & learn this, even if dead. The Demon learns who.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Buggane",
       "desc": "Townsfolk can't die tonight if an evil player claiming Buggane executes an alive Outsider. If they fail, evil wins. [+1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Carpenter",
       "desc": "If you die by execution, your nominator becomes an not-in-play evil Minion tonight.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Chameleon",
       "desc": "You start knowing 1 in-play good character & they know you are in play: your ability is based on theirs.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Charlatan",
       "desc": "Each night, choose 2 players: their info is nonsensical until dusk.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Goatherd",
       "desc": "Good players who raise their hand at night* turn evil. If this gives evil a majority, good wins.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Moreau",
       "desc": "You choose which players are which Outsiders. [-? to +1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Perkeo",
       "desc": "If the Demon kills you at night & the next executee is evil, your team wins.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Scorpion",
       "desc": "If you die by execution, all players learn that the next living executee's team loses.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Cacophony",
       "desc": "Each night*, choose a player; they die. Outsiders nominated today might be executed. [+1 Outsider]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Chirurgeon",
       "desc": "Each night*, you may choose up to 3 players: they die. If any do not, evils die instead",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Fawn",
       "desc": "Each night*, choose a player: they die. If a Minion died today, choose 3 instead.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Mawntee",
       "desc": "Each night*, learn your best & 2 worst kills: choose 1. Then, learn 1 of your worst kills (not your choice) & choose again: They die.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Myrkkymato",
       "desc": "Each night*, choose a player: they die & poison 1 good neighbor until dusk.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Olalla",
       "desc": "Each night*, choose a player: they die. Outsiders you kill keep their ability & poison 1 Townsfolk neighbor. [+1 Outsider]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Somnifuge",
       "desc": "Each night*, choose a player: they die. You know your Minion's characters & wake instead of them. Minions think they're good characters.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Hitch-Hiker",
       "desc": "Each day, publicly choose a unique place to sit. Your alive neighbors cannot die if allied & are poisoned if not.",
       "cat": "Traveller",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Dave",
       "desc": "You are safe.",
       "cat": "Traveller",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Apocrypha",
       "desc": "Once per game, at night*, deaths are arbitrary.",
       "cat": "Fabled",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Mixologist",
       "desc": "Drunk or poisoned players cannot learn true info.",
       "cat": "Fabled",
       "matches": 0,
       "wins": 0,
       "attr": "Tir-Far-Thoinn"
     },
     {
       "name": "Suitor",
       "desc": "You start knowing 2 players: the Storyteller believes 1 will help good & 1 evil.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Disciple",
       "desc": "You start knowing an in-play evil's character. The 1st time their ability triggers, it does so on you.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Hotelier",
       "desc": "On the 1st night, choose a good character: the Demon thinks it's not-in-play & learns it as an additional bluff.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Flamestoker",
       "desc": "On your 1st day, you may visit the Storyteller to gain an unlisted good ability: most get Townsfolk ones. [Some Townsfolk are Flamestokers]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Fellowman",
       "desc": "Each night, choose a player: if not the Demon, they are drunk until dusk.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Dianite",
       "desc": "Each night*, choose a player: they die if they neighbor an evil player & aren't a Demon.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Chantry",
       "desc": "Each night*, choose a good character: if in-play, they die. Outsiders who die this way might keep their ability.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Scribe",
       "desc": "Each night*, learn how many evil players voted on your nomination.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Baker",
       "desc": "Once per game, at night*, choose to make all Townsfolk (not yourself) safe from the Demon tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Righteous",
       "desc": "Once per game, at night*, choose that the dead ally with the best grasp on the gamestate rises.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Wayfarer",
       "desc": "Once per game, at night*, choose a player that has nominated: learn if they nominated evil this game.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Maskbearer",
       "desc": "Once per game, at night*, choose a player: they can't die at night, even if you're dead. Before this, you can't die at night.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Keysmith",
       "desc": "Once per game, during the day, choose a Demon & alter its ability by 1 word, if the Storyteller agrees. You die if chosen by them.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Incense Burner",
       "desc": "Once per game, at night, choose that the Demon learns some advice & you do too. You learn if they follow it.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Fencer",
       "desc": "If the Demon kills you, you learn this, & if a Minion lives, the Demon dies & they become the Demon. ",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Sorrower",
       "desc": "If you die at night, publicly choose a good character: you gain that ability.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Metagnostic",
       "desc": "If you die at night, you learn 1 to 3 good characters the Storyteller believes could solve the game.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Moonshiner",
       "desc": "Players who nominate you are drunk until dusk tomorrow.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Wine Taster",
       "desc": "If you'd be drunk or poisoned, wake & choose a player: they are instead. You're sober & healthy.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Ritualist",
       "desc": "On the final night, choose a player who didn't die tonight: a chosen Demon swaps alignments.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Queen",
       "desc": "If your neighbors are the same alignment, all learn the Queen's in play. You might be executed if you're mad you're the Queen.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Haberdasher",
       "desc": "If the Demon chooses their good neighbors (except you) with their ability, they immediately lose it until dawn (even if you died tonight).",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Houndsmaster",
       "desc": "The 1st time you nominate an evil & don't execute them, an ally rises tonight, even if you're dead.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Mourner",
       "desc": "You start knowing a player & their character. If they die by execution, you turn evil tonight (even if dead).",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Chimneysweep",
       "desc": "Demons know which Minion players are which Minion characters & wake instead of them. Minions think they're good characters.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Bootblack",
       "desc": "Each night, choose a player you haven't before: the 1st time they're evil, become evil.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Cassandra",
       "desc": "You have a not-in-play Townsfolk's ability. After day 3, your team loses.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Sibyl",
       "desc": "On your 1st day, privately learn a condition, day & consequence. If unmet by then, it happens, even if dead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Bog Dweller",
       "desc": "Tonight, if you were nominated today (even if dead), the Demon may choose a player: they're poisoned until dusk.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Roi Fainéant",
       "desc": "Minions know which Minion the Demon doesn't know. The Demon thinks they're evil. [+1 Minion, the Demon is good]",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Anthropologist",
       "desc": "If no alive player (not yourself or Travellers) claimed their character during nominations, evil wins tonight (even if you died today).",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Omen",
       "desc": "When the Demon dies (ending the game): you die tonight, they live, register as dead & wake every other night, even if you're dead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Child of Lir",
       "desc": "All know who you are. Half the players (rounded down) may be executed on your 1st day. On your 3rd, evil wins. You can't be executed.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Belltoll",
       "desc": "If you died yesterday or yesterday night, rise & switch alignment tonight.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Elder",
       "desc": "You know 1 Demon player. You learn true, sober & healthy info. [+1 Demon]",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Doorman",
       "desc": "Each night*, 1 evil player (evil chooses which) may choose a player: they die & you learn who they are.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Dockworker",
       "desc": "If the 1st executed evil's the Demon, they don't die. Once, the Demon chooses who you are & you lose this ability. [You don't start in-play]",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Epigone",
       "desc": "The 1st time a player would be drunk, poisoned or get false info, you learn them instead. Tomorrow, all Townsfolk info is arbitrary (even if dead).",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Modiste",
       "desc": "Each night, choose a character you haven't before (only 1 Demon): you learn if they are in-play & have their ability until dusk. ",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Royal Guard",
       "desc": "If a player evil would benefit from keeping alive would die, you might instead & they gain this ability.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Gasanthesheshu",
       "desc": "For each good player who's mad that you're in play, 1 good player might die at any time.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Songstress",
       "desc": "You & a good player know of the other's character: if you guess them while they live (once), evil wins.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Styx",
       "desc": "Dead evil players might rise (not a Demon, if 1 lives), even if you're dead. The Demon may (once) swap characters with you.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "False Prophet",
       "desc": "On the final day: whoever wins loses & whoever loses wins, even if you're dead; & if you're executed your team loses.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Folly",
       "desc": "1 Outsider knows you're in-play. Players who are mad an Outsider is an Outsider might be executed. [+0 or +1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Heir",
       "desc": "If a player is executed & claims to be the Heir, another player may choose to die in their stead (not on final day), but might not.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Leftenent",
       "desc": "You poison good players who choose the Demon with their abilities, & then learn who they are. 1 good player might then learn you too.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Akiryo",
       "desc": "If no alive good player claimed to be Akiryo today, your team wins. If you did & are executed, 1 good who did might become an evil Akiryo.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Faeling",
       "desc": "Each night, choose a character: to good abilities, you register as them & their alignment until dusk.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Starspawn",
       "desc": "If 5 or more non-Travellers live & 1 evil died, register as & gain an ability based on them: 1 good may visit the Storyteller to learn a hint about it.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Guilt",
       "desc": "Players who nominate & execute others might die at night.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Bloodless",
       "desc": "The 1st time a Demon dies, see the Grimoire tonight & play for 1 more day: if good or no-one is executed, an evil becomes the Demon.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Hellsent",
       "desc": "Cruxes can't die & make their nominees cruxes that night instead (not evil to evil). Outsiders (you if 1 was removed) are cruxes. [-1 or +1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Viscount",
       "desc": "Once per game, at night*, choose a player: they die & register as living during the day.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Haunt",
       "desc": "On your 1st night, choose a good player: whatever they're mad about while alive might become false. If you or they are executed, all learn this.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Breathsnatch",
       "desc": "The 1st time evil would die, they don't. For each Outsider executed, the next time evil would die, they don't. [+1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Justice",
       "desc": "Executions you don't vote for fail. If the Demon or you were nominated & you didn't vote for 1, lose your ability.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Conspiracy",
       "desc": "Each night, choose a player: learn their character. Each night*, choose a player: they die.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Diabolos Ex Deus",
       "desc": "Each night*, you & the Storyteller may each choose a player (they must): both die",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Dreydra",
       "desc": "Each night*, Dreydras wake & each chooses a player: they die. The 1st Minion to die becomes a Dreydra.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Rancoeur",
       "desc": "Each night*, choose 2 players: the 1st dies, if the 2nd executes you (before final day), their team loses. If the 2nd changes, the old 1 learns it.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Badoch",
       "desc": "A player dies each night*. You don't know you're the Badoch & might learn it if nominated. Minions don't know you. [+1 Minion]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Plea",
       "desc": "Each night*, choose a player: they die. If an Outsider died today, deaths tonight are arbitrary & you don't wake tomorrow. [+1 Outsider]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Aunemoia",
       "desc": "Each night*, choose a player: they die. 1 Outsider's poisoned, if they die, their living Townsfolk neighbors are instead. [+1 Outsider]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Oivasyr",
       "desc": "Each night*, choose a player: they die. Once, if executed & a living player claimed their character today, live & register as dead. [-1 Outsider]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Faurein",
       "desc": "You think you're an Outsider. Each night*, Minions choose a player: they die - if you would & they're mad you're good, register as dead.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Don Juan",
       "desc": "Each night*, choose a player: they die. Your execution fails if an alive Outsider voted. [+1 Outsider]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Twincyn",
       "desc": "Each night*, choose a player: they die. If 5 or more residents live, the 1st to execute a Twincyn becomes an evil Twincyn.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Beholder",
       "desc": "Each night*, choose 2 players: they die. On the final night, you & 1 living good player glimpse the Grimoire.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Daivout",
       "desc": "Each night*, a player dies. If no good lives good wins & viceversa. On the 3rd night, most players become evil Daivout. [No evil characters]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "DarkArtist"
     },
     {
       "name": "Card Sharp",
       "desc": "You start by choosing 2 characters: you know how many are in play.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Hazeblazer",
       "desc": "Each night, choose a unique player: a chosen evil player's next choice must be another alive evil player, if possible.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Pianist",
       "desc": "Other good players who have nominated you are safe from the Demon.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Ghost Writer",
       "desc": "Once per game, at night*, choose to learn which characters are dead.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Calendrist",
       "desc": "You start by choosing a day number: if an evil player is executed that day, your team wins.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Matchmaker",
       "desc": "You start knowing 2 players who the Storyteller believes should trust and talk to each other.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Lancer",
       "desc": "Once per game, at night*, choose a player: one of their alive allies dies. If the Demon would die this way, learn them instead.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Debutante",
       "desc": "Each night, learn a player and a character: if in-play, they’re good, if out-of-play, they’re evil.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Weasel",
       "desc": "You think you are a Minion until you die, & register as they would. Minions don't learn Demons until you die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Artificer",
       "desc": "On your 1st night, choose 3 characters: if the Demon kills you, your ability becomes a fusion of the 3, and you learn it.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Climber",
       "desc": "You start knowing an in-play Townsfolk. If the character you know dies, learn another tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Ancient",
       "desc": "Each night*, choose a dead player: you learn which team their death benefited the most.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Sightseer",
       "desc": "Each night, choose a player (not yourself): learn if their character is above or below your previous choice's on the script.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Mythologist",
       "desc": "Each day, visit the Storyteller to learn a true statement about the Demon.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Virtuoso",
       "desc": "Each night*, learn if an evil player was publicly mad about the same things you were today.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Stargazer",
       "desc": "If the Demon kills you, things you're mad about might become true.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Veiun",
       "desc": "If you nominate and execute an evil player, you can't die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Junkbug",
       "desc": "For each evil player you vote on, a player is drunk, even if you die.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Spoof",
       "desc": "A Townsfolk's ability is altered. Each day, you may guess them: if correct, learn their ability, but if incorrect, you learn false info.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Crab",
       "desc": "If a player is mad that there isn’t a Crab in play, they might become a Crab. [You might not start in play.] ",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Splinter",
       "desc": "You start knowing a good player: if you are not mad about them being evil, they might become evil.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Bling",
       "desc": "If an evil player chooses you, they choose twice the next night, even if you die.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Cutwire",
       "desc": "Each night, choose a player: if no Cutwire has chosen the Demon when both are dead, your team loses at dusk. [+1 Cutwire]",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Inv",
       "desc": "Storyteller decisions favor the evil team. Once per game, they make an impossible decision, and you learn this tonight.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Reign",
       "desc": "Once per game, an evil player may publicly name you: you become evil, and you might swap characters with them. If you do, they are poisoned.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Apostate",
       "desc": "If you die and your team would win tonight or tomorrow, your team loses instead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Foxfire",
       "desc": "One good player registers as an evil Demon to Townsfolk. If you publicly guess them (once), your team wins.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Dayrazer",
       "desc": "Once per game, at dawn, publicly name an event - it might happen at a point from now on. If you are executed, it will.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Cocoon",
       "desc": "The 1st time an evil player would die by execution, they survive & become an out-of-play character of the same type instead.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Diva",
       "desc": "All information is about you.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Soul Caller",
       "desc": "Once per game, at night*, guess who the Outsider is: if correct, all Townsfolk become Outsiders, and evil learns this. [1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Wasp",
       "desc": "Once 3 other players have been nominated, choose a Demon: after X more nominations, become it. [X Outsiders]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Burster",
       "desc": "Once per game, at night, choose 3 non-Demon abilities to gain: each night after, you lose one.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Instigator",
       "desc": "Each night*, if no good player was mad that you were evil today, a player dies.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Poltergeist",
       "desc": "Each night*, if you were nominated today, you may choose up to 2 pairs of players to swap characters.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Accursed",
       "desc": "Players who are mad you are the Demon might become a Demon who does not wake to kill.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Vijrinn",
       "desc": "Outsiders may, once per day, publicly guess who you are: the first who does turns evil. [+1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Pinpoint",
       "desc": "Each night, choose a unique character - if in play, they're poisoned, but if not, players you poisoned previously are healthy.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Requiem",
       "desc": "If a Minion died today or tonight and the Demon is executed tomorrow (not the final day), they live but register as dead, even if you're dead.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Blot",
       "desc": "Good players who learn about you might register as you would. If you die, a living Blot might gain your ability.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Amphiptere",
       "desc": "If both of the Demon's neighbors live, they can't die by execution, even if you die.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Miros",
       "desc": "Each night*, if you only voted for 1 player today, that player dies.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Fizzle",
       "desc": "On your first night, choose 3 players: they might die at any time. If one does, they might learn one of your choices.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Quell",
       "desc": "Players who agree with you might die. The 1st player to nominate the Demon has this ability.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Scrindonguloder",
       "desc": "You start knowing a near-impossible task, & a good player knows hint to it - if you complete it, all but the Demon die. ",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Swordsmachine",
       "desc": "Each night*, you may choose a player: they guess who you are. If correct, you die, but if not, they die.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Sterenae",
       "desc": "On the 3rd night, choose 2 other alive players (at least 1 opposing, no Travellers): all others die & evil wins at dusk. You wake last.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Bambamo",
       "desc": "Each night*, choose a player: they die. You & a good player know each other are in play. If they die, your ability changes; you both know what into.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Sinwylk",
       "desc": "Each night*, choose a player: they die. You & a good player know a question: players who are mad they know the answer might be executed.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Inferno",
       "desc": "Each night*, choose a player: they die. If a Minion dies by execution, you gain their ability.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Wheria",
       "desc": "After the day number that equals Townsfolk, evil wins. Good who learn about you register as Minions, except to Minions.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Oghdogho",
       "desc": "Each night*, choose a player: they die. A good player knows a condition: you die if (& only if) it is met. If you guess it (once), evil wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Rot",
       "desc": "Each night*, choose a player: they die. The first player of each character type to die registers as alive.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Ryalwrym",
       "desc": "Each night*, choose a player: they die. A good player knows an alive player: if they are executed, evil wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Lapi-Viri",
       "desc": "Each night*, choose a player: they die. The dead good player who helped your team win the most switches alignments if they would lose.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Avernette",
       "desc": "Each night, choose 3 players: one of your previous choices dies. If 1 was executed today, both others do instead.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Pavonea",
       "desc": "Each night*, choose a player: they die. If a Minion died today or tonight, all players register as good and as good characters until dusk.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Fleequine",
       "desc": "On your 1st night, and each night where no-one was mad you were evil today, you become a different Demon with this ability.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Nortumore",
       "desc": "Each night*, choose a player: they die & if killing them was a bad idea, 1 other player dies.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Lady Luck",
       "desc": "Each night*, choose 2 other abilities to gain until you choose again. For each unique Demon ability you’ve gained, 1 player is safe from you.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Roundabout",
       "desc": "Voting always starts at you. Each day, before nominations, choose where you sit.",
       "cat": "Traveller",
       "matches": 0,
       "wins": 0,
       "attr": "Procyon"
     },
     {
       "name": "Sub Roset",
       "desc": "When an evil player dies, someone learns you. Evils may choose to have this ability and choose when theirs activates (even if not in play).",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Offering",
       "desc": " Once per game, at night*, choose to die. If you died tonight, no other players can & you learn how many should've died.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Testatrix",
       "desc": "You start knowing an ability, you gain that ability if you die at night.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Gumby",
       "desc": "Each night*, choose a player: they cannot die tonight, but once they die instead.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Weasel",
       "desc": "All Weasels start knowing a Townsfolk ability & one living Weasel has it. [+0 to + 2 Weasels]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Decde-ex",
       "desc": " Each night*, choose a player: learn if they were ‘mad’ as their character today. ",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Sheeple",
       "desc": "Each night* learn if you voted with evil. If you nominated & executed a player today, you learn if you voted on evil.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Psychiatrist",
       "desc": "Outsiders might help good & 1 might be drunk. [+1 Outsider]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Corrupted",
       "desc": "Once per game visit the storyteller, and learn the most damaging good player they are sober, healthy and learn true information. ",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Thanatomaniac",
       "desc": "Each day, visit the storyteller to learn something that would help your team. Once choose for it to happen but tonight you die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Betrothed",
       "desc": " Once per game, choose that, for 3 nights, you choose a player & learn their alignment. If you die while you have nights left all good are drunk tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Beneficiary ",
       "desc": "For each evil player, you may visit the Storyteller to learn a good player. If there isn't a new dead evil player, you are drunk.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Adulterer",
       "desc": "You start knowing an Outsider. Once per game, at night: they die instead of a good player. [+1 Outsider)",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Shrew",
       "desc": "Once per game, visit the storyteller during the day to learn and gain an ability until dawn.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Fanatic",
       "desc": "You think you are another Townsfolk, but are not. The Demon knows you are in play. The first time the Demon attacks you, learn you’re the Fanatic. [You sit next to the Demon]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Pessimist",
       "desc": "Each day, you may visit the Storyteller. If your team is losing, you learn 3 words explaining why.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Overwyn",
       "desc": "Each night learn if you voted on evil yesterday. If you voted on an executed player learn arbitrary information.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Bodyguard ",
       "desc": "Evil players who nominate might die tonight. The Demon or the last alive evil player can't die this way.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Martyr",
       "desc": "Good can not win (due to the death of the Demon) while you live. If you are executed while all Minions live, your team loses.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Stimulant",
       "desc": " Each night Minions may choose to act twice, but they do not wake tomorrow night. If you are executed Minions act twice every night.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Realtor",
       "desc": "The first time each evil player would be learned by a good player, they might register as a good Townsfolk or Outsider.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "???",
       "desc": "> **Outsider** The first Demon to die turns good and gains a Townsfolk ability. Demons don’t learn each other. [+1 Demon]",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Sampler",
       "desc": "Each night, choose a player: they are drunk until dusk. When you die, the Demon gains your ability. ",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Runt",
       "desc": "> If all evil (& only evil) players vote on a nomination, choose an evil not-in-play Minion to become.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Aboulomaniac",
       "desc": "Each night, choose an alive player. You must always vote on them and if they are executed your team loses.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Vertere",
       "desc": "1 Townsfolk turns evil after day 2, even if dead or droisoned. evil learns that player instead of each other.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Ethnoltoc",
       "desc": "Each night*, a player who has been drunk or poisoned this game dies. When you die all currently poisoned players die tonight.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Guinea Pig",
       "desc": " 1 player might die at any time. If you publicly guess who: They are resurrected tonight. ",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Flu",
       "desc": "Each night, choose a player: one of their living neighbors is drunk until dusk. If you die, the Storyteller chooses from now on (you learn who).",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Hotelier",
       "desc": "On your 1st night, choose a player for each on-script Outsider: they gain that Outsider's ability & learn this. [No Outsiders]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Heckler",
       "desc": "The first evil player to nominate and execute another player wakes each night* to choose a player; chosen players die.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Whistleblower",
       "desc": " Outsiders keep their abilities after death. If a good player is mad as the Whistleblower, Outsiders might be drunk.  [+1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Undercurrent",
       "desc": "Townsfolk learn false information every other night, except for when learning information about you.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Deprautili",
       "desc": "On your first night learn a task. If you complete it: gain a not-in-play Townsfolk ability. [Some good players are good Deprautili & do not learn Minion information]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "White Knight",
       "desc": "Once per game, when a good player is chosen by the Demon, they live and turn evil. You learn who this happens to.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Guard Dog",
       "desc": "Each night*, learn any number of players & you may choose one. Chosen players die.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "New Character",
       "desc": " If no-one dies from execution all players learn drunk information until dusk.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Taskmaster",
       "desc": "Each night*, choose a player & an Outsider. They become that Outsider until dusk. [-1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Crazed",
       "desc": "Each night*, a player might die: You learn who. When you don’t kill…",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Baku",
       "desc": "Your ability is based on some of the characters that have nominated you. Once per game, choose that you & a good player learn your ability & it stops changing",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Fractal",
       "desc": " Each night* choose a player, their neighbors die. Twice per game, they die instead.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Theorem",
       "desc": "One your first night, choose a number 1-3. Each night choose that many players. You do not know the rest of your ability. One good player knows you are in play.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Besmirch",
       "desc": "Each night*, choose a player they die. One your first night, choose a good player and a Minion. That player is permanently affected by that Minions ability (the st makes the decisions). If you choose a passive Minion they gain that ability. ",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Vastiodian",
       "desc": "Each night*, choose 2 players: they die. The 1st Outsider you kill becomes drunk instead & neither die. [+1 Outsider]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Just like what if we played botc ",
       "desc": "1 good player wakes each night*, to choose a player: chosen players die (evil ones dead votes may secretly not count). [1 more than half of all players (rounding down) are evil]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "",
       "desc": "Every other night*, choose a player: they die. Minions share a Demon ability and chooses who has it each night. If a Minion dies with the extra Demon Minions no longer choose.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Moondweller",
       "desc": "Each night*, choose a player: they die. Good players learn false information after learning about you.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "???",
       "desc": "Each night*, choose 2 players (not yourself). the 1st dies & the 2nd can't die tomorrow. Once per game, choose that both die instead.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Bomb Tech",
       "desc": "Each night*, you may choose a player: they die. The first time you die: players equal to the nights you didn’t kill die instead.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Fallen Leader",
       "desc": "Every other night*, choose a player: they die. [+1 Minion]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Autocrat",
       "desc": "Each night, choose 2 players: one dies tomorrow night. If a chosen player votes tomorrow: both die tonight.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Utilitarian ",
       "desc": " Each night*, choose a player: they die. Executed Minions’ neighbors die tonight.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Mother of war",
       "desc": "Each night*, choose a good player for each dead Minion: they die. If no player is executed the evil team wins. [+1 Minion]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Philanthropist ",
       "desc": "Each day choose for something good to happen to the losing team. One player on that team might learn what.",
       "cat": "Traveller",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Forerunners",
       "desc": "Characters abilities might be changed slightly before the game.",
       "cat": "Fabled",
       "matches": 0,
       "wins": 0,
       "attr": "Elden"
     },
     {
       "name": "Biologist",
       "desc": "Each night, choose 2 players: learn 1 of their characters. If either are drunk or poisoned, learn false info.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Physicist",
       "desc": "If the Demon kills you, learn the in-play evils & choose 1 to make drunk until the 2nd dusk from now.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Psychologist",
       "desc": "1 evil player thinks they're good & doesn't get evil info. If you die, they learn the truth & their team.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Chemist",
       "desc": "You have a fusion of 2 in-play characters' abilities. Each day. privately guess which: if right, learn your ability.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Insurrectionist",
       "desc": "Once per game, at night, choose a player: if good, they become & learn your character. If evil guesses you (once), your team loses.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Cryptographer",
       "desc": "Each day, guess what the setup modification is: if right, learn the Demon. [???]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Fact Checker",
       "desc": "Players may make 1 public uncertain statement a day. Each night*, learn how many were true: if 0 were, you're drunk tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Gunsmith",
       "desc": "If you nominate & execute 2 players, choose a player that dusk: if both executees were good, they die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Revenant",
       "desc": "If the Demon kills you, from now on, each night*, choose a player: if not the Demon, they die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Psychic",
       "desc": "Each day, visit the Storyteller to learn 1 thought they had last night.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Cavalry",
       "desc": "Each night*, choose a player: if Cavalry dies tonight, they're drunk until dusk tomorrow. [+0 to +2 Cavalry]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Seditionary",
       "desc": "You start knowing 1 in-play Minion. If you nominate & execute a good player, they are drunk until dusk tomorrow.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Operative",
       "desc": "Each day, visit the Storyteller to learn 1 word relating to some in-play characters & how many it relates to.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Bodyguard",
       "desc": "Each night*, choose a character: if the Demon (they learn your choice) kills them tonight, learn the Demon player.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Arsonist",
       "desc": "Once per game, during the day, publicly declare that if you've only nominated good, they all die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Cartographer",
       "desc": "Each night, you may choose a player: learn the direction of the Demon. After the Xth time, you're drunk. [+X Outsiders]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Perfectionist",
       "desc": "You start knowing a set of players including the Demon. If a non-Demon you know is executed, evil wins (even if you are dead).",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Mindwarp",
       "desc": "Each night, learn a statement: if you're not mad it's false tomorrow, the Demon learns it & may choose if it is true or false.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Conspiracist",
       "desc": "You get reversed info & it moves to a Townsfolk neighbour each night, even if you die. Each night*, learn which direction.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Bar Fighter",
       "desc": "Each night*, if you would be drunk or poisoned, you aren't & a living good neighbour dies.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Gentleman",
       "desc": "If a player publicly declares their true character & is executed, evil wins.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Dealer",
       "desc": "Evil abilities are altered (they know what into), even if you die. Each day, guess an ability: learn if evil has it.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Brigand",
       "desc": "On the final day, dead players' votes secretly don't count, even if you are dead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Ghoul",
       "desc": "You can't die. The 3rd time you should, your team loses.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Wrench",
       "desc": "The Demon starts knowing the setup modification: if they kill you, learn it. [???]",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Inspector",
       "desc": "You start knowing 2 players. Each day, if you weren't mad 1 is evil, you might be executed.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Malpractitioner",
       "desc": "Each night, choose a player: their ability is altered (you know what into).",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Graverobber",
       "desc": "You learn the character and gain the ability of executees.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Chessmaster",
       "desc": "You start by choosing a player to poison. You know & have their ability. If they die, choose again.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Shapeshifter",
       "desc": "You can't die during the day. Twice per day, publicly use a non-Demon's ability.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Earthmover",
       "desc": "Once per game, before nominations, publicly choose 2 players: they die tonight (even if for some reason they couldn't).",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Signal Jammer",
       "desc": "Nominators are secret. Executees may guess their nominator: if right, they are executed instead.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Chronomancer",
       "desc": "The 1st time the Demon dies while 5 live, they live but register as dead (they wake every other night), but all learn this when you die.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Hypnotist",
       "desc": "Each night, see the Grimoire then choose a player & a character: they think something about that character (you know what).",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Quixote",
       "desc": "If the Demon dies (ending the game), play for 1 more day (all learn this). The living executee's team (or good, if no-one dies) loses.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Sentry",
       "desc": "If your team loses, all players claim a character: if no-one lied or you guess an opposing player who did, your team wins. [-1 to +1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Killswitch",
       "desc": "Once per game, at night*, if you've executed a player, choose that from now on, good players' eyes are closed & tallies are secret (even if you die).",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Scale",
       "desc": "Each night*, choose which players are dead (the total number remains).",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Carnifex",
       "desc": "Each night, choose 3 players (they learn this): if 1 dies today, choose a player: they die.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Viper",
       "desc": "Each night*, if you were nominated today, you may choose a player who didn't vote: they die.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Perjurer",
       "desc": "Townsfolk receive reversed info unless they are mad they are a different character.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Veraxillus",
       "desc": "Each night*, choose a player: they die. You might have the abilities of characters you're mad you are: if you do, learn this.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Quaesitor",
       "desc": "You start knowing 5 characters: if none live, evil wins at dusk (all learn this). Each night*, choose a player: they die. ",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Doomsday Clock",
       "desc": "Each night*, choose a player: they die. Executed Minions keep their ability & if 0 live, evil wins at dusk (all learn this). [+1 good Minion not in evil info]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Bio-Weapon",
       "desc": "Each night*, choose a player: they die. Evil & poisoned players poison their good nominees. If all alive good are poisoned, evil wins at dusk (all learn this).",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Absolut",
       "desc": "Townsfolk abilities yield false info except 1. Evil may (once) publicly guess who: if right, or after day 5, evil wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Hysteria",
       "desc": "On day 3, the living may duel (all learn this): both learn a question & whoever fails to answer it correctly 1st dies. After day 3, evil wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Muras",
       "desc": "Each night, choose 3 players: if any nominate tomorrow, they die that night. If none do, all die.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Fluxicon",
       "desc": "Each night*, choose up to the number of alive evils: that many players die tonight.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Cataclysm",
       "desc": "Each night*, choose a player: they die. For each failed nomination by good today, or if none nominated, choose 1 more.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Excelsus",
       "desc": "Each night*, choose any amount of characters: learn how many are in-play. If all are, all die.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Vitoo",
       "desc": "Each night*, choose a player: they die. If you nominate a Minion & they live, swap characters tonight.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Singularity",
       "desc": "Good players' abilities are altered. Each night*, choose a player: they die & learn their ability.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Cessation",
       "desc": "After day 12, evil wins. For each nomination, the end comes 1 day sooner; for each executed Minion, it comes 2 later.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Skayl",
       "desc": "All know that the game ends after day 3 (the team with more dead loses) or if no-one dies in a day (evil wins).",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Infernoplex",
       "desc": "Each night, all players learn a question & must answer it correctly tomorrow or evil wins at dusk. After day 5, evil wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Panopticon",
       "desc": "Each night*, a player might die. 1 good player knows that whoever wins, loses & vice versa.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Specimen",
       "desc": "Each night*, you may choose a good player who publicly declared an ability today: have that ability until dusk. Otherwise, 2 players die.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "See-Ling",
       "desc": "Each night*, if no-one died today, choose a player: they die. After the 3rd execution, evil wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Deadlock",
       "desc": "Each night*, choose 2 players: the 1st dies & the 2nd's team loses if they nominate tomorrow (they learn this).",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Loonboon",
       "desc": "Players chosen by Lunatics die (you may choose they don't). You choose for dead Lunatics. [Outsiders are 2 Lunatics]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Historian",
       "desc": "Name a character & day. If they have 'on/after day X' in their ability text, X becomes that day.",
       "cat": "Fabled",
       "matches": 0,
       "wins": 0,
       "attr": "Super"
     },
     {
       "name": "Pyreseer",
       "desc": "You start knowing 2 players who'd help your team win by being executed tomorrow.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Grave Robber",
       "desc": "You start knowing an alive evil character. When either neighbour dies, learn another tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Cryptcracker",
       "desc": "On your 1st day, visit the Storyteller to learn 2 statements. If you guess (once) which are true, learn a true statement.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Palm Reader",
       "desc": "On your 1st night, a Minion becomes a not in-play Townsfolk. They might register as the Minion they were, even if you die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Spiritmancer",
       "desc": "Each night, choose 2 players. When you die, you learn how many chosen players are evil tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Esotericist",
       "desc": "Each night, choose an alive player: a chosen Minion swaps characters with the Demon.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Firefly",
       "desc": "Each night, choose 2 players: you learn if either is evil. A chosen Demon may choose to swap characters with a living Minion.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Starling",
       "desc": "Each night, choose an alive player: you learn how likely the Storyteller thinks they are to die by the end of tomorrow night.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Bookbinder",
       "desc": "Each night, choose a player: if evil, they learn who you are, & if you're not executed in 2 days they die, even if you're dead.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Eavesdropper",
       "desc": "Each night*, you learn how well the evil team is coordinating.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Tachygraphist",
       "desc": "Each night*, you learn a player the Storyteller thinks is leading your team astray.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Calligrapher",
       "desc": "Once per game, during the day, privately tell the Storyteller a statement: the Storyteller corrects or adds to it.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Traverser",
       "desc": "Once per game, during the day, ask the Storyteller a question & learn an in-play character that can help with it.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Mystic",
       "desc": "Once per game, at night, choose any number of players: you learn how many are evil. If none are, you learn false info.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Bird-of-Paradise",
       "desc": "Once per game, at night*, choose 3 players: tonight, they can't die & learn true info but are drunk until dusk.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Guide Dog",
       "desc": "1 good player can't die at night. Visit the Storyteller to learn a hint (once) & guess who (once), learning if you were correct.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Wind Shifter",
       "desc": "If you are executed, an alive Outsider might be executed instead. [+1 Outsider]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Nautilus",
       "desc": "If you die, you become drunk instead. On your 3rd night, you learn an evil player, then become drunk.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Highwayman",
       "desc": "You know a living non-Demon player. Every even night*, you may kill them. If you kill a good player, learn an evil player.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Psychopomp",
       "desc": "A good player is drunk. If they die, the Storyteller chooses who dies at night from now on, even if you die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Firework",
       "desc": "Evil may each guess once who you are. On final day: 1 good learns who you are per wrong guess & if all were, everyone does, even if dead.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Bloodletter",
       "desc": "You start knowing an in-play character. Each night* (even if dead), if they live, a player dies.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Translator",
       "desc": "You start knowing 2 players, at least 1 of whom is good. If you die, 1 alive known player becomes drunk or evil.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Chamberlain",
       "desc": "You & the Demon know 2 not in-play characters. The Demon may choose (once) who becomes each (no new Demons), even if you die.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Worm Picker",
       "desc": "Each night, choose another alive player: they might be drunk at any time until you choose again, even if you die. The Demon learns them.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Catalyst",
       "desc": "Once per game, at night*, a living good neighbour dies. If you die by execution with this ability, it triggers tonight.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Smokeye",
       "desc": "The Demon's Townsfolk neighbours learn false information, even if you die.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Bridesmaid",
       "desc": "If only 1 other good player lives, you learn this & if they die, your team loses.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Matchstick Girl",
       "desc": "If a player was attacked but didn't die, you die tonight & your Townsfolk neighbours are drunk until dusk.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Sellsword",
       "desc": "If a Minion nominates you (even if dead), a player dies tonight.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Wheelwright",
       "desc": "If you die, the next dead Minion keeps their ability & may choose a not in-play Minion to become.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Errant",
       "desc": "You start knowing a Townsfolk & Outsider player. They might register as evil & as the Errant. [+1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Apostle",
       "desc": "On your 1st night & day, the Storyteller's decisions favour your team. [+1 Outsider, the setup favours your team]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Coral Snake",
       "desc": "You start knowing a not in-play good character. Each night*, you may choose to swap characters with the Demon.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Ruffian",
       "desc": "The 1st time you vote for an evil player & they're executed that day, they don't die.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Idol",
       "desc": "If you nominate, a player who voted dies tonight. If only 1 good player voted for your nomination, they learn who you are tonight.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Rattlefog",
       "desc": "Townsfolk who nominate today learn false information tonight & tomorrow day. If none nominate, all do.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Raptor",
       "desc": "If an evil player died today, choose 2 alive players tonight (even if dead): 1 dies.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Carver",
       "desc": "When you draw the Carver, draw 3 more tokens & keep 2, then gain a not in-play good ability. [+2 good characters, good become missing evils]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Hysteria",
       "desc": "Executions occur immediately & the day ends if (& only if) a vote fails. Each day, if no living good players are executed, evil wins. [1 Minion is Hysteria]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Azoumir",
       "desc": "Each night*, choose a player: they die. Every 2nd night, a Minion becomes a not in-play Minion.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Pyrstyrm",
       "desc": "Each night*, choose a player: they die. Minions might register falsely: if any did, a player dies tomorrow night.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Cuckoo",
       "desc": "Each night*, choose a player: they die. The 1st time you die, play 1 more day. If a player's then executed, a Minion becomes Cuckoo.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Vitriol",
       "desc": "Each night, choose a player: players they nominate might die at any time. When you choose a new player, the previously chosen player dies.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Runewraith",
       "desc": "Each night*, if you voted for today's executee, choose 2 players: they die. Otherwise, a player dies*.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Auk",
       "desc": "Once per day, you may choose that the nominator nominates themself instead.",
       "cat": "Traveller",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Operative",
       "desc": "You have no alignment & start by seeing the Grimoire. When you leave, all players decide if you win.",
       "cat": "Traveller",
       "matches": 0,
       "wins": 0,
       "attr": "Nycto"
     },
     {
       "name": "Navigator",
       "desc": "You start knowing if the number of steps between your evil neighbors is even or odd.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Inquisitor",
       "desc": "Each night, choose a player: they might be drunk until dusk. Next night, learn if their ability worked abnormally.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Auspex",
       "desc": "Each night, learn any character token: it is a hint about the Demon.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Tiler",
       "desc": "Each night, choose an evil character: learn what direction they are in. If out of play, this is arbitrary.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Calibrator",
       "desc": "Each night, choose a player: learn the character type of a player a set direction & number of steps away.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Samurai",
       "desc": "Each night*, choose a player: chosen Minions must guess who you are, or die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Sceptic",
       "desc": "Each night*, if you were mad about an evil player being good, become an not in play Outsider.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Jester",
       "desc": "Each night*, if you were mad as another character, learn if the info you claimed was true.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Archangel",
       "desc": "The 2nd time you nominate & execute a player, all learn you & you can't die at night.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Censer",
       "desc": "The Demon's kills are 1 step clockwise from their choices.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Conductor",
       "desc": "Each night, learn 2 characters: at least 1 is in play. If both are, they register as each other until dusk.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Disciple",
       "desc": "If the Prophet started in play, you are evil, but do not know this.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Sprite",
       "desc": "On night X, a player is drunk until dusk. [X Outsiders are Sprites]",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Illusionist",
       "desc": "1 player's character and alignment might misregister. Each night, learn if they misregistered since dawn.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Costumer",
       "desc": "You and an evil player might register as each other, even if you're dead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Starstruck",
       "desc": "You think you are a particular Townsfolk, but you are not. You might have any other Townsfolk ability each night & day.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Mirrorwraith",
       "desc": "You think you are a Townsfolk & have their ability. It yields reversed info.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Puck",
       "desc": "Each night, choose 2 players: if they are the duplicate Townsfolk, their info is reversed. [2 duplicate Townsfolk]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Prophet",
       "desc": "Each night, choose a player: if you chose the Disciple, you become an out-of-play Minion. [+the Disciple]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Kenku",
       "desc": "Each night, look at the Grimoire. You may choose two non-Demon characters in the Grimoire to swap.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Brittlebones",
       "desc": "You cannot die during the day. Each night*, if you have survived death yesterday, choose a player: they die.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Smokescreen",
       "desc": "You register as a Demon too. If you are executed, all Townsfolk are poisoned until dusk.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Hypnotist",
       "desc": "Players & characters Outsiders learn about get false info tomorrow & tomorrow night, no matter what. [+1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Bogsnatcher",
       "desc": "Each night*, choose a player: they die. You may also choose to kill one of your living neighbors.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Cerruleon",
       "desc": "Each night*, choose a player & guess their character: if incorrect, they die. Otherwise, they are poisoned & another player dies.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Siren",
       "desc": "Each night*, you may choose a player: they die. You start by choosing a player: they learn you are in play, but turn evil if you don't kill.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Autumn"
     },
     {
       "name": "Herald",
       "desc": "On your 1st and 2nd night, learn how many other players woke up due to their own ability.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Lovebird",
       "desc": "You know the closest living Minion & their direction. If a living Outsider is between you, it's reversed. [+1 Outsider]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Statistician",
       "desc": "Each night, learn if a '...per game', may or might ability triggered since dawn.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Musician",
       "desc": "Each night, starting from you or the Demon, learn if their next radiating neighbours are the same character type.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Number Cruncher",
       "desc": "Each night, choose a player: learn a number. Cruncher numbers follow 1 rule: each has 1 guess & learns its accuracy. [+0 to +2 Crunchers]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Antiquarian",
       "desc": "Each night, choose up to 3 players & what you learn. Visiting the Storyteller might grant you an ability based on your choices.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Oculus",
       "desc": "Each night, choose a player or character: 1 Oculus learns if any players & characters Oculi chose tonight match. [+1 or +2 Oculi]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Cimlaaq",
       "desc": "Each night, learn 3 players: tomorrow, you may name a statement about them to the Storyteller. If false, you lose your ability.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Lamia",
       "desc": "Each night*, choose a player: if a Demon (once), they learn this: another living evil (if there's none, you) must die by dusk.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Social Butterfly",
       "desc": "Each night*, choose 2 other alive players: learn if either player ever learned anything true about the other.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Insomniac",
       "desc": "Each night*, if a good player learned false info yesterday, you learn what they should have. If none did, learn false info.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Eidolist",
       "desc": "Each night*, choose a player: if they died tonight, learn that 1 of 2 players was the most responsible for it.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Prince",
       "desc": "Each night*, if you nominated a player today, learn if they were the Demon. If a player you nominated is executed, stop waking.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Sleepwalker",
       "desc": "Each night*, if a player was mad they're the Sleepwalker after being nominated today, learn how many were good.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Guerrilla",
       "desc": "You know a gesture. Each night*, learn a character that showed it to the Storyteller. If a Minion did, you're drunk.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Quarterkeep",
       "desc": "Once per game, at night*, choose 4 characters: learn how many are in play, plus or minus how many of them nominated today.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Embalmer",
       "desc": "Once per game, at night*, choose a player: they rise with the ability 'Once, at night, choose a player: they’re drunk until dusk.'",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Lord",
       "desc": "Once per game, during the day, privately choose a dead player: the Demon's ability becomes another based on theirs. You both learn it.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Addle-Plot",
       "desc": "Once per game, during the day, privately learn 3 questions: for each answered wrong, a player dies tonight (& only they die).",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Philanthropist",
       "desc": "Each day, you may visit the Storyteller to learn a statement a Minion believes is true.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Fashionista",
       "desc": "Each day (not the 1st), you may learn a statement from the Storyteller that was at some point true, but is currently false.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Poetaster",
       "desc": "Each day, guess a player as a Minion to the Storyteller. If a player you correctly guessed is executed & dies, your team wins.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Scullion",
       "desc": "The 1st player you nominate gains this ability. If all who do are alive & good, you're safe from the Demon.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Mason",
       "desc": "Once per game, during the day, visit the Storyteller to learn the biggest mistake a team has made, but not which team.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Little Girl",
       "desc": "If all other players cover their eyes when you're nominated, tonight you learn how many Townsfolk voted.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Dovecotman",
       "desc": "Outsiders 'mad' they are the Dovecotman might be drunk & not die at night. [+1 Outsider]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Lion Tamer",
       "desc": "If you are nominated and executed by an opposing player, they instantly die. ",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Heathen",
       "desc": "If you died today or tonight, an opposing player (not the Demon) becomes a Heathen.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Planetseeker",
       "desc": "X is Y steps away from Z. On your 2nd day, privately choose what 1 variable is: the Storyteller tells you the other 2, or that it's invalid.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Marquess",
       "desc": "Each Outsider may privately learn a question & answer it any day. If correct, they learn this. [+1 Outsider, At least 1 is in play]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Confectioner",
       "desc": "If you died today or tonight, the Demon chooses a player: they become an evil out-of-play Minion. [-1 Minion & +1 Townsfolk]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Sticky-Fingers",
       "desc": "1 of your living Townsfolk neighbours is drunk & you have their ability.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Contortionist",
       "desc": "You think you're an Outsider & survive the 1st time you're executed. That night, choose 2 players: learn which are evil.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Ewerer",
       "desc": "The top-most living character (not a Townsfolk) is drunk. [+1 Outsider]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Burnwin",
       "desc": "If both of the Demon's neighbours are executed, your team wins. The 1st time they kill one of them, they survive.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Jimp",
       "desc": "When you learn that you died, publicly guess which Minions are in play: if incorrect, your team loses.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Watchmaker",
       "desc": "Other Outsiders on the script are numbered & you have the ability of the 1st. Each night*, replace it with the next in order.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Refugee",
       "desc": "All Outsiders might think they’re another Outsider. If so, 1 other thinks they're the Refugee.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Debtor",
       "desc": "On Night 4, you & another player die. If you’d die before then, instead add 1 to how many die.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Phasmosoph",
       "desc": "If you die, something helpful you did for your team becomes a mistake or obsolete & you may privately learn a hint about it next day.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Serf",
       "desc": "On night 3, you become a Townsfolk. [A Serf might replace a Townsfolk for each in-play Minion]",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Lotus Eater",
       "desc": "Each night, choose if 1 or both of your Townsfolk neighbours' abilities yield false info. If you die, the Demon gains this ability.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "March Lead",
       "desc": "The 1st day you're dead, call for hands on 3. Unless most alive follow, your team loses. If a follower nominates today, theirs does.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Glimjack",
       "desc": "Twice per game, at night, choose a player: learn if they're evil. You're evil until the final night, even if dead, drunk or poisoned.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Tanner",
       "desc": "If an evil player dies at night to another's ability, an alive player turns evil, even if you're dead. This ability targets you.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Flagellant",
       "desc": "Players mad the Flagellant is on the script might be executed without dying.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Witness",
       "desc": "2 characters might falsely appear as in-play & belonging to 1 player, even if dead. If you die at night, learn the characters.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Limner",
       "desc": "All ability choices target one player clockwise. You might only have this ability after death.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Will o' Wisp",
       "desc": "The 1st time each Townsfolk player's ability would yield true info, it's false.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Mind Reader",
       "desc": "Each night, choose a player: silently learn what the Storyteller thinks they want to hear & why.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Evoker",
       "desc": "If more than 3 players live & the Demon dies during the day, good can't win & evil wins in 2 days.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Senator",
       "desc": "The 3rd player to nominate each day has their team lose, unless you were the nominee.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Haunt",
       "desc": "Each night, choose a player: they learn this, & if they publicly disagree with you tomorrow, they or a neighbor might be poisoned.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Bullfighter ",
       "desc": "Each night, you may choose a player: if they're nominated tomorrow, voting starts instantly & evil wins if 0 Townsfolk vote.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Wyrwyner",
       "desc": "Each night, choose a player: the 2nd time they vote tomorrow, they're executed. On the final day, lose this ability.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Roulette",
       "desc": "On your 1st night, choose 2 groups of 3 players: each group wakes together. If 1 in the 1st is executed, all in it die tonight.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Gargoyle",
       "desc": "Each night*, choose a player: if good, they register as & think they're dead until you wake.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Spinewrithe",
       "desc": "All good players that learned info about evil players & characters die if it would cause the final day. [-1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Errata",
       "desc": "You know who you poison: it's a Townsfolk if 0 or 1 Outsiders live & an Outsider if 3 or more live. [-1 to +1 Outsiders]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Nebulos",
       "desc": "You know in-play Outsiders. For each you add, a unique Outsider may guess who you are to kill you. [+? Outsiders (choose which)]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Stigma",
       "desc": "Outsiders change alignment on death, even if dead. [-1 or +1 Outsider & Most Outsiders are evil]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Basilisk",
       "desc": "Outsiders (you know them) poison the 1st alive Townsfolk they nominate. Until all do, your team wins if 1 is executed. [-1 or +1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Abumbrella",
       "desc": "The Demon thinks they're a good character & is poisoned. You have their ability. Minions know 1 bluff each. ",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Dodomeki",
       "desc": "You think you're a Demon & have that ability. All but 1 alive Demon or Dodomeki is poisoned, cycling at dusk. [Minions are Dodomeki]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Diabolist",
       "desc": "You start by choosing 'day' or 'night': players killed then secretly lose their vote token & turn evil until final day, even if dead.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Umbra",
       "desc": "Each night*, choose a player: they die. Each time you kill an Outsider, Townsfolk info is reversed. It starts false. [+1 Outsider]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Babbako",
       "desc": "Each night*, choose a player: they die. If you've killed 1 good player for each Minion, you must kill Minions if any live. [+1 Minion]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "King of Typhon",
       "desc": "Each night*, choose a player: they die. Minions get a bluff you do. [+1 Evil Townsfolk; Evils neighbour evils]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Frankenstrats",
       "desc": "Each night*, choose a player: they die. Nominations secretly require 1 more vote for each time an evil was 'About to die' this game.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Lith",
       "desc": "Each night*, choose a player: they die. The 1st time a Minion dies, your clockwise neighbor turns evil & into their character. [The player clockwise of you is good]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Mori Morri",
       "desc": "On Nights 1, 2 and 3, choose an evil character to become (keep this ability). Demons might die at night*. [Minions are Mori Morri] ",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Mosssca ",
       "desc": "You don't know you're Mosssca until final day. Minions know it. Once, a player mad you're good becomes it & evil. 1 dies each night*.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Kalaido",
       "desc": "Each night*, you may choose a player: they die. Their team wins if an opposing player dies by execution tomorrow.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Qin Carezze",
       "desc": "Each night*, choose a player: they die. 1 good player knows if they die, tonight Minions get Minion info (they don't otherwise). [+1 in-play Minion]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Ikamego",
       "desc": "Each night*, gain the ability of the Demon most alive players are mad is in play until you gain another. If it's Ikamego, 2 players die.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Engima",
       "desc": "Players mad Engima is on-script might make your ability up to 2 words longer at dusk. Each night*, choose a player: they die.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Evispa",
       "desc": "You think you're another Demon & the Storyteller has a Demon ability. If you publicly claim to be Evispa before nominations, your team wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Tomma Tabu",
       "desc": "Each night*, choose a player: they die. Demons & Minions left in the bag are the Storyteller. [All Outsiders are in the bag]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Ruttur",
       "desc": "Each night*, choose a player: they die. You know which Minion is good. [+1 secretly good Minion. Minions think you're a Minion.]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Ahe",
       "desc": "Each night*, choose a player: they die. [Minions are good, but think they're evil. 1 or 2 Townsfolk are evil for each Minion]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Dhergma",
       "desc": "Each night*, choose a player: they die. If 1 is executed tomorrow, everyone but you sitting between the 2 dies; otherwise, evil wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Giaxxo",
       "desc": "Each night*, choose 1 player: they die, or 3: they learn this & die at dusk - the 1 that helps evil most might not.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Oirubu",
       "desc": "Half of in-play Townsfolk yield false info & you choose which. Each player may (once) publicly reverse their info. After Day 4, evil wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Concorhast",
       "desc": "Uncast alive votes go to nominators. Each night, choose a player: they're 'About to die'. Evil nominations fail if you are & wins after day 4.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Makha",
       "desc": "Day 3 onwards, if a nomination fails, both players die. If you're executed, or if no one dies in a day, evil wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Society",
       "desc": "If 3 players publicly agree, good wins if they're the same character type. If not or day 4 ends, evil wins. [No Demon, +1 Minion]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Deminotier",
       "desc": "Each night*, a Demino's good clockwise neighbor becomes an evil Demino. Evil wins if mostly Demons live & loses after Day 5. [-1 Minion]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Imze"
     },
     {
       "name": "Provost",
       "desc": "You start knowing how many editions in-play characters are from.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Daredevil",
       "desc": "You start knowing 2 Townsfolk players. They might die at any time.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Samurai",
       "desc": "You & Minions start knowing a rule. If a Minion breaks this rule, you learn them.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Seneschal",
       "desc": "You start knowing the highest number of in-play characters are from a particular edition.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Enchantress",
       "desc": "You start knowing one Minion character. If they are in-play, they are drunk while you live.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Perruquier",
       "desc": "You start knowing an out-of-play good character. Once per game, at night*, choose a player: if a Townsfolk, they become that character.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Safecracker",
       "desc": "You start knowing 3 characters. Each night, guess the steps to each (0 if not-in-play): if right, learn an evil player & another 3 characters.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Solicitor",
       "desc": "Each night, choose a character: learn a player that a player with that character would want to speak to tomorrow.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Attorney",
       "desc": "Each night, learn a player: if they are 'about to die' tomorrow & aren't executed, learn a Townsfolk player that night.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Ewerer",
       "desc": "Each night, choose a new character (not a Traveller): if in-play, they're drunk until dusk, if not-in-play, you're drunk from now on.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Cyclist",
       "desc": "Each night, choose a good character: you learn how many character types sit between you and that character (arbitrary if not-in-play).",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Prohibitionist",
       "desc": "Each night*, if all living players are sober and healthy, you die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Executrix",
       "desc": "Each night*, learn if today's executee has exactly 1 evil living neighbor.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Stickybeak",
       "desc": "Each night*, choose a player: if the Demon, 1 of your living neighbors dies.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Psephologist",
       "desc": "Each night*, you learn how many players nominated by Outsiders today are evil. [+1 Outsider]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Embalmer",
       "desc": "Each night*, choose a new dead player. When you die, learn how many of each character type you selected.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Prestidigitator ",
       "desc": "Each night*, choose a player (not yourself): if they were to die tonight, they swap characters with a worse kill (once).",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Lapidary",
       "desc": "Each night* choose a player: if you nominate them tomorrow & they are a good player leading your team astray, they die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Seafarer",
       "desc": "Each night*, learn if the Demon's kill nearest to themselves was closer clockwise or anti-clockwise (starting from the Demon).",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Bibliosoph",
       "desc": "Each day, you may visit the Storyteller and ask a question: learn a player who could help answer it.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Thaumaturge",
       "desc": "Each day, visit the Storyteller to learn an impossible event. Once per game, you may choose it happens tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Wiseacre",
       "desc": "Each day, you may visit the Storyteller to learn a true statement. If any statement becomes false, you die that night.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "High Roller",
       "desc": "Each day, you may visit the Storyteller & learn an event. Propose a wager, that if accepted, occurs if the event does.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Polymath",
       "desc": "Each day, visit the Storyteller to learn a true or false statement (different from last) about a new character type (if none are new, any).",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Anesthetist",
       "desc": "Once per game, at night, you may choose that Minions don't wake to use their ability tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Diver",
       "desc": "Once per game, at night*, choose to become the 1st evil character that died this game.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Aeronaut",
       "desc": "Once per game, at night*, choose that the least correct living player (not the Demon) dies.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Brigadier",
       "desc": "Once per game, during the day, visit the Storyteller to learn the opposing team’s most impactful decision.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Mythbuster",
       "desc": "Once per game, during the day, visit the Storyteller to learn the false statement that the most good players are mad is true.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Concierge",
       "desc": "Once per game, visit the Storyteller to learn a task that would help the evil team. If you do it, learn an evil player & another task.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Clerk",
       "desc": "On your 1st night, choose a character: learn how many chosen by other Clerks (or you, if no others) are in-play. [+0 to +2 Clerks]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Tautologist",
       "desc": "On your 1st day, you may visit the Storyteller & learn a statement. It is always true.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Shogun",
       "desc": "On your 1st day, visit the Storyteller to learn a rule. Other players who follow it can't die at night.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Valet",
       "desc": "You have the ability of the 1st player to nominate you. If they are the Demon, you're poisoned instead.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Valleywalker",
       "desc": "You think you're a different good character & receive false info. The Demon can't kill you at night. [Your neighbors are evil]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Bematist",
       "desc": "You start marked. Each night, choose how many steps your mark moves. When you die, learn what characters you marked.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Cartoonist",
       "desc": "You may draw a picture about the game. Each day, you may visit the Storyteller & they will add 1 true thing to the picture.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Abbot",
       "desc": "If you die at night, evil votes secretly don't count tomorrow.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Martial Artist",
       "desc": "If you die at night, wake & choose a player (different from last): if they're evil, you live.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Obake",
       "desc": "If you nominate & execute a Minion, swap characters with them.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Caricaturist",
       "desc": "If you're mad you're an in-play character (not your own), they're safe from evil players.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Cryptozoologist",
       "desc": "If you nominate the Demon, they turn good & whoever wins loses & vice versa. If Minions guess you (once), evil loses, even if dead.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Sabreur",
       "desc": "If you vote for a Minion, they die. You lose this ability if you voted more times than the number of evil players.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Ensign",
       "desc": "If the Demon kills you, both of their neighbors die, unless it would cause evil to win.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Stuntman",
       "desc": "If the Demon kills you, publicly choose a player: if evil & they live tonight, they become good.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Bellfounder",
       "desc": "If the Demon kills an Outsider, you learn an evil player & their character. [+0 or +1 Outsider]",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Chamberlain",
       "desc": "If today was the 1st day an evil player was nominated, tonight, learn the character of 1 who was.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Hussar",
       "desc": "The 1st time a Hussar is killed by the Demon, 2 good players become Hussars tonight.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Warlord",
       "desc": "Only Townsfolk can die.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Matador",
       "desc": "A Minion knows you. If they aren't mad you're evil, they might be drunk.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Pedagogue",
       "desc": "Players who don't vote for your 1st nomination are drunk that night.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Abjurist",
       "desc": "Players who nominate a living evil player are safe from the Demon that night.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Hooligan",
       "desc": "Each night, a player neighboring an Outsider is drunk, even if you are executed.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Barfly",
       "desc": "You think you are a Townsfolk. Each night, the 1st Townsfolk to choose a Barfly tonight becomes the Barfly instead of you.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Ideologue",
       "desc": "When your team would win, name a character of each type (not you): if 2 or more are not-in-play, your team loses, even if dead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Scallywag",
       "desc": "If all living good players are Outsiders, your team loses, even if dead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Philister",
       "desc": "The most correct good player registers as an evil Demon to good abilities, even if you are executed.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Sybarite",
       "desc": "The 1st time a Minion is executed, all Townsfolk are drunk until dusk, even if you're dead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Neophyte",
       "desc": "The 1st time the Demon kills an Outsider, they die instead & the Outsider becomes an evil out-of-play Demon.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Tyrant",
       "desc": "Players mad you are evil might die tonight, even if you're dead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Arachnologist",
       "desc": "1 Minion might register as good & as a Townsfolk or Outsider to good abilities. Each night*, learn if you voted for them today.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Kleptocrat",
       "desc": "Each dusk until next, a Townsfolk is drunk, unless you voted differently than the Demon today, even if executed. The Demon knows you.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Star-Crossed",
       "desc": "When you learn that you died, publicly make a wish using 10 or fewer words. The Storyteller grants it, but may twist it to hurt your team.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Handler",
       "desc": "You start knowing a signal. You may do it (once) during nominations, if more than 3 players live, to end the day immediately with no execution.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Apocrypha",
       "desc": "Each night, view the Grimoire & choose a player: something they learned since dawn becomes false.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Paranoia",
       "desc": "Each night, choose a player per living Minion: tomorrow they're mad 'about to die' players are good & shouldn't be executed or they might be.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Demagogue",
       "desc": "Each night*, up to 3 players who voted for your nominee today might be poisoned (you know who).",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Dajjal",
       "desc": "Each night*, choose a player: the 1st time they die tonight, they don't & 2 players die tomorrow night.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Jörmungandr ",
       "desc": "You know the player you sit furthest from. If they are your living neighbor, 1 good player learns this & your team wins at dusk.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Escape Artist",
       "desc": "You may close your eyes when nominated & guess 3 players (not Minions) who voted (evil can't say who): if right, your team wins.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Nyx",
       "desc": "You & the evil team don't learn each other. 1 Outsider thinks they're you. If you publicly guess the Demon (once), your team wins. [+1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Astaroth",
       "desc": "You can't die & may see the Grimoire any time. Good may privately ask you a question (once each) & might die or turn evil if answered truthfully.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Aletheia",
       "desc": "If you vote & and the nominee lied during their defense, they are executed after the vote is tallied.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Jack-in-the-Box",
       "desc": "If you're nominated before final day, your nominator is executed immediately & that night, you see the Grimoire & poison a player.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Barbarossa",
       "desc": "If all living good players are Outsiders, your team wins, even if dead. Townsfolk die instead of them at night. [-1 or +1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Phantasmagoria ",
       "desc": "If you removed 1 Outsider, players register falsely to their Townsfolk neighbors. If you added 1, only Outsiders do. [-1 or +1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Boustrofiend",
       "desc": "All Townsfolk from you to the Demon clockwise receive reversed info. Each night*, the direction switches. [You sit opposite the Demon]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Vinogenesis",
       "desc": "The most & least correct good players are poisoned (you know who).",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Morningstar",
       "desc": "Players who vote on their own nomination might die tonight.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Kryptoloa",
       "desc": "Players of each character type may publicly guess the set-up modification (once per type): if right, their team wins. [Any set-up]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Yaldabaoth",
       "desc": "1 opposing player registers as you would to good players' abilities. If you guess them (once), your team wins, even if dead.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Apollyon",
       "desc": "On the final night, if you are dead, all others die (even if they can't), you & 2 dead players emerge, & you swap characters with the Demon.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Dioskouroi",
       "desc": "A Townsfolk thinks they're you, you both think you have their ability & know each other. You don't know the evil team. The Demon knows which is good.",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Avari",
       "desc": "Each night*, choose 2 players: they die. If no Townsfolk live, your team loses. [+1 Outsider]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Ulfrik",
       "desc": "Each night*, choose a player: they die. Minions who nominated today may act twice tonight.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Sidewinder",
       "desc": "Each night*, choose a player: they die. Townsfolk info is reversed each time 1 is executed. [-1 Outsider].",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Vidarr",
       "desc": "Each night*, choose a player: they die. For each Minion nominated by a good player today, choose 1 more.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Kurs-Haal",
       "desc": "Each night*, you may choose a player: they die & all players guess another player who’s still alive - wrong players die.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Frak-Tuul",
       "desc": "Each night*, choose a player: they die & players with their character die too. [Townsfolk characters might be duplicated]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Acrimortem",
       "desc": "Each night*, choose a player: they die. The Townsfolk neighbors of the most recent executee are poisoned. [-1 Outsider]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Mephiticus",
       "desc": "Each night*, choose a player: they die. Townsfolk nominated by Townsfolk are poisoned until tomorrow dusk. [-1 Outsider]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Antaph",
       "desc": "Each night*, choose a player: they die. Each time a Townsfolk is executed, gain a Demon ability (without kills). [-1 Outsider]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Vilgrasp",
       "desc": "Each night*, choose a player: they die. The 1st time this kills an Outsider, you gain an out-of-play Minion ability. [+1 Outsider]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Loxodaunt",
       "desc": "Each night*, choose a player: they die. If no Townsfolk live, evil wins. If a living Outsider guesses you (once), good wins. [+1 Outsider]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Graygu",
       "desc": "Each night*, choose a player: they die & your ability changes based on theirs (you know it). Each day, the 1st to visit the Storyteller learns it (once each).",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Omnoculus",
       "desc": "You know how many Outsiders there are & may publicly guess (once) who they are: if correct or after Day 4, evil wins. [+0 to +2 Outsiders]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Society",
       "desc": "If 3 players publicly agree, good wins if they're the same character type. If not or day 4 ends, evil wins. [No Demon, +1 Minion]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Necrodeux",
       "desc": "Each time a player dies (not from this ability), you may, tonight, choose a player: they die. If no one died today, evil wins.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Architect",
       "desc": "On your 1st night, choose a character of each type (not a Traveller): for each 1 out-of-play, a player becomes that character.",
       "cat": "Traveller",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Evolutionist",
       "desc": "Every player may visit the Storyteller to learn 1 condition. If they meet this condition, they may visit again to upgrade their ability & learn it.",
       "cat": "Fabled",
       "matches": 0,
       "wins": 0,
       "attr": "Soothslayer"
     },
     {
       "name": "Brawler",
       "desc": "On your 1st night, 1 Minion player may choose to be drunk (you learn this). If they don't & are executed, good wins.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "LadyMist"
     },
     {
       "name": "Naiad",
       "desc": "You start knowing 1 in-play evil character. Once per game, at night, steal their ability until dusk.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "LadyMist"
     },
     {
       "name": "Novelist",
       "desc": "On the final night, guess the Minions & learn which are correct. If you die at night, guess immediately instead.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "LadyMist"
     },
     {
       "name": "Satyr",
       "desc": "Evil players think the Demon is a Minion (you know which). Each night, evil chooses who acts as the Demon would.",
       "cat": "Townsfolk",
       "matches": 0,
       "wins": 0,
       "attr": "LadyMist"
     },
     {
       "name": "Lich",
       "desc": "If you are dead & evil would lose, play for 1 more day instead. If you are not executed the next day, your team loses.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "LadyMist"
     },
     {
       "name": "Tipster",
       "desc": "You are evil if (& only if) a Minion lives. If you die, you become good.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "LadyMist"
     },
     {
       "name": "Nihilist",
       "desc": "If a Townsfolk executes 1 of your good neighbors, you become evil & learn the Demon tonight, even if dead.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "LadyMist"
     },
     {
       "name": "Draugr",
       "desc": "Each night, choose a player: they are safe from you. If you haven't chosen an alive Minion when you die, another player dies tonight.",
       "cat": "Outsider",
       "matches": 0,
       "wins": 0,
       "attr": "LadyMist"
     },
     {
       "name": "Bloodmage",
       "desc": "You register falsely to your Townsfolk neighbors. If you removed an Outsider, the Demon has this ability instead. [-1 or +1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "LadyMist"
     },
     {
       "name": "Yuki-Onna",
       "desc": "You start knowing the Outsider players. Once per game, at night*, choose 1: they die. [+1 Outsider]",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "LadyMist"
     },
     {
       "name": "Titan",
       "desc": "Each night, choose a player: the Demon learns their character. If you would die at night, you don’t & gain all Minion abilities",
       "cat": "Minion",
       "matches": 0,
       "wins": 0,
       "attr": "LadyMist"
     },
     {
       "name": "Agregore",
       "desc": "Each night*, choose a player: they die. On the final day, votes by Minions secretly don’t count. [+1 Minion]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "LadyMist"
     },
     {
       "name": "Dominus",
       "desc": "Each night*, choose 2 players: they die. If an evil player is dead, choose 1 instead.",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "LadyMist"
     },
     {
       "name": "Wyrmwraith",
       "desc": " Each night* choose a player: they die. The 1st time you die, choose a player tonight: they die. [+the Lich]",
       "cat": "Demon",
       "matches": 0,
       "wins": 0,
       "attr": "LadyMist"
     }
   ]`);
export async function GET({ url }) {
  return new Response(JSON.stringify(currentData), {
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function POST({ url, request }) {
  const body = await request.json();
  currentData = body;
  return new Response(JSON.stringify(currentData), {
    headers: {
      "content-type": "application/json",
    },
  });
}
