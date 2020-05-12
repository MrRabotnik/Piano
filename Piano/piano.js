var do_note = new Audio('Sounds/do-stretched.wav');
var re_note = new Audio('Sounds/re-stretched.wav');
var mi_note = new Audio('Sounds/mi-stretched.wav');
var fa_note = new Audio('Sounds/fa-stretched.wav');
var so_note = new Audio('Sounds/sol-stretched.wav');
var la_note = new Audio('Sounds/la-stretched.wav');
var ti_note = new Audio('Sounds/si-stretched.mp3');


function pressingKey(event){
    switch(event.which){
        case 49:
            $(do_note).prop("currentTime",0);
            break;
        case 50:
            $(re_note).prop("currentTime",0);
            break;
        case 51:
            $(mi_note).prop("currentTime",0);
            break;
        case 52:
            $(fa_note).prop("currentTime",0);
            break;
        case 53:
            $(so_note).prop("currentTime",0);
            break;
        case 54:
            $(la_note).prop("currentTime",0);
            break;
        case 55:
            $(ti_note).prop("currentTime",0);
            break;
        default:
        }
    $(`#${event.which}`).addClass("pressed");
    $(`#${event.which}_bottom`).addClass("pressed_bottom");
}


function relisingKey(event){
    switch(event.which){
        case 49:
            do_note.play();
            break;
        case 50:
            re_note.play();
            break;
        case 51:
            mi_note.play();
            break;
        case 52:
            fa_note.play();
            break;
        case 53:
            so_note.play();
            break;
        case 54:
            la_note.play();
            break;
        case 55:
            ti_note.play();
            break;
        default:
        }
    $(`#${event.which}`).removeClass("pressed");
    $(`#${event.which}_bottom`).removeClass("pressed_bottom");


}



function clicking(id){
    switch(id){
        case 49:
            do_note.play();
            break;
        case 50:
            re_note.play();
            break;
        case 51:
            mi_note.play();
            break;
        case 52:
            fa_note.play();
            break;
        case 53:
            so_note.play();
            break;
        case 54:
            la_note.play();
            break;
        case 55:
            ti_note.play();
            break;
        default:
    }
}

function relising(id){
    switch(id){
        case 49:
            $(do_note).prop("currentTime",0);
            break;
        case 50:
            $(re_note).prop("currentTime",0);
            break;
        case 51:
            $(mi_note).prop("currentTime",0);
            break;
        case 52:
            $(fa_note).prop("currentTime",0);
            break;
        case 53:
            $(so_note).prop("currentTime",0);
            break;
        case 54:
            $(la_note).prop("currentTime",0);
            break;
        case 55:
            $(ti_note).prop("currentTime",0);
            break;
        default:
    }
}