import { useState } from 'react';
import styles from './color_pick.module.css'

export default function Popup ({ isOpen, onClose, grid, setGrid }){

    function setGridState(idx, val){
        console.log(setGrid)
        let gridState = grid
        gridState[idx] = {color: Number(val)}
        setGrid(gridState)
    }

    return (
        <div className={`${styles.popupOverlay}`} style={{visibility: `${isOpen ? 'visible' : 'hidden'}`}} onClick={onClose}>
            <div className={`${styles.popupContent}`} onClick={e => e.stopPropagation()}>
                {
                    grid.map((val, idx, arr) => {
                        const [selected, setSelected] = useState(grid[idx].color)
                        return(
                            <select key={`select-${idx}`}  value={grid[idx].color} onChange={e => {setGridState(idx, e.target.value); setSelected(e.target.value);}}>
                                <option value={0}>White</option>
                                <option value={1}>Gray</option>
                                <option value={2}>Black</option>
                                <option value={3}>Red</option>
                                <option value={4}>Green</option>
                                <option value={5}>Yellow</option>
                                <option value={6}>Purple</option>
                                <option value={7}>Pink</option>
                                <option value={8}>Orange</option>
                                <option value={9}>Blue</option>
                            </select>
                        )
                    })
                }
                <button className={styles.button} onClick={onClose}>Close</button>
            </div>
        </div>
    );
};