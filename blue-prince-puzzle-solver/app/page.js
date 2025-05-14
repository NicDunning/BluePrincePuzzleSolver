'use client';
import PuzzleTile from "./components/puzzle_box/puzzle_tile";
import RulesBox from "./components/rules_box/rules";
import Popup from "./components/color_pick_popup/color_pick"
import styles from "./page.module.css";
import React, { useState } from 'react';
import Grid from "./components/puzzle_box/puzzle_grid";

export default function Home() {

  const [grid, setGrid] = useState([
    {color: 0},
    {color: 1},
    {color: 2},
    {color: 3},
    {color: 4},
    {color: 5},
    {color: 6},
    {color: 7},
    {color: 8},
  ])

  const [isColorPopupOpen, setColorPopupIsOpen] = useState(false)

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
        <Grid header={'Initial State'}/>
        <div className={styles.moves}>
          <button>{'<'}</button>
          <div className={styles.move}>
            <div className={styles.moveDetails}>
              <p className={styles.text}>
                Top Left Blue
              </p>
            </div>
            <div className={styles.moveButtons}>
              <button className={styles.button}>Refresh</button>
              <button className={styles.button}>Re-Calculate</button>
            </div>
          </div>
          <button>{'>'}</button>
        </div>
        <Grid header={'Solved State'}/>
      </div>
    </div>
  );
}
