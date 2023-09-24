package com.fullstack.backend.employee.repository;

import com.fullstack.backend.employee.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}