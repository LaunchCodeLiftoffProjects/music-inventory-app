package org.launchcode.music.controllers;

import org.launchcode.music.Model.Favorites;
import org.launchcode.music.Service.FavoritesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/favorites")
public class FavoritesController {
    private FavoritesService favoritesService;

    public FavoritesController(FavoritesService favoritesService){this.favoritesService=favoritesService;}

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Favorites> getAll() { return favoritesService.getAll();}

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public Favorites addNew (@RequestBody Favorites favorites){return favoritesService.addFavorites(favorites);}

    @GetMapping("/{id}")
    ResponseEntity<Favorites>get(@PathVariable Long id) {
        Optional<Favorites> favorites = favoritesService.get(id);

        if (favorites.isPresent()) {
            return ResponseEntity.ok().body(favorites.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
        @PutMapping
        ResponseEntity<Favorites> update (@RequestBody Favorites newFavorites){
            Optional<Favorites> someFavorites = favoritesService.update(newFavorites);
            if (someFavorites.isPresent()) {
                return ResponseEntity.ok().body(someFavorites.get());
            } else {
                return ResponseEntity.notFound().build();
            }

        }
        @DeleteMapping("/{id}")
        ResponseEntity<String> delete (@PathVariable Long id){
            if (favoritesService.delete(id)) {
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        }
    }