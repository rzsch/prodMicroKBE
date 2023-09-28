package com.example.demo.port.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    @Value("product")
    private String queue;

    @Value("create_product")
    private String createQueue;

    @Value("read_product")
    private String readQueue;

    @Value("update_product")
    private String updateQueue;

    @Value("delete_product")
    private String deleteQueue;

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

    @Bean
    public Queue queue(){
        return new Queue(queue);
    }

    @Bean
    public Queue createQueue(){
        return new Queue(createQueue);
    }

    @Bean
    public Queue readQueue(){
        return new Queue(readQueue);
    }

    @Bean
    public Queue updateQueue(){
        return new Queue(updateQueue);
    }

    @Bean
    public Queue deleteQueue(){
        return new Queue(deleteQueue);
    }

    @Bean
    public TopicExchange exchange(){
        return new TopicExchange(exchange);
    }

    @Bean
    public Binding binding(){
        return BindingBuilder
                .bind(queue())
                .to(exchange())
                .with(routingKey);
    }

    @Bean
    public Binding createBinding(){
        return BindingBuilder
                .bind(createQueue())
                .to(exchange())
                .with(createRoutingKey);
    }

    @Bean
    public Binding readBinding(){
        return BindingBuilder
                .bind(readQueue())
                .to(exchange())
                .with(readRoutingKey);
    }

    @Bean
    public Binding updateBinding(){
        return BindingBuilder
                .bind(updateQueue())
                .to(exchange())
                .with(updateRoutingKey);
    }

    @Bean
    public Binding deleteBinding(){
        return BindingBuilder
                .bind(deleteQueue())
                .to(exchange())
                .with(deleteRoutingKey);
    }

}