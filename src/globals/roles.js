const roles = {
  payload: {
    1: 'superadmin',
    2: 'admin',
    3: 'agent',
    4: 'art_director',
    5: 'interior_designer',
    6: 'creator'
  },

  visibility: {
    superadmin: 'Super Admin',
    admin: 'Admin',
    agent: 'Agent',
    art_director: 'Art Director',
    interior_designer: 'Graphic designer',
    creator: 'Creator'
  },

  get SUPER_ADMIN () {
    return this.payload[1]
  },

  get ADMIN () {
    return this.payload[2]
  },

  get AGENT () {
    return this.payload[3]
  },

  get ART_DIRECTOR () {
    return this.payload[4]
  },

  get INTERIOR_DESIGNER () {
    return this.payload[5]
  },

  get CREATOR () {
    return this.payload[6]
  },

  get all () {
    return [this.SUPER_ADMIN, this.ADMIN, this.AGENT, this.INTERIOR_DESIGNER, this.CREATOR, this.ART_DIRECTOR]
  }
}

export default roles