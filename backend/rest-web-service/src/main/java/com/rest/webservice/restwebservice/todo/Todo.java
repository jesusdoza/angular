package com.rest.webservice.restwebservice.todo;

import java.util.Date;
import java.util.Objects;

public class Todo {
  private long id;
  private String username;
  private String description;
  private Date targetDate;
  private boolean isDone;

  public Todo(long id, String username, String description, Date targetDate , boolean isDone) {
    this.id = id;
    this.username = username;
    this.targetDate = targetDate;
    this.description = description;
    this.isDone = isDone;
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Todo todo = (Todo) o;
    return id == todo.id;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public Date getTargetDate() {
    return targetDate;
  }

  public void setTargetDate(Date targetDate) {
    this.targetDate = targetDate;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public boolean isDone() {
    return isDone;
  }

  public void setDone(boolean done) {
    isDone = done;
  }


}
