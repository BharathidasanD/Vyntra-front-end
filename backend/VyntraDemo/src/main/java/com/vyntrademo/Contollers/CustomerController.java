package com.vyntrademo.Contollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vyntrademo.dao.CustomerRepo;
import com.vyntrademo.model.Customer;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "users")
public class CustomerController {
	@Autowired
	CustomerRepo customerrepo;
	//return list of Customers.........
	@GetMapping("/listusers")
	public List<Customer> listCustomer(){
		return customerrepo.findAll();
	}
	//add a customer..........
    @PostMapping("/addCustomer")
    public String addCustomer(@RequestBody Customer c) throws DataIntegrityViolationException{
    	try{
    		customerrepo.save(c);
    	}
    	catch(DataIntegrityViolationException e){
    		return "Already Registered email or phone";
    	}
    	
    	return c.getName()+" registered successfully.";
    }
    //delete a customer......
    @DeleteMapping(path = { "/{id}" })
    public  String deleteCustomer(@PathVariable("id") Long id) throws Exception{
    	Customer deletedCustomer=customerrepo.getOne(id);
    	try {
    	 customerrepo.deleteById(id);
    	 System.out.print(deletedCustomer);
    	
    	}
    	catch(Exception e){
    		System.out.print("psing data");
    		 return deletedCustomer.getName()+" deleted";
    	}
    	
    	 return deletedCustomer.getName()+" deleted";
    }
}
