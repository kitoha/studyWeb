package com.toyproject.algostudy.controller;

import com.toyproject.algostudy.domain.UserGroup;
import com.toyproject.algostudy.dto.GroupSaveRequestDto;
import com.toyproject.algostudy.repository.GroupRepository;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class GroupPostsApiControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private GroupRepository groupRepository;

    @After
    public void tearDown() throws Exception{
        groupRepository.deleteAll();
    }

    @Test
    public void CreatePosts() throws Exception{
        String title="title";
        String content="content";

        GroupSaveRequestDto requestDto= GroupSaveRequestDto.builder()
                .title(title)
                .content(content)
                .author("author")
                .roomId(123L)
                .build();

        String url="http://localhost:"+port+"/api/v2/posts";

        ResponseEntity<Long> responseEntity= restTemplate
                .postForEntity(url,requestDto,Long.class);

        assertThat(responseEntity.getStatusCode())
                .isEqualTo(HttpStatus.OK);

        assertThat(responseEntity.getBody())
                .isGreaterThan(0L);
        List<UserGroup> all= groupRepository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(title);
        assertThat(all.get(0).getContent())
                .isEqualTo(content);
    }

}
