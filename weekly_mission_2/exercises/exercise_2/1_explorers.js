const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

//# 1. Imprime el nombre (propiedad nombre) de cada explorer en la lista.
//     Usando FOR EACH.
console.log("================================")
explorers.forEach(explorer => {
    console.log(explorer.name)
    //# 2. Imprime el stack de cada explorer.
    console.log("Stack:")
    explorer.stack.forEach(stack => {
        console.log(`-- ${stack} --`)
    })
    console.log("\n")
})
console.log("================================")
//# 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP.
const explorer_stack = explorers.map(
    (  { stack } ) => (stack)
)
console.log(explorer_stack)
console.log("================================")
//# 4. Obten la lista de explorers que tengan en su stack "JS", usa FILTER (para validar en una lista se usa el metodo includes)
const explorers_js_stack = explorers.filter (
    (explorer) => explorer.stack.includes("js")
)
console.log(explorers_js_stack)
console.log("================================")
//# 5. Busca el primer explorer que sea de la CDMX. (Usando Find)
const explorer_cdmx = explorers.find((explorer) => explorer.city = "CDMX")
console.log(explorer_cdmx)
console.log("================================")
//# 6. Obten la suma de todos los exercises completados usando REDUCED.
const explorer_excercises_completed = explorers.reduce((previous,current) => previous + current.exercises_completed,0)
console.log(explorer_excercises_completed)
console.log("================================")
//# 7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const explorer_frontend_exercise = explorers.some((explorer) => explorer.missions.frontend.isFinished === true)
console.log(explorer_frontend_exercise)
console.log("================================")
// # 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const explorer_onboarding_finished = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true)
console.log(explorer_onboarding_finished)