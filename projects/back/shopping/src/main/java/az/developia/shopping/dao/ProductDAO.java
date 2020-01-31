package az.developia.shopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import az.developia.shopping.model.Product;

 
public interface ProductDAO extends JpaRepository<Product, Integer> {
 
	public List<Product> findAllByUserId(Integer userId);
	
	@Query(value="select * from product limit ?1,?2",nativeQuery=true) 
	public List<Product> findPartial(Integer begin,Integer length);
	


}