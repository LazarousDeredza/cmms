package com.cicosy.cmms.Service;

import com.cicosy.cmms.Entity.Equipment;
import com.cicosy.cmms.Entity.JobCard;
import com.cicosy.cmms.Entity.Station;
import com.cicosy.cmms.Entity.Status;
import com.cicosy.cmms.Repository.EquipmentRepository;
import com.cicosy.cmms.Repository.JobCardRespository;
import com.cicosy.cmms.Repository.StationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class JobCardService {
    private final JobCardRespository jobCardRespository;
    private final StationRepository stationRepository;
    private final EquipmentRepository equipmentRepository;

    @Autowired
    public JobCardService(JobCardRespository jobCardRespository, StationRepository stationRepository, EquipmentRepository equipmentRepository) {
        this.jobCardRespository = jobCardRespository;
        this.stationRepository = stationRepository;
        this.equipmentRepository = equipmentRepository;
    }

    public List<JobCard> getAllJobCards() {

        List<JobCard> jobCards = jobCardRespository.findAll();
        List<JobCard> jobCards1 = new ArrayList<>();


        for (JobCard j : jobCards) {
            String eq = j.getEq();
            String[] values = eq.split(",");

            List<Equipment> equipmentList = new ArrayList<>();

            String EquipmentNames = "";
            for (String value : values) {
                Equipment ee = equipmentRepository.findOne(Long.valueOf(value.trim()));
                equipmentList.add(ee);

            }
            j.setEquipmentList(equipmentList);
            jobCards1.add(j);
        }


        return jobCards1;
    }

    public JobCard getJobCardById(Long id) {
        return jobCardRespository.findOne(id);
    }

    @Transactional
    public JobCard saveJobCard(JobCard jobCard) {

        //update station to closed
        System.out.println("Station = " + jobCard.getStation());


        String eq = jobCard.getEq();
        String[] values = eq.split(",");

        List<Equipment> equipmentList = new ArrayList<>();

        String EquipmentNames = "";
        for (String value : values) {
            Equipment ee = equipmentRepository.findOne(Long.valueOf(value.trim()));
            equipmentList.add(ee);
            EquipmentNames += " , " + ee.getEquipmentName();
        }


        Station station = stationRepository.getStation(jobCard.getStation().getId());

        station.setEquipments(EquipmentNames);
        station.setStatus(Status.CLOSED);
        station.setClosedTime(LocalDateTime.now());

        stationRepository.save(station);


        jobCard.setEquipmentList(equipmentList);
        return jobCardRespository.save(jobCard);
    }

    @Transactional
    public JobCard updateJobCard(Long id, JobCard jobCard) {

        return jobCardRespository.save(jobCard);
    }
}
