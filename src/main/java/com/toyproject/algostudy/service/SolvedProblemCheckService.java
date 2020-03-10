package com.toyproject.algostudy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SolvedProblemCheckService {
    @Autowired
    RestTemplate restTemplate;

    public String getProblemCheck(){
        return restTemplate.getForObject("https://codeforces.com/api/problemset.recentStatus?count=10",String.class);
    }
}
