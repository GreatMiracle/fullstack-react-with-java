package com.fullstack.backend.employee.repository;


import com.fullstack.backend.employee.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}