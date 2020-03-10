package com.toyproject.algostudy.controller;

import com.toyproject.algostudy.service.SolvedProblemCheckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v2")
public class MainPageController {
    @Autowired
    SolvedProblemCheckService solvedProblemCheckService;

    @GetMapping("/problemCheck")
    public String problemCheck(){
        return solvedProblemCheckService.getProblemCheck();
    }
}
