let jobs=[
    {
        id:1,
        nombre: "Viviana Duarte",
        empresa: "other",
        email: "yvduartef@gmail.com",
        telefono: "3222855924"},
    {
        id:2,
        nombre: "Viviana Duarte",
        empresa: "other",
        email: "yvduartef@gmail.com",
        telefono: "3222855924"},
    {
        id:3,
        nombre: "Viviana Duarte",
        empresa: "other",
        email: "yvduartef@gmail.com",
        telefono: "3222855924"},
    {
        id:4,
        nombre: "Viviana Duarte",
        empresa: "other",
        email: "yvduartef@gmail.com",
        telefono: "3222855924"
    }
]
export default jobs;

export function getAlljobs(){
    return jobs;
}

export function getJob(id){
    return jobs.find((j)=> j.id===id)
}