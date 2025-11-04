import React from 'react'
import cn from 'classnames'

export const ImageContainer = ({ imageUrl, classname, alt }) => {
  return (
    <div className="bg-[#212635] my-4 flex items-center justify-center rounded-xl relative overflow-hidden">
      <div className="absolute top-0 bg-[#4f5c83] w-full p-2">
        <p className="text-sm">
          <i>Изображение:</i> {alt}
        </p>
      </div>
      <img src={imageUrl} alt={alt} className={cn('w-100 ', classname)} />
    </div>
  )
}
