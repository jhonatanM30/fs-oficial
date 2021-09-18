const playerImages = require.context('../asset/images');

export const getImgGalery = () =>{
    
    const galery = [
        {
            id: "1",           
            img: playerImages(`./psg.jpg`).default          
        }, 
        {
            id: "2",           
            img: playerImages(`./adriano.jpg`).default             
        }, 
        {
            id: "3",           
            img: playerImages(`./falcao.jpg`).default             
        }, 
        {
            id: "4",           
            img: playerImages(`./galacticos.jpg`).default             
        }, 
        
        {
            id: "5",           
            img: playerImages(`./cr7.jpg`).default             
        },

        {
            id: "6",           
            img: playerImages(`./maradona.jpg`).default             
        },

        {
            id: "7",           
            img: playerImages(`./mbape.jpg`).default             
        },

        {
            id: "8",           
            img: playerImages(`./messi.jpg`).default             
        },
        {
            id: "9",           
            img: playerImages(`./pirlo.jpg`).default             
        },
        {
            id: "10",           
            img: playerImages(`./zidane-zambrano.jpg`).default             
        },    
    ]

    return galery
  
  }