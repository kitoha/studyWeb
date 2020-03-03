package com.toyproject.algostudy;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String root(){
        return "logInSuccess";
    }

    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }
}
