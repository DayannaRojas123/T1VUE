// Componente genérico para el diseño del contenedor
Vue.component('generic-container', {
    props: {
      title: {
        type: String,
        required: true
      },
      data: {
        type: Object,
        required: true
      },
      /* methods: {
        type: Object,
        required: true
      } *//* ,
      computed:{

        type:Object,
        required: true


      } */
    },
    template: `
     
    <div style="width: 100%;height: 100%;">
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
      
    `
  })
  
  // Información de cada ejercicio
  const exercises = [
    {
      title: 'Ejercicio 1',
      data: {
        // Agregar aquí los datos necesarios para el ejercicio 1
      },
      methods: {
        // Agregar aquí los métodos necesarios para el ejercicio 1
      }
    },
    {
      title: 'Ejercicio 2',
      data: {
      
        radio:null,
        mostrar: false
    
        
      },
      methods: {

        calcularArea(){

         this.data.mostrar=true
        
        return (Math.PI * Math.pow(parseFloat(this.data.radio),2)) 
    

        }

        
      
      },
     
    },
    {
        title: 'Ejercicio 3',
        data: {
         
        },
        methods: {
        
        }
      },
      {
        title: 'Ejercicio 4',
        data: {
          n1:0,
          n2:0
         
        },
        methods: {
          sumarNumeros(){

          return (parseFloat(this.data.n1))+(parseFloat(this.data.n2))
           
    

          },
          
          restarNumeros(){
           
         
          return (parseFloat(this.data.n1))-(parseFloat(this.data.n2))
          
           

          }
        }
      },
      {
        title: 'Ejercicio 5',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 1
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 1
        }
      },
      {
        title: 'Ejercicio 6',
        data: {
          area:null,
          altura:null,
          base:null
        
        },
        methods: {
          calcularAreaTriangulo(){
            

            this.data.area=( parseFloat(this.data.altura)*parseFloat(this.data.base))/2
           

          }
        }
      },
      {
        title: 'Ejercicio 7',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 1
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 1
        }
      },
      {
        title: 'Ejercicio 8',
        data: {
          serie:[1, 2, 3, 4, 5, 6, 7],
          numero:'',
           cont:0,
          
          
        },
        methods: {

     
          
          mostrarnum(){

            
            
           

           setInterval(()=>{

            if(this.data.cont<7){
  
              this.data.numero+=' '+this.data.serie[this.data.cont]

              
              this.data.cont++
   
            }
          
  
              },1000)



              document.getElementById('ejercicio8').addEventListener('mouseover', () => {
             
                this.data.cont = 0

                
                this.data.numero = ''

              });

           
              


            
         
             


            
            
          }
        },
        

      },
      {
        title: 'Ejercicio 9',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 1
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 1
        }
      },
      {
        title: 'Ejercicio 10',
        data: {
          v1:null,
          v2:null,
          v3:null,
          //disable:false
       
        },
        methods: {

          
          mayorYmenor(numeros){

            const contenedorH4 = document.getElementById("marcador")
            contenedorH4.innerHTML = ''

            let mayor = Math.max(...numeros)
            let menor = Math.min(...numeros)

           /*  let conjunto=Array.from(numeros)
            let mayor = conjunto[0];
            let menor = conjunto[0];


            for (let i = 0; i < conjunto.length; i++) {
              if (conjunto[i] > mayor) {
                mayor = conjunto[i];
              } else if (conjunto[i] < menor) {
                menor = conjunto[i];
              }
            }
 */


            const  h4Mayor = document.createElement("h4")
            const br= document.createElement('br')
            h4Mayor.textContent = `el numero mayor es: ${mayor}`
            const h4Menor = document.createElement("h4")
            h4Menor.textContent = `el numero menor es: ${menor}`
      
            
          
      
           
           contenedorH4.appendChild(h4Mayor);
           contenedorH4.appendChild(br);
            contenedorH4.appendChild(h4Menor);
    

           //contenedorH4.parentNode.insertBefore(nuevoH4, contenedorH4)

          },

          validarNum(){

            
            const numeros= new Set([this.data.v1,this.data.v2,this.data.v3])

            if (numeros.size != 3) {
             alert('los numeros no se pueden repetir')
             //this.data.disable=true
            this.data.v1=null
            this.data.v2=null
            this.data.v3=null
  
            }else{

              this.mayorYmenor(numeros)
            }


          },
          
        }
      },
      {
        title: 'Ejercicio 11',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 1
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 1
        }
      },
      {
        title: 'Ejercicio 12',
        data: {
         n10:[1,2,3,4,5,6,7,8,9,10]

        },
        methods: {
          
          sumatoria(){

            let cont=0

            this.data.n10.forEach(n => {

              cont +=n
              
            })

         return cont

          }
        }
      },
      {
        title: 'Ejercicio 13',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 1
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 1
        }
      },
      {
        title: 'Ejercicio 14',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 2
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 2
        }
      },
      {
        title: 'Ejercicio 15',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 1
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 1
        }
      },
      {
        title: 'Ejercicio 16',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 2
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 2
        }
      },
      {
        title: 'Ejercicio 17',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 1
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 1
        }
      },
      {
        title: 'Ejercicio 18',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 2
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 2
        }
      },
      {
        title: 'Ejercicio 19',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 1
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 1
        }
      },
      {
        title: 'Ejercicio 20',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 2
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 2
        }
      },
      {
        title: 'Ejercicio 21',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 1
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 1
        }
      },
      {
        title: 'Ejercicio 22',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 2
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 2
        }
      },
      {
        title: 'Ejercicio 23',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 1
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 1
        }
      },
      {
        title: 'Ejercicio 24',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 2
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 2
        }
      },
      {
        title: 'Ejercicio 25',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 1
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 1
        }
      },
      {
        title: 'Ejercicio 26',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 2
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 2
        }
      },
      {
        title: 'Ejercicio 27',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 1
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 1
        }
      },
      {
        title: 'Ejercicio 28',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 2
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 2
        }
      },
      {
        title: 'Ejercicio 29',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 1
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 1
        }
      },
      {
        title: 'Ejercicio 30',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 2
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 2
        }
      },
  
  ]
  
  exercises.forEach((exercise, index) => {
    new Vue({
      
      el: `#ejercicio${index + 1}`,

      data: {
        title: exercise.title,
        data: exercise.data
      },

      methods: exercise.methods || {}//por si esta vacio

    })

  })
  
  new Vue({
    el:`#app`,
    data:{
        titulo:'TALLER JAVASCRIPT DAVID-DAYANNA'
    }
})

 