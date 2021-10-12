import { memo, useMemo, useRef, useState } from 'react'

const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4']

export const App = memo(() => {
  //ここを教える
  const [index, setIndex] = useState(0)
  //ここを教える
  const ref = useRef<HTMLDivElement | null>(null)
  //ここはuseStateやuseEffectにする
  const width = useMemo(() => {
    return ref.current?.clientWidth ?? 0
  }, [ref])

  return (
    <div className="swiper">
      <div className="swiper-container">
        <div
          className="swiper-wrapper"
          ref={ref}
          style={{
            transform: `translate3d(${width * index * -1}px, 0, 0)`,
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              className={'swiper-slide'}
              key={`swiper-slide_${slide}_${slideIndex}`}
            >
              <div className="content">{slide}</div>
            </div>
          ))}
        </div>
        <button
          type={'button'}
          className="swiper-button-prev"
          disabled={index <= 0}
          onClick={() => setIndex((prevState) => prevState - 1)}
        />
        <button
          type={'button'}
          className="swiper-button-next"
          disabled={index >= slides.length - 1}
          onClick={() => setIndex((prevState) => prevState + 1)}
        />
        <div className="swiper-pagination">
          {slides.map((slide, slideIndex) => (
            <button
              key={`swiper-pagination_${slide}_${slideIndex}`}
              type={'button'}
              className={`swiper-pagination-bullet ${
                slideIndex === index ? 'is-active' : ''
              }`}
              onClick={() => setIndex(slideIndex)}
            />
          ))}
        </div>
      </div>
    </div>
  )
})
