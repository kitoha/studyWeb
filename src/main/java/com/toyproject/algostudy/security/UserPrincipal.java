package com.toyproject.algostudy.security;

import com.toyproject.algostudy.domain.user.User;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Getter
public class UserPrincipal implements UserDetails {
    private Long id;
    private String name;
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;

    public UserPrincipal(Long id, String name, String email,String password,Collection<? extends GrantedAuthority> authorities){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
        this.authorities=authorities;
    }

    public static UserPrincipal create(User user){
        List<GrantedAuthority> authorities= Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));

        return new UserPrincipal(user.getId(),user.getName(),user.getEmail(),user.getPassword(),authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return name;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
