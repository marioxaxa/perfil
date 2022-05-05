import { conhecimentos, linguagens } from "../data.js"

export default function Skillcontainer(teste) {
    
    if (teste === linguagens) {
        console.log(linguagens)
        return (
            <div className='Skill-container'>
                {linguagens.map((d) => {
                    return (
                        <div className='Skill-box'>
                        <div className='Skill-box-top'>
                          <img src={d.img} className='Skill-box-img'/>
                        </div>
                        <div className='Skill-box-bottom'>
                          <p>{d.tittle}</p>
                        </div>
                      </div>
                    )
                })}
            </div>
        )
    } else if (teste === 2) {
        return (
            <div className='Skill-container'>
                {conhecimentos.map((d) => {
                    return (
                        <div className='Skill-box'>
                        <div className='Skill-box-top' key={d.tittle}>
                          <img src={d.img} alt={d.tittle} className='Skill-box-img'/>
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

}