package com.example.demo.core.domain.model;


import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "products")
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;

    @Column
    private String name;

    @Column(scale = 2)
    private Float price;

    @Column
    private String brand;

    @Column(scale = 2)
    private Float size;

    @Column
    private Integer hdmi;

    @Column
    private Integer dp;

    @Column
    private Integer vga;

    @Column
    private Integer dvi;

    @Column
    private Integer usb;

    @Column
    private Integer aux;

    @Column
    private String link;

    @Column
    private String seller;

    //constructor

    public Product(){}

    public Product(String name, Float price, String brand, Float size, Integer hdmi, Integer dp, Integer vga, Integer dvi, Integer usb, Integer aux, String link, String seller) {
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.size = size;
        this.hdmi = hdmi;
        this.dp = dp;
        this.vga = vga;
        this.dvi = dvi;
        this.usb = usb;
        this.aux = aux;
        this.link = link;
        this.seller = seller;
    }


    //getter and setter

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Float getSize() {
        return size;
    }

    public void setSize(Float size) {
        this.size = size;
    }

    public Integer getHdmi() {
        return hdmi;
    }

    public void setHdmi(Integer hdmi) {
        this.hdmi = hdmi;
    }

    public Integer getDp() {
        return dp;
    }

    public void setDp(Integer dp) {
        this.dp = dp;
    }

    public Integer getVga() {
        return vga;
    }

    public void setVga(Integer vga) {
        this.vga = vga;
    }

    public Integer getDvi() {
        return dvi;
    }

    public void setDvi(Integer dvi) {
        this.dvi = dvi;
    }

    public Integer getUsb() {
        return usb;
    }

    public void setUsb(Integer usb) {
        this.usb = usb;
    }

    public Integer getAux() {
        return aux;
    }

    public void setAux(Integer aux) {
        this.aux = aux;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getSeller() {
        return seller;
    }

    public void setSeller(String seller) {
        this.seller = seller;
    }
}
