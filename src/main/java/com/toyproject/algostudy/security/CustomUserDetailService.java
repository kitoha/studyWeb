package com.toyproject.algostudy.security;

import com.toyproject.algostudy.domain.user.User;
import com.toyproject.algostudy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import javax.transaction.Transactional;

@Service
public class CustomUserDetailService implements UserDetailsService {
   @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user=userRepository.findByEmail(email)
                .orElseThrow(()->new UsernameNotFoundException("User not found with email : " + email));
        return UserPrincipal.create(user);
    }

    @Transactional
    public UserDetails loadUserById(Long id){
        User user= userRepository.findById(id)
                .orElseThrow(()->new ResourceAccessException("User not found with email : " + id));

        return UserPrincipal.create(user);
    }


}
