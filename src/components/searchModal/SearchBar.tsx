'use client'

import { useState } from "react"

export function SearchBar(){

const [searchTerm, setSearchTerm] = useState<string>()


    return (
        <input value={searchTerm} onChange={e=> setSearchTerm(e.target.value)} type={'text'} className={'border-b border-slate-400 focus:border-b-2 decoration-transparent outline-none'}/>
    )
}