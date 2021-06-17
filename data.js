// Orbs
const ice = "ice";
const fire = "fire";
const water = "water";
const energy = "energy";
const earth = "earth";
const life = "life";
const voib = "void";
const air = "air";
const light = "light";
const shadow = "shadow";

const items = [{
    name: "Fire Sword",
    orbs: [fire, earth, light],
    image: "item_light_fire_earth.png"
}, {
    name: "Life of Spear",
    orbs: [light, light, earth],
    image: "item_light_life_earth.png"
}, {
    name: "Earth Spear",
    orbs: [air, earth, shadow],
    image: "item_air_earth_shadow.png"
}, {
    name: "Stone of Void",
    orbs: [air, life, voib],
    image: "item_air_life_void.png"
}, {
    name: "Fire Stone",
    orbs: [fire, air, life],
    image: "item_air_fire_life.png"
}, {
    name: "Void talisman",
    orbs: [energy, fire, voib],
    image: "item_energy_fire_void.png"
}, {
    name: "Ring of Water",
    orbs: [energy, shadow, water],
    image: "item_energy_shadow_water.png"
}, {
    name: "Energy Shield",
    orbs: [water, earth, energy],
    image: "item_energy_earth_water.png"
}, {
    name: "Fire Hammer",
    orbs: [fire, earth, water],
    image: "item_fire_earth_water.png"
}, {
    name: "Ring or Ice",
    orbs: [ice, shadow, air],
    image: "item_ice_shadow_air.png"
}, {
    name: "Energy Axe",
    orbs: [energy, voib, ice],
    image: "item_energy_void_ice.png"
}, {
    name: "Ice Sword",
    orbs: [shadow, light, ice],
    image: "item_shadow_light_ice.png"
}, {
    name: "Water Blades",
    orbs: [water, life, shadow],
    image: "item_water_life_shadow.png"
}, {
    name: "Staff of Light",
    orbs: [light, water, voib],
    image: "item_light_water_void.png"
}, {
    name: "Amulet of Vampyrism",
    orbs: [voib, ice, earth],
    image: "item_void_ice_earth.png"
}, {
    name: "Shadow Sword",
    orbs: [voib, fire, shadow],
    image: "item_void_fire_shadow.png"
}, {
    name: "Shield of Light",
    orbs: [energy, light, air],
    image: "item_energy_light_air.png"
}, {
    name: "Life Stone",
    orbs: [light, life, ice],
    image: "item_light_life_ice.png"
}, {
    name: "Fire Blades",
    orbs: [energy, life, fire],
    image: "item_energy_life_fire.png"
}, {
    name: "Ice Shield",
    orbs: [ice, air, water],
    image: "item_ice_air_water.png"
}, {
    name: "Water Amulet",
    orbs: [voib, air, water],
    image: "item_air_void_water.png"
}, {
    name: "Mystery Stone",
    orbs: [shadow, voib, water],
    image: "item_void_shadow_water.png"
}, {
    name: "Energy Sword",
    orbs: [light, shadow, energy],
    image: "item_shadow_energy_light.png"
}, {
    name: "Light Crossbow",
    orbs: [fire, air, light],
    image: "item_air_fire_light.png"
}, {
    name: "Fire Staff",
    orbs: [ice, fire, water],
    image: "item_water_ice_fire.png"
}, {
    name: "Ice Blade",
    orbs: [ice, earth, fire],
    image: "item_ice_fire_earth.png"
}, {
    name: "Enery Bow",
    orbs: [earth, air, energy],
    image: "item_air_earth_energy.png"
}, {
    name: "Urn of Life",
    orbs: [voib, light, life],
    image: "item_void_light_life.png"
}, {
    name: "Life Shield",
    orbs: [earth, shadow, life],
    image: "item_earth_shadow_life.png"
}, {
    name: "Ice Crystal",
    orbs: [ice, life, energy],
    image: "item_ice_life_energy.png"
}]