package com.example.demo.port.user.consumer;

import com.example.demo.core.domain.model.Product;
import com.example.demo.core.domain.service.interfaces.IProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.SerializationUtils;

@Service
public class ProductConsumer {

    private static final Logger LOGGER = LoggerFactory.getLogger(ProductConsumer.class);

    @Autowired
    private IProductService productService;

    @RabbitListener(queues = {"product"})
    public byte[] consume(String message){
        Iterable<Product> productList = productService.getAllProducts();
        byte[] data = SerializationUtils.serialize(productList);
        return data;
    }

    @RabbitListener(queues = {"create_product"})
    public void consumeCreate(byte[] data){
        Product product = (Product) SerializationUtils.deserialize(data);
        productService.createProduct(product);
    }

    @RabbitListener(queues = {"read_product"})
    public byte[] consumeRead(int id){
        Product product = productService.getProduct(id);
        byte[] data = SerializationUtils.serialize(product);
        return data;
    }

    @RabbitListener(queues = {"update_product"})
    public Boolean consumeUpdate(byte[] data){
        Product product = (Product) SerializationUtils.deserialize(data);
        Boolean productFound = productService.updateProduct(product, product.getId());
        return productFound;
    }

    @RabbitListener(queues = {"delete_product"})
    public void consumeDelete(int id){
        productService.deleteProduct(id);
    }
}