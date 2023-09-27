package com.example.demo;

import com.example.demo.core.domain.model.Product;
import com.example.demo.core.domain.service.interfaces.IProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Slf4j
public class LoadDatabase {

    @Bean
    CommandLineRunner initDatabase(IProductRepository repository) {

        return args -> {
            repository.save(new Product("ASUS ExpertCenter C2223HE", (float) 270.00, "Asus", (float) 21.45, 1, 0, 0, 0, 0, 1, "https://www.asus.com/displays-desktops/monitors/business/asus-expertcenter-c2223he/", "asus"));
            repository.save(new Product("Designo MX279HS", (float) 240.00, "Asus", (float) 27.00, 2, 0, 1, 0, 0, 1, "https://www.asus.com/displays-desktops/monitors/designo/designo-mx279hs/", "asus"));
            repository.save(new Product("ASUS VZ279HEG1R", (float) 200.00, "Asus", (float) 27.00, 1, 0, 1, 0, 0, 0, "https://www.asus.com/de/displays-desktops/monitors/gaming/vz279heg1r/", "asus"));
            repository.save(new Product("TUF Gaming VG32UQA1A", (float) 670.00, "Asus", (float) 31.5, 2, 1, 0, 0, 2, 1, "https://www.asus.com/de/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg32uqa1a/", "asus"));
            repository.save(new Product("TUF Gaming VG258QM", (float) 515.00, "Asus", (float) 24.5, 2, 1, 0, 0, 0, 1, "https://www.asus.com/de/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg258qm/", "asus"));
            repository.save(new Product("INZONE M9", (float) 1000.00, "Sony", (float) 27.00, 2, 1, 0, 0, 3, 1, "https://www.sony.de/electronics/gaming-monitore/inzone-m9", "sony"));
            repository.save(new Product("LG 27GP850P-B", (float) 320.00, "LG", (float) 27.00, 2, 1, 0, 0, 2, 1, "https://www.lg.com/de/monitore/lg-27gp850p-b", "lg"));
        };
    }
}
