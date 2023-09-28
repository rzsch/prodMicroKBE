package com.example.demo.port.user.producer;

import com.example.demo.core.domain.model.Product;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.SerializationUtils;

@Service
public class ProductProducer {

    @Value("product_exchange")
    private String exchange;

    @Value("product_routing_key")
    private String routingKey;

    @Value("create_routing_key")
    private String createRoutingKey;

    @Value("read_routing_key")
    private String readRoutingKey;

    @Value("update_routing_key")
    private String updateRoutingKey;

    @Value("delete_routing_key")
    private String deleteRoutingKey;

    private static final Logger LOGGER = LoggerFactory.getLogger(ProductProducer.class);

    private final RabbitTemplate rabbitTemplate;

    public ProductProducer(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void sendMessage(String message){
        LOGGER.info(String.format("Message sent -> %s", message));
        rabbitTemplate.convertAndSend(exchange, routingKey, message);
    }

    public Iterable<Product> requestAll(){
        byte[] data = (byte[]) rabbitTemplate.convertSendAndReceive(exchange, routingKey, "getAll");
        Iterable<Product> productList = (Iterable<Product>) SerializationUtils.deserialize(data);
        return productList;
    }

    public void createProduct(Product product){
        byte[] data = SerializationUtils.serialize(product);
        rabbitTemplate.convertAndSend(exchange, createRoutingKey, data);
    }

    public Product readProduct(int id){
        byte[] data = (byte[]) rabbitTemplate.convertSendAndReceive(exchange, readRoutingKey, id);
        Product product = (Product) SerializationUtils.deserialize(data);
        return product;
    }

    public boolean updateProduct(Product product){
        byte[] data = SerializationUtils.serialize(product);
        Boolean productFound = (Boolean) rabbitTemplate.convertSendAndReceive(exchange, updateRoutingKey, data);
        if (productFound == null) {
            productFound = false;
        }
        return productFound;
    }

    public void deleteProduct(int id){
        rabbitTemplate.convertAndSend(exchange, deleteRoutingKey, id);
    }


}