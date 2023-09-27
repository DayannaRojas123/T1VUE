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
      methods: {
        type: Object,
        required: true
      }
    },
    template: `
     
        <h2>{{ title }}</h2>
        <slot></slot>
      
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
        // Agregar aquí los datos necesarios para el ejercicio 2
      },
      methods: {
        // Agregar aquí los métodos necesarios para el ejercicio 2
      }
    },
    {
        title: 'Ejercicio 3',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 1
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 1
        }
      },
      {
        title: 'Ejercicio 4',
        data: {
          // Agregar aquí los datos necesarios para el ejercicio 2
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 2
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
          // Agregar aquí los datos necesarios para el ejercicio 2
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 2
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
          // Agregar aquí los datos necesarios para el ejercicio 2
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 2
        }
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
          // Agregar aquí los datos necesarios para el ejercicio 2
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 2
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
          // Agregar aquí los datos necesarios para el ejercicio 2
        },
        methods: {
          // Agregar aquí los métodos necesarios para el ejercicio 2
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
  
  
  for (let i = 0; i < exercises.length; i++) {
    new Vue({
      el: `#ejercicio${i + 1}`,
      data: {
        title: exercises[i].title,
        data: exercises[i].data,
        methods: exercises[i].methods,
      }
    });
  }
  
  new Vue(
{
    el:`#app`,
    data:{

        titulo:'TALLER JAVASCRIPT DAVID-DAYANNA'

    }


}


  )