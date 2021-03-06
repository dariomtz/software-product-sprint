package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;

import com.google.gson.Gson;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.sps.data.Fact;

@WebServlet("/random-facts")
public class RandomFactServlet extends HttpServlet{

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        ArrayList<Fact> facts = new ArrayList<>(6);
        facts.add(
            new Fact("I am currently learning german.\n Deutsch macht spass!",
            "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"));
        facts.add(
            new Fact("I love reading and watching fiction stories.\n My favorite fictional character is Peter Parker!",
            "https://cdn.hipwallpaper.com/i/25/55/y3hkM4.jpg"));
        facts.add(
            new Fact("My favorite sport is Formula 1.\n I love the Drive to survive show on Netflix!",
            "https://images.unsplash.com/photo-1541821066-9dfae67b8360?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"));
        facts.add(
            new Fact("I am a competitive programmer!\n My favorite competition is Google Kickstart.",
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"));
        facts.add(
            new Fact("My favorite music artist is Logic.\n My favorite band is Muse.",
            "https://wallpaperboat.com/wp-content/uploads/2019/06/logic-3.jpg"));
        facts.add(
            new Fact("I love mexican food!\n Highly recommend visiting Mexico just to eat :P",
            "https://images.unsplash.com/photo-1579888944880-d98341245702?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"));

        String json = convertToJson(facts);

        response.setContentType("application/json");
        response.getWriter().println(json);
    }

    private <T> String convertToJson(ArrayList<T> list) {
        Gson gson = new Gson();
        String json = gson.toJson(list);
        return json;
    }
}