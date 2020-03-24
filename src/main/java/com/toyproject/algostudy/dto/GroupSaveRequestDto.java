package com.toyproject.algostudy.dto;

import com.toyproject.algostudy.domain.UserGroup;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Getter
@NoArgsConstructor
public class GroupSaveRequestDto {
    private String title;
    private String content;
    private String author;
    private String roomId;

    @Builder
    public GroupSaveRequestDto(String title,String content,String author,String roomId) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.roomId=roomId;
    }

    public UserGroup toEntity(){
        return UserGroup.builder()
                .title(title)
                .content(content)
                .author(author)
                .roomId(roomId)
                .build();
    }
}
