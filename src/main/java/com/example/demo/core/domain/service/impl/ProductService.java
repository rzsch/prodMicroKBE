package com.example.demo.core.domain.service.impl;

import com.example.demo.core.domain.model.Product;
import com.example.demo.core.domain.service.interfaces.IProductRepository;
import com.example.demo.core.domain.service.interfaces.IProductService;
import com.example.demo.port.user.exception.ProductNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {

    private final IProductRepository productRepository;

    ProductService(IProductRepository productRepository){

        this.productRepository = productRepository;
    }

    public void createProduct (Product product) {

        productRepository.save(product);
    }

    @Override
    public void updateProduct(Product product, int id) {

        Product productToUpdate = this.getProduct(id);

        if (productToUpdate == null) {
            throw new ProductNotFoundException(id);
        }

        productToUpdate.setName(product.getName());
        productToUpdate.setPrice(product.getPrice());
        productToUpdate.setBrand(product.getBrand());
        productToUpdate.setSize(product.getSize());
        productToUpdate.setHdmi(product.getHdmi());
        productToUpdate.setDp(product.getDp());
        productToUpdate.setVga(product.getVga());
        productToUpdate.setDvi(product.getDvi());
        productToUpdate.setUsb(product.getUsb());
        productToUpdate.setAux(product.getAux());
        productToUpdate.setLink(product.getLink());
        productToUpdate.setSeller(product.getSeller());

        productRepository.save(productToUpdate);
    }

    @Override
    public void deleteProduct(int id) {

        productRepository.deleteById(id);
    }

    @Override
    public Product getProduct(int id) {

        return productRepository.findById(id).orElse(null);
    }

    @Override
    public Iterable<Product> getAllProducts() {

        return productRepository.findAll();
    }


}
