package com.rest.webservice.restwebservice.todo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.Date;
import java.util.Objects;

@Entity
public class Todo {
  @Id
  private Long id =(long) -1;
  private String username="";
  private String description="";
  private Date targetDate = new Date();
  private boolean isDone=false;

  protected Todo(){}
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

  @Override
  public String toString() {
    return "Todo{" +
      "id=" + id +
      ", username='" + username + '\'' +
      ", description='" + description + '\'' +
      ", targetDate=" + targetDate +
      ", isDone=" + isDone +
      '}';
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
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
