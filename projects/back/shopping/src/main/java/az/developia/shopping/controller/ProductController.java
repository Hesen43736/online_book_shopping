package az.developia.shopping.controller;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.shopping.dao.ProductDAO;
import az.developia.shopping.model.OrderModel;
import az.developia.shopping.model.Product;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="/products")
public class ProductController {

	@Autowired
	private ProductDAO productDAO;
	
	 @PostMapping
	 public Integer add(@RequestBody Product p){
		 p.setRegister(Date.valueOf(LocalDate.now()));
		 return productDAO.save(p).getId();
	 }
	
	 @GetMapping
	 public List<Product> findAll( ){
		 return productDAO.findAll();
		 
		
	 }
	
	 
	 @GetMapping(path="/{id}")
	 public  Product  findById(@PathVariable(name="id") Integer id ){
		 
		 return productDAO.findById(id).get();
	 }
	
	 
	 @GetMapping(path="/user/{userId}")
	 public List<Product> findAllByUserId(@PathVariable(name="userId") Integer userId ){
		 return productDAO.findAllByUserId(userId);
	 }
	 
	 
	 @GetMapping(path="/find-partial/{begin}/{length}")
	 public List<Product> findPartial(@PathVariable(name="begin") Integer begin,
			 @PathVariable(name="length") Integer length ){
		 return productDAO.findPartial(begin,length);
	 }
	 
}

