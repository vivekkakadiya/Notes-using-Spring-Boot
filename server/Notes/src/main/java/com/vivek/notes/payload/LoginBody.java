package com.vivek.notes.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginBody {
    private String email;
    private String password;
}
