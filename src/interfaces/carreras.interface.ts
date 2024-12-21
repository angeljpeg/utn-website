import dynamicIconImports from 'lucide-react/dynamicIconImports';

export type carreras = {
    id: string
    title: string
    isNewModel: boolean
    icon: keyof typeof dynamicIconImports
    carreras: {ing: ing[], tsu: tsu[]}
}

export type ing = {
    id: number
    title: string
    type: "ing"
    cuatrimestres: cuatrimestre[]
    competencias?: competencias
}

export type tsu = {
    id: number
    ing: number
    title: string
    slug: string
    banner: string
    pdf?: string
    area?: string
    type: "tsu" | "lic"
    cuatrimestres: cuatrimestre[]
    camposDeAccion?: string[]
    competencias?: competencias
}

export type cuatrimestre = {
    cuatrimestre: number
    title: string
    materias: string[]
}

export type competencias = {
    img: string
    competencias: string[]
}

export type degrees = {
    ing: string
    tsu: string
}

export function findTsuBySlug(carreras: carreras[], slug: string): tsu | undefined {
    for (const carrera of carreras) {
        for (const tsu of carrera.carreras.tsu) {
            if (tsu.slug === slug) {
                return tsu;
            }
        }
    }
    return undefined;
}

export function findIngById(carreras: carreras[], id: number): ing | undefined {
    for (const carrera of carreras) {
        for (const ing of carrera.carreras.ing) {
            if (ing.id === id){
                return ing;
            }
        }
    }

    return undefined;
}