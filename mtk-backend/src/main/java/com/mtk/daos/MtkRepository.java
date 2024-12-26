package com.mtk.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mtk.entities.Product;
import com.mtk.entities.Variant;

@Repository
public interface MtkRepository extends JpaRepository<Product, String> {

	List<Product> findByVariantAndStatus(Variant variant,String status);
	List<Product> findByStatus(String status);
}
