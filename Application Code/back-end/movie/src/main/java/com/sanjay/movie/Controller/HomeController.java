package com.sanjay.movie.Controller;

import com.sanjay.movie.Util.JwtUtil;
import com.sanjay.movie.entity.User;
import com.sanjay.movie.entity.UserTicket;
import com.sanjay.movie.security.AuthenticationRequest;
import com.sanjay.movie.service.UserService;
import com.sanjay.movie.service.UserTicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins="*")
public class HomeController {

    @Autowired
    private UserTicketService userTicketService;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/addNewUser")
    public User addNewUser(@RequestBody User user) {
        User user1 = userService.findByusername(user.getUsername());
        if (user1 != null) {
            throw new RuntimeException("Username already exists");
        }
        return userService.saveUser(user);
    }

    @PostMapping("/addNewTicket")
    public UserTicket addNewTicketForUser(@RequestBody UserTicket userTicket, Principal principal) {
        User user = userService.findByusername(principal.getName());
        if (user == null) {
            throw new RuntimeException("user does not exist");

        } else {
            userTicket.setUser(user);
            userTicket.setDateCreated(LocalDate.now());
            return userTicketService.saveTicket(userTicket);
        }
    }

    @GetMapping("/getRecords")
    public List<UserTicket> getAllUserTicket(Principal principal) {
        User user = userService.findByusername(principal.getName());
        if (user == null) {
            throw new RuntimeException("User Must be Logged in");
        }
        Long id = user.getId();
        if (user == null) {
            throw new NoSuchElementException("user not found");
        }

        return userTicketService.getAll(id);
    }

    @PostMapping("/authenticate")
    public String generateToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
                            authenticationRequest.getPassword())
            );
        } catch (Exception e) {
            throw new Exception("Invalid username and password");
        }

        return  jwtUtil.generateToken(authenticationRequest.getUsername());
    }
}
