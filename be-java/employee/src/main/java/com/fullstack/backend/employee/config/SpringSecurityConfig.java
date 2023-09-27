package com.fullstack.backend.employee.config;

import com.fullstack.backend.employee.security.JwtAuthenticationEntryPoint;
import com.fullstack.backend.employee.security.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
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
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableMethodSecurity
@Configuration
@RequiredArgsConstructor
public class SpringSecurityConfig {

    private final JwtAuthenticationEntryPoint entryPoint;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .exceptionHandling()
                .authenticationEntryPoint(entryPoint)
                .accessDeniedHandler(entryPoint)
                .and()
                .authorizeHttpRequests(
                        (authorize) -> {
                            authorize.requestMatchers("/api/auth/**").permitAll();
                            authorize.requestMatchers(HttpMethod.POST, "/api/**").hasRole("ADMIN");
                            authorize.requestMatchers(HttpMethod.PUT, "/api/**").hasRole("ADMIN");
                            authorize.requestMatchers(HttpMethod.DELETE, "/api/**").hasRole("ADMIN");
                            authorize.requestMatchers(HttpMethod.GET, "/api/**").hasAnyRole("ADMIN", "USER");
                            authorize.requestMatchers(HttpMethod.PATCH, "/api/**").hasAnyRole("ADMIN", "USER");

                            authorize.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll(); //cái này để phục vụ CORS từ FE, comment đi là hẹo ko call api đc
                            authorize.anyRequest().authenticated();
                        }
                ).httpBasic(Customizer.withDefaults());


        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
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
