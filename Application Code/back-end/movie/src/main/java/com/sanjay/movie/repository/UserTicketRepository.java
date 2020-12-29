package com.sanjay.movie.repository;

import com.sanjay.movie.entity.UserTicket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserTicketRepository extends JpaRepository<UserTicket,Long> {
    List<UserTicket> findAllById(Long id);

    List<UserTicket> findAllByUserId(Long id);
}
