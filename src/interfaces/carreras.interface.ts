import dynamicIconImports from 'lucide-react/dynamicIconImports';


export type carreras = {
    id: string
    isNewModel: boolean
    icon: keyof typeof dynamicIconImports
    title: string
    carreras: {ing: ing[], tsu: tsu[]}
}

export type degrees = {
    ing: string
    tsu: string
}

export type ing = {
    id: number
    area: string | undefined
    competencias: competencias | undefined
    title: string
    type: "ing"
    cuatrimestres: cuatrimestre[]
}

export type tsu = {
    id: number
    ing: number
    title: string
    slug: string
    banner: string
    pdf: string | undefined
    area: string | undefined
    type: "tsu" | "lic"
    competencias: competencias | undefined
    cuatrimestres: cuatrimestre[]
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