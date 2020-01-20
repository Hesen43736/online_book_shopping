package az.developia.shopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.shopping.model.Product;

 
public interface ProductDAO extends JpaRepository<Product, Integer> {
 
	public List<Product> findAllByUserId(Integer userId);

}
