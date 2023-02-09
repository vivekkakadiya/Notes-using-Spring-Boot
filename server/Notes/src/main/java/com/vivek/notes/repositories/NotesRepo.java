package com.vivek.notes.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vivek.notes.entities.Notes;
import com.vivek.notes.entities.User;

public interface NotesRepo extends JpaRepository<Notes, Integer>{
    List<Notes> findByUser(User user);
}
