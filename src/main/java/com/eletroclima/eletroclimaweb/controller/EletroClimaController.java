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

    @GetMapping("/eletroclima")
    public String abrirIndex() {
        return "index";
    }

    @PostMapping("/adicionar-meus-modelos")
    public String adicionarMeusModelos(@RequestBody Modelo modelo) {
        listaMeusModelos.add(modelo);
        return "redirect:/listagem-modelos";
    }

    @PostMapping("/adicionar-modelos")
    public String adicionarModelos(@RequestBody Modelo modelo) {
        listaModelos.add(modelo);

        return "redirect:/calculo-btus";
    }

    @GetMapping("/calculo-btus")
    public String abrirCalculo() {
        return "calculoBtus";
    }

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

    @GetMapping("/listagem-modelos")
    public String abrirListagem(Model model) {
        model.addAttribute("listaMeusModelos",  listaMeusModelos);
        return "listagemModelos";
    }
}
