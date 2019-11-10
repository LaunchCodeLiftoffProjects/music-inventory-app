package org.launchcode.music.controller;
import org.launchcode.music.model.Playlist;
import org.launchcode.music.model.PlaylistTrack;
import org.launchcode.music.service.playlistservice;
import org.launchcode.music.service.playlisttrackservice;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController

@RequestMapping("/playlist")

public class Playlistcontroller

{
    private playlistservice playlistservice;
    private playlisttrackservice playlisttrackservice;
    public Playlistcontroller(playlistservice playlistservice, playlisttrackservice playlisttrackservice)
    {
        this.playlistservice = playlistservice;
        this.playlisttrackservice = playlisttrackservice;
    }


    @GetMapping

    @ResponseStatus(HttpStatus.OK)

    public List<Playlist> getAll()

    {

        return playlistservice.getAll();

    }
    @GetMapping("/search")

    @ResponseStatus(HttpStatus.OK)

    public List<Playlist> search(@RequestParam(value="searchtext") String searchtext)

    {

        return playlistservice.searchPlaylist(searchtext);

    }



    @PostMapping("/new")



    @ResponseStatus(HttpStatus.OK)



    public Playlist addNew(@RequestBody Playlist playlist)



    {



        return playlistservice.addPlaylist(playlist);



    }



    @PostMapping("/addTrack")

    @ResponseStatus(HttpStatus.OK)

    public PlaylistTrack addPlaylisttrack(@RequestBody PlaylistTrack playlistTrack)

    {

        return playlisttrackservice.addPlaylisttrack(playlistTrack);

    }
    @PostMapping("/deleteTrack")

    @ResponseStatus(HttpStatus.OK)

    public void deletePlaylisttrack(@RequestBody PlaylistTrack playlistTrack)

    {

         playlisttrackservice.deletePlaylisttrack(playlistTrack);

    }
    @PostMapping("/deletePlaylist")

    @ResponseStatus(HttpStatus.OK)

    public void deletePlaylist(@RequestBody Playlist playlist)

    {

        playlistservice.deletePlaylist(playlist);

    }
}