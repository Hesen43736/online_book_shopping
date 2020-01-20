package az.developia.shopping.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Customer {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id; 
	public String  name ;
	public String address ;
	public String phone ;
	public String email ;


	@OneToMany(cascade=CascadeType.ALL,mappedBy="customer")
	 
	private List< OrderModel> orders;
	
	public void addOrder( OrderModel order){
		if(this.orders==null){
			this.orders=new ArrayList<>();
		}
		this.orders.add(order);
		order.setCustomer(this);
	}

}
