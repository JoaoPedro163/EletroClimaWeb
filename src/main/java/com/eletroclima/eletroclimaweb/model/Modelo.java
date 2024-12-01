package com.eletroclima.eletroclimaweb.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "modelo")
public class Modelo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    
    private Integer capacidade;
    private String titulo_car_1;
    private String caracteristica_1;
    private String titulo_car_2;
    private String caracteristica_2;
    private String titulo_car_3;
    private String caracteristica_3;
    private String urlImagem;
    private String resumo;
    private String url_imagem_car_1;
    private String url_imagem_car_2;
    private String url_imagem_car_3;
    private String ambiente;
    private String modelo;
}
