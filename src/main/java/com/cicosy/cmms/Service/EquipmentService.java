package com.cicosy.cmms.Service;

import com.cicosy.cmms.Entity.Equipment;
import com.cicosy.cmms.Repository.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service

public class EquipmentService {

    private EquipmentRepository equipmentRepository;


    @Autowired
    public EquipmentService(EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;

    }
    public List<Equipment> getAllEquipment() {
      return   equipmentRepository.findAll();
    }

    public Equipment saveEquipment(Equipment equipment) {

       return equipmentRepository.save(equipment);
    }


    public List<Equipment> getAllEquipmentsforStation(Long stationId) {
        List<Equipment> equipmentList =new ArrayList<>();

        List<Equipment> allEquipment = equipmentRepository.findAll();

        for(Equipment equipment:allEquipment){
            if(Objects.equals(equipment.getStation().getId(), stationId)){
                equipmentList.add(equipment);
            }
        }

        return equipmentList;
    }
}
