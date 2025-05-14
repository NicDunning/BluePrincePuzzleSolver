import styles from './rules.module.css'
import global from '../../global.module.css'

export default function RulesBox(params){

    const color_rules = [
        {color:'White', style_color: global.white, rules:'Change nearby Gray -> White, if none becomes Gray'},
        {color:'Gray', style_color: global.gray, rules:'Nothing'},
        {color:'Black', style_color: global.black, rules:'Moves tile in row to the right'},
        {color:'Red', style_color: global.red, rules:'Changes White -> Black, Black -> Red'},
        {color:'Green', style_color: global.green, rules:'Swaps with tile across'},
        {color:'Yellow', style_color: global.yellow, rules:'Swaps with tile above'},
        {color:'Purple', style_color: global.purple, rules:'Swaps with tile below'},
        {color:'Pink', style_color: global.pink, rules:'Rotates everything around it clockwise'},
        {color:'Orange', style_color: global.orange, rules:'Becomes majority adjacent color, nothing if none'},
        {color:'Blue', style_color: global.blue, rules:'Copies tile in the middle space'},
    ]

    return (
        <div className={styles.rules}>
          {
            color_rules.map((c, idx)=>{
              return(
                <p className={global.text} key={`${c.color}-rules`}><em className={c.style_color}>||||</em> : {c.rules}</p>
              )
            })
          }
        </div>
    )
}