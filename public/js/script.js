$(function() {
    $(`.create-form`).on(`submit`, function(e) {
        e.preventDefault();

        const burger = { burger_name: $(`#bn`).val().trim() };

        $.ajax(`/api/burgers`, {
            type: `POST`,
            data: burger
        }).then(() => {
            console.log(`Successfully added burger.`);
            location.reload();
        });
    });

    $(`.change-devour`).on(`click`, function(e) {
        const id = $(this).data(`id`);
        const devour = $(this).data(`devour`);
        const devourState = { devoured: devour };

        $.ajax(`/api/burgers/${id}`, {
            type: `PUT`,
            data: devourState
        }).then(() => {
            console.log(`changed devoured to ${devour}`);
            location.reload();
        });
    });
});