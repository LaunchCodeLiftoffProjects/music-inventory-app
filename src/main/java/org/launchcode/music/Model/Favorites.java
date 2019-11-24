package org.launchcode.music.Model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table (name = "favorites")
public class Favorites {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;


    @Column(name = "favorites")
    boolean Favorites;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isFavorites() {
        return Favorites;
    }

    public void setFavorites(boolean favorites) {
        Favorites = favorites;
    }

}





