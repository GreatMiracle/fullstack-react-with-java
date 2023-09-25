package com.fullstack.backend.employee.service;

import com.fullstack.backend.employee.dto.LoginDto;
import com.fullstack.backend.employee.dto.RegisterDto;


public interface AuthService {
    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);
}
