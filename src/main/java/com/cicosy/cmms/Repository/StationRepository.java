package com.cicosy.cmms.Repository;

import com.cicosy.cmms.Entity.Station;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StationRepository extends JpaRepository<Station,Long> {

    @Query("SELECT s FROM Station s WHERE s.id = :id")
    Station getStation( @Param("id")Long id);
}
