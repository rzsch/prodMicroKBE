package com.example.demo.core.domain.service.impl;

import com.example.demo.core.domain.model.Product;
import com.example.demo.core.domain.service.interfaces.IProductRepository;
import com.example.demo.core.domain.service.interfaces.IProductService;
import com.example.demo.port.user.exception.ProductNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {

    private final IProductRepository productRepository;

    public ProductService(IProductRepository productRepository){

        this.productRepository = productRepository;
    }

    public void createProduct (Product product) {

        productRepository.save(product);
    }

    @Override
    public boolean updateProduct(Product product, int id) {

        Product productToUpdate = this.getProduct(id);

        if (productToUpdate == null) {
            return false;
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
        return true;
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

    @Override
    public boolean editProduct(Product product, int id, String name, Float price, String brand, Float size, Integer hdmi, Integer dp, Integer vga, Integer dvi, Integer usb, Integer aux, String link, String seller) {
        if (product == null) {
            return false;
        }
        product.setId(id);
        product.setName(name);
        product.setPrice(price);
        product.setBrand(brand);
        product.setSize(size);
        product.setHdmi(hdmi);
        product.setDp(dp);
        product.setVga(vga);
        product.setDvi(dvi);
        product.setUsb(usb);
        product.setAux(aux);
        product.setLink(link);
        product.setSeller(seller);
        productRepository.save(product);

        return true;        
    }


}
