package com.fullstack.backend.employee.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@EnableMethodSecurity
@Configuration
public class SpringSecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeHttpRequests(
                        (authorize) -> {
//                            authorize.requestMatchers(HttpMethod.POST, "/api/**").hasRole("ADMIN");
//                            authorize.requestMatchers(HttpMethod.PUT, "/api/**").hasRole("ADMIN");
//                            authorize.requestMatchers(HttpMethod.DELETE, "/api/**").hasRole("ADMIN");
//                            authorize.requestMatchers(HttpMethod.GET, "/api/**").hasAnyRole("ADMIN", "USER");
//                            authorize.requestMatchers(HttpMethod.PATCH, "/api/**").hasAnyRole("ADMIN", "USER");
//                            authorize.requestMatchers(HttpMethod.GET, "/api/**").permitAll();
                            authorize.anyRequest().authenticated();
                        }
                ).httpBasic(Customizer.withDefaults());
        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

//    @Bean
//    public UserDetailsService userDetailsService() {
//        UserDetails userAcc = User.builder()
//                .username("user")
//                .password(passwordEncoder().encode("12345"))
//                .roles("USER")
//                .build();
//
//        UserDetails adminAcc = User.builder()
//                .username("admin")
//                .password(passwordEncoder().encode("12345"))
//                .roles("ADMIN")
//                .build();
//
//
//        return new InMemoryUserDetailsManager(userAcc, adminAcc);
//    }

    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
