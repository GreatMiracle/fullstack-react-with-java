package com.fullstack.backend.employee.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Collections;

@Configuration
public class ConfigAll {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }


    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Collections.singletonList("*")); // Cho phép truy cập từ mọi nguồn gốc
        configuration.setAllowedMethods(Collections.singletonList("*")); // Cho phép tất cả các phương thức HTTP
        configuration.setAllowedHeaders(Collections.singletonList("*")); // Cho phép tất cả các tiêu đề HTTP
//        configuration.setAllowCredentials(true); // Cho phép sử dụng cookie khi truy cập từ nguồn gốc khác

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    @Bean
    public CorsFilter corsFilter() {
        return new CorsFilter(corsConfigurationSource());
    }
}
