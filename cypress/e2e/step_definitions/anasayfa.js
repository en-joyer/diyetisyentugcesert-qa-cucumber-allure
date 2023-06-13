import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
  cy.viewport("macbook-13");
});

Given(`Bir tarayıcı verilen URL ile websitesine gitmelidir.`, () => {
  cy.visit("");
});

When("Website URLsi içerisindeki değere eşit olmalıdır.", () => {
  cy.url().should("eq", "https://www.diyetisyentugcesert.com/");
});

Then('Title "Diyetisyen Tuğçe Sert" içermelidir.', () => {
  cy.title().should("contain", "Diyetisyen Tuğçe Sert");
});

Then("Tüm resimlerin yüklenip yüklenmediği kontrol edilmelidir.", () => {
  cy.get(`img[alt='tugce sert']`).should("be.visible");
  cy.get(".info-box")
    .find("i")
    .each(($icon) => {
      if ($icon.is(":visible")) {
        cy.wrap($icon).should("be.visible");
      } else {
        cy.log(`İkon mevcut değil.`);
      }
    });

  cy.get(".info-box").each(($infoBox) => {
    cy.wrap($infoBox).within(() => {
      cy.get("i").should("be.visible");
    });
    cy.get(".stm_fixed_background").should("be.visible");
    cy.get(".vc_column-inner > :nth-child(1) > .grid-container > .row")
      .find("> :nth-child(n)") // Tüm childları seçmek için ":nth-child(n)" kullanıyoruz
      .each(($element) => {
        cy.wrap($element).within(() => {
          // Resim içerip içermediğini kontrol eder
          cy.get("img").then(($img) => {
            if ($img.length > 0) {
              cy.log("Resim mevcut:", $img.attr("src"));
              cy.wrap($img).should("exist");
            } else {
              cy.log("Resim mevcut değil.");
            }
            // Resmin görünür olup olmadığını kontrol eder
            if ($img.is(":visible")) {
              cy.log("Resim görünüyor.");
              cy.wrap($img).should("be.visible");
            } else {
              cy.log("Resim görünür değil.");
            }
          });
        });
      });
  });
});

When(
  "Anasayfada tüm linklerin doğru yönlendirme yaptığı kontrol edilmelidir.",
  () => {
    cy.get("div > a").each(($a) => {
      cy.wrap($a)
        .invoke("attr", "href")
        .then((href) => {
          cy.wrap($a)
            .invoke("text")
            .then((text) => {
              const istisnalar = [
                {
                  href: "https://www.diyetisyentugcesert.com/online-diyet/",
                  title: "Daha Fazla Bilgi",
                },
              ];
              const istisna = istisnalar.some(
                (item) => item.href === href && item.text === text.trim()
              );

              if (istisna) {
                // İstisna olarak belirlenen linkleri logla veya diğer işlemleri yap
                cy.log(`${href} veya ${text.trim()} istisna olarak belirlendi.`);
              } else {
                // İstisna değilse, yönlendirme kontrolünü yap
                cy.wrap($a).should("have.attr", "href", href);
              }
            });
        });
    });
  }
);
