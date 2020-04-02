package com.toyproject.algostudy.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class JwtTokenAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private TokenProvider tokenProvider;

    @Autowired
    private CustomUserDetailService customUserDetailService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try{
            String jwt=getJwtFromRequest(request);

            if(StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)){
                Long id= tokenProvider.getUserIdFromJWT(jwt);

                UserDetails userDetails= customUserDetailService.loadUserById(id);
                UsernamePasswordAuthenticationToken authenticationToken
                        =new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }

        }catch (Exception ex){
            log.error("Could not set user authentication in security context", ex);
        }

        filterChain.doFilter(request,response);
    }

    private String getJwtFromRequest(HttpServletRequest request){
        String token=request.getHeader("Authorization");
        if(StringUtils.hasText(token) && token.startsWith("Bearer ")){
            return token.substring(7,token.length());
        }
        return null;
    }
}
