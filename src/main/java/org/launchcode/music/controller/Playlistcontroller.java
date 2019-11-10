package org.launchcode.music.controller;
import org.launchcode.music.model.Playlist;
import org.launchcode.music.model.PlaylistTrack;
import org.launchcode.music.service.Addplaylist;
import org.launchcode.music.service.playlisttrackservice;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController

@RequestMapping("/playlist")

public class Playlistcontroller

{
    private Addplaylist addplaylist;
    private playlisttrackservice playlisttrackservice;
    public Playlistcontroller(Addplaylist addplaylist, playlisttrackservice playlisttrackservice)
    {
        this.addplaylist = addplaylist;
        this.playlisttrackservice = playlisttrackservice;
    }


    @GetMapping

    @ResponseStatus(HttpStatus.OK)

    public List<Playlist> getAll()

    {

        return addplaylist.getAll();

    }



    @PostMapping("/new")

    @ResponseStatus(HttpStatus.OK)

    public Playlist addNew(@RequestBody Playlist playlist)

    {

        return addplaylist.addPlaylist(playlist);

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
}