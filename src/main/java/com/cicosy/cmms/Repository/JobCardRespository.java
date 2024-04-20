package com.cicosy.cmms.Repository;

import com.cicosy.cmms.Entity.JobCard;
import com.cicosy.cmms.Entity.Station;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface JobCardRespository extends JpaRepository<JobCard,Long> {

    @Query("select s from JobCard s where s.station= :s")
    JobCard getJobCardForStation(@Param("s") Station s);
}
