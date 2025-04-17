package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class App {

    @GetMapping("/")
    public String home() {
        return "✅ Hello from Spring Boot!";
    }

    @GetMapping("/welcome")
    public String welcome() {
        return "🎉 Welcome to your new Spring Boot app!";
    }
}
