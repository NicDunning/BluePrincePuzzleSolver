'use client';
import PuzzleTile from "./components/puzzle_box/puzzle_tile";
import RulesBox from "./components/rules_box/rules";
import styles from "./page.module.css";
import React, { useState } from 'react';

export default function Home() {

  const [grid, setGrid] = useState([
    {color: 0, active: false},
    {color: 1, active: false},
    {color: 2, active: false},
    {color: 3, active: false},
    {color: 4, active: false},
    {color: 5, active: false},
    {color: 6, active: false},
    {color: 7, active: false},
    {color: 8, active: false},
  ])

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
        <div  className={styles.state}>
          <p className={styles.text}>Initial State</p>
          <div className={styles.start}>
            {
              grid.map((c, idx)=>{
                return (
                  <PuzzleTile key={`initialState${idx}`} c={c} idx={idx} size={'sm'}/>
                )
              })
            }
          </div>
        </div>
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
        <div className={styles.state}>
          <p className={styles.text}>Solved State</p>
          <div className={styles.end}>
            {
              grid.map((c, idx)=>{
                return (
                  <PuzzleTile key={`solvedState${idx}`} c={c} idx={idx} size={'sm'}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
