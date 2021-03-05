package com.google.sps.servlets;

import java.io.IOException;
import java.util.Random;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/random-fact")
public class RandomFactServlet extends HttpServlet{
    Random random = new Random();
    String[] facts = {
        "I am currently learning german. Deusch macht spass!",
        "I love reading and watching fiction stories. My favorite fictional character is Peter Parker!",
        "My favorite sport is Formula 1.",
        "I am a competitive programmer! My favorite competition is Google Kickstart.",
        "My favorite music artist is Logic and my favorite band is Muse."
    };

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        response.setContentType("text");
        response.getWriter().println(facts[random.nextInt(facts.length)]);
    }
}