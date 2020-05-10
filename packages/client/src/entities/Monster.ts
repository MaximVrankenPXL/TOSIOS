import { CircleSprite, Effects } from '../sprites';
import { MonstersTextures } from '../images/textures';

const HURT_COLOR = 0xff0000;

type MonsterDirection = 'left' | 'right';

export interface IMonster {
    x: number;
    y: number;
    radius: number;
    rotation: number;
}

export class Monster extends CircleSprite {
    private _toX: number = 0;

    private _toY: number = 0;

    // Computed
    private _direction: MonsterDirection = 'right';

    // Init
    constructor(attributes: IMonster) {
        super(attributes.x, attributes.y, attributes.radius, 0, { array: MonstersTextures.Bat });
    }

    // Methods
    move = (speed: number) => {
        this.x += Math.cos(this.rotation) * speed;
        this.y += Math.sin(this.rotation) * speed;
    };

    hurt() {
        Effects.flash(this.sprite, HURT_COLOR, 0xffffff);
    }

    // Setters
    set toX(toX: number) {
        this._toX = toX;
    }

    set toY(toY: number) {
        this._toY = toY;
    }

    set rotation(rotation: number) {
        if (rotation >= -(Math.PI / 2) && rotation <= Math.PI / 2) {
            this.direction = 'right';
        } else {
            this.direction = 'left';
        }
    }

    set direction(direction: MonsterDirection) {
        switch (direction) {
            case 'left':
                this.sprite.scale.x = -2;
                break;
            case 'right':
                this.sprite.scale.x = 2;
                break;
            default:
                break;
        }
    }

    // Getters
    get toX() {
        return this._toX;
    }

    get toY() {
        return this._toY;
    }

    get direction() {
        return this._direction;
    }
}
