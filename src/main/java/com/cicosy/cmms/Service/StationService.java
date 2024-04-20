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

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service

public class StationService {
    private StationRepository stationRepository;
    private JobCardRespository jobCardRespository;
    private EquipmentRepository equipmentRepository;

    @Autowired
    public StationService(StationRepository stationRepository, JobCardRespository jobCardRespository, EquipmentRepository equipmentRepository) {
        this.stationRepository = stationRepository;
        this.jobCardRespository = jobCardRespository;
        this.equipmentRepository = equipmentRepository;
    }

    public List<Station> getAllStations() {
        List<Station> stationsToReturn = new ArrayList<>();

        List<Station> stations = stationRepository.findAll();


        for (Station s : stations) {

            if (s.getStatus().equals(Status.CLOSED)) {
                // Time difference in hours
                Duration duration = Duration.between(s.getClosedTime(), LocalDateTime.now());
                long minutes = duration.toMinutes();
                double hours = (double) minutes / 60;
                // Round hours to one decimal place
                hours = Math.round(hours * 10) / 10.0;

                System.out.println("Time difference in hours: " + hours);
                s.setHoursLostToday(hours);
                s.setHoursLostPrev(hours);






            }

            stationsToReturn.add(s);
        }
        return stationsToReturn;
    }

    public Station getStationById(Long id) {
        return stationRepository.findOne(id);
    }

    public Station saveStation(Station station) {
        return stationRepository.save(station);
    }


}
