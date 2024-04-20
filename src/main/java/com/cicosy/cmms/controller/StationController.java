package com.cicosy.cmms.controller;

import com.cicosy.cmms.Entity.Station;
import com.cicosy.cmms.Entity.Status;
import com.cicosy.cmms.Service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/station")
public class StationController {

    private StationService stationService;

    @Autowired
    public StationController(StationService stationService) {
        this.stationService = stationService;
    }

    //get all stations

    @GetMapping("/get/all")
    public List<Station> getAllStations() {
        return stationService.getAllStations();
    }

    //get station by id
    @GetMapping("/get/{id}")
    public Station getStationById(@PathVariable Long id) {
        return stationService.getStationById(id);
    }

    //save satation
    @PostMapping("/save")
    public Station saveStation(@RequestBody Station station) {
        System.out.println(station.toString());
        station.setEquipments("");
        station.setStatus(Status.OPEN);
        return stationService.saveStation(station);
    }
}
