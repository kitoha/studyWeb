package com.toyproject.algostudy.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.toyproject.algostudy.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "user_group")
public class UserGroup extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="group_title",length = 500,nullable = false)
    private String title;

    @Column(name="group_content",columnDefinition = "TEXT",nullable = false)
    private String content;

    @Column(name="group_reader")
    private String reader;

    @ManyToMany
    @JsonBackReference
    private Set<User> users=new HashSet<>();

    @Builder
    public UserGroup(String title,String content,String reader){
        this.title=title;
        this.content=content;
        this.reader=reader;
    }

    public void update(String title,String content){
        this.title=title;
        this.content=content;
    }


}
