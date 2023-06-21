package com.rest.webservice.restwebservice.todo;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.*;

//CONTROLLER that controls the service of TODOFILES

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoResource {

  @Autowired
  private todoHardCodedService todoService;

  @GetMapping(path = "/users/{username}/todos")
  public List<Todo> getAllTodos(@PathVariable String username){
    return todoService.findAll();

  }

  @GetMapping(path = "/users/{username}/todos/{id}")
  public Todo getTodo(@PathVariable String username, @PathVariable long id){
    return todoService.findById(id).orElse(new Todo(0,"no username","no desc", new Date(),false));

  }

  @DeleteMapping(path = "/users/{username}/todos/{id}")
  public ResponseEntity<String> deleteTodo(@PathVariable long id, @PathVariable String username){
    Todo deletedTodo = todoService.deleteById(id);

    //id of return item is same successfull delete
    if(deletedTodo.getId() == id){
      return ResponseEntity.noContent().build();
    }
    return  ResponseEntity.notFound().build();
//    return new ResponseEntity<String>("No Item found", HttpStatus.NOT_FOUND);

  }


  //todo post mapping for post
  @PostMapping(path = "/users/{username}/todos")
  public ResponseEntity<Void> saveTodo(@PathVariable String username, @RequestBody Todo todo){

    Todo createdTodo = todoService.saveTodo(todo).get();

    URI uri = ServletUriComponentsBuilder
      .fromCurrentRequest()
      .path("/{id}")
      .buildAndExpand(createdTodo.getId()).toUri();

    return ResponseEntity.created(uri).build();
  }

  @PutMapping(path = "/users/{username}/todos/{id}")
  public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable Long id, @RequestBody Todo todo){
   Todo updatedTodo =  todoService.saveTodo(todo).get();

   return new ResponseEntity<Todo>(todo, HttpStatus.OK);
  }


}
