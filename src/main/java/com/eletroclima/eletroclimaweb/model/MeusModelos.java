package com.eletroclima.eletroclimaweb.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "meus_modelos")
public class MeusModelos {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String modelo;
    private String ambiente;
    private Integer capacidade;
    private String urlImagem;
}
