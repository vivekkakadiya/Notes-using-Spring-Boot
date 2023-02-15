package com.vivek.notes.services.impl;


import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import com.vivek.notes.entities.Notes;
import com.vivek.notes.entities.User;
import com.vivek.notes.payload.NotesDto;
import com.vivek.notes.payload.UserDto;
import com.vivek.notes.repositories.NotesRepo;
import com.vivek.notes.repositories.UserRepo;
import com.vivek.notes.services.NotesService;
@Service
public class NotesServiceImpl implements NotesService {
	
	@Autowired
	private NotesRepo notesRepo;
	
	@Autowired
	private UserRepo userRepo;


	//create
	@Override
	public NotesDto createNote(NotesDto notesDto,String userId) {
		User user=userRepo.findByEmail(userId);
		notesDto.setDate(new Date());
		
		Notes notes=DtoToNotes(notesDto);
		notes.setUser(user);
		
		Notes res=this.notesRepo.save(notes);
		return this.NotesToDto(res);
	}

	//update
	@Override
	public NotesDto updateNote(NotesDto notesDto, Integer notesId) {
		Notes notes= this.notesRepo.findById(notesId).orElseThrow(()->new ResourceAccessException("not found"));
		notesDto.setDate(new Date());
		notes.setTitle(notesDto.getTitle());
		notes.setDate(notesDto.getDate());
		notes.setDescription(notesDto.getDescription());
		Notes res=this.notesRepo.save(notes);
		return this.NotesToDto(res);
	}

	// delete
	@Override
	public void deleteNote(Integer notesId) {
		Notes notes=this.notesRepo.findById(notesId).orElseThrow();
		this.notesRepo.delete(notes);
	}

	//get 
	@Override
	public NotesDto getNote(Integer notesId) {
		Notes notes=this.notesRepo.findById(notesId).orElseThrow();
		return this.NotesToDto(notes);
	}
	//get by user
	public List<NotesDto> getNoteByUser(String userId) {
		User user=userRepo.findByEmail(userId);
		List<Notes> notes = this.notesRepo.findByUser(user);
		System.out.println(user);
		List<NotesDto> allNotes= notes.stream().map((note)->this.NotesToDto(note)).collect(Collectors.toList());
		return allNotes;
	}

	//get all
	@Override
	public List<NotesDto> getAllNote() {
		List<Notes> notes = this.notesRepo.findAll();
		List<NotesDto> allNotes= notes.stream().map((note)->this.NotesToDto(note)).collect(Collectors.toList());
		return allNotes;
	}
	
	public NotesDto NotesToDto(Notes notes ) {
		NotesDto notesDto= new NotesDto();
		notesDto.setID(notes.getId());
		notesDto.setTitle(notes.getTitle());
		notesDto.setDate(notes.getDate());
		notesDto.setDescription(notes.getDescription());
		notesDto.setUserDto(this.UserToDto(notes.getUser()));

		return notesDto;
	}

	public Notes DtoToNotes(NotesDto notesDto ) {
		Notes notes= new Notes();
		notes.setTitle(notesDto.getTitle());
		notes.setDate(notesDto.getDate());
		notes.setDescription(notesDto.getDescription());
		return notes;
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
		userDto.setName(user.getName());
		userDto.setEmail(user.getEmail());
		userDto.setPassword(user.getPassword());
		return userDto;
	}
}
