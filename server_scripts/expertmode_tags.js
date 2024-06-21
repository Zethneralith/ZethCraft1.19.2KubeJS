ServerEvents.tags('item', e => {
    const tags = {
        'quark:corundum_clusters': ['quark:red_corundum_cluster', 'quark:orange_corundum_cluster', 'quark:yellow_corundum_cluster', 'quark:green_corundum_cluster', 'quark:blue_corundum_cluster', 'quark:indigo_corundum_cluster', 'quark:violet_corundum_cluster', 'quark:white_corundum_cluster', 'quark:black_corundum_cluster'],
        'forge:plates': ['kubejs:metal_plate_brass', 'kubejs:tungsten_plate'],
        'forge:plates/brass': ['kubejs:metal_plate_brass'],
        'forge:plates/tungsten': ['kubejs:tungsten_plate'],
        'forge:ingots': ['stalwart_dungeons:tungsten_ingot'],
        'forge:ingots/tungsten': ['stalwart_dungeons:tungsten_ingot']
    }

    for (let key in tags) {
        e.add(key, tags[key]);
    }

    e.remove('forge:rope', [ 'quark:rope', 'farmersdelight:rope' ]);
    e.remove('forge:ropes', [ 'quark:rope', 'farmersdelight:rope' ]);

    e.remove('forge:plates', [ 'create:copper_sheet', 'thermal:copper_plate', 'ad_astra:iron_plate', 'ad_astra:steel_plate', 'create:golden_sheet', 'create:iron_sheet', 'create:brass_sheet' ]);
    e.remove('forge:plates/copper', [ 'create:copper_sheet', 'thermal:copper_plate' ]);
    e.remove('forge:plates/steel', [ 'ad_astra:steel_plate', 'ad_astra:steel_plate' ]);
    e.remove('forge:plates/gold', ['create:gold_sheet']);
    e.remove('forge:plates/iron', ['create:iron_sheet', 'ad_astra:iron_plate']);
    e.remove('forge:paltes/brass', ['create:brass_sheet']);
});

ServerEvents.tags('fluid', e => {
    e.add('forge:resin', 'thermal:resin');
})