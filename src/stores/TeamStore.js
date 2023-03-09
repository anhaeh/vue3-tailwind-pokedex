import { defineStore, acceptHMRUpdate } from 'pinia'

export let useTeamStore = defineStore('team', {
  state: () => ({
    name: '',
    spots: 0,
    members: []
  }),
  actions: {
    async fill() {
      // call backend
      let r = await import('@/stores/team.json')

      this.$state = r.default
    },
    grow(spots) {
      this.spots = spots
    },
    async addMember(member) {
      member.status = 'Active'
      this.members.push(member)
    }
  },
  getters: {
    spotsRemaining() {
      return this.spots - this.members.length
    }
  }
})

// Para que funcione el hot releading
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTeamStore, import.meta.hot))
}
