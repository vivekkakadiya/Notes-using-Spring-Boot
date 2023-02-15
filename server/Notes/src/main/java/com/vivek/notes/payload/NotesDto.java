package com.vivek.notes.payload;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.vivek.notes.entities.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class NotesDto {
	private Integer ID;
	private String Title;
	private String Description;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date date;
	private UserDto userDto;

	public Integer getID() {
		return this.ID;
	}

	public void setID(Integer ID) {
		this.ID = ID;
	}

	public String getTitle() {
		return this.Title;
	}

	public void setTitle(String Title) {
		this.Title = Title;
	}

	public String getDescription() {
		return this.Description;
	}

	public void setDescription(String Description) {
		this.Description = Description;
	}

}
