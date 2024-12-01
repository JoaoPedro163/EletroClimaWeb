package com.eletroclima.eletroclimaweb.controller;

import com.eletroclima.eletroclimaweb.model.Modelo;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class EletroClimaController {

    private List<Modelo> listaModelos = new ArrayList<>();
    private List<Modelo> listaMeusModelos = new ArrayList<>();

    
    //Abrir página inicial
    @GetMapping("/eletroclima")
    public String abrirIndex() {
        return "index";
    }

    //Adicionar modelos selecionados na lista
    @PostMapping("/adicionar-meus-modelos")
    public String adicionarMeusModelos(@RequestBody Modelo modelo) {
        listaMeusModelos.add(modelo);
        return "redirect:/listagem-modelos";
    }

    //Adiciona todos os modelos do JSON na lista
    @PostMapping("/adicionar-modelos")
    public String adicionarModelos(@RequestBody Modelo modelo) {
        listaModelos.add(modelo);

        return "redirect:/calculo-btus";
    }

    //Abrir tela de calcular-btus
    @GetMapping("/calculo-btus")
    public String abrirCalculo() {
        return "calculoBtus";
    }

    //Abrir tela de modelos e encontra o modelo selecionado a partir do id passado pela url
    @GetMapping("/abrir-modelo")
    public String modelo(@RequestParam String id, Model model) {

        Integer idModelo = Integer.parseInt(id);

        for (int i = 0; i < listaModelos.size(); i++) {
            Modelo modelo = listaModelos.get(i);

            if (modelo.getId() == idModelo) {
                model.addAttribute("modelo", modelo);
            }
        }

        return "modelo";
    }

    //Abir tela de listagem de modelos salvos
    @GetMapping("/listagem-modelos")
    public String abrirListagem() {
        return "listagemModelos";
    }
}
