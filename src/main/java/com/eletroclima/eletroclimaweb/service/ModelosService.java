package com.eletroclima.eletroclimaweb.service;

import com.eletroclima.eletroclimaweb.model.Modelo;
import com.eletroclima.eletroclimaweb.model.ModelosRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ModelosService {
    
    @Autowired
    private ModelosRepository modelosRepository;
    
    public Modelo getModeloId(Integer id){
        return modelosRepository.findById(id).orElse(null);
    }
    
    public List<Modelo> getAllModelos(){
        return modelosRepository.findAll();
    }
    
    public Modelo addModelos(Modelo modelo){
        return modelosRepository.save(modelo);
    }
}
