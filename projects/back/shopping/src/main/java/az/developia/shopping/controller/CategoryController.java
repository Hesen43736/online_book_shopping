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

import az.developia.shopping.dao.CategoryDAO;
import az.developia.shopping.model.Category;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/categories")
public class CategoryController {
	@Autowired
	private CategoryDAO categoryDAO;

	@PostMapping
	public Integer addCategory(@RequestBody Category category) {
		return categoryDAO.save(category).getId();
	}
	
	@GetMapping
	public List<Category> findAll(){
		return categoryDAO.findAll();
	}
	@DeleteMapping(path="/{id}")
	public void deleteById(@PathVariable(name="id") Integer id){
		categoryDAO.deleteById(id);
	}

}
