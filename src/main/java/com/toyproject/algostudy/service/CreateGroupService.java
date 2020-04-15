package com.toyproject.algostudy.service;

import com.toyproject.algostudy.domain.UserGroup;
import com.toyproject.algostudy.domain.user.User;
import com.toyproject.algostudy.dto.GroupSaveRequestDto;
import com.toyproject.algostudy.repository.GroupRepository;
import com.toyproject.algostudy.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class CreateGroupService {

    private final UserRepository userRepository;

    @Transactional
    public Long save(GroupSaveRequestDto requestDto){
        Optional<User> user=userRepository.findByEmail(requestDto.getReader());

        UserGroup userGroup=requestDto.toEntity();
        user.get().getGroups().add(userGroup);
        userGroup.getUsers().add(user.get());

        log.info(requestDto.getTitle());

        return userRepository.save(user.get()).getId();
    }
}



