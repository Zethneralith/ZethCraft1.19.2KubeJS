// { pattern: [], key: {} }

const recipes = [
	// General:

	// Minecraft:

	// Thermal:
	{
		mod: 'thermal',
		removeAll: false,

		recipeLists: [],

		remove: [
			//{ output: 'thermal:machine_furnace' },
			//{ output: 'thermal:machine_sawmill'}
		]
	},
	
	// Create:
	{
		mod: 'create',
		removeAll: false,

		recipeLists: [
			{
				type: 'minecraft:crafting_shaped',
				recipes: [
					
				]
			}
		]
	},

	// Immersive Engineering:
	{
		mod: 'immersiveengineering',
		removeAll: false,

		recipeLists: [
			{
				type: 'minecraft:crafting_shaped',
				recipes: [
					{ data: { result: { item: 'immersiveengineering:cokebrick', count: 3 }, pattern: ['CBC','BOB','CBC'], key: { C: { item: 'minecraft:clay_ball' }, B: { tag: 'forge:ingots/brick' }, O: { item: 'immersiveengineering:creosote_bucket' } } }, meta: { replace: { id: 'immersiveengineering:crafting/cokebrick' } } },
					{ data: { result: { item: 'immersiveengineering:blueprint', nbt: { blueprint: 'Electronics' } }, pattern: ['CRC', 'BBB', 'PPP'], key: { C: { tag: 'forge:wires/copper' }, R: { item: 'minecraft:redstone' }, B: { tag: 'forge:dyes/blue' }, P: { item: 'minecraft:paper' } } } }
				]
			},
			{
				type: 'immersiveengineering:blueprint',
				recipes: [
					{ data: { result: { item: 'immersiveengineering:electron_tube', count: 3 }, inputs: [ { tag: 'forge:glass' }, { tag: 'forge:plates/nickel' }, { tag: 'forge:wires/copper' }, { item: 'minecraft:redstone' } ], category: 'Electronics' } },
					{ data: { result: { item: 'immersiveengineering:component_electronic', count: 1 }, inputs: [ { tag: 'forge:treated_wood_slab' }, { item: 'minecraft:quartz' }, { item: 'minecraft:redstone' }, { tag: 'forge:wires/copper' } ], category: 'Electronics' }, meta: { replace: { id: 'immersiveengineering:blueprint/component_electronic' } } },
					{ data: { result: { item: 'immersiveengineering:component_electronic_adv', count: 1 }, inputs: [ { tag: 'forge:plates/plastic' }, { item: 'immersiveengineering:electron_tube' }, { tag: 'forge:wires/aluminum' } ], category: 'Electronics' }, meta: { replace: { id: 'immersiveengineering:blueprint/component_electronic_adv' } } },
					{ data: { result: { item: 'immersiveengineering:circuit_board', count: 1 }, inputs: [ { tag: 'forge:plates/plastic' }, { tag: 'forge:plates/copper' } ], category: 'Electronics' }, meta: { replace: { id: 'immersiveengineering:blueprint/circuit_board' } } },

				]
			},
			{
				type: 'immersiveengineering:refinery',
				recipes: [
					{ data: { result: { fluid: 'immersiveengineering:phenolic_resin', amount: 8 }, input0: { tag: 'forge:acetaldehyde', amount: 8 }, input1: { tag: 'forge:resin', amount: 8 }, energy: 240 } }
				]
			},
			{
				type: 'create:mixing',
				recipes: [
					{ data: { results: [ { item: 'immersiveengineering:dust_coke' }, { amount: 100, fluid: 'immersiveengineering:creosote' } ], ingredients: [ { item: 'minecraft:coal' } ], heatRequirement: 'heated' } }
				]
			}
		]
	},

	// Storage Drawers:
	
	// Farmer's Delight:
	
	// Extended Crafting:
	{
		mod: 'extendedcrafting',
		removeAll: true,

		recipeLists: [
			{
				type: 'minecraft:crafting_shaped',
				recipes: [
					{ data: { result: 'extendedcrafting:ender_crafter', pattern: ['   ', 'E E', 'E E'], key: { E: { tag: 'forge:ingots/enderium' } } } }
				]
			}
		]
	},

	// Mekanism
	{
		mod: 'mekanism',
		removeAll: false,

		remove: [
			{ output: 'mekanism:digital_miner' }
		]
	},

	// Mekanism Generators
	{
		mod: 'mekanismgenerators',
		removeAll: false,

		remove: [
			{ output: 'mekanismgenerators:wind_generator' }
		]
	}
];

// Main Recipe Event:
ServerEvents.recipes(e => {
	recipes.forEach(g => {
		if (g.removeAll) {
			e.remove({ mod: g.mod });
		}

		if (g.remove) {
			g.remove.forEach(r => {
				e.remove(r);
			});
		}

		if (g.recipeLists) {
			g.recipeLists.forEach(g2 => {
				g2.recipes.forEach(r => {
					if(r.meta) {
						if (r.meta.replace) {
							e.remove(r.meta.replace);
						}
					}
					
					e.custom( Object.assign({ type: g2.type }, r.data));
				});
			});
		}
	});
	
	console.info('Loaded Expert Mode Recipes.');
});