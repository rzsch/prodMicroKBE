package com.example.demo.core.domain.service.interfaces;

import com.example.demo.core.domain.model.Product;

public interface IProductService
{
    void createProduct (Product product);

    boolean updateProduct (Product product, int id);

    void deleteProduct (int id);

    Product getProduct(int id);

    Iterable<Product> getAllProducts();
}
