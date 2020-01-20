package az.developia.shopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.shopping.dao.UserDAO;
import az.developia.shopping.model.UserInfo;
import az.developia.shopping.model.UserResponse;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="/users")
public class UserController {

	@Autowired
	private UserDAO userDAO;
	@PostMapping(path="/validate")
	public UserResponse validateUser(@RequestBody UserInfo userInfo){
		return userDAO.validateUser(userInfo);
	}
	
}

 