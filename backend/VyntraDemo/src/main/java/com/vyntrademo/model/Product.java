package com.vyntrademo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long product_id;
	@NotNull
	private String product_name;
	@NotNull
	private String product_detail;
	@NotNull
	private String type_of_user; //male or female or children
	@NotNull
	private Double product_price;
	@NotNull
	private Integer product_available;// no of available products
	
	@NotNull
	@Column(name="picByte",length=1000)
	private byte[] picByte;

	public Long getProduct_id() {
		return product_id;
	}

	public void setProduct_id(Long product_id) {
		this.product_id = product_id;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public String getProduct_detail() {
		return product_detail;
	}

	public void setProduct_detail(String product_detail) {
		this.product_detail = product_detail;
	}

	public String getType_of_user() {
		return type_of_user;
	}

	public void setType_of_user(String type_of_user) {
		this.type_of_user = type_of_user;
	}

	public Double getProduct_price() {
		return product_price;
	}

	public void setProduct_price(Double product_price) {
		this.product_price = product_price;
	}

	public Integer getProduct_available() {
		return product_available;
	}

	public void setProduct_available(Integer product_available) {
		this.product_available = product_available;
	}

	public byte[] getPicByte() {
		return picByte;
	}

	public void setPicByte(byte[] picByte) {
		this.picByte = picByte;
	}
	

}
