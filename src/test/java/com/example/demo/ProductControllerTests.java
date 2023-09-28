package com.example.demo;

import com.example.demo.core.domain.model.Product;
import com.example.demo.port.user.controller.ProductController;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@AutoConfigureMockMvc
public class ProductControllerTests {

    @Autowired
    private ProductController productController;

    @Test
    public void testCreateProduct() {
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

}
