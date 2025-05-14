'useClient';
import styles from "./puzzle_tile.module.css";
import React, { useState } from 'react';

export default function PuzzleTile(params) {

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

    const sizes = {
        'sm': styles.smallGrid,
        'md': styles.mediumGrid,
        'lg': styles.largeGrid
    }

    const c = params.c
    const idx = params.idx
    const size = params.size || 'lg'

    return (
        <div className={`${styles.gridItemBorder} ${corner[idx]}`} key={`interactive-${idx}`}>
            <div className={`${styles.gridItem} ${color_rules[c.color].style_color} ${corner[idx]} ${sizes[size]}`} onClick={() => {params.pressed(true)}} key={`interactive-button-${idx}`}></div>
        </div>
    )
}