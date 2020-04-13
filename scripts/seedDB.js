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
    image: "https://via.placeholder.com/150",
    attack: 3,
    HP: 5
  },
  {
    name: "Sniper",
    image: "https://via.placeholder.com/150",
    attack: 6,
    HP: 3
  },
  {
    name: "Mage",
    image: "https://via.placeholder.com/150",
    attack: 8,
    HP: 1
  },  {
    name: "Law Enforcement",
    image: "https://via.placeholder.com/150",
    attack: 1,
    HP: 8
  },  {
    name: "Drone",
    image: "https://via.placeholder.com/150",
    attack: 1,
    HP: 1
  },  {
    name: "Robot",
    image: "https://via.placeholder.com/150",
    attack: 2,
    HP: 5
  },  {
    name: "Hacker",
    image: "https://via.placeholder.com/150",
    attack: 6,
    HP: 2
  },  {
    name: "Familiar",
    image: "https://via.placeholder.com/150",
    attack: 1,
    HP: 5
  },  {
    name: "Assassin",
    image: "https://via.placeholder.com/150",
    attack: 5,
    HP: 1
  },  {
    name: "Knight",
    image: "https://via.placeholder.com/150",
    attack: 3,
    HP: 6
  },  {
    name: "Demon",
    image: "https://via.placeholder.com/150",
    attack: 8,
    HP: 8
  },  {
    name: "Sentry",
    image: "https://via.placeholder.com/150",
    attack: 7,
    HP: 8
  }, {
    name: "Rogue AI",
    image: "https://via.placeholder.com/150",
    attack: 10,
    HP: 5
  },{
    name: "Mage for Hire",
    image: "https://via.placeholder.com/150",
    attack: 8,
    HP: 2
  },{
    name: "Warlock",
    image: "https://via.placeholder.com/150",
    attack: 6,
    HP: 1
  },{
    name: "Private Security",
    image: "https://via.placeholder.com/150",
    attack: 2,
    HP: 2
  },{
    name: "Tripwire",
    image: "https://via.placeholder.com/150",
    attack: 1,
    HP: 5
    //defend only, damage on death
  },{
    name: "Wards",
    image: "https://via.placeholder.com/150",
    attack: 1,
    HP: 5
    // defend only. damage on death
  },{
    name: "Merc",
    image: "https://via.placeholder.com/150",
    attack: 3,
    HP: 3
  },{
    name: "Summoner",
    image: "https://via.placeholder.com/150",
    attack: 1,
    HP: 1
    // Summons 1/1 unit every turn
  }, {
    name: "Developer",
    image: "https://via.placeholder.com/150",
    attack: 1,
    HP: 1
    //summons 1/1
  },{
    name: "unstable familiar",
    image: "https://via.placeholder.com/150",
    attack: 4,
    HP: 1
    //lasts 1 turn
  },{
    name: "vaporware",
    image: "https://via.placeholder.com/150",
    attack: 4,
    HP: 1
    //lasts 1 turn
  },{
    name: "Turret",
    image: "https://via.placeholder.com/150",
    attack: 5,
    HP: 1
    //can only defend
  },{
    name: "Cancel",
    image: "https://via.placeholder.com/150",
   //counter magic, cost 2
  },  {
    name: "Stall",
    image: "https://via.placeholder.com/150",
  //counter tech, cost 2
    
  },  {
    name: "Firebolt",
    image: "https://via.placeholder.com/150",
    //Magic Spell cost 1, 1 dmg 
  
  },  {
    name: "Static",
    image: "https://via.placeholder.com/150",
    //Tech spell cost 1, 1 dmg
  
  },  {
    name: "Fireball",
    image: "https://via.placeholder.com/150",
    //Magic spell cost 3, 2 dmg to all

  },  {
    name: "Heal",
    image: "https://via.placeholder.com/150",
    // Magic spell, cost 2, heal 5
  
  },  {
    name: "Scry",
    image: "https://via.placeholder.com/150",
    //Magic spell, look at X opponent's cards, cost 1+x 
  
  },  {
    name: "Hack",
    image: "https://via.placeholder.com/150",
    //Tech spell, look at opponent's hand, cost 4
  
  },  {
    name: "Resummon",
    image: "https://via.placeholder.com/150",
    // magic spell, unit out of discard, cost 2+unit cost
   
  },  {
    name: "Interference",
    image: "https://via.placeholder.com/150",
    // Tech spell, raises cost of magic by 1 for 1 round
  
  },  {
    name: "Teleport",
    image: "https://via.placeholder.com/150",
    // Tech power, remove unit to owner's and, cost 1

  },  {
    name: "Whirlwind",
    image: "https://via.placeholder.com/150",
    //Magic spell, return random number of units to owner's hand, cost 4
  
  },  {
    name: "Sword",
    image: "https://via.placeholder.com/150",
    //equipment, +1 attack, cost 2
   
  },  {
    name: "Shield",
    image: "https://via.placeholder.com/150",
    //equipment, +1 hp, cost 2
 
  },  {
    name: "Rifle",
    image: "https://via.placeholder.com/150",
    //equipment +2 attack, cost 3
  
  },  {
    name: "Pistol",
    image: "https://via.placeholder.com/150",
    //equipment +1 attack, cost 2
 
  },  {
    name: "Medpack",
    image: "https://via.placeholder.com/150",
    //equipment +2hp, cost 4
  
  },  {
    name: "Health Potion",
    image: "https://via.placeholder.com/150",
    //equipment +2hp, cost 4
  
  },  {
    name: "Staff",
    image: "https://via.placeholder.com/150",
    //equipment +1 hp +1 attack, +2hp vs magic, cost 4
  
  },  {
    name: "Datapad",
    image: "https://via.placeholder.com/150",
    // equipment reduce cost of tech spells by 1, cost 5

  },  {
    name: "Totem",
    image: "https://via.placeholder.com/150",
    // global equipment, increases magic damage by 1 cost 4

  },  {
    name: "Adrenals",
    image: "https://via.placeholder.com/150",
    // global eq, increases tech damage by 1 cost 4
 
  },  {
    name: "Hideout",
    image: "https://via.placeholder.com/150",
    // global equipment, protect one unit after combat cost cost 6
 
  },  {
    name: "Sanctum",
    image: "https://via.placeholder.com/150",
    // global equipment, protect one unit after combat cost 6

  },  {
    name: "Ambulance",
    image: "https://via.placeholder.com/150",
    // return one unit to hand after combat cost 4

  },  {
    name: "Illusion",
    image: "https://via.placeholder.com/150",
    // swap out a unit for another unit before combat begins, cost new unit - old unit + 2
  
  },  {
    name: "Shield Spell",
    image: "https://via.placeholder.com/150",
    // magic, protect player after combat, cost 2

  },  {
    name: "Mail",
    image: "https://via.placeholder.com/150",
    // decrease damage to player by 1, cost 4

  },  {
    name: "Body Armor",
    image: "https://via.placeholder.com/150",
    // decrease damage to player by 1, cost 4
 
  },  {
    name: "Force Field",
    image: "https://via.placeholder.com/150",
    // tech protect player after combat, cost 2

  },  {
    name: "Short Circuit",
    image: "https://via.placeholder.com/150",
    // opponent discards 2 cards, cost 4

  },  {
    name: "Mass Recall",
    image: "https://via.placeholder.com/150",
    // return all units to hand, cost 8

  },  {
    name: "Distraction",
    image: "https://via.placeholder.com/150",
    // target unable to block this turn, cost 3
 
  },  {
    name: "Flashbang",
    image: "https://via.placeholder.com/150",
    // target unable to attack this turn, cost 4
  
  },  {
    name: "Entrench",
    image: "https://via.placeholder.com/150",
    // units gain 2 defense this turn, cost 5
  
  },  {
    name: "Grenade",
    image: "https://via.placeholder.com/150",
    // 1 damage to all opponent units, cost 5

  },  {
    name: "Armory",
    image: "https://via.placeholder.com/150",
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