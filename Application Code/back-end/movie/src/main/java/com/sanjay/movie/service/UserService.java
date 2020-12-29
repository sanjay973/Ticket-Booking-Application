package com.sanjay.movie.service;

import com.sanjay.movie.entity.User;
import com.sanjay.movie.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user){
        return userRepository.save(user);
    }

    public User findById(Long id){
        return userRepository.getOne(id);
    }

    public User findByusername(String username){
        return userRepository.findByusername(username);
    }

}
