package com.example.demo;

import com.example.demo.core.domain.model.Product;
import com.example.demo.port.user.controller.ProductController;
import com.example.demo.port.user.exception.ProductNotFoundException;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@AutoConfigureMockMvc
public class ProductControllerTests {

    @Autowired
    private ProductController productController;

    @Test
    public void testCreateandGetProduct() {
        Product product = new Product("Test Product", 100.00f, "Brand 1", 10.0f, 1, 0, 0, 0, 0, 1, "https://example.com/test", "seller1");
        product.setId(1);
        productController.create(product);

        Product testProduct = productController.getProduct(1);

        assertEquals(1, testProduct.getId());
        assertEquals("Test Product", testProduct.getName());
        assertEquals(100.00f, testProduct.getPrice());
        assertEquals("Brand 1", testProduct.getBrand());
        assertEquals(10.0f, testProduct.getSize());
        assertEquals(1, testProduct.getHdmi());
        assertEquals(0, testProduct.getDp());
        assertEquals(0, testProduct.getDvi());
        assertEquals(0, testProduct.getVga());
        assertEquals(0, testProduct.getUsb());
        assertEquals(1, testProduct.getAux());
        assertEquals("https://example.com/test", testProduct.getLink());
        assertEquals("seller1", testProduct.getSeller());
    }

    @Test
    public void testGetProductNotFound() {
        assertThrows(ProductNotFoundException.class, () -> productController.getProduct(999));
    }

    @Test
    public void testUpdateProduct() {
        Product product = new Product("Product", 100.00f, "Brand 1", 10.0f, 1, 0, 0, 0, 0, 1, "https://example.com/test", "asus");
        product.setId(1);
        Product product2 = new Product("Test Product", 100.00f, "Brand 1", 10.0f, 1, 0, 0, 0, 0, 1, "https://example.com/test", "seller1");
        product.setId(1);
        productController.create(product);

        productController.update(product2, 1);

        Product testProduct = productController.getProduct(1);

        assertEquals(1, testProduct.getId());
        assertEquals("Test Product", testProduct.getName());
        assertEquals(100.00f, testProduct.getPrice());
        assertEquals("Brand 1", testProduct.getBrand());
        assertEquals(10.0f, testProduct.getSize());
        assertEquals(1, testProduct.getHdmi());
        assertEquals(0, testProduct.getDp());
        assertEquals(0, testProduct.getDvi());
        assertEquals(0, testProduct.getVga());
        assertEquals(0, testProduct.getUsb());
        assertEquals(1, testProduct.getAux());
        assertEquals("https://example.com/test", testProduct.getLink());
        assertEquals("seller1", testProduct.getSeller());
    }

    @Test
    public void testDeleteProduct() {
        Product product = new Product("Test Product", 100.00f, "Brand 1", 10.0f, 1, 0, 0, 0, 0, 1, "https://example.com/test", "seller1");
        product.setId(1);

        productController.create(product);

        productController.delete(1);

        assertThrows(ProductNotFoundException.class, () -> productController.getProduct(1));
    }

    @Test
    public void testGetProducts() {
        Product product1 = new Product("Product 1", 100.00f, "Brand A", 5.0f, 1, 0, 0, 0, 0, 1, "https://example.com/product1", "seller1");
        Product product2 = new Product("Product 2", 150.00f, "Brand B", 8.0f, 0, 1, 0, 0, 0, 0, "https://example.com/product2", "seller2");
        product1.setId(1);
        product2.setId(2);

        productController.create(product1);
        productController.create(product2);

        Iterable<Product> products = productController.getProducts();

        boolean product1Found = false;
        boolean product2Found = false;

        for (Product product : products) {
            if (product.getId() == 1) {
                product1Found = true;
            } else if (product.getId() == 2) {
                product2Found = true;
            }
        }

        assertTrue(product1Found);
        assertTrue(product2Found);
    }

}
