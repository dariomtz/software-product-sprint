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
        "I am currently learning german!. Deusch macht spaß.",
        "I love fiction, superheroes, harry potter, starwars, etc.",
        "My favorite sport is Formula 1.",
        "I am a competitive programmer!.",
        "My favorite artist is Logic and my favorite band is Muse."
    };

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        response.setContentType("text/html;");
        response.getWriter().println("<h1>" + facts[random.nextInt(facts.length)] + "</h1>");
    }
}