type FPSControls = {
    W: 'up';
    A: 'left';
    S: 'down';
    D: 'right';
}

class FPSGame implements iGame<FPSControls>{
    title: string;
    platform: string;
    controls: FPSControls;
    
}