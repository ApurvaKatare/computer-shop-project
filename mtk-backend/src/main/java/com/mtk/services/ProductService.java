package com.mtk.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.mtk.daos.MtkRepository;
import com.mtk.entities.Product;
import com.mtk.models.ProductDto;

@Service
public class ProductService {

	@Autowired private MtkRepository brepo;
	@Autowired private VariantService vsrv;
	
	public void saveBike(ProductDto dto) {
		Product product=new Product();
		if(brepo.existsById(dto.getId())) {			
			product=brepo.getById(dto.getId());
		}		
		BeanUtils.copyProperties(dto, product);
		product.setVariant(vsrv.findById(dto.getVarid()));
		brepo.save(product);
	}
	
	public void updateBike(Product bk) {
		brepo.save(bk);
	}
	
	public List<Product> listAll(){
		return brepo.findAll(Sort.by(Direction.DESC, "createdon"));
	}
	
	public Product findById(String id) {
		return brepo.getById(id);
	}
	
	public List<Product> filterBikes(int id){
		System.out.println("Filter id "+id);
		if(id==1)
			return brepo.findByStatus("Available");
		else
			return brepo.findByStatus("Not Available");
	}
	
	public List<Product> listVariantBikes(int varid){
		return brepo.findByVariantAndStatus(vsrv.findById(varid),"Available");
	}
	
	public void deleteBike(String id) {
		if(brepo.existsById(id)) {
			brepo.delete(brepo.getById(id));
		}
	}	
}
