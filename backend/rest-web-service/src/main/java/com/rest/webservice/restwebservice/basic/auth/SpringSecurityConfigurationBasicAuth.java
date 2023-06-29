package com.rest.webservice.restwebservice.basic.auth;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth{
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//customize the http security class and return it after it has been build()
      http
        .authorizeHttpRequests(
          auth ->auth
            .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
            .anyRequest().authenticated()
        );
      http.httpBasic(Customizer.withDefaults());
      http.sessionManagement(session-> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
      http.csrf(c->c.disable());


    return http.build();
      //or other way since all methods return the object itself as builder pattern
//             return   http
//                    .authorizeHttpRequests(
//                        auth ->
//                            auth
//                            .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
//                            .anyRequest().authenticated()
//                        )
//                  .httpBasic(Customizer.withDefaults())
//                    .sessionManagement(
//                        session -> session.sessionCreationPolicy
//                        (SessionCreationPolicy.STATELESS))
//                    .csrf(c->c.disable())
//                    .build();
    }
}
