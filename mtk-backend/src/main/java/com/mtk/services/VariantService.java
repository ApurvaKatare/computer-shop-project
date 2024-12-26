package com.mtk.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.mtk.daos.VariantRepository;
import com.mtk.entities.Variant;
import com.mtk.models.VariantDTO;
import com.mtk.utils.StorageService;

@Service
public class VariantService {

	@Autowired private VariantRepository repo;
	@Autowired private CompanyService cservice;
	@Autowired private StorageService storageService;
	
	public void saveVariant(VariantDTO dto) {
		System.out.println(dto);
		Variant variant=new Variant();
		BeanUtils.copyProperties(dto, variant);
		String photo=storageService.store(dto.getPhoto());
		variant.setPhoto(photo);		
		repo.save(variant);
	}
	
	public void updateVariant(int id,VariantDTO dto) {
		Variant variant=repo.getById(id);
		variant.setPrice(dto.getPrice());
		variant.setDescription(dto.getDescription());
		variant.setTitle(dto.getTitle());
		variant.setCompany(dto.getCompany());
		repo.save(variant);
	}
	
	public List<Variant> listall(){
		return repo.findAll(Sort.by(Direction.DESC, "id"));
	}
	
	public List<Variant> listByCompany(int id){
		return repo.findByCompany(cservice.findById(id));
	}
	
	public void deleteVariant(int id) {
		repo.delete(repo.getById(id));
	}
	
	public Variant findById(int id) {
		return repo.getById(id);
	}
}

