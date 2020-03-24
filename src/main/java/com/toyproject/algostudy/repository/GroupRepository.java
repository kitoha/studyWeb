package com.toyproject.algostudy.repository;

import com.toyproject.algostudy.domain.UserGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GroupRepository extends JpaRepository<UserGroup,Long> {
    @Query("SELECT p FROM UserGroup p ORDER BY p.id DESC")
    List<UserGroup> findAllDesc();
}
