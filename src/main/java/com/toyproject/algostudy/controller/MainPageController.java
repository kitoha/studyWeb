package com.toyproject.algostudy.controller;

import com.toyproject.algostudy.dto.GroupSaveRequestDto;
import com.toyproject.algostudy.service.CreateGroupService;
import com.toyproject.algostudy.service.SolvedProblemCheckService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v2")
public class MainPageController {
    @Autowired
    SolvedProblemCheckService solvedProblemCheckService;

    private final CreateGroupService createGroupService;

    @PostMapping("/posts")
    public Long save(@RequestBody GroupSaveRequestDto requestDto){
        return createGroupService.save(requestDto);
    }

    @GetMapping("/problemCheck")
    public String problemCheck(){
        return solvedProblemCheckService.getProblemCheck();
    }
}
