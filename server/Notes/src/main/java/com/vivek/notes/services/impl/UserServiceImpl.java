package com.vivek.notes.services.impl;

import java.util.List;
import java.util.stream.Collectors;
import com.vivek.notes.payload.ApiRes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vivek.notes.entities.User;
import com.vivek.notes.payload.ApiRes;
import com.vivek.notes.payload.UserDto;
import com.vivek.notes.repositories.UserRepo;
import com.vivek.notes.services.UserService;
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    //create
    @Override
    public UserDto createUser(UserDto userDto) {
        User user=this.userRepo.save(this.DtoToUser(userDto));
        return this.UserToDto(user);
    }
    //update
    @Override
    public UserDto updateUser(UserDto userDto, Integer userId) {
        User user= this.userRepo.findById(userId).orElseThrow();
        return this.UserToDto(user);
    }

    //delete
    @Override
    public void deleteUser(Integer userId) {
        User user= this.userRepo.findById(userId).orElseThrow();
        this.userRepo.delete(user);
    }

    //get
    @Override
    public UserDto getUser(Integer userId) {
        User user= this.userRepo.findById(userId).orElseThrow();
        return this.UserToDto(user);
    }

    //get all
    
    public List<UserDto> getAllUser() {
		List<User> users=this.userRepo.findAll();
        List<UserDto> allNotes= users.stream().map((user)->this.UserToDto(user)).collect(Collectors.toList());
        return allNotes;
    }

    //login
    public UserDto userLogin(String email, String password) {
        User user= this.userRepo.findByEmailAndPassword(email,password);
        
        return this.UserToDto(user);
    }

    public User DtoToUser(UserDto userDto ) {
		User user= new User();
		user.setName(userDto.getName());
		user.setEmail(userDto.getEmail());
		user.setPassword(userDto.getPassword());
		return user;
	}

	public UserDto UserToDto(User user ) {
		UserDto userDto= new UserDto();
        userDto.setId(user.getId());
		userDto.setName(user.getName());
		userDto.setEmail(user.getEmail());
		userDto.setPassword(user.getPassword());
		return userDto;
	}

}
    

