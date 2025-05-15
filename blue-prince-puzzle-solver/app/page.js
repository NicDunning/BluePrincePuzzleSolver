'use client';
import PuzzleTile from "./components/puzzle_box/puzzle_tile";
import RulesBox from "./components/rules_box/rules";
import Popup from "./components/color_pick_popup/color_pick"
import styles from "./page.module.css";
import React, { useState } from 'react';
import Grid from "./components/puzzle_box/puzzle_grid";
import { setRequestMeta } from "next/dist/server/request-meta";

export default function Home() {

  const defaultGrid = [{color: 0},  {color: 1},  {color: 2},  {color: 3},  {color: 4},  {color: 5},  {color: 6},  {color: 7},  {color: 8}]

  const [grid, setGrid] = useState(defaultGrid)
  const [initialGrid, setInitialGrid] = useState([{color: 0},  {color: 1},  {color: 2},  {color: 3},  {color: 4},  {color: 5},  {color: 6},  {color: 7},  {color: 8}])
  const [solutionGrid, setSolutionGrid] = useState([{color: 0},  {color: 1},  {color: 2},  {color: 3},  {color: 4},  {color: 5},  {color: 6},  {color: 7},  {color: 8}])
  const [isColorPopupOpen, setColorPopupIsOpen] = useState(false)

  const resetGrid = (grid) => {
    setGrid(grid)
  }

  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div className={styles.page}>
          {
            grid.map((c, idx)=>{
              return (
                <PuzzleTile key={`puzzleTile-${idx}`} c={c} idx={idx}/>
              )
            })
          }
        </div>
        <RulesBox/>
      </div>
      <div className={styles.actionSequence}>
        <Grid header={'Initial State'} grid={initialGrid} setGrid={setInitialGrid}/>
        <div className={styles.moves}>
          <button>{'<'}</button>
          <div className={styles.move}>
            <div className={styles.moveDetails}>
              <p className={styles.text}>
                Top Left Blue
              </p>
            </div>
            <div className={styles.moveButtons}>
              <button className={styles.button} onClick={() => {console.log("TEST")}}>Set Grid To Initial State</button>
              <button className={styles.button}>Calculate Solution</button>
            </div>
          </div>
          <button>{'>'}</button>
        </div>
        <Grid header={'Solved State'} grid={solutionGrid} setGrid={setSolutionGrid}/>
      </div>
    </div>
  );
}
