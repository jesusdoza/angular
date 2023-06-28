package com.rest.webservice.restwebservice.basic.auth;

public class AuthenticationBean {

  public String something="stafdsa";
  private String message;

  public AuthenticationBean(String message) {
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
