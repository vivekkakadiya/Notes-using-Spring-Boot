package com.vivek.notes.entities;



import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Notes {
	
	@jakarta.persistence.Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer Id;

	private String Title;
	
	@Column(length = 1000)
	private String Description;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date date;

	@ManyToOne
	private User user;

	public Integer getId() {
		return this.Id;
	}

	public void setId(Integer Id) {
		this.Id = Id;
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
