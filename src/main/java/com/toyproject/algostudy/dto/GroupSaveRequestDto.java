package com.toyproject.algostudy.dto;

import com.toyproject.algostudy.domain.UserGroup;
import com.toyproject.algostudy.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@NoArgsConstructor
public class GroupSaveRequestDto {
    private String title;
    private String content;
    private String reader;

    @Builder
    public GroupSaveRequestDto(String title,String content,String reader) {
        this.title = title;
        this.content = content;
        this.reader = reader;
    }

    public UserGroup toEntity(){

        return UserGroup.builder()
                .title(title)
                .content(content)
                .reader(reader)
                .build();
    }
}
