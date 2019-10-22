package org.launchcode.music.controller;

import org.launchcode.music.model.Genre;
import org.launchcode.music.service.GenreService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/genre")
public class GenreController {

    private GenreService genreService ;

    public GenreController(GenreService genreService) {

        this.genreService = genreService ;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Genre> getAll() {

        return genreService.getAll();
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.OK)
    public Genre addNew(@RequestBody Genre genre) {

        return genreService.addGenre(genre);
    }
}
