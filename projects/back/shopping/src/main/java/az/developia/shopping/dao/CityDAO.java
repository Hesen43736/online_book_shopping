package az.developia.shopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.shopping.model.City;

 
public interface CityDAO extends JpaRepository<City, Integer> {
 

}
