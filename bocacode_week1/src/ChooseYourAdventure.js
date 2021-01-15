function main() {
    window.alert("Welcome, This is the game about gaming - Sort of");
    var gamerStatus;
    
    window.alert("Are you a gamer? - 'yes' or 'no'");
    gamerStatus = window.prompt('Enter a value for gamerStatus');
    if (gamerStatus == "yes") {
        var choresFinished;
        
        window.alert("Have you finished your daily tasks? - 'yes' or 'no' ");
        choresFinished = window.prompt('Enter a value for choresFinished');
        if (choresFinished == "yes") {
            window.alert("Great! That means you are ready to game");
            window.alert("What kind of gamer are you? A pc gamer or a console gamer?");
            var gamerType;
            
            gamerType = window.prompt('Enter a value for gamerType');
            if (gamerType == "pc") {
                
                // walks to computer
                // 
                window.alert("Let's look at your game library.");
                window.alert("What kind of games do you want to look at?  1 - FPS  2 - RPG  3 - Arcade  4 - All");
                var gameType;
                
                gameType = window.prompt('Enter a value for gameType');
                if (gameType % 2 == 0) {
                    if (gameType == 4) {
                        window.alert("lists all games");
                    } else {
                        window.alert("Lists RPG games");
                    }
                } else {
                    if (gameType == 3) {
                        window.alert("Lists arcade games");
                    } else {
                        window.alert("Lists FPS games");
                    }
                }
            } else {
                window.alert("exit message");
            }
        }
    } else {
        window.alert("exit message");
    }
}
