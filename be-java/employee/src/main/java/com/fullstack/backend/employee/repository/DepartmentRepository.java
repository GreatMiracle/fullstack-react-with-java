package com.fullstack.backend.employee.repository;

import com.fullstack.backend.employee.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}