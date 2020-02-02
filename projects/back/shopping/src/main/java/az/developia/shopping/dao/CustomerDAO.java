package az.developia.shopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import az.developia.shopping.model.Customer;
import az.developia.shopping.model.Product;

 
public interface CustomerDAO extends JpaRepository<Product, Integer> {
 

	 
	

}