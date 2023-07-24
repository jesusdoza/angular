package com.rest.webservice.restwebservice.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

//CONTROLLER that controls the service of TODOFILES

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoJpaResource {

  @Autowired
  private todoHardCodedService todoService;

  @Autowired
  private TodoJpaRepository todoJpaRepository;

  @GetMapping(path = "/jpa/users/{username}/todos")
  public List<Todo> getAllTodos(@PathVariable String username){
    return todoJpaRepository.findByUsername(username);
//    return todoService.findAll();

  }

  @GetMapping(path = "/jpa/users/{username}/todos/{id}")
  public Todo getTodo(@PathVariable String username, @PathVariable long id){
    return todoJpaRepository.findById(id).get();
//    return todoService.findById(id).orElse(new Todo());

  }

  @DeleteMapping(path = "/jpa/users/{username}/todos/{id}")
  public ResponseEntity<String> deleteTodo(@PathVariable long id, @PathVariable String username){

   todoJpaRepository.deleteById(id);
   return ResponseEntity.noContent().build();

   /*
    Todo deletedTodo = todoService.deleteById(id);
    //id of return item is same successfull delete
    if(deletedTodo.getId() == id){
      return ResponseEntity.noContent().build();
    }
    return  ResponseEntity.notFound().build();
//    return new ResponseEntity<String>("No Item found", HttpStatus.NOT_FOUND);
  * */
  }


  // post mapping for post
  @PostMapping(path = "/jpa/users/{username}/todos")
  public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo){
    todo.setUsername(username); //set username on the item to save to database
//    System.out.println(todo);
    Todo createdTodo = todoJpaRepository.save(todo);


   /* old working
    Todo createdTodo = todoService.saveTodo(todo).get();
    */
    //build a uri with ServletUriComponentsBuilder
    /*
    .fromCurrentRequest - takes the current request url
    .path - adds the string you pass argument to end or url. In this case its a path parameter of ID
    .buildAndExpand -  will add this to the path parameter we used aka {id} by getting the ID from the createdTodo instanace
    .toUri() - make the url string aka URI
    * */
    URI uri = ServletUriComponentsBuilder
      .fromCurrentRequest()
      .path("/{id}")
      .buildAndExpand(createdTodo.getId()).toUri();

    return ResponseEntity.created(uri).build();
  }



  //update mapping
  /*
  *
  * returns updated todoItem or new base instance
  * */
  @PutMapping(path = "/jpa/users/{username}/todos/{id}")
  public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable Long id, @RequestBody Todo todo)  {

    //optional returned from service
//    Todo updatedTodo =  todoService.saveTodo(todo).orElse(new Todo());


    //
    Todo updatedTodo =  todoJpaRepository.save(todo);

    //respond to request
   return new ResponseEntity<Todo>(todo, HttpStatus.OK);
  }


}
