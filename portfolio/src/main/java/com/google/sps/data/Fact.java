package com.google.sps.data;

public class Fact {
    private final String text;
    private final String image;

    public Fact(String text, String image){
        this.text = text;
        this.image = image;
    }

    public String getText(){
        return text;
    }

    public String getImage(){
        return image;
    }

}