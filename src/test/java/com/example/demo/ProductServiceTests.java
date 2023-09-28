package com.example.demo;

import com.example.demo.core.domain.model.Product;
import com.example.demo.core.domain.service.impl.ProductService;
import com.example.demo.core.domain.service.interfaces.IProductRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.*;

import java.util.stream.StreamSupport;

public class ProductServiceTests {

    private ProductService productService;
    private IProductRepository productRepository;

    @BeforeEach
    public void setUp() {
        productRepository = Mockito.mock(IProductRepository.class);
        productService = new ProductService(productRepository);
    }

    @Test
    public void testCreateAndGetProduct() {
        // Create a product
        Product product1 = new Product("ASUS ExpertCenter C2223HE", (float) 270.00, "Asus", (float) 21.45, 1, 0, 0, 0, 0, 1, "https://www.asus.com/displays-desktops/monitors/business/asus-expertcenter-c2223he/", "asus");

        // Set a fake id for testing purposes (you would normally get this from the database)
        product1.setId(1);  // Replace 1 with the desired id for your test
        // Stub the behavior of the productRepository
        Mockito.when(productRepository.save(product1)).thenReturn(product1);
        Mockito.when(productRepository.findById(product1.getId())).thenReturn(java.util.Optional.of(product1));
    
        // Create the product
        productService.createProduct(product1);
    
        // Get the product
        Product retrievedProduct = productService.getProduct(product1.getId());
    
        // Test if the retrieved product is the same as the created product
        assertEquals(product1, retrievedProduct);
    }
    
    @Test
    public void testGetAllProducts() {
        // Create two products
        Product product1 = new Product("ASUS ExpertCenter C2223HE", (float) 270.00, "Asus", (float) 21.45, 1, 0, 0, 0, 0, 1, "https://www.asus.com/displays-desktops/monitors/business/asus-expertcenter-c2223he/", "asus");
        Product product2 = new Product("Designo MX279HS", (float) 240.00, "Asus", (float) 27.00, 2, 0, 1, 0, 0, 1, "https://www.asus.com/displays-desktops/monitors/designo/designo-mx279hs/", "asus");

        // Set fake ids for testing purposes
        product1.setId(1);
        product2.setId(2);
    
        // Stub the behavior of the productRepository
        Mockito.when(productRepository.save(product1)).thenReturn(product1);
        Mockito.when(productRepository.save(product2)).thenReturn(product2);
    
        // Create the products
        productService.createProduct(product1);
        productService.createProduct(product2);
    
        // Stub the behavior of the productRepository to return both products
        Mockito.when(productRepository.findAll()).thenReturn(java.util.Arrays.asList(product1, product2));
    
        // Get all products
        Iterable<Product> allProducts = productService.getAllProducts();
    
        // Test if both created products are present in the list of all products
        assertTrue(StreamSupport.stream(allProducts.spliterator(), false)
                .anyMatch(p -> p.equals(product1)));
        assertTrue(StreamSupport.stream(allProducts.spliterator(), false)
                .anyMatch(p -> p.equals(product2)));
    }

    @Test
    public void testUpdateProduct() {
        // Create a product
        Product product1 = new Product("ASUS ExpertCenter C2223HE", (float) 270.00, "Asus", (float) 21.45, 1, 0, 0, 0, 0, 1, "https://www.asus.com/displays-desktops/monitors/business/asus-expertcenter-c2223he/", "asus");

        // Set a fake id for testing purposes (you would normally get this from the database)
        product1.setId(1);

        // Stub the behavior of the productRepository to return the original product
        Mockito.when(productRepository.save(product1)).thenReturn(product1);
        Mockito.when(productRepository.findById(product1.getId())).thenReturn(java.util.Optional.of(product1));
    
        // Create the product
        productService.createProduct(product1);
        
        // Create a new product with updated data
        Product updatedProduct = new Product("Updated Product", (float) 200.00, "Brand 2", (float) 20.0, 2, 1, 1, 1, 1, 2, "https://example.com/updated", "seller2");
        
        // Set the same id as the original product for testing purposes
        updatedProduct.setId(product1.getId());

        // Stub the behavior of the productRepository to return the updated product after saving
        Mockito.when(productRepository.save(updatedProduct)).thenReturn(updatedProduct);

        // Update the product
        boolean result = productService.updateProduct(updatedProduct, updatedProduct.getId());

        // Get the updated product
        Product retrievedProduct = productService.getProduct(updatedProduct.getId());

        // Test if the product was successfully updated and if it matches the updated data
        assertTrue(result);
        assertEquals("Updated Product", retrievedProduct.getName());
        assertEquals((float) 200.00, retrievedProduct.getPrice());
        assertEquals("Brand 2", retrievedProduct.getBrand());
        assertEquals((float) 20.0, retrievedProduct.getSize());
        assertEquals(2, retrievedProduct.getHdmi());
        assertEquals(1, retrievedProduct.getDp());
        assertEquals(1, retrievedProduct.getVga());
        assertEquals(1, retrievedProduct.getDvi());
        assertEquals(1, retrievedProduct.getUsb());
        assertEquals(2, retrievedProduct.getAux());
        assertEquals("https://example.com/updated", retrievedProduct.getLink());
        assertEquals("seller2", retrievedProduct.getSeller());
    }

    @Test
    public void testEditProduct() {
        // Create a product
        Product product1 = new Product("ASUS ExpertCenter C2223HE", (float) 270.00, "Asus", (float) 21.45, 1, 0, 0, 0, 0, 1, "https://www.asus.com/displays-desktops/monitors/business/asus-expertcenter-c2223he/", "asus");

        // Set a fake id for testing purposes (you would normally get this from the database)
        product1.setId(1);  // Replace 1 with the desired id for your test
        // Stub the behavior of the productRepository
        Mockito.when(productRepository.save(product1)).thenReturn(product1);
        Mockito.when(productRepository.findById(product1.getId())).thenReturn(java.util.Optional.of(product1));
    
        // Create the product
        productService.createProduct(product1);

        Product product2 = new Product("Designo MX279HS", (float) 240.00, "Asus", (float) 27.00, 2, 0, 1, 0, 0, 1, "https://www.asus.com/displays-desktops/monitors/designo/designo-mx279hs/", "asus");
        boolean result = productService.updateProduct(product2, 1);
        Mockito.when(productRepository.save(product1)).thenReturn(product1);
        Mockito.when(productRepository.findById(product1.getId())).thenReturn(java.util.Optional.of(product1));
    
        // Get the product
        Product retrievedProduct = productService.getProduct(product1.getId());
    
        // Test if the retrieved product is the same as the created product
        assertTrue(result);
        assertEquals(1, retrievedProduct.getId());
        assertEquals("Designo MX279HS", retrievedProduct.getName());
        assertEquals((float) 240.00, retrievedProduct.getPrice());
        assertEquals("Asus", retrievedProduct.getBrand());
        assertEquals((float) 27.0, retrievedProduct.getSize());
        assertEquals(2, retrievedProduct.getHdmi());
        assertEquals(0, retrievedProduct.getDp());
        assertEquals(1, retrievedProduct.getVga());
        assertEquals(0, retrievedProduct.getDvi());
        assertEquals(0, retrievedProduct.getUsb());
        assertEquals(1, retrievedProduct.getAux());
        assertEquals("https://www.asus.com/displays-desktops/monitors/designo/designo-mx279hs/", retrievedProduct.getLink());
        assertEquals("asus", retrievedProduct.getSeller());    
    }
    
    @Test
    public void testDeleteProduct() {
        
        // Create a product
        Product product = new Product("ASUS ExpertCenter C2223HE", (float) 270.00, "Asus", (float) 21.45, 1, 0, 0, 0, 0, 1, "https://www.asus.com/displays-desktops/monitors/business/asus-expertcenter-c2223he/", "asus");

        // Set a fake id for testing purposes
        product.setId(1);
        Mockito.when(productRepository.save(product)).thenReturn(product);
        Mockito.when(productRepository.findById(product.getId())).thenReturn(java.util.Optional.of(product));

        // Create the product
        productService.createProduct(product);
        
        // Get the created product (to demonstrate it was created before deletion)
        Product createdProduct = productService.getProduct(product.getId());

        // Verify that the created product matches the original product
        assertEquals(product, createdProduct);


        // Stub the behavior of the productRepository to return null after delete
        Mockito.doNothing().when(productRepository).deleteById(product.getId());
        Mockito.when(productRepository.findById(product.getId())).thenReturn(java.util.Optional.empty());

        // Delete the product
        productService.deleteProduct(product.getId());

        // Attempt to retrieve the deleted product
        Product deletedProduct = productService.getProduct(product.getId());

        // Verify that the deleted product is null, indicating successful deletion
        assertNull(deletedProduct);

        Iterable<Product> allProducts = productService.getAllProducts();

        // Verify that the result is empty or null (indicating no products exist)
        assertFalse(allProducts.iterator().hasNext());
    }
}
    