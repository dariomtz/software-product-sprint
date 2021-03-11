package com.google.sps.storage;

import java.util.ArrayList;

import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.QueryResults;
import com.google.sps.data.ContactMeMessage;

public class DatastoreContactMe extends DatastoreHelper<ContactMeMessage> {

    public DatastoreContactMe(String kind) {
        super(kind);
    }

    public ContactMeMessage convertEntity(Entity entity) {
        long id = entity.getKey().getId();
        long timestamp = entity.getLong("timestamp");
        String email = entity.getString("email");
        String message = entity.getString("message");

        return new ContactMeMessage(id, timestamp, email, message);
    }
    
    public ArrayList<ContactMeMessage> listFromQuery(QueryResults<Entity> results){
        ArrayList<ContactMeMessage> list = new ArrayList<>();
        
        while(results.hasNext()){
            list.add(convertEntity(results.next()));
        }

        return list;
    }

}