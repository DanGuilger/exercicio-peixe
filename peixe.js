var config = {
    type: Phaser.AUTO,
    width: 1440,
    height: 840,

    scene: {
        preload: preload,
        create: create,
        update: update
        
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');

    //Carregar logo
    this.load.image('logo', 'assets/logo-inteli_azul.png');

    //Carregar peixe
    this.load.image('peixe', 'assets/peixes/tartaruga.png');

    this.load.image('ostra', 'assets/ostra.png')

}

function create() {
    this.add.image(720, 420, 'mar').setScale(1.4);

    //Adicionar a logo na tela
    this.add.image(720, 750, 'logo').setScale(0.5);

    //Guardar o peixe em uma variável
    peixinho = this.add.image('400', '300', 'peixe');

    //Transformando a variável
    peixinho.setFlip(true, false);

    this.add.image(200, 525, 'ostra').setScale(0.5);

}

function update() {

    //Adicionando controles do peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

}