package com.cicosy.cmms.controller;

import com.cicosy.cmms.Entity.Equipment;
import com.cicosy.cmms.Service.EquipmentService;
import com.cicosy.cmms.Service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/equipment")
public class EquipmentController {

    private final EquipmentService equipmentService;
    private final StationService stationService;

    @Autowired
    public EquipmentController(EquipmentService equipmentService, StationService stationService) {
        this.equipmentService = equipmentService;
        this.stationService = stationService;
    }

    //get all equipment
    @GetMapping("/get/all")
    public List<Equipment> getAllEquipment(){
        return equipmentService.getAllEquipment();
    }

    //save equipment
    @PostMapping("/save/{id}")
    public Equipment saveEquipment(@RequestBody Equipment equipment,@PathVariable String id){
        System.out.println("Station id: "+id);
        System.out.println(equipment.toString());
        equipment.setStation(stationService.getStationById(Long.valueOf(id)));

        return equipmentService.saveEquipment(equipment);
    }

    @GetMapping("/get/all/{stationId}")
    public List<Equipment> getAllEquipmentforStation(@PathVariable String stationId){
        System.out.println(stationId);

        return equipmentService.getAllEquipmentsforStation(Long.valueOf(stationId));
    }


}
