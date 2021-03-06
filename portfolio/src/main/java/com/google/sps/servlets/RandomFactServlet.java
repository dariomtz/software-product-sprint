package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;

import com.google.gson.Gson;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/random-fact")
public class RandomFactServlet extends HttpServlet{

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        ArrayList<String> facts = new ArrayList<>(5);
        facts.add("I am currently learning german. Deusch macht spass!");
        facts.add("I love reading and watching fiction stories. My favorite fictional character is Peter Parker!");
        facts.add("My favorite sport is Formula 1.");
        facts.add("I am a competitive programmer! My favorite competition is Google Kickstart.");
        facts.add("My favorite music artist is Logic and my favorite band is Muse.");

        String json = convertToJson(facts);

        response.setContentType("application/json");
        response.getWriter().println(json);
    }

    private String convertToJson(ArrayList<String> list) {
        Gson gson = new Gson();
        String json = gson.toJson(list);
        return json;
    }
}