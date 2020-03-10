package com.toyproject.algostudy;

import com.toyproject.algostudy.dto.auth.SessionUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Slf4j
@RequiredArgsConstructor
@RestController
public class HelloController {

    private final HttpSession httpSession;

    @GetMapping("/")
    public String root(){

        return "logInSuccess";
    }

    @GetMapping("/test")
    public String root2(){
        httpSession.removeAttribute("user");
        return "logInSuccess";
    }

    @GetMapping("/test3")
    public String root3(){
        SessionUser user =(SessionUser)httpSession.getAttribute("user");

        if(user!=null){
            return "I have Session";
        }
        return "helllo";
    }

    @GetMapping("/logout")
    public String logOut(HttpServletRequest request, HttpServletResponse response){

        for(Cookie cookie: request.getCookies()){
            log.info(cookie.getName() + " "+ cookie.getPath());
        }
        return "success";
    }

    @GetMapping("/hello")
    public String hello(){

        SessionUser user =(SessionUser)httpSession.getAttribute("user");

        if(user!=null){
            return "I have Session";
        }
        return "helllo";
    }
}
