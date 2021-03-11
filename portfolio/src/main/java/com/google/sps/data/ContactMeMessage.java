package com.google.sps.data;

import java.util.ArrayList;

import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.QueryResults;

public class ContactMeMessage {
    private final long id;
    private final long timestamp;
    private final String email;
    private final String message;

    public ContactMeMessage(long id, long timestamp, String email, String message){
        this.id = id;
        this.timestamp = timestamp;
        this.email = email;
        this.message = message;
    }

    public ContactMeMessage(long timestamp, String email, String message){
        this.timestamp = timestamp;
        this.email = email;
        this.message = message;
        this.id = 0;
    }

    public static ArrayList<ContactMeMessage> createList(QueryResults<Entity> results){
        ArrayList<ContactMeMessage> list = new ArrayList<>();
        
        while(results.hasNext()){
            list.add(entityConverter(results.next()));
        }

        return list;
    }

    public static ContactMeMessage entityConverter(Entity entity){
        long id = entity.getKey().getId();
        long timestamp = entity.getLong("timestamp");
        String email = entity.getString("email");
        String message = entity.getString("message");

        return new ContactMeMessage(id, timestamp, email, message);
    }

    public long getId(){
        return this.id;
    }

    public long getTimestamp(){
        return this.timestamp;
    }

    public String getEmail(){
        return this.email;
    }
    
    public String getMessage(){
        return this.message;
    }

}