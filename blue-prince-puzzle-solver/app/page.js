'use client';
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

  const corner = [
    styles.top_left,
    styles.normal,
    styles.top_right,
    styles.normal,
    styles.normal,
    styles.normal,
    styles.bottom_left,
    styles.normal,
    styles.bottom_right
  ]

  const color_rules = [
    {color:'White', style_color: styles.white, rules:'Change nearby Gray -> White, if none becomes Gray'},
    {color:'Gray', style_color: styles.gray, rules:'Nothing'},
    {color:'Black', style_color: styles.black, rules:'Moves tile in row to the right'},
    {color:'Red', style_color: styles.red, rules:'Changes White -> Black, Black -> Red'},
    {color:'Green', style_color: styles.green, rules:'Swaps with tile across'},
    {color:'Yellow', style_color: styles.yellow, rules:'Swaps with tile above'},
    {color:'Purple', style_color: styles.purple, rules:'Swaps with tile below'},
    {color:'Pink', style_color: styles.pink, rules:'Rotates everything around it clockwise'},
    {color:'Orange', style_color: styles.orange, rules:'Becomes majority adjacent color, nothing if none'},
    {color:'Blue', style_color: styles.blue, rules:'Copies tile in the middle space'},
  ]

  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div className={styles.page}>
          {
            grid.map((c, idx)=>{
              return (
                <div className={`${styles.gridItemBorder} ${corner[idx]}`} key={`interactive-${idx}`}>
                  <div onClick={() => {console.log(c.color)}} key={`interactive-button-${idx}`} className={`${styles.gridItem} ${color_rules[c.color].style_color} ${corner[idx]}`}></div>
                </div>
              )
            })
          }
        </div>
        <div className={styles.rules}>
          {
            color_rules.map((c, idx)=>{
              return(
                <p className={styles.text} key={`${c.color}-rules`}><em className={c.style_color}>||||</em> : {c.rules}</p>
              )
            })
          }
        </div>
      </div>
      <div className={styles.actionSequence}>
        <div  className={styles.state}>
          <p className={styles.text}>Initial State</p>
          <div className={styles.start}>
            {
              grid.map((c, idx)=>{
                return (
                  <div className={`${styles.gridItemBorder} ${corner[idx]}`} key={`start-state-${idx}`}>
                    <div onClick={() => {console.log(c.color)}} key={`start-state-button-${idx}`} className={`${styles.startGridItem} ${color_rules[c.color].style_color} ${corner[idx]}`}></div>
                  </div>
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
                  <div className={`${styles.gridItemBorder} ${corner[idx]}`} key={`solved-state-${idx}`}>
                    <div onClick={() => {console.log(c.color)}} key={`solved-state-button-${idx}`} className={`${styles.endGridItem} ${color_rules[c.color].style_color} ${corner[idx]}`}></div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
