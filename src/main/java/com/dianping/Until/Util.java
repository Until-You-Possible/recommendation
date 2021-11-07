package com.dianping.Until;

import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

public class Util {
    public static String processErrorString(BindingResult bindingResult){
        if(!bindingResult.hasErrors()){
            return "";
        }
        StringBuilder stringBuilder = new StringBuilder();
        for(FieldError fieldError:bindingResult.getFieldErrors()){
            stringBuilder.append(fieldError.getDefaultMessage()).append(",");
        }
        return stringBuilder.substring(0,stringBuilder.length()-1);
    }
}
