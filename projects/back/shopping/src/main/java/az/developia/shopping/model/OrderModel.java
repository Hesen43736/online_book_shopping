package az.developia.shopping.model;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import az.developia.shopping.dao.OrderDao;

import lombok.Getter;
import lombok.Setter;

@Entity

@Getter
@Setter
public class OrderModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customer_id")
	@JsonIgnoreProperties(value = { "orders" })
	private Customer customer;
	public String note;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "order_id")
	public List<BasketProduct> basketProducts;

	public double totalPrice;
	public Timestamp register;

	private Integer userId;

}