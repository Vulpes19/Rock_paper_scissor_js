let player_score = 0;
let computer_score = 0;
let player_moves = 3;
let computer_moves = 3;
let computer_choice = null;

function ft_game()
{
    ft_play();
}


const computer_options = ['rock', 'paper', 'scissor'];
function ft_play()
{
    const rock_button = document.querySelector('.rock');
    const paper_button = document.querySelector('.paper');
    const scissor_button = document.querySelector('.scissor');
    const player_options = [rock_button, paper_button, scissor_button];
    console.log(player_moves, computer_moves);
    if (player_moves == 0 && computer_moves == 0)
            ft_game_over(player_options, moves_left);
    player_options.forEach(ft_handle_events);
}


function ft_handle_events(option)
{
    option.addEventListener('click', (event) => {
        const   moves_left = document.querySelector('.moves');
        if (player_moves == 0)
            ft_game_over(event, moves_left);
        player_moves--;
        moves_left.innerText = 'Moves Left ${player_moves}';
        const choice = event.target.innerText;
        const   computer_choice = computer_options[Math.floor(Math.random() * 3)];
        ft_if_gamesfinished(choice, computer_choice);
    });
}

// function ft_logic()
// {
//     const   moves_left = document.querySelector('.moves');
//     player_moves--;
//     moves_left.InnerText = 'Moves Left ${player_moves}'
//     const   choice = Math.floor(Math.random() * 3);
//     const   computer_choice = computer_options[choice];
//     ft_if_gamesfinished(this.InnerText, computer_choice);

//     if (player_moves == 0 && computer_moves == 0)
//         ft_game_over(player_options, moves_left);
// }
    
function ft_if_gamesfinished(player, computer)
{
    const result = document.querySelector('.result');
    const pl_score_board = document.querySelector('.pl_score');
    const cp_score_board = document.querySelector('.cp_score');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player == computer)
        result.textContent = 'DRAW!';
        else if (player == 'rock')
    {
        if (computer == 'paper')
        {
            result.textContent = 'Computer won !';
            computer_score++;
            cp_score_board.textContent = computer_score;
        }
        else
        {
            result.textContent = 'You won !';
            player_score++;
            pl_score_board.textContent = player_score;
        }
    }
    else if (player == 'paper')
    {
        if (computer == 'scissor')
        {
            result.textContent = 'Computer won !';
            computer_score++;
            cp_score_board.textContent = computer_score;
        }
        else
        {
            result.textContent = 'You won !';
            player_score++;
            pl_score_board.textContent = player_score;
        }
    }
    else if (player == 'scissor')
    {
        if (computer == 'rock')
        {
            result.textContent = 'Computer won !';
            computer_score++;
            cp_score_board.textContent = computer_score;
        }
        else
        {
            result.textContent = 'You won !';
            player_score++;
            pl_score_board.textContent = player_score;
        }
    }
}

function ft_game_over(player_options, moves_left)
{
    const move = document.querySelector('.move');
    const result = document.querySelector('.result');
    const reload_button = document.querySelector('.reload');
    
    player_options.forEach( (option) => {option.style.display = 'none';});
    move.style.display = 'none';
    if (player_score > computer_score)
    {
        result.InnerText = 'You Won :D';
        result.style.FontSize = '2rem';
        result.style.color = '#8E7DBE';
    }
    else if (player_score < computer_score)
    {
        result.InnerText = 'You Lost D:';
        result.style.FontSize = '2rem';
        result.style.color = '#8E7DBE';
    }
    else
    {
        result.InnerText = 'DRAW';
        result.style.FontSize = '2rem';
        result.style.color = '#8E7DBE';
    }
    reload_button.style.InnerText = 'Restart';
    reload_button.addEventListener('click', function (){window.location.reload();});
}

ft_game();