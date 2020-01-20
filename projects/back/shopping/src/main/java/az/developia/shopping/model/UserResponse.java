package az.developia.shopping.model;

import java.util.List;

public class UserResponse {

	private int id;
private boolean enabled ;
private boolean validated ;
private List<UserGrant> grants;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public boolean isEnabled() {
	return enabled;
}
public void setEnabled(boolean enabled) {
	this.enabled = enabled;
}
public boolean isValidated() {
	return validated;
}
public void setValidated(boolean validated) {
	this.validated = validated;
}
public List<UserGrant> getGrants() {
	return grants;
}
public void setGrants(List<UserGrant> grants) {
	this.grants = grants;
}

}
