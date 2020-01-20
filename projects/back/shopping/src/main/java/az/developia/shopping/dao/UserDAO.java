package az.developia.shopping.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import az.developia.shopping.model.UserGrant;
import az.developia.shopping.model.UserInfo;
import az.developia.shopping.model.UserResponse;

@Component
public class UserDAO {
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
				r.close();

				r = s.executeQuery(
						"select name from user_grant_list where id in (select grant_id from user_grant where user_id="
								+ response.getId() + ")");

				ArrayList<UserGrant> userGrants = new ArrayList<UserGrant>();

				while (r.next()) {
					UserGrant ug = new UserGrant();
					ug.setName(r.getString("name"));
					userGrants.add(ug);

				}
				response.setGrants(userGrants);

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
