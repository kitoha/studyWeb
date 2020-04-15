package com.toyproject.algostudy.controller;

import com.toyproject.algostudy.domain.UserGroup;
import com.toyproject.algostudy.dto.GroupSaveRequestDto;
import com.toyproject.algostudy.service.CreateGroupService;
import com.toyproject.algostudy.service.GroupListService;
import com.toyproject.algostudy.service.SolvedProblemCheckService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class MainPageController {
    @Autowired
    SolvedProblemCheckService solvedProblemCheckService;

    @Autowired
    GroupListService groupListService;

    private final CreateGroupService createGroupService;

    @PostMapping("/posts")
    public Long save(@RequestBody GroupSaveRequestDto requestDto){
        return createGroupService.save(requestDto);
    }

    @GetMapping("/problemCheck")
    public String problemCheck(){
        return solvedProblemCheckService.getProblemCheck();
    }

    @GetMapping("/allGroups")
    public List<UserGroup> getAllUserGroup(){
        return groupListService.getAllGroupList();
    }
}
