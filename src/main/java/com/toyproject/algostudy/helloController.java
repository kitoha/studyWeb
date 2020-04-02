package com.toyproject.algostudy;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class helloController {

    @GetMapping("/test")
    public String test(){
        return "tt";
    }
}
