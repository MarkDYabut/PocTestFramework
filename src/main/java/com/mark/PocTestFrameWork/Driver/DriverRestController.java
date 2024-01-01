package com.mark.PocTestFrameWork.Driver;

import org.openqa.selenium.WebDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/Rest/driver")
public class DriverRestController {

    private static final Logger LOGGER = LoggerFactory.getLogger(DriverRestController.class);

    @Autowired
    DriverService driverService;

    @GetMapping("/viewDrivers")
    @CrossOrigin(origins = {"http://localhost:3333"})
    public ResponseEntity<HashMap<String, Object>> viewDrivers() {
        LOGGER.info("/viewDrivers()");
        Map<String, WebDriver> drivers = driverService.getDrivers();
        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("allDrivers", drivers.keySet());
        return new ResponseEntity<>(hashMap, HttpStatus.OK);
    }

    @GetMapping("/cleanAll")
    public String cleanAll(Model model) {
        LOGGER.info("/cleanAll()");
        driverService.cleanDrivers();
        model.addAttribute("getDrivers", driverService.getDrivers());
        return "driver/viewDrivers";
    }

    @GetMapping("/destroyAll")
    @CrossOrigin(origins = {"http://localhost:3333"})
    public ResponseEntity<HashMap<String, Object>> destroyAll() {
        LOGGER.info("/destroyAll()");
        driverService.destroyDrivers();
        Map<String, WebDriver> drivers = driverService.getDrivers();
        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("allDrivers", drivers.keySet());
        return new ResponseEntity<>(hashMap, HttpStatus.OK);    }

    @GetMapping("/ping")
    public String pingDriver(Model model, @RequestParam String id) {
        LOGGER.info("/pingDriver()");
        driverService.pingDriver(id);
        model.addAttribute("getDrivers", driverService.getDrivers());
        return "driver/viewDrivers";
    }

    @GetMapping("/new")
    @CrossOrigin(origins = {"http://localhost:3333"})
    public ResponseEntity<HashMap<String, Object>> newDriver() {
        LOGGER.info("/newDriver()");
        String driver = driverService.newDriver();
        Map<String, WebDriver> drivers = driverService.getDrivers();
        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("createdDriver", driver);
        hashMap.put("allDrivers", drivers.keySet());
        return new ResponseEntity<>(hashMap, HttpStatus.OK);
    }

    @RequestMapping("/destroy")
    public String destroyDriver(Model model, @RequestParam String id) {
        LOGGER.info("/destroyDriver()");
        driverService.destroyDriver(id);
        model.addAttribute("getDrivers", driverService.getDrivers());
        return "driver/viewDrivers";
    }

}
