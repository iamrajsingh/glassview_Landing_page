import React from 'react'
import ColumnData from './ColumnData'
import "./TwoColumnSection.css"

const TwoColumnSection = () => {
  return (
    <section className='TwoColumnSection' id='press'>
        <div className='TwoColumnInner'>
            {ColumnData.map((item, index) => {
                return(
                    <div className='twoColumnCard' key={index}>
                        <div>
                            <img className='twoColumnImg' data-aos="zoom-in" src={item.image}/>
                        </div>
                        <div>
                            <h1 data-aos="fade-up" style={{fontSize: "30pt", marginBottom: "40px"}}>{item.title}</h1>
                       <p data-aos="fade-up" style={{ color: "#4f4f4f", 
                      fontWeight: "400",fontSize: "12pt", textAlign: "justify"}}>{item.para}</p>
                        </div>
                       
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default TwoColumnSection