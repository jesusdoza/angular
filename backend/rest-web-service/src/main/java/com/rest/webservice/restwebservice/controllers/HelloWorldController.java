package com.rest.webservice.restwebservice.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {


  @GetMapping(path = "/hello-world")
  public String helloWorld(){
    return "hello world";
  }

  //will return a bean instead of string
  @GetMapping(path = "/hello-world-bean")
  public HelloWorldBean helloWorldBean(){
//    throw new RuntimeException("some error has happend");
    return new HelloWorldBean("hello world");
  }

  @GetMapping(path = "/hello-world/path-variable/{name}")
  public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
    var bob = "bob";

    return new HelloWorldBean(String.format("Hello World, %1$s %2$s", name,bob));
  }
}
