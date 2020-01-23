package az.developia.shopping.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="product")
@Getter
@Setter
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
private Integer id;
private String name;
private Integer categoryId ;
private double price;
private boolean isNew;
private String  image;

private Integer cityId;
private String description;
private String ownerName;
private String phone;
private Date register;
private Integer userId;
private  Integer page;

}
