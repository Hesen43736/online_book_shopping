package az.developia.shopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.shopping.model.Category;

 
public interface CategoryDAO extends JpaRepository<Category, Integer> {
	 

}
