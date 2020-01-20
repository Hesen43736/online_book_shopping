package az.developia.shopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.shopping.model.OrderModel;

public interface OrderDAO extends JpaRepository<OrderModel, Integer> {

}