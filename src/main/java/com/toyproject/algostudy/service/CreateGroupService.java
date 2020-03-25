package com.toyproject.algostudy.service;

import com.toyproject.algostudy.dto.GroupSaveRequestDto;
import com.toyproject.algostudy.repository.GroupRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Slf4j
@RequiredArgsConstructor
@Service
public class CreateGroupService {
    private final GroupRepository groupRepository;

    @Transactional
    public Long save(GroupSaveRequestDto requestDto){
        log.info(requestDto.getTitle());
        return groupRepository.save(requestDto.toEntity()).getId();
    }
}



