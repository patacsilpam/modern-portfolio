import React from 'react'
import { gridItems } from '@/data/global'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
const Grid = () => {
  return (
    <div>
        <BentoGrid className="w-full py-20">
           {gridItems.map((item,i) => (
            <BentoGridItem
                id={item.id}
                key={i}
                title={item.title}
                description={item.description}
                className={item.className}
                img={item.img}
            />
           ))}
        </BentoGrid>
    </div>
  )
}

export default Grid