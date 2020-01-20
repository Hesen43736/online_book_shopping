package az.developia.shopping.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;
@Entity
@Getter
@Setter
public class BasketProduct {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
private Integer id;

	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="product_id")
	  
    public Product product ;
    public Integer count; 
}
