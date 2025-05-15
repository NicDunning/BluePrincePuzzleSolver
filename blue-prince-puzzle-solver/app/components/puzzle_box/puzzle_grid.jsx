import React, {useState} from 'react'
import PuzzleTile from "./puzzle_tile";
import Popup from "../color_pick_popup/color_pick"
import styles from "./puzzle_grid.module.css";

export default function Grid ({ header, grid, setGrid}){

    const [isColorPopupOpen, setColorPopupIsOpen] = useState(false)

    return (
        <div className={styles.state}>
            <p className={styles.text}>{header}</p>
            <div className={styles.end}>
                
                {
                grid.map((c, idx)=>{
                    return (
                    <PuzzleTile key={`solvedState${idx}`}
                    c={c} 
                    idx={idx} 
                    size={'sm'}
                    pressed={setColorPopupIsOpen}
                    />
                    )
                })
                }
                <Popup 
                    key={`${header}-grid-popup`}
                    isOpen={isColorPopupOpen}
                    onClose={() => {
                        setColorPopupIsOpen(false)
                    }}
                    grid={grid}
                    setGrid={setGrid}
                />
            </div>
        </div>
    )
}