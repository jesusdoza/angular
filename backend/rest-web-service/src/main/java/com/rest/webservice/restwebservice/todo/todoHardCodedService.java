package com.rest.webservice.restwebservice.todo;

import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.*;

@Service
public class todoHardCodedService {


  private static List<Todo> todos = new ArrayList();
  private static int idCounter=0;

  static {
    todos.add(new Todo(++idCounter, "bob","make todo",new Date(),false ));
    todos.add(new Todo(++idCounter, "bob","microservices",new Date(),false ));
    todos.add(new Todo(++idCounter, "bob","angular",new Date(),false ));
  }
public List<Todo> findAll(){


    return todos;
}

  public Optional<Todo> saveTodo(Todo todo){

    if(todo.getId() == -1){
      todo.setId(++idCounter);
      todos.add(todo);

    }else{
      //delete the original and add new version
      deleteById(todo.getId());
      todo.setId(++idCounter);
      todos.add(todo);

    }
    return Optional.ofNullable(todo);
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
    //didnt find the todoObj so returning optinal that is empty
    return Optional.empty();
  }
}
