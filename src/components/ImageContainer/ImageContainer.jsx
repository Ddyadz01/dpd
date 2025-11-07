import React from 'react'
import cn from 'classnames'

export const ImageContainer = ({ imageUrl, classname, alt }) => {
  return (
    <div className="bg-surface-image my-4 flex items-center justify-center rounded-xl relative overflow-hidden">
      <div className="absolute top-0 bg-surface-image-top w-full p-2">
        <p className="text-sm">
          <i>Изображение:</i> {alt}
        </p>
      </div>
      <img src={imageUrl} alt={alt} className={cn('w-100 ', classname)} />
    </div>
  )
}
