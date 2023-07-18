package com.rest.webservice.restwebservice.todo;

import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.*;

@Service
public class todoHardCodedService {


  private static List<Todo> todos = new ArrayList();
  private static long idCounter=0;

  static {
    todos.add(new Todo(++idCounter, "bob","make todo",new Date(),false ));
    todos.add(new Todo(++idCounter, "bob","microservices",new Date(),false ));
    todos.add(new Todo(++idCounter, "bob","angular",new Date(),false ));
  }
public List<Todo> findAll(){


    return todos;
}

//save item
 /*
 check id if its -1 or 0 change ID to something else and then save
 else delete old version and resave under same ID
 returns new version that was inserted || empty optional
 */
  public Optional<Todo> saveTodo(Todo todo){
    try{
      //replace id if it is -1 or 0 with new id
      if(todo.getId() == -1 || todo.getId() == 0 ){
        todo.setId(++idCounter);
        todos.add(todo);
      }else{
        //update todoItem
        //delete the original and add new version
        deleteById(todo.getId());
        todos.add(todo);
      }
      return Optional.ofNullable(todo);

    }catch(Exception err){
      System.out.println("error saveTodo");
      return Optional.empty();
    }
  }

  public Todo deleteById(long id){
    //find the item by id and delete it then return deleted item or return default item
    Todo todo = findById(id).orElse(new Todo(0,"bob","no desc", new Date(),false));
    todos.remove(todo);
    return todo;
  }

  public Optional<Todo> findById(long id) {
    for(Todo todo: todos){
      if(todo.getId() == id){
        //returning optional with potentially nullable todoObjct if it came from the database
        return Optional.ofNullable(todo);
      }
    }
    //didnt find the todoObj so returning optional that is empty
    return Optional.empty();
  }
}
