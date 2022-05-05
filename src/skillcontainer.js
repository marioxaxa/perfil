import { data } from "./data.js"

export default function Skillcontainer(type) {
    return (
        <div className='Skill-container'>
            {data.linguagens.map((d, key) => {
                return (
                    <div className='Skill-box'>
                    <div className='Skill-box-top'>
                      <img src={d.img} alt='HTML logo.' className='Skill-box-img'/>
                    </div>
                    <div className='Skill-box-bottom'>
                      <p>{d.tittle}</p>
                    </div>
                  </div>
                )
            })}

        </div>
    )
}