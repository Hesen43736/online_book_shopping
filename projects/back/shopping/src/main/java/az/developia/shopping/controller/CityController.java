package az.developia.shopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.shopping.dao.CityDAO;
import az.developia.shopping.model.Category;
import az.developia.shopping.model.City;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/cities")
public class CityController {
	@Autowired
	private CityDAO cityDAO;

	@PostMapping
	public Integer addCity(@RequestBody City city) {
		return cityDAO.save(city).getId();
	}
	
	@GetMapping
	public List<City> findAll(){
		return cityDAO.findAll();
	}
	@DeleteMapping(path="/{id}")
	public void deleteById(@PathVariable(name="id") Integer id){
		cityDAO.deleteById(id);
	}

}
