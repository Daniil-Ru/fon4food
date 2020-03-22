package de.fon4food.backend;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VendorController {

	@GetMapping("/vendors")
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
		return vendors;
	}
	
}
