package com.google.sps.data;

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