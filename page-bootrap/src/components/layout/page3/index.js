import React from 'react'
import "../page3/style.css";

export default function page3() {
  return (
    <>
      <section className="container">
        <div className="row">
          <ul className="chooser">
            <li>
              <a href="#">
                <div className="img-catesp cateiphone">
                  <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/img-cateiphone-1.png?v=1" alt='' 
                  width="102" height="112"></img>
                </div>
                <span>iPhone</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img-catesp catemac">
                  <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/img-catemac-1.png" alt=''
                   width="150" height="97"></img>
                </div>
                <span>Mac</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img-catesp cateipad">
                  <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/img-cateipad-1.png" alt=''
                   width="116" height="102"></img>
                </div>
                <span>iPad</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img-catesp catewatch">
                  <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/img-catewatch-2.png" alt=''
                  width="169" height="110"></img>
                </div>
                <span>Watch</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img-catesp catesound">
                  <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/img-catesound.png" alt=''
                  width="169" height="124"></img>
                </div>
                <span>Âm Thanh</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img-catesp catephukien">
                  <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/img-catephukien-1.png?v=2" alt=''
                  width="71" height="100"></img>
                </div>
                <span>Phụ Kiện</span>
              </a>
            </li>

          </ul>
        </div>
      </section>
    </>
  )
}