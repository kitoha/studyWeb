package com.toyproject.algostudy.service;

import com.toyproject.algostudy.domain.UserGroup;
import com.toyproject.algostudy.repository.GroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GroupListService {

    private final GroupRepository groupRepository;
    public List<UserGroup> getAllGroupList(){
        return groupRepository.findAll();
    }
}
