package de.fon4food.backend;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("vendors")
public class VendorController {

	@GetMapping
	public List<VendorInfo> listVendors() {
		List<VendorInfo> vendors = new ArrayList<>();
		vendors.add(new VendorInfo(
			"Mustermarkt",
			"Verbindungsstraße 12",
			"12435",
			"Fünfkirchen",
			"0815 1234321",
			"Mo-Fr 7-9 Uhr",
			"5,00 €"
		));
		vendors.add(new VendorInfo(
			"Fischer Fritz",
			"Hafenstraße 2",
			"01243",
			"Meersdorf",
			"0815 11223344",
			"Mo-Fr 8-18 Uhr, Sa 9-12 Uhr",
			"4,00 €"
		));
		vendors.add(new VendorInfo(
			"BIEGL",
			"Industriestraße 123",
			"01243",
			"Meersdorf",
			"0815 8973423",
			"Mo-Sa 6-25 Uhr",
			"6,00 €"
		));
		vendors.add(new VendorInfo(
			"MiniMARKT",
			"Panoramastraße 1",
			"112242",
			"Hauptdorf",
			"0815 8973423",
			"Mo-Fr 0-24 Uhr",
			"0,80 €"
		));
		vendors.add(new VendorInfo(
			"Beagle",
			"Amselweg 12345",
			"85024",
			"Neustadt",
			"0345 8573423",
			"Mo, Do 5-6 Uhr",
			"16,04 €"
		));
		vendors.add(new VendorInfo(
			"Pech & Leer",
			"Weinberggasse 123 A",
			"71543",
			"Bruchtal",
			"0215 897643653323",
			"Di 6-18 Uhr",
			"4,50 €"
		));
		vendors.add(new VendorInfo(
			"Gemüse Fröhlich",
			"Feldweg 42",
			"34123",
			"Feld am See",
			"02343 2340983",
			"Mo-Sa 9-12 Uhr",
			"5,00 €"
		));
		return vendors;
	}
	
}
