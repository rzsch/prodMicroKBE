package com.example.demo.port.user.controller;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class ReactHelperController {

	@RequestMapping(value = "/react", method = RequestMethod.GET)
	public String toReact() {
		String username = "guest";
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			username = authentication.getName();
		}
		return "redirect:http://localhost:3000?user=" + username;
	}

}
