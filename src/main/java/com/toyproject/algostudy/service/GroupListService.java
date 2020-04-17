package com.toyproject.algostudy.service;

import com.toyproject.algostudy.domain.UserGroup;
import com.toyproject.algostudy.repository.GroupRepository;
import com.toyproject.algostudy.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class GroupListService {

    private final UserRepository userRepository;
    private final GroupRepository groupRepository;
    public List<UserGroup> getAllGroupList(){
        return groupRepository.findAll();
    }

    public Set<UserGroup> getParticipatingGroupList(String email){
        return userRepository.findByEmail(email).get().getGroups();
    }
}
