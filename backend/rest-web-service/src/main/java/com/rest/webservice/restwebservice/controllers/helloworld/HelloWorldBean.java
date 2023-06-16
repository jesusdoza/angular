package com.rest.webservice.restwebservice.controllers.helloworld;

public class HelloWorldBean {

  public String something="stafdsa";
  private String message;

  public HelloWorldBean(String message) {
    this.message = message;
  }

  public String getSomething() {
    return something;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  @Override
  public String toString() {
    return "HelloWorldBean{" +
      "message='" + message + '\'' +
      '}';
  }


}
