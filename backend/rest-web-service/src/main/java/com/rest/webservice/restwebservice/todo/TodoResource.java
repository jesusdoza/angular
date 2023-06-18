package com.rest.webservice.restwebservice.todo;

import com.sun.tools.jconsole.JConsoleContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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

  @DeleteMapping(path = "users/{username}/todos/{id}")
  public ResponseEntity<String> deleteTodo(@PathVariable long id, @PathVariable String username){
    Todo deletedTodo = todoService.deleteById(id);

    //id of return item is same successfull delete
    if(deletedTodo.getId() == id){
      return ResponseEntity.noContent().build();
    }
    return  ResponseEntity.notFound().build();
//    return new ResponseEntity<String>("No Item found", HttpStatus.NOT_FOUND);

  }


}
