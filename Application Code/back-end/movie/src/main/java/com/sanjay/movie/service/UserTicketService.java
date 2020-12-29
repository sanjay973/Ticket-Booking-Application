package com.sanjay.movie.service;

import com.sanjay.movie.entity.User;
import com.sanjay.movie.entity.UserTicket;
import com.sanjay.movie.repository.UserTicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserTicketService {

    @Autowired
    private UserTicketRepository userTicketRepository;

    public UserTicket saveTicket(UserTicket userTicket){
       return userTicketRepository.save(userTicket);
    }

    public List<UserTicket> getAll(Long id){
            List<UserTicket> list=new ArrayList<>();
            list=userTicketRepository.findAllByUserId(id);
            return list;
    }
}
