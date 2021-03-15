package com.google.sps.storage;

import com.google.cloud.datastore.Entity;
import com.google.sps.data.ContactMeMessage;

public class DatastoreContactMe extends DatastoreHelper<ContactMeMessage> {

    public DatastoreContactMe() {
        super("Message");
    }

    @Override
    public ContactMeMessage convertEntity(Entity entity) {
        long id = entity.getKey().getId();
        long timestamp = entity.getLong("timestamp");
        String email = entity.getString("email");
        String message = entity.getString("message");

        return new ContactMeMessage(id, timestamp, email, message);
    }
    
}