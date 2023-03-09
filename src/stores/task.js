import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'

// Composition api
export const useTaskStore = defineStore('task', () => {
  const tasks = reactive([
    {
      id: 1,
      text: 'Clean the house',
      done: false
    },
    {
      id: 2,
      text: 'Read the book',
      done: false
    },
    {
      id: 3,
      text: 'Do homework',
      done: false
    }
  ])

  const toDo = computed(() => tasks.filter((x) => !x.done))
  const done = computed(() => tasks.filter((x) => x.done))

  const addTask = (newTask) => {
    tasks.push({
      id: tasks.length + 1,
      text: newTask,
      done: false
    })
  }

  return {
    tasks,
    toDo,
    done,
    addTask
  }
})

// import { defineStore } from 'pinia'
//
// export const useTaskStore = defineStore('task', {
//   state: () => {
//     return {
//       tasks: [
//         {
//           id: 1,
//           text: 'Clean the house',
//           done: false
//         },
//         {
//           id: 2,
//           text: 'Read the book',
//           done: false
//         },
//         {
//           id: 3,
//           text: 'Do homework',
//           done: false
//         }
//       ]
//     }
//   },
//   getters: {
//     toDo: (state) => state.tasks.filter((x) => !x.done),
//     done: (state) => state.tasks.filter((x) => x.done)
//   },
//   actions: {
//     addTask(newTask) {
//       this.tasks.push({
//         id: this.tasks.length + 1,
//         text: newTask,
//         done: false
//       })
//     }
//   }
// })
