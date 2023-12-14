class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    attack(){
        if(this.type === "mago"){
            console.log(`O ${this.type} atacou usando magia`)
        }else if(this.type === "guerreiro"){
            console.log(`O ${this.type} atacou usando espadas`)
        }else if(this.type === "monge"){
            console.log(`O ${this.type} atacou usando artes marciais`)
        }else if(this.type === "ninja"){
            console.log(`O ${this.type} atacou usando shuriken`)
        }
    }
}
let mago = new hero("Felipe",28,"mago")
let guerreiro = new hero("Daniel",21,"guerreiro")
let monge = new hero("Carlos",28,"monge")
let ninja = new hero("Lima",28,"ninja")

mago.attack()
guerreiro.attack()
monge.attack()
ninja.attack()