package com.rest.webservice.restwebservice.todo;

import com.fasterxml.jackson.datatype.jdk8.OptionalDoubleSerializer;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

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
