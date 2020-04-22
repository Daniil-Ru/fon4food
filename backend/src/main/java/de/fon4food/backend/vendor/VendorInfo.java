package de.fon4food.backend.vendor;

public class VendorInfo {

	String name;
	String address;
	String zipCode;
	String city;
	String phone;
	String orderTimes;
	String deliveryFlatRate;
	public VendorInfo(String name, String address, String zipCode, String city, String phone, String orderTimes,
			String deliveryFlatRate) {
		super();
		this.name = name;
		this.address = address;
		this.zipCode = zipCode;
		this.city = city;
		this.phone = phone;
		this.orderTimes = orderTimes;
		this.deliveryFlatRate = deliveryFlatRate;
	}
	public String getName() {
		return name;
	}
	public String getAddress() {
		return address;
	}
	public String getZipCode() {
		return zipCode;
	}
	public String getCity() {
		return city;
	}
	public String getPhone() {
		return phone;
	}
	public String getOrderTimes() {
		return orderTimes;
	}
	public String getDeliveryFlatRate() {
		return deliveryFlatRate;
	}

	
}
