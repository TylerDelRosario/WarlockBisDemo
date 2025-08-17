import { Injectable } from '@angular/core';
import { ItemInfo } from '../interface/item-info';
import { Slot } from '../interface/properties/slot';
import { ItemType } from '../interface/properties/type';
import { Quality } from '../interface/properties/quality';
import { ItemBinding } from '../interface/properties/binding';
import { Stat } from '../interface/stat/stat';
import { RepLevel } from '../interface/properties/reputation-values';
import { PlayerClass } from '../interface/properties/player-class';
import { MagicDamage } from '../interface/properties/magic-damage';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  headInfo: ItemInfo[] = [
    {
      name: "Spellweaver's Turban",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.head,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 18
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 28.",
        "Equip: Improves your chance to hit with spells by 1%."
      ],
      durability: 50,
      armor: 73,
      icon: 'inv_helmet_62',
      location: 'Upper Blackrock Spire',
      quest: undefined,
      boss: 'General Drakkisath',
      droprate: 25,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Necrolyte's Visage",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.head,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 14
        },
        {
          stat: Stat.stamina,
          value: 18
        },
        {
          stat: Stat.spirit,
          value: -10
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 28.",
        "Equip: Restores 6 health per 5 sec."
      ],
      durability: 50,
      armor: 75,
      icon: 'inv_misc_bone_taurenskull_01',
      location: 'Stormwind Vaults',
      quest: undefined,
      boss: "Aszosh Grimflame",
      droprate: 17,
      lore: "The eyes have a faint glint, you feel like you're being watched.",
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: 'Wraps of the Transmogrified',
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.head,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.agility,
          value: -10
        }
      ],
      bonuses: [
        "Equip: Reduces damage taken from critical hits and damage over time effects by 3%.",
        "Equip: Increases damage and healing done by magical spells and effects by up to 30."
      ],
      durability: 50,
      armor: 306,
      icon: 'inv_helmet_41',
      location: 'Caverns Of Time',
      quest: undefined,
      boss: "Rotmaw",
      droprate: 13,
      lore: "Once a plate helmet, warped by the timeways into a thin cloth that preserves its properties.",
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: 'Cover of the Necromancer',
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.head,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.spirit,
          value: 17
        },
        {
          stat: Stat.shadowResistance,
          value: 5
        }
      ],
      bonuses: [
        "Equip: Restores 6 health per 5 sec.",
        "Equip: Increases damage and healing done by magical spells and effects by up to 30."
      ],
      durability: 50,
      armor: 74,
      icon: 'inv_misc_bone_taurenskull_01',
      location: 'Karazhan Crypt',
      quest: undefined,
      boss: "Alarus",
      droprate: 21,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: 'Deathmist Mask',
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.head,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 19
        },
        {
          stat: Stat.intellect,
          value: 19
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 26.",
        "Equip: Improves your chance to hit with spells by 1%.",
        "Equip: Increases your pet's maximum health by 3%."
      ],
      durability: 60,
      armor: 75,
      icon: 'inv_helmet_29',
      location: 'Tier 0.5 Questline',
      quest: "Saving the Best for Last",
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: {
        name: 'Deathmist Raiment',
        setPieces: [
          "Deathmist Belt",
          "Deathmist Bracers",
          "Deathmist Leggings",
          "Deathmist Mantle",
          "Deathmist Mask",
          "Deathmist Robe",
          "Deathmist Sandals",
          "Deathmist Wraps"
        ],
        setBonuses: [
          {
            requirement: 2,
            bonus: '+8 All Resistances'
          },
          {
            requirement: 4,
            bonus: "When struck in combat has a chance of causing the attacker to flee in terror for 2 seconds."
          },
          {
            requirement: 6,
            bonus: "Increases damage and healing done by magical spells and effects by up to 23."
          },
          {
            requirement: 8,
            bonus: "+200 Armor"
          }
        ]
      },
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: 'Crimson Felt Hat',
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.head,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 8
        },
        {
          stat: Stat.spirit,
          value: 8
        },
        {
          stat: Stat.stamina,
          value: 8
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 30."
      ],
      durability: 50,
      armor: 68,
      icon: 'inv_helmet_51',
      location: 'Stratholme',
      quest: undefined,
      boss: "Magistrate Barthilas",
      droprate: 17,
      lore: undefined,
      levelRequirement: 54,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: 'Crown of Molten Ascension',
      quality: Quality.epic,
      binding: ItemBinding.onEquip,
      unique: false,
      slot: Slot.head,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 11
        },
        {
          stat: Stat.stamina,
          value: 9
        },
        {
          stat: Stat.fireResistance,
          value: 10
        }
      ],
      bonuses: [
        "Equip: Increases your attack and casting speed by 2%.",
        "Equip: Increases damage and healing done by magical spells and effects by up to 24.",
        "Equip: Increases damage done by Fire spells and effects by up to 11."
      ],
      durability: 60,
      armor: 82,
      icon: 'inv_misc_gem_ruby_03',
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: {
        name: "Molten Crown of Ascension",
        profession: "Jewelcrafting"
      },
      damage: undefined
    }
  ];

  shoulderInfo: ItemInfo[] = [
    {
      name: 'Epaulets of the Forgotten Past',
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.shoulder,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 8
        },
        {
          stat: Stat.stamina,
          value: 16
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 18.",
        "Equip: Restores 3 mana per 5 sec."
      ],
      durability: 50,
      armor: 70,
      icon: 'inv_shoulder_24',
      location: 'Caverns Of Time',
      quest: undefined,
      boss: "Antnormi",
      droprate: undefined,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: 'Thuzadin Mantle',
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.shoulder,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 11
        },
        {
          stat: Stat.intellect,
          value: 18
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 12."
      ],
      durability: 50,
      armor: 67,
      icon: 'inv_shoulder_02',
      location: 'Stratholme',
      quest: undefined,
      boss: "Baron Rivendare",
      droprate: 20,
      lore: undefined,
      levelRequirement: 58,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: 'Deadwalker Mantle',
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.shoulder,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 19
        },
        {
          stat: Stat.intellect,
          value: 9
        }
      ],
      bonuses: [
        "Equip: Increases damage done by Shadow spells and effects by up to 13."
      ],
      durability: 50,
      armor: 66,
      icon: 'inv_shoulder_02',
      location: 'Scholomance',
      quest: undefined,
      boss: "Rattlegore",
      droprate: 14,
      lore: undefined,
      levelRequirement: 57,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: 'Grass of Eternity',
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.shoulder,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.spirit,
          value: 12
        }
      ],
      bonuses: [
        "Equip: Increases your attack and casting speed by 1%.",
        "Equip: Increases damage and healing done by magical spells and effects by up to 26."
      ],
      durability: 50,
      armor: 72,
      icon: 'inv_shoulder_13',
      location: '',
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: "Even the grass surrounding the Well of Eternity was suffused with magic.",
      levelRequirement: 60,
      itemSet: undefined,
      reputation: {
        name: "Wardens of Time",
        level: RepLevel.revered
      },
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: 'Deathmist Mantle',
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.shoulder,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 16
        },
        {
          stat: Stat.stamina,
          value: 16
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 19."
      ],
      durability: 60,
      armor: 69,
      icon: 'inv_misc_bone_taurenskull_01',
      location: 'Tier 0.5 Questline',
      quest: "Anthion's Parting Words",
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: {
        name: 'Deathmist Raiment',
        setPieces: [
          "Deathmist Belt",
          "Deathmist Bracers",
          "Deathmist Leggings",
          "Deathmist Mantle",
          "Deathmist Mask",
          "Deathmist Robe",
          "Deathmist Sandals",
          "Deathmist Wraps"
        ],
        setBonuses: [
          {
            requirement: 2,
            bonus: '+8 All Resistances'
          },
          {
            requirement: 4,
            bonus: "When struck in combat has a chance of causing the attacker to flee in terror for 2 seconds."
          },
          {
            requirement: 6,
            bonus: "Increases damage and healing done by magical spells and effects by up to 23."
          },
          {
            requirement: 8,
            bonus: "+200 Armor"
          }
        ]
      },
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Lieutenant Commander's Dreadweave Spaulders",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.shoulder,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 17
        },
        {
          stat: Stat.intellect,
          value: 13
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 12.",
        "Equip: Improves your chance to get a critical strike with spells by 1%."
      ],
      durability: 50,
      armor: 75,
      icon: 'inv_shoulder_01',
      location: 'PvP',
      quest: undefined,
      boss: "Rank 10",
      droprate: undefined,
      lore: undefined,
      levelRequirement: 60,
      itemSet: {
        name: "Lieutenant Commander's Dreadgear",
        setPieces: [
          "Knight-Captain's Dreadweave Tunic",
          "Knight-Captain's Dreadweave Legguards",

          "Knight-Lieutenant's Dreadweave Walkers",
          "Knight-Lieutenant's Dreadweave Handwraps",

          "Lieutenant Commander's Dreadweave Spaulders",
          "Lieutenant Commander's Dreadweave Cowl"
        ],
        setBonuses: [
          {
            requirement: 2,
            bonus: 'Increases damage and healing done by magical spells and effects by up to 23.'
          },
          {
            requirement: 4,
            bonus: 'Reduces the casting time of your Immolate spell by 0.2 sec.'
          },
          {
            requirement: 6,
            bonus: '+15 Stamina'
          },
          {
            requirement: 6,
            bonus: 'Reduces damage taken from critical hits and damage over time effects by 3%'
          }
        ]
      },
      reputation: undefined,
      classLock: [PlayerClass.warlock],
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Champion's Dreadweave Spaulders",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.shoulder,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 17
        },
        {
          stat: Stat.intellect,
          value: 13
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 12.",
        "Equip: Improves your chance to get a critical strike with spells by 1%."
      ],
      durability: 50,
      armor: 75,
      icon: 'inv_shoulder_01',
      location: 'PvP',
      quest: undefined,
      boss: "Rank 10",
      droprate: undefined,
      lore: undefined,
      levelRequirement: 60,
      itemSet: {
        name: "Champion's Commander's Dreadgear",
        setPieces: [
          "Blood Guard's Dreadweave Handwraps",
          "Blood Guard's Dreadweave Walkers",
          "Champion's Dreadweave Cowl",
          "Champion's Dreadweave Spaulders",
          "Legionnaire's Dreadweave Legguards",
          "Legionnaire's Dreadweave Tunic"
        ],
        setBonuses: [
          {
            requirement: 2,
            bonus: 'Increases damage and healing done by magical spells and effects by up to 23.'
          },
          {
            requirement: 4,
            bonus: 'Reduces the casting time of your Immolate spell by 0.2 sec.'
          },
          {
            requirement: 6,
            bonus: '+15 Stamina'
          },
          {
            requirement: 6,
            bonus: 'Reduces damage taken from critical hits and damage over time effects by 3%'
          }
        ]
      },
      reputation: undefined,
      classLock: [PlayerClass.warlock],
      recipe: undefined,
      damage: undefined
    }
  ];

  neckInfo: ItemInfo[] = [
    {
      name: "Blackteeth Necklace",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.neck,
      type: undefined,
      stats: [
        {
          stat: Stat.intellect,
          value: 12
        },
        {
          stat: Stat.spirit,
          value: 8
        }
      ],
      bonuses: [
        "Equip: Improves your chance to get a critical strike with spells by 1%."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_jewelry_necklace_09",
      location: "Stormwind Vaults",
      quest: undefined,
      boss: "Volkan Cruelblade",
      droprate: 20,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Diana's Pearl Necklace",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.neck,
      type: undefined,
      stats: [
        {
          stat: Stat.stamina,
          value: 8
        },
        {
          stat: Stat.intellect,
          value: 8
        }
      ],
      bonuses: [
        "Equip: Improves your chance to hit with spells by 1%.",
        "Equip: Increases damage and healing done by magical spells and effects by up to 9."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_jewelry_necklace_10",
      location: "Stratholme",
      quest: undefined,
      boss: "Cannon Master Willy",
      droprate: 5,
      lore: undefined,
      levelRequirement: 56,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Star of Mystaria",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.neck,
      type: undefined,
      stats: [
        {
          stat: Stat.stamina,
          value: 9
        },
        {
          stat: Stat.intellect,
          value: 9
        },
        {
          stat: Stat.spirit,
          value: 8
        }
      ],
      bonuses: [
        "Equip: Improves your chance to hit with spells by 1%"
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_jewelry_talisman_08",
      location: "Stratholme",
      quest: undefined,
      boss: "Balnazzar",
      droprate: 10,
      lore: undefined,
      levelRequirement: 58,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Anastari Heirloom",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.neck,
      type: undefined,
      stats: [
        {
          stat: Stat.stamina,
          value: 15
        }
      ],
      bonuses: [
        "Equip: Increases damage done by Shadow spells and effects by up to 13."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_jewelry_necklace_11",
      location: "Stratholme",
      quest: undefined,
      boss: "Baroness Anastari",
      droprate: 20,
      lore: undefined,
      levelRequirement: 58,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Dark Advisor's Pendant",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.neck,
      type: undefined,
      stats: [
        {
          stat: Stat.stamina,
          value: 8
        },
        {
          stat: Stat.intellect,
          value: 7
        }
      ],
      bonuses: [
        "Equip: Increases damage done by Shadow spells and effects by up to 20."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_jewelry_necklace_06",
      location: "Scholomance",
      quest: undefined,
      boss: "Vectus",
      droprate: 7,
      lore: undefined,
      levelRequirement: 56,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Pendant of Instability",
      quality: Quality.epic,
      binding: ItemBinding.onEquip,
      unique: false,
      slot: Slot.neck,
      type: undefined,
      stats: [
        {
          stat: Stat.strength,
          value: -10
        },
        {
          stat: Stat.intellect,
          value: -10
        }
      ],
      bonuses: [
        "Equip: Increases your attack and casting speed by 2%"
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_jewelry_necklace_06",
      location: "Jewelcrafting",
      quest: undefined,
      boss: "Goldsmithing",
      droprate: undefined,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    }
  ];

  cloakInfo: ItemInfo[] = [
    {
      name: "Banshee's Veil",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.back,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 13
        }
      ],
      bonuses: [
        "Equip: Increases damage done by Shadow spells and effects by up to 23."
      ],
      durability: undefined,
      armor: 45,
      icon: "inv_misc_cape_19",
      location: "Stormwind Vaults",
      quest: undefined,
      boss: "Black Bride",
      droprate: 20,
      lore: undefined,
      levelRequirement: 58,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "The Veil Of Hatred",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.back,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 4
        }
      ],
      bonuses: [
        "Equip: Increases damage done by Shadow spells and effects by up to 19.",
        "Equip: Increases damage done by Fire spells and effects by up to 19."
      ],
      durability: undefined,
      armor: 42,
      icon: "inv_misc_cape_19",
      location: "Hateforge Quarry",
      quest: undefined,
      boss: "Har'gesh Doomcaller",
      droprate: 25,
      lore: undefined,
      levelRequirement: 54,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Magic-infused Cloak",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.back,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 10
        },
        {
          stat: Stat.spirit,
          value: 7
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 16."
      ],
      durability: undefined,
      armor: 48,
      icon: "inv_misc_cape_16",
      location: "Caverns of Time",
      quest: undefined,
      boss: "Time-Lord Epochronos",
      droprate: 12,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Spritecaster Cape",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.back,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 4
        },
        {
          stat: Stat.intellect,
          value: 4
        },
        {
          stat: Stat.spirit,
          value: 5
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 14."
      ],
      durability: undefined,
      armor: 37,
      icon: "inv_misc_cape_20",
      location: "Blackrock Depths",
      quest: undefined,
      boss: "Houndmaster Grebmar",
      droprate: 25,
      lore: undefined,
      levelRequirement: 47,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Shroud of The Arch Lich",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: undefined,
      slot: Slot.back,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 10
        },
        {
          stat: Stat.frostResistance,
          value: 10
        }
      ],
      bonuses: [
        "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "Equip: Decreases the magical resistances of your spell targets by 10."
      ],
      durability: undefined,
      armor: 47,
      icon: "inv_chest_cloth_14",
      location: "Karazhan Crypt",
      quest: undefined,
      boss: "Archlich Enkhraz",
      droprate: 18,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Shroud of Arcane Mastery",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.back,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 10
        },
        {
          stat: Stat.intellect,
          value: 11
        }
      ],
      bonuses: [
        "Equip: Improves your chance to hit with spells by 1%."
      ],
      durability: undefined,
      armor: 43,
      icon: "inv_misc_cape_16",
      location: "Blackrock Depths",
      quest: undefined,
      boss: "Theldren - 0.5 Summonable",
      droprate: 19,
      lore: undefined,
      levelRequirement: 56,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    }
  ];

  chestInfo: ItemInfo[] = [
    {
      name: "Robe of Winter Night",
      quality: Quality.rare,
      binding: ItemBinding.onEquip,
      unique: undefined,
      slot: Slot.chest,
      type: ItemType.cloth,
      damage: undefined,
      stats: [
        {
          stat: Stat.intellect,
          value: 12
        }
      ],
      bonuses: [
        "Equip: Increases damage done by Shadow spells and effects by up to 40.",
        "Equip: Increases damage done by Frost spells and effects by up to 40."
      ],
      durability: 100,
      armor: 81,
      icon: "inv_chest_cloth_49",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: 52,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: {
        name: "Robe of Winter Night",
        profession: "Tailoring"
      }
    },
    {
      name: "Deathmist Robes",
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.chest,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 23
        },
        {
          stat: Stat.intellect,
          value: 18
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 25.",
        "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "Equip: Increases your pet's armor by 10%."
      ],
      durability: 100,
      armor: 93,
      icon: "inv_chest_cloth_49",
      location: "Tier 0.5 Questline",
      quest: "Saving the Best for Last",
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: {
        name: 'Deathmist Raiment',
        setPieces: [
          "Deathmist Belt",
          "Deathmist Bracers",
          "Deathmist Leggings",
          "Deathmist Mantle",
          "Deathmist Mask",
          "Deathmist Robe",
          "Deathmist Sandals",
          "Deathmist Wraps"
        ],
        setBonuses: [
          {
            requirement: 2,
            bonus: '+8 All Resistances'
          },
          {
            requirement: 4,
            bonus: "When struck in combat has a chance of causing the attacker to flee in terror for 2 seconds."
          },
          {
            requirement: 6,
            bonus: "Increases damage and healing done by magical spells and effects by up to 23."
          },
          {
            requirement: 8,
            bonus: "+200 Armor"
          }
        ]
      },
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Robe of Everlasting Night",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.chest,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 13
        },
        {
          stat: Stat.stamina,
          value: 11
        },
        {
          stat: Stat.spirit,
          value: 5
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 27."
      ],
      durability: 80,
      armor: 88,
      icon: "inv_chest_cloth_51",
      location: "Dire Maul West",
      quest: undefined,
      boss: "Immol'thar",
      droprate: 10,
      lore: undefined,
      levelRequirement: 57,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Figgle's Coveralls",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.chest,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 11
        },
        {
          stat: Stat.spirit,
          value: 11
        },
        {
          stat: Stat.stamina,
          value: 8
        }
      ],
      bonuses: [
        "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "Equip: Increases damage and healing done by magical spells and effects by up to 21."
      ],
      durability: 80,
      armor: 75,
      icon: "inv_shirt_14",
      location: "Hateforge Quarry",
      quest: undefined,
      boss: "Engineer Figgles",
      droprate: 20,
      lore: undefined,
      levelRequirement: 51,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Necropile Robe",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.chest,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 22
        },
        {
          stat: Stat.spirit,
          value: 12
        },
        {
          stat: Stat.intellect,
          value: 12
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 8."
      ],
      durability: 80,
      armor: 87,
      icon: "inv_chest_cloth_43",
      location: "Scholomance",
      quest: undefined,
      boss: "Barov Family",
      droprate: 4,
      lore: undefined,
      levelRequirement: 56,
      itemSet: {
        name: "Necropile Raiment",
        setPieces: [
          "Necropile Boots",
          "Necropile Cuffs",
          "Necropile Leggings",
          "Necropile Mantle",
          "Necropile Robe"
        ],
        setBonuses: [
          {
            requirement: 2,
            bonus: 'Increased Defense +3'
          },
          {
            requirement: 3,
            bonus: '+5 Intellect'
          },
          {
            requirement: 4,
            bonus: '+15 All Resistances'
          },
          {
            requirement: 5,
            bonus: 'Increase damage and healing done by magical spells and effects by up to 23'
          }
        ]
      },
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Shadowguard Robe",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.chest,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 22
        },
        {
          stat: Stat.stamina,
          value: 20
        }
      ],
      bonuses: [
        "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "Equip: Improves your chance to hit with spells by 1%."
      ],
      durability: 100,
      armor: 132,
      icon: "inv_chest_cloth_48",
      location: "Stormwind Vaults",
      quest: undefined,
      boss: "Nazorna / Aszosh Grimflame",
      droprate: 20,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    }
  ];

  bracerInfo: ItemInfo[] = [
    {
      name: "Sublime Wristguards",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.wrist,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 10
        },
        {
          stat: Stat.spirit,
          value: 6
        },
        {
          stat: Stat.stamina,
          value: 6
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 12."
      ],
      durability: 30,
      armor: 37,
      icon: "inv_bracer_13",
      location: "Dire Maul North",
      quest: undefined,
      boss: "Guard Mol'dar / Guard Slip'kik",
      droprate: 8,
      lore: undefined,
      levelRequirement: 55,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Ornate Mithril Bracelets",
      quality: Quality.rare,
      binding: ItemBinding.onEquip,
      unique: false,
      slot: Slot.wrist,
      type: ItemType.cloth,
      stats: [],
      bonuses: [
        "Equip: Increases your attack and casting speed by 1%."
      ],
      durability: 30,
      armor: 26,
      icon: "inv_bracer_14",
      location: "Jewelcrafting",
      quest: undefined,
      boss: "Artisan Jewelcrafter",
      droprate: undefined,
      lore: undefined,
      levelRequirement: 38,
      itemSet: {
        name: "Ornate Mithril Jewelry",
        setPieces: [
          "Ornate Mithril Crown",
          "Ornate Mithril Bracelets"
        ],
        setBonuses: [
          {
            requirement: 2,
            bonus: 'Decreases the magical resistances of your spell targets by 10.'
          }
        ]
      },
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Deathmist Bracers",
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.wrist,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 12
        },
        {
          stat: Stat.stamina,
          value: 12
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 13."
      ],
      durability: 35,
      armor: 40,
      icon: "inv_bracer_13",
      location: "Tier 0.5 Questline",
      quest: "An Earnest Proposition",
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: {
        name: 'Deathmist Raiment',
        setPieces: [
          "Deathmist Belt",
          "Deathmist Bracers",
          "Deathmist Leggings",
          "Deathmist Mantle",
          "Deathmist Mask",
          "Deathmist Robe",
          "Deathmist Sandals",
          "Deathmist Wraps"
        ],
        setBonuses: [
          {
            requirement: 2,
            bonus: '+8 All Resistances'
          },
          {
            requirement: 4,
            bonus: "When struck in combat has a chance of causing the attacker to flee in terror for 2 seconds."
          },
          {
            requirement: 6,
            bonus: "Increases damage and healing done by magical spells and effects by up to 23."
          },
          {
            requirement: 8,
            bonus: "+200 Armor"
          }
        ]
      },
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Dryad's Wrist Bindings",
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.wrist,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 9
        },
        {
          stat: Stat.stamina,
          value: 14
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 22."
      ],
      durability: 35,
      armor: 47,
      icon: "inv_bracer_13",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: {
        name: "Warsong Gulch",
        level: RepLevel.exalted
      },
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    }
  ];

  handInfo:ItemInfo[] = [
    {
      name: "Hands Of Power",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.hands,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.spirit,
          value: 6
        },
        {
          stat: Stat.intellect,
          value: 6
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 26."
      ],
      durability: 30,
      armor: 53,
      icon: "inv_gauntlets_14",
      location: "Lower Blackrock Spire",
      quest: undefined,
      boss: "Quartermaster Zigris",
      droprate: 10,
      lore: undefined,
      levelRequirement: 55,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Felcloth Gloves",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.hands,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 9
        }
      ],
      bonuses: [
        "Equip: Increases damage done by Shadow spells and effects by up to 33."
      ],
      durability: 30,
      armor: 55,
      icon: "inv_gauntlets_19",
      location: "Tailoring",
      quest: undefined,
      boss: "Artisan Tailor",
      droprate: undefined,
      lore: undefined,
      levelRequirement: 57,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Deathmist Wraps",
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.hands,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 16
        },
        {
          stat: Stat.intellect,
          value: 16
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "Equip: Improves your chance to hit with spells by 1%.",
        "Equip: Increases your pet's melee and spell critical strike chance by 2%."
      ],
      durability: 35,
      armor: 58,
      icon: "inv_gauntlets_32",
      location: "Tier 0.5 Questline",
      quest: "Just Compensation",
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: {
        name: 'Deathmist Raiment',
        setPieces: [
          "Deathmist Belt",
          "Deathmist Bracers",
          "Deathmist Leggings",
          "Deathmist Mantle",
          "Deathmist Mask",
          "Deathmist Robe",
          "Deathmist Sandals",
          "Deathmist Wraps"
        ],
        setBonuses: [
          {
            requirement: 2,
            bonus: '+8 All Resistances'
          },
          {
            requirement: 4,
            bonus: "When struck in combat has a chance of causing the attacker to flee in terror for 2 seconds."
          },
          {
            requirement: 6,
            bonus: "Increases damage and healing done by magical spells and effects by up to 23."
          },
          {
            requirement: 8,
            bonus: "+200 Armor"
          }
        ]
      },
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    }
  ];

  waistInfo: ItemInfo[] = [
    {
      name: "Girdle of Fading Hope",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.waist,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 14
        }
      ],
      bonuses: [
        "Equip: Increases damage done by Shadow spells and effects by up to 17.",
        "Equip: Increases damage done by Holy spells and effects by up to 17.",
        "Equip: Restores 4 mana per 5 sec."
      ],
      durability: 30,
      armor: 49,
      icon: "inv_belt_13",
      location: "Stratholme",
      quest: undefined,
      boss: "Malor the Zealous",
      droprate: 11,
      lore: undefined,
      levelRequirement: 56,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Thuzadin Sash",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.waist,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 12
        },
        {
          stat: Stat.stamina,
          value: 11
        },
        {
          stat: Stat.spirit,
          value: 11
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 11."
      ],
      durability: 30,
      armor: 49,
      icon: "inv_belt_13",
      location: "Stratholme",
      quest: undefined,
      boss: "Nerub'enkan",
      droprate: 20,
      lore: undefined,
      levelRequirement: 56,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Ban'thok Sash",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.waist,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 10
        },
        {
          stat: Stat.intellect,
          value: 11
        }
      ],
      bonuses: [
        "Equip: Improves your chance to hit with spells by 1%.",
        "Equip: Increases damage and healing done by magical spells and effects by up to 12."
      ],
      durability: 30,
      armor: 43,
      icon: "inv_belt_29",
      location: "Blackrock Depths",
      quest: undefined,
      boss: "Ok'thor the Breaker",
      droprate: 25,
      lore: undefined,
      levelRequirement: 49,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Deathmist Belt",
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.waist,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 16
        },
        {
          stat: Stat.stamina,
          value: 16
        }
      ],
      bonuses: [
        "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "Equip: Increases damage and healing done by magical spells and effects by up to 12."
      ],
      durability: 35,
      armor: 52,
      icon: "inv_belt_12",
      location: "Tier 0.5 Questline",
      quest: "Just Compensation",
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: {
        name: 'Deathmist Raiment',
        setPieces: [
          "Deathmist Belt",
          "Deathmist Bracers",
          "Deathmist Leggings",
          "Deathmist Mantle",
          "Deathmist Mask",
          "Deathmist Robe",
          "Deathmist Sandals",
          "Deathmist Wraps"
        ],
        setBonuses: [
          {
            requirement: 2,
            bonus: '+8 All Resistances'
          },
          {
            requirement: 4,
            bonus: "When struck in combat has a chance of causing the attacker to flee in terror for 2 seconds."
          },
          {
            requirement: 6,
            bonus: "Increases damage and healing done by magical spells and effects by up to 23."
          },
          {
            requirement: 8,
            bonus: "+200 Armor"
          }
        ]
      },
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    }
  ];

  leggingInfo: ItemInfo[] = [
    {
      name: "Nightwind Leggings",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.legs,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 14
        },
        {
          stat: Stat.stamina,
          value: 19
        }
      ],
      bonuses: [
        "Equip: Increases damage done by Shadow spells and effects by up to 34.",
        "Equip: Restores 6 health per 5 sec."
      ],
      durability: 65,
      armor: 144,
      icon: "inv_pants_06",
      location: "Caverns Of Time",
      quest: undefined,
      boss: "Harbinger Aph'ygth",
      droprate: 14,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Leggings of Torment",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.legs,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 16
        },
        {
          stat: Stat.intellect,
          value: 16
        }
      ],
      bonuses: [
        "Equip: Increases damage done by Shadow spells and effects by up to 34.",
      ],
      durability: 65,
      armor: 78,
      icon: "inv_pants_09",
      location: "Upper Blackrock Spire",
      quest: undefined,
      boss: "Lord Valthalak - 0.5 Summonable",
      droprate: 25,
      lore: undefined,
      levelRequirement: 58,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Skyshroud Leggings",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.legs,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 8
        },
        {
          stat: Stat.intellect,
          value: 8
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 34."
      ],
      durability: 65,
      armor: 75,
      icon: "inv_pants_13",
      location: "Lower Blackrock Spire",
      quest: undefined,
      boss: "Highlord Omokk",
      droprate: undefined,
      lore: undefined,
      levelRequirement: 55,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Deathmist Leggings",
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.legs,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 20
        },
        {
          stat: Stat.stamina,
          value: 20
        }
      ],
      bonuses: [
        "Equip: Improves your chance to hit with spells by 1%.",
        "Equip: Increases damage and healing done by magical spells and effects by up to 24."
      ],
      durability: 75,
      armor: 81,
      icon: "inv_pants_08",
      location: "Tier 0.5 Questline",
      quest: "Anthion's Parting Words",
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: {
        name: 'Deathmist Raiment',
        setPieces: [
          "Deathmist Belt",
          "Deathmist Bracers",
          "Deathmist Leggings",
          "Deathmist Mantle",
          "Deathmist Mask",
          "Deathmist Robe",
          "Deathmist Sandals",
          "Deathmist Wraps"
        ],
        setBonuses: [
          {
            requirement: 2,
            bonus: '+8 All Resistances'
          },
          {
            requirement: 4,
            bonus: "When struck in combat has a chance of causing the attacker to flee in terror for 2 seconds."
          },
          {
            requirement: 6,
            bonus: "Increases damage and healing done by magical spells and effects by up to 23."
          },
          {
            requirement: 8,
            bonus: "+200 Armor"
          }
        ]
      },
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Outrider's Silk Leggings",
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.legs,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 23
        },
        {
          stat: Stat.intellect,
          value: 14
        },
        {
          stat: Stat.spirit,
          value: 10
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 35.",
        "Equip: Improves your chance to get a critical strike with spells by 1%."
      ],
      durability: 75,
      armor: 196,
      icon: "inv_pants_cloth_05",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: {
        name: "Warsong Gulch",
        level: RepLevel.exalted
      },
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Sentinel's Silk Leggings",
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.legs,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 23
        },
        {
          stat: Stat.intellect,
          value: 14
        },
        {
          stat: Stat.spirit,
          value: 10
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 35.",
        "Equip: Improves your chance to get a critical strike with spells by 1%."
      ],
      durability: 75,
      armor: 196,
      icon: "inv_pants_cloth_05",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: {
        name: "Warsong Gulch",
        level: RepLevel.exalted
      },
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    }
  ];

  feetInfo: ItemInfo[] = [
    {
      name: "Maleki's Footwraps",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.feet,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 9
        },
        {
          stat: Stat.intellect,
          value: 9
        }
      ],
      bonuses: [
        "Equip: Increases damage done by Shadow spells and effects by up to 27."
      ],
      durability: 40,
      armor: 60,
      icon: "inv_boots_03",
      location: "Stratholme",
      quest: undefined,
      boss: "Maleki the Pallid",
      droprate: 20,
      lore: undefined,
      levelRequirement: 57,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Runewarder's Boots",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.feet,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 16
        },
        {
          stat: Stat.stamina,
          value: 14
        },
        {
          stat: Stat.spirit,
          value: -5
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 18.",
        "Equip: Restores 4 health per 5 sec."
      ],
      durability: 40,
      armor: 112,
      icon: "inv_boots_05",
      location: "Stormwind Vaults",
      quest: undefined,
      boss: "Nazorna",
      droprate: undefined,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Dragonrider Boots",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.feet,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.intellect,
          value: 16
        },
        {
          stat: Stat.stamina,
          value: 5
        },
        {
          stat: Stat.fireResistance,
          value: 10
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 18."
      ],
      durability: 40,
      armor: 61,
      icon: "inv_boots_05",
      location: "Upper Blackrock Spire",
      quest: undefined,
      boss: "Warchief Rend Blackhand",
      droprate: undefined,
      lore: undefined,
      levelRequirement: 58,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Deathmist Sandals",
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.feet,
      type: ItemType.cloth,
      stats: [
        {
          stat: Stat.stamina,
          value: 24
        },
        {
          stat: Stat.intellect,
          value: 14
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "Equip: Increases damage done by your pet by 3%."
      ],
      durability: 50,
      armor: 64,
      icon: "inv_boots_05",
      location: "Tier 0.5 Questline",
      quest: "An Earnest Proposition",
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: {
        name: 'Deathmist Raiment',
        setPieces: [
          "Deathmist Belt",
          "Deathmist Bracers",
          "Deathmist Leggings",
          "Deathmist Mantle",
          "Deathmist Mask",
          "Deathmist Robe",
          "Deathmist Sandals",
          "Deathmist Wraps"
        ],
        setBonuses: [
          {
            requirement: 2,
            bonus: '+8 All Resistances'
          },
          {
            requirement: 4,
            bonus: "When struck in combat has a chance of causing the attacker to flee in terror for 2 seconds."
          },
          {
            requirement: 6,
            bonus: "Increases damage and healing done by magical spells and effects by up to 23."
          },
          {
            requirement: 8,
            bonus: "+200 Armor"
          }
        ]
      },
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    }
  ];

  ringInfo: ItemInfo[] = [
    {
      name: "Ring of Twin Regeneration",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.finger,
      type: undefined,
      stats: [],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 11.",
        "Equip: Restores 6 mana per 5 sec.",
        "Equip: Restores 6 health per 5 sec."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_jewelry_ring_20",
      location: "Stormwind Vaults",
      quest: undefined,
      boss: "Tham'Grarr",
      droprate: 20,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Band of Infinite Possibilities",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.finger,
      type: undefined,
      stats: [
        {
          stat: Stat.stamina,
          value: 8
        },
        {
          stat: Stat.intellect,
          value: 8
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 18."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_jewelry_ring_48naxxramas",
      location: "Caverns Of Time",
      quest: undefined,
      boss: "Epidamu",
      droprate: 20,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Sandswept Ring of Arcanum",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.finger,
      type: undefined,
      stats: [
        {
          stat: Stat.stamina,
          value: 5
        },
        {
          stat: Stat.stamina,
          value: 5
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 18.",
        "Equip: Increases your attack and casting speed by 1%"
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_jewelry_ring_33",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: undefined,
      reputation: {
        name: "Wardens of Time",
        level: RepLevel.honored
      },
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Rune Band of Wizardry",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.finger,
      type: undefined,
      stats: [
        {
          stat: Stat.stamina,
          value: 7
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 16.",
        "Equip: Increases your chance to hit with spells by 1%."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_jewelry_ring_35",
      location: "Upper Blackrock Spire",
      quest: undefined,
      boss: "Lord Valthalak - 0.5 Summonable",
      droprate: 25,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Encrusted Gemstone Ring",
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.finger,
      type: undefined,
      stats: [
        {
          stat: Stat.stamina,
          value: 8
        }
      ],
      bonuses: [
        "Equip: +5 Arcane Resistance",
        "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "Equip: Increases damage and healing done by magical spells and effects by up to 20."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_jewelry_ring_74",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: {
        name: "Encrusted Gemstone Ring",
        profession: "Jewelcrafting"
      },
      damage: undefined
    },
    {
      name: "Ruby Ring of Ruin",
      quality: Quality.epic,
      binding: ItemBinding.onEquip,
      unique: false,
      slot: Slot.finger,
      type: undefined,
      stats: [
        {
          stat: Stat.intellect,
          value: 9
        },
        {
          stat: Stat.spirit,
          value: 7
        },
        {
          stat: Stat.fireResistance,
          value: 8
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 13.",
        "Equip: Improves your chance to get a critical strike with  spells by 1%"
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_jewelry_ring_36",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: {
        name: "Ruby Ring of Ruin",
        profession: "Jewelcrafting"
      },
      damage: undefined
    },
    {
      name: "Band of Domination",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.finger,
      type: undefined,
      damage: undefined,
      stats: [
        {
          stat: Stat.stamina,
          value: 5
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 11.",
        "Equip: Improves your chance to get a critical strike with spells by 1%."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_jewelry_ring_16",
      location: "Scholomance",
      quest: undefined,
      boss: "Darkmaster Gandling",
      droprate: 14,
      lore: undefined,
      levelRequirement: 58,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Band of the Unicorn",
      quality: Quality.uncommon,
      binding: ItemBinding.onEquip,
      unique: false,
      slot: Slot.finger,
      type: undefined,
      stats: [],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 13."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_jewelry_ring_11",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: 43,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
  ];

  trinketInfo: ItemInfo[] = [
    {
      name: "Whip of Encouragement",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.trinket,
      type: undefined,
      stats: [],
      bonuses: [
        "Equip: Increases your attack and casting speed by 3%",
        "Equip: Increases mount speed by 3%"
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_misc_crop_01",
      location: "Stormwind Vaults",
      quest: undefined,
      boss: "Arc'tiras",
      droprate: 25,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Fabric of Time",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.trinket,
      type: undefined,
      stats: [
        {
          stat: Stat.intellect,
          value: -20
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 30.",
        "Equip: Restores 7 mana per 5 sec."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_fabric_netherweave_bolt_imbued",
      location: "Caverns Of Time",
      quest: undefined,
      boss: "Epidamu",
      droprate: 25,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Briarwood Reed",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.trinket,
      type: undefined,
      stats: [],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 30."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_misc_root_02",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: 55,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Royal Seal of Eldre'Thalas",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.trinket,
      type: undefined,
      stats: [
        {
          stat: Stat.fireResistance,
          value: 10
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 23."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_jewelry_talisman_10",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: "Blessed by the Shen'dralar Ancients.",
      levelRequirement: undefined,
      itemSet: undefined,
      reputation: undefined,
      classLock: [PlayerClass.warlock],
      recipe: undefined,
      damage: undefined
    },
    {
      name: "Blackfire Orb",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: undefined,
      slot: Slot.trinket,
      type: undefined,
      stats: [
        {
          stat: Stat.arcaneResistance,
          value: 5
        }
      ],
      bonuses: [
        "Equip: Improves your chance to get a critical strike with spells by 1%",
        "Equip: Improves your attack and casting speed by 1%.",
        "Equip: Increases damage and healing done by magical spells and effects by up to 15."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_misc_orb_05",
      location: "Swamp of Sorrows",
      quest: "The Key to Karazhan",
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined,
      damage: undefined
    }
  ];

  oneHandInfo: ItemInfo[] = [
    {
      name: "Blade of Infinite Mysteries",
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.mainHand,
      type: ItemType.sword,
      damage: {
        min: 50,
        max: 108,
        speed: 1.90,
        dps: 41.6
      },
      stats: [
        {
          stat: Stat.stamina,
          value: 6
        },
        {
          stat: Stat.intellect,
          value: 6
        }
      ],
      bonuses: [
        "Equip: Improves your chance to hit with spells by 1%",
        "Equip: Increases damage and healing done by magical spells and effects by up to 37."
      ],
      durability: 100,
      armor: undefined,
      icon: "inv_sword_22",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: "Forged from glass smelted from the very sands of time that flow in the Caverns of Time.",
      levelRequirement: undefined,
      itemSet: undefined,
      reputation: {
        name: "Wardens of Time",
        level: RepLevel.exalted
      },
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Witchblade",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.oneHand,
      type: ItemType.dagger,
      damage: {
        min: 45,
        max: 85,
        speed: 1.60,
        dps: 40.6
      },
      stats: [
        {
          stat: Stat.intellect,
          value: 8
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 14."
      ],
      durability: 100,
      armor: undefined,
      icon: "inv_weapon_shortblade_25",
      location: "Scholomance",
      quest: undefined,
      boss: "Darkmaster Gandling",
      droprate: 15,
      lore: undefined,
      levelRequirement: 57,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Call of Shadow",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.mainHand,
      type: ItemType.sword,
      damage: {
        min: 74,
        max: 112,
        speed: 2.40,
        dps: 38.7
      },
      stats: [
        {
          stat: Stat.stamina,
          value: 8
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 13",
        "Chance on hit: Sends a shadowy bolt at the enemy causing 35 Shadow damage."
      ],
      durability: 100,
      armor: undefined,
      icon: "inv_sword_37",
      location: "Hateforge Quarry",
      quest: undefined,
      boss: "Har'gesh Doomcaller",
      droprate: undefined,
      lore: undefined,
      levelRequirement: 54,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Sageclaw",
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.oneHand,
      type: ItemType.dagger,
      damage: {
        min: 46,
        max: 96,
        speed: 1.70,
        dps: 41.7
      },
      stats: [
        {
          stat: Stat.stamina,
          value: 14
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 40.",
        "Equip: Improves your chance to get a critical strike with spells by 1%."
      ],
      durability: 120,
      armor: 80,
      icon: "inv_sword_26",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: {
        name: "League of Arathor",
        level: RepLevel.exalted
      },
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Mindfang",
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.oneHand,
      type: ItemType.dagger,
      damage: {
        min: 46,
        max: 96,
        speed: 1.70,
        dps: 41.7
      },
      stats: [
        {
          stat: Stat.stamina,
          value: 14
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 40.",
        "Equip: Improves your chance to get a critical strike with spells by 1%."
      ],
      durability: 120,
      armor: 80,
      icon: "inv_sword_26",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: {
        name: "The Defilers",
        level: RepLevel.exalted
      },
      classLock: undefined,
      recipe: undefined
    }
  ];

  offHandInfo: ItemInfo[] = [
    {
      name: "Tome of Shadow Force",
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: true,
      slot: Slot.offHand,
      type: undefined,
      damage: undefined,
      stats: [
        {
          stat: Stat.stamina,
          value: 8
        }
      ],
      bonuses: [
        "Equip: Increases damage done by Shadow spells and effects by up to 34."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_misc_book_06",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: undefined,
      reputation: {
        name: "Alterac Valley",
        level: RepLevel.exalted
      },
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Almanac of Savagery",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.offHand,
      type: undefined,
      damage: undefined,
      stats: [
        {
          stat: Stat.strength,
          value: 5
        },
        {
          stat: Stat.agility,
          value: 6
        },
        {
          stat: Stat.stamina,
          value: 12
        }
      ],
      bonuses: [
        "Equip: Increases your attack and casting speed by 2%."
      ],
      durability: undefined,
      armor: 50,
      icon: "inv_misc_book_06",
      location: "Stormwind Vaults",
      quest: undefined,
      boss: "Aszosh Grimflame",
      droprate: 12,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Skull of Tham",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: undefined,
      slot: Slot.offHand,
      type: undefined,
      damage: undefined,
      stats: [
        {
          stat: Stat.intellect,
          value: 8
        },
        {
          stat: Stat.spirit,
          value: 9
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 15."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_misc_bone_orcskull_01",
      location: "Stormwind Vaults",
      quest: undefined,
      boss: "Tham'Garr",
      droprate: undefined,
      lore: undefined,
      levelRequirement: 58,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Tome of the Lost",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.offHand,
      type: undefined,
      damage: undefined,
      stats: [
        {
          stat: Stat.stamina,
          value: 6
        },
        {
          stat: Stat.intellect,
          value: 7
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 18."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_misc_book_06",
      location: "Upper Blackrock Spire",
      quest: undefined,
      boss: "General Drakkisath",
      droprate: undefined,
      lore: "The title reads 'The Brode to Nowhere' ",
      levelRequirement: 58,
      itemSet: {
        name: "Possessions of the Lost",
        setPieces: [
          "Memento of the Lost",
          "Remains of the Lost",
          "Loop of the Lost",
          "Tome of the Lost"
        ],
        setBonuses: [
          {
            requirement: 3,
            bonus: 'Gives a 4% chance when your harmful spells land to reawaken the Lost for 20 sec.'
          }
        ]
      },
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Scepter of Interminable Focus",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.offHand,
      type: undefined,
      damage: undefined,
      stats: [],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 9.",
        "Equip: Improves your chance to hit with spells by 1%.",
        "Equip: Improves your chance to get a critical strike with spells by 1%."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_wand_07",
      location: "Stratholme",
      quest: undefined,
      boss: "Sothos & Jarien - 0.5 Summonable",
      droprate: undefined,
      lore: undefined,
      levelRequirement: 58,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    }
  ];

  twoHandInfo: ItemInfo[] = [
    {
      name: "Ironbark Staff",
      quality: Quality.epic,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.twoHand,
      type: ItemType.staff,
      damage: {
        min: 136,
        max: 243,
        speed: 3.40,
        dps: 55.8
      },
      stats: [
        {
          stat: Stat.stamina,
          value: 28
        },
        {
          stat: Stat.intellect,
          value: 10
        }
      ],
      bonuses: [
        "Equip: Improves your chance to get a critical strike with spells by 2%.",
        "Equip: Increases damagea and healing done by magical spells and effects by up to 53."
      ],
      durability: 120,
      armor: 200,
      icon: "inv_wand_04",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: {
        name: "Arathi Basin PvP",
        level: RepLevel.exalted
      },
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Rudeus' Focusing Cane",
      quality: Quality.epic,
      binding: ItemBinding.onEquip,
      unique: false,
      slot: Slot.twoHand,
      type: ItemType.staff,
      damage: {
        min: 123,
        max: 237,
        speed: 3.20,
        dps: 56.2
      },
      stats: [
        {
          stat: Stat.stamina,
          value: 15
        },
        {
          stat: Stat.intellect,
          value: 24
        },
        {
          stat: Stat.spirit,
          value: 13
        }
      ],
      bonuses: [
        "Equip: Improves your chance to hit with spells by 1%.",
        "Equip: Increases damage and healing done by magical spells and effects by up to 33."
      ],
      durability: 120,
      armor: undefined,
      icon: "inv_staff_14",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: 58,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: {
        name: "Rudeus' Focusing Cane",
        profession: "Jewelcrafting"
      }
    },
    {
      name: "Lord Valthalak's Staff of Command",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: undefined,
      slot: Slot.twoHand,
      type: ItemType.staff,
      damage: {
        min: 90,
        max: 136,
        speed: 2.10,
        dps: 53.8
      },
      stats: [
        {
          stat: Stat.stamina,
          value: 11
        },
        {
          stat: Stat.intellect,
          value: 10
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 30.",
        "Equip: Improves your chance to hit with spells by 1%."
      ],
      durability: 100,
      armor: undefined,
      icon: "inv_staff_07",
      location: "Upper Blackrock Spire",
      quest: undefined,
      boss: "Lord Valthalak - 0.5 Summon",
      droprate: undefined,
      lore: undefined,
      levelRequirement: 58,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Riftweaver",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.twoHand,
      type: ItemType.staff,
      damage: {
        min: 138,
        max: 243,
        speed: 3.40,
        dps: 56.1
      },
      stats: [
        {
          stat: Stat.stamina,
          value: 10
        },
        {
          stat: Stat.intellect,
          value: 12
        },
        {
          stat: Stat.spirit,
          value: 8
        }
      ],
      bonuses: [
        "Equip: Improves your chance to hit with spells by 1%.",
        "Equip: Increases damage and healing done by magical spells and effects by up to 29."
      ],
      durability: 100,
      armor: undefined,
      icon: "inv_staff_07",
      location: "Caverns of Time",
      quest: undefined,
      boss: "Antnormi",
      droprate: 25,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Rod of the Ogre Magi",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.twoHand,
      type: ItemType.staff,
      damage: {
        min: 116,
        max: 175,
        speed: 2.70,
        dps: 53.9
      },
      stats: [
        {
          stat: Stat.stamina,
          value: 11
        },
        {
          stat: Stat.intellect,
          value: 14
        },
        {
          stat: Stat.spirit,
          value: 7
        }
      ],
      bonuses: [
        "Equip: Improves your chance to get a critical strike with spells by 1%",
        "Equip: Increases damage and healing done by magical spells and effects by up to 23."
      ],
      durability: 100,
      armor: undefined,
      icon: "inv_staff_32",
      location: "Dire Maul North",
      quest: undefined,
      boss: "Tribute Chest",
      droprate: 8,
      lore: undefined,
      levelRequirement: 58,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Sealbreaker Staff",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: false,
      slot: Slot.twoHand,
      type: ItemType.staff,
      damage: {
        min: 116,
        max: 175,
        speed: 2.70,
        dps: 53.9,
      },
      stats: [
        {
          stat: Stat.intellect,
          value: 14
        },
        {
          stat: Stat.spirit,
          value: 8
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 24.",
        "Equip: Decreases the magical resistances of your spell targets by 20."
      ],
      durability: 100,
      armor: undefined,
      icon: "inv_staff_14",
      location: "Stormwind Vaults",
      quest: undefined,
      boss: "Aszosh Grimflame",
      droprate: undefined,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    }
  ];

  bonecreeper: MagicDamage = {
    school: "Arcane",
    min: 83,
    max: 155,
    speed: 1.90,
    dps: 62.6
  }

  wandInfo: ItemInfo[] = [
    {
      name: "Bonecreeper Stylus",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: undefined,
      slot: Slot.wand,
      type: undefined,
      damage: {
        min: 83,
        max: 155,
        speed: 1.90,
        dps: 62.6
      },
      stats: [
        {
          stat: Stat.intellect,
          value: 4
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 11."
      ],
      durability: 50,
      armor: undefined,
      icon: "inv_misc_bone_taurenskull_01",
      location: "Scholomance",
      quest: undefined,
      boss: "Darkmaster Gandling",
      droprate: undefined,
      lore: undefined,
      levelRequirement: 57,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Ritssyn's Wand of Bad Mojo",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: undefined,
      slot: Slot.wand,
      type: undefined,
      damage: {
        min: 58,
        max: 108,
        speed: 1.30,
        dps: 63.8
      },
      stats: [
        {
          stat: Stat.stamina,
          value: 4
        }
      ],
      bonuses: [
        "Equip: Increases damage and healing done by magical spells and effects by up to 11."
      ],
      durability: 50,
      armor: undefined,
      icon: "inv_wand_07",
      location: "Stratholme",
      quest: undefined,
      boss: "Baron Rivendare",
      droprate: 20,
      lore: undefined,
      levelRequirement: 58,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Skullrattler",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: undefined,
      slot: Slot.wand,
      type: undefined,
      damage: {
        min: 98,
        max: 169,
        speed: 2.10,
        dps: 63.6
      },
      stats: [
        {
          stat: Stat.stamina,
          value: 5
        }
      ],
      bonuses: [
        "Equip: Increases damage done by Shadow spells and effects by up to 13."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_misc_bone_elfskull_01",
      location: "Stormwind Vaults",
      quest: undefined,
      boss: "Damian",
      droprate: 20,
      lore: undefined,
      levelRequirement: 60,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    }
  ];

  enchantInfo: ItemInfo[] = [
    {
      name: "Arcane Emerald Gemstone",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: undefined,
      slot: undefined,
      type: undefined,
      damage: undefined,
      stats: [],
      bonuses: [
        "Use Permanently enchant a ring or amulet to increase spell damage by 5. Only usable on items level 25 and above."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_misc_gem_sapphire_01",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: {
        name: "Arcane Emerald Gemstone",
        profession: "Jewelcrafting"
      }
    },
    {
      name: "Arcanum of Focus",
      quality: Quality.uncommon,
      binding: ItemBinding.soulbound,
      unique: undefined,
      slot: undefined,
      type: undefined,
      damage: undefined,
      stats: [],
      bonuses: [
        "Use: Permanently adds +8 Healing and Damage from spells to a leg or head slot item. Does not stack with other enchantments for the selected equipment slot."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_misc_gem_01",
      location: "Dire Maul",
      quest: undefined,
      boss: "Libram of Focus",
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Arcanum of Rapidity",
      quality: Quality.uncommon,
      binding: ItemBinding.soulbound,
      unique: undefined,
      slot: undefined,
      type: undefined,
      damage: undefined,
      stats: [],
      bonuses: [
        "Use: Permanently adds 1% haste to a leg or head slot item. Does not stack with other enchantments for the selected equipment slot."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_misc_gem_01",
      location: "Dire Maul",
      quest: undefined,
      boss: "Libram of Rapidity",
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Enchanted Armor Kit",
      quality: Quality.rare,
      binding: undefined,
      unique: undefined,
      slot: undefined,
      type: undefined,
      damage: undefined,
      stats: [],
      bonuses: [
        "Use: Permanently adds +9 Healing and Damage from spells to an item worn on the chest, legs, hands or feet. Only usable on items level 60 and above."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_misc_armorkit_18",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: 50,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: {
        name: "Enchanted Armor Kit",
        profession: "Leatherworking"
      }
    },
    {
      name: "Enchant Bracer - Spell Power",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: undefined,
      slot: undefined,
      type: undefined,
      damage: undefined,
      stats: [],
      bonuses: [
        "Use: Teaches you how to permanently enchant a bracer to give +12 Spell Damage."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_misc_note_01",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: undefined,
      reputation: {
        name: "Gelkis Clan Centaur",
        level: RepLevel.exalted
      },
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Enchant Weapon - Spell Power",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: undefined,
      slot: undefined,
      type: undefined,
      damage: undefined,
      stats: [],
      bonuses: [
        "Use: Teaches you how to permanently enchant a bracer to add up to +30 damage to spells."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_misc_note_01",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    },
    {
      name: "Enchant Cloak - Subtlety",
      quality: Quality.rare,
      binding: ItemBinding.soulbound,
      unique: undefined,
      slot: undefined,
      type: undefined,
      damage: undefined,
      stats: [],
      bonuses: [
        "Use: Teaches you how to permanently enchant a cloak to reduce how threatening the wearer is to monsters by 2%."
      ],
      durability: undefined,
      armor: undefined,
      icon: "inv_misc_note_01",
      location: undefined,
      quest: undefined,
      boss: undefined,
      droprate: undefined,
      lore: undefined,
      levelRequirement: undefined,
      itemSet: undefined,
      reputation: undefined,
      classLock: undefined,
      recipe: undefined
    }
  ];

  getShoulderPiece(name: string): ItemInfo | undefined {
    for (let i = 0; i < this.shoulderInfo.length; i++) {
      const current = this.shoulderInfo[i];

      if (name === current.name) {
        return current;
      }
    }

    return undefined;
  }

  getHeadPiece(name: string): ItemInfo | undefined {
    for (let i = 0; i < this.headInfo.length; i++) {
      const current = this.headInfo[i];

      if (name === current.name) {
        return current;
      }
    }

    return undefined;
  }
}
