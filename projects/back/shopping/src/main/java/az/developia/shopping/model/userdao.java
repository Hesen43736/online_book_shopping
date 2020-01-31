package az.developia.shopping.model;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import javax.sql.DataSource;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;

import az.developia.shopping.model.User;
import az.developia.shopping.model.UserInfo;
import az.developia.shopping.model.UserResponse;

@Component
public class userdao {
	@Autowired
	private DataSource dataSource;

	public UserResponse validateUser(UserInfo userInfo) {
		UserResponse response = new UserResponse();

		try {
			Connection c = dataSource.getConnection();
			Statement s = c.createStatement();

			ResultSet r = s.executeQuery("select * from user where username = '" + userInfo.getUsername()
					+ "' and password = '" + userInfo.getPassword() + "' ;");
			if (r.next()) {
				response.setValidated(true);
				if (r.getByte("enabled") == 1) {
					response.setEnabled(true);
				}
				response.setId(r.getInt("id"));
				 

			 

			}
			r.close();
			s.close();
			c.close();

		} catch (Exception e) {
			e.printStackTrace();
		}
		return response;

	}
}
