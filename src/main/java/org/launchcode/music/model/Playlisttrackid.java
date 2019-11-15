package org.launchcode.music.model;

import java.io.Serializable;

public class Playlisttrackid implements Serializable {
    private Long playlistid;
    private Long trackid;

    public Playlisttrackid() {
    }

    public Playlisttrackid(Long playlistid, Long trackid) {
        this.playlistid = playlistid;
        this.trackid = trackid;
    }
}

