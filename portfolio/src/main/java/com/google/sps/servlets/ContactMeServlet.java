package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/contact-me")
public class ContactMeServlet extends HttpServlet{

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String email = request.getParameter("email");
        String message = request.getParameter("message");

        String log = "Email: " + email + "\nMessage: " + message;

        System.out.println(log);
        response.sendRedirect("/confirm.html");

    }
}