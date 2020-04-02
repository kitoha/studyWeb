package com.toyproject.algostudy.controller;

import com.toyproject.algostudy.domain.user.User;
import com.toyproject.algostudy.dto.LoginRequest;
import com.toyproject.algostudy.dto.SignUpRequest;
import com.toyproject.algostudy.repository.UserRepository;
import com.toyproject.algostudy.response.ApiResponse;
import com.toyproject.algostudy.response.JwtAuthResponse;
import com.toyproject.algostudy.security.TokenProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;

@Slf4j
@RestController
@RequestMapping(path = "/api/v1/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenProvider tokenProvider;

    @PostMapping("/login")
    public @ResponseBody ResponseEntity<?> loginUser(@Valid @RequestBody LoginRequest loginRequest){
        Authentication authentication=authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token=tokenProvider.generateToken(authentication);
        log.info("token 테스트 :" +token);
        return ResponseEntity.ok(new JwtAuthResponse(token));
    }

    @PostMapping("/signup")
    public @ResponseBody ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest){
        if(userRepository.existsByEmail(signUpRequest.getEmail())){
            return new ResponseEntity(new ApiResponse(false,"Username is already exist")
            , HttpStatus.BAD_REQUEST);
        }

        User user =User.builder()
                .email(signUpRequest.getEmail())
                .password(passwordEncoder.encode(signUpRequest.getPassword()))
                .name(signUpRequest.getName())
                .build();

        userRepository.save(user);

        return new ResponseEntity(new ApiResponse(true,"User registered successfully")
                , HttpStatus.OK);
    }

}
