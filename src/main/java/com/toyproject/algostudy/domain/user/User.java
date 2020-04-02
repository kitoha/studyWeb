package com.toyproject.algostudy.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.toyproject.algostudy.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class User extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @JsonIgnore
    private String password;

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
