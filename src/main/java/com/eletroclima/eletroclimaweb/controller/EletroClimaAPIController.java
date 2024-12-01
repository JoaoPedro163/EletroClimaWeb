package com.eletroclima.eletroclimaweb.controller;

import com.eletroclima.eletroclimaweb.model.MeusModelos;
import com.eletroclima.eletroclimaweb.model.Modelo;
import com.eletroclima.eletroclimaweb.service.ModelosService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    public ResponseEntity<MeusModelos> adicionarMeusModelos(@RequestBody MeusModelos modelo) {
        MeusModelos novoModelo = modelosService.addMeusModelos(modelo);
        return new ResponseEntity<>(novoModelo, HttpStatus.CREATED);
    }

    @GetMapping("/listar-modelos")
    public ResponseEntity<List<Modelo>> listarAllModelos() {
        List<Modelo> listaModelos = modelosService.getAllModelos();
        return new ResponseEntity<>(listaModelos, HttpStatus.OK);
    }

    @DeleteMapping("/deletar-modelo/{id}")
    public ResponseEntity<?> deletarModelo(@PathVariable Integer id) {
        modelosService.deletarModelo(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @GetMapping("/listar-meus-modelos")
    public ResponseEntity<List<MeusModelos>> listarAllMeusModelos(){
        List<MeusModelos> listaModelos = modelosService.getAllMeusModelos();
        for(MeusModelos m : listaModelos){
            System.out.println(m.getId());
            System.out.println(m.getModelo());
        }
        return new ResponseEntity<>(listaModelos, HttpStatus.OK);
    }
}
