import React, { useEffect, useState } from 'react';
import "./Mario.scss"
import marioImg from "./mario.png"
import diamondImg from "./diamond.png"
import { toast } from "react-toastify";

const Mario = () => {
    const row = 8;
    const col = 6;

    // simulation
    const [position, setPosition] = useState({
        x: 3,
        y: 7
    })

    // console.log("position2: >>>", position)

    const [move, setMove] = useState('')
    const [isStart, setIsStart] = useState(false);

    const isPlay = () => {
        setIsStart(true);
        toast.success("Game Start")
        setPosition({
            x: 3,
            y: 7
        })
    }


    const isStop = () => {
        setIsStart(false);
        toast.error("Game Stop")
    }

    useEffect(() => {
        if (position.x === 4 && position.y === 0) {
            toast.success("You Win")
            setIsStart(false);
            setPosition({
                x: 3,
                y: 7
            })
            setMove("")
        }
    }, [position])


    const moveControll = (e) => {
        // console.log("e: >>>", e.target.value)
        console.log("move >>>", e.key)
        // console.log("position1: >>>", position)

        switch (e.key) {
            case "w":
            case "ArrowUp":
                setMove("w")
                if (position.y === 0) {
                    setPosition(
                        state => ({
                            ...state,
                            y: 0
                        })
                    )
                }
                else if ((position.y === 6 && position.x > 1)) {
                    setPosition(state => ({
                        ...state,
                        y: 6
                    })
                    )
                }
                else if ((position.y === 4 && position.x < 4)) {
                    setPosition(
                        state => ({
                            ...state,
                            y: 4
                        })
                    )
                }
                else if ((position.y === 2 && position.x > 2)) {
                    setPosition(
                        state => ({
                            ...state,
                            y: 2
                        })
                    )
                }
                else {
                    setPosition(
                        state => ({
                            ...state,
                            y: state.y - 1
                        })
                    )
                }
                break;
            case "s":
            case "ArrowDown":
                setMove("s")
                if (position.y === 7) {
                    setPosition(
                        state => ({
                            ...state,
                            y: 7
                        })
                    )
                }
                else if ((position.y === 4 && position.x > 1)) {
                    setPosition(
                        state => ({
                            ...state,
                            y: 4
                        })
                    )
                }
                else if ((position.y === 2 && position.x < 4)) {
                    setPosition(
                        state => ({
                            ...state,
                            y: 2
                        })
                    )
                }
                else if ((position.y === 0 && position.x > 2)) {
                    setPosition(
                        state => ({
                            ...state,
                            y: 0
                        })
                    )
                }
                else {
                    setPosition(
                        state => ({
                            ...state,
                            y: state.y + 1
                        })
                    )
                }

                break;
            case "a":
            case "ArrowLeft":
                setMove("a")
                if (position.x === 0) {
                    setPosition(
                        state => ({
                            ...state,
                            x: 0
                        })
                    )
                }
                else if ((position.y === 3 && position.x === 4)) {
                    setPosition(
                        state => ({
                            ...state,
                            x: 4
                        })
                    )
                }
                else {
                    setPosition(
                        state => ({
                            ...state,
                            x: state.x - 1
                        })
                    )
                }
                break;
            case "d":
            case "ArrowRight":
                setMove("d")
                if (position.x === 5) {
                    setPosition(
                        state => ({
                            ...state,
                            x: 5
                        })
                    )
                }
                else if ((position.y === 5 && position.x === 1)) {
                    setPosition(
                        state => ({
                            ...state,
                            x: 1
                        })
                    )
                }
                else if ((position.y === 1 && position.x === 2)) {
                    setPosition(
                        state => ({
                            ...state,
                            x: 2
                        })
                    )
                }
                else {
                    setPosition(
                        state => ({
                            ...state,
                            x: state.x + 1
                        })
                    )
                }
                break;
            default:
                break;
        }
    }

    return (
        // <input >
        <div className="bai3-container" >
            <div className='Table-Container'>
                <div className="container">
                    {
                        Array(row).fill().map((_, i) => {
                            switch (i) {
                                case 0:
                                    return (
                                        <div className="row row-cols-6 row_customize">
                                            {
                                                Array(col).fill().map((_, j) => {
                                                    if (j === 4) {
                                                        return (
                                                            <div className="col col_customize" >
                                                                <img src={diamondImg} alt="" className="mario-img" />
                                                            </div>
                                                        )
                                                    }
                                                    else if (j === position.x) {
                                                        if (position.y !== 0) {
                                                            return (
                                                                <div className="col col_customize"></div>
                                                            )
                                                        }
                                                        else {
                                                            return (
                                                                <div className="col col_customize" >
                                                                    <img src={marioImg} alt="" className="mario-img" />
                                                                </div>
                                                            )
                                                        }
                                                    }
                                                    else {
                                                        return (
                                                            <div className="col col_customize"></div>
                                                        )
                                                    }
                                                }
                                                )
                                            }
                                        </div>
                                    )
                                case 1:
                                    return (
                                        <div className="row row-cols-6 row_customize">
                                            {
                                                Array(col).fill().map((_, j) => {
                                                    if (j === 3 || j === 4 || j === 5) {
                                                        return (
                                                            <div className="col col_customize" style={{ backgroundColor: "blue" }}></div>
                                                        )
                                                    }
                                                    else if (j === position.x) {
                                                        if (position.y !== 1) {
                                                            return (
                                                                <div className="col col_customize"></div>
                                                            )
                                                        }
                                                        else {
                                                            return (
                                                                <div className="col col_customize" >
                                                                    <img src={marioImg} alt="" className="mario-img" />
                                                                </div>
                                                            )
                                                        }
                                                    }
                                                    else {
                                                        return (
                                                            <div className="col col_customize"></div>
                                                        )
                                                    }
                                                }
                                                )
                                            }
                                        </div>
                                    )
                                case 3:
                                    return (
                                        <div className="row row-cols-6 row_customize">
                                            {
                                                Array(col).fill().map((_, j) => {
                                                    if (j < 4) {
                                                        return (
                                                            <div className="col col_customize" style={{ backgroundColor: "blue" }}></div>
                                                        )
                                                    }
                                                    else if (j === position.x) {
                                                        if (position.y !== 3) {
                                                            return (
                                                                <div className="col col_customize"></div>
                                                            )
                                                        }
                                                        else {
                                                            return (
                                                                <div className="col col_customize" >
                                                                    <img src={marioImg} alt="" className="mario-img" />
                                                                </div>
                                                            )
                                                        }
                                                    }
                                                    else {
                                                        return (
                                                            <div className="col col_customize"></div>
                                                        )
                                                    }
                                                }
                                                )
                                            }
                                        </div>
                                    )
                                case 5:
                                    return (
                                        <div className="row row-cols-6 row_customize">
                                            {
                                                Array(col).fill().map((_, j) => {
                                                    if (j > 1) {
                                                        return (
                                                            <div className="col col_customize" style={{ backgroundColor: "blue" }}></div>
                                                        )
                                                    }
                                                    else if (j === position.x) {
                                                        if (position.y !== 5) {
                                                            return (
                                                                <div className="col col_customize"></div>
                                                            )
                                                        }
                                                        else {
                                                            return (
                                                                <div className="col col_customize" >
                                                                    <img src={marioImg} alt="" className="mario-img" />
                                                                </div>
                                                            )
                                                        }
                                                    }
                                                    else {
                                                        return (
                                                            <div className="col col_customize"></div>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    )

                                case position.y:
                                    return (
                                        <div className="row row-cols-6 row_customize">
                                            {
                                                Array(col).fill().map((_, j) => {
                                                    if (j === position.x) {
                                                        return (
                                                            <div className="col col_customize" >
                                                                <img src={marioImg} alt="" className="mario-img" />
                                                            </div>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <div className="col col_customize"></div>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    )

                                default:
                                    return (
                                        (
                                            <div className="row row-cols-6 row_customize">
                                                {
                                                    Array(col).fill().map((_, j) => (
                                                        <div className="col col_customize"></div>
                                                    ))
                                                }
                                            </div>
                                        )
                                    )
                            }
                        })
                    }
                </div>
            </div>
            <div className='Control-Container'>
                <div className='Control-Container-Item'>

                    <div className={move === 'w' ? 'btn-up btn-active' : 'btn-up'} >Move Up</div>
                    <div className={move === 's' ? 'btn-down btn-active' : 'btn-down'} >Move Down</div>
                    <div className={move === 'a' ? 'btn-left btn-active' : 'btn-left'} >Move Left</div>
                    <div className={move === 'd' ? 'btn-right btn-active' : 'btn-right'} >Move Right</div>
                </div>
                <div className='Control-Container-Btn'>
                    {
                        isStart === false ?
                            <button
                                className='Control-Container-Btn-Item btn-success btn'
                                autoFocus
                                onClick={() => isPlay()}
                            >Start
                            </button>
                            :
                            <button
                                id='myDiv'
                                className='Control-Container-Btn-Item btn-danger btn'
                                onClick={() => isStop()}
                                onKeyDown={(e) => moveControll(e)}
                                tabIndex="-1"
                            >Stop
                            </button>
                    }
                </div>
            </div>
        </div >
    );
}

export default Mario;