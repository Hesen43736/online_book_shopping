package az.developia.shopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.shopping.dao.UserDAO;
import az.developia.shopping.model.User;
import az.developia.shopping.model.UserInfo;
import az.developia.shopping.model.UserResponse;
import az.developia.shopping.model.userdao;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/users")
public class UserController {

	@Autowired
	private userdao UserDao;

	@PostMapping(path = "/validate")
	public UserResponse validateUser(@RequestBody UserInfo userInfo) {
		return UserDao.validateUser(userInfo);
	}

	@Autowired
	private UserDAO userDAO;

	@PostMapping(path = "/check-exists")
	public Boolean checkExists(@RequestBody String username) {
		Boolean result = false;
		if (userDAO.findUserByUsername(username) > 0) {
			result = true;
		}
		return result;
	}

	@PostMapping
	public User createExists(@RequestBody User user) {
		System.out.println(user.getUsername());
		return userDAO.save(user);
	}
}
