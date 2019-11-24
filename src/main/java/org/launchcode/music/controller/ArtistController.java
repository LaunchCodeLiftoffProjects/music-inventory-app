package org.launchcode.music.controller;
import org.launchcode.music.model.Artist;
import org.launchcode.music.service.ArtistService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/artist")
public class ArtistController
{
    private ArtistService artistService;

    public ArtistController(ArtistService artistService)
    {
        this.artistService = artistService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Artist> getAll()
    {
        return artistService.getAll();
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.OK)
    public Artist addNew(@RequestBody Artist artist)
    {
        return artistService.addArtist(artist);
    }

    @PostMapping("/update")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Artist> updateArtist(@RequestBody Artist newArtist)
    {
        Optional<Artist> differentArtist = artistService.update(newArtist);
        if (differentArtist.isPresent()) {
            return ResponseEntity.ok().body(differentArtist.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/deleteartist")

    @ResponseStatus(HttpStatus.OK)
    public void deleteArtist(@RequestBody Artist artist)

    {

        artistService.deleteArtist(artist);

    }
}
