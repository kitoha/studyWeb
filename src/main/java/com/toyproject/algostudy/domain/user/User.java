package com.toyproject.algostudy.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.toyproject.algostudy.domain.BaseTimeEntity;
import com.toyproject.algostudy.domain.UserGroup;
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
@Table(name = "user")
public class User extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="user_name",nullable = false)
    private String name;

    @Column(name="user_email",nullable = false)
    private String email;

    @JsonIgnore
    private String password;

    @JoinTable(
            name="participing_group",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "group_id")
    )
    @JsonManagedReference
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<UserGroup> groups =new HashSet<>();

    @Builder
    public User(String name,String email,String password){
        this.name=name;
        this.email=email;
        this.password=password;
    }

    public User update(String name){
        this.name=name;
        return this;
    }
}
