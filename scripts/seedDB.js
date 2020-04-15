const mongoose = require("mongoose");
const db = require("../models");
require("dotenv").config();

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://" + process.env.DBUSER + ":" + process.env.DBPASS + "@ds129018.mlab.com:29018/heroku_g9r80cft"
);
// Cards, types, units, 'spells', gear/equipment
//need costs, rule text
const gameCardSeed = [
  {
    name: "Thug",
    image: "thug.jpg",
    attack: 3,
    HP: 5,
    type: 'Unit',
    cost: 3,
    class: 'Tech'
  },
  {
    name: "Sniper",
    image: "sniper.jfif",
    attack: 6,
    HP: 3,
    type: 'Unit',
    cost: 5,
    class: 'Tech'
  },
  {
    name: "Mage",
    image: "mage.jpg",
    attack: 8,
    HP: 1,
    type: 'Unit',
    cost: 3,
    class: 'Arcane'
  }, {
    name: "Law Enforcement",
    image: "lawenforcement.jpg",
    attack: 1,
    HP: 8,
    type: 'Unit',
    cost: 2,
    class: 'Tech'
  }, {
    name: "Drone",
    image: "drone.jpg",
    attack: 1,
    HP: 1,
    type: 'Unit',
    cost: 1,
    class: 'Tech'
  }, {
    name: "Robot",
    image: "robot.jpg",
    attack: 2,
    HP: 5,
    type: 'Unit',
    cost: 2,
    class: 'Tech'
  }, {
    name: "Hacker",
    image: "hacker.png",
    attack: 6,
    HP: 2,
    type: 'Unit',
    cost: 4,
    class: 'Tech'
  }, {
    name: "Familiar",
    image: "familiar.jpg",
    attack: 1,
    HP: 5,
    type: 'Unit',
    cost: 2,
    class: 'Arcane'
  }, {
    name: "Assassin",
    image: "assassin.png",
    attack: 5,
    HP: 1,
    type: 'Unit',
    cost: 2,
    class: 'Arcane'
  }, {
    name: "Knight",
    image: "knight.jpg",
    attack: 3,
    HP: 6,
    type: 'Unit',
    cost: 4,
    class: 'Arcane'
  }, {
    name: "Demon",
    image: "demon.jpg",
    attack: 8,
    HP: 8,
    type: 'Unit',
    cost: 6,
    class: 'Arcane'
  }, {
    name: "Sentry",
    image: "sentry.png",
    attack: 7,
    HP: 8,
    type: 'Unit',
    cost: 6,
    class: 'Tech'
  }, {
    name: "Rogue AI",
    image: "rogueAI.jpg",
    attack: 10,
    HP: 5,
    type: 'Unit',
    cost: 6,
    class: 'Tech'
  }, {
    name: "Mage for Hire",
    image: "mageforhire.jpg",
    attack: 8,
    HP: 2,
    type: 'Unit',
    cost: 4,
    class: 'Arcane'
  }, {
    name: "Warlock",
    image: "warlock.jpg",
    attack: 6,
    HP: 1,
    type: 'Unit',
    cost: 3,
    class: 'Arcane'
  }, {
    name: "Private Security",
    image: "privatesecurity.jpg",
    attack: 2,
    HP: 2,
    type: 'Unit',
    cost: 2,
    class: 'Tech'
  }, {
    name: "Tripwire",
    image: "tripwire.jpg",
    attack: 1,
    HP: 5,
    type: 'Unit',
    cost: 2,
    class: 'Tech'
    //defend only, damage on death
  }, {
    name: "Wards",
    image: "wards.jpg",
    attack: 1,
    HP: 5,
    type: 'Unit',
    cost: 2,
    class: 'Arcane'
    // defend only. damage on death
  }, {
    name: "Merc",
    image: "merc.jpg",
    attack: 3,
    HP: 3,
    type: 'Unit',
    cost: 3,
    class: 'Tech'
  }, {
    name: "Summoner",
    image: "summoner.jpg",
    attack: 1,
    HP: 1,
    type: 'Unit',
    cost: 3,
    class: 'Arcane'
    // Summons 1/1 unit every turn
  }, {
    name: "Developer",
    image: "developer.jpg",
    attack: 1,
    HP: 1,
    type: 'Unit',
    cost: 3,
    class: 'Tech'
    //summons 1/1
  }, {
    name: "unstable familiar",
    image: "unstablefamiliar.jpg",
    attack: 4,
    HP: 1,
    type: 'Unit',
    cost: 2,
    class: 'Arcane'
    //lasts 1 turn
  }, {
    name: "vaporware",
    image: "placeholder.png",
    attack: 4,
    HP: 1,
    type: 'Unit',
    cost: 2,
    class: 'Tech'
    //lasts 1 turn
  }, {
    name: "Turret",
    image: "turret.jpg",
    attack: 5,
    HP: 1,
    type: 'Unit',
    cost: 3,
    class: 'Tech'
    //can only defend
  }, {
    name: "Cancel",
    image: "cancel.jpg",
    type: 'Spell',
    cost: 2,
    class: 'Arcane'
    //counter magic, cost 2
  }, {
    name: "Stall",
    image: "delay.jpg",
    type: 'Spell',
    cost: 2,
    class: 'Tech'
    //counter tech, cost 2

  }, {
    name: "Firebolt",
    image: "firebolt.jpg",
    //Magic Spell cost 1, 1 dmg   
    type: 'Spell',
    cost: 1,
    class: 'Arcane'

  }, {
    name: "Static",
    image: "static.jpg",
    type: 'Spell',
    cost: 1,
    class: 'Tech'
    //Tech spell cost 1, 1 dmg

  }, {
    name: "Fireball",
    image: "fireball.jpg",
    type: 'Spell',
    cost: 3,
    class: 'Arcane'
    //Magic spell cost 3, 2 dmg to all

  }, {
    name: "Heal",
    image: "placeholder.jpg",
    type: 'Spell',
    cost: 2,
    class: 'Arcane'
    // Magic spell, cost 2, heal 5

  }, {
    name: "Scry",
    image: "placeholder.jpg",
    type: 'Spell',
    cost: 1
    //Magic spell, look at X opponent's cards, cost 1+x 

  }, {
    name: "Hack",
    image: "hack.jpg",
    type: 'Spell',
    cost: 4,
    class: 'Tech'
    //Tech spell, look at opponent's hand, cost 4

  }, {
    name: "Resummon",
    image: "placeholder.jpg",
    type: 'Spell',
    cost: 2,
    class: 'Arcane'
    // magic spell, unit out of discard, cost 2+unit cost

  }, {
    name: "Interference",
    image: "placeholder.jpg",
    type: 'Spell',
    cost: 1,
    class: 'Tech'
    // Tech spell, raises cost of magic by 1 for 1 round

  }, {
    name: "Teleport",
    image: "placeholder.jpg",
    type: 'Spell',
    cost: 1,
    class: 'Tech'
    // Tech power, remove unit to owner's and, cost 1

  }, {
    name: "Whirlwind",
    image: "placeholder.jpg",
    type: 'Spell',
    cost: 4,
    class: 'Arcane'
    //Magic spell, return random number of units to owner's hand, cost 4

  }, {
    name: "Sword",
    image: "sword.jpg",
    type: 'Equipment',
    cost: 2,
    class: 'Arcane'
    //equipment, +1 attack, cost 2

  }, {
    name: "Shield",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 2,
    class: 'Arcane'
    //equipment, +1 hp, cost 2

  }, {
    name: "Rifle",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 3,
    class: 'Tech'
    //equipment +2 attack, cost 3

  }, {
    name: "Pistol",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 3,
    class: 'Tech'
    //equipment +1 attack, cost 2

  }, {
    name: "Medpack",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 4,
    class: 'Tech'
    //equipment +2hp, cost 4

  }, {
    name: "Health Potion",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 4,
    class: 'Arcane'
    //equipment +2hp, cost 4

  }, {
    name: "Staff",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 4,
    class: 'Arcane'
    //equipment +1 hp +1 attack, +2hp vs magic, cost 4

  }, {
    name: "Datapad",
    image: "datapad.png",
    type: 'Equipment',
    cost: 5,
    class: 'Tech'
    // equipment reduce cost of tech spells by 1, cost 5

  }, {
    name: "Totem",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 4,
    class: 'Arcane'
    // global equipment, increases magic damage by 1 cost 4

  }, {
    name: "Adrenals",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 4,
    class: 'Tech'
    // global eq, increases tech damage by 1 cost 4

  }, {
    name: "Hideout",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 6,
    class: 'Tech'
    // global equipment, protect one unit after combat cost cost 6

  }, {
    name: "Sanctum",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 6,
    class: 'Arcane'
    // global equipment, protect one unit after combat cost 6

  }, {
    name: "Ambulance",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 4,
    class: 'Tech'
    // return one unit to hand after combat cost 4

  }, {
    name: "Illusion",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 2,
    class: 'Arcane'
    // swap out a unit for another unit before combat begins, cost new unit - old unit + 2

  }, {
    name: "Shield Spell",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 2,
    class: 'Arcane'
    // magic, protect player after combat, cost 2

  }, {
    name: "Mail",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 4,
    class: 'Arcane'
    // decrease damage to player by 1, cost 4

  }, {
    name: "Body Armor",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 4,
    class: 'Tech'
    // decrease damage to player by 1, cost 4

  }, {
    name: "Force Field",
    image: "forcefield.jpg",
    type: 'Equipment',
    cost: 2,
    class: 'Tech'
    // tech protect player after combat, cost 2

  }, {
    name: "Short Circuit",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 4,
    class: 'Tech'
    // opponent discards 2 cards, cost 4

  }, {
    name: "Mass Recall",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 8,
    class: 'Arcane'
    // return all units to hand, cost 8

  }, {
    name: "Distraction",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 3,
    class: 'Tech'
    // target unable to block this turn, cost 3

  }, {
    name: "Flashbang",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 4,
    class: 'Tech'
    // target unable to attack this turn, cost 4

  }, {
    name: "Entrench",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 5,
    class: 'Tech'
    // units gain 2 defense this turn, cost 5

  }, {
    name: "Grenade",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 5,
    class: 'Tech'
    // 1 damage to all opponent units, cost 5

  }, {
    name: "Armory",
    image: "placeholder.jpg",
    type: 'Equipment',
    cost: 4,
    class: 'Tech'
    // equipment cards cost 1 less, cost 4

  },

];

const userSeed = [
  {
    name: "David",
    password: "1234",
  },
  {
    name: "John",
    password: "5678",
  }
];

const deckSeed = [
  {
    name: "Sample1",
    numberOfCards: 4,
    card : ["5e95dde9f9956303a8f0459a"]
  },
  {
    name: "Sample2",
  }
];

db.User
  .remove()
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


db.gameCard
  .remove({})
  .then(() => db.gameCard.collection.insertMany(gameCardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Deck
  .remove()
  .then(() => db.Deck.collection.insertMany(deckSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });