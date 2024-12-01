package com.eletroclima.eletroclimaweb.controller;

import com.eletroclima.eletroclimaweb.model.Modelo;
import com.eletroclima.eletroclimaweb.service.ModelosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/modelos")
public class EletroClimaAPIController {
    
    @Autowired
    private ModelosService modelosService;
    
    @PostMapping("/adicionar-meus-modelos")
    public ResponseEntity<Modelo> adicionarMeusModelos(@RequestBody Modelo modelo){
        Modelo novoModelo = modelosService.addModelos(modelo);
        return new ResponseEntity<>(novoModelo, HttpStatus.CREATED);
    }
}
