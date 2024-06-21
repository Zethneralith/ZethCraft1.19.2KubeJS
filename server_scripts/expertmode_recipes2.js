// { result: '', pattern: ['   ', '   ', '   '], key: {  } }

ServerEvents.recipes(e => {
    // Constants
    const shaped = 'minecraft:crafting_shaped';

    // Helper Methods:

    const removeAllFromMod = modid => {
        e.remove({ mod: modid });
    };

    const removeItem = itemid => {
        e.remove({ output: itemid })
    }

    const replace = (recipeId, type, newRecipe) => {
        e.remove({ id: recipeId });
        e.custom(Object.assign({ type: type }, newRecipe));
    };

    const removeMulti = list => {
        list.forEach(item => {
            e.remove({ output: item });
        })
    }

    const add = (type, data) => {
        e.custom(Object.assign({ type: type }, data));
    }

    e.remove({ type: "twilightforest:uncrafting" });

    // Here we just go through everything add by add, removal/replacement by removal/replacement
    removeMulti([
        'thermal:machine_furnace',
        'thermal:machine_sawmill',
        'thermal:machine_pulverizer',
        'thermal:machine_smelter',
        'thermal:machine_insolator',
        'thermal:machine_centrifuge',
        'thermal:machine_press',
        'thermal:machine_crucible',
        'thermal:machine_chiller',
        'thermal:machine_refinery',
        'thermal:machine_pyrolyzer',
        'thermal:machine_bottler',
        'thermal:machine_brewer',
        'thermal:machine_crystallizer',
        'thermal:machine_crafter'
    ])

    // Rope Fix: (Make supplementaries rope the main one.)
    removeItem('quark:rope');
    removeItem('farmersdelight:rope')
    replace('farmersdelight:safety_net', shaped, { result: 'farmersdelight:safety_net', pattern: ['RR ', 'RR ', '   '], key: { R: { item: 'supplementaries:rope' } } });

    // *******************************
    // Components
    // *******************************
    replace('thermal:redstone_servo', shaped, { result: 'thermal:redstone_servo', pattern: ['RAR', ' A ', 'RAR'], key: { R: { item: 'minecraft:redstone' }, A: { item: 'create:andesite_alloy' } } });

    // Plates:
    // Iron:
    removeMulti(['immersiveengineering:plate_iron', 'ad_astra:iron_plate', 'create:iron_sheet']);
    add('create:pressing', { results: [ { item: 'immersiveengineering:plate_iron' } ], ingredients: [ { item: 'minecraft:iron_ingot' } ] });
    add('immersiveengineering:metal_press', { result: { item: 'immersiveengineering:plate_iron' }, energy: 2400, input: { item: 'minecraft:iron_ingot' }, mold: 'immersiveengineering:mold_plate'});

    // Copper:
    removeMulti(['immersiveengineering:plate_copper', 'create:copper_sheet']);
    add('create:pressing', { results: [ { item: 'immersiveengineering:plate_copper' } ], ingredients: [ { item: 'minecraft:copper_ingot' } ] });
    add('immersiveengineering:metal_press', { result: { item: 'immersiveengineering:plate_copper' }, energy: 2400, input: { item: 'minecraft:copper_ingot' }, mold: 'immersiveengineering:mold_plate'});

    // Gold:
    removeMulti(['immersiveengineering:plate_gold', 'create:gold_sheet']);
    add('create:pressing', { results: [ { item: 'immersiveengineering:plate_gold' } ], ingredients: [ { item: 'minecraft:gold_ingot' } ] });
    add('immersiveengineering:metal_press', { result: { item: 'immersiveengineering:plate_gold' }, energy: 2400, input: { item: 'minecraft:gold_ingot' }, mold: 'immersiveengineering:mold_plate'});

    // Tin:
    //add('create:pressing', { results: [ { item: 'immersiveengineering:plate_tin' } ], ingredients: [ { tag: 'forge:ingots/tin' } ] });
    //add('immersiveengineering:metal_press', { result: { item: 'immersiveengineering:plate_tin' }, energy: 2400, input: { tag: 'forge:ingots/tin' }, mold: 'immersiveengineering:mold_plate'});

    // Aluminum:
    removeMulti(['immersiveengineering:plate_aluminum']);
    add('create:pressing', { results: [ { item: 'immersiveengineering:plate_aluminum' } ], ingredients: [ { tag: 'forge:ingots/aluminum' } ] });
    add('immersiveengineering:metal_press', { result: { item: 'immersiveengineering:plate_aluminum' }, energy: 2400, input: { tag: 'forge:ingots/aluminum' }, mold: 'immersiveengineering:mold_plate'});

    // Brass:
    removeMulti(['create:brass_sheet']);
    add('create:pressing', { results: [ { item: 'kubejs:metal_plate_brass' } ], ingredients: [ { tag: 'forge:ingots/brass' } ] });
    add('immersiveengineering:metal_press', { result: { item: 'kubejs:metal_plate_brass' }, energy: 2400, input: { tag: 'forge:ingots/brass' }, mold: 'immersiveengineering:mold_plate'});

    // Lead:
    removeMulti(['immersiveengineering:plate_lead']);
    add('create:pressing', { results: [ { item: 'immersiveengineering:plate_lead' } ], ingredients: [ { tag: 'forge:ingots/lead' } ] });
    add('immersiveengineering:metal_press', { result: { item: 'immersiveengineering:plate_lead' }, energy: 2400, input: { tag: 'forge:ingots/lead' }, mold: 'immersiveengineering:mold_plate'});

    // Silver:
    removeMulti(['immersiveengineering:plate_silver']);
    add('create:pressing', { results: [ { item: 'immersiveengineering:plate_silver' } ], ingredients: [ { tag: 'forge:ingots/silver' } ] });
    add('immersiveengineering:metal_press', { result: { item: 'immersiveengineering:plate_silver' }, energy: 2400, input: { tag: 'forge:ingots/silver' }, mold: 'immersiveengineering:mold_plate'});

    // Nickel:
    removeMulti(['immersiveengineering:plate_nickel']);
    add('create:pressing', { results: [ { item: 'immersiveengineering:plate_nickel' } ], ingredients: [ { tag: 'forge:ingots/nickel' } ] });
    add('immersiveengineering:metal_press', { result: { item: 'immersiveengineering:plate_nickel' }, energy: 2400, input: { tag: 'forge:ingots/nickel' }, mold: 'immersiveengineering:mold_plate'});

    // Uranium:
    removeMulti(['immersiveengineering:plate_uranium']);
    add('create:pressing', { results: [ { item: 'immersiveengineering:plate_uranium' } ], ingredients: [ { tag: 'forge:ingots/uranium' } ] });
    add('immersiveengineering:metal_press', { result: { item: 'immersiveengineering:plate_uranium' }, energy: 2400, input: { tag: 'forge:ingots/uranium' }, mold: 'immersiveengineering:mold_plate'});

    // Steel:
    removeMulti(['immersiveengineering:plate_steel', 'ad_astra:steel_plate']);
    add('immersiveengineering:metal_press', { result: { item: 'immersiveengineering:plate_steel' }, energy: 2400, input: { tag: 'forge:ingots/steel' }, mold: 'immersiveengineering:mold_plate'});

    // Constantan:
    removeMulti(['immersiveengineering:plate_constantan']);
    add('immersiveengineering:metal_press', { result: { item: 'immersiveengineering:plate_constantan' }, energy: 2400, input: { tag: 'forge:ingots/constantan' }, mold: 'immersiveengineering:mold_plate'});

    // Electrum:
    removeMulti(['immersiveengineering:plate_electrum']);
    add('immersiveengineering:metal_press', { result: { item: 'immersiveengineering:plate_electrum' }, energy: 2400, input: { tag: 'forge:ingots/electrum' }, mold: 'immersiveengineering:mold_plate'});

    // Tungsten:
    add('immersiveengineering:metal_press', { result: { item: 'kubejs:tungsten_plate' }, energy: 2400, input: { tag: 'forge:ingots/tungsten' }, mold: 'immersiveengineering:mold_plate'});

    // Ventium:
    add('immersiveengineering:metal_press', { result: { item: 'kubejs:metal_plate_ventium' }, energy: 2400, input: { tag: 'blue_skies:ingots/ventium' }, mold: 'immersiveengineering:mold_plate'});

    // Horizonite:
    add('immersiveengineering:metal_press', { result: { item: 'kubejs:metal_plate_horizonite' }, energy: 2400, input: { tag: 'blue_skies:ingots/horizonite' }, mold: 'immersiveengineering:mold_plate'});

    // Falsite:
    add('immersiveengineering:metal_press', { result: { item: 'kubejs:metal_plate_falsite' }, energy: 2400, input: { tag: 'blue_skies:ingots/falsite' }, mold: 'immersiveengineering:mold_plate'});

    // Signalum:

    // Lumium:

    // Enderium:

    // *******************************
    // Create (Balance/Integration):
    // *******************************
    replace('create:crafting/kinetics/hose_pulley', shaped, { result: 'create:hose_pulley', pattern: [' C ', 'KRK', ' H '], key: { C: { item: 'create:copper_casing' }, K: { item: 'minecraft:dried_kelp' }, R: { tag: 'forge:rope' }, H: { item: 'minecraft:tripwire_hook' } } });
    removeItem('create:copper_casing'); // Remove copper casing to re-add it, since these end up with multiple IDs
    add('create:item_application', { results: [ { item: 'create:copper_casing' } ], ingredients: [ { tag: 'forge:stripped_logs' }, { tag: 'forge:plates/copper' } ] });
    add('create:item_application', { results: [ { item: 'create:copper_casing' } ], ingredients: [ { tag: 'forge:stripped_wood' }, { tag: 'forge:plates/copper' } ] });
    removeItem('create:brass_casing'); // Remove brass casing to re-add it, since these end up with multiple IDs
    add('create:item_application', { results: [ { item: 'create:brass_casing' } ], ingredients: [ { tag: 'forge:stripped_logs' }, { tag: 'forge:plates/brass' } ] });
    add('create:item_application', { results: [ { item: 'create:brass_casing' } ], ingredients: [ { tag: 'forge:stripped_wood' }, { tag: 'forge:plates/brass' } ] });
    
    // *******************************
    // Casings
    // *******************************
    replace('mekanism:steel_casing', shaped, { result: { item: 'mekanism:steel_casing' }, pattern: ['SOS', 'OFO', 'SOS'], key: { S: { tag: 'forge:plates/steel' }, O: { tag: 'forge:ingots/osmium' }, F: { item: 'create:brass_casing' } } });

    // *******************************
    // Blueprints
    // *******************************
    add('immersiveengineering:blueprint', { result: { item: 'immersiveengineering:electron_tube', count: 3 }, inputs: [ { tag: 'forge:glass' }, { tag: 'forge:plates/nickel' }, { tag: 'forge:wires/copper' }, { item: 'minecraft:redstone' } ], category: 'Electronics' });
    replace('immersiveengineering:blueprint/component_electronic', 'immersiveengineering:blueprint', { result: { item: 'immersiveengineering:component_electronic', count: 1 }, inputs: [ { tag: 'forge:treated_wood_slab' }, { item: 'minecraft:quartz' }, { item: 'minecraft:redstone' }, { tag: 'forge:wires/copper' } ], category: 'Electronics' });
    replace('immersiveengineering:blueprint/component_electronic_adv', 'immersiveengineering:blueprint', { result: { item: 'immersiveengineering:component_electronic_adv', count: 1 }, inputs: [ { tag: 'forge:plates/plastic' }, { item: 'immersiveengineering:electron_tube' }, { tag: 'forge:wires/aluminum' } ], category: 'Electronics' });
    replace('immersiveengineering:blueprint/circuit_board', 'immersiveengineering:blueprint', { result: { item: 'immersiveengineering:circuit_board', count: 1 }, inputs: [ { tag: 'forge:plates/plastic' }, { tag: 'forge:plates/copper' } ], category: 'Electronics' });
    add('immersiveengineering:blueprint', { result: { item: 'kubejs:doapi_component_1' }, inputs: [ { tag: 'forge:ingots/osmium' }, { tag: 'forge:plates/aluminum' }, { base_ingredient: { tag: 'forge:nuggets/iron' }, count: 4 }, { base_ingredient: { tag: 'forge:wires/copper' }, count: 2 } ], category: 'Electronics' });
});