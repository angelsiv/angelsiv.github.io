import { Subscription } from 'rxjs/Subscription';

class Player
{
    position(x_pos, y_pos) {
        this.x_pos = x_pos;
        this.y_pos = y_pos;
        return `${x_pos} , ${y_pos}`;
    }
    
}