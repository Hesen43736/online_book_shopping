package az.developia.shopping.dao;

import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;



import az.developia.shopping.model.OrderModel;


public interface OrderDao extends JpaRepository<OrderModel, Integer> {

	public List<OrderModel> findAllByUserId(Integer userId);
}
