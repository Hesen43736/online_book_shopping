package az.developia.shopping.dao;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;

import az.developia.shopping.model.User;
import az.developia.shopping.model.UserInfo;
import az.developia.shopping.model.UserResponse;

 
public interface UserDAO extends JpaRepository<User, Integer> {
	
@Query(value="select count(*) from user where username =?1",nativeQuery=true)
public Integer findUserByUsername(String username);


	

}
