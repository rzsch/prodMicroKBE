package com.example.demo;
import com.example.demo.core.domain.model.Product;
import com.example.demo.core.domain.service.interfaces.IProductService;
import com.example.demo.port.user.controller.ProductController;
import com.example.demo.port.user.exception.ProductNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

public class ProductControllerTests {

    private ProductController productController;
    private IProductService productService;

    @BeforeEach
    public void setUp() {
        productService = Mockito.mock(IProductService.class);
        productController = new ProductController(productService);
    }

    @Test
    public void testCreateProduct() {
        Product product = new Product("Test Product", 100.00f, "Brand 1", 10.0f, 1, 0, 0, 0, 0, 1, "https://example.com/test", "seller1");
    
        productController.create(product);
            
        Mockito.verify(productService, Mockito.times(1)).createProduct(product);
    }

    @Test
    public void testGetProductById() {
        int productId = 1;
        Product product = new Product("Test Product", 100.00f, "Brand 1", 10.0f, 1, 0, 0, 0, 0, 1, "https://example.com/test", "seller1");
        when(productService.getProduct(productId)).thenReturn(product);

        Product response = productController.getProduct(productId);

        assertEquals(product, response);
    }

    @Test
    public void testGetProductByIdNotFound() {
        int productId = 1;
        when(productService.getProduct(productId)).thenReturn(null);

        assertThrows(ProductNotFoundException.class, () -> productController.getProduct(productId));
    }

    @Test
    public void testUpdateProduct() {
        int productId = 1;
        Product product = new Product("Updated Product", 200.00f, "Brand 2", 20.0f, 2, 1, 1, 1, 1, 2, "https://example.com/updated", "seller2");
    
        productController.update(product, productId);
    
        
        Mockito.verify(productService, Mockito.times(1)).updateProduct(product, productId);
    }

    @Test
    public void testDeleteProduct() {
        int productId = 1;
        productController.delete(productId);
    
        
        Mockito.verify(productService, Mockito.times(1)).deleteProduct(productId);
    }
    @Test
    public void testGetAllProducts() {
        List<Product> productList = new ArrayList<>();
        productList.add(new Product("Product 1", 100.00f, "Brand 1", 10.0f, 1, 0, 0, 0, 0, 1, "https://example.com/product1", "seller1"));
        productList.add(new Product("Product 2", 200.00f, "Brand 2", 20.0f, 2, 1, 1, 1, 1, 2, "https://example.com/product2", "seller2"));

        when(productService.getAllProducts()).thenReturn(productList);

        Iterable<Product> response = productController.getProducts();

        assertNotNull(response);
        List<Product> resultList = new ArrayList<>();
        response.forEach(resultList::add);

        assertEquals(productList.size(), resultList.size());
        assertTrue(resultList.containsAll(productList));
    }
}
