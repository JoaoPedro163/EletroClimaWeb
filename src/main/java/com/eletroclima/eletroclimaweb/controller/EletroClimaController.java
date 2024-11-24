package com.eletroclima.eletroclimaweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class EletroClimaController {

    @GetMapping("/eletroclima")
    public String abrirIndex() {
        return "index";
    }

    @GetMapping("/calculo-btus")
    public String abrirCalculo() {
        return "calculoBtus";
    }

    @GetMapping("/modelo")
    public String abrirModelo() {
        return "modelo";
    }

    @GetMapping("/listagem-modelos")
    public String abrirListagem() {
        return "listagemModelos";
    }
}
