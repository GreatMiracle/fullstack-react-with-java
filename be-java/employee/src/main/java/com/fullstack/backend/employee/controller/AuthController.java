package com.fullstack.backend.employee.controller;

import com.fullstack.backend.employee.dto.JwtAuthResponse;
import com.fullstack.backend.employee.dto.LoginDto;
import com.fullstack.backend.employee.dto.RegisterDto;
import com.fullstack.backend.employee.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {


    private final AuthService authService;

    // Build Register REST API
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
        String response = authService.register(registerDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // Build Login REST API
    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponse> login(@RequestBody LoginDto loginDto) {
        String response = authService.login(loginDto);
        JwtAuthResponse tokenResponse = JwtAuthResponse.builder()
                .accessToken(response)
                .build();
        return new ResponseEntity<>(tokenResponse, HttpStatus.OK);
    }


}
