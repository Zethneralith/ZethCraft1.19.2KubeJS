Platform.mods.kubejs.name = 'ZethCraft';

StartupEvents.registry('item', e => {
    e.create('twilight_alloy_dust').displayName('Twilight Alloy Blend').maxStackSize(64);
	e.create('twilight_alloy_ingot').displayName('Twilight Alloy Ingot').maxStackSize(64);
	
	e.create('simple_circuit').displayName('Basic Electronic Circuit').maxStackSize(64);
	e.create('falsite_circuit').displayName('Falsite Circuit').maxStackSize(64);
	e.create('mana_capacitor').displayName('Mana Capacitor').maxStackSize(64);
	e.create('froststeel_heat_sink').displayName('FrostSteel Heat Sink').maxStackSize(64);
	e.create('ender_capacitor').displayName('Ender Capacitor').maxStackSize(64);
	e.create('glowstone_wire').displayName('Glowstone Wire').maxStackSize(64);
	
	e.create('tungsten_plate').displayName('Tungsten Plate').maxStackSize(64);
	e.create('metal_plate_ventium').displayName('Ventium Plate').maxStackSize(64);
	e.create('metal_plate_falsite').displayName('Falsite Plate').maxStackSize(64);
	e.create('metal_plate_horizonite').displayName('Horizonite Plate').maxStackSize(64);

	e.create('metal_plate_brass').displayName('Brass Plate').maxStackSize(64);
	
	e.create('dust_ventium').displayName('Ventium Dust').maxStackSize(64);
	e.create('dust_falsite').displayName('Falsite Dust').maxStackSize(64);
	e.create('dust_horizonite').displayName('Horizonite Dust').maxStackSize(64);

    e.create('doapi_card_1').displayName('Data Card').maxStackSize(64);
    e.create('doapi_chip_1').displayName('Computer Chip 1').maxStackSize(64);
    e.create('doapi_chip_2').displayName('Computer Chip 2').maxStackSize(64);
    e.create('doapi_component_1').displayName('Electronic Casing').maxStackSize(64);
});