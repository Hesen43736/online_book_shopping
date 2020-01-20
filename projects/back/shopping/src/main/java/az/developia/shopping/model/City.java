package az.developia.shopping.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="city")
@Getter
@Setter
public class City {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private Integer id;
private String name;

}
