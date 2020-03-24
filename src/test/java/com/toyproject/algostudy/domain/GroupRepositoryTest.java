package com.toyproject.algostudy.domain;

import com.toyproject.algostudy.repository.GroupRepository;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class GroupRepositoryTest {
    @Autowired
    GroupRepository groupRepository;

    @After
    public void cleanUp(){
        groupRepository.deleteAll();
    }

    @Test
    public void GroupTest(){
        String title="테스트 게시글";
        String content="테스트 본문";

        groupRepository.save(UserGroup.builder()
        .title(title)
        .content(content)
        .author("테스트")
        .build());

        List<UserGroup> userGroupList= groupRepository.findAll();

        UserGroup userGroup=userGroupList.get(0);
        assertThat(userGroup.getTitle()).isEqualTo(title);
        assertThat(userGroup.getContent()).isEqualTo(content);
    }

}
