package com.toyproject.algostudy.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class UserGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 500,nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT",nullable = false)
    private String content;

    private String roomId;

    private String author;

    @Builder
    public UserGroup(String title,String content,String author, String roomId){
        this.title=title;
        this.content=content;
        this.author=author;
        this.roomId=roomId;
    }

    public void update(String title,String content){
        this.title=title;
        this.content=content;
    }
}
