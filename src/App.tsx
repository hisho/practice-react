function App() {
  return (
    <div className="swiper">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide is-active">
            <div className="content">Slide 1</div>
          </div>
          <div className="swiper-slide">
            <div className="content">Slide 2</div>
          </div>
          <div className="swiper-slide">
            <div className="content">Slide 3</div>
          </div>
          <div className="swiper-slide">
            <div className="content">Slide 4</div>
          </div>
        </div>
        <button type={'button'} disabled className="swiper-button-prev" />
        <button type={'button'} className="swiper-button-next" />
        <div className="swiper-pagination">
          <button
            type={'button'}
            className="swiper-pagination-bullet is-active"
          />
          <button type={'button'} className="swiper-pagination-bullet" />
          <button type={'button'} className="swiper-pagination-bullet" />
          <button type={'button'} className="swiper-pagination-bullet" />
        </div>
      </div>
    </div>
  )
}

export default App
