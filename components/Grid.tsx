import React from 'react'
import { gridItems } from '@/data/global'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
const Grid = () => {
  return (
    <div>
        <BentoGrid>
           {gridItems.map((item,i) => (
            <BentoGridItem
                id={item.id}
                key={i}
                title={item.title}
                description={item.description}
                titleClassname={item.titleClassName}
            />

        
           ))}
        </BentoGrid>
    </div>
  )
}

export default Grid