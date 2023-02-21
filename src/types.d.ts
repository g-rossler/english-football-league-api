interface TeamArea {
  id: number,
  name: string
}

export interface Team {
  id: number,
  area: TeamArea,
  name: string,
  shortName: string,
  tla: string,
  crestUrl: string,
  address:string,
  phone: string,
  website: string,
  email: string,
  founded: number,
  clubColors:string,
  venue:string,
  lastUpdated: string
}