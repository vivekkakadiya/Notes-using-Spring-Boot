package com.vivek.notes.payload;

public class ApiRes {
    private String message;
    private Boolean success;
   
    public ApiRes(String message, Boolean success) {
        this.message = message;
        this.success = success;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public Boolean getSuccess() {
        return success;
    }
    public void setSuccess(Boolean success) {
        this.success = success;
    }
    //toString
    @Override
    public String toString() {
        return "ApiRes [message=" + message + ", success=" + success + "]";
    }
    
}
