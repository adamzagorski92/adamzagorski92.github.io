console.log('Download data')

// funckcja inicjująca jQuery
$(document).ready(function(){

    // Przycisk do pobierania danych
    let newBtn = $('<button>', {
        id: 'new-button',
        text: 'Pobierz dane'
    })

    // Kontener na dane 
    let newDiv = $('<div>', {
        id: 'dane-programisty',
    })

    // funkcja obsługująca kliknięcie przycisku pobrania danych

    $(newBtn).on('click', function(){
        // funkcja pobierania danych za pomocą jQuery
        $.ajax({
            url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
            method: 'GET',
            success: function(date) {
                // dodatkowe wyświetlenie w konsoli
                console.log('Dane pobrane:', date);

                // Przypięcie wyników do kontenera na dane
                $(newDiv).html(`
                    <h3>Informacje o użytkowniku</h3>
                    <p><strong>Imię:</strong> ${date.imie}</p>
                    <p><strong>Nazwisko:</strong> ${date.nazwisko}</p>
                    <p><strong>Zawód:</strong> ${date.zawod}</p>
                    <p><strong>Firma:</strong> ${date.firma}</p>
                `);   
            },
            // obsługa błedów
            error: function(error) {
                console.error('Wystąpił błąd:', error);
            }

        })

    })

// podpięcie przycisku oraz kontenera do sekcji body
    $('body').append(newBtn);
    $('body').append(newDiv);
})