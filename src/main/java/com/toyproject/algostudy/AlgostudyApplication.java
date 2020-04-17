package com.toyproject.algostudy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class AlgostudyApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlgostudyApplication.class, args);
	}

}
