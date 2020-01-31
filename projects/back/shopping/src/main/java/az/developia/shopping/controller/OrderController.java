package az.developia.shopping.controller;

import java.util.List;

import javax.persistence.criteria.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.shopping.dao.OrderDao;
import az.developia.shopping.model.OrderModel;
import az.developia.shopping.model.Product;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="/orders")
public class OrderController {

	@Autowired
	private OrderDao orderDAO;
	
	 @PostMapping
	 public OrderModel add(@RequestBody OrderModel om){
		 
		 return orderDAO.save(om) ;
	 }
	 
	 
	 @GetMapping
	 public List<OrderModel> findAll( ){
		 return orderDAO.findAll();
	 }
	 
	 
	 @GetMapping(path="/{id}")
	 public  OrderModel  findById(@PathVariable(name="id") Integer id ){
		 
		 return orderDAO.findById(id).get();
	 }
	 
	 
	 @GetMapping(path="/user/{userId}")
	 public List<OrderModel> findAllByUserId(@PathVariable(name="userId") Integer userId ){
		 return orderDAO.findAllByUserId(userId);
	 }
	 
	 
	 
}
