package com.example.demo.port.user.controller;

import com.example.demo.core.domain.model.Product;
import com.example.demo.core.domain.service.interfaces.IProductService;
import com.example.demo.port.user.exception.ProductNotFoundException;

import com.example.demo.port.user.producer.ProductProducer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
public class ProductController {

    @Autowired
    private ProductProducer producer;

    @PostMapping(path = "/product")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody void create(@RequestBody Product product) {

        producer.createProduct(product);
    }

    @GetMapping("/product/{id}")
    public Product getProduct(@PathVariable int id) {

        Product product = producer.readProduct(id);

        if (product == null) {
            throw new ProductNotFoundException(id);
        }

        return product;
    }

    @PutMapping(path = "/product/{id}")
    public @ResponseBody void update(@RequestBody Product product, @PathVariable int id) {

        product.setId(id);
        boolean productFound = producer.updateProduct(product);
        if (!productFound) {
            throw new ProductNotFoundException(id);
        }

    }

    @DeleteMapping(path = "/product/{id}")
    public @ResponseBody void delete(@PathVariable int id) {

        producer.deleteProduct(id);
    }

    @GetMapping("/products")
    public @ResponseBody Iterable<Product> getProducts() {

        return producer.requestAll();
    }

}
