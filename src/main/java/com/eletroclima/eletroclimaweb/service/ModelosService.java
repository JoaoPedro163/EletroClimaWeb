package com.eletroclima.eletroclimaweb.service;

import com.eletroclima.eletroclimaweb.model.MeusModelos;
import com.eletroclima.eletroclimaweb.model.MeusModelosRepository;
import com.eletroclima.eletroclimaweb.model.Modelo;
import com.eletroclima.eletroclimaweb.model.ModelosRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ModelosService {

    @Autowired
    private ModelosRepository modelosRepository;
    @Autowired
    private MeusModelosRepository meusModelosRepository;

    public Modelo getModeloId(Integer id) {
        return modelosRepository.findById(id).orElse(null);
    }

    public MeusModelos getMeusModelosId(Integer id){
        return meusModelosRepository.findById(id).orElse(null);
    }
    
    public List<Modelo> getAllModelos() {
        return modelosRepository.findAll();
    }

    public MeusModelos addMeusModelos(MeusModelos modelo) {
        modelo.setId(null);
        return meusModelosRepository.save(modelo);
    }

    public List<MeusModelos> getAllMeusModelos() {
        return meusModelosRepository.findAll();
    }

    public void deletarModelo(Integer id) {
        MeusModelos m = getMeusModelosId(id);
        meusModelosRepository.deleteById(m.getId());
    }
}
