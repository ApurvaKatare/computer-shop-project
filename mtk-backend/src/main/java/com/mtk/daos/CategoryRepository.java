package com.mtk.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mtk.entities.Company;

@Repository
public interface CategoryRepository extends JpaRepository<Company, Integer> {

}
