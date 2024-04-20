package com.cicosy.cmms.Repository;

import com.cicosy.cmms.Entity.Equipment;
import com.cicosy.cmms.Entity.Station;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment,Long> {


    @Query("select s from Equipment s where s.station = :s")
    List<Equipment> getEquipmentsForAstation(@Param("s") Station s);
}
