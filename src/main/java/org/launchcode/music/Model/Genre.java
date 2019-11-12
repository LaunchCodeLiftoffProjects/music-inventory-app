package org.launchcode.music.Model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

public class Genre {package org.launchcode.music.Model;



    @Entity
    public class Genre {
        @OneToMany
        @JoinColumn(name = "Genre_id")
        private List<Genre> songs = new ArrayList<>();

        @Id
        @GeneratedValue
        private int id;

        @NotNull
        @Size(min=3, max=15)
        private String name;

        public Genre(String name) {
            this.name = name;

        }

        public Genre() { }

        public int getId() {
            return id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }

}
