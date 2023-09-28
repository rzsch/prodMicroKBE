package com.example.demo.core.domain.service.interfaces;

import com.example.demo.core.domain.model.Product;

public interface IProductService
{
    void createProduct (Product product);

    boolean updateProduct (Product product, int id);

    boolean editProduct (Product product, int id, String name, Float price, String brand, Float size, Integer hdmi, Integer dp, Integer vga, Integer dvi, Integer usb, Integer aux, String link, String seller);

    void deleteProduct (int id);

    Product getProduct(int id);

    Iterable<Product> getAllProducts();
}
