package com.eletroclima.eletroclimaweb.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModelosRepository extends JpaRepository<Modelo, Integer>{
    
}